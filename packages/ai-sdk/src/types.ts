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
  /** Unique identifier for the agent. Either agentId or teamId is required. */
  agentId?: string;
  /** Unique identifier for the team. Either agentId or teamId is required. */
  teamId?: string;
  /** Base URL of the Tyler AI backend service. */
  baseUrl: string;
  /** Display format for the chatbot: 'floating' (FAB), 'sidebar', or 'threads'. Defaults to 'floating'. */
  chatViewType?: 'floating' | 'sidebar' | 'threads';
  /** CSS selector string or HTMLElement where the chatbot will be mounted. Defaults to document.body. */
  mountPoint?: string | HTMLElement;
  /** Credentials mode for fetch requests. Defaults to 'include'. */
  credentials?: RequestCredentials;
  /** Custom HTTP headers to include with API requests. */
  headers?: Record<string, string>;
  /** Custom handler for file upload events. If not provided, uses the default upload handler. */
  fileUploadHandler?: (event: FileUploadEvent) => Promise<void> | void;
  /** Callback invoked when the chatbot is fully initialized and ready. */
  onReady?: (api: ChatbotAPI) => void;
  /** Callback invoked when an error occurs during initialization or runtime. */
  onError?: (error: Error) => void;
  /** Whether to show the trigger button for floating/sidebar views. Defaults to true. */
  showTriggerButton?: boolean;
  /** Whether the chatbot should be open on initial load. Only applies to floating/sidebar views. */
  initialOpen?: boolean;
}

export interface BaseChatbotAPI {
  /** Send a message to the agent with optional file attachments. */
  sendMessage(message: string, files?: File[]): Promise<void>;
  /** Clear all messages in the current conversation. */
  clearMessages(): void;
  /** Get all messages in the current conversation. */
  getMessages(): ChatMessage[];
  /** The agent adapter instance managing communication with the backend. */
  adapter: AgUiAdapter;
  /** The AgentRunner class for executing agent logic. */
  agentRunner: typeof AgentRunner;
  /** Reference to the chatbot's root HTML element. */
  element: HTMLElement;
  /** Clean up and remove the chatbot instance. */
  destroy(): void;
}

export interface OpenableAPI extends BaseChatbotAPI {
  /** Show the chatbot interface. */
  show(): void;
  /** Hide the chatbot interface. */
  close(): void;
  /** Toggle the chatbot interface visibility. */
  toggle(): void;
  /** Whether the chatbot interface is currently open. */
  readonly open: boolean;
}

export interface FloatingChatAPI extends OpenableAPI {
  /** Reference to the floating action button element, if present. */
  fabElement?: HTMLElement;
}

/** API for sidebar-style chatbot interface. */
export interface SidebarChatAPI extends OpenableAPI {}

/** API for threads-style chatbot interface (always visible). */
export interface ThreadsChatAPI extends BaseChatbotAPI {}

export type ChatbotAPI = FloatingChatAPI | SidebarChatAPI | ThreadsChatAPI;

export interface AgentUIConfig {
  /** Unique identifier for the agent. */
  id?: string;
  /** Display name of the agent. */
  name?: string;
  /** Description of the agent's purpose and capabilities. */
  description?: string;
  /** Version identifier for the agent. */
  version?: string;
  /** Configuration for the underlying AI model. */
  model?: {
    /** AI provider (e.g., 'openai', 'anthropic'). */
    provider?: string;
    /** Model identifier (e.g., 'gpt-4', 'claude-3'). */
    model?: string;
    /** Sampling temperature for response generation (0-1). */
    temperature?: number;
    /** Maximum tokens in a response. */
    maxTokens?: number;
  };
  /** Agent metadata and history. */
  metadata?: {
    /** ISO timestamp when the agent was created. */
    createdAt?: string;
    /** ISO timestamp when the agent was last updated. */
    updatedAt?: string;
    /** Files that have been uploaded to the agent. */
    uploadedFiles?: unknown[];
  };
  /** Configuration for the chat interface experience. */
  chatExperience?: {
    /** Initial message displayed when the chat starts. Supports template variables like {{name}}, {{email}}, {{id}}. */
    welcomeMessage?: string;
    /** Suggested questions or prompts to help users get started. */
    sampleQuestions?: string[];
    /** File upload functionality toggle. */
    fileUpload?: 'on' | 'off';
    /** ISO timestamp when chat experience settings were last updated. */
    updatedAt?: string;
  };
}

export interface AuthConfig {
  /** Whether authentication is required for the agent. */
  authEnabled: boolean;
}

export interface AuthStatus {
  /** Whether the user is currently authenticated. */
  isAuthenticated: boolean;
  /** Details about the authenticated user. */
  userDetails?: {
    /** Unique identifier for the user. */
    id: string;
    /** User's email address. */
    email: string;
    /** User's display name. */
    name: string;
  };
}

declare global {
  interface Window {
    TylerAI?: ChatbotAPI;
  }
}

export type { ChatMessage, ToolDefinition, Suggestion, UploadedFileMetadata };
