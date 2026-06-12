import type { ComponentFactory, RegistryActionHandler } from '@tylertech/agent-ui-core';
import { createRegistry } from '@tylertech/agent-ui-core';
import { UserProfileForm, AddressForm, PaymentForm } from '../prebuilt-catalog/index.js';
import type { FormBuilderComponentNames, FormBuilderActionNames } from './catalog.js';
import type { LitResult } from '../types.js';
import { FormSection, FormRow, FormActions, Text } from './index.js';
import {
  ForgeButton,
  ForgeTextField,
  ForgeCheckbox,
  ForgeSelect,
  ForgeCard,
  ForgeDivider,
  Row,
  Column,
  Box,
  ForgeInlineMessage,
  Icon,
  Heading
} from '@tylertech/agent-ui-kit/forge';

export const formBuilderRegistry = createRegistry<LitResult, LitResult[]>({
  components: {
    UserProfileForm,
    AddressForm,
    PaymentForm,
    FormSection,
    FormRow,
    FormActions,
    Text,
    ForgeButton,
    ForgeTextField,
    ForgeCheckbox,
    ForgeSelect,
    ForgeCard,
    ForgeDivider,
    Row,
    Column,
    Box,
    ForgeInlineMessage,
    Icon,
    Heading
  } satisfies Record<FormBuilderComponentNames, ComponentFactory<LitResult, any, LitResult[]>>,
  actions: {
    submit_form: (params: Record<string, unknown>) => {
      console.log('[Action] submit_form:', params);
    },
    cancel_form: () => {
      console.log('[Action] cancel_form');
    },
    update_address: (
      params: Record<string, unknown>,
      setState: (fn: (prev: Record<string, unknown>) => Record<string, unknown>) => void
    ) => {
      setState((prev: Record<string, unknown>) => ({
        ...prev,
        form: {
          ...(prev.form as Record<string, unknown>),
          address: params.address
        }
      }));
    },
    update_payment: (
      params: Record<string, unknown>,
      setState: (fn: (prev: Record<string, unknown>) => Record<string, unknown>) => void
    ) => {
      setState((prev: Record<string, unknown>) => ({
        ...prev,
        form: {
          ...(prev.form as Record<string, unknown>),
          payment: params.payment
        }
      }));
    },
    update_preferences: (
      params: Record<string, unknown>,
      setState: (fn: (prev: Record<string, unknown>) => Record<string, unknown>) => void
    ) => {
      setState((prev: Record<string, unknown>) => ({
        ...prev,
        form: {
          ...(prev.form as Record<string, unknown>),
          preferences: {
            ...((prev.form as Record<string, unknown>).preferences as Record<string, unknown>),
            ...(params.preferences as Record<string, unknown>)
          }
        }
      }));
    },
    save_preferences: (params: Record<string, unknown>) => {
      console.log('[Action] save_preferences:', params);
    }
  } as Record<FormBuilderActionNames, RegistryActionHandler>
});
