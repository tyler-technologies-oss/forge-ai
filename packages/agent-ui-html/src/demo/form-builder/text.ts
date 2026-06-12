import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

type TypographyVariant = 'body1' | 'body2' | 'body3' | 'body4' | 'label1' | 'label2' | 'label3' | 'caption' | 'overline';

interface TextProps {
  text: string;
  variant?: TypographyVariant;
}

export function Text(ctx: ComponentContext<TextProps>): TemplateResult {
  const { text, variant } = ctx.props;

  if (variant) {
    const className = `forge-typography--${variant}`;
    return html`<span class=${className}>${text}</span>`;
  }

  return html`<span>${text}</span>`;
}

export const TextSchema = z.object({
  text: z.string().describe('Text content to display'),
  variant: z
    .enum(['body1', 'body2', 'body3', 'body4', 'label1', 'label2', 'label3', 'caption', 'overline'])
    .describe('Typography variant (optional, inherits from parent if not specified)')
    .optional()
});
