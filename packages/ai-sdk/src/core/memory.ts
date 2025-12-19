import { type ThreadState, type ChatMessage, generateId } from '@tylertech/forge-ai/ai-chatbot';

export interface BackendMemoryConfig {
  baseUrl: string;
  agentId: string;
  userId: string;
  maxMessages?: number;
  headers?: Record<string, string>;
  credentials?: RequestCredentials;
}

interface BackendMessage {
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  [key: string]: unknown;
}

interface BackendMemoryResponse {
  data: BackendMessage[];
}

export async function fetchMemory(config: BackendMemoryConfig): Promise<ThreadState | null> {
  const { baseUrl, agentId, userId, maxMessages = 10, headers = {}, credentials = 'include' } = config;

  try {
    const response = await fetch(
      `${baseUrl}/api/conversation-memory/agent/${agentId}/user/${userId}?maxMessagePairs=${maxMessages}`,
      {
        method: 'GET',
        credentials,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      }
    );

    if (!response.ok) {
      return null;
    }

    const result: BackendMemoryResponse = await response.json();

    if (!result.data || !Array.isArray(result.data) || result.data.length === 0) {
      return null;
    }

    const messages: ChatMessage[] = result.data.reverse().map((msg, index) => ({
      id: generateId('msg-'),
      role: msg.role,
      content: msg.content,
      timestamp: Date.now() - (result.data.length - index) * 1000,
      status: 'complete' as const
    }));

    return {
      threadId: undefined,
      messages,
      timestamp: Date.now()
    };
  } catch (_error) {
    return null;
  }
}
