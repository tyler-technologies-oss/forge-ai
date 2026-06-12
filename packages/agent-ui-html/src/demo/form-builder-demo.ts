import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { TemplateResult } from 'lit';
import type { Spec } from '@tylertech/agent-ui-core';
import '../lib/spec-renderer.js';
import { formBuilderRegistry } from './form-builder/registry.js';
import './prebuilt-catalog/user-profile-form.js';
import './prebuilt-catalog/address-form.js';
import './prebuilt-catalog/payment-form.js';
import './form-builder/custom-components.scss';
import './prebuilt-catalog/user-profile-form.scss';
import './prebuilt-catalog/address-form.scss';
import './prebuilt-catalog/payment-form.scss';

const FORM_SPEC = {
  root: 'main',
  elements: {
    main: {
      type: 'FormSection',
      props: {
        title: 'Dynamic Form Builder Demo',
        description:
          'Demonstrates prebuilt catalog components and custom form components with different state management patterns'
      },
      children: ['demo-info', 'user-section', 'address-section', 'payment-section', 'preferences-section', 'actions']
    },
    'demo-info': {
      type: 'ForgeInlineMessage',
      props: {
        theme: 'info'
      },
      children: [{ id: 'demo-info-icon', slot: 'icon' }, 'demo-info-text']
    },
    'demo-info-icon': {
      type: 'Icon',
      props: {
        name: 'info'
      }
    },
    'demo-info-text': {
      type: 'Text',
      props: {
        text: 'This form demonstrates various Forge components including custom catalog components and SDK primitives. Notice how state management works with two-way binding ($bindState) and event-driven updates.'
      }
    },
    'user-section': {
      type: 'UserProfileForm',
      props: {
        nameBinding: { $bindState: '/form/name' },
        emailBinding: { $bindState: '/form/email' },
        bioBinding: { $bindState: '/form/bio' },
        avatarUrlBinding: { $bindState: '/form/avatarUrl' }
      }
    },
    'address-section': {
      type: 'AddressForm',
      props: {
        street: { $state: '/form/address/street' },
        city: { $state: '/form/address/city' },
        state: { $state: '/form/address/state' },
        zip: { $state: '/form/address/zip' },
        country: { $state: '/form/address/country' }
      },
      on: {
        change: {
          action: 'update_address',
          params: { address: { $event: 'detail' } }
        }
      }
    },
    'payment-section': {
      type: 'PaymentForm',
      props: {
        cardNumber: { $state: '/form/payment/cardNumber' },
        expiry: { $state: '/form/payment/expiry' },
        cvv: { $state: '/form/payment/cvv' },
        includeBilling: { $state: '/form/payment/includeBilling' }
      },
      on: {
        change: {
          action: 'update_payment',
          params: { payment: { $event: 'detail' } }
        }
      }
    },
    'preferences-section': {
      type: 'ForgeCard',
      props: {
        outlined: false
      },
      children: ['pref-form-section']
    },
    'pref-form-section': {
      type: 'FormSection',
      props: {
        title: 'User Preferences',
        description: 'Built with SDK primitive components (ForgeTextField, ForgeCheckbox, ForgeSelect, ForgeButton)'
      },
      children: ['pref-username', 'pref-email-notifications', 'pref-theme', 'pref-newsletter', 'pref-save-button']
    },
    'pref-username': {
      type: 'ForgeTextField',
      props: {
        label: 'Username',
        valueBinding: { $bindState: '/form/preferences/username' },
        type: 'text',
        required: true
      }
    },
    'pref-email-notifications': {
      type: 'ForgeCheckbox',
      props: {
        label: 'Enable Email Notifications',
        checkedBinding: { $bindState: '/form/preferences/emailNotifications' }
      }
    },
    'pref-theme': {
      type: 'ForgeSelect',
      props: {
        label: 'Theme',
        valueBinding: { $bindState: '/form/preferences/theme' },
        options: [
          { label: 'Light', value: 'light' },
          { label: 'Dark', value: 'dark' },
          { label: 'Auto', value: 'auto' }
        ]
      }
    },
    'pref-newsletter': {
      type: 'ForgeSelect',
      props: {
        label: 'Newsletter Frequency',
        valueBinding: { $bindState: '/form/preferences/newsletterFrequency' },
        options: [
          { label: 'Daily', value: 'daily' },
          { label: 'Weekly', value: 'weekly' },
          { label: 'Monthly', value: 'monthly' },
          { label: 'Never', value: 'never' }
        ]
      }
    },
    'pref-save-button': {
      type: 'ForgeButton',
      props: {
        label: 'Save Preferences',
        variant: 'raised'
      },
      on: {
        click: {
          action: 'save_preferences',
          params: { preferences: { $state: '/form/preferences' } }
        }
      }
    },
    actions: {
      type: 'FormActions',
      props: {
        submitLabel: 'Submit Form',
        cancelLabel: 'Reset'
      },
      on: {
        submit: {
          action: 'submit_form',
          params: { formData: { $state: '/form' } }
        },
        cancel: {
          action: 'cancel_form'
        }
      }
    }
  }
};

const INITIAL_STATE = {
  form: {
    name: '',
    email: '',
    bio: '',
    avatarUrl: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: 'US'
    },
    payment: {
      cardNumber: '',
      expiry: '',
      cvv: '',
      includeBilling: false
    },
    preferences: {
      username: '',
      emailNotifications: true,
      theme: 'auto',
      newsletterFrequency: 'weekly'
    }
  }
};

@customElement('agent-ui-form-builder-demo')
export class AgentUIFormBuilderDemo extends LitElement {
  @state() private _state = INITIAL_STATE;

  protected override createRenderRoot(): HTMLElement {
    return this;
  }

  protected override render(): TemplateResult {
    return html`
      <forge-scaffold>
        <forge-app-bar slot="header" title-text="Form Builder Demo">
          <forge-icon slot="logo" name="forge_logo"></forge-icon>
        </forge-app-bar>

        <main slot="body" class="form-builder-demo">
          <div class="form-builder-demo__container">
            <div class="form-builder-demo__form">
              <spec-renderer
                .spec=${FORM_SPEC}
                .registry=${formBuilderRegistry}
                .externalState=${this._state}
                @spec-renderer-state-change=${this.#handleStateChange}>
              </spec-renderer>
            </div>

            <forge-card class="form-builder-demo__state">
              <div class="form-builder-demo__state-header">
                <h3 class="forge-typography--heading4">Form State</h3>
              </div>
              <pre class="form-builder-demo__state-json">${JSON.stringify(this._state, null, 2)}</pre>
            </forge-card>
          </div>
        </main>
      </forge-scaffold>
    `;
  }

  #handleStateChange = (e: CustomEvent): void => {
    this._state = e.detail.state;
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'agent-ui-form-builder-demo': AgentUIFormBuilderDemo;
  }
}
