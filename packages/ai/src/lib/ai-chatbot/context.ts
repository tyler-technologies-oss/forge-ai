import { createContext } from '@lit/context';
import type { MessageItem, ToolDefinition } from './types';

export interface ChatbotContext {
  messageItems: MessageItem[];
  tools: Map<string, ToolDefinition>;
  isConnected: boolean;
  isStreaming: boolean;
  isUploading: boolean;
}

export const chatbotContext = createContext<ChatbotContext>('chatbot');
