# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tyler Forge™ AI is a monorepo containing multiple packages to support AI chat interfaces.

## Architecture

### Monorepo Structure

- Uses **pnpm workspaces** with **Turborepo** for task orchestration
- Main packages:
  - `packages/ai/` - Core web components library (TypeScript + Lit)
  - `packages/ai-react/` - React wrapper components

### Component Architecture

- **Lit-based web components** with TypeScript
- Each component follows the pattern:
  - `src/lib/[component-name]/[component-name].ts` - Main component class
  - `src/lib/[component-name]/[component-name].scss` - Styles (inline imported)
  - `src/lib/[component-name]/[component-name].test.ts` - Tests
  - `src/lib/[component-name]/index.ts` - Export file
- Components extend `LitElement` and use decorators (`@customElement`, `@property`)
- Styles imported as `?inline` and applied with `unsafeCSS()`

### Build System

- **Vite** for building with custom config for library mode
- Outputs ES modules with preserved directory structure
- **TypeScript** definitions generated via `vite-plugin-dts`
- **Custom Elements Manifest** generation for documentation and framework integrations

### Testing

- **Web Test Runner** with Playwright
- Tests organized by component groups
- Coverage thresholds: statements 98.5%, branches 95.5%, functions 96.5%, lines 98.5%
- Sass files inlined during test runs

## Common Development Commands

### Development

```bash
# Run Storybook for component development
pnpm storybook
```

### Building

```bash
# Build ai package only
pnpm build:ai

# Build all packages
pnpm build
```

### Testing

```bash
# Run tests for ai package (watch mode with coverage)
pnpm test:ai

# Run focused tests during development
pnpm test:ai:focus

# Run all tests in CI mode
pnpm test

# Run tests for specific component group (e.g., "ai-chat-interface")
pnpm run --filter=@tylertech/forge-ai test --group=ai-chat-interface
```

### Code Quality

```bash
# Lint all packages
pnpm lint

# Format all files
pnpm format

# Check formatting
pnpm format:check

# Generate custom elements manifest
pnpm cem
```

### Component Generation

```bash
# Create new component with templates
pnpm plop:ai component <component-name>

# Create storybook story only
pnpm plop:ai story <component-name>
```

## Key Conventions

### Component Creation

- Use Plop generator to scaffold new components: `pnpm plop:ai component`
- Components must be added to `src/lib/index.ts` exports (auto-handled by Plop)
- Follow naming convention: `forge-[component-name]` for tag names
- Define component dependencies in static blocks

### Import Patterns

- DO NOT import from `@tylertech/forge-core`, `@tylertech/forge`, or `@tylertech/tyler-icons` directly in component TypeScript files.
- Styles: Import as `?inline` and use with `unsafeCSS()`
- Slots: Use `@queryAssignedNodes()` or `@queryAssignedElements()` for slotted content

### Icon Usage

ALWAYS use inline `<svg>` for icons in component templates. Do NOT use `<forge-icon>` inside component templates.

### SCSS Imports

Use these proper Forge SCSS imports (do NOT use `@use '@tylertech/forge-core/styles'`):

Component token location:
@use '@tylertech/forge/sass/core/styles/tokens

### Testing

- Each component requires a `.test.ts` file
- Tests use `@open-wc/testing` with Chai assertions
- Coverage thresholds are enforced - aim for high coverage

### Framework Wrappers

- Angular and React wrappers are generated from the main package
- Run `pnpm generate-proxies` after adding new components to create framework bindings

## File Organization

### Core Package Structure

```
packages/ai/src/
├── lib/                          # Component source files
│   ├── [component-name]/         # Individual component folders
│   ├── utils/                    # Shared utilities
│   └── index.ts                  # Main export file
├── stories/                      # Storybook stories
└── test/                         # Test setup files
```

### Component File Structure

```
src/lib/[component-name]/
├── [component-name].ts           # Main component class
├── [component-name].scss         # Component styles
├── [component-name].test.ts      # Unit tests
└── index.ts                      # Exports
```

## Framework Integration Notes

- Components are built to work across frameworks (Angular, React, Vue, Svelte)
- Type definitions are generated for Svelte and Vue integrations
- React/Angular packages provide proper framework-specific wrappers
- Always test components in isolation before framework integration

## Development notes

