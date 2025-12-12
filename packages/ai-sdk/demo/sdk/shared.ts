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
  teamId: string;
  agentId: string;
  baseUrl: string;
}

export const DEFAULT_CONFIG: DemoConfig = {
  teamId: '4381bb58-dbba-4667-a031-4370d2f28e2f',
  agentId: 'agent-f586a37b-5a2d-4984-b791-5301105854e9',
  baseUrl: 'https://foundry.tylertechai.com'
};

export function setupForgeComponents(): void {
  defineScaffoldComponent();
  defineAppBarComponent();
  defineCardComponent();
  defineIconComponent();
  defineButtonComponent();
  IconRegistry.define(tylIconForgeLogo);
}
