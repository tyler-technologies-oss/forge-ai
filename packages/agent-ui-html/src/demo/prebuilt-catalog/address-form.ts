import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

import styles from './address-form.scss?inline';

interface AddressFormProps {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}

const US_STATES = [
  { label: 'Alabama', value: 'AL' },
  { label: 'Alaska', value: 'AK' },
  { label: 'Arizona', value: 'AZ' },
  { label: 'Arkansas', value: 'AR' },
  { label: 'California', value: 'CA' },
  { label: 'Colorado', value: 'CO' },
  { label: 'Connecticut', value: 'CT' },
  { label: 'Delaware', value: 'DE' },
  { label: 'Florida', value: 'FL' },
  { label: 'Georgia', value: 'GA' },
  { label: 'Hawaii', value: 'HI' },
  { label: 'Idaho', value: 'ID' },
  { label: 'Illinois', value: 'IL' },
  { label: 'Indiana', value: 'IN' },
  { label: 'Iowa', value: 'IA' },
  { label: 'Kansas', value: 'KS' },
  { label: 'Kentucky', value: 'KY' },
  { label: 'Louisiana', value: 'LA' },
  { label: 'Maine', value: 'ME' },
  { label: 'Maryland', value: 'MD' },
  { label: 'Massachusetts', value: 'MA' },
  { label: 'Michigan', value: 'MI' },
  { label: 'Minnesota', value: 'MN' },
  { label: 'Mississippi', value: 'MS' },
  { label: 'Missouri', value: 'MO' },
  { label: 'Montana', value: 'MT' },
  { label: 'Nebraska', value: 'NE' },
  { label: 'Nevada', value: 'NV' },
  { label: 'New Hampshire', value: 'NH' },
  { label: 'New Jersey', value: 'NJ' },
  { label: 'New Mexico', value: 'NM' },
  { label: 'New York', value: 'NY' },
  { label: 'North Carolina', value: 'NC' },
  { label: 'North Dakota', value: 'ND' },
  { label: 'Ohio', value: 'OH' },
  { label: 'Oklahoma', value: 'OK' },
  { label: 'Oregon', value: 'OR' },
  { label: 'Pennsylvania', value: 'PA' },
  { label: 'Rhode Island', value: 'RI' },
  { label: 'South Carolina', value: 'SC' },
  { label: 'South Dakota', value: 'SD' },
  { label: 'Tennessee', value: 'TN' },
  { label: 'Texas', value: 'TX' },
  { label: 'Utah', value: 'UT' },
  { label: 'Vermont', value: 'VT' },
  { label: 'Virginia', value: 'VA' },
  { label: 'Washington', value: 'WA' },
  { label: 'West Virginia', value: 'WV' },
  { label: 'Wisconsin', value: 'WI' },
  { label: 'Wyoming', value: 'WY' }
];

const COUNTRIES = [
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
  { label: 'Mexico', value: 'MX' },
  { label: 'United Kingdom', value: 'GB' }
];

@customElement('agentui-address-form')
export class AgentUIAddressFormComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public street = '';
  @property({ type: String }) public city = '';
  @property({ type: String }) public state = '';
  @property({ type: String }) public zip = '';
  @property({ type: String }) public country = 'US';

  protected override render(): TemplateResult {
    return html`
      <forge-card>
        <div class="address-form">
          <h3 class="forge-typography--heading4">Address</h3>
          <div class="address-form__fields">
            <forge-text-field>
              <input type="text" .value=${this.street} required @input=${this.#handleStreetInput} />
              <label>Street Address *</label>
            </forge-text-field>

            <div class="address-form__row">
              <forge-text-field>
                <input type="text" .value=${this.city} required @input=${this.#handleCityInput} />
                <label>City *</label>
              </forge-text-field>

              <forge-select
                label="State"
                placeholder="Select state"
                .value=${this.state}
                required
                @change=${this.#handleStateChange}>
                <forge-option value=""></forge-option>
                ${US_STATES.map(state => html` <forge-option value=${state.value}>${state.label}</forge-option> `)}
              </forge-select>
            </div>

            <div class="address-form__row">
              <forge-text-field>
                <input type="text" .value=${this.zip} required pattern="[0-9]{5}" @input=${this.#handleZipInput} />
                <label>ZIP Code *</label>
              </forge-text-field>

              <forge-select
                label="Country"
                placeholder="Select country"
                .value=${this.country}
                @change=${this.#handleCountryChange}>
                <forge-option value=""></forge-option>
                ${COUNTRIES.map(
                  country => html` <forge-option value=${country.value}>${country.label}</forge-option> `
                )}
              </forge-select>
            </div>
          </div>
        </div>
      </forge-card>
    `;
  }

  #handleStreetInput = (e: Event): void => {
    this.street = (e.target as HTMLInputElement).value;
    this.#emitChange();
  };

  #handleCityInput = (e: Event): void => {
    this.city = (e.target as HTMLInputElement).value;
    this.#emitChange();
  };

  #handleStateChange = (e: Event): void => {
    this.state = (e.target as HTMLSelectElement).value;
    this.#emitChange();
  };

  #handleZipInput = (e: Event): void => {
    this.zip = (e.target as HTMLInputElement).value;
    this.#emitChange();
  };

  #handleCountryChange = (e: Event): void => {
    this.country = (e.target as HTMLSelectElement).value;
    this.#emitChange();
  };

  #emitChange(): void {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          street: this.street,
          city: this.city,
          state: this.state,
          zip: this.zip,
          country: this.country
        },
        bubbles: true,
        composed: true
      })
    );
  }
}

export function AddressForm(ctx: ComponentContext<AddressFormProps>): TemplateResult {
  const { street = '', city = '', state = '', zip = '', country = 'US' } = ctx.props;

  return html`
    <agentui-address-form
      .street=${street}
      .city=${city}
      .state=${state}
      .zip=${zip}
      .country=${country}
      @change=${(e: CustomEvent) => ctx.emit('change', e.detail)}>
    </agentui-address-form>
  `;
}

export const AddressFormSchema = z.object({
  street: z.string().describe('Street address').optional(),
  city: z.string().describe('City').optional(),
  state: z.string().describe('State (two-letter code)').optional(),
  zip: z.string().describe('ZIP code (5 digits)').optional(),
  country: z.string().describe('Country code (US, CA, MX, GB)').optional()
});

declare global {
  interface HTMLElementTagNameMap {
    'agentui-address-form': AgentUIAddressFormComponent;
  }
}
