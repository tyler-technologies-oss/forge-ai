/**
 * Generic chatbot types - protocol agnostic
 */

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: {
    type: 'object';
    properties: Record<string, unknown>;
    required?: string[];
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  timestamp: number;
  status: 'pending' | 'streaming' | 'complete' | 'error';
  toolCalls?: ToolCall[];
  attachments?: FileAttachment[];
  uploadedFiles?: UploadedFileMetadata[];
}

export interface ToolCall {
  id: string;
  messageId: string;
  name: string;
  args: Record<string, unknown>;
  result?: unknown;
  status: 'pending' | 'executing' | 'complete' | 'error';
}

export interface FileAttachment {
  id: string;
  filename: string;
  size: number;
  mimeType: string;
  timestamp: number;
  thumbnail?: string;
  uploading?: boolean;
  progress?: number;
}

export interface UploadedFileMetadata {
  fileId: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  uploadedAt: string;
}
