import { LitElement, html, unsafeCSS, type TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

import styles from './payment-form.scss?inline';

interface PaymentFormProps {
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
  includeBilling?: boolean;
}

@customElement('agentui-payment-form')
export class AgentUIPaymentFormComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public cardNumber = '';
  @property({ type: String }) public expiry = '';
  @property({ type: String }) public cvv = '';
  @property({ type: Boolean }) public includeBilling = false;

  protected override render(): TemplateResult {
    return html`
      <forge-card>
        <div class="payment-form">
          <h3 class="forge-typography--heading4">Payment Information</h3>
          <div class="payment-form__fields">
            <forge-text-field>
              <input
                type="text"
                .value=${this.cardNumber}
                placeholder="1234 5678 9012 3456"
                maxlength="19"
                @input=${this.#handleCardNumberInput} />
              <label>Card Number *</label>
            </forge-text-field>

            <div class="payment-form__row">
              <forge-text-field>
                <input
                  type="text"
                  .value=${this.expiry}
                  placeholder="MM/YY"
                  maxlength="5"
                  @input=${this.#handleExpiryInput} />
                <label>Expiry Date *</label>
              </forge-text-field>

              <forge-text-field>
                <input
                  type="password"
                  .value=${this.cvv}
                  placeholder="123"
                  maxlength="4"
                  @input=${this.#handleCvvInput} />
                <label>CVV *</label>
              </forge-text-field>
            </div>

            <forge-checkbox .checked=${this.includeBilling} @change=${this.#handleBillingToggle}
              >Use different billing address</forge-checkbox
            >

            ${this.includeBilling
              ? html`
                  <div class="payment-form__billing">
                    <p class="forge-typography--caption">
                      Billing address fields would be displayed here when enabled.
                    </p>
                  </div>
                `
              : nothing}
          </div>
        </div>
      </forge-card>
    `;
  }

  #handleCardNumberInput = (e: Event): void => {
    const input = e.target as HTMLInputElement;
    let value = input.value.replace(/\s/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();
    this.cardNumber = value;
    this.#emitChange();
  };

  #handleExpiryInput = (e: Event): void => {
    const input = e.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.expiry = value;
    this.#emitChange();
  };

  #handleCvvInput = (e: Event): void => {
    this.cvv = (e.target as HTMLInputElement).value;
    this.#emitChange();
  };

  #handleBillingToggle = (e: Event): void => {
    this.includeBilling = (e.target as HTMLInputElement).checked;
    this.#emitChange();
  };

  #emitChange(): void {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          cardNumber: this.cardNumber,
          expiry: this.expiry,
          cvv: this.cvv,
          includeBilling: this.includeBilling
        },
        bubbles: true,
        composed: true
      })
    );
  }
}

export function PaymentForm(ctx: ComponentContext<PaymentFormProps>): TemplateResult {
  const { cardNumber = '', expiry = '', cvv = '', includeBilling = false } = ctx.props;

  return html`
    <agentui-payment-form
      .cardNumber=${cardNumber}
      .expiry=${expiry}
      .cvv=${cvv}
      .includeBilling=${includeBilling}
      @change=${(e: CustomEvent) => ctx.emit('change', e.detail)}>
    </agentui-payment-form>
  `;
}

export const PaymentFormSchema = z.object({
  cardNumber: z.string().describe('Credit card number (with optional spaces)').optional(),
  expiry: z.string().describe('Expiry date in MM/YY format').optional(),
  cvv: z.string().describe('Card CVV (3-4 digits)').optional(),
  includeBilling: z.boolean().describe('Whether to include separate billing address').optional()
});

declare global {
  interface HTMLElementTagNameMap {
    'agentui-payment-form': AgentUIPaymentFormComponent;
  }
}
