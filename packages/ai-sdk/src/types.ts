import type {
  ChatMessage,
  ToolDefinition,
  Suggestion,
  UploadedFileMetadata,
  AgUiAdapter,
  AiPromptExecutor
} from '@tylertech/forge-ai/ai-chatbot';

export interface ChatbotConfig {
  agentId?: string;
  teamId?: string;
  baseUrl: string;
  chatViewType?: 'floating' | 'sidebar' | 'threads';
  mountPoint?: string | HTMLElement;
  credentials?: RequestCredentials;
  headers?: Record<string, string>;
  fileUploadHandler?: (file: File) => Promise<UploadedFileMetadata>;
  onReady?: (api: ChatbotAPI) => void;
  onError?: (error: Error) => void;
}

export interface ChatbotAPI {
  show(): void;
  close(): void;
  toggle(): void;
  sendMessage(message: string, files?: File[]): Promise<void>;
  clearMessages(): void;
  getMessages(): ChatMessage[];
  adapter: AgUiAdapter;
  executor: typeof AiPromptExecutor;
  element: HTMLElement;
  destroy(): void;
}

export interface AgentUIConfig {
  chatExperience?: {
    welcomeMessage?: string;
    sampleQuestions?: string[];
    enableFileUpload?: boolean;
  };
}

export interface AuthConfig {
  authEnabled: boolean;
}

export interface AuthStatus {
  isAuthenticated: boolean;
  userDetails?: {
    id: string;
    email: string;
    name: string;
  };
}

declare global {
  interface Window {
    __TYLER_AI_CHATBOT__?: ChatbotAPI;
  }
}

export type { ChatMessage, ToolDefinition, Suggestion, UploadedFileMetadata };
