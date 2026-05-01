import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { tylIconForgeLogo } from '@tylertech/tyler-icons';
import {
  defineAppBarComponent,
  defineButtonComponent,
  defineCardComponent,
  defineIconComponent,
  defineScaffoldComponent,
  IconRegistry
} from '@tylertech/forge';

import RendererDemo from './RendererDemo';
import './styles.scss';

defineScaffoldComponent();
defineAppBarComponent();
defineCardComponent();
defineIconComponent();
defineButtonComponent();

IconRegistry.define([tylIconForgeLogo]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RendererDemo />
  </StrictMode>
);
