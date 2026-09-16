import { expect } from '@esm-bundle/chai';
import { elementUpdated, fixture, html } from '@open-wc/testing';
import { AiStepsComponent, type AiStepLabel, type AiStepLabelContext } from './ai-steps.js';
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

  it('should fall back to the raw tool name when no displayName or stepLabel is supplied', async () => {
    const toolCall = createToolCall({ name: 'filtered.crime_category', args: { value: 'theft' } });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .toolCalls=${[toolCall]}></forge-ai-steps>`);

    expect(textOf(el.shadowRoot!.querySelector('.step-card-title'))).to.equal('filtered.crime_category');
  });

  it('should use the tool definition displayName for a step label', async () => {
    const toolCall = createToolCall({ name: 'filtered.crime_category', args: { value: 'theft' } });
    const tools = new Map<string, ToolDefinition>([
      ['filtered.crime_category', { name: 'filtered.crime_category', displayName: 'Filtered by crime' }]
    ]);
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${[toolCall]} .tools=${tools}></forge-ai-steps>`
    );

    expect(textOf(el.shadowRoot!.querySelector('.step-card-title'))).to.equal('Filtered by crime');
  });

  it('should pass the resolved displayName to the stepLabel formatter for reformatting', async () => {
    const toolCall = createToolCall({ name: 'filtered.crime_category', args: { value: 'theft' } });
    const tools = new Map<string, ToolDefinition>([
      ['filtered.crime_category', { name: 'filtered.crime_category', displayName: 'Filtered by crime' }]
    ]);
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps
        .toolCalls=${[toolCall]}
        .tools=${tools}
        .stepLabel=${({ displayName }: AiStepLabelContext): string => displayName.toUpperCase()}></forge-ai-steps>`
    );

    expect(textOf(el.shadowRoot!.querySelector('.step-card-title'))).to.equal('FILTERED BY CRIME');
  });

  it('should pass the raw tool name to the stepLabel formatter when the tool has no displayName', async () => {
    const toolCall = createToolCall({ name: 'filtered.crime_category', args: { value: 'theft' } });
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps
        .toolCalls=${[toolCall]}
        .stepLabel=${({ displayName }: AiStepLabelContext): string => `<${displayName}>`}></forge-ai-steps>`
    );

    expect(textOf(el.shadowRoot!.querySelector('.step-card-title'))).to.equal('<filtered.crime_category>');
  });

  it('should pass the tool call to the stepLabel formatter for status-dependent wording', async () => {
    const toolCall = createToolCall({ name: 'filtered.crime_category', args: { value: 'theft' }, status: 'error' });
    const tools = new Map<string, ToolDefinition>([
      ['filtered.crime_category', { name: 'filtered.crime_category', displayName: 'Filtered by crime' }]
    ]);
    const stepLabel = ({ displayName, toolCall: tc }: AiStepLabelContext): string =>
      tc.status === 'error' ? `${displayName} (failed)` : displayName;
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${[toolCall]} .tools=${tools} .stepLabel=${stepLabel}></forge-ai-steps>`
    );

    expect(textOf(el.shadowRoot!.querySelector('.step-card-title'))).to.equal('Filtered by crime (failed)');
  });

  it('should render an inline code chip when the stepLabel formatter returns an AiStepLabel', async () => {
    const toolCall = createToolCall({ name: 'filtered.crime_category', args: { value: 'theft' } });
    const tools = new Map<string, ToolDefinition>([
      ['filtered.crime_category', { name: 'filtered.crime_category', displayName: 'Filtered crime_category' }]
    ]);
    const stepLabel = ({ displayName }: AiStepLabelContext): AiStepLabel => {
      const [label, ...code] = displayName.split(' ');
      return { label, code: code.join(' ') };
    };
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${[toolCall]} .tools=${tools} .stepLabel=${stepLabel}></forge-ai-steps>`
    );

    const title = el.shadowRoot!.querySelector('.step-card-title')!;
    expect(textOf(title)).to.equal('Filtered crime_category');
    expect(textOf(title.querySelector('code'))).to.equal('crime_category');
  });

  it('should omit the code chip when an AiStepLabel has no code portion', async () => {
    const toolCall = createToolCall({ name: 'filtered.crime_category', args: { value: 'theft' } });
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps
        .toolCalls=${[toolCall]}
        .stepLabel=${(): AiStepLabel => ({ label: 'Filtered' })}></forge-ai-steps>`
    );

    const title = el.shadowRoot!.querySelector('.step-card-title')!;
    expect(textOf(title)).to.equal('Filtered');
    expect(title.querySelector('code')).to.not.exist;
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

  it('should resolve labels identically for detail cards and rows without detail', async () => {
    const toolCalls = [
      createToolCall({ id: 'tc-1', name: 'filtered.crime_category', args: { value: 'theft' } }),
      createToolCall({ id: 'tc-2', name: 'called.some_tool', args: {}, result: undefined })
    ];
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps
        .toolCalls=${toolCalls}
        .stepLabel=${({ displayName }: AiStepLabelContext) => `[${displayName}]`}></forge-ai-steps>`
    );

    expect(textOf(el.shadowRoot!.querySelector('.step-card-title'))).to.equal('[filtered.crime_category]');
    expect(textOf(el.shadowRoot!.querySelector('.row-name'))).to.equal('[called.some_tool]');
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
    expect(textOf(statusText)).to.equal('searched.orders_table, filtered.region +2 more');
  });

  it('should keep the timeline expanded and hide the summary button while a run is in progress', async () => {
    const toolCall = createToolCall({ status: 'executing' });
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${[toolCall]} status="streaming"></forge-ai-steps>`
    );

    expect(el.shadowRoot!.querySelector('.summary')).to.not.exist;
    const timeline = el.shadowRoot!.querySelector('.timeline')!;
    expect(timeline.classList.contains('expanded')).to.be.true;
    expect(timeline.getAttribute('aria-hidden')).to.equal('false');
  });

  it('should auto-collapse once the run finishes, and remain toggleable via the summary row', async () => {
    const toolCall = createToolCall({ status: 'complete' });
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${[toolCall]} status="streaming"></forge-ai-steps>`
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

  it('should auto-collapse again when the same element is reused for a second run', async () => {
    const toolCall = createToolCall({ status: 'complete' });
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .toolCalls=${[toolCall]} status="streaming"></forge-ai-steps>`
    );

    el.status = 'complete';
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.timeline')!.classList.contains('expanded'), 'run 1 collapsed').to.be.false;

    // Element reused for a second run (e.g. keyed list re-render)
    el.status = 'streaming';
    await elementUpdated(el);
    el.status = 'complete';
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.timeline')!.classList.contains('expanded'), 'run 2 collapsed').to.be.false;
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
