import { createContext } from '@lit/context';
import type { ChatMessage, ToolDefinition } from './types';

export interface ChatbotContext {
  messages: ChatMessage[];
  tools: Map<string, ToolDefinition>;
  isConnected: boolean;
  isStreaming: boolean;
}

export const chatbotContext = createContext<ChatbotContext>('chatbot');
