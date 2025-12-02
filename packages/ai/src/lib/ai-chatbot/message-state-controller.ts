import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { ChatMessage, MessageItem, ToolCall, ToolDefinition } from './types.js';

export interface MessageStateControllerConfig {
  tools: Map<string, ToolDefinition>;
  /** Called after any operation that modifies message state */
  onStateChange?: (messageItems: MessageItem[]) => void;
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

  #notifyStateChange(): void {
    this._host.requestUpdate();
    this._config.onStateChange?.(this._messageItems);
  }

  public addMessageItem(item: MessageItem): void {
    this._messageItems = [...this._messageItems, item];
    this.#notifyStateChange();
  }

  public addMessage(message: ChatMessage): void {
    this.addMessageItem({ type: 'message', data: message });
  }

  public addToolCall(toolCall: ToolCall): void {
    this._toolCalls.set(toolCall.id, toolCall);
    this.addMessageItem({ type: 'toolCall', data: toolCall });
  }

  public updateToolCall(toolCallId: string, updates: Partial<ToolCall>): void {
    const toolCall = this._toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    const updated = { ...toolCall, ...updates };
    this._toolCalls.set(toolCallId, updated);

    this._messageItems = this._messageItems.map(item => {
      if (item.type === 'toolCall' && item.data.id === toolCallId) {
        return { ...item, data: updated };
      }
      return item;
    });

    this.#notifyStateChange();
  }

  public appendToMessage(id: string, content: string): void {
    this._messageItems = this._messageItems.map(item => {
      if (item.type === 'message' && item.data.id === id) {
        return { ...item, data: { ...item.data, content: item.data.content + content } };
      }
      return item;
    });
    this.#notifyStateChange();
  }

  public getMessage(id: string): ChatMessage | undefined {
    const item = this._messageItems.find(i => i.type === 'message' && i.data.id === id);
    return item?.type === 'message' ? item.data : undefined;
  }

  public updateMessageStatus(id: string, status: ChatMessage['status']): void {
    this._messageItems = this._messageItems.map(item => {
      if (item.type === 'message' && item.data.id === id) {
        return { ...item, data: { ...item.data, status } };
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
    this.#notifyStateChange();
  }

  public getMessages(): ChatMessage[] {
    const messages: ChatMessage[] = [];
    let currentMessage: ChatMessage | null = null;

    for (const item of this._messageItems) {
      if (item.type === 'message') {
        if (currentMessage) {
          messages.push(currentMessage);
        }
        currentMessage = { ...item.data, toolCalls: [] };
      } else if (item.type === 'toolCall' && currentMessage?.id === item.data.messageId) {
        currentMessage.toolCalls = [...(currentMessage.toolCalls || []), item.data];
      }
    }

    if (currentMessage) {
      messages.push(currentMessage);
    }

    return messages;
  }

  public setMessages(messages: ChatMessage[]): void {
    const messageItems: MessageItem[] = [];
    this._toolCalls.clear();

    for (const msg of messages) {
      messageItems.push({ type: 'message', data: { ...msg, toolCalls: undefined } });

      if (msg.toolCalls) {
        for (const toolCall of msg.toolCalls) {
          messageItems.push({ type: 'toolCall', data: toolCall });
          this._toolCalls.set(toolCall.id, toolCall);
        }
      }
    }

    this._messageItems = messageItems;
    this.#notifyStateChange();
  }

  public completeToolCall(toolCallId: string, result: unknown): void {
    this.updateToolCall(toolCallId, {
      result,
      status: 'complete'
    });
  }
}
