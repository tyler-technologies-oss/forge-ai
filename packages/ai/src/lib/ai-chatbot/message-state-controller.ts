import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { ChatMessage, MessageItem, ToolCall, ToolDefinition, StreamEvent } from './types.js';
import type {
  MessageStartEvent,
  MessageDeltaEvent,
  MessageEndEvent,
  ToolCallStartEvent,
  ToolCallArgsEvent,
  ToolCallEndEvent,
  ToolResultEvent
} from './agent-adapter.js';

export interface MessageStateControllerConfig {
  tools: Map<string, ToolDefinition>;
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
  }

  public addMessageItem(item: MessageItem): void {
    this._messageItems = [...this._messageItems, item];
    this.#notifyStateChange();
  }

  public addMessage(message: ChatMessage, event?: MessageStartEvent): void {
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
  }

  public addToolCall(toolCall: ToolCall, event?: ToolCallStartEvent): void {
    this._toolCalls.set(toolCall.id, toolCall);
    this.addMessageItem({ type: 'toolCall', data: toolCall });

    if (event) {
      this.#appendEventToToolCall(toolCall.id, {
        type: 'tool-call-start',
        timestamp: Date.now(),
        data: event,
        rawEvent: event.rawEvent
      });
    }
  }

  public updateToolCall(
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

    this._messageItems = this._messageItems.map(item => {
      if (item.type === 'toolCall' && item.data.id === toolCallId) {
        return { ...item, data: updated };
      }
      return item;
    });

    if (eventData) {
      if (eventData.eventType === 'tool-call-args') {
        const argsEvent = eventData.event as ToolCallArgsEvent;
        this.#appendEventToToolCall(toolCallId, {
          type: 'tool-call-args',
          timestamp: Date.now(),
          data: argsEvent,
          rawEvent: argsEvent.rawEvent
        });
      } else {
        const endEvent = eventData.event as ToolCallEndEvent;
        this.#appendEventToToolCall(toolCallId, {
          type: 'tool-call-end',
          timestamp: Date.now(),
          data: endEvent,
          rawEvent: endEvent.rawEvent
        });
      }
    }

    this.#notifyStateChange();
  }

  public appendToMessage(id: string, content: string, event?: MessageDeltaEvent): void {
    this._messageItems = this._messageItems.map(item => {
      if (item.type === 'message' && item.data.id === id) {
        return { ...item, data: { ...item.data, content: item.data.content + content } };
      }
      return item;
    });

    if (event) {
      this.#appendEventToMessage(id, {
        type: 'message-delta',
        timestamp: Date.now(),
        data: event,
        rawEvent: event.rawEvent
      });
    }

    this.#notifyStateChange();
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

  /**
   * Reconstructs the message hierarchy by grouping tool calls under their parent messages.
   *
   * messageItems stores messages and tool calls in a flat, chronologically ordered list.
   * This method rebuilds the hierarchical structure where each message contains its tool calls.
   */
  public getMessages(): ChatMessage[] {
    const messageMap = new Map<string, ChatMessage>();
    const messageOrder: string[] = [];

    // Extract all messages, track their order, initialize empty toolCalls arrays
    for (const item of this._messageItems) {
      if (item.type === 'message') {
        const msg = { ...item.data, toolCalls: [] };
        messageMap.set(msg.id, msg);
        messageOrder.push(msg.id);
      }
    }

    // Find tool calls and append them to their parent message's toolCalls array
    for (const item of this._messageItems) {
      if (item.type === 'toolCall') {
        const parentMsg = messageMap.get(item.data.messageId);
        if (parentMsg) {
          parentMsg.toolCalls = [...(parentMsg.toolCalls || []), item.data];
        }
      }
    }

    // Return messages in original order with tool calls grouped under each message
    return messageOrder.map(id => messageMap.get(id)).filter((msg): msg is ChatMessage => msg !== undefined);
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

  #appendEventToToolCall(id: string, event: StreamEvent): void {
    const toolCall = this._toolCalls.get(id);
    if (!toolCall) {
      return;
    }

    const eventStream = [...(toolCall.eventStream || []), event];
    const updated = { ...toolCall, eventStream };
    this._toolCalls.set(id, updated);

    this._messageItems = this._messageItems.map(item => {
      if (item.type === 'toolCall' && item.data.id === id) {
        return { ...item, data: updated };
      }
      return item;
    });

    this.#notifyStateChange();
  }

  public completeToolCall(toolCallId: string, result: unknown, event?: ToolResultEvent): void {
    this.updateToolCall(toolCallId, {
      result,
      status: 'complete'
    });

    if (event) {
      this.#appendEventToToolCall(toolCallId, {
        type: 'tool-result',
        timestamp: Date.now(),
        data: event,
        rawEvent: event.rawEvent
      });
    }

    this.#tryReorderAssistantMessage(toolCallId);
  }

  /**
   * Reorders the assistant message associated with the tool call to appear after the tool call.
   *
   * This can happen when tool calls come in before the assistant message is sent, which can
   * cause the messages and tool calls to appear out of order otherwise.
   *
   * @param toolCallId The ID of the tool call whose assistant message should be reordered.
   */
  #tryReorderAssistantMessage(toolCallId: string): void {
    const toolCall = this._toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    const msgIdx = this._messageItems.findIndex(i => i.type === 'message' && i.data.id === toolCall.messageId);
    if (msgIdx === -1) {
      return;
    }

    const msgItem = this._messageItems[msgIdx];
    if (msgItem.type !== 'message' || msgItem.data.content.trim()) {
      return;
    }

    const toolIdx = this._messageItems.findIndex(i => i.type === 'toolCall' && i.data.id === toolCallId);
    if (toolIdx === -1 || toolIdx <= msgIdx) {
      return;
    }

    const [msg] = this._messageItems.splice(msgIdx, 1);
    this._messageItems.splice(toolIdx, 0, msg);
    this.#notifyStateChange();
  }
}
