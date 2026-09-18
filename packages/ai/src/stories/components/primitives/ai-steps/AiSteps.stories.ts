import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import '$lib/ai-steps';
import '$lib/ai-chatbot';
import type { AiStep } from '$lib/ai-steps';
import { type AiChatbotComponent, generateId } from '$lib/ai-chatbot';
import { displayStepsTool } from '$lib/tools';
import { MockAdapter } from '../../../utils/mock-adapter';

const component = 'forge-ai-steps';

const meta = {
  title: 'AI Components/Primitives/Steps',
  component,
  argTypes: {
    running: {
      control: 'boolean',
      description: 'Whether the run producing these steps is still in progress'
    }
  },
  args: {
    running: false
  },
  tags: ['autodocs']
} satisfies Meta;

const steps: AiStep[] = [
  {
    label: 'Searched the orders table',
    detail: 'Matched 1,284 orders placed in the last 90 days.',
    status: 'complete'
  },
  {
    label: 'Filtered by region',
    detail: 'Narrowed to the West region, leaving 412 orders.',
    status: 'complete'
  },
  {
    label: 'Loaded the product catalog',
    detail: 'Could not reach the catalog service — falling back to cached product names.',
    status: 'error'
  }
];

/**
 * Steps with no `detail` skip the detail card entirely and render as just a marker and label.
 */
const noDetailSteps: AiStep[] = [
  { label: 'Refreshed the cache', status: 'complete' },
  { label: 'Loaded customer records', status: 'complete' }
];

/**
 * One step per formatting style, so each renders in isolation: bold for a figure worth pulling out,
 * italics plus strikethrough for a caveat, and backticks for an identifier.
 */
const markdownSteps: AiStep[] = [
  {
    label: 'Matched **8,412** incidents',
    detail: 'Read every 2024–2025 filing before narrowing.',
    status: 'complete'
  },
  {
    label: '*Approximated* the ~~cached~~ district totals',
    detail: 'The catalog service was unreachable, so these are recomputed rather than cached.',
    status: 'complete'
  },
  {
    label: 'Filtered `incidents` by `crime_category`',
    detail: "Kept rows where `crime_category = 'Burglary'`, leaving **412**.",
    status: 'complete'
  }
];

const runningSteps: AiStep[] = [
  { label: 'Searched the orders table', detail: 'Matched 1,284 orders.', status: 'complete' },
  { label: 'Filtered by region', status: 'running' },
  { label: 'Summarizing results', status: 'pending' }
];

/**
 * Steps the chatbot story works through. Each one is announced with only its `label` while it runs;
 * its `detail` is what arrives when the step completes.
 */
const streamedSteps: AiStep[] = [
  {
    label: 'Searched `case_filings`',
    detail: 'Queried 2024–2025 filings for "zoning variance", returning **63** matches.'
  },
  {
    label: 'Filtered by `jurisdiction`',
    detail: 'Kept the **18** filings within Travis County.'
  },
  {
    label: 'Grouped by `outcome`',
    detail: '**11** approved, 5 denied, 2 withdrawn.'
  }
];

/** How long each step sits at `status: 'running'` before it completes. */
const STEP_RUNNING_DELAY = 1000;

/** Long enough to read the finished timeline before the settled call collapses it. */
const SETTLE_DELAY = 1000;

const ANSWER = 'Of the 18 Travis County zoning variance filings, 11 were approved.';

/**
 * The snapshot of `steps` at the point where `index` is the step currently in flight: everything
 * before it has completed and carries its `detail`, and `index` itself is `running` with no detail
 * yet. Passing `streamedSteps.length` yields the fully finished list.
 */
function stepsInFlight(index: number): AiStep[] {
  const finished = streamedSteps.slice(0, index).map(step => ({ ...step, status: 'complete' as const }));
  const current = streamedSteps[index];

  return current ? [...finished, { label: current.label, status: 'running' as const }] : finished;
}

/**
 * Walks a `displaySteps` call through its statuses, which `MockAdapter` can't do — it emits a single
 * hard-coded tool call in one shot. Each step is announced as `running` with just its label, then
 * flips to `complete` and gains its `detail` once the work "finishes", so the detail card is the part
 * that streams in. Re-emitting the whole `steps` array each tick mirrors how a real agent's partial
 * JSON accumulates.
 */
class StepsStreamingAdapter extends MockAdapter {
  #timeouts: number[] = [];

