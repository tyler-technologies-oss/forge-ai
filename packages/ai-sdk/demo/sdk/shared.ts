import {
  defineScaffoldComponent,
  defineAppBarComponent,
  defineCardComponent,
  defineIconComponent,
  defineButtonComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconForgeLogo } from '@tylertech/tyler-icons';

export interface DemoConfig {
  agentId: string;
  baseUrl: string;
}

export const DEFAULT_CONFIG: DemoConfig = {
  agentId: 'agent-9b3ff935-f32d-477b-ac45-ce2a3570b90c',
  baseUrl: 'http://localhost:3001'
};

export function setupForgeComponents(): void {
  defineScaffoldComponent();
  defineAppBarComponent();
  defineCardComponent();
  defineIconComponent();
  defineButtonComponent();
  IconRegistry.define(tylIconForgeLogo);
}
