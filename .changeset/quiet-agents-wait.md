---
'@tylertech/forge-ai': minor
---

fix(ai-chatbot)!: make `@ag-ui/client` and `@ag-ui/core` optional peer dependencies

`AgUiAdapter` and `HttpAgentWithCredentials` moved from `@tylertech/forge-ai` and `@tylertech/forge-ai/ai-chatbot` to a new `@tylertech/forge-ai/ag-ui` entry point. Consumers that don't use them no longer install `@ag-ui/*` or its `zod` 3 dependency (GHSA-mrhx-c7xc-m3w5).

To keep using the AG-UI adapter, install `@ag-ui/client` and `@ag-ui/core` and update the import:

```ts
import { AgUiAdapter } from '@tylertech/forge-ai/ag-ui';
```
