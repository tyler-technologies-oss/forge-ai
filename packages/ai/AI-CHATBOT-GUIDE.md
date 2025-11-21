# AI Chatbot Component Guide

## Overview

The `forge-ai-chatbot` is a complete, self-contained chatbot component that implements the AG-UI protocol using an adapter pattern. It provides streaming responses, client-side tool execution, file attachments, markdown rendering, and programmatic control.

## Architecture

### Component Structure

```
┌─────────────────────────────────────────────────────┐
│           <forge-ai-chatbot>                        │
│  ┌───────────────────────────────────────────────┐  │
│  │  AiChatbotComponent (Main Component)          │  │
│  │  - Manages UI state and rendering             │  │
│  │  - Provides context to child components       │  │
│  │  - Handles user interactions                  │  │
│  └───────────────────────────────────────────────┘  │
│                      ↕                               │
│  ┌───────────────────────────────────────────────┐  │
│  │  AiChatbotAdapterBase (Abstract)              │  │
│  │  - Protocol abstraction layer                 │  │
│  │  - Event-driven callback system               │  │
│  │  - Connection & message lifecycle             │  │
│  └───────────────────────────────────────────────┘  │
│                      ↕                               │
│  ┌───────────────────────────────────────────────┐  │
│  │  AgUiAdapter (Implementation)                 │  │
│  │  - AG-UI protocol implementation              │  │
│  │  - SSE stream processing                      │  │
│  │  - Tool call handling                         │  │
│  └───────────────────────────────────────────────┘  │
│                      ↕                               │
│              Backend API (AG-UI)                     │
└─────────────────────────────────────────────────────┘
```

### State Management

Uses Lit Context API to provide shared state to nested components:

```typescript
interface ChatbotContext {
  messages: ChatMessage[];
  tools: Map<string, ToolDefinition>;
  isConnected: boolean;
  isStreaming: boolean;
}
```

### Message Flow

```
User Input → sendMessage()
    ↓
Adapter.sendMessage(messages, attachments)
    ↓
Backend API (POST /agent-id/ag-ui)
    ↓
SSE Stream Processing
    ↓
Protocol Events (TEXT_MESSAGE_*, TOOL_CALL_*)
    ↓
Adapter Callbacks (onMessageStart, onMessageDelta, etc.)
    ↓
Component Handlers (#handleMessageStart, #handleMessageDelta, etc.)
    ↓
Context Update → UI Re-render
```

## Adapter Pattern

### Base Adapter

All adapters extend `AiChatbotAdapterBase`:

```typescript
abstract class AiChatbotAdapterBase {
  // Required implementations
  abstract connect(): Promise<void>;
  abstract disconnect(): Promise<void>;
  abstract sendMessage(messages: ChatMessage[], attachments?: FileAttachment[]): void;
  abstract sendToolResult(toolCallId: string, result: unknown): void;
  abstract abort(): void;

  // Callback registration
  onMessageStart(callback: (event: MessageStartEvent) => void): void;
  onMessageDelta(callback: (event: MessageDeltaEvent) => void): void;
  onMessageEnd(callback: (event: MessageEndEvent) => void): void;
  onToolCall(callback: (event: ToolCallEvent) => void): void;
  onError(callback: (event: ErrorEvent) => void): void;
  onStateChange(callback: (state: AdapterState) => void): void;

  // Tool registration
  registerTools(tools: ToolDefinition[]): void;
  getTools(): ToolDefinition[];
  getState(): AdapterState;
}
```

### AG-UI Adapter

The included `AgUiAdapter` implements the AG-UI protocol:

**Configuration:**

```typescript
interface AgUiAdapterConfig {
  baseUrl: string; // Base URL for API
  agentId: string; // Agent identifier
  context?: Record<string, unknown>; // Optional context data
  credentials?: RequestCredentials; // Fetch credentials mode
  headers?: Record<string, string>; // Additional headers
}
```

**Creation:**

```typescript
// Manual creation
const adapter = new AgUiAdapter(config, threadId);
await adapter.connect();

// Factory method (recommended)
const adapter = await AgUiAdapter.create({
  baseUrl: 'https://api.example.com',
  agentId: 'my-agent',
  threadId: 'thread-123',  // Optional, auto-generated if not provided
  tools: [...],             // Optional
  context: {                // Optional
    userId: '123',
    sessionId: 'abc'
  }
});
```

**Protocol Events:**

The adapter processes these AG-UI SSE events:

