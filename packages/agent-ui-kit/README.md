# @tylertech/agent-ui-kit

Pre-built Forge component wrappers for Tyler Agent UI - ready-to-use catalog components.

## Overview

This package provides pre-built wrappers for Tyler Forge components that can be easily imported into any Agent UI catalog. Components are organized by category and follow the standard factory function + Zod schema pattern.

## Installation

```bash
pnpm add @tylertech/agent-ui-kit
```

## Usage

### Importing Individual Components

```typescript
import { ForgeButton, ForgeButtonSchema } from '@tylertech/agent-ui-kit/forge';
```

### Importing the Forge Catalog

```typescript
import { forgeCatalog } from '@tylertech/agent-ui-kit/forge/catalog';

// Use in your own catalog
export const myCatalog = createCatalog({
  components: {
    ...forgeCatalog.components,
    // Add your custom components
    MyCustomComponent: { ... }
  }
});
```

## Available Components

### Inputs
- ForgeButton
- ForgeTextField
- ForgeCheckbox
- ForgeSelect

### Layout
- ForgeCard

## Development

```bash
# Build the package
pnpm build

# Lint
pnpm lint

# Format
pnpm format
```

## License

Apache-2.0
