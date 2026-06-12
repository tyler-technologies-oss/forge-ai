import type { ComponentDefinition } from '@tylertech/agent-ui-core';
import { createCatalog } from '@tylertech/agent-ui-core';
import { UserProfileFormSchema, AddressFormSchema, PaymentFormSchema } from './index.js';

const components = {
  UserProfileForm: {
    description:
      'Pre-built user profile form with name, email, bio, and avatar fields. Demonstrates external state binding pattern using $bindState.',
    props: UserProfileFormSchema
  },
  AddressForm: {
    description:
      'Pre-built address form with street, city, state, zip, and country fields. Demonstrates internal state management with change events.',
    props: AddressFormSchema
  },
  PaymentForm: {
    description:
      'Pre-built payment form with card number, expiry, CVV, and optional billing address toggle. Uses internal state management.',
    props: PaymentFormSchema
  }
} satisfies Record<string, ComponentDefinition>;

export const prebuiltCatalog = createCatalog({ components, actions: {} });
export type PrebuiltComponentNames = keyof typeof components;
