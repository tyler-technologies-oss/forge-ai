import type { FileAttachment, UploadedFileMetadata } from './types.js';

export interface FileUploadManagerConfig {
  uploadCallback?: (file: File) => Promise<UploadedFileMetadata>;
  onError?: (error: string) => void;
  onStateChange?: () => void;
}

/**
 * Manages file attachment and upload lifecycle for the chatbot.
 *
 * Responsibilities:
 * - Tracks pending file attachments before upload
 * - Manages File objects associated with attachments
 * - Orchestrates file upload process with progress tracking
 * - Provides clean API for file operations
 */
export class FileUploadManager {
  private _config: FileUploadManagerConfig;
  private _pendingAttachments: FileAttachment[] = [];
  private _fileMap = new Map<string, File>();
  private _uploadInProgress = false;

  constructor(config: FileUploadManagerConfig) {
    this._config = config;
  }

  public get pendingAttachments(): FileAttachment[] {
    return this._pendingAttachments;
  }

  public get isUploading(): boolean {
    return this._uploadInProgress;
  }

  public updateConfig(config: Partial<FileUploadManagerConfig>): void {
    this._config = { ...this._config, ...config };
  }

  public addAttachment(fileId: string, file: File, metadata: Omit<FileAttachment, 'id'>): void {
    const attachment: FileAttachment = {
      id: fileId,
      ...metadata
    };

    this._pendingAttachments.push(attachment);
    this._fileMap.set(fileId, file);
    this._config.onStateChange?.();
  }

  public removeAttachment(attachmentId: string): void {
    this._pendingAttachments = this._pendingAttachments.filter(a => a.id !== attachmentId);
    this._fileMap.delete(attachmentId);
    this._config.onStateChange?.();
  }

  public removeAttachmentByFilename(filename: string): boolean {
    const attachment = this._pendingAttachments.find(a => a.filename === filename);
    if (!attachment) {
      return false;
    }

    this.removeAttachment(attachment.id);
    return true;
  }

  public updateProgress(filename: string, progress: number): void {
    const attachment = this._pendingAttachments.find(a => a.filename === filename);
    if (attachment) {
      attachment.uploading = true;
      attachment.progress = progress;
      this._config.onStateChange?.();
    }
  }

  public clearProgress(): void {
    this._pendingAttachments.forEach(attachment => {
      attachment.uploading = false;
      attachment.progress = undefined;
    });
    this._config.onStateChange?.();
  }

  public async uploadFiles(): Promise<UploadedFileMetadata[]> {
    if (!this._config.uploadCallback) {
      throw new Error('File upload not configured');
    }

    try {
      this._uploadInProgress = true;
      this._config.onStateChange?.();

      const files = Array.from(this._fileMap.values());
      const results = await Promise.all(files.map(file => this._config.uploadCallback?.(file)));

      return results as UploadedFileMetadata[];
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'File upload failed';
      this._config.onError?.(errorMessage);
      throw error;
    } finally {
      this._uploadInProgress = false;
      this._config.onStateChange?.();
      this.clearProgress();
    }
  }

  public consumeAttachments(): FileAttachment[] {
    const attachments = [...this._pendingAttachments];
    this._pendingAttachments = [];
    this._fileMap.clear();
    this._config.onStateChange?.();
    return attachments;
  }

  public clear(): void {
    this._pendingAttachments = [];
    this._fileMap.clear();
    this._config.onStateChange?.();
  }
}
