import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import type { LitResult } from '../types.js';

interface FormSectionProps {
  title?: string;
  description?: string;
}

export function FormSection(ctx: ComponentContext<FormSectionProps, LitResult[]>): TemplateResult {
  const { title = '', description = '' } = ctx.props;

  return html`
    <div class="form-section">
      ${title ? html`<h2 class="form-section__title forge-typography--heading5">${title}</h2>` : ''}
      ${description ? html`<p class="form-section__description forge-typography--body2">${description}</p>` : ''}
      <div class="form-section__content">${ctx.children}</div>
    </div>
  `;
}

export const FormSectionSchema = z.object({
  title: z.string().describe('Section title').optional(),
  description: z.string().describe('Section description').optional()
});

interface FormRowProps {
  gap?: 'sm' | 'md' | 'lg';
}

export function FormRow(ctx: ComponentContext<FormRowProps, LitResult[]>): TemplateResult {
  const { gap = 'md' } = ctx.props;

  return html` <div class="form-row" data-gap=${gap}>${ctx.children}</div> `;
}

export const FormRowSchema = z.object({
  gap: z.enum(['sm', 'md', 'lg']).describe('Gap between items (sm, md, lg)').optional()
});

interface FormActionsProps {
  submitLabel?: string;
  cancelLabel?: string;
}

export function FormActions(ctx: ComponentContext<FormActionsProps>): TemplateResult {
  const { submitLabel = 'Submit', cancelLabel = 'Cancel' } = ctx.props;

  return html`
    <div class="form-actions">
      <forge-button variant="outlined" @click=${() => ctx.emit('cancel')}> ${cancelLabel} </forge-button>
      <forge-button variant="raised" type="submit" @click=${() => ctx.emit('submit')}> ${submitLabel} </forge-button>
    </div>
  `;
}

export const FormActionsSchema = z.object({
  submitLabel: z.string().describe('Submit button label').optional(),
  cancelLabel: z.string().describe('Cancel button label').optional()
});
