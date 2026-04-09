/**
 * Component Catalog
 *
 * Defines the schema for each built-in component's props using Zod.
 * This catalog serves two purposes:
 * 1. Documentation: Tells LLMs what components exist and their props
 * 2. Validation: Schemas can validate LLM-generated specs
 */

import { z } from 'zod';

const TextProps = z.object({
  text: z.string(),
  variant: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'caption', 'body']).nullable()
});

const ButtonProps = z.object({
  label: z.string(),
  variant: z.enum(['text', 'outlined', 'tonal', 'filled', 'raised']).nullable(),
  disabled: z.boolean().nullable(),
  action: z.string().nullable()
});

const IconButtonProps = z.object({
  icon: z.string(),
  variant: z.enum(['text', 'outlined', 'tonal', 'filled', 'raised']).nullable(),
  disabled: z.boolean().nullable(),
  action: z.string().nullable()
});

const StackProps = z.object({
  inline: z.boolean().nullable(),
  gap: z.string().nullable(),
  alignment: z.enum(['start', 'center', 'end']).nullable(),
  justify: z.enum(['start', 'center', 'end', 'space-between']).nullable(),
  wrap: z.boolean().nullable(),
  stretch: z.boolean().nullable()
});

const CardProps = z.object({
  raised: z.boolean().nullable()
});

const ListProps = z.object({
  dense: z.boolean().nullable(),
  twoLine: z.boolean().nullable(),
  threeLine: z.boolean().nullable()
});

const ListItemProps = z.object({
  text: z.string(),
  secondaryText: z.string().nullable(),
  tertiaryText: z.string().nullable(),
  selected: z.boolean().nullable(),
  value: z.string().nullable(),
  action: z.string().nullable()
});

const TextFieldProps = z.object({
  label: z.string(),
  value: z.union([z.string(), z.object({ $state: z.string() })]).nullable(),
  placeholder: z.string().nullable(),
  disabled: z.boolean().nullable(),
  required: z.boolean().nullable(),
  binding: z.string().nullable()
});

const CheckBoxProps = z.object({
  label: z.string(),
  checked: z.union([z.boolean(), z.object({ $state: z.string() })]).nullable(),
  disabled: z.boolean().nullable(),
  action: z.string().nullable(),
  binding: z.string().nullable()
});

const BadgeProps = z.object({
  text: z.string().nullable(),
  theme: z.enum(['default', 'info', 'info-secondary', 'success', 'warning', 'error', 'danger']).nullable(),
  dot: z.boolean().nullable(),
  strong: z.boolean().nullable()
});

const DividerProps = z.object({
  vertical: z.boolean().nullable()
});

const InlineMessageProps = z.object({
  title: z.string().nullable(),
  text: z.string(),
  theme: z.enum(['info', 'success', 'warning', 'error']).nullable()
});

const AvatarProps = z.object({
  text: z.string().nullable(),
  imageUrl: z.string().nullable(),
  letterCount: z.number().nullable()
});

const ToolbarProps = z.object({
  inverted: z.boolean().nullable(),
  noDivider: z.boolean().nullable()
});

const IconProps = z.object({
  name: z.string(),
  size: z.enum(['small', 'medium', 'large']).nullable()
});

export interface ComponentSchema {
  component: string;
  description: string;
  props: z.ZodObject<z.ZodRawShape>;
  slots?: string[];
}

export const componentCatalog: Record<string, ComponentSchema> = {
  Text: {
    component: 'Text',
    description: 'Typography element for headings and body text',
    props: TextProps
  },
  Button: {
    component: 'Button',
    description: 'Clickable button that triggers an action',
    props: ButtonProps
  },
  IconButton: {
    component: 'IconButton',
    description: 'Icon-only button',
    props: IconButtonProps
  },
  Stack: {
    component: 'Stack',
    description: 'Flexible layout container for horizontal or vertical arrangement',
    props: StackProps,
    slots: ['default']
  },
  Card: {
    component: 'Card',
    description: 'Container card for grouping content',
    props: CardProps,
    slots: ['default']
  },
  List: {
    component: 'List',
    description: 'List container for ListItem children',
    props: ListProps,
    slots: ['default']
  },
  ListItem: {
    component: 'ListItem',
    description: 'List item with primary and optional secondary/tertiary text',
    props: ListItemProps
  },
  TextField: {
    component: 'TextField',
    description: 'Text input field with label',
    props: TextFieldProps
  },
  CheckBox: {
    component: 'CheckBox',
    description: 'Checkbox toggle with label',
    props: CheckBoxProps
  },
  Badge: {
    component: 'Badge',
    description: 'Status badge indicator',
    props: BadgeProps
  },
  Divider: {
    component: 'Divider',
    description: 'Horizontal or vertical separator',
    props: DividerProps
  },
  InlineMessage: {
    component: 'InlineMessage',
    description: 'Alert or notification message with theme',
    props: InlineMessageProps
  },
  Avatar: {
    component: 'Avatar',
    description: 'User avatar with image or initials',
    props: AvatarProps
  },
  Toolbar: {
    component: 'Toolbar',
    description: 'Container for toolbar buttons',
    props: ToolbarProps,
    slots: ['default']
  },
  Icon: {
    component: 'Icon',
    description: 'Display an icon by name',
    props: IconProps
  }
};

export type ComponentName = keyof typeof componentCatalog;

/**
 * Builds a description string of available components for LLM context.
 */
export function buildCatalogDescription(
  schemas: Record<string, { description?: string }> = componentCatalog
): string {
  return Object.entries(schemas)
    .map(([name, def]) => `- ${name}: ${def.description ?? ''}`)
    .join('\n');
}
