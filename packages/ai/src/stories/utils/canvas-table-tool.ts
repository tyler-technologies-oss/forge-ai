import { LitElement, css, html, nothing, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineButtonComponent } from '@tylertech/forge';
import { createToolRenderer } from '$lib/ai-chatbot/create-tool-renderer.js';
import type { IToolRenderer, ToolCall, ToolCanvas, ToolDefinition } from '$lib/ai-chatbot/types.js';

defineButtonComponent();

export interface CanvasTableArgs {
  title: string;
  /** One or two sentences the agent writes about the data. */
  summary?: string;
  headers: string[];
  rows: (string | number)[][];
}

const PREVIEW_ROW_COUNT = 3;

const TABLE_ICON_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"/></svg>';

/**
 * The tool's inline UI: an app-designed overview card. The host injects `canvas`; the card offers its
 * toggle button only when `canvas.available`, and labels it from `canvas.isOpen`.
 */
@customElement('demo-table-overview-card')
export class DemoTableOverviewCardElement extends LitElement implements IToolRenderer<CanvasTableArgs> {
  public static override styles = css`
    :host {
      display: block;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: var(--forge-spacing-medium, 12px);
      padding: var(--forge-spacing-large, 16px);
      border: 1px solid var(--forge-theme-outline, #ccc);
      border-radius: var(--forge-shape-large, 12px);
      background: var(--forge-theme-surface-container-minimum, #f6f6f6);
      color: var(--forge-theme-text-high, inherit);
    }

    .header {
      display: flex;
      align-items: center;
      gap: var(--forge-spacing-medium, 12px);
    }

    .icon {
      flex: none;
      display: grid;
      place-items: center;
      inline-size: 40px;
      block-size: 40px;
      border-radius: var(--forge-shape-medium, 8px);
      background: var(--forge-theme-primary-container, #e0e7ff);
      color: var(--forge-theme-on-primary-container, #1a237e);
    }

    .icon svg {
      inline-size: 24px;
      block-size: 24px;
      fill: currentcolor;
    }

    .title {
      margin: 0;
      font: var(--forge-typography-heading4, 600 1rem sans-serif);
    }

    .meta {
      margin: 0;
      color: var(--forge-theme-text-medium, inherit);
      font: var(--forge-typography-caption, 0.75rem sans-serif);
    }

    .summary {
      margin: 0;
      font: var(--forge-typography-body2, 0.875rem sans-serif);
    }

    .preview {
      display: grid;
      margin: 0;
      padding: 0;
      list-style: none;
      border-radius: var(--forge-shape-medium, 8px);
      background: var(--forge-theme-surface, #fff);
    }

    .preview li {
      display: flex;
      justify-content: space-between;
      gap: var(--forge-spacing-medium, 12px);
      padding: var(--forge-spacing-small, 8px) var(--forge-spacing-medium, 12px);
    }

    .preview li + li {
      border-block-start: 1px solid var(--forge-theme-outline, #ccc);
    }

    .preview .value {
      color: var(--forge-theme-text-medium, inherit);
    }

    .actions {
      display: flex;
      justify-content: flex-end;
    }
  `;

  @property({ attribute: false })
  public toolCall!: ToolCall<CanvasTableArgs>;

  @property({ attribute: false })
  public canvas?: ToolCanvas;

