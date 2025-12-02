import { tylIconForgeLogo, tylIconSparkles } from '@tylertech/tyler-icons';
import { ToolRegistry, type AgUiAdapterConfig } from '../../../lib/ai-chatbot';
import {
  defineAppBarComponent,
  defineButtonComponent,
  defineCardComponent,
  defineCircularProgressComponent,
  defineIconComponent,
  defineIconButtonComponent,
  definePopoverComponent,
  defineScaffoldComponent,
  defineTabBarComponent,
  defineTabComponent,
  defineTextFieldComponent,
  defineToastComponent,
  IconRegistry
} from '@tylertech/forge';
import '../../../lib/ai-button';

import { registerExtractorTools, initExtractorDemo } from './demo-extractor';
import { registerSmartCompleteTools, initSmartCompleteDemo } from './demo-smart-complete';
import { initExplainerDemo } from './demo-explainer';

defineScaffoldComponent();
defineAppBarComponent();
defineCardComponent();
defineTabBarComponent();
defineTabComponent();
defineTextFieldComponent();
defineButtonComponent();
defineIconComponent();
defineIconButtonComponent();
defineToastComponent();
defineCircularProgressComponent();
definePopoverComponent();

IconRegistry.define([tylIconForgeLogo, tylIconSparkles]);

const BASE_URL = 'http://localhost:3001/api/agents';
const AGENT_ID = 'agent-9b3ff935-f32d-477b-ac45-ce2a3570b90c';

const toolRegistry = new ToolRegistry();

const config: AgUiAdapterConfig = {
  url: `${BASE_URL}/${AGENT_ID}/ag-ui`,
  context: {
    purpose: 'ai-form-demos',
    timestamp: new Date().toISOString()
  }
};

function showToast(message: string, theme: 'error' | 'success' | 'warning' | 'info' = 'error'): void {
  const toast = document.createElement('forge-toast');
  toast.textContent = message;
  toast.theme = theme;
  toast.dismissible = true;
  toast.duration = 5000;
  document.body.appendChild(toast);
  toast.open = true;

  toast.addEventListener('forge-toast-close', () => {
    toast.remove();
  });
}

registerExtractorTools(toolRegistry, showToast);
registerSmartCompleteTools(toolRegistry, showToast);

const tabBar = document.getElementById('tabBar') as HTMLElement;
const tabPanels = {
  extractor: document.getElementById('extractor-tab') as HTMLElement,
  'smart-complete': document.getElementById('smart-complete-tab') as HTMLElement,
  explainer: document.getElementById('explainer-tab') as HTMLElement
};

tabBar.addEventListener('forge-tab-bar-change', (e: CustomEvent) => {
  const selectedTab = e.detail.index;
  const tabValues = ['extractor', 'smart-complete', 'explainer'];
  const activeTabValue = tabValues[selectedTab];

  Object.entries(tabPanels).forEach(([key, panel]) => {
    panel.style.display = key === activeTabValue ? 'block' : 'none';
  });
});

initExtractorDemo(config, toolRegistry, showToast);
initSmartCompleteDemo(config, toolRegistry, showToast);
initExplainerDemo(config, showToast);
