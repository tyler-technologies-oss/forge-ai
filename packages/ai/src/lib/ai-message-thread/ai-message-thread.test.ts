import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import type { ChatMessage, MessageItem } from '../ai-chatbot/types.js';
import { AiMessageThreadComponent } from './ai-message-thread.js';

import './ai-message-thread.js';

const CONTENT = 'Cost<Budget Review Q3';

function createMessage(overrides: Partial<ChatMessage>): MessageItem {
  return {
    type: 'message',
    data: { id: 'm1', role: 'assistant', content: CONTENT, timestamp: 0, status: 'complete', ...overrides }
  };
}

async function renderedText(item: MessageItem): Promise<string> {
  const el = await fixture<AiMessageThreadComponent>(
    html`<forge-ai-message-thread .messageItems=${[item]}></forge-ai-message-thread>`
  );
  return el.shadowRoot!.querySelector('.message-thread')?.textContent?.replace(/\s+/g, ' ') ?? '';
}

describe('AiMessageThreadComponent markdown streaming', () => {
  [
    ['a complete assistant message', { status: 'complete' as const }],
    ['an error message', { status: 'error' as const }],
    ['a user message', { role: 'user' as const }]
  ].forEach(([label, overrides]) => {
    it(`should keep text after a "<" in ${label}`, async () => {
      expect(await renderedText(createMessage(overrides))).to.contain(CONTENT);
    });
  });

  ['streaming', 'pending'].forEach(status => {
    it(`should repair partial markup in a ${status} assistant message`, async () => {
      const text = await renderedText(createMessage({ status: status as ChatMessage['status'] }));

      expect(text).to.contain('Cost');
      expect(text).not.to.contain(CONTENT);
    });
  });
});
