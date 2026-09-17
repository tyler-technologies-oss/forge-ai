import { expect } from '@esm-bundle/chai';
import { elementUpdated, fixture, html } from '@open-wc/testing';
import { AiStepsComponent, type AiStep } from './ai-steps.js';

import './ai-steps.js';

function createStep(overrides: Partial<AiStep> = {}): AiStep {
  return {
    label: 'Searched the orders table',
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
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .steps=${[createStep()]}></forge-ai-steps>`);

    expect(textOf(el.shadowRoot!.querySelector('.steps-count'))).to.equal('1 STEP');
  });

  it('should render a plural steps-count label for multiple steps', async () => {
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .steps=${[createStep(), createStep({ label: 'Filtered by region' })]}></forge-ai-steps>`
    );

    expect(textOf(el.shadowRoot!.querySelector('.steps-count'))).to.equal('2 STEPS');
  });

  it('should render the agent-provided label as a detail card when the step has detail', async () => {
    const step = createStep({ label: 'Filtered by crime category', detail: 'Narrowed to 412 records.' });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .steps=${[step]}></forge-ai-steps>`);

    expect(textOf(el.shadowRoot!.querySelector('.step-card-title'))).to.equal('Filtered by crime category');
    expect(textOf(el.shadowRoot!.querySelector('.step-card-result'))).to.equal('Narrowed to 412 records.');
  });

  it('should render a plain labeled row when the step has no detail', async () => {
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .steps=${[createStep({ label: 'Refreshed the cache' })]}></forge-ai-steps>`
    );

    expect(el.shadowRoot!.querySelector('.step-card-title')).to.not.exist;
    expect(textOf(el.shadowRoot!.querySelector('.row-name'))).to.equal('Refreshed the cache');
  });

  it('should render a step code as an inline chip after the label on a detail card', async () => {
    const step = createStep({ label: 'Filtered by', code: 'crime_category', detail: 'Narrowed to 412 records.' });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .steps=${[step]}></forge-ai-steps>`);

    const title = el.shadowRoot!.querySelector('.step-card-title')!;
    expect(textOf(title.querySelector('code'))).to.equal('crime_category');
    expect(textOf(title)).to.equal('Filtered by crime_category');
  });

  it('should render a step code as an inline chip on a row with no detail', async () => {
    const step = createStep({ label: 'Joined', code: 'incidents ⨝ districts' });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .steps=${[step]}></forge-ai-steps>`);

    const rowName = el.shadowRoot!.querySelector('.row-name')!;
    expect(textOf(rowName.querySelector('code'))).to.equal('incidents ⨝ districts');
  });

  it('should omit the code chip for a step with no code', async () => {
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .steps=${[createStep()]}></forge-ai-steps>`);

    expect(el.shadowRoot!.querySelector('.row-name code')).to.not.exist;
  });

  it('should include the code chip in the collapsed summary', async () => {
    const step = createStep({ label: 'Filtered by', code: 'crime_category' });
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .steps=${[step]}></forge-ai-steps>`);

    expect(textOf(el.shadowRoot!.querySelector('.status-text code'))).to.equal('crime_category');
  });

  it('should truncate a detail longer than the maximum length', async () => {
    const longDetail = 'x'.repeat(3000);
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .steps=${[createStep({ detail: longDetail })]}></forge-ai-steps>`
    );

    const rendered = textOf(el.shadowRoot!.querySelector('.step-card-result'));
    expect(rendered).to.contain('(truncated)');
    expect(rendered.length).to.be.lessThan(longDetail.length);
  });

  it('should default a step without a status to complete', async () => {
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .steps=${[createStep()]}></forge-ai-steps>`);

    expect(el.shadowRoot!.querySelector('.timeline-row')?.getAttribute('data-status')).to.equal('complete');
  });

  it('should expose the step status on the row for styling hooks', async () => {
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .steps=${[createStep({ status: 'error', detail: 'Request timed out.' })]}></forge-ai-steps>`
    );

    expect(el.shadowRoot!.querySelector('.timeline-row')?.getAttribute('data-status')).to.equal('error');
    expect(el.shadowRoot!.querySelector('.step-card-title')).to.exist;
  });

  it('should summarize more than two steps with a "+N more" suffix', async () => {
    const steps = [
      createStep({ label: 'Searched the orders table' }),
      createStep({ label: 'Filtered by region' }),
      createStep({ label: 'Joined customers' }),
      createStep({ label: 'Sorted rows' })
    ];
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .steps=${steps}></forge-ai-steps>`);

    expect(textOf(el.shadowRoot!.querySelector('.status-text'))).to.equal(
      'Searched the orders table, Filtered by region +2 more'
    );
  });

  it('should list every step label in the summary when there are two or fewer', async () => {
    const steps = [createStep({ label: 'Searched the orders table' }), createStep({ label: 'Filtered by region' })];
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .steps=${steps}></forge-ai-steps>`);

    expect(textOf(el.shadowRoot!.querySelector('.status-text'))).to.equal(
      'Searched the orders table, Filtered by region'
    );
  });

  it('should reflect the running property to an attribute', async () => {
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .steps=${[createStep()]}></forge-ai-steps>`);
    expect(el.hasAttribute('running')).to.be.false;

    el.running = true;
    await elementUpdated(el);

    expect(el.hasAttribute('running')).to.be.true;
  });

  it('should keep the timeline expanded and hide the summary button while running', async () => {
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .steps=${[createStep({ status: 'running' })]} running></forge-ai-steps>`
    );

    expect(el.shadowRoot!.querySelector('.summary')).to.not.exist;
    const timeline = el.shadowRoot!.querySelector('.timeline')!;
    expect(timeline.classList.contains('expanded')).to.be.true;
    expect(timeline.getAttribute('aria-hidden')).to.equal('false');
  });

  it('should default to expanded with a visible summary button when it mounts already finished', async () => {
    const el = await fixture<AiStepsComponent>(html`<forge-ai-steps .steps=${[createStep()]}></forge-ai-steps>`);

    const summary = el.shadowRoot!.querySelector('.summary');
    expect(summary).to.exist;
    expect(summary!.getAttribute('aria-expanded')).to.equal('true');
    expect(el.shadowRoot!.querySelector('.timeline')!.classList.contains('expanded')).to.be.true;
  });

  it('should auto-collapse once the run finishes, and remain toggleable via the summary row', async () => {
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .steps=${[createStep()]} running></forge-ai-steps>`
    );

    el.running = false;
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
    const el = await fixture<AiStepsComponent>(
      html`<forge-ai-steps .steps=${[createStep()]} running></forge-ai-steps>`
    );

    el.running = false;
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.timeline')!.classList.contains('expanded'), 'run 1 collapsed').to.be.false;

    // Element reused for a second run (e.g. keyed list re-render)
    el.running = true;
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.timeline')!.classList.contains('expanded'), 'run 2 expanded').to.be.true;

    el.running = false;
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.timeline')!.classList.contains('expanded'), 'run 2 collapsed').to.be.false;
  });
});
