# @tylertech/agent-ui-core

Core utilities for building AI-driven generative UIs with [json-render](https://json-render.dev).

## Purpose

Wraps `@json-render/core` with AI-specific functionality:
- Streaming UI generation with incremental updates
- Auto-fixing and validation for partial specs
- Schema generation for AI prompts
- Framework-agnostic rendering utilities

## When to Use

Building AI chat interfaces where LLMs generate dynamic UI components in real-time.

## Installation

```bash
pnpm add @tylertech/agent-ui-core
```

## Quick Start

```typescript
import { createCatalog, createRenderTool, createCompiler } from '@tylertech/agent-ui-core';

// Define available components
const catalog = createCatalog({
  components: {
    Button: {
      description: 'Clickable button',
      props: z.object({ label: z.string() })
    }
  }
});

// Create AI tool for streaming UI generation
const specCompiler = createCompiler();
const tool = createRenderTool({
  specCompiler,
  catalog,
  onRender: (spec) => console.log('New spec:', spec)
});

// Pass tool to your AI/LLM framework
```

## Key Exports

### Catalog & Tools
- `createCatalog()` - Component/action catalog with AI prompt generation
- `createRenderTool()` - Mastra tool for streaming UI generation
- `processPatches()` - Process JSON patches with auto-fixing

### Rendering
- `renderElement()` - Framework-agnostic element renderer
- `resolveProps()` - Resolve state bindings and expressions
- `isVisible()` - Evaluate visibility conditions
- `createRepeatContext()` - Handle repeat/loop contexts

### State & Registry
- `createStateManager()` - State management with change callbacks
- `createRegistry()` - Component registry for renderers

### Utilities
- `normalizeJsonl()` - Normalize streamed JSONL patches
- `runValidation()`, `builtInValidationFunctions` - Field validation

## Architecture

This package decouples your code from json-render and adds AI-specific features like streaming support, spec auto-fixing, and validation feedback loops.