  get #rowCount(): number {
    return this.toolCall.args.rows?.length ?? 0;
  }

  get #meta(): string {
    const columns = this.toolCall.args.headers?.length ?? 0;
    return `${this.#rowCount} rows · ${columns} columns`;
  }

  get #preview(): TemplateResult | typeof nothing {
    const rows = (this.toolCall.args.rows ?? []).slice(0, PREVIEW_ROW_COUNT);
    if (!rows.length) {
      return nothing;
    }
    return html`
      <ul class="preview">
        ${rows.map(([label, value]) => html`<li><span>${label}</span><span class="value">${value}</span></li>`)}
      </ul>
    `;
  }

  get #actions(): TemplateResult | typeof nothing {
    if (!this.canvas?.available) {
      return nothing;
    }
    const label = this.canvas.isOpen ? 'Close table' : `View all ${this.#rowCount} rows`;
    return html`
      <div class="actions">
        <forge-button variant="outlined" @click=${this.#handleToggle}>${label}</forge-button>
      </div>
    `;
  }

  #handleToggle(): void {
    this.canvas?.toggle();
  }

  public override render(): TemplateResult {
    const { title, summary } = this.toolCall.args;
    return html`
      <div class="card">
        <div class="header">
          <div class="icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" />
            </svg>
          </div>
          <div>
            <h3 class="title">${title}</h3>
            <p class="meta">${this.#meta}</p>
          </div>
        </div>
        ${summary ? html`<p class="summary">${summary}</p>` : nothing} ${this.#preview} ${this.#actions}
      </div>
    `;
  }
}

/** The full table, mounted in the canvas through the tool's `canvas.renderer`. */
@customElement('demo-canvas-table')
export class DemoCanvasTableElement extends LitElement implements IToolRenderer<CanvasTableArgs> {
  public static override styles = css`
    :host {
      display: block;
    }

    table {
      inline-size: 100%;
      border-collapse: collapse;
      color: var(--forge-theme-text-high, inherit);
    }

    th,
    td {
      padding: var(--forge-spacing-small, 8px) var(--forge-spacing-medium, 12px);
      border-block-end: 1px solid var(--forge-theme-outline, #ccc);
      text-align: start;
    }

    th {
      position: sticky;
      inset-block-start: 0;
      background: var(--forge-theme-surface, #fff);
    }
  `;

  @property({ attribute: false })
  public toolCall!: ToolCall<CanvasTableArgs>;

  public override render(): TemplateResult {
    const { headers = [], rows = [] } = this.toolCall.args;
    return html`
      <table>
        <thead>
          <tr>
            ${headers.map(header => html`<th scope="col">${header}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${rows.map(
            row =>
              html`<tr>
                ${row.map(cell => html`<td>${cell}</td>`)}
              </tr>`
          )}
        </tbody>
      </table>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-table-overview-card': DemoTableOverviewCardElement;
    'demo-canvas-table': DemoCanvasTableElement;
  }
}

/**
 * Reference integration for the launcher canvas. The inline `renderer` is the app's own overview card; the
 * `canvas.renderer` is the full table. The `title`, `subtitle`, `icon`, and `actionLabel` mappers are only used
 * when a story or app swaps the thread over to the built-in artifact card (`canvas.inline: 'card'`).
 */
export const canvasTableTool: ToolDefinition<CanvasTableArgs> = {
  name: 'displayCanvasTable',
  displayName: 'Display Table',
  description:
    'Presents tabular data as an overview with a full table. Provide a short summary of what the data shows and order each row as [label, value, ...].',
  parameters: {
    type: 'object',
    properties: {
      title: { type: 'string', description: 'Table title' },
      summary: { type: 'string', description: 'One or two sentences describing the key takeaway' },
      headers: { type: 'array', items: { type: 'string' }, description: 'Column headers' },
      rows: {
        type: 'array',
        items: { type: 'array', items: { oneOf: [{ type: 'string' }, { type: 'number' }] } },
        description: 'Row values, in header order'
      }
    },
    required: ['title', 'headers', 'rows']
  },
  renderer: createToolRenderer({ elementTag: 'demo-table-overview-card' }),
  canvas: {
    renderer: createToolRenderer({ elementTag: 'demo-canvas-table' }),
    title: toolCall => toolCall.args.title,
    subtitle: toolCall => toolCall.args.summary ?? `${toolCall.args.rows?.length ?? 0} rows`,
    icon: TABLE_ICON_SVG,
    actionLabel: toolCall => ({
      open: `Open ${toolCall.args.title}`,
      collapse: `Collapse ${toolCall.args.title}`
    })
  }
};
