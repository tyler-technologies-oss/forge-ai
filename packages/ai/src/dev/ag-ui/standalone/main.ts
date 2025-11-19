import {
  AgUiConversation,
  ToolRegistry,
  type ToolDefinition,
  type ToolHandler,
  type AdapterState
} from '../../../lib/ai-chatbot';

let conversation: AgUiConversation | null = null;
const toolRegistry = new ToolRegistry();

interface CopyToClipboardArgs {
  text: string;
}

interface ExportJSONArgs {
  data: Record<string, unknown>;
  filename?: string;
}

const initBtn = document.getElementById('initBtn') as HTMLButtonElement;
const exportBtn = document.getElementById('exportBtn') as HTMLButtonElement;
const importBtn = document.getElementById('importBtn') as HTMLButtonElement;
const explainBtn = document.getElementById('explainBtn') as HTMLButtonElement;
const extractBtn = document.getElementById('extractBtn') as HTMLButtonElement;
const loadAnotherBtn = document.getElementById('loadAnotherBtn') as HTMLButtonElement;
const statusEl = document.getElementById('status') as HTMLDivElement;
const codeInput = document.getElementById('codeInput') as HTMLTextAreaElement;
const codeResponse = document.getElementById('codeResponse') as HTMLDivElement;
const invoiceInput = document.getElementById('invoiceInput') as HTMLTextAreaElement;
const invoiceResponse = document.getElementById('invoiceResponse') as HTMLDivElement;
const historyContent = document.getElementById('historyContent') as HTMLDivElement;
const stateConnected = document.getElementById('stateConnected') as HTMLSpanElement;
const stateRunning = document.getElementById('stateRunning') as HTMLSpanElement;
const baseUrlInput = document.getElementById('baseUrl') as HTMLInputElement;
const agentIdInput = document.getElementById('agentId') as HTMLInputElement;

const sampleInvoice2 = `INVOICE #INV-2024-5678

Bill To:
Tech Solutions Inc
456 Innovation Dr
San Francisco, CA 94105

Invoice Date: January 20, 2024
Due Date: February 19, 2024

Items:
- Cloud Infrastructure Setup: $3,500.00
- Database Migration (30 hrs @ $175/hr): $5,250.00
- Security Audit: $2,750.00

Subtotal: $11,500.00
Tax (9.25%): $1,063.75
Total Due: $12,563.75

Payment Terms: Net 30
Payment Methods: ACH, Credit Card`;

const copyToClipboardTool: ToolDefinition = {
  name: 'copyToClipboard',
  description: 'Copy text to clipboard',
  parameters: {
    type: 'object' as const,
    properties: {
      text: { type: 'string', description: 'Text to copy' }
    },
    required: ['text']
  }
};

const copyToClipboardHandler: ToolHandler<CopyToClipboardArgs, { success: boolean; message: string }> = async ({
  text
}) => {
  await navigator.clipboard.writeText(text);
  showStatus('✅ Copied to clipboard!', 'success');
  return { success: true, message: 'Copied to clipboard!' };
};

const exportJSONTool: ToolDefinition = {
  name: 'exportJSON',
  description: 'Export data as JSON file',
  parameters: {
    type: 'object' as const,
    properties: {
      data: { type: 'object', description: 'Data to export' },
      filename: { type: 'string', description: 'Filename for export' }
    },
    required: ['data']
  }
};

const exportJSONHandler: ToolHandler<ExportJSONArgs, { success: boolean; message: string }> = async ({
  data,
  filename
}) => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'export.json';
  a.click();
  URL.revokeObjectURL(url);
  showStatus('✅ JSON exported!', 'success');
  return { success: true, message: 'JSON exported!' };
};

toolRegistry.register(copyToClipboardTool, copyToClipboardHandler).register(exportJSONTool, exportJSONHandler);

function showStatus(message: string, type: 'info' | 'error' | 'success' = 'info'): void {
  statusEl.innerHTML = `<div class="status ${type}">${message}</div>`;
  setTimeout(() => {
    statusEl.innerHTML = '';
  }, 5000);
}

function updateHistory(): void {
  if (!conversation || conversation.messages.length === 0) {
    historyContent.innerHTML = '<p style="color: #999; font-style: italic">No messages yet...</p>';
    return;
  }

  historyContent.innerHTML = conversation.messages
    .map(msg => {
      return `
        <div class="message">
          <div class="message-role ${msg.role}">${msg.role.toUpperCase()}</div>
          <div class="message-content">${msg.content}</div>
        </div>
      `;
    })
    .join('');

  historyContent.scrollTop = historyContent.scrollHeight;
}

