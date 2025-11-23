# @tylertech/forge-ai-sdk

Modern TypeScript SDK for embedding Tyler Forge AI chatbot components in any web application.

## Features

- **Dual-Purpose Package**: Works as both a drop-in bootstrap script and a flexible npm SDK
- **Framework Agnostic**: Pure vanilla JavaScript/TypeScript, works with any framework
- **TypeScript Support**: Full type definitions included
- **Multiple Form Factors**: Floating chat, sidebar, and threaded conversations
- **Authentication Flow**: Built-in OAuth popup and polling
- **File Upload Support**: Configurable file attachment handling
- **CDN Ready**: Optimized for CDN deployment with SRI integrity
- **Tree Shakeable**: Only load the components you need

## Installation

### NPM Package (Recommended for Applications)

```bash
npm install @tylertech/forge-ai-sdk @tylertech/forge-ai
```

### CDN Script (Drop-in Embed)

```html
<script type="module" src="https://cdn.tylertech.com/forge-ai-sdk/bootstrap.js"></script>
```

## Usage

### Option 1: NPM Package (Recommended for Applications)

```typescript
import { initChatbot } from '@tylertech/forge-ai-sdk';

const api = await initChatbot({
  agentId: 'your-agent-id',
  baseUrl: 'https://api.example.com/api/agents',
  chatViewType: 'floating',
  onReady: (api) => {
    console.log('Chatbot ready!', api);
  }
});

// Control the chatbot
api.show();
api.close();
api.toggle();

// Send messages programmatically
await api.sendMessage('Hello!');

// Access message history
const messages = api.getMessages();
api.clearMessages();

// Advanced usage
api.adapter;      // AgUiAdapter instance
api.promptRunner; // AiPromptRunner class
api.element;      // HTMLElement reference

// Cleanup
api.destroy();
```

### Option 2: CDN Import (Drop-in Embed)

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <script type="module">
    import { initChatbot } from 'https://cdn.tylertech.com/forge-ai-sdk/bootstrap.js';

    const api = await initChatbot({
      agentId: 'your-agent-id',
      baseUrl: 'https://api.example.com/api/agents',
      chatViewType: 'floating'
    });

    console.log('Chatbot ready!', api);
  </script>
</body>
</html>
```

## Configuration

### ChatbotConfig

```typescript
interface ChatbotConfig {
  agentId?: string;                    // Required if teamId not provided
  teamId?: string;                     // Required if agentId not provided
  baseUrl: string;                     // API server URL (required)
  chatViewType?: 'floating' | 'sidebar' | 'threads'; // Default: 'floating'
  mountPoint?: string | HTMLElement;   // Required for sidebar/threads
  credentials?: RequestCredentials;    // Default: 'include'
  headers?: Record<string, string>;    // Custom headers for API requests
  fileUploadHandler?: (file: File) => Promise<UploadedFileMetadata>;
  onReady?: (api: ChatbotAPI) => void;
  onError?: (error: Error) => void;
}
```

## Form Factors

### Floating Chat

Absolute positioned dialog in bottom-right corner. Ideal for support widgets.

```typescript
await initChatbot({
  agentId: 'agent-123',
  baseUrl: 'https://api.example.com/api/agents',
  chatViewType: 'floating'
});
```

### Sidebar Chat

Embedded in a container element. Ideal for in-app assistance.

```typescript
await initChatbot({
  agentId: 'agent-123',
  baseUrl: 'https://api.example.com/api/agents',
  chatViewType: 'sidebar',
  mountPoint: '#chat-sidebar'
});
```

### Threaded Chat

Multi-conversation thread list. Ideal for persistent chat history.

```typescript
await initChatbot({
  agentId: 'agent-123',
  baseUrl: 'https://api.example.com/api/agents',
  chatViewType: 'threads',
  mountPoint: '#threads-container'
});
```

## API Reference

### initChatbot(config)

Initialize and mount the chatbot component.

**Returns:** `Promise<ChatbotAPI>`

### ChatbotAPI

```typescript
interface ChatbotAPI {
  show(): void;                                    // Show the chatbot
  close(): void;                                   // Close the chatbot
  toggle(): void;                                  // Toggle visibility
  sendMessage(message: string, files?: File[]): Promise<void>;
  clearMessages(): void;                           // Clear chat history
  getMessages(): ChatMessage[];                    // Get message history
  adapter: AgUiAdapter;                            // Adapter instance
  promptRunner: typeof AiPromptRunner;            // Prompt runner class
  element: HTMLElement;                            // Component element
  destroy(): void;                                 // Cleanup and remove
}
```

### Advanced: Direct Component Usage

For maximum flexibility, use components directly:

```typescript
import { AgUiAdapter } from '@tylertech/forge-ai-sdk';
import '@tylertech/forge-ai/ai-chatbot';

const adapter = new AgUiAdapter({
  url: 'https://api.example.com/api/agents/agent-123'
});
await adapter.connect();

const chatbot = document.createElement('forge-ai-chatbot');
chatbot.adapter = adapter;
chatbot.enableFileUpload = true;
chatbot.suggestions = [
  { text: 'How do I get started?' },
  { text: 'What features are available?' }
];

document.body.appendChild(chatbot);
```

## Authentication

The SDK automatically handles OAuth authentication flows:

1. Checks if agent requires authentication
2. Opens popup window for login if needed
3. Polls for authentication status
4. Applies user details to template variables

```typescript
await initChatbot({
  agentId: 'agent-123',
  baseUrl: 'https://api.example.com',
  chatViewType: 'floating'
  // Authentication happens automatically
});
```

## File Upload

Provide a custom file upload handler:

```typescript
await initChatbot({
  agentId: 'agent-123',
  baseUrl: 'https://api.example.com/api/agents',
  fileUploadHandler: async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/upload', {
      method: 'POST',
      body: formData
    });

    return await response.json(); // Returns { fileId, filename, url }
  }
});
```

## Events

Listen for the ready event:

```typescript
window.addEventListener('tyler-ai-chatbot-ready', (event) => {
  const api = event.detail.api;
  console.log('Chatbot ready!', api);
});
```

## Build & Deploy

### Development

```bash
pnpm install
pnpm dev
```

### Build

```bash
pnpm build
```

Outputs:
- `dist/sdk.js` - Main SDK entry
- `dist/bootstrap.js` - Bootstrap script
- `dist/*.d.ts` - TypeScript definitions

### Generate SRI Hash

```bash
pnpm sri dist/bootstrap.js
```

### CDN Deployment

```html
<script
  type="module"
  src="https://cdn.tylertech.com/forge-ai-sdk/bootstrap.js"
  integrity="sha384-..."
  crossorigin="anonymous">
</script>
```

## Browser Support

- Modern browsers with ES2020+ support
- Requires `type="module"` support
- Third-party cookies must be enabled

## License

MIT
