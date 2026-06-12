import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

interface ForgeDividerProps {
  vertical?: boolean;
}

export function ForgeDivider(ctx: ComponentContext<ForgeDividerProps>): TemplateResult {
  const { vertical = false } = ctx.props;

  return html` <forge-divider ?vertical=${vertical}></forge-divider> `;
}

export const ForgeDividerSchema = z.object({
  vertical: z.boolean().describe('Display divider vertically (default: horizontal)').optional()
});
