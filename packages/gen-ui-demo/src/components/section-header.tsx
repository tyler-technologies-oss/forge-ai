import type { ReactElement } from 'react';
import { z } from 'zod';
import type { ComponentContext } from '../core';

interface SectionHeaderProps {
  title?: string;
  description?: string;
}

export function SectionHeader(ctx: ComponentContext): ReactElement | null {
  const { title, description } = ctx.props as SectionHeaderProps;

  if (!title) {
    return null;
  }

  return (
    <header className="genui-section-header">
      <h2 className="forge-typography--heading5">{title}</h2>
      {description && <p className="forge-typography--body2">{description}</p>}
    </header>
  );
}

export const SectionHeaderSchema = z.object({
  title: z.string().describe('Section title'),
  description: z.string().describe('Optional subtitle/description').optional()
});
