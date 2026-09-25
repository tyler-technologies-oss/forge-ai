import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import { defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconBarChart, tylIconTable } from '@tylertech/tyler-icons';

import '$lib/ai-artifact-card';

IconRegistry.define([tylIconBarChart, tylIconTable]);
defineIconComponent();

const component = 'forge-ai-artifact-card';

const tableIcon = html`<forge-icon slot="icon" name="table"></forge-icon>`;
const chartIcon = html`<forge-icon slot="icon" name="bar_chart"></forge-icon>`;

const meta = {
  title: 'AI Components/Primitives/Artifact Card',
  render: args => {
    return html`
      <forge-ai-artifact-card
        title-text=${args.titleText}
        subtitle-text=${args.subtitleText}
        asset-id=${args.assetId}
        ?active=${args.active}
        ?disabled=${args.disabled}
        @forge-ai-artifact-card-open=${action('forge-ai-artifact-card-open')}>
        ${tableIcon}
      </forge-ai-artifact-card>
    `;
  },
  component,
  argTypes: {
    titleText: {
      control: 'text',
      description: 'The primary line of text'
    },
    subtitleText: {
      control: 'text',
      description: 'The secondary line of text'
    },
    assetId: {
      control: 'text',
      description: 'An opaque identifier echoed back in the open event detail'
    },
    active: {
      control: 'boolean',
      description: 'Whether the artifact this card points at is the one currently being viewed'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card can be activated'
    }
  },
  args: {
    titleText: 'Traffic collisions by intersection',
    subtitleText: 'Table · 2024 Collision Records · 1,284 rows',
    assetId: 'collisions-2024',
    active: false,
    disabled: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const Active: Story = {
  args: {
    active: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Truncation: Story = {
  args: {
    titleText: 'Traffic collisions by intersection, severity, weather condition, and time of day',
    subtitleText: 'Table · 2024 Collision Records · filtered to arterial roads within city limits · 1,284 rows'
  }
};

export const CustomAccent: Story = {
  render: () => html`
    <forge-ai-artifact-card
      title-text="Q4 collision summary"
      subtitle-text="Report · 4 charts"
      asset-id="q4-report"
      style="--forge-ai-artifact-card-accent-color: var(--forge-theme-primary);"
      @forge-ai-artifact-card-open=${action('forge-ai-artifact-card-open')}>
      ${chartIcon}
    </forge-ai-artifact-card>
  `
};

export const InTranscript: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 480px;">
      <forge-ai-artifact-card
        title-text="Traffic collisions by intersection"
        subtitle-text="Table · 2024 Collision Records · 1,284 rows"
        asset-id="collisions-2024"
        active
        @forge-ai-artifact-card-open=${action('forge-ai-artifact-card-open')}>
        ${tableIcon}
      </forge-ai-artifact-card>
      <forge-ai-artifact-card
        title-text="Q4 collision summary"
        subtitle-text="Report · 4 charts"
        asset-id="q4-report"
        @forge-ai-artifact-card-open=${action('forge-ai-artifact-card-open')}>
        ${chartIcon}
      </forge-ai-artifact-card>
    </div>
  `
};