- Never use inline styles on HTML elements
- When using a color, make sure to always use color tokens from Forge
- For anything involving spacing, like gap, padding, etc. Use the spacing tokens from Forge
- Always check other components for reference to know when to use readonly modifiers, getters, and private variables (prefixed with #)
- NEVER use readonly for Lit html templates that have dynamic content within them or they won't update. Use getters instead. If the content is static, then use readonly.
- Everytime a new feature is added to a component, write a test for it
- When adding margins to an element, always use logical properties, ie: margin-inline-start, margin-block-end, etc.
- When adding a new property or slot to a component, add an appropriate storybook control for it
- When writing docs for a component, you don't need to include any information about slots. Those are generated automatically from code
- Always put return types on functions
- Import location for ifDefined is import { ifDefined } from 'lit/directives/if-defined.js';
- No need to add a import './' line to the test files
- Always update the MDX storybook docs when new features are added to a component, things like events, slots, properties, etc
- For Storybook actions, always use `import { action } from 'storybook/actions';` not `@storybook/addon-actions`
- For Storybook MDX docs, always use `import { Meta, Title, Canvas } from '@storybook/addon-docs/blocks';` and `import CustomArgTypes from '../../blocks/CustomArgTypes';` not `@storybook/blocks`
- For Lit template variables, use `readonly` for static content and `get` for dynamic content that needs to re-render when component state changes
- AVOID using inline CSS styles on HTML elements. Always use classes and define styles in the SCSS file, or check to see if there's an existing prebuilt component in the library that meets your needs.
- When using boolean properties that reflect to attributes, always set the value to `false` by default in the property decorator, ie: `@property({ type: Boolean, reflect: true }) public myProp = false;`. Boolean properties should always be turned on by setting the attribute without a value, ie: `<forge-my-component my-prop></forge-my-component>` and we do not
  like negatively worded properties like `no-header` or `disable-feature`. Always use positive wording like `has-header` or `enable-feature`.
- If you are building a feature that could potentially be generic enough to be used by multiple components, consider building it as a separate utility function or mixin in the `utils/` folder so it can be reused across components, or if it needs to integrate with the Lit lifecycle, consider building it as Lit reactive controller.
- Always prefer modern JavaScript/TypeScript features and syntax, like optional chaining, nullish coalescing, arrow functions, template literals, etc.
- Prefer using the "config object" pattern for methods and functions that take multiple parameters, especially when some are optional. This improves readability and makes it easier to add parameters in the future without breaking existing calls.
- Do not update test unless told to do so.

### Conditional Content Pattern

When you need to conditionally show/hide elements based on user-provided content, prefer using slots with `@queryAssignedNodes` over boolean properties. This pattern:

- **Use `@queryAssignedNodes({ slot: 'slot-name', flatten: true })` to detect slotted content**
- **Use `when()` directive with `slottedNodes.length > 0` condition to conditionally render wrapper elements**
- **Add slot change handler to trigger re-renders: `@slotchange=${this.#handleSlotChange}`**
- **Always render the slot itself, but conditionally render its wrapper based on content presence**
- **Use `nothing` from lit for the else case when you don't want to render anything**

**Implementation pattern:**

```typescript
@queryAssignedNodes({ slot: 'optional-content', flatten: true })
private _slottedNodes!: Node[];

readonly #contentSlot = html`<slot name="optional-content"></slot>`;

get #conditionalContent(): TemplateResult | typeof nothing {
  const hasContent = this._slottedNodes.length > 0;
  return when(
    hasContent,
    () => html`<wrapper-element>${this.#contentSlot}</wrapper-element>`,
    () => html`${this.#contentSlot}`  // Always render slot for detection
  );
}

#handleSlotChange(evt: Event): void {
  const slotName = (evt.target as HTMLSlotElement).name;
  if (['optional-content', 'other-watched-slots'].includes(slotName)) {
    this.requestUpdate();
  }
}
```

**When to use this pattern:**

- Optional buttons or actions (like "Select All" buttons, secondary buttons)
- Optional content sections that users may or may not want to show
- Anything where the presence of content should determine visibility

**Example:** See `confirmation-dialog.ts` (secondary button) and `multi-select-header.ts` (select-all button)

### Template Reactivity Pattern

When creating template variables in Lit components, choose between `readonly` and `get` based on whether the content needs to re-render when component state changes.

**Use `readonly` for static templates:**

```typescript
// Static content that never changes
readonly #header = html`<h1>Static Title</h1>`;

// Content with only bound properties (reactive through property binding)
readonly #searchField = html`
  <input .value=${this._searchValue} @input=${this._handleInput} />
`;
```

**Use `get` for dynamic templates:**

```typescript
// Content that depends on component state/properties
get #threadList(): TemplateResult {
  return html`
    <ul>
      ${this.threads.map(thread => html`<li>${thread.title}</li>`)}
    </ul>
  `;
}

// Templates containing other getters or computed values
get #container(): TemplateResult {
  return html`
    <div>
      ${this.#threadList}
      ${this.hasActions ? this.#actions : nothing}
    </div>
  `;
}
```

**Key Rule:** If template content changes based on component state (arrays, conditionals, computed values), use `get`. If content is static or only uses property bindings, use `readonly`.
