import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'display' | 'heading' | 'subheading';
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  text: string;
}

export function Heading(ctx: ComponentContext<HeadingProps>): TemplateResult {
  const { level = 2, variant = 'heading', size, text } = ctx.props;

  const effectiveSize = size ?? level;
  const typographyClass = `forge-typography--${variant}${effectiveSize}`;

  switch (level) {
    case 1:
      return html`<h1 class=${typographyClass}>${text}</h1>`;
    case 2:
      return html`<h2 class=${typographyClass}>${text}</h2>`;
    case 3:
      return html`<h3 class=${typographyClass}>${text}</h3>`;
    case 4:
      return html`<h4 class=${typographyClass}>${text}</h4>`;
    case 5:
      return html`<h5 class=${typographyClass}>${text}</h5>`;
    case 6:
      return html`<h6 class=${typographyClass}>${text}</h6>`;
    default:
      return html`<h2 class=${typographyClass}>${text}</h2>`;
  }
}

export const HeadingSchema = z.object({
  level: z
    .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)])
    .describe('Semantic heading level (h1-h6, default: h2)')
    .optional(),
  variant: z
    .enum(['display', 'heading', 'subheading'])
    .describe('Typography variant (display, heading, subheading)')
    .optional(),
  size: z
    .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8)])
    .describe('Typography size (1-8, defaults to match level)')
    .optional(),
  text: z.string().min(1).describe('Heading text content (required)')
});
