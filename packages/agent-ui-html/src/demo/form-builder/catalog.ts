import { z } from 'zod';
import { createCatalog } from '@tylertech/agent-ui-core';
import type { ComponentDefinition } from '@tylertech/agent-ui-core';
import { UserProfileFormSchema, AddressFormSchema, PaymentFormSchema } from '../prebuilt-catalog/index.js';
import { FormSectionSchema, FormRowSchema, FormActionsSchema, TextSchema } from './index.js';
import {
  ForgeButtonSchema,
  ForgeTextFieldSchema,
  ForgeCheckboxSchema,
  ForgeSelectSchema,
  ForgeCardSchema,
  ForgeDividerSchema,
  RowSchema,
  ColumnSchema,
  BoxSchema,
  ForgeInlineMessageSchema,
  IconSchema,
  HeadingSchema
} from '@tylertech/agent-ui-kit/forge';

const prebuiltComponents = {
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

const customComponents = {
  FormSection: {
    description: 'Section container with optional title and description for organizing form content',
    props: FormSectionSchema,
    slots: ['default']
  },
  FormRow: {
    description: 'Horizontal layout container for arranging form fields side-by-side',
    props: FormRowSchema,
    slots: ['default']
  },
  FormActions: {
    description: 'Button group for form actions with submit and cancel buttons',
    props: FormActionsSchema
  },
  Text: {
    description: 'Text content with Forge typography styling (body, label, caption, heading, etc)',
    props: TextSchema
  }
} satisfies Record<string, ComponentDefinition>;

const sdkComponents = {
  ForgeButton: {
    description: 'Interactive button component with click events',
    props: ForgeButtonSchema
  },
  ForgeTextField: {
    description: 'Text input field with validation support',
    props: ForgeTextFieldSchema
  },
  ForgeCheckbox: {
    description: 'Checkbox input for boolean values',
    props: ForgeCheckboxSchema
  },
  ForgeSelect: {
    description: 'Dropdown select input with options',
    props: ForgeSelectSchema
  },
  ForgeCard: {
    description: 'Container card for grouping content',
    props: ForgeCardSchema,
    slots: ['default']
  },
  ForgeDivider: {
    description: 'Horizontal or vertical divider line for separating content',
    props: ForgeDividerSchema
  },
  Row: {
    description: 'Horizontal flex container with configurable gap and alignment',
    props: RowSchema,
    slots: ['default']
  },
  Column: {
    description: 'Vertical flex container with configurable gap and alignment',
    props: ColumnSchema,
    slots: ['default']
  },
  Box: {
    description: 'Generic container with configurable display (flex/grid/block) and layout properties',
    props: BoxSchema,
    slots: ['default']
  },
  ForgeInlineMessage: {
    description: 'Inline message for displaying contextual feedback (info, success, warning, error)',
    props: ForgeInlineMessageSchema,
    slots: ['default', 'title', 'icon']
  },
  Icon: {
    description: 'Icon component for displaying Tyler Icons',
    props: IconSchema
  },
  Heading: {
    description: 'Semantic heading (h1-h6) with Tyler Forge typography styles (display, heading, subheading)',
    props: HeadingSchema
  }
} satisfies Record<string, ComponentDefinition>;

export const formBuilderCatalog = createCatalog({
  components: {
    ...prebuiltComponents,
    ...customComponents,
    ...sdkComponents
  },
  actions: {
    submit_form: {
      params: z.object({ formData: z.record(z.string(), z.unknown()) }),
      description: 'Submit form with collected data'
    },
    cancel_form: {
      description: 'Cancel form and reset to initial state'
    },
    update_address: {
      params: z.object({ address: z.record(z.string(), z.unknown()) }),
      description: 'Update address in state when address form changes'
    },
    update_payment: {
      params: z.object({ payment: z.record(z.string(), z.unknown()) }),
      description: 'Update payment in state when payment form changes'
    },
    update_preferences: {
      params: z.object({ preferences: z.record(z.string(), z.unknown()) }),
      description: 'Update user preferences when any preference field changes'
    },
    save_preferences: {
      params: z.object({ preferences: z.record(z.string(), z.unknown()) }),
      description: 'Save user preferences'
    }
  }
});

export type FormBuilderComponentNames = keyof typeof formBuilderCatalog.components;
export type FormBuilderActionNames = keyof typeof formBuilderCatalog.actions;
