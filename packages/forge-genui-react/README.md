# @tylertech/forge-genui-react

React renderer and components for Tyler Forge GenUI. Provides a hook-based API for rendering LLM-generated UI specifications using Tyler Forge components.

## Installation

```bash
npm install @tylertech/forge-genui-react @tylertech/forge @tylertech/forge-react
```

## Basic Usage

```tsx
import { useRenderer } from '@tylertech/forge-genui-react';

function App() {
  const { tools, Renderer, loading } = useRenderer({
    onAction: (event) => {
      console.log('User action:', event.action, event.payload);
      // Send to your LLM adapter
    }
  });

  // Pass `tools` to your LLM adapter
  // The adapter will call these tools to render UI

  return (
    <div>
      {loading && <div>Loading...</div>}
      <Renderer />
    </div>
  );
}
```

## API Reference

### `useRenderer(config?)`

Main hook for setting up GenUI rendering.

```tsx
const {
  tools,            // Tool definitions to pass to LLM
  Renderer,         // React component to render the UI
  loading,          // Boolean loading state
  setLoading,       // Manually control loading state
  reset,            // Reset the rendered UI
  getState,         // Get current renderer state (for persistence)
  setState,         // Restore renderer state
  componentSchemas  // Component catalog for LLM context
} = useRenderer(config);
```

## Custom Components

### Adding a New Component

To add a custom component, provide both a `factory` and a `schema`. The schema tells the LLM how to use your component.

```tsx
import { useRenderer, type ReactComponentContext } from '@tylertech/forge-genui-react';
import { z } from 'zod';

// 1. Define your component factory
interface ChartProps {
  title?: string;
  data?: { label: string; value: number }[];
  type?: 'bar' | 'line' | 'pie';
}

function Chart(ctx: ReactComponentContext<ChartProps>) {
  const { title, data = [], type = 'bar' } = ctx.props;

  return (
    <div className="chart">
      <h3>{title}</h3>
      <MyChartLibrary data={data} type={type} />
    </div>
  );
}

// 2. Define the schema (tells LLM how to use it)
const ChartSchema = {
  component: 'Chart',
  description: 'Renders a chart visualization. Use for displaying data trends.',
  props: z.object({
    title: z.string().describe('Chart title').nullable(),
    data: z.array(z.object({
      label: z.string(),
      value: z.number()
    })).describe('Data points to display').nullable(),
    type: z.enum(['bar', 'line', 'pie']).describe('Chart type').nullable()
  })
};

// 3. Register with useRenderer
function App() {
  const { tools, Renderer } = useRenderer({
    components: {
      Chart: {
        factory: Chart,
        schema: ChartSchema
      }
    },
    onAction: handleAction
  });

  return <Renderer />;
}
```

### Overriding Built-in Components

To override a built-in component (e.g., Button), provide just the `factory`. The default schema is preserved.

```tsx
import { useRenderer, type ReactComponentContext } from '@tylertech/forge-genui-react';

// Custom button with different styling
function MyButton(ctx: ReactComponentContext<{ label?: string; action?: string }>) {
  const { label, action } = ctx.props;

  return (
    <button
      className="my-custom-button"
      onClick={() => action && ctx.emit(action)}
    >
      {label}
    </button>
  );
}

function App() {
  const { tools, Renderer } = useRenderer({
    components: {
      // Override built-in Button - no schema needed
      Button: {
        factory: MyButton
      }
    },
    onAction: handleAction
  });

  return <Renderer />;
}
```

### Replacing the Entire Catalog

Use the `catalog` option to completely replace the built-in components with your own:

```tsx
import { useRenderer } from '@tylertech/forge-genui-react';

// Only these components will be available - no built-ins
const { tools, Renderer } = useRenderer({
  catalog: {
    MyChart: { factory: ChartFactory, schema: ChartSchema },
    MyButton: { factory: ButtonFactory, schema: ButtonSchema }
  },
  onAction: handleAction
});
```

### Using a Subset of Built-in Components

Import `catalogComponents` to selectively include built-in components:

```tsx
import { useRenderer, catalogComponents } from '@tylertech/forge-genui-react';

// Only Button, Stack, and Card from built-ins, plus your custom component
const { tools, Renderer } = useRenderer({
  catalog: {
    Button: catalogComponents.Button,
    Stack: catalogComponents.Stack,
    Card: catalogComponents.Card,
    MyChart: { factory: ChartFactory, schema: ChartSchema }
  },
  onAction: handleAction
});
```

> **Note:** The `catalog` and `components` options are mutually exclusive. Use `catalog` for complete replacement, or `components` for add/override behavior.
