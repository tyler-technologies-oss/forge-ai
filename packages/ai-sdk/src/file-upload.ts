import { FileUploadEvent } from '@tylertech/forge-ai';

/**
 * Create a file upload handler that streams uploads to the backend.
 * Handles progress updates, completion, and error states via SSE stream.
 */
export function setupFileUploadHandler(config: {
  baseUrl: string;
  agentId: string;
  threadId: string;
  headers?: Record<string, string>;
  credentials?: RequestCredentials;
}): (event: FileUploadEvent) => Promise<void> {
  const { baseUrl, agentId, threadId, headers = {}, credentials = 'include' } = config;

  return async ({ file, onAbort, updateProgress, markComplete, markError }: FileUploadEvent): Promise<void> => {
    const abortController = new AbortController();

    onAbort(() => {
      abortController.abort();
    });

    const formData = new FormData();
    formData.append('file', file);

    const uploadUrl = `${baseUrl}/api/agents/${agentId}/threads/${threadId}/upload`;
    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
      credentials,
      headers,
      signal: abortController.signal
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Upload failed: ${response.statusText}`);
    }

    const reader = response.body?.getReader();

    if (!reader) {
      throw new Error('Upload failed: No response body');
    }

    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = JSON.parse(line.slice(6));

          switch (data.type) {
            case 'progress':
              updateProgress(data.progress);
              break;
            case 'complete':
              markComplete({
                fileId: data.file.file_id,
                fileName: data.file.file_metadata.fileName,
                fileType: data.file.file_metadata.fileType,
                fileSize: data.file.file_metadata.fileSize,
                uploadedAt: data.file.file_metadata.uploadedAt
              });
              return;
            case 'error':
              markError(data.error);
              return;
          }
        }
      }
    }
  };
}
