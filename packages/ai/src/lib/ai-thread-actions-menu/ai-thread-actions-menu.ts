import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import type { Thread } from '../ai-threads';
import '../ai-dropdown-menu/ai-dropdown-menu.js';
import '../ai-dropdown-menu/ai-dropdown-menu-item.js';

import styles from './ai-thread-actions-menu.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-thread-actions-menu': AiThreadActionsMenuComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-thread-actions-menu-rename': CustomEvent<ForgeAiThreadActionsMenuRenameEventData>;
    'forge-ai-thread-actions-menu-delete-click': CustomEvent<ForgeAiThreadActionsMenuDeleteClickEventData>;
    'forge-ai-thread-actions-menu-open': CustomEvent<ForgeAiThreadActionsMenuOpenEventData>;
    'forge-ai-thread-actions-menu-close': CustomEvent<void>;
  }
}

export interface ForgeAiThreadActionsMenuRenameEventData {
  id: string;
}

export interface ForgeAiThreadActionsMenuDeleteClickEventData {
  id: string;
}

export interface ForgeAiThreadActionsMenuOpenEventData {
  id: string;
}

export const AiThreadActionsMenuComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-thread-actions-menu';

/**
 * @tag forge-ai-thread-actions-menu
 *
 * @event {CustomEvent<ForgeAiThreadActionsMenuRenameEventData>} forge-ai-thread-actions-menu-rename - Fired when rename menu item is clicked.
 * @event {CustomEvent<ForgeAiThreadActionsMenuDeleteClickEventData>} forge-ai-thread-actions-menu-delete-click - Fired when delete menu item is clicked. Parent should show confirmation modal.
 * @event {CustomEvent<ForgeAiThreadActionsMenuOpenEventData>} forge-ai-thread-actions-menu-open - Fired when the dropdown menu is opened.
 * @event {CustomEvent<void>} forge-ai-thread-actions-menu-close - Fired when the dropdown menu is closed.
 *
 * @description A reusable three-dot actions menu for thread items with rename and delete actions.
 * Emits events for all actions. Parent components handle confirmation modals.
 */
@customElement(AiThreadActionsMenuComponentTagName)
export class AiThreadActionsMenuComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Object })
  public thread!: Thread;

  @property({ type: Boolean, attribute: 'show-rename' })
  public showRename = false;

  @property({ type: Boolean, attribute: 'show-delete' })
  public showDelete = false;

  #handleMenuOpen(): void {
    const event = new CustomEvent<ForgeAiThreadActionsMenuOpenEventData>('forge-ai-thread-actions-menu-open', {
      detail: { id: this.thread.id },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  #handleMenuClose(): void {
    const event = new CustomEvent('forge-ai-thread-actions-menu-close', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  #handleMenuKeyDown(evt: KeyboardEvent): void {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  }

  #handleMenuSelect(evt: Event): void {
    evt.stopPropagation();
  }

  #handleRenameClick(): void {
    const event = new CustomEvent<ForgeAiThreadActionsMenuRenameEventData>('forge-ai-thread-actions-menu-rename', {
      detail: { id: this.thread.id },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  #handleDeleteClick(): void {
    const event = new CustomEvent<ForgeAiThreadActionsMenuDeleteClickEventData>(
      'forge-ai-thread-actions-menu-delete-click',
      {
        detail: { id: this.thread.id },
        bubbles: true,
        composed: true
      }
    );
    this.dispatchEvent(event);
  }

  public override render(): TemplateResult {
    return html`
      <forge-ai-dropdown-menu
        variant="icon-button-squared"
        density="small"
        selection-mode="none"
        popover-placement="bottom-start"
        @keydown=${this.#handleMenuKeyDown}
        @forge-ai-dropdown-menu-open=${this.#handleMenuOpen}
        @forge-ai-dropdown-menu-close=${this.#handleMenuClose}
        @click=${this.#handleMenuSelect}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="trigger-content" class="forge-icon">
          <path
            d="M12 16a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2" />
        </svg>

        ${when(
          this.showRename,
          () => html`
            <forge-ai-dropdown-menu-item value="rename" @click=${this.#handleRenameClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="start" class="forge-icon">
                <path
                  d="m15 16-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06zm6.65.85c.39-.39.39-1.04 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z" />
              </svg>
              <span>Rename</span>
            </forge-ai-dropdown-menu-item>
          `
        )}
        ${when(
          this.showDelete,
          () => html`
            <forge-ai-dropdown-menu-item value="delete" @click=${this.#handleDeleteClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="start" class="forge-icon">
                <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z" />
              </svg>
              <span>Delete</span>
            </forge-ai-dropdown-menu-item>
          `
        )}
      </forge-ai-dropdown-menu>
    `;
  }
}