- `TEXT_MESSAGE_START` → `onMessageStart`
- `TEXT_MESSAGE_CHUNK` / `TEXT_MESSAGE_CONTENT` → `onMessageDelta`
- `TEXT_MESSAGE_END` → `onMessageEnd`
- `TOOL_CALL_START` → initiates tool call tracking
- `TOOL_CALL_ARGS` → accumulates tool arguments
- `TOOL_CALL_END` → `onToolCall` (executes tool)
- `RUN_ERROR` / `error` → `onError`

## Usage

### Basic Setup

```typescript
import { AgUiAdapter } from '@tylertech/forge-ai';

const chatbot = document.querySelector('forge-ai-chatbot');

// Create and configure adapter
const adapter = await AgUiAdapter.create({
  baseUrl: 'https://api.example.com',
  agentId: 'my-assistant',
  context: {
    userId: getCurrentUserId(),
    pageUrl: window.location.href
  }
});

chatbot.adapter = adapter;
```

### With Tools

```typescript
// Define tools
const tools = [
  {
    name: 'getWeather',
    description: 'Get current weather for a location',
    parameters: {
      type: 'object',
      properties: {
        location: { type: 'string', description: 'City name' },
        units: { type: 'string', enum: ['celsius', 'fahrenheit'] }
      },
      required: ['location']
    }
  }
];

// Set tools on chatbot
chatbot.tools = tools;

// Handle tool calls
chatbot.addEventListener('forge-ai-chatbot-tool-call', async e => {
  const { toolName, arguments: args, respond } = e.detail;

  if (toolName === 'getWeather') {
    const weather = await fetchWeather(args.location, args.units);
    await respond({ temperature: weather.temp, condition: weather.condition });
  }
});
```

### Tool Registry Pattern

For better organization of multiple tools:

```typescript
import { ToolRegistry } from '@tylertech/forge-ai';

const registry = new ToolRegistry();

// Register tools with handlers
registry.register(
  {
    name: 'getWeather',
    description: 'Get current weather',
    parameters: {
      /* ... */
    }
  },
  async args => {
    return await fetchWeather(args.location);
  }
);

registry.register(
  {
    name: 'searchDocs',
    description: 'Search documentation',
    parameters: {
      /* ... */
    }
  },
  async args => {
    return await searchDocs(args.query);
  }
);

// Use with chatbot
chatbot.tools = registry.getDefinitions();

chatbot.addEventListener('forge-ai-chatbot-tool-call', async e => {
  try {
    const result = await registry.execute(e.detail);
    await e.detail.respond(result);
  } catch (error) {
    await e.detail.respond({ error: error.message });
  }
});
```

### File Attachments

```typescript
chatbot.enableFileUpload = true;

// Files are automatically attached when user selects them
// They're sent with the next message
```

### Suggestions

```typescript
chatbot.suggestions = [
  { text: 'How can I help you?', value: 'help' },
  { text: 'Show me examples', value: 'examples' },
  { text: 'Explain this feature', value: 'explain' }
];
```

### Custom Header

```html
<forge-ai-chatbot>
  <span slot="header-title">Support Assistant</span>
</forge-ai-chatbot>
```

### Programmatic Control

```typescript
// Send message programmatically
chatbot.sendMessage('Hello, assistant!');

// With attachments
const file = new File(['content'], 'doc.txt', { type: 'text/plain' });
chatbot.sendMessage('Analyze this file', [{ file, timestamp: Date.now() }]);

// Abort current response
chatbot.abort();

// Clear conversation
chatbot.clearMessages();

// Get message history
const messages = chatbot.getMessages();

// Restore conversation
chatbot.setMessages(savedMessages);
```

## Events

### Message Events

```typescript
// User sends message
chatbot.addEventListener('forge-ai-chatbot-message-sent', e => {
  console.log('User sent:', e.detail.message);
});

// Assistant completes message
chatbot.addEventListener('forge-ai-chatbot-message-received', e => {
  console.log('Assistant replied:', e.detail.message);
});
```

### Tool Events

```typescript
chatbot.addEventListener('forge-ai-chatbot-tool-call', async e => {
  const { toolCallId, toolName, arguments: args, respond } = e.detail;

  // Execute tool
  const result = await executeMyTool(toolName, args);

  // Send result back to assistant
  await respond(result);
});
```

### Error Events

```typescript
chatbot.addEventListener('forge-ai-chatbot-error', e => {
  console.error('Chatbot error:', e.detail.error);
});
```

