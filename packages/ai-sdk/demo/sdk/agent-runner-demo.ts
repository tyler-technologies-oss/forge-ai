import {
  defineScaffoldComponent,
  defineAppBarComponent,
  defineCardComponent,
  defineIconComponent,
  defineTextFieldComponent,
  defineCircularProgressComponent,
  IconRegistry,
  ToastComponent
} from '@tylertech/forge';
import { tylIconForgeLogo } from '@tylertech/tyler-icons';
import '@tylertech/forge-ai/ai-button';
import { FoundryAgentRunner } from '../../src/index.js';
import type { ToolDefinition } from '../../src/types.js';
import { DEFAULT_CONFIG } from './shared.js';

defineScaffoldComponent();
defineAppBarComponent();
defineCardComponent();
defineIconComponent();
defineTextFieldComponent();
defineCircularProgressComponent();
IconRegistry.define(tylIconForgeLogo);

interface ExtractedFormData {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
}

const inputText = document.getElementById('input-text') as HTMLTextAreaElement;
const extractBtn = document.getElementById('extract-btn') as HTMLButtonElement;
const progress = document.getElementById('progress') as HTMLElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const companyInput = document.getElementById('company') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const addressInput = document.getElementById('address') as HTMLInputElement;
const cityInput = document.getElementById('city') as HTMLInputElement;
const stateInput = document.getElementById('state') as HTMLInputElement;
const zipInput = document.getElementById('zip') as HTMLInputElement;

const formInputs = [
  inputText,
  nameInput,
  companyInput,
  emailInput,
  phoneInput,
  addressInput,
  cityInput,
  stateInput,
  zipInput
];

function showToast(message: string, theme: 'error' | 'success' | 'warning' | 'info' = 'info'): void {
  ToastComponent.present({ message, duration: 3000, theme });
}

const fillContactFormTool: ToolDefinition<ExtractedFormData> = {
  name: 'fillContactForm',
  displayName: 'Fill Contact Form',
  description: 'Fill contact form with extracted data',
  parameters: {
    type: 'object' as const,
    properties: {
      name: { type: 'string', description: 'Full name' },
      company: { type: 'string', description: 'Company name' },
      email: { type: 'string', description: 'Email address' },
      phone: { type: 'string', description: 'Phone number' },
      address: { type: 'string', description: 'Street address' },
      city: { type: 'string', description: 'City' },
      state: { type: 'string', description: 'State' },
      zip: { type: 'string', description: 'ZIP code' }
    }
  },
  handler: async context => {
    const data = context.args;
    nameInput.value = data.name || '';
    companyInput.value = data.company || '';
    emailInput.value = data.email || '';
    phoneInput.value = data.phone || '';
    addressInput.value = data.address || '';
    cityInput.value = data.city || '';
    stateInput.value = data.state || '';
    zipInput.value = data.zip || '';

    showToast('Form data extracted successfully!', 'success');
    return { success: true, message: 'Form filled successfully' };
  }
};

extractBtn.addEventListener('click', async () => {
  const text = inputText.value.trim();
  if (!text) {
    showToast('Please enter some text to extract', 'warning');
    return;
  }

  progress.style.removeProperty('display');
  formInputs.forEach(input => (input.disabled = true));

  try {
    const result = await FoundryAgentRunner.run({
      baseUrl: DEFAULT_CONFIG.baseUrl,
      agentId: DEFAULT_CONFIG.agentId,
      tools: [fillContactFormTool],
      prompt: `Extract contact and address information from the following text and use the fillContactForm tool to populate the form:\n\n${text}`
    });

    console.log('Agent run completed:', result);
  } catch (error) {
    showToast(`Extraction failed: ${(error as Error).message}`, 'error');
  } finally {
    progress.style.display = 'none';
    formInputs.forEach(input => (input.disabled = false));
  }
});
