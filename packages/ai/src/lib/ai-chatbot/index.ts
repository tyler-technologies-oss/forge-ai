export { AiChatbotComponent, AiChatbotComponentTagName } from './ai-chatbot.js';
export type {
  ForgeAiChatbotMessageEventData,
  ForgeAiChatbotToolCallEventData,
  ForgeAiChatbotErrorEventData,
  ForgeAiChatbotResponseFeedbackEventData,
  FeatureToggle
} from './ai-chatbot.js';
export { AiChatbotToolCallComponent, AiChatbotToolCallComponentTagName } from './ai-chatbot-tool-call.js';
export type { Suggestion } from '../ai-suggestions/index.js';

// Adapter base and events
export {
  AgentAdapter,
  type MessageStartEvent,
  type MessageDeltaEvent,
  type MessageEndEvent,
  type ToolCallEvent,
  type ToolCallStartEvent,
  type ToolCallArgsEvent,
  type ToolCallEndEvent,
  type FileUploadEvent,
  type FileRemoveEvent,
  type AdapterState,
  type ErrorEvent,
  type CustomAgentEvent,
  type RawAgentEvent,
  type RunStartedAgentEvent,
  type StepStartedAgentEvent,
  type StepFinishedAgentEvent,
  type StateSnapshotAgentEvent,
  type StateDeltaAgentEvent,
  type ActivitySnapshotAgentEvent,
  type ActivityDeltaAgentEvent
} from './agent-adapter.js';

// Chatbot types
export type {
  ChatMessage,
  ToolDefinition,
  ToolCall,
  ToolRenderer,
  IToolRenderer,
  HandlerContext,
  FileAttachment,
  UploadedFileMetadata,
  FileUploadCallbacks,
  FileUploadHandler,
  FileRemoveCallbacks,
  ForgeAiChatbotFileSelectEventData,
  ThreadState,
  FeedbackType,
  ResponseFeedback
} from './types.js';

// AG-UI adapter
export * from './ag-ui-adapter.js';
export * from './http-agent-with-credentials.js';

// Event system
export * from './event-emitter.js';

// Agent runner
export * from './agent-runner.js';

// Tool renderer helper
export * from './create-tool-renderer.js';

// Built-in tools
export {
  CONFIRM_TOOL_CALL_NAME,
  confirmActionTool,
  type ConfirmActionToolArgs as ConfirmToolCallArgs,
  type ConfirmActionToolResult as ConfirmToolCallResult
} from '../tools/ai-confirm-tool-call/index.js';

// Controllers and managers
export { MessageStateController, type MessageStateControllerConfig } from './message-state-controller.js';
export { FileUploadManager, type FileUploadManagerConfig } from './file-upload-manager.js';
export { MarkdownStreamController } from './markdown-stream-controller.js';

// Utilities
export { generateId, renderMarkdown } from './utils.js';