### Connection Events

```typescript
chatbot.addEventListener('forge-ai-chatbot-connected', () => {
  console.log('Connected to backend');
});

chatbot.addEventListener('forge-ai-chatbot-disconnected', () => {
  console.log('Disconnected from backend');
});
```

### Header Events

```typescript
chatbot.showExpandButton = true;
chatbot.showMinimizeButton = true;

chatbot.addEventListener('forge-ai-chatbot-expand', () => {
  // Handle expand
});

chatbot.addEventListener('forge-ai-chatbot-minimize', () => {
  // Handle minimize
});

chatbot.addEventListener('forge-ai-chatbot-clear', e => {
  // Cancelable - prevent default to keep messages
  if (!confirm('Clear conversation?')) {
    e.preventDefault();
  }
});

chatbot.addEventListener('forge-ai-chatbot-info', () => {
  // Show info dialog
});
```

## Properties

| Property             | Type                   | Default               | Description                    |
| -------------------- | ---------------------- | --------------------- | ------------------------------ |
| `adapter`            | `AiChatbotAdapterBase` | `undefined`           | Protocol adapter instance      |
| `tools`              | `ToolDefinition[]`     | `undefined`           | Available tools                |
| `enableFileUpload`   | `boolean`              | `false`               | Enable file picker             |
| `placeholder`        | `string`               | `'Ask a question...'` | Input placeholder              |
| `suggestions`        | `Suggestion[]`         | `undefined`           | Empty state suggestions        |
| `showExpandButton`   | `boolean`              | `false`               | Show expand button in header   |
| `showMinimizeButton` | `boolean`              | `false`               | Show minimize button in header |
| `expanded`           | `boolean`              | `false`               | Expanded state                 |
| `minimizeIcon`       | `'default' \| 'panel'` | `'default'`           | Minimize icon variant          |
| `enableReactions`    | `boolean`              | `false`               | Enable thumbs up/down          |

## Methods

| Method          | Signature                                                   | Description                      |
| --------------- | ----------------------------------------------------------- | -------------------------------- |
| `sendMessage`   | `(content: string, attachments?: FileAttachment[]) => void` | Send message programmatically    |
| `abort`         | `() => void`                                                | Abort current streaming response |
| `clearMessages` | `() => void`                                                | Clear all messages               |
| `getMessages`   | `() => ChatMessage[]`                                       | Get message history              |
| `setMessages`   | `(messages: ChatMessage[]) => void`                         | Restore message history          |

## Types

### ChatMessage

```typescript
interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'tool';
  content: string;
  timestamp: number;
  status: 'pending' | 'streaming' | 'complete' | 'error';
  toolCalls?: ToolCall[];
  attachments?: FileAttachment[];
}
```

### ToolDefinition

```typescript
interface ToolDefinition {
  name: string;
  description: string;
  parameters: {
    type: 'object';
    properties: Record<string, unknown>;
    required?: string[];
  };
}
```

### ToolCall

```typescript
interface ToolCall {
  id: string;
  messageId: string;
  name: string;
  args: Record<string, unknown>;
  result?: unknown;
  status: 'pending' | 'executing' | 'complete' | 'error';
}
```

## Custom Adapters

Create custom adapters for different protocols:

```typescript
import { AiChatbotAdapterBase } from '@tylertech/forge-ai';

export class CustomAdapter extends AiChatbotAdapterBase {
  async connect(): Promise<void> {
    // Establish connection
    this._updateState({ isConnected: true });
  }

  async disconnect(): Promise<void> {
    // Clean up
    this._updateState({ isConnected: false });
  }

  sendMessage(messages: ChatMessage[], attachments?: FileAttachment[]): void {
    this._updateState({ isRunning: true });

    // Send to your backend
    this.myBackend.send(messages).then(stream => {
      stream.on('start', id => this._emitMessageStart(id));
      stream.on('chunk', (id, text) => this._emitMessageDelta(id, text));
      stream.on('end', id => this._emitMessageEnd(id));
      stream.on('tool', evt => this._emitToolCall(evt));
      stream.on('error', msg => this._emitError(msg));
    });
  }

  sendToolResult(toolCallId: string, result: unknown): void {
    // Send tool result to backend
  }

  abort(): void {
    // Cancel current request
    this._updateState({ isRunning: false });
  }
}
```

## Best Practices

