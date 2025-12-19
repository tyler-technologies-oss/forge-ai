import type { FileAttachment, UploadedFileMetadata } from './types.js';

export interface FileUploadManagerConfig {
  onError?: (error: string) => void;
  onStateChange?: () => void;
}

interface AttachmentState {
  id: string;
  metadata: FileAttachment;
  status: 'pending' | 'uploading' | 'complete' | 'error';
  uploadedFile?: UploadedFileMetadata;
  errorMessage?: string;
}

export class FileUploadManager {
  private _config: FileUploadManagerConfig;
  private _attachments = new Map<string, AttachmentState>();
  private _abortCallbacks = new Map<string, (() => void) | null>();

  constructor(config: FileUploadManagerConfig) {
    this._config = config;
  }

  public get pendingAttachments(): FileAttachment[] {
    return Array.from(this._attachments.values())
      .filter(state => state.status === 'pending' || state.status === 'uploading')
      .map(state => state.metadata);
  }

  public get completedAttachments(): FileAttachment[] {
    return Array.from(this._attachments.values())
      .filter(state => state.status === 'complete')
      .map(state => state.metadata);
  }

  public get allAttachments(): FileAttachment[] {
    return Array.from(this._attachments.values()).map(state => state.metadata);
  }

  public get isUploading(): boolean {
    return Array.from(this._attachments.values()).some(state => state.status === 'uploading');
  }

  public updateConfig(config: Partial<FileUploadManagerConfig>): void {
    this._config = { ...this._config, ...config };
  }

  public addAttachment(fileId: string, metadata: Omit<FileAttachment, 'id'>): void {
    const attachment: FileAttachment = {
      id: fileId,
      status: 'pending',
      ...metadata
    };

    this._attachments.set(fileId, {
      id: fileId,
      metadata: attachment,
      status: 'pending'
    });

    this._config.onStateChange?.();
  }

  public removeAttachment(attachmentId: string): void {
    this._attachments.delete(attachmentId);
    this._abortCallbacks.delete(attachmentId);
    this._config.onStateChange?.();
  }

  public removeCompletedAttachment(attachmentId: string): void {
    const state = this._attachments.get(attachmentId);
    if (state?.status === 'complete') {
      this._attachments.delete(attachmentId);
      this._config.onStateChange?.();
    }
  }

  public updateProgress(fileId: string, progress: number): void {
    const state = this._attachments.get(fileId);
    if (state) {
      state.status = 'uploading';
      state.metadata.uploading = true;
      state.metadata.progress = progress;
      state.metadata.status = 'uploading';
      this._config.onStateChange?.();
    }
  }

  public markComplete(fileId: string, uploadedFile: UploadedFileMetadata): void {
    const state = this._attachments.get(fileId);
    if (state) {
      state.status = 'complete';
      state.uploadedFile = uploadedFile;
      state.metadata.uploading = false;
      state.metadata.progress = 100;
      state.metadata.status = 'success';
      state.metadata.fileId = uploadedFile.fileId;
      this._config.onStateChange?.();
    }
  }

  public markError(fileId: string, error: string): void {
    const state = this._attachments.get(fileId);
    if (state) {
      state.status = 'error';
      state.errorMessage = error;
      state.metadata.uploading = false;
      state.metadata.status = 'error';
      state.metadata.error = error;

      console.error(`File upload error for ${state.metadata.filename}: ${error}`);
      this._config.onError?.(error);

      this.removeAttachment(fileId);
    }
  }

  public registerOnAbort(fileId: string, callback: () => void): void {
    this._abortCallbacks.set(fileId, callback);
  }

  public abort(fileId: string): void {
    const callback = this._abortCallbacks.get(fileId);
    if (callback) {
      callback();
    }
    this.removeAttachment(fileId);
  }

  public canSend(): boolean {
    return !Array.from(this._attachments.values()).some(state => state.status === 'uploading');
  }

  public getCompletedUploads(): UploadedFileMetadata[] {
    return Array.from(this._attachments.values())
      .filter(state => state.status === 'complete' && state.uploadedFile)
      .map(state => state.uploadedFile) as UploadedFileMetadata[];
  }


  public clear(): void {
    this._attachments.clear();
    this._abortCallbacks.clear();
    this._config.onStateChange?.();
  }
}
