import '@tylertech/forge';
import '@tylertech/forge/icon';
import { IconRegistry } from '@tylertech/forge/icon';
import { tylIconForgeLogo } from '@tylertech/tyler-icons';
import './form-builder-demo.js';
import './styles.scss';

IconRegistry.define([tylIconForgeLogo]);

const root = document.getElementById('root');
if (root) {
  const demo = document.createElement('agent-ui-form-builder-demo');
  root.appendChild(demo);
}
