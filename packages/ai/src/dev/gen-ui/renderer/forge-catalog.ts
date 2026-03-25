import { Catalog, type ComponentApi, CommonSchemas } from '@a2ui/web_core/v0_9';

export const componentSchemas = {
  Text: {
    component: 'Text',
    properties: {
      text: { type: 'string', required: true },
      variant: { type: 'string', enum: ['h1', 'h2', 'h3', 'h4', 'h5', 'caption', 'body'], default: 'body' }
    }
  },
  Icon: {
    component: 'Icon',
    properties: {
      name: { type: 'string', required: true },
      size: { type: 'string', enum: ['small', 'medium', 'large'], default: 'medium' }
    }
  },
  Stack: {
    component: 'Stack',
    properties: {
      children: { type: 'array', items: 'string', required: true, description: 'Array of component IDs' },
      inline: { type: 'boolean', default: false, description: 'Horizontal (true) or vertical (false) layout' },
      gap: { type: 'string', default: '16' },
      alignment: { type: 'string', enum: ['start', 'center', 'end'], default: 'start' },
      justify: { type: 'string', enum: ['start', 'center', 'end', 'space-between'], default: 'start' },
      wrap: { type: 'boolean', default: false },
      stretch: { type: 'boolean', default: false }
    }
  },
  List: {
    component: 'List',
    properties: {
      children: { type: 'array', items: 'string', required: true, description: 'Array of ListItem component IDs' },
      dense: { type: 'boolean', default: false },
      twoLine: { type: 'boolean', default: false },
      threeLine: { type: 'boolean', default: false }
    }
  },
  ListItem: {
    component: 'ListItem',
    properties: {
      text: { type: 'string', required: true },
      secondaryText: { type: 'string' },
      tertiaryText: { type: 'string' },
      selected: { type: 'boolean', default: false },
      value: { type: 'string' },
      action: { type: 'object', properties: { type: 'string', payload: 'object' } }
    }
  },
  Card: {
    component: 'Card',
    properties: {
      children: { type: 'array', items: 'string', required: true, description: 'Array of component IDs' },
      raised: { type: 'boolean', default: true }
    }
  },
  Button: {
    component: 'Button',
    properties: {
      label: { type: 'string', required: true },
      variant: { type: 'string', enum: ['text', 'outlined', 'tonal', 'filled', 'raised'], default: 'raised' },
      disabled: { type: 'boolean', default: false },
      action: { type: 'object', required: true, properties: { type: 'string', payload: 'object' } }
    }
  },
  IconButton: {
    component: 'IconButton',
    properties: {
      icon: { type: 'string', required: true },
      disabled: { type: 'boolean', default: false },
      variant: { type: 'string', enum: ['text', 'outlined', 'tonal', 'filled', 'raised'], default: 'text' },
      shape: { type: 'string', enum: ['circular', 'squared'], default: 'circular' },
      density: { type: 'string', enum: ['small', 'medium', 'large'], default: 'large' },
      toggle: { type: 'boolean', default: false },
      pressed: { type: 'boolean', default: false },
      action: { type: 'object', properties: { type: 'string', payload: 'object' } }
    }
  },
  TextField: {
    component: 'TextField',
    properties: {
      label: { type: 'string', required: true },
      value: { type: 'string' },
      placeholder: { type: 'string' },
      disabled: { type: 'boolean', default: false },
      required: { type: 'boolean', default: false }
    }
  },
  CheckBox: {
    component: 'CheckBox',
    properties: {
      label: { type: 'string', required: true },
      checked: { type: 'boolean', default: false },
      disabled: { type: 'boolean', default: false },
      action: { type: 'object', properties: { type: 'string', payload: 'object' } }
    }
  },
  Avatar: {
    component: 'Avatar',
    properties: {
      text: { type: 'string' },
      imageUrl: { type: 'string' },
      letterCount: { type: 'number', default: 2 }
    }
  },
  Badge: {
    component: 'Badge',
    properties: {
      text: { type: 'string' },
      theme: { type: 'string', enum: ['default', 'info', 'info-secondary', 'success', 'warning', 'error', 'danger'], default: 'default' },
      dot: { type: 'boolean', default: false },
      strong: { type: 'boolean', default: false }
    }
  },
  Divider: {
    component: 'Divider',
    properties: {
      vertical: { type: 'boolean', default: false }
    }
  },
  InlineMessage: {
    component: 'InlineMessage',
    properties: {
      title: { type: 'string' },
      text: { type: 'string', required: true },
      theme: { type: 'string', enum: ['info', 'success', 'warning', 'error'], default: 'info' },
      icon: { type: 'string', description: 'Custom icon name, overrides theme default' }
    }
  },
  Toolbar: {
    component: 'Toolbar',
    properties: {
      children: { type: 'array', items: 'string', required: true, description: 'Array of component IDs' },
      inverted: { type: 'boolean', default: false },
      noDivider: { type: 'boolean', default: false }
    }
  }
} as const;

export const forgeComponents: ComponentApi[] = [
  { name: 'Text', schema: CommonSchemas.DynamicString },
  { name: 'Icon', schema: CommonSchemas.DynamicString },
  { name: 'Stack', schema: CommonSchemas.ChildList },
  { name: 'List', schema: CommonSchemas.ChildList },
  { name: 'ListItem', schema: CommonSchemas.Action },
  { name: 'Card', schema: CommonSchemas.ChildList },
  { name: 'Button', schema: CommonSchemas.Action },
  { name: 'IconButton', schema: CommonSchemas.Action },
  { name: 'TextField', schema: CommonSchemas.DynamicString },
  { name: 'CheckBox', schema: CommonSchemas.DynamicBoolean },
  { name: 'Avatar', schema: CommonSchemas.DynamicString },
  { name: 'Badge', schema: CommonSchemas.DynamicString },
  { name: 'Divider', schema: CommonSchemas.DynamicString },
  { name: 'InlineMessage', schema: CommonSchemas.DynamicString },
  { name: 'Toolbar', schema: CommonSchemas.ChildList }
];

export const forgeCatalog = new Catalog('forge-ai-gen-ui-catalog', forgeComponents);
