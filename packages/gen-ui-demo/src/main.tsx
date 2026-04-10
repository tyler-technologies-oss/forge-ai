import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { tylIconForgeLogo } from '@tylertech/tyler-icons';
import {
  defineAppBarComponent,
  defineCardComponent,
  defineDrawerComponent,
  defineIconComponent,
  definePageStateComponent,
  defineScaffoldComponent,
  IconRegistry
} from '@tylertech/forge';
import '@tylertech/forge-ai/ai-chatbot';

import App from './App';
import './styles.scss';

defineScaffoldComponent();
defineAppBarComponent();
defineDrawerComponent();
defineIconComponent();
defineCardComponent();
definePageStateComponent();

IconRegistry.define([tylIconForgeLogo]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
