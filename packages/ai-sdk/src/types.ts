import type {
  ChatMessage,
  ToolDefinition,
  Suggestion,
  UploadedFileMetadata,
  FileUploadEvent,
  AgUiAdapter,
  AgentRunner
} from '@tylertech/forge-ai/ai-chatbot';

export interface ChatbotConfig {
  agentId?: string;
  teamId?: string;
  baseUrl: string;
  chatViewType?: 'floating' | 'sidebar' | 'threads';
  mountPoint?: string | HTMLElement;
  credentials?: RequestCredentials;
  headers?: Record<string, string>;
  fileUploadHandler?: (event: FileUploadEvent) => Promise<void> | void;
  onReady?: (api: ChatbotAPI) => void;
  onError?: (error: Error) => void;
  showTriggerButton?: boolean;
  initialOpen?: boolean;
}

export interface ChatbotAPI {
  show(): void;
  close(): void;
  toggle(): void;
  isOpen(): boolean;
  sendMessage(message: string, files?: File[]): Promise<void>;
  clearMessages(): void;
  getMessages(): ChatMessage[];
  adapter: AgUiAdapter;
  agentRunner: typeof AgentRunner;
  element: HTMLElement;
  destroy(): void;
}

export interface AgentUIConfig {
  id?: string;
  name?: string;
  description?: string;
  version?: string;
  model?: {
    provider?: string;
    model?: string;
    temperature?: number;
    maxTokens?: number;
  };
  metadata?: {
    createdAt?: string;
    updatedAt?: string;
    uploadedFiles?: unknown[];
  };
  chatExperience?: {
    welcomeMessage?: string;
    sampleQuestions?: string[];
    enableFileUpload?: boolean;
    updatedAt?: string;
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
    TylerAI?: ChatbotAPI;
  }
}

export type { ChatMessage, ToolDefinition, Suggestion, UploadedFileMetadata };
