# @tylertech/agent-ui-html

Framework-agnostic HTML renderer for AI-generated UI specs using Lit web components.

## Purpose

Renders UI specs as HTML/web components:
- Full expression resolution (`$state`, `$template`, `$computed`, `$bindState`, `repeat`, `watch`)
- Complete validation system with touch tracking
- Two-way data binding
- Action dispatch with event emission
- Component registry with factory pattern

## When to Use

Non-React projects needing UI rendering: vanilla JS, Vue, Svelte, or any framework.

## Installation

```bash
pnpm add @tylertech/agent-ui-html
```

## Quick Start

```typescript
import { SpecRendererElement } from '@tylertech/agent-ui-html';
import { createRegistry, createCatalog } from '@tylertech/agent-ui-core';

// Define components
const registry = createRegistry({
  components: {
    Button: (ctx) => html`<button @click=${() => ctx.emit('click')}>${ctx.props.label}</button>`
  }
});

// Use in HTML
<spec-renderer
  .spec=${spec}
  .registry=${registry}>
</spec-renderer>
```

## Key Exports

- `SpecRendererElement` - Web component for rendering specs
- `renderElement()` - Pure rendering function (Lit-specific)
- `ValidationController` - Lit reactive controller for validation

## Architecture Notes

Built with Lit but **framework-agnostic** in design:
- Core `renderElement()` function from `@tylertech/agent-ui-core` is pure and reusable
- `SpecRendererElement` is Lit-specific wrapper
- Component factories can target any framework

The registry pattern allows swapping rendering targets (React, Vue, etc.) without changing core logic.
