import type { MastraStreamAdapter } from './mastra-stream-adapter';

export interface FileUploadConfig {
  baseUrl: string;
  agentId: string;
  threadId: string;
}

export function registerFileUploadHandler(adapter: MastraStreamAdapter, config: FileUploadConfig): void {
  const { baseUrl, agentId, threadId } = config;

  adapter.onFileUpload(async ({ file, markComplete, markError, onAbort, updateProgress }) => {
    console.log('Starting upload for file:', file.name);

    onAbort(() => {
      console.log('Upload aborted for file:', file.name);
    });

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${baseUrl}/${agentId}/threads/${threadId}/upload`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const reader = response.body!.getReader();
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
  });
}
