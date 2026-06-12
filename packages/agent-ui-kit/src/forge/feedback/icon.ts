import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

interface IconProps {
  name: string;
  external?: boolean;
}

export function Icon(ctx: ComponentContext<IconProps>): TemplateResult {
  const { name, external = true } = ctx.props;

  return html`<forge-icon name=${name} ?external=${external}></forge-icon>`;
}

export const IconSchema = z.object({
  name: z.string().describe('Icon name from Tyler Icons'),
  external: z
    .boolean()
    .describe(
      'Whether to use external icon (default: true). Only use false for icons registered via IconRegistry in the bundle.'
    )
    .optional()
});
