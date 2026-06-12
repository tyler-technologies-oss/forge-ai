import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

interface UserProfileFormProps {
  nameBinding?: string;
  emailBinding?: string;
  bioBinding?: string;
  avatarUrlBinding?: string;
}

export function UserProfileForm(ctx: ComponentContext<UserProfileFormProps>): TemplateResult {
  const nameBinding = ctx.bindings.nameBinding as string | undefined;
  const emailBinding = ctx.bindings.emailBinding as string | undefined;
  const bioBinding = ctx.bindings.bioBinding as string | undefined;
  const avatarUrlBinding = ctx.bindings.avatarUrlBinding as string | undefined;

  const getName = (): string => {
    if (nameBinding) {
      return (ctx.state.get(nameBinding) as string) ?? '';
    }
    return '';
  };

  const getEmail = (): string => {
    if (emailBinding) {
      return (ctx.state.get(emailBinding) as string) ?? '';
    }
    return '';
  };

  const getBio = (): string => {
    if (bioBinding) {
      return (ctx.state.get(bioBinding) as string) ?? '';
    }
    return '';
  };

  const getAvatarUrl = (): string => {
    if (avatarUrlBinding) {
      return (ctx.state.get(avatarUrlBinding) as string) ?? '';
    }
    return '';
  };

  const handleNameInput = (e: Event): void => {
    if (nameBinding) {
      ctx.state.set(nameBinding, (e.target as HTMLInputElement).value);
    }
  };

  const handleEmailInput = (e: Event): void => {
    if (emailBinding) {
      ctx.state.set(emailBinding, (e.target as HTMLInputElement).value);
    }
  };

  const handleBioInput = (e: Event): void => {
    if (bioBinding) {
      ctx.state.set(bioBinding, (e.target as HTMLTextAreaElement).value);
    }
  };

  const handleAvatarUrlInput = (e: Event): void => {
    if (avatarUrlBinding) {
      ctx.state.set(avatarUrlBinding, (e.target as HTMLInputElement).value);
    }
  };

  const nameValue = getName();
  const emailValue = getEmail();
  const bioValue = getBio();
  const avatarUrlValue = getAvatarUrl();

  return html`
    <forge-card>
      <div class="user-profile-form">
        <h3 class="forge-typography--heading4">User Profile</h3>
        <div class="user-profile-form__fields">
          <forge-text-field>
            <input type="text" .value=${nameValue} required @input=${handleNameInput} />
            <label>Name *</label>
          </forge-text-field>

          <forge-text-field>
            <input type="email" .value=${emailValue} required @input=${handleEmailInput} />
            <label>Email *</label>
          </forge-text-field>

          <forge-text-field>
            <textarea .value=${bioValue} @input=${handleBioInput}></textarea>
            <label>Bio</label>
          </forge-text-field>

          <forge-text-field>
            <input type="url" .value=${avatarUrlValue} @input=${handleAvatarUrlInput} />
            <label>Avatar URL</label>
          </forge-text-field>
        </div>
      </div>
    </forge-card>
  `;
}

export const UserProfileFormSchema = z.object({
  nameBinding: z.any().describe('State binding path for name field ($bindState syntax)').optional(),
  emailBinding: z.any().describe('State binding path for email field ($bindState syntax)').optional(),
  bioBinding: z.any().describe('State binding path for bio field ($bindState syntax)').optional(),
  avatarUrlBinding: z.any().describe('State binding path for avatar URL field ($bindState syntax)').optional()
});
