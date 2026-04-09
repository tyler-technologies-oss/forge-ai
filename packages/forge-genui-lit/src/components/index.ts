import { componentCatalog } from '@tylertech/forge-genui-core';
import type { CatalogEntry } from '../types.js';

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

export const catalogComponents: Record<string, CatalogEntry> = {
  Text: { factory: Text, schema: componentCatalog.Text },
  Button: { factory: Button, schema: componentCatalog.Button },
  IconButton: { factory: IconButton, schema: componentCatalog.IconButton },
  Stack: { factory: Stack, schema: componentCatalog.Stack },
  Card: { factory: Card, schema: componentCatalog.Card },
  List: { factory: List, schema: componentCatalog.List },
  ListItem: { factory: ListItem, schema: componentCatalog.ListItem },
  TextField: { factory: TextField, schema: componentCatalog.TextField },
  CheckBox: { factory: CheckBox, schema: componentCatalog.CheckBox },
  Badge: { factory: Badge, schema: componentCatalog.Badge },
  Divider: { factory: Divider, schema: componentCatalog.Divider },
  InlineMessage: { factory: InlineMessage, schema: componentCatalog.InlineMessage },
  Avatar: { factory: Avatar, schema: componentCatalog.Avatar },
  Toolbar: { factory: Toolbar, schema: componentCatalog.Toolbar },
  Icon: { factory: Icon, schema: componentCatalog.Icon }
};

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
