export { AiChatbotComponent, AiChatbotComponentTagName } from './ai-chatbot.js';
export type {
  ForgeAiChatbotMessageEventData,
  ForgeAiChatbotToolCallEventData,
  ForgeAiChatbotErrorEventData
} from './ai-chatbot.js';
export { AiChatbotToolCallComponent, AiChatbotToolCallComponentTagName } from './ai-chatbot-tool-call.js';
export type { Suggestion } from '../ai-suggestions/index.js';

// Chatbot types
export type {
  AiChatbotAdapter,
  ChatMessage,
  ToolDefinition,
  ToolCall,
  FileAttachment,
  CoreMessage,
  MessageInput,
  ResponseEvent,
  ResponseEventType,
  AdapterMessageInput,
  ContextEntry
} from './types.js';

// Chatbot context
export type { ChatbotContext } from './context.js';

// AG-UI adapter
export { createAgUiAdapter, type AgUiAdapterConfig } from './ag-ui-adapter.js';

// Utilities
export { generateId, renderMarkdown } from './utils.js';

// Reactive controller (optional export for advanced use cases)
export { ToolExecutionController, type ToolExecutionCallbacks } from './controllers/tool-execution-controller.js';
