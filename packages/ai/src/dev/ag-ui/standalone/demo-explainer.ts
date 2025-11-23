import { AiPromptRunner, AgUiAdapter, type AgUiAdapterConfig } from '../../../lib/ai-chatbot';

type ShowToastFn = (message: string, theme?: 'error' | 'success' | 'warning' | 'info') => void;

export function initExplainerDemo(config: AgUiAdapterConfig, showToast: ShowToastFn): void {
  const explainButtons = document.querySelectorAll('[data-term]') as NodeListOf<HTMLElement>;

  explainButtons.forEach(button => {
    const term = button.getAttribute('data-term');
    if (!term) {
      return;
    }

    const popoverId = button.id.replace('-btn', '-popover');
    const popover = document.getElementById(popoverId) as HTMLElement & { open: boolean };
    const textEl = popover.querySelector('.explanation-text') as HTMLElement;
    const closeBtn = popover.querySelector('.close-btn') as HTMLElement;
    const icon = button.querySelector('forge-icon') as HTMLElement;
    const spinner = button.querySelector('forge-circular-progress') as HTMLElement;

    let isLoading = false;
    let hasContent = false;

    button.addEventListener('click', async () => {
      if (isLoading || hasContent) {
        popover.open = true;
        return;
      }

      isLoading = true;
      icon.style.display = 'none';
      spinner.style.display = 'block';
      button.setAttribute('disabled', '');

      const prompt = `Explain the term "${term}" in simple terms for someone who may not be familiar with it. Keep the explanation concise (2-3 sentences) and practical.`;

      try {
        const adapter = new AgUiAdapter({ ...config });
        const result = await AiPromptRunner.run({ adapter, prompt });

        textEl.textContent = result.message.content;
        hasContent = true;
        popover.open = true;
      } catch (error) {
        showToast(`Failed to get explanation: ${(error as Error).message}`);
      } finally {
        isLoading = false;
        icon.style.display = 'block';
        spinner.style.display = 'none';
        button.removeAttribute('disabled');
      }
    });

    closeBtn.addEventListener('click', () => {
      popover.open = false;
    });
  });
}
