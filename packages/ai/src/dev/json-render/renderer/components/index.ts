import { createRegistry } from '../registry.js';
import type { TemplateFactory } from '../types.js';

import { Text } from './text.js';
import { Button } from './button.js';
import { IconButton } from './icon-button.js';
import { Stack } from './stack.js';
import { Card } from './card.js';
import { List } from './list.js';
import { ListItem } from './list-item.js';
import { TextField } from './text-field.js';
import { CheckBox } from './checkbox.js';
import { Badge } from './badge.js';
import { Divider } from './divider.js';
import { InlineMessage } from './inline-message.js';
import { Avatar } from './avatar.js';
import { Toolbar } from './toolbar.js';
import { Icon } from './icon.js';

export const forgeComponents: Record<string, TemplateFactory> = {
  Text: Text as TemplateFactory,
  Button: Button as TemplateFactory,
  IconButton: IconButton as TemplateFactory,
  Stack: Stack as TemplateFactory,
  Card: Card as TemplateFactory,
  List: List as TemplateFactory,
  ListItem: ListItem as TemplateFactory,
  TextField: TextField as TemplateFactory,
  CheckBox: CheckBox as TemplateFactory,
  Badge: Badge as TemplateFactory,
  Divider: Divider as TemplateFactory,
  InlineMessage: InlineMessage as TemplateFactory,
  Avatar: Avatar as TemplateFactory,
  Toolbar: Toolbar as TemplateFactory,
  Icon: Icon as TemplateFactory
};

export const forgeRegistry = createRegistry(forgeComponents);

export {
  Text,
  Button,
  IconButton,
  Stack,
  Card,
  List,
  ListItem,
  TextField,
  CheckBox,
  Badge,
  Divider,
  InlineMessage,
  Avatar,
  Toolbar,
  Icon
};
