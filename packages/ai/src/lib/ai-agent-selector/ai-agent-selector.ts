import { LitElement, TemplateResult, html, unsafeCSS, nothing, type PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import type { Agent } from '../ai-chatbot/types.js';

import '../core/popover/popover.js';
import '../core/tooltip/tooltip.js';

import styles from './ai-agent-selector.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-agent-selector': AiAgentSelectorComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-agent-selector-change': CustomEvent<ForgeAiAgentSelectorChangeEventData>;
  }
}

export interface ForgeAiAgentSelectorChangeEventData {
  agent: Agent;
  previousAgentId: string | undefined;
}

export const AiAgentSelectorComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-agent-selector';

/**
 * @summary Agent selector component for switching between AI agents.
 *
 * @description
 * Displays the current agent name with a dropdown to select from available agents.
 * When no agents are provided, displays static title text.
 *
 * @tag forge-ai-agent-selector
 *
 * @property {Agent[]} agents - Array of available agents
 * @property {string} selectedAgentId - ID of the currently selected agent
 * @property {string} titleText - Fallback text when no agent is selected
 * @property {boolean} disabled - Disables the selector (e.g., during streaming)
 *
 * @event forge-ai-agent-selector-change - Fired when an agent is selected
 */
@customElement(AiAgentSelectorComponentTagName)
export class AiAgentSelectorComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: false })
  public agents: Agent[] = [];

  @property({ attribute: 'selected-agent-id' })
  public selectedAgentId?: string;

  @property({ attribute: 'title-text' })
  public titleText = 'AI Assistant';

  @property({ type: Boolean, reflect: true })
  public disabled = false;

  @state()
  private _open = false;

  @state()
  private _focusedIndex = -1;

  @state()
  private _isTextOverflowing = false;

  @query('.trigger-button')
  private _triggerButton?: HTMLButtonElement;

  @query('.agent-list')
  private _agentList?: HTMLElement;

  #openedViaKeyboard = false;

  get #selectedAgent(): Agent | undefined {
    return this.agents.find(a => a.id === this.selectedAgentId);
  }

  get #displayText(): string {
    return this.#selectedAgent?.name ?? this.titleText;
  }

  get #hasAgents(): boolean {
    return this.agents.length > 0;
  }

  get #tooltipContent(): string {
    const agent = this.#selectedAgent;
    if (!agent) {
      return this.titleText;
    }
    return agent.description ? `${agent.name}\n${agent.description}` : agent.name;
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    if (
      changedProperties.has('selectedAgentId') ||
      changedProperties.has('titleText') ||
      changedProperties.has('agents')
    ) {
      this.#checkTextOverflow();
    }
  }

  #checkTextOverflow(): void {
    requestAnimationFrame(() => {
      const textElement = this.shadowRoot?.querySelector('.trigger-text, .title-text') as HTMLElement;
      if (textElement) {
        const isOverflowing = textElement.scrollWidth > textElement.offsetWidth;
        if (this._isTextOverflowing !== isOverflowing) {
          this._isTextOverflowing = isOverflowing;
        }
      }
    });
  }

  #handleTriggerClick(): void {
    if (this.disabled) {
      return;
    }
    this.#openedViaKeyboard = false;
    this._open = !this._open;
    if (this._open) {
      this._focusedIndex = -1;
    }
  }

  #handlePopoverToggle(event: CustomEvent<{ open: boolean }>): void {
    this._open = event.detail.open;
    if (!this._open) {
      this._focusedIndex = -1;
      this._triggerButton?.focus();
    } else if (this.#openedViaKeyboard) {
      this.#focusFirstItem();
      this.#openedViaKeyboard = false;
    }
  }

  #handleKeyDown(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }

    switch (event.key) {
      case 'Enter':
      case ' ':
        if (event.target === this._triggerButton) {
          event.preventDefault();
          this.#openedViaKeyboard = true;
          this._open = true;
        } else if (this._open && this._focusedIndex >= 0) {
          event.preventDefault();
          this.#selectAgent(this.agents[this._focusedIndex]);
        }
        break;

      case 'Escape':
        if (this._open) {
          event.preventDefault();
          event.stopPropagation();
          this._open = false;
          this._triggerButton?.focus();
        }
        break;

      case 'ArrowDown':
        event.preventDefault();
        if (this._open) {
          this.#moveSelection(1);
        } else if (event.target === this._triggerButton) {
          this.#openedViaKeyboard = true;
          this._open = true;
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (this._open) {
          this.#moveSelection(-1);
        }
        break;

      case 'Home':
        if (this._open) {
          event.preventDefault();
          this._focusedIndex = 0;
          this.#updateItemFocus();
        }
        break;

      case 'End':
        if (this._open) {
          event.preventDefault();
          this._focusedIndex = Math.max(0, this.agents.length - 1);
          this.#updateItemFocus();
        }
        break;
    }
  }

  #moveSelection(direction: number): void {
    if (this.agents.length === 0) {
      return;
    }

    if (this._focusedIndex === -1) {
      this._focusedIndex = direction > 0 ? 0 : this.agents.length - 1;
    } else {
      let newIndex = this._focusedIndex + direction;
      if (newIndex < 0) {
        newIndex = this.agents.length - 1;
      } else if (newIndex >= this.agents.length) {
        newIndex = 0;
      }
      this._focusedIndex = newIndex;
    }

    this.#updateItemFocus();
  }

  #updateItemFocus(): void {
    const items = this._agentList?.querySelectorAll('.agent-item') as NodeListOf<HTMLElement>;
    items?.forEach((item, index) => {
      item.setAttribute('tabindex', index === this._focusedIndex ? '0' : '-1');
      if (index === this._focusedIndex) {
        item.focus();
      }
    });
  }

  #focusFirstItem(): void {
    if (this.agents.length > 0) {
      this._focusedIndex = 0;
      requestAnimationFrame(() => {
        this.#updateItemFocus();
      });
    }
  }

  #selectAgent(agent: Agent): void {
    const previousAgentId = this.selectedAgentId;
    if (agent.id === previousAgentId) {
      this._open = false;
      return;
    }

    this.dispatchEvent(
      new CustomEvent('forge-ai-agent-selector-change', {
        detail: { agent, previousAgentId },
        bubbles: true,
        composed: true
      })
    );

    this._open = false;
  }

  #handleAgentClick(agent: Agent): void {
    this.#selectAgent(agent);
  }

  get #triggerTemplate(): TemplateResult {
    return html`
      <button
        class="trigger-button"
        id="agent-selector-trigger"
        ?disabled=${this.disabled}
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        @click=${this.#handleTriggerClick}
        @keydown=${this.#handleKeyDown}>
        <span class="trigger-text">${this.#displayText}</span>
        <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>
    `;
  }

  get #tooltipTemplate(): TemplateResult | typeof nothing {
    if (!this._isTextOverflowing) {
      return nothing;
    }
    return html`
      <forge-ai-tooltip for="agent-selector-trigger" placement="bottom"> ${this.#tooltipContent} </forge-ai-tooltip>
    `;
  }

  get #dropdownTemplate(): TemplateResult {
    return html`
      <forge-ai-popover
        .anchor=${this._triggerButton ?? null}
        placement="bottom-start"
        ?open=${this._open}
        flip
        shift
        @forge-ai-popover-toggle=${this.#handlePopoverToggle}>
        <div class="agent-list" role="listbox" aria-label="Select an agent" @keydown=${this.#handleKeyDown}>
          ${this.agents.map(
            (agent, index) => html`
              <div
                class=${classMap({
                  'agent-item': true,
                  'agent-item--focused': index === this._focusedIndex,
                  'agent-item--selected': agent.id === this.selectedAgentId
                })}
                role="option"
                tabindex=${index === this._focusedIndex ? '0' : '-1'}
                aria-selected=${agent.id === this.selectedAgentId}
                @click=${() => this.#handleAgentClick(agent)}>
                <span class="agent-name">${agent.name}</span>
              </div>
            `
          )}
        </div>
      </forge-ai-popover>
    `;
  }

  get #staticTitleTemplate(): TemplateResult {
    return html`<span class="title-text" id="agent-selector-trigger">${this.titleText}</span>`;
  }

  public override render(): TemplateResult {
    return html`
      ${when(
        this.#hasAgents,
        () => html` ${this.#triggerTemplate} ${this.#tooltipTemplate} ${this.#dropdownTemplate} `,
        () => this.#staticTitleTemplate
      )}
    `;
  }
}
