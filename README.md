# Tyler Forge™ AI Components

A library of Tyler Forge™ AI chat interface components.

## Usage

To get started using this library you must install the Forge component library (if already installed, see version
compatibility table below):

```bash
npm install @tylertech/forge-ai
```

### Importing components

You can import components from the AI library like so:

```javascript
import '@tylertech/forge-ai/ai-chat-interface';
```

> This is a side-effect import, so you don't need to assign it to a variable. It will register the component with the custom element registry and make it available for use in your HTML.

## Local Development

This project uses [pnpm](https://pnpm.io/) for package management and is a monorepo using pnpm workspaces.

Additionally, this project uses [Turoborepo](https://turbo.build/repo/docs) for managing the monorepo and orchestrating tasks.

### Install

```bash
pnpm install
```

### Recommended VSCode Extensions

It is recommended that you install the following extensions in Visual Studio Code for the best development experience:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Monorepo Workspace](https://marketplace.visualstudio.com/items?itemName=folke.vscode-monorepo-workspace)
- [lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin)
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

### Run Storybook

The following command will run Storybook, which is used for both local development and documentation.

```bash
pnpm run storybook
```

### Build

This runs a local production build of all packages.

```bash
pnpm run build
```

### Run tests

Executes the unit test suite.

```bash
pnpm run test
```
