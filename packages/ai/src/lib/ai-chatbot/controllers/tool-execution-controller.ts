import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { ToolCall } from '../types.js';

export interface ToolExecutionCallbacks {
  onToolUpdate: () => void;
  onToolExecute: (toolCall: ToolCall) => void;
}

/**
 * Reactive controller for managing tool execution state
 */
export class ToolExecutionController implements ReactiveController {
  #host: ReactiveControllerHost;
  #toolCalls = new Map<string, ToolCall>();
  #callbacks: ToolExecutionCallbacks;

  constructor(host: ReactiveControllerHost, callbacks: ToolExecutionCallbacks) {
    this.#host = host;
    this.#callbacks = callbacks;
    host.addController(this);
  }

  public hostConnected(): void {}

  public hostDisconnected(): void {
    this.clear();
  }

  /**
   * Starts a new tool call
   */
  public startTool(toolCallId: string, messageId: string, toolName: string): ToolCall {
    const toolCall: ToolCall = {
      id: toolCallId,
      messageId,
      name: toolName,
      args: {},
      argsBuffer: '',
      status: 'pending'
    };

    this.#toolCalls.set(toolCallId, toolCall);
    this.#notifyUpdate();
    return toolCall;
  }

  /**
   * Updates tool arguments (streaming)
   */
  public updateToolArgs(toolCallId: string, argsChunk?: string, args?: Record<string, unknown>): void {
    const toolCall = this.#toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    if (argsChunk) {
      toolCall.argsBuffer += argsChunk;
    }

    if (args) {
      toolCall.args = args;
    }

    this.#notifyUpdate();
  }

  /**
   * Finalizes tool arguments and triggers execution
   */
  public finalizeTool(toolCallId: string): void {
    const toolCall = this.#toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    // Parse args buffer if we don't have args yet
    if (toolCall.argsBuffer && !Object.keys(toolCall.args).length) {
      try {
        toolCall.args = JSON.parse(toolCall.argsBuffer);
      } catch (e) {
        console.error('Failed to parse tool args:', e);
        toolCall.args = {};
      }
    }

    toolCall.status = 'executing';
    this.#notifyUpdate();
    this.#callbacks.onToolExecute(toolCall);
  }

  /**
   * Marks a tool call as complete with result
   */
  public completeTool(toolCallId: string, result: unknown): void {
    const toolCall = this.#toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    toolCall.result = result;
    toolCall.status = 'complete';
    this.#notifyUpdate();
  }

  /**
   * Marks a tool call as failed
   */
  public failTool(toolCallId: string, error: string): void {
    const toolCall = this.#toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    toolCall.result = { error };
    toolCall.status = 'error';
    this.#notifyUpdate();
  }

  /**
   * Gets a tool call by ID
   */
  public getTool(toolCallId: string): ToolCall | undefined {
    return this.#toolCalls.get(toolCallId);
  }

  /**
   * Gets all tool calls as an array, optionally filtered by message ID
   */
  public getToolsArray(messageId?: string): ToolCall[] {
    const tools = Array.from(this.#toolCalls.values());
    const filtered = messageId ? tools.filter(tool => tool.messageId === messageId) : tools;
    return filtered.map(tool => ({ ...tool }));
  }

  /**
   * Clears all tool calls
   */
  public clear(): void {
    this.#toolCalls.clear();
    this.#notifyUpdate();
  }

  #notifyUpdate(): void {
    this.#callbacks.onToolUpdate();
    this.#host.requestUpdate();
  }
}
