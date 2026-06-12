import type { ComponentFactory } from '@tylertech/agent-ui-core';
import { createRegistry } from '@tylertech/agent-ui-core';
import type { PrebuiltComponentNames } from './catalog.js';
import type { LitResult } from '../types.js';
import { UserProfileForm, AddressForm, PaymentForm } from './index.js';

export const prebuiltRegistry = createRegistry<LitResult, LitResult[]>({
  components: {
    UserProfileForm,
    AddressForm,
    PaymentForm
  } satisfies Record<PrebuiltComponentNames, ComponentFactory<LitResult, any, LitResult[]>>,
  actions: {}
});
