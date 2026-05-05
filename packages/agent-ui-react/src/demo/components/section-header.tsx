import type { ReactElement } from 'react';
import { z } from 'zod';
import type { BaseComponentProps } from '@tylertech/agent-ui-react';

interface SectionHeaderProps {
  title?: string;
  description?: string;
}

export function SectionHeader({ props }: BaseComponentProps<SectionHeaderProps>): ReactElement | null {
  const { title, description } = props;

  if (!title) {
    return null;
  }

  return (
    <header className="agentui-section-header">
      <h2 className="forge-typography--heading5">{title}</h2>
      {description && <p className="forge-typography--body2">{description}</p>}
    </header>
  );
}

export const SectionHeaderSchema = z.object({
  title: z.string().describe('Section title'),
  description: z.string().describe('Optional subtitle/description').optional()
});
