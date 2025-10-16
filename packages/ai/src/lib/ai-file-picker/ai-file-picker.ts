import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import styles from './ai-file-picker.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-file-picker': ForgeAiFilePickerComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-file-picker-change': CustomEvent<AiFilePickerChangeEventData>;
  }
}

/**
 * Event data interface for the file picker change event.
 */
export interface AiFilePickerChangeEventData {
  /** The selected file */
  file: File;
  /** Timestamp when the file was selected */
  timestamp: number;
}

export type AiFilePickerVariant = 'button' | 'icon-button';

/**
 * @summary An AI file picker component with button and icon-button variants.
 *
 * @description
 * A simple file picker component that allows users to select and upload files.
 * Provides both button and icon-button variants for different UI contexts.
 *
 * ## Features
 * - **Multiple Variants**: 'button' and 'icon-button' for different use cases
 * - **File Selection**: Click to open file dialog or drag & drop support
 * - **Event Emission**: Emits events when files are selected
 * - **Accessibility**: Full ARIA implementation with keyboard support
 * - **Customizable**: Accepts custom file types and styling
 *
 * ## Events
 * - **forge-ai-file-picker-change**: Fired when a file is selected with file details
 *
 * @cssprop --ai-file-picker-width - The width of the file picker button.
 * @cssprop --ai-file-picker-height - The height of the file picker button.
 *
 * @slot - The default slot for button content when no file is selected.
 * @slot icon - The icon slot for icon-button variant.
 *
 * @event {CustomEvent<AiFilePickerChangeEventData>} forge-ai-file-picker-change - Fired when a file is selected via click or drag & drop.
 * The event detail contains the selected file and timestamp.
 */
@customElement('forge-ai-file-picker')
export class ForgeAiFilePickerComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * The variant of the file picker button.
   */
  @property()
  public variant: AiFilePickerVariant = 'button';

  /**
   * Whether the file picker is disabled.
   */
  @property({ type: Boolean, reflect: true })
  public disabled = false;

  /**
   * Accepted file types (comma-separated MIME types or extensions).
   */
  @property()
  public accept = '';

  /**
   * Whether to allow multiple file selection.
   */
  @property({ type: Boolean })
  public multiple = false;

  @state()
  private _isDragOver = false;

  @query('input[type="file"]')
  private _fileInput!: HTMLInputElement;

  @query('button')
  private _button!: HTMLButtonElement;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('dragover', this._onDragOver);
    this.addEventListener('dragleave', this._onDragLeave);
    this.addEventListener('drop', this._onDrop);
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('dragover', this._onDragOver);
    this.removeEventListener('dragleave', this._onDragLeave);
    this.removeEventListener('drop', this._onDrop);
  }

  private _handleButtonClick(): void {
    if (this.disabled) {
      return;
    }
    this._fileInput.click();
  }

  private _handleFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this._emitFileChangeEvent(file);
    }
  }

  private _onDragOver = (event: DragEvent): void => {
    if (this.disabled) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this._isDragOver = true;
  };

  private _onDragLeave = (event: DragEvent): void => {
    if (this.disabled) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    // Only set to false if we're leaving the component entirely
    const rect = this.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      this._isDragOver = false;
    }
  };

  private _onDrop = (event: DragEvent): void => {
    if (this.disabled) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this._isDragOver = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      this._emitFileChangeEvent(file);
    }
  };

  private _emitFileChangeEvent(file: File): void {
    this.dispatchEvent(
      new CustomEvent<AiFilePickerChangeEventData>('forge-ai-file-picker-change', {
        detail: {
          file,
          timestamp: Date.now()
        },
        bubbles: true,
        composed: true
      })
    );
  }

  get #buttonContent(): TemplateResult {
    if (this.variant === 'icon-button') {
      return html`<slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
        </svg>
      </slot>`;
    }

    return html`<slot>Choose File</slot>`;
  }

  get #fileInput(): TemplateResult {
    return html`
      <input
        type="file"
        ?multiple=${this.multiple}
        accept=${ifDefined(this.accept || undefined)}
        @change=${this._handleFileChange}
        style="display: none;"
        tabindex="-1"
        aria-hidden="true" />
    `;
  }

  get #button(): TemplateResult {
    const buttonClasses = {
      'forge-button': this.variant === 'button',
      'forge-icon-button': this.variant === 'icon-button',
      'ai-file-picker--drag-over': this._isDragOver
    };

    return html`
      <button
        class=${classMap(buttonClasses)}
        type="button"
        ?disabled=${this.disabled}
        @click=${this._handleButtonClick}
        aria-label="Select file to upload">
        ${this.#buttonContent}
      </button>
    `;
  }

  public override render(): TemplateResult {
    return html` <div class="ai-file-picker">${this.#fileInput} ${this.#button}</div> `;
  }
}
