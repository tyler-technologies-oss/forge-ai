import { LitElement, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

import styles from './section-header.scss?inline';

interface SectionHeaderProps {
  title?: string;
  description?: string;
}

@customElement('agentui-section-header')
export class AgentUISectionHeaderComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public titleText: string = '';
  @property({ type: String }) public description?: string;

  protected override render(): TemplateResult | typeof nothing {
    if (!this.titleText) {
      return nothing;
    }

    return html`
      <header>
        <h2 class="forge-typography--heading5">${this.titleText}</h2>
        ${this.description ? html`<p class="forge-typography--body2">${this.description}</p>` : nothing}
      </header>
    `;
  }
}

export function SectionHeader(ctx: ComponentContext<SectionHeaderProps>): TemplateResult | typeof nothing {
  const { title = '', description } = ctx.props;

  if (!title) {
    return nothing;
  }

  return html`<agentui-section-header .titleText=${title} .description=${description}></agentui-section-header>`;
}

export const SectionHeaderSchema = z.object({
  title: z.string().describe('Section title'),
  description: z.string().describe('Optional subtitle/description').optional()
});

declare global {
  interface HTMLElementTagNameMap {
    'agentui-section-header': AgentUISectionHeaderComponent;
  }
}
