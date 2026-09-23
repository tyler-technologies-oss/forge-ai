import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type {
  ChatMessage,
  ClientMessageInput,
  MessageItem,
  ToolCall,
  AssistantResponse,
  ResponseItem,
  ResponseFeedback
} from './types.js';
import type { ToolResultEvent } from './agent-adapter.js';
import { generateId } from './utils.js';

export interface MessageStateControllerConfig {
  onThreadSettled?: () => void;
}

/**
 * Reactive controller that manages message and tool call state for the chatbot.
 *
 * Responsibilities:
 * - Maintains ordered list of messages and tool calls (messageItems)
 * - Tracks tool call state and lifecycle
 * - Provides CRUD operations for messages
 * - Triggers host re-renders when state changes
 */
export class MessageStateController implements ReactiveController {
  private _messageItems: MessageItem[] = [];
  private _toolCalls = new Map<string, ToolCall>();
  private _activeResponse: AssistantResponse | null = null;

  constructor(
    private _host: ReactiveControllerHost,
    private _config: MessageStateControllerConfig
  ) {
    _host.addController(this);
  }

  public hostConnected(): void {}

  public hostDisconnected(): void {
    this._messageItems = [];
    this._toolCalls.clear();
    this._activeResponse = null;
  }

  public updateConfig(config: Partial<MessageStateControllerConfig>): void {
    this._config = { ...this._config, ...config };
  }

  public get messageItems(): MessageItem[] {
    return this._messageItems;
  }

  public getToolCall(id: string): ToolCall | undefined {
    return this._toolCalls.get(id);
  }

  public getActiveResponse(): AssistantResponse | null {
    return this._activeResponse;
  }

  public startResponse(): AssistantResponse {
    if (this._activeResponse) {
      return this._activeResponse;
    }

    const response: AssistantResponse = {
      id: generateId(),
      children: [],
      status: 'streaming',
      timestamp: Date.now()
    };

    this._activeResponse = response;
    this._messageItems = [...this._messageItems, { type: 'assistant', data: response }];
    this.#notifyStateChange();
    return response;
  }

