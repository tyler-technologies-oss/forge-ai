import type { ToolCall, ToolRenderer } from './types.js';

export interface CreateToolRendererElementConfig {
  elementTag: string;
  useSlot?: boolean;
  transform?: (toolCall: ToolCall) => Record<string, unknown>;
}

export interface CreateToolRendererFunctionConfig {
  render: (toolCall: ToolCall) => HTMLElement | DocumentFragment;
  useSlot?: boolean;
}

export type CreateToolRendererConfig = CreateToolRendererElementConfig | CreateToolRendererFunctionConfig;

function isElementConfig(config: CreateToolRendererConfig): config is CreateToolRendererElementConfig {
  return 'elementTag' in config;
}

export function createToolRenderer(config: CreateToolRendererConfig): ToolRenderer {
  if (isElementConfig(config)) {
    const renderer: ToolRenderer = {
      elementTag: config.elementTag
    };

    if (config.transform) {
      renderer.render = (toolCall: ToolCall) => {
        const element = document.createElement(config.elementTag);
        const props = config.transform?.(toolCall);
        if (props) {
          Object.assign(element, props);
        }
        return element;
      };
      delete renderer.elementTag;
    }

    return renderer;
  }

  return {
    render: config.render
  };
}
