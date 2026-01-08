import type { ToolCall, ToolRenderer } from './types.js';

export interface CreateToolRendererElementConfig {
  elementTag: keyof HTMLElementTagNameMap;
}

export interface CreateToolRendererFunctionConfig {
  render: (toolCall: ToolCall) => HTMLElement | DocumentFragment;
}

export type CreateToolRendererConfig = CreateToolRendererElementConfig | CreateToolRendererFunctionConfig;

function isElementConfig(config: CreateToolRendererConfig): config is CreateToolRendererElementConfig {
  return 'elementTag' in config;
}

export function createToolRenderer(config: CreateToolRendererConfig): ToolRenderer {
  if (isElementConfig(config)) {
    return {
      elementTag: config.elementTag
    };
  }

  return {
    render: config.render
  };
}
