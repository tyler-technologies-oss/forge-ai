import { AiTaskClient, AgUiAdapter, type ToolRegistry, type ToolDefinition, type ToolHandler, type AgUiAdapterConfig } from '../../../lib/ai-chatbot';

interface CompanyFormData {
  industry?: string;
  headquarters?: string;
  website?: string;
  employees?: string;
  founded?: string;
}

type ShowToastFn = (message: string, theme?: 'error' | 'success' | 'warning' | 'info') => void;

export function registerSmartCompleteTools(toolRegistry: ToolRegistry, showToast: ShowToastFn): void {
  const industryInput = document.getElementById('sc-industry') as HTMLInputElement;
  const headquartersInput = document.getElementById('sc-headquarters') as HTMLInputElement;
  const websiteInput = document.getElementById('sc-website') as HTMLInputElement;
  const employeesInput = document.getElementById('sc-employees') as HTMLInputElement;
  const foundedInput = document.getElementById('sc-founded') as HTMLInputElement;

  const fillCompanyFormTool: ToolDefinition = {
    name: 'fillCompanyForm',
    description: 'Fill company form with completion data',
    parameters: {
      type: 'object' as const,
      properties: {
        industry: { type: 'string', description: 'Primary industry/sector' },
        headquarters: { type: 'string', description: 'City and state/country' },
        website: { type: 'string', description: 'Company website URL' },
        employees: { type: 'string', description: 'Employee count or range' },
        founded: { type: 'string', description: 'Year founded' }
      }
    }
  };

  const fillCompanyFormHandler: ToolHandler<CompanyFormData, { success: boolean; message: string }> = async data => {
    industryInput.value = data.industry || '';
    headquartersInput.value = data.headquarters || '';
    websiteInput.value = data.website || '';
    employeesInput.value = data.employees || '';
    foundedInput.value = data.founded || '';

    showToast('Company information completed!', 'success');
    return { success: true, message: 'Form filled successfully' };
  };

  toolRegistry.register(fillCompanyFormTool, fillCompanyFormHandler);
}

export function initSmartCompleteDemo(
  config: AgUiAdapterConfig,
  toolRegistry: ToolRegistry,
  showToast: ShowToastFn
): void {
  const scBtn = document.getElementById('scBtn') as HTMLButtonElement;
  const scProgress = document.getElementById('scProgress') as HTMLElement;
  const companyInput = document.getElementById('sc-company') as HTMLInputElement;
  const industryInput = document.getElementById('sc-industry') as HTMLInputElement;
  const headquartersInput = document.getElementById('sc-headquarters') as HTMLInputElement;
  const websiteInput = document.getElementById('sc-website') as HTMLInputElement;
  const employeesInput = document.getElementById('sc-employees') as HTMLInputElement;
  const foundedInput = document.getElementById('sc-founded') as HTMLInputElement;

  const formInputs = [companyInput, industryInput, headquartersInput, websiteInput, employeesInput, foundedInput];

  scBtn.addEventListener('click', async () => {
    const companyName = companyInput.value.trim();
    if (!companyName) {
      return;
    }

    scBtn.disabled = true;
    scProgress.style.display = 'block';
    formInputs.forEach(input => (input.disabled = true));

    const prompt = `Based on the company name "${companyName}", provide information to complete this form.

Use the fillCompanyForm tool to populate the form with company information.`;

    try {
      const adapter = new AgUiAdapter(config);
      await AiTaskClient.execute({ adapter, toolRegistry, prompt });
    } catch (error) {
      showToast(`Completion failed: ${(error as Error).message}`);
    } finally {
      scBtn.disabled = false;
      scProgress.style.display = 'none';
      formInputs.forEach(input => (input.disabled = false));
    }
  });
}