  public override sendMessage(): void {
    this._updateState({ isRunning: true });
    this._emitRunStarted();

    const messageId = generateId();
    const id = generateId();
    const name = displayStepsTool.name;

    this._emitMessageStart(messageId);
    this._emitToolCallStart({ id, messageId, name });

    // One tick per step announcing it as running, plus a final tick where the last step completes.
    for (let index = 0; index <= streamedSteps.length; index++) {
      const steps = stepsInFlight(index);
      this.#defer(
        () =>
          this._emitToolCallArgs({
            id,
            messageId,
            name,
            argsBuffer: JSON.stringify({ steps }),
            partialArgs: { steps }
          }),
        index * STEP_RUNNING_DELAY
      );
    }

    this.#defer(
      () => {
        const args = { steps: stepsInFlight(streamedSteps.length) };
        this._emitToolCallEnd({ id, messageId, name, args });
        this._emitToolCall({ id, messageId, name, args });
        this._emitMessageDelta(messageId, ANSWER);
        this._emitMessageEnd(messageId);
        this._updateState({ isRunning: false });
        this._emitRunFinished();
      },
      streamedSteps.length * STEP_RUNNING_DELAY + SETTLE_DELAY
    );
  }

  /**
   * Deliberately a no-op. `MockAdapter.sendToolResult` finishes by calling `sendMessage` again, which
   * is right for a real agent taking another turn on a tool's output — but `displaySteps` renders
   * rather than returns, and the chatbot sends a result for it regardless because the tool has no
   * handler. Letting that through restarts this script on a loop, appending a fresh timeline every
   * time the previous one settles. The core controller marks the call complete before it reaches the
   * adapter, so nothing is lost by dropping the round-trip.
   */
  public override sendToolResult(): void {}

  public override abort(): void {
    this.#timeouts.forEach(timeoutId => clearTimeout(timeoutId));
    this.#timeouts = [];
    super.abort();
  }

  #defer(callback: () => void, delay: number): void {
    this.#timeouts.push(window.setTimeout(callback, delay));
  }
}

export default meta;

type Story = StoryObj;

/**
 * Every label and detail is supplied by the agent through the `displaySteps` tool call — the
 * component derives nothing on its own.
 */
export const Demo: Story = {
  render: ({ running }) => html`<forge-ai-steps .steps=${steps} ?running=${running}></forge-ai-steps>`
};

export const NoDetail: Story = {
  render: () => html`<forge-ai-steps .steps=${noDetailSteps}></forge-ai-steps>`
};

/**
 * `label` and `detail` are rendered as sanitized inline markdown, so the agent chooses what to
 * emphasize instead of the component prescribing it. Emphasis works at any position and any number of
 * times per label, and it carries into the collapsed summary. Unsafe markup is stripped, and links
 * are forced to `target="_blank"` with a safe `rel`.
 */
export const WithMarkdownLabels: Story = {
  render: ({ running }) => html`<forge-ai-steps .steps=${markdownSteps} ?running=${running}></forge-ai-steps>`
};

/**
 * While `running` is `true` the timeline is held open and the summary row is hidden, so the user can
 * watch the agent work.
 */
export const Running: Story = {
  render: () => html`<forge-ai-steps .steps=${runningSteps} running></forge-ai-steps>`
};

/**
 * A finished run. An element that mounts with `running` already `false` renders expanded and can be
 * collapsed with the summary row; one that *transitions* from running to finished auto-collapses.
 */
export const Complete: Story = {
  render: () => html`<forge-ai-steps .steps=${steps}></forge-ai-steps>`
};

/**
 * The `displayStepsTool` definition wired into a real `forge-ai-chatbot`. The agent calls
 * `displaySteps` with its steps and the `forge-ai-tool-steps` renderer maps them onto the primitive.
 */
export const WithChatbot: Story = {
  render: () => {
    const adapter = new StepsStreamingAdapter({
      simulateStreaming: true,
      simulateTools: false,
      tools: [displayStepsTool]
    });

    const question = 'How did zoning variance requests turn out in Travis County?';

    // Kick the run off on mount so the timeline is streaming when the story opens; sending another
    // message replays it. Held as a ref rather than looked up with `document.querySelector`, which
    // would find the first chatbot on the page — a different story's, in the docs view.
    const chatbot = createRef<AiChatbotComponent>();
    setTimeout(() => {
      void chatbot.value?.sendMessage(question);
    }, 0);

    return html`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot ${ref(chatbot)} .adapter=${adapter} title-text="Steps"></forge-ai-chatbot>
      </div>
    `;
  }
};
