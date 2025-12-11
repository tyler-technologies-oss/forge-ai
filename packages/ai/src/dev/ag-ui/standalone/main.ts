import { tylIconForgeLogo, tylIconSparkles } from '@tylertech/tyler-icons';
import { type AgUiAdapterConfig } from '../../../lib/ai-chatbot';
import {
  defineAppBarComponent,
  defineButtonComponent,
  defineCardComponent,
  defineCircularProgressComponent,
  defineIconComponent,
  defineIconButtonComponent,
  defineListComponent,
  defineListItemComponent,
  definePopoverComponent,
  defineScaffoldComponent,
  defineTabBarComponent,
  defineTabComponent,
  defineTextFieldComponent,
  defineToastComponent,
  IconRegistry
} from '@tylertech/forge';
import '../../../lib/ai-button';

import { createExtractorTools, initExtractorDemo } from './demo-extractor';
import { createSmartCompleteTools, initSmartCompleteDemo } from './demo-smart-complete';
import { initExplainerDemo } from './demo-explainer';
import { createMultiTurnTools, initMultiTurnDemo } from './demo-multi-turn';

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
defineListComponent();
defineListItemComponent();

IconRegistry.define([tylIconForgeLogo, tylIconSparkles]);

const BASE_URL = 'https://foundry.tylertechai.com';
const AGENT_ID = 'agent-f586a37b-5a2d-4984-b791-5301105854e9';

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

const extractorTools = createExtractorTools(showToast);
const smartCompleteTools = createSmartCompleteTools(showToast);
const multiTurnTools = createMultiTurnTools();

const tabBar = document.getElementById('tabBar') as HTMLElement;
const tabPanels = {
  extractor: document.getElementById('extractor-tab') as HTMLElement,
  'smart-complete': document.getElementById('smart-complete-tab') as HTMLElement,
  explainer: document.getElementById('explainer-tab') as HTMLElement,
  'multi-turn': document.getElementById('multi-turn-tab') as HTMLElement
};

const tabValues = ['extractor', 'smart-complete', 'explainer', 'multi-turn'];

function showTab(tabValue: string): void {
  const index = tabValues.indexOf(tabValue);
  if (index === -1) {
    return;
  }

  tabBar.setAttribute('active-tab', index.toString());
  Object.entries(tabPanels).forEach(([key, panel]) => {
    panel.style.display = key === tabValue ? 'block' : 'none';
  });
}

function updateUrlWithTab(tabValue: string): void {
  const url = new URL(window.location.href);
  url.searchParams.set('tab', tabValue);
  window.history.pushState({}, '', url);
}

function getTabFromUrl(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get('tab');
}

tabBar.addEventListener('forge-tab-bar-change', (e: CustomEvent) => {
  const selectedTab = e.detail.index;
  const activeTabValue = tabValues[selectedTab];

  showTab(activeTabValue);
  updateUrlWithTab(activeTabValue);
});

window.addEventListener('popstate', () => {
  const tabValue = getTabFromUrl();
  if (tabValue && tabValues.includes(tabValue)) {
    showTab(tabValue);
  }
});

const initialTab = getTabFromUrl();
if (initialTab && tabValues.includes(initialTab)) {
  showTab(initialTab);
}

initExtractorDemo(config, extractorTools, showToast);
initSmartCompleteDemo(config, smartCompleteTools, showToast);
initExplainerDemo(config, showToast);
initMultiTurnDemo(config, multiTurnTools, showToast);
