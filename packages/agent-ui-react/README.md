# @tylertech/agent-ui-react

React hooks and components for building AI-driven generative UIs.

## Purpose

React integration for AI-generated UIs:
- `useAgentUI` hook orchestrates spec compiler, tool creation, and state
- Pre-configured `Renderer` component
- Re-exports `@json-render/react` APIs for convenience

## When to Use

React apps with AI chat interfaces requiring dynamic UI generation.

## Installation

```bash
pnpm add @tylertech/agent-ui-react
```

## Quick Start

```tsx
import { useAgentUI } from '@tylertech/agent-ui-react';
import { createCatalog } from '@tylertech/agent-ui-core';

const catalog = createCatalog({
  components: {
    Button: {
      description: 'Clickable button',
      props: z.object({ label: z.string() })
    }
  }
});

const registry = {
  Button: ({ props }) => <button>{props.label}</button>
};

function App() {
  const { tools, Renderer, isStreaming, setIsStreaming } = useAgentUI({
    catalog,
    registry,
    handlers: {
      submit: async (params) => console.log('Submit:', params)
    }
  });

  // Pass tools to AI framework (Mastra, etc.)
  // AI generates UI by calling render_ui tool

  return <Renderer />;
}
```

## Key Exports

### Custom
- `useAgentUI()` - Hook for AI UI integration (spec compiler, tools, state)
- `Renderer` - Component wrapping `@json-render/react`

### Re-exports from @json-render/react
- `useBoundProp()`, `useStateValue()`, `useAction()` - React hooks
- `JSONUIProvider` - State/action provider
- Types: `Spec`, `ComponentRegistry`, etc.

## Architecture Notes

Wraps `@json-render/react` + `@tylertech/agent-ui-core` with React-specific patterns. Provides abstraction layer for controlled API surface.