1. **Adapter lifecycle**: Always create adapter before setting on chatbot
2. **Tool handlers**: Keep tool execution logic separate from chatbot
3. **Error handling**: Always handle `forge-ai-chatbot-error` events
4. **Message persistence**: Use `getMessages`/`setMessages` to save/restore conversations
5. **Cleanup**: Disconnect adapter when component unmounts
6. **Thread IDs**: Preserve `threadId` to maintain conversation context across page reloads

## Thread Persistence

The AG-UI protocol requires a `threadId` to maintain conversation context. If you want conversations to persist across page reloads, you **must** explicitly store and restore the thread ID.

### Why Thread Persistence Matters

- Without persistence: Each page reload creates a new thread, losing conversation history on the backend
- With persistence: The backend can retrieve and continue the conversation seamlessly

### Implementation Pattern

```typescript
// 1. Load or generate thread ID on init
const threadId = sessionStorage.getItem('chatbot-thread-id') || generateId('thread');

// 2. Create adapter with the thread ID
const adapter = await AgUiAdapter.create({
  baseUrl: 'https://api.example.com',
  agentId: 'my-agent',
  threadId // Pass the persisted thread ID
});

// 3. Store the thread ID for future sessions
sessionStorage.setItem('chatbot-thread-id', adapter.threadId);

// 4. Optionally restore message history from local storage
const savedMessages = sessionStorage.getItem('chatbot-messages');
if (savedMessages) {
  chatbot.setMessages(JSON.parse(savedMessages));
}

// 5. Save messages on every update
chatbot.addEventListener('forge-ai-chatbot-message-received', () => {
  const messages = chatbot.getMessages();
  sessionStorage.setItem('chatbot-messages', JSON.stringify(messages));
});
```

### Storage Options

- **`sessionStorage`**: Persists within the same tab/window (cleared on tab close)
- **`localStorage`**: Persists across tabs and browser restarts (requires manual cleanup)
- **URL parameters**: Thread ID in URL (e.g., `?thread=abc123`) for shareable conversations
- **Backend session**: Store thread ID server-side tied to user authentication

### Important Notes

- The `threadId` is **not automatically persisted** by the adapter
- You must access it via `adapter.threadId` and store it yourself
- Backend threads may expire after inactivity (check your backend configuration)
- Always validate that restored thread IDs are still valid on the backend

## Example: Complete Implementation

```typescript
import { AgUiAdapter, ToolRegistry } from '@tylertech/forge-ai';

class ChatbotManager {
  private chatbot: AiChatbotComponent;
  private adapter: AgUiAdapter;
  private registry = new ToolRegistry();

  async init() {
    this.chatbot = document.querySelector('forge-ai-chatbot');

    // Register tools
    this.registry.register(weatherTool, handleWeather).register(searchTool, handleSearch);

    // Create adapter
    this.adapter = await AgUiAdapter.create({
      baseUrl: CONFIG.apiUrl,
      agentId: CONFIG.agentId,
      threadId: this.loadThreadId(),
      tools: this.registry.getDefinitions(),
      context: { userId: getUserId() }
    });

    // Configure chatbot
    this.chatbot.adapter = this.adapter;
    this.chatbot.tools = this.registry.getDefinitions();
    this.chatbot.suggestions = defaultSuggestions;
    this.chatbot.enableFileUpload = true;

    // Setup event handlers
    this.setupEventListeners();

    // Restore conversation
    const saved = this.loadMessages();
    if (saved) this.chatbot.setMessages(saved);
  }

  private setupEventListeners() {
    this.chatbot.addEventListener('forge-ai-chatbot-tool-call', async e => {
      try {
        const result = await this.registry.execute(e.detail);
        await e.detail.respond(result);
      } catch (error) {
        await e.detail.respond({ error: error.message });
      }
    });

    this.chatbot.addEventListener('forge-ai-chatbot-message-received', () => {
      this.saveMessages(this.chatbot.getMessages());
    });

    this.chatbot.addEventListener('forge-ai-chatbot-error', e => {
      this.handleError(e.detail.error);
    });
  }

  private loadThreadId(): string {
    return sessionStorage.getItem('threadId') || generateId('thread');
  }

  private loadMessages(): ChatMessage[] | null {
    const saved = sessionStorage.getItem('messages');
    return saved ? JSON.parse(saved) : null;
  }

  private saveMessages(messages: ChatMessage[]) {
    sessionStorage.setItem('messages', JSON.stringify(messages));
  }

  cleanup() {
    this.adapter.disconnect();
  }
}

// Usage
const manager = new ChatbotManager();
await manager.init();
```
