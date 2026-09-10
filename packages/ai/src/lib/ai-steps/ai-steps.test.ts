import { expect } from '@esm-bundle/chai';
import { elementUpdated, fixture, html } from '@open-wc/testing';
import { AiStepsComponent } from './ai-steps.js';
import type { ToolCall, ToolDefinition } from '../ai-chatbot/types.js';

import './ai-steps.js';

function createToolCall(overrides: Partial<ToolCall> = {}): ToolCall {
  return {
    id: 'tc-1',
    messageId: 'msg-1',
    name: 'searched.orders_table',
    args: {},
    status: 'complete',
    type: 'client',
    ...overrides
  };
}

function textOf(element: Element | null): string {
  return element?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
}

describe('AiStepsComponent', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps></forge-ai-steps>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should render a singular steps-count label for a single step', async () => {
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${[createToolCall()]}></forge-ai-steps>`
    );

    expect(textOf(el.shadowRoot!.querySelector('.steps-count'))).to.equal('1 STEP');
  });

  it('should render a plural steps-count label for multiple steps', async () => {
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps
        .toolCalls=${[createToolCall({ id: 'tc-1' }), createToolCall({ id: 'tc-2' })]}></forge-ai-steps>`
    );

    expect(textOf(el.shadowRoot!.querySelector('.steps-count'))).to.equal('2 STEPS');
  });

  it('should map the action segment of the tool name to its dictionary label and code-format the subject', async () => {
    const toolCall = createToolCall({ name: 'filtered.crime_category', args: { value: 'theft' } });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .toolCalls=${[toolCall]}></forge-ai-steps>`);

    const title = el.shadowRoot!.querySelector('.step-card-title');
    expect(textOf(title)).to.equal('Filtered by crime category');
    expect(title!.querySelector('code')).to.exist;
  });

  it('should fall back to the raw action segment when it is not part of the action dictionary', async () => {
    const toolCall = createToolCall({ name: 'summarized.report', args: { note: 'n/a' } });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .toolCalls=${[toolCall]}></forge-ai-steps>`);

    expect(textOf(el.shadowRoot!.querySelector('.step-card-title'))).to.equal('summarized report');
  });

  it('should derive both the action and subject from the full name when there is no "." segment', async () => {
    // With no `.` separator, the action and subject segments both resolve to the whole
    // name, so it is rendered twice: once raw (action) and once space-formatted (subject).
    const toolCall = createToolCall({ name: 'cleanup_task', args: { done: true } });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .toolCalls=${[toolCall]}></forge-ai-steps>`);

    expect(textOf(el.shadowRoot!.querySelector('.step-card-title'))).to.equal('cleanup_task cleanup task');
  });

  it('should fall back to the raw tool name for rows without args or a result', async () => {
    const toolCall = createToolCall({ name: 'called.some_tool', args: {}, result: undefined });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .toolCalls=${[toolCall]}></forge-ai-steps>`);

    expect(el.shadowRoot!.querySelector('.step-card-title')).to.not.exist;
    expect(textOf(el.shadowRoot!.querySelector('.row-name'))).to.equal('called.some_tool');
  });

  it('should use the tool definition displayName over the derived name for a row without detail', async () => {
    const toolCall = createToolCall({ name: 'called.some_tool', args: {}, result: undefined });
    const tools = new Map<string, ToolDefinition>([
      ['called.some_tool', { name: 'called.some_tool', displayName: 'Called Some Tool' }]
    ]);
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${[toolCall]} .tools=${tools}></forge-ai-steps>`
    );

    expect(textOf(el.shadowRoot!.querySelector('.row-name'))).to.equal('Called Some Tool');
  });

  it('should render an error row through the detail card when the tool call failed', async () => {
    const toolCall = createToolCall({
      name: 'queried.sales_data',
      args: {},
      status: 'error',
      result: { error: 'timeout' }
    });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .toolCalls=${[toolCall]}></forge-ai-steps>`);

    const row = el.shadowRoot!.querySelector('.timeline-row');
    expect(row?.getAttribute('data-status')).to.equal('error');
    expect(el.shadowRoot!.querySelector('.step-card-title')).to.exist;
  });

  it('should format both args and results into individual key/value rows, truncating long values', async () => {
    const longValue = 'x'.repeat(3000);
    const toolCall = createToolCall({
      name: 'queried.sales_data',
      args: { region: 'us-west' },
      result: { rows: 42, note: longValue }
    });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .toolCalls=${[toolCall]}></forge-ai-steps>`);

    const keys = [...el.shadowRoot!.querySelectorAll('.detail-key')].map(node => textOf(node));
    expect(keys).to.include('region');
    expect(keys).to.include('rows');
    expect(keys).to.include('note');

    const values = [...el.shadowRoot!.querySelectorAll('.detail-value')].map(node => textOf(node));
    const truncated = values.find(value => value.includes('truncated'));
    expect(truncated).to.exist;
    expect(truncated!.length).to.be.lessThan(longValue.length);
  });

  it('should show a status badge with a millisecond duration for short-running rows', async () => {
    const toolCall = createToolCall({
      name: 'called.some_tool',
      args: {},
      startTimestamp: 1_000,
      endTimestamp: 1_400
    });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .toolCalls=${[toolCall]}></forge-ai-steps>`);

    expect(textOf(el.shadowRoot!.querySelector('.code-card__status'))).to.equal('400ms');
  });

  it('should show a status badge with a second-based duration for longer-running rows', async () => {
    const toolCall = createToolCall({
      name: 'called.some_tool',
      args: {},
      startTimestamp: 1_000,
      endTimestamp: 2_500
    });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .toolCalls=${[toolCall]}></forge-ai-steps>`);

    expect(textOf(el.shadowRoot!.querySelector('.code-card__status'))).to.equal('1.5s');
  });

  it('should not show a status badge when timestamps are missing or invalid', async () => {
    const toolCall = createToolCall({
      name: 'called.some_tool',
      args: {},
      startTimestamp: 2_000,
      endTimestamp: 1_000
    });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .toolCalls=${[toolCall]}></forge-ai-steps>`);

    expect(el.shadowRoot!.querySelector('.code-card__status')).to.not.exist;
  });

  it('should summarize more than two completed steps with a "+N more" suffix', async () => {
    const toolCalls = [
      createToolCall({ id: 'tc-1', name: 'searched.orders_table' }),
      createToolCall({ id: 'tc-2', name: 'filtered.region' }),
      createToolCall({ id: 'tc-3', name: 'joined.customers' }),
      createToolCall({ id: 'tc-4', name: 'sorted.rows' })
    ];
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${toolCalls} status="complete"></forge-ai-steps>`
    );

    const statusText = el.shadowRoot!.querySelector('.status-text')!;
    expect(textOf(statusText)).to.equal('Searched orders table, Filtered by region +2 more');
  });

  it('should keep the timeline expanded and hide the summary button while a run is in progress', async () => {
    const toolCall = createToolCall({ status: 'executing' });
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${[toolCall]} status="running"></forge-ai-steps>`
    );

    expect(el.shadowRoot!.querySelector('.summary')).to.not.exist;
    const timeline = el.shadowRoot!.querySelector('.timeline')!;
    expect(timeline.classList.contains('expanded')).to.be.true;
    expect(timeline.getAttribute('aria-hidden')).to.equal('false');
  });

  it('should auto-collapse once the run finishes, and remain toggleable via the summary row', async () => {
    const toolCall = createToolCall({ status: 'complete' });
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${[toolCall]} status="running"></forge-ai-steps>`
    );

    el.status = 'complete';
    await elementUpdated(el);

    const summary = el.shadowRoot!.querySelector('.summary') as HTMLButtonElement;
    expect(summary).to.exist;
    expect(summary.getAttribute('aria-expanded')).to.equal('false');
    expect(summary.getAttribute('aria-controls')).to.equal('timeline-content');

    let timeline = el.shadowRoot!.querySelector('.timeline')!;
    expect(timeline.classList.contains('expanded')).to.be.false;
    expect(timeline.getAttribute('aria-hidden')).to.equal('true');

    summary.click();
    await elementUpdated(el);

    expect(summary.getAttribute('aria-expanded')).to.equal('true');
    timeline = el.shadowRoot!.querySelector('.timeline')!;
    expect(timeline.classList.contains('expanded')).to.be.true;
    expect(timeline.getAttribute('aria-hidden')).to.equal('false');
  });

  it('should default to expanded with a visible summary button when no status is provided', async () => {
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${[createToolCall()]}></forge-ai-steps>`
    );

    const summary = el.shadowRoot!.querySelector('.summary');
    expect(summary).to.exist;
    expect(summary!.getAttribute('aria-expanded')).to.equal('true');
    expect(el.shadowRoot!.querySelector('.timeline')!.classList.contains('expanded')).to.be.true;
  });
});
