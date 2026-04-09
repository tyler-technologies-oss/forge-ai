import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { tylIconForgeLogo } from '@tylertech/tyler-icons';
import {
  defineAppBarComponent,
  defineAvatarComponent,
  defineBadgeComponent,
  defineButtonComponent,
  defineCardComponent,
  defineCheckboxComponent,
  defineDividerComponent,
  defineDrawerComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineInlineMessageComponent,
  defineListComponent,
  defineListItemComponent,
  definePageStateComponent,
  definePaginatorComponent,
  defineScaffoldComponent,
  defineStackComponent,
  defineTableComponent,
  defineTextFieldComponent,
  defineToolbarComponent,
  IconRegistry
} from '@tylertech/forge';
import '@tylertech/forge-ai/ai-chatbot';

import App from './App';

defineScaffoldComponent();
defineAppBarComponent();
defineDrawerComponent();
defineIconComponent();
defineButtonComponent();
defineIconButtonComponent();
defineCardComponent();
defineCheckboxComponent();
defineListComponent();
defineListItemComponent();
definePageStateComponent();
defineTextFieldComponent();
defineStackComponent();
defineBadgeComponent();
defineDividerComponent();
defineInlineMessageComponent();
defineAvatarComponent();
defineToolbarComponent();
defineTableComponent();
definePaginatorComponent();

IconRegistry.define([tylIconForgeLogo]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