function updateStateIndicators(state: AdapterState): void {
  if (state.isConnected) {
    stateConnected.style.display = 'inline-block';
    stateConnected.classList.add('connected');
  } else {
    stateConnected.style.display = 'none';
  }

  if (state.isRunning) {
    stateRunning.style.display = 'inline-block';
    stateRunning.classList.add('running');
  } else {
    stateRunning.style.display = 'none';
  }
}

async function sendMessage(content: string, responseEl: HTMLDivElement): Promise<void> {
  responseEl.textContent = '';
  responseEl.classList.add('streaming');

  try {
    await conversation!.send(content);
    responseEl.classList.remove('streaming');
  } catch (error) {
    showStatus(`❌ Error: ${(error as Error).message}`, 'error');
    responseEl.classList.remove('streaming');
  }
}

initBtn.addEventListener('click', async () => {
  const baseUrl = baseUrlInput.value.trim();
  const agentId = agentIdInput.value.trim();

  if (!baseUrl || !agentId) {
    showStatus('Please provide both Base URL and Agent ID', 'error');
    return;
  }

  try {
    conversation = await AgUiConversation.create(
      {
        baseUrl,
        agentId,
        credentials: 'include',
        context: {
          purpose: 'standalone-adapter-demo',
          timestamp: new Date().toISOString()
        }
      },
      toolRegistry
    );

    conversation.onMessageUpdate((message, isStreaming) => {
      updateHistory();

      const isCodeExplain = message.content?.includes('code') || message.content?.includes('function');
      const targetEl = isCodeExplain ? codeResponse : invoiceResponse;

      if (message.role === 'assistant') {
        targetEl.textContent = message.content;
        if (isStreaming) {
          targetEl.classList.add('streaming');
        } else {
          targetEl.classList.remove('streaming');
        }
      }
    });

    conversation.adapter.onStateChange(state => {
      updateStateIndicators(state);
      const isRunning = state.isRunning;
      explainBtn.disabled = isRunning;
      extractBtn.disabled = isRunning;
      loadAnotherBtn.disabled = isRunning;
    });

    initBtn.disabled = true;
    baseUrlInput.disabled = true;
    agentIdInput.disabled = true;
    explainBtn.disabled = false;
    extractBtn.disabled = false;
    loadAnotherBtn.disabled = false;
    exportBtn.disabled = false;
    importBtn.disabled = false;

    updateHistory();
    showStatus('✅ Conversation initialized! Try the demos above.', 'success');
  } catch (error) {
    showStatus(`❌ Initialization failed: ${(error as Error).message}`, 'error');
  }
});

explainBtn.addEventListener('click', () => {
  const code = codeInput.value.trim();
  if (!code) {
    showStatus('Please enter some code to explain', 'error');
    return;
  }

  sendMessage(
    `Explain this code in plain English:\n\n\`\`\`\n${code}\n\`\`\`\n\nProvide a clear, concise explanation of what it does and how it works.`,
    codeResponse
  );
});

extractBtn.addEventListener('click', () => {
  const invoice = invoiceInput.value.trim();
  if (!invoice) {
    showStatus('Please provide invoice text', 'error');
    return;
  }

  sendMessage(
    `Extract structured data from this invoice:\n\n${invoice}\n\nPlease extract: invoice number, customer name, date, due date, line items with amounts, subtotal, tax, and total. Format as JSON.`,
    invoiceResponse
  );
});

loadAnotherBtn.addEventListener('click', () => {
  invoiceInput.value = sampleInvoice2;
  invoiceResponse.textContent = '';
  showStatus('📄 Loaded another invoice. Click "Extract Data" to process.', 'info');
});

exportBtn.addEventListener('click', () => {
  if (!conversation) return;

  const serialized = conversation.serialize();
  const json = JSON.stringify(serialized, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `conversation-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showStatus('✅ Conversation exported!', 'success');
});

importBtn.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';
  input.onchange = async e => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const data = JSON.parse(text);

      const baseUrl = baseUrlInput.value.trim();
      const agentId = agentIdInput.value.trim();

      conversation = AgUiConversation.deserialize(data, { baseUrl, agentId, credentials: 'include' }, toolRegistry);

      await conversation.adapter.connect();

      conversation.onMessageUpdate(() => updateHistory());
      conversation.adapter.onStateChange(updateStateIndicators);

      updateHistory();
      showStatus('✅ Conversation imported!', 'success');
    } catch (error) {
      showStatus(`❌ Import failed: ${(error as Error).message}`, 'error');
    }
  };
  input.click();
});
