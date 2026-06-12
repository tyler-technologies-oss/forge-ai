import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

interface ForgeInlineMessageProps {
  theme?: 'info' | 'success' | 'warning' | 'error';
}

export function ForgeInlineMessage(ctx: ComponentContext<ForgeInlineMessageProps, TemplateResult[]>): TemplateResult {
  const { theme = 'info' } = ctx.props;

  return html`
    <forge-inline-message theme=${theme}>
      ${ctx.children}
    </forge-inline-message>
  `;
}

export const ForgeInlineMessageSchema = z.object({
  theme: z
    .enum(['info', 'success', 'warning', 'error'])
    .describe('Message theme (info, success, warning, error)')
    .optional()
});
