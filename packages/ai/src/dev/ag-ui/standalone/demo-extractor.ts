import { AiPromptExecutor, AgUiAdapter, type ToolRegistry, type ToolDefinition, type ToolHandler, type AgUiAdapterConfig } from '../../../lib/ai-chatbot';

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

type ShowToastFn = (message: string, theme?: 'error' | 'success' | 'warning' | 'info') => void;

export function registerExtractorTools(toolRegistry: ToolRegistry, showToast: ShowToastFn): void {
  const nameInput = document.getElementById('extractor-name') as HTMLInputElement;
  const companyInput = document.getElementById('extractor-company') as HTMLInputElement;
  const emailInput = document.getElementById('extractor-email') as HTMLInputElement;
  const phoneInput = document.getElementById('extractor-phone') as HTMLInputElement;
  const addressInput = document.getElementById('extractor-address') as HTMLInputElement;
  const cityInput = document.getElementById('extractor-city') as HTMLInputElement;
  const stateInput = document.getElementById('extractor-state') as HTMLInputElement;
  const zipInput = document.getElementById('extractor-zip') as HTMLInputElement;

  const fillFormTool: ToolDefinition = {
    name: 'fillContactForm',
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
    }
  };

  const fillFormHandler: ToolHandler<ExtractedFormData, { success: boolean; message: string }> = async data => {
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
  };

  toolRegistry.register(fillFormTool, fillFormHandler);
}

export function initExtractorDemo(
  config: AgUiAdapterConfig,
  toolRegistry: ToolRegistry,
  showToast: ShowToastFn
): void {
  const extractorBtn = document.getElementById('extractorBtn') as HTMLButtonElement;
  const extractorProgress = document.getElementById('extractorProgress') as HTMLElement;
  const extractorInput = document.getElementById('extractorInput') as HTMLTextAreaElement;
  const nameInput = document.getElementById('extractor-name') as HTMLInputElement;
  const companyInput = document.getElementById('extractor-company') as HTMLInputElement;
  const emailInput = document.getElementById('extractor-email') as HTMLInputElement;
  const phoneInput = document.getElementById('extractor-phone') as HTMLInputElement;
  const addressInput = document.getElementById('extractor-address') as HTMLInputElement;
  const cityInput = document.getElementById('extractor-city') as HTMLInputElement;
  const stateInput = document.getElementById('extractor-state') as HTMLInputElement;
  const zipInput = document.getElementById('extractor-zip') as HTMLInputElement;

  const formInputs = [
    extractorBtn,
    nameInput,
    companyInput,
    emailInput,
    phoneInput,
    addressInput,
    cityInput,
    stateInput,
    zipInput,
    extractorInput
  ];

  extractorBtn.addEventListener('click', async () => {
    const text = extractorInput.value.trim();
    if (!text) {
      return;
    }

    extractorProgress.style.removeProperty('display');
    formInputs.forEach(input => (input.disabled = true));

    const prompt = `Extract contact and address information from the following text:

${text}

Use the fillContactForm tool to populate the form with the extracted data.`;

    try {
      const adapter = new AgUiAdapter(config);
      await AiPromptExecutor.execute({ adapter, toolRegistry, prompt });
    } catch (error) {
      showToast(`Extraction failed: ${(error as Error).message}`);
    } finally {
      extractorProgress.style.display = 'none';
      formInputs.forEach(input => (input.disabled = false));
    }
  });
}
