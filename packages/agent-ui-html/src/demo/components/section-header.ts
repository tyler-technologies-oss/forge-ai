import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

interface SectionHeaderProps {
  title?: string;
  description?: string;
}

export function SectionHeader(ctx: ComponentContext<SectionHeaderProps>): TemplateResult | typeof nothing {
  const { title, description } = ctx.props;

  if (!title) {
    return nothing;
  }

  return html`
    <header class="agentui-section-header">
      <h2 class="forge-typography--heading5">${title}</h2>
      ${description ? html`<p class="forge-typography--body2">${description}</p>` : nothing}
    </header>
  `;
}

export const SectionHeaderSchema = z.object({
  title: z.string().describe('Section title'),
  description: z.string().describe('Optional subtitle/description').optional()
});
