import { createCatalog } from '@tylertech/agent-ui-core';
import type { ComponentDefinition } from '@tylertech/agent-ui-core';
import {
  ForgeButtonSchema,
  ForgeTextFieldSchema,
  ForgeCheckboxSchema,
  ForgeSelectSchema,
  ForgeCardSchema,
  ForgeDividerSchema,
  RowSchema,
  ColumnSchema,
  BoxSchema,
  ForgeInlineMessageSchema,
  IconSchema,
  HeadingSchema
} from './index.js';

const components = {
  ForgeButton: {
    description: 'Interactive button component with click events',
    props: ForgeButtonSchema
  },
  ForgeTextField: {
    description: 'Text input field with validation support',
    props: ForgeTextFieldSchema
  },
  ForgeCheckbox: {
    description: 'Checkbox input for boolean values',
    props: ForgeCheckboxSchema
  },
  ForgeSelect: {
    description: 'Dropdown select input with options',
    props: ForgeSelectSchema
  },
  ForgeCard: {
    description: 'Container card for grouping content',
    props: ForgeCardSchema,
    slots: ['default']
  },
  ForgeDivider: {
    description: 'Horizontal or vertical divider line for separating content',
    props: ForgeDividerSchema
  },
  Row: {
    description: 'Horizontal flex container with configurable gap and alignment',
    props: RowSchema,
    slots: ['default']
  },
  Column: {
    description: 'Vertical flex container with configurable gap and alignment',
    props: ColumnSchema,
    slots: ['default']
  },
  Box: {
    description: 'Generic container with configurable display (flex/grid/block) and layout properties',
    props: BoxSchema,
    slots: ['default']
  },
  ForgeInlineMessage: {
    description: 'Inline message for displaying contextual feedback (info, success, warning, error)',
    props: ForgeInlineMessageSchema,
    slots: ['default', 'title', 'icon']
  },
  Icon: {
    description: 'Icon component for displaying Tyler Icons',
    props: IconSchema
  },
  Heading: {
    description: 'Semantic heading (h1-h6) with Tyler Forge typography styles (display, heading, subheading)',
    props: HeadingSchema
  }
} satisfies Record<string, ComponentDefinition>;

export const forgeCatalog = createCatalog({ components, actions: {} });
export type ForgeComponentNames = keyof typeof components;
