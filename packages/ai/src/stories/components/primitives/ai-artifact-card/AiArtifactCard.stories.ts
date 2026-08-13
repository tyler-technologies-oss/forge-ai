import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-artifact-card';

const component = 'forge-ai-artifact-card';

const tableIcon = html`
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" />
  </svg>
`;

const chartIcon = html`
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
  </svg>
`;

const openInNewIcon = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path
      d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
`;

const eyeIcon = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path
      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
`;

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
        <span slot="action">
          ${args.active ? 'Viewing results' : 'Open results'} ${args.active ? eyeIcon : openInNewIcon}
        </span>
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
    subtitleText: '2024 Collision Records · 1,284 rows',
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
    subtitleText: '2024 Collision Records · filtered to arterial roads within city limits · 1,284 rows'
  }
};

export const CustomAccent: Story = {
  render: () => html`
    <forge-ai-artifact-card
      title-text="Q4 collision summary"
      subtitle-text="Report · 4 charts"
      asset-id="q4-report"
      style="--forge-ai-artifact-card-accent-color: var(--forge-theme-tertiary);"
      @forge-ai-artifact-card-open=${action('forge-ai-artifact-card-open')}>
      ${chartIcon}
      <span slot="action">Open report ${openInNewIcon}</span>
    </forge-ai-artifact-card>
  `
};

export const InTranscript: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 480px;">
      <forge-ai-artifact-card
        title-text="Traffic collisions by intersection"
        subtitle-text="2024 Collision Records · 1,284 rows"
        asset-id="collisions-2024"
        active
        @forge-ai-artifact-card-open=${action('forge-ai-artifact-card-open')}>
        ${tableIcon}
        <span slot="action">Viewing results ${eyeIcon}</span>
      </forge-ai-artifact-card>
      <forge-ai-artifact-card
        title-text="Q4 collision summary"
        subtitle-text="Report · 4 charts"
        asset-id="q4-report"
        style="--forge-ai-artifact-card-accent-color: var(--forge-theme-tertiary);"
        @forge-ai-artifact-card-open=${action('forge-ai-artifact-card-open')}>
        ${chartIcon}
        <span slot="action">Open report ${openInNewIcon}</span>
      </forge-ai-artifact-card>
    </div>
  `
};