  public markResponseThinking(): void {
    if (!this._activeResponse || this._activeResponse.isThinking) {
      return;
    }
    this._activeResponse.isThinking = true;
    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public clearResponseThinking(): void {
    if (!this._activeResponse || !this._activeResponse.isThinking) {
      return;
    }
    this._activeResponse.isThinking = false;
    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public addTextToResponse(messageId: string, content: string): void {
    const response = this._activeResponse ?? this.startResponse();
    response.isThinking = false;

    const lastChild = response.children[response.children.length - 1];
    if (lastChild?.type === 'text' && lastChild.messageId === messageId) {
      lastChild.content = content;
      lastChild.status = 'streaming';
    } else {
      response.children.push({ type: 'text', messageId, content, status: 'streaming' });
    }

    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public appendTextDelta(messageId: string, delta: string): void {
    const response = this._activeResponse ?? this.startResponse();
    response.isThinking = false;

    const lastChild = response.children[response.children.length - 1];
    if (lastChild?.type === 'text' && lastChild.messageId === messageId) {
      lastChild.content += delta;
    } else {
      response.children.push({ type: 'text', messageId, content: delta, status: 'streaming' });
    }

    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public markTextComplete(messageId: string): void {
    if (!this._activeResponse) {
      return;
    }

    const textChild = [...this._activeResponse.children]
      .reverse()
      .find(c => c.type === 'text' && c.messageId === messageId);

    if (textChild && textChild.type === 'text') {
      textChild.status = 'complete';
    }

    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public addToolCallToResponse(toolCall: ToolCall): void {
    const response = this._activeResponse ?? this.startResponse();
    response.isThinking = false;

    const toolCallWithTimestamp = { ...toolCall, startTimestamp: Date.now() };
    this._toolCalls.set(toolCall.id, toolCallWithTimestamp);
    response.children.push({ type: 'toolCall', data: toolCallWithTimestamp });

    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public updateToolCallInResponse(toolCallId: string, updates: Partial<ToolCall>): void {
    const toolCall = this._toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    const isCompleting = updates.status === 'complete' || updates.status === 'error';
    const updated = {
      ...toolCall,
      ...updates,
      ...(isCompleting && !toolCall.endTimestamp ? { endTimestamp: Date.now() } : {})
    };
    this._toolCalls.set(toolCallId, updated);

    if (this._activeResponse) {
      for (const child of this._activeResponse.children) {
        if (child.type === 'toolCall' && child.data.id === toolCallId) {
          child.data = updated;
          break;
        }
      }
    }

    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public completeToolCallInResponse(toolCallId: string, result: unknown, event?: ToolResultEvent): void {
    this.updateToolCallInResponse(toolCallId, {
      result,
      status: event?.isError === true ? 'error' : 'complete'
    });
  }

  public tryFinalizeResponse(): void {
    if (!this._activeResponse) {
      return;
    }

    this._activeResponse.status = 'complete';
    this.#updateResponseInItems();
    this._activeResponse = null;
    this.#notifyStateChange();
    this._config.onThreadSettled?.();
  }

  #updateResponseInItems(): void {
    const activeResponse = this._activeResponse;
    if (!activeResponse) {
      return;
    }

    this._messageItems = this._messageItems.map(item => {
      if (item.type === 'assistant' && item.data.id === activeResponse.id) {
        return { type: 'assistant', data: { ...activeResponse } };
      }
      return item;
    });
  }

  #notifyStateChange(): void {
    this._host.requestUpdate();
  }

  public addMessageItem(item: MessageItem): void {
    this._messageItems = [...this._messageItems, item];
    this.#notifyStateChange();
  }

  public addMessage(message: ChatMessage): void {
    this.tryFinalizeResponse();

    const existing = this.getMessage(message.id);
    if (existing) {
      return;
    }
    this.addMessageItem({ type: 'message', data: message });

    if (message.status === 'complete' || message.status === 'error') {
      this._config.onThreadSettled?.();
    }
  }

  public getMessage(id: string): ChatMessage | undefined {
    const item = this._messageItems.find(i => i.type === 'message' && i.data.id === id);
    return item?.type === 'message' ? item.data : undefined;
  }

  /**
   * Inserts or upserts a client-only message, never touching `_activeResponse`.
   * Unlike {@link addMessage}, this never finalizes an in-progress response -
   * safe to call while a real reply is streaming.
   */
  public addClientMessage(message: ClientMessageInput): string {
    const id = message.id ?? generateId();
    const chatMessage: ChatMessage = {
      id,
      role: 'system',
      content: message.content,
      timestamp: Date.now(),
      status: 'complete',
      clientOnly: true,
      kind: message.kind,
      header: message.header,
      actions: message.actions
    };

    this._messageItems = [
      ...this._messageItems.filter(item => !(item.type === 'message' && item.data.id === id)),
      { type: 'message', data: chatMessage }
    ];
    this.#notifyStateChange();
    return id;
  }

  /** Removes a client message by id. No-ops if not found. Safe to call at any time. */
  public removeClientMessage(id: string): void {
    const hasMessage = this._messageItems.some(item => item.type === 'message' && item.data.id === id);
    if (!hasMessage) {
      return;
    }
    this._messageItems = this._messageItems.filter(item => !(item.type === 'message' && item.data.id === id));
    this.#notifyStateChange();
  }

  public updateMessageStatus(id: string, status: ChatMessage['status']): void {
    this._messageItems = this._messageItems.map(item => {
      if (item.type === 'message' && item.data.id === id) {
        return { ...item, data: { ...item.data, status } };
      }
      return item;
    });

    this.#notifyStateChange();

    if (status === 'complete' || status === 'error') {
      this._config.onThreadSettled?.();
    }
  }

  public updateMessageContent(id: string, content: string): void {
    this._messageItems = this._messageItems.map(item => {
      if (item.type === 'message' && item.data.id === id) {
        return { ...item, data: { ...item.data, content } };
      }
      return item;
    });
    this.#notifyStateChange();
  }

  public removeMessageItem(index: number): void {
    this._messageItems = this._messageItems.filter((_, i) => i !== index);
    this.#notifyStateChange();
  }

  public clearMessages(): void {
    this._messageItems = [];
    this._toolCalls.clear();
    this._activeResponse = null;
    this.#notifyStateChange();
    this._config.onThreadSettled?.();
  }

  public removeMessageItemsFrom(index: number): void {
    this._messageItems = this._messageItems.slice(0, index);
    this._activeResponse = null;
    this.#notifyStateChange();
  }

  /**
   * Reconstructs the message hierarchy for API compatibility.
   * Converts assistant responses back to ChatMessage format with tool calls.
   */
  public getMessages(): ChatMessage[] {
    const messages: ChatMessage[] = [];

    for (const item of this._messageItems) {
      if (item.type === 'message') {
        messages.push({ ...item.data, toolCalls: [] });
      } else if (item.type === 'assistant') {
        const response = item.data;
        const textContent = response.children
          .filter((c): c is ResponseItem & { type: 'text' } => c.type === 'text')
          .map(c => c.content)
          .join('');

        const toolCalls = response.children
          .filter((c): c is ResponseItem & { type: 'toolCall' } => c.type === 'toolCall')
          .map(c => c.data);

        const message: ChatMessage = {
          id: response.id,
          role: 'assistant',
          content: textContent,
          timestamp: response.timestamp,
          status: response.status === 'streaming' ? 'streaming' : response.status === 'error' ? 'error' : 'complete',
          toolCalls: toolCalls.length ? toolCalls : undefined,
          feedback: response.feedback,
          children: response.children
        };

        messages.push(message);
      } else if (item.type === 'toolCall') {
        const lastMsg = messages[messages.length - 1];
        if (lastMsg && lastMsg.role === 'assistant') {
          lastMsg.toolCalls = [...(lastMsg.toolCalls || []), item.data];
        }
      }
    }

    return messages;
  }

  public setMessages(messages: ChatMessage[]): void {
    const messageItems: MessageItem[] = [];
    this._toolCalls.clear();
    this._activeResponse = null;

    for (const msg of messages) {
      if (msg.role === 'assistant' && msg.status !== 'error') {
        let children: ResponseItem[];

        if (msg.children?.length) {
          children = msg.children.map(child => {
            if (child.type === 'toolCall') {
              this._toolCalls.set(child.data.id, child.data);
            }
            return child;
          });
        } else {
          children = [];
          if (msg.content?.trim()) {
            children.push({ type: 'text', messageId: msg.id, content: msg.content, status: 'complete' });
          }
          if (msg.toolCalls) {
            for (const toolCall of msg.toolCalls) {
              children.push({ type: 'toolCall', data: toolCall });
              this._toolCalls.set(toolCall.id, toolCall);
            }
          }
        }

        const response: AssistantResponse = {
          id: msg.id,
          children,
          status: msg.status === 'streaming' ? 'streaming' : 'complete',
          timestamp: msg.timestamp,
          feedback: msg.feedback
        };

        messageItems.push({ type: 'assistant', data: response });
      } else {
        messageItems.push({ type: 'message', data: { ...msg, toolCalls: undefined } });
      }
    }

    this._messageItems = messageItems;
    this.#notifyStateChange();
  }

  public setResponseFeedback(responseId: string, feedback: ResponseFeedback): void {
    const item = this._messageItems.find(i => i.type === 'assistant' && i.data.id === responseId);
    if (item?.type === 'assistant') {
      item.data.feedback = feedback;
      this.#notifyStateChange();
    }
  }
}
