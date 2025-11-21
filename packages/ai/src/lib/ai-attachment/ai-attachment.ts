import { LitElement, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';

import '../core/tooltip/tooltip.js';
import styles from './ai-attachment.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-attachment': AiAttachmentComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-attachment-remove': CustomEvent<ForgeAiAttachmentRemoveEventData>;
  }
}

export interface ForgeAiAttachmentRemoveEventData {
  filename: string;
}

export const AiAttachmentComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-attachment';

/**
 * @tag forge-ai-attachment
 *
 * @summary Displays file attachment information with optional thumbnail and removal capability.
 *
 * @description
 * A component for displaying file attachments in AI chat interfaces. Shows file metadata
 * including name, size, and type icon. Supports image thumbnails and optional removal.
 *
 * @event {CustomEvent<ForgeAiAttachmentRemoveEventData>} forge-ai-attachment-remove - Fired when the remove button is clicked
 *
 * @cssprop --forge-ai-attachment-background - Background color of the attachment
 * @cssprop --forge-ai-attachment-border-color - Border color of the attachment
 * @cssprop --forge-ai-attachment-padding - Padding inside the attachment
 * @cssprop --forge-ai-attachment-gap - Gap between elements
 */
@customElement(AiAttachmentComponentTagName)
export class AiAttachmentComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property()
  public filename = '';

  @property({ type: Number })
  public size = 0;

  @property({ attribute: 'mime-type' })
  public mimeType = '';

  @property()
  public thumbnail = '';

  @property({ type: Boolean })
  public removable = false;

  @property({ type: Boolean })
  public uploading = false;

  @property({ type: Number })
  public progress?: number;

  get #attachmentId(): string {
    return `attachment-${this.filename.replace(/[^a-zA-Z0-9]/g, '-')}`;
  }

  #handleRemove(): void {
    this.dispatchEvent(
      new CustomEvent<ForgeAiAttachmentRemoveEventData>('forge-ai-attachment-remove', {
        detail: { filename: this.filename },
        bubbles: true,
        composed: true
      })
    );
  }

  get #fileIcon(): TemplateResult {
    const category = this.#getFileCategory(this.mimeType);
    return html`
      <svg class="file-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        ${this.#getIconPath(category)}
      </svg>
    `;
  }

  #getFileCategory(mimeType: string): string {
    if (mimeType.startsWith('image/')) {
      return 'image';
    }
    if (mimeType.startsWith('video/')) {
      return 'video';
    }
    if (mimeType.startsWith('audio/')) {
      return 'audio';
    }
    if (mimeType.includes('pdf')) {
      return 'pdf';
    }
    if (mimeType.includes('word') || mimeType.includes('document')) {
      return 'document';
    }
    if (mimeType.includes('sheet') || mimeType.includes('excel')) {
      return 'spreadsheet';
    }
    if (mimeType.includes('presentation') || mimeType.includes('powerpoint')) {
      return 'presentation';
    }
    if (mimeType.includes('zip') || mimeType.includes('compressed')) {
      return 'archive';
    }
    return 'file';
  }

  #getIconPath(category: string): TemplateResult {
    switch (category) {
      case 'image':
        return html`<path
          d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
          fill="currentColor" />`;
      case 'video':
        return html`<path
          d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"
          fill="currentColor" />`;
      case 'audio':
        return html`<path
          d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"
          fill="currentColor" />`;
      case 'pdf':
        return html`<path
          d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"
          fill="currentColor" />`;
      case 'document':
        return html`<path
          d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
          fill="currentColor" />`;
      case 'spreadsheet':
        return html`<path
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
          fill="currentColor" />`;
      case 'presentation':
        return html`<path
          d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z"
          fill="currentColor" />`;
      case 'archive':
        return html`<path
          d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"
          fill="currentColor" />`;
      default:
        return html`<path
          d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
          fill="currentColor" />`;
    }
  }

  get #thumbnailTemplate(): TemplateResult | typeof nothing {
    if (!this.thumbnail) {
      return nothing;
    }

    return html`<img src=${this.thumbnail} alt="" class="thumbnail" aria-hidden="true" />`;
  }

  get #progressIndicator(): TemplateResult | typeof nothing {
    if (!this.uploading || this.progress === undefined) {
      return nothing;
    }

    return html`
      <div class="progress-overlay">
        <div class="progress-text">${this.progress}%</div>
      </div>
    `;
  }

  get #removeButton(): TemplateResult | typeof nothing {
    if (!this.removable || this.uploading) {
      return nothing;
    }

    return html`
      <button
        type="button"
        class="remove-button forge-icon-button forge-icon-button--small forge-icon-button--tonal"
        @click=${this.#handleRemove}
        aria-label="Remove ${this.filename}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M12.854 3.146a.5.5 0 0 1 0 .708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 8 3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708 0z"
            fill="currentColor" />
        </svg>
      </button>
    `;
  }

  public override render(): TemplateResult {
    const classes = {
      attachment: true,
      'forge-card': true,
      'has-thumbnail': !!this.thumbnail,
      uploading: this.uploading
    };

    return html`
      <div>
        <div
          id=${this.#attachmentId}
          class=${classMap(classes)}
          role="group"
          aria-label="File attachment: ${this.filename}">
          ${when(
            this.thumbnail,
            () => this.#thumbnailTemplate,
            () => this.#fileIcon
          )}
          ${this.#progressIndicator} ${this.#removeButton}
        </div>
        <forge-ai-tooltip for=${this.#attachmentId} .text=${this.filename} placement="top"></forge-ai-tooltip>
      </div>
    `;
  }
}
