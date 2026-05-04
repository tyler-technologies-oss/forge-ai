import { html, type TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui';
import type { LitResult } from '../types.js';

interface CardProps {
  padded?: boolean;
}

export function Card(ctx: ComponentContext<CardProps, LitResult[]>): TemplateResult {
  const { padded = true } = ctx.props;

  return html` <forge-card class="agentui-card ${padded ? 'agentui-card--padded' : ''}">${ctx.children}</forge-card> `;
}

export const CardSchema = z.object({
  padded: z.boolean().describe('Add padding inside card (default true)').optional()
});
