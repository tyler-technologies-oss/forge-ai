import '@tylertech/forge';
import '@tylertech/forge-ai';
import { IconRegistry } from '@tylertech/forge';
import { tylIconForgeLogo } from '@tylertech/tyler-icons';
import './styles.scss';
import './app.js';

IconRegistry.define([tylIconForgeLogo]);

const root = document.getElementById('root');
if (root) {
  root.innerHTML = '<agent-ui-demo-app></agent-ui-demo-app>';
}
