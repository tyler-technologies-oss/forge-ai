export { initChatbot } from './sdk.js';
export { checkThirdPartyCookies } from './cookie-checker.js';
export { checkAuthentication } from './auth-manager.js';
export { loadAgentConfig } from './config-loader.js';
export { applyTemplateVariables, waitForDOMReady, resolveMountPoint } from './utils.js';

export { FoundryAgentAdapter } from './foundry-agent-adapter.js';
export type { FoundryAdapterConfig } from './foundry-agent-adapter.js';
export { FoundryAgentRunner } from './foundry-agent-runner.js';
export type { FoundryAgentRunnerConfig } from './foundry-agent-runner.js';
export { createAgentAdapter, configureChatbot } from './agent-adapter.js';
export type { ConfigureChatbotOptions } from './agent-adapter.js';
export { setupFileUploadHandler } from './file-upload.js';

export type {
  ChatbotConfig,
  ChatbotAPI,
  AgentUIConfig,
  AuthConfig,
  AuthStatus,
  ChatMessage,
  ToolDefinition,
  Suggestion,
  UploadedFileMetadata
} from './types.js';
