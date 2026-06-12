import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

interface ForgeCardProps {}

export function ForgeCard(ctx: ComponentContext<ForgeCardProps, TemplateResult[]>): TemplateResult {
  return html` <forge-card>${ctx.children}</forge-card> `;
}

export const ForgeCardSchema = z.object({});
