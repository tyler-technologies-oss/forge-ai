import '@tylertech/forge';
import '@tylertech/forge-ai';
import { IconRegistry } from '@tylertech/forge';
import { tylIconForgeLogo } from '@tylertech/tyler-icons';
import './styles.scss';
import './renderer-demo.js';

IconRegistry.define([tylIconForgeLogo]);

const root = document.getElementById('root');
if (root) {
  root.innerHTML = '<agent-ui-renderer-demo></agent-ui-renderer-demo>';
}
