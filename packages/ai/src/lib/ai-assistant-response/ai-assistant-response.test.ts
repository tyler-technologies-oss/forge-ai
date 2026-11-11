import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import type { AssistantResponse } from '../ai-chatbot/types.js';
import { AiAssistantResponseComponent } from './ai-assistant-response.js';

import './ai-assistant-response.js';

const CONTENT = 'Cost<Budget Review Q3';

function createResponse(
  responseStatus: AssistantResponse['status'],
  chunkStatus: 'streaming' | 'complete'
): AssistantResponse {
  return {
    id: 'r1',
    status: responseStatus,
    timestamp: 0,
    children: [{ type: 'text', messageId: 'm1', content: CONTENT, status: chunkStatus }]
  };
}

async function renderedText(response: AssistantResponse): Promise<string> {
  const el = await fixture<AiAssistantResponseComponent>(
    html`<forge-ai-assistant-response .response=${response}></forge-ai-assistant-response>`
  );
  return el.shadowRoot!.querySelector('.text-chunk')?.textContent ?? '';
}

describe('AiAssistantResponseComponent markdown streaming', () => {
  [
    ['a completed response', 'complete', 'complete'],
    ['an errored response', 'error', 'streaming'],
    ['a finished chunk in a streaming response', 'streaming', 'complete']
  ].forEach(([label, responseStatus, chunkStatus]) => {
    it(`should keep text after a "<" in ${label}`, async () => {
      const text = await renderedText(
        createResponse(responseStatus as AssistantResponse['status'], chunkStatus as 'streaming' | 'complete')
      );

      expect(text).to.contain(CONTENT);
    });
  });

  it('should repair partial markup in a chunk that is still streaming', async () => {
    const text = await renderedText(createResponse('streaming', 'streaming'));

    expect(text).to.contain('Cost');
    expect(text).not.to.contain(CONTENT);
  });
});
