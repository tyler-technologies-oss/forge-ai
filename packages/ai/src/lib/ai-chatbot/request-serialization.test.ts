import { expect } from '@open-wc/testing';
import { toRequestMessages, toRequestToolCall } from './request-serialization.js';
import type { ChatMessage, ToolCall } from './types.js';

/**
 * Stands in for the ~1,400 delta events a large `displayDataTable` render used to
 * capture. `eventStream` is no longer a field on `ToolCall`, but a thread
 * persisted by an older version still carries it and `setMessages` will put it
 * straight back onto the record - so the serializer must still drop it.
 */
function createStaleEventStream(eventCount: number, argsChunk: string): unknown[] {
  return Array.from({ length: eventCount }, (_, index) => ({
    type: 'tool-call-args',
    timestamp: 1788285095014 + index,
    data: { id: 'tooluse_0EAQ8', messageId: 'msg-1', name: 'displayDataTable', argsBuffer: argsChunk },
    rawEvent: { type: 'tool-call-delta', payload: { argsTextDelta: argsChunk, toolCallId: 'tooluse_0EAQ8' } }
  }));
}

function createCompletedToolCall(): ToolCall {
  const args = { title: 'OData Business Domains', rows: 'x'.repeat(9_800) };
  return {
    id: 'tooluse_0EAQ8',
    messageId: 'msg-1',
    name: 'displayDataTable',
    args,
    argsBuffer: JSON.stringify(args),
    result: 'Table rendered',
    status: 'complete',
    type: 'client',
    startTimestamp: 1788285095014,
    endTimestamp: 1788285096014,
    eventStream: createStaleEventStream(1_400, 'a'.repeat(500))
  } as ToolCall;
}

function createThread(toolCallsPerTurn: number): ChatMessage[] {
  const messages: ChatMessage[] = [
    { id: 'u1', role: 'user', content: 'show me the odata domains', timestamp: 1, status: 'complete' }
  ];

  for (let turn = 0; turn < toolCallsPerTurn; turn++) {
    messages.push({
      id: `a${turn}`,
      role: 'assistant',
      content: 'Here is the table.',
      timestamp: 2 + turn,
      status: 'complete',
      toolCalls: [{ ...createCompletedToolCall(), id: `tooluse_${turn}` }],
      eventStream: createStaleEventStream(1_400, 'a'.repeat(500))
    } as ChatMessage);
  }

  return messages;
}

describe('request serialization', () => {
  describe('toRequestToolCall', () => {
    it('should keep only the wire fields', () => {
      const toolCall = createCompletedToolCall();

      const result = toRequestToolCall(toolCall);

      expect(Object.keys(result).sort()).to.deep.equal(['args', 'id', 'name', 'result', 'status']);
      expect(result.args).to.deep.equal(toolCall.args);
      expect(result.result).to.equal('Table rendered');
    });

    it('should omit result when the tool call has not produced one', () => {
      const toolCall: ToolCall = {
        id: 'tc-1',
        messageId: 'msg-1',
        name: 'displayDataTable',
        args: {},
        status: 'executing',
        type: 'client'
      };

      expect('result' in toRequestToolCall(toolCall)).to.be.false;
    });
  });

  describe('toRequestMessages', () => {
    it('should drop client-only messages', () => {
      const messages: ChatMessage[] = [
        { id: 'u1', role: 'user', content: 'hi', timestamp: 1, status: 'complete' },
        { id: 'c1', role: 'system', content: 'reconnecting', timestamp: 2, status: 'complete', clientOnly: true }
      ];

      const result = toRequestMessages(messages);

      expect(result).to.have.lengthOf(1);
      expect(result[0].role).to.equal('user');
    });

    it('should drop empty assistant messages but keep ones carrying only tool calls', () => {
      const messages: ChatMessage[] = [
        { id: 'a1', role: 'assistant', content: '   ', timestamp: 1, status: 'complete' },
        {
          id: 'a2',
          role: 'assistant',
          content: '',
          timestamp: 2,
          status: 'complete',
          toolCalls: [createCompletedToolCall()]
        }
      ];

      const result = toRequestMessages(messages);

      expect(result).to.have.lengthOf(1);
      expect(result[0].toolCalls).to.have.lengthOf(1);
    });

    it('should preserve tool result messages with their toolCallId', () => {
      const messages: ChatMessage[] = [
        { id: 't1', role: 'tool', content: '"ok"', timestamp: 1, status: 'complete', toolCallId: 'tc-1' }
      ];

      expect(toRequestMessages(messages)[0].toolCallId).to.equal('tc-1');
    });
  });

  describe('regression guard: /stream request body', () => {
    it('should not serialize stale eventStream or argsBuffer for a completed client tool call', () => {
      const body = JSON.stringify({ messages: toRequestMessages(createThread(1)) });

      expect(body).to.not.include('eventStream');
      expect(body).to.not.include('argsBuffer');
      expect(body).to.not.include('rawEvent');
    });

    it('should keep the body under 50KB after a render with ~10KB of args', () => {
      const body = JSON.stringify({ messages: toRequestMessages(createThread(1)) });

      expect(body.length).to.be.lessThan(50_000);
    });

    it('should grow linearly with the number of tool calls, not quadratically', () => {
      const sizes = [1, 2, 3].map(
        toolCalls => JSON.stringify({ messages: toRequestMessages(createThread(toolCalls)) }).length
      );
      const [first, second, third] = sizes;

      // Each additional tool call adds roughly one args payload, so the
      // increments stay flat instead of compounding.
      const firstIncrement = second - first;
      const secondIncrement = third - second;
      expect(secondIncrement).to.be.closeTo(firstIncrement, 200);
      expect(third).to.be.lessThan(50_000);
    });
  });
});
