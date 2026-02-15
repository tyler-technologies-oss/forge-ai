import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type {
  ChatMessage,
  MessageItem,
  ToolCall,
  ToolDefinition,
  StreamEvent,
  AssistantResponse,
  ResponseItem,
  ResponseFeedback
} from './types.js';
import type {
  MessageStartEvent,
  MessageDeltaEvent,
  MessageEndEvent,
  ToolCallStartEvent,
  ToolCallArgsEvent,
  ToolCallEndEvent,
  ToolResultEvent
} from './agent-adapter.js';
import { generateId } from './utils.js';

export interface MessageStateControllerConfig {
  tools: Map<string, ToolDefinition>;
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

  public addTextToResponse(messageId: string, content: string, event?: MessageStartEvent): void {
    const response = this._activeResponse ?? this.startResponse();

    const existingIdx = response.children.findIndex(c => c.type === 'text' && c.messageId === messageId);

    if (existingIdx >= 0) {
      const child = response.children[existingIdx];
      if (child.type === 'text') {
        child.content = content;
      }
    } else {
      response.children.push({ type: 'text', messageId, content, status: 'streaming' });
    }

    if (event) {
      this.#appendEventToResponse({
        type: 'message-start',
        timestamp: Date.now(),
        data: event,
        rawEvent: event.rawEvent
      });
    }

    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public appendTextDelta(messageId: string, delta: string, event?: MessageDeltaEvent): void {
    const response = this._activeResponse ?? this.startResponse();

    const textChild = response.children.find(c => c.type === 'text' && c.messageId === messageId);

    if (textChild && textChild.type === 'text') {
      textChild.content += delta;
    } else {
      response.children.push({ type: 'text', messageId, content: delta, status: 'streaming' });
    }

    if (event) {
      this.#appendEventToResponse({
        type: 'message-delta',
        timestamp: Date.now(),
        data: event,
        rawEvent: event.rawEvent
      });
    }

    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public markTextComplete(messageId: string, event?: MessageEndEvent): void {
    if (!this._activeResponse) {
      return;
    }

    const textChild = this._activeResponse.children.find(c => c.type === 'text' && c.messageId === messageId);

    if (textChild && textChild.type === 'text') {
      textChild.status = 'complete';
    }

    if (event) {
      this.#appendEventToResponse({
        type: 'message-end',
        timestamp: Date.now(),
        data: event,
        rawEvent: event.rawEvent
      });
    }

    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public addToolCallToResponse(toolCall: ToolCall, event?: ToolCallStartEvent): void {
    const response = this._activeResponse ?? this.startResponse();

    this._toolCalls.set(toolCall.id, toolCall);
    response.children.push({ type: 'toolCall', data: toolCall });

    if (event) {
      const streamEvent = {
        type: 'tool-call-start' as const,
        timestamp: Date.now(),
        data: event,
        rawEvent: event.rawEvent
      };
      this.#appendEventToResponse(streamEvent);
      this.#appendEventToToolCallInResponse(toolCall.id, streamEvent);
    }

    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public updateToolCallInResponse(
    toolCallId: string,
    updates: Partial<ToolCall>,
    eventData?: {
      eventType: 'tool-call-args' | 'tool-call-end';
      event: ToolCallArgsEvent | ToolCallEndEvent;
    }
  ): void {
    const toolCall = this._toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    const updated = { ...toolCall, ...updates };
    this._toolCalls.set(toolCallId, updated);

    if (this._activeResponse) {
      for (const child of this._activeResponse.children) {
        if (child.type === 'toolCall' && child.data.id === toolCallId) {
          child.data = updated;
          break;
        }
      }
    }

    if (eventData) {
      if (eventData.eventType === 'tool-call-args') {
        const argsEvent = eventData.event as ToolCallArgsEvent;
        const streamEvent = {
          type: 'tool-call-args' as const,
          timestamp: Date.now(),
          data: argsEvent,
          rawEvent: argsEvent.rawEvent
        };
        this.#appendEventToResponse(streamEvent);
        this.#appendEventToToolCallInResponse(toolCallId, streamEvent);
      } else {
        const endEvent = eventData.event as ToolCallEndEvent;
        const streamEvent = {
          type: 'tool-call-end' as const,
          timestamp: Date.now(),
          data: endEvent,
          rawEvent: endEvent.rawEvent
        };
        this.#appendEventToResponse(streamEvent);
        this.#appendEventToToolCallInResponse(toolCallId, streamEvent);
      }
    }

    this.#updateResponseInItems();
    this.#notifyStateChange();
  }

  public completeToolCallInResponse(toolCallId: string, result: unknown, event?: ToolResultEvent): void {
    this.updateToolCallInResponse(toolCallId, {
      result,
      status: 'complete'
    });

    if (event) {
      const streamEvent = {
        type: 'tool-result' as const,
        timestamp: Date.now(),
        data: event,
        rawEvent: event.rawEvent
      };
      this.#appendEventToResponse(streamEvent);
      this.#appendEventToToolCallInResponse(toolCallId, streamEvent);
    }
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

  #appendEventToResponse(event: StreamEvent): void {
    if (!this._activeResponse) {
      return;
    }

    this._activeResponse.eventStream = [...(this._activeResponse.eventStream || []), event];
  }

  #appendEventToToolCallInResponse(toolCallId: string, event: StreamEvent): void {
    const toolCall = this._toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    const eventStream = [...(toolCall.eventStream || []), event];
    const updated = { ...toolCall, eventStream };
    this._toolCalls.set(toolCallId, updated);

    if (this._activeResponse) {
      for (const child of this._activeResponse.children) {
        if (child.type === 'toolCall' && child.data.id === toolCallId) {
          child.data = updated;
          break;
        }
      }
    }
  }

  #notifyStateChange(): void {
    this._host.requestUpdate();
  }

  public addMessageItem(item: MessageItem): void {
    this._messageItems = [...this._messageItems, item];
    this.#notifyStateChange();
  }

  public addMessage(message: ChatMessage, event?: MessageStartEvent): void {
    this.tryFinalizeResponse();

    const existing = this.getMessage(message.id);
    if (existing) {
      return;
    }
    this.addMessageItem({ type: 'message', data: message });

    if (event) {
      this.#appendEventToMessage(message.id, {
        type: 'message-start',
        timestamp: Date.now(),
        data: event,
        rawEvent: event.rawEvent
      });
    }

    if (message.status === 'complete') {
      this._config.onThreadSettled?.();
    }
  }

  public getMessage(id: string): ChatMessage | undefined {
    const item = this._messageItems.find(i => i.type === 'message' && i.data.id === id);
    return item?.type === 'message' ? item.data : undefined;
  }

  public updateMessageStatus(id: string, status: ChatMessage['status'], event?: MessageEndEvent): void {
    this._messageItems = this._messageItems.map(item => {
      if (item.type === 'message' && item.data.id === id) {
        return { ...item, data: { ...item.data, status } };
      }
      return item;
    });

    if (event) {
      this.#appendEventToMessage(id, {
        type: 'message-end',
        timestamp: Date.now(),
        data: event,
        rawEvent: event.rawEvent
      });
    }

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
          eventStream: response.eventStream,
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
          eventStream: msg.eventStream,
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

  #appendEventToMessage(id: string, event: StreamEvent): void {
    const messageExists = this._messageItems.some(item => item.type === 'message' && item.data.id === id);
    if (!messageExists) {
      return;
    }

    this._messageItems = this._messageItems.map(item => {
      if (item.type === 'message' && item.data.id === id) {
        const eventStream = [...(item.data.eventStream || []), event];
        return { ...item, data: { ...item.data, eventStream } };
      }
      return item;
    });
    this.#notifyStateChange();
  }
}
