import type { ChatMessage, ToolCall } from './types.js';

/**
 * Wire shape for a tool call sent back to an agent endpoint: the final `args`
 * and its `result`, and nothing else. Local-only fields (`eventStream`,
 * `argsBuffer`, `children`, timing metadata) are deliberately absent - no
 * backend reads them and they grow without bound across turns.
 */
export interface RequestToolCall {
  id: string;
  name: string;
  args: Record<string, unknown>;
  status: ToolCall['status'];
  result?: unknown;
}

/** Wire shape for a single message sent to an agent endpoint. */
export interface RequestMessage {
  role: ChatMessage['role'];
  content: string;
  toolCallId?: string;
  toolCalls?: RequestToolCall[];
}

/**
 * Projects a tool call onto its wire shape. This is the single boundary at which
 * local state is dropped, so adapters never have to remember to omit it.
 */
export function toRequestToolCall(toolCall: ToolCall): RequestToolCall {
  const { id, name, args, status, result } = toolCall;
  return {
    id,
    name,
    args,
    status,
    ...(result === undefined ? {} : { result })
  };
}

/**
 * Projects the thread onto the messages an agent endpoint is sent: client-only
 * messages and empty assistant turns are dropped, and every remaining message is
 * rebuilt field by field rather than spread, so no local state can leak into a
 * request body.
 */
export function toRequestMessages(messages: ChatMessage[]): RequestMessage[] {
  return messages.filter(isSendableMessage).map(message => ({
    role: message.role,
    content: message.content,
    ...(message.toolCallId ? { toolCallId: message.toolCallId } : {}),
    ...(message.toolCalls?.length ? { toolCalls: message.toolCalls.map(toRequestToolCall) } : {})
  }));
}

function isSendableMessage(message: ChatMessage): boolean {
  if (message.clientOnly) {
    return false;
  }
  if (message.role === 'assistant') {
    return message.content.trim().length > 0 || !!message.toolCalls?.length;
  }
  return true;
}
