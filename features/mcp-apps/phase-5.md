# MCP Apps — Phase 5 Status & Handoff (Step 4 DONE → manual test next)

> Read `phase-4.md` (Step 3 done + Step 4 plan), `step-4-handoff.md`,
> `step-4-implementation-notes.md`, then this. Plan: `docs/plans/mcp-apps-build-plan.md`
> §Step 4.

**Last updated:** 2026-08-08
**Branch:** `feat/mcp-apps`
**Status:** ✅ **Step 4 (MCPA-6) COMPLETE, manually tested, and refined per review.**
`McpAppHost` context is provided by `ai-chatbot-base.ts`; the mock adapter + Storybook
stories give the first real end-to-end run, verified working in a real browser (see
"Manual test findings" below — one real bug found and fixed outside this plan's file
list). Three post-test refinements also applied (see "Post-test refinements").

---

## Manual test findings (bug found in Step 0 code, not Step 4)

The first manual test showed the sandbox proxy iframe loading but the inner app never
appearing — no console error, no visible failure. Root cause, confirmed via a scripted
Playwright repro against the running dev servers:

**`packages/ai/sandbox/sandbox.js`** sent `ui/notifications/sandbox-proxy-ready` without
a `params` field. The `@modelcontextprotocol/ext-apps` `AppBridge` validates every
inbound notification against a zod schema requiring `params: {}` to be present (even
empty). The validation failure happens inside a `Promise.resolve().then().catch()`
chain — it fails **silently**, so `onsandboxready` (and therefore
`sendSandboxResourceReady`, which writes the widget HTML into the inner iframe) never
fires. Fixed with one line:
```js
this.#post(this.#host, { jsonrpc: '2.0', method: PROXY_READY, params: {} });
```
Also fixed while verifying: the mock adapter's tool result wasn't a valid
`CallToolResult` shape (`{ content: [...] }` — it was `{ status, greeting }`), which the
real-SDK widget variant's stricter validation silently defaulted to `[]`. Fixed in
`mcp-app-mock-adapter.ts`.

Verified via scripted Playwright runs (not just manual eyeballing): both widget variants
complete the full handshake, mount, stream args, render results, and the app-initiated
`callTool` round-trip (the "Refresh" button) works end-to-end.

## Post-test refinements (review feedback after manual test passed)

1. **Removed the `<forge-ai-artifact>` wrapper.** `ai-mcp-app.ts` no longer imports or
   renders it — replaced with a local `.container` div, styled directly in
   `ai-mcp-app.scss` (border + radius only when `prefersBorder !== false`, via
   `classMap`). `prefersBorder` behavior is unchanged; it's now a local CSS class
   instead of delegating chrome to a shared component.
2. **MCP-app tool calls never render the tool-call indicator.** Previously they
   streamed through the same buffering path as any other tool call, so
   `forge-ai-tool-call-indicator` would show "Running tools…" for a widget mount.
   `ai-assistant-response.ts` now special-cases any tool call where
   `toolCall.uiResource` is set OR its `ToolDefinition.mcpApp` marker is present:
   it's flushed straight to `#renderToolCall` (bypassing the indicator buffer
   entirely), and the `#thinkingIndicator` visibility check now treats an
   in-flight MCP-app tool call as "no active tool call" until `uiResource` is
   stamped — so the standard thinking indicator (the same one text responses use)
   covers the gap, and disappears once the widget mounts. Net: users never see
   "tool" language for an MCP-app render: streaming states show the plain thinking
   indicator; once mounted, the widget itself is the visible signal.
   (`ai-message-thread.ts` needed no change — it doesn't use the tool-call
   indicator at all.)
3. **Renamed the mock tool** `showWidget` → `renderMcpApp` (clearer, matches what
   it actually does) and **added `AgentAdapter.getModelFacingTools()`** — filters
   out any `ToolDefinition.mcpApp`-marked tool. MCP-app tools are a host-internal
   signal to stream a UI resource onto an *existing* tool call; the model never
   calls them directly and must never see them in its tool list. Wired into both
   places that actually serialize tools for a backend: `ag-ui-adapter.ts`
   (`sendMessage`) and the dev-harness `mastra-stream-adapter.ts`
   (`#streamRequest`). `AgentAdapter.getTools()` (unfiltered) is left alone — it's
   still needed for local by-name lookups (e.g. `renderer`/handler resolution).

---

## What Step 4 delivered (5 files edited, 3 new files)

### 1. `src/lib/tools/ai-mcp-app/mcp-app-context.ts` — `hostCapabilities` added
- Added `hostCapabilities: McpAppHostCapabilities` to the `McpAppHost` interface
  (option (a) from the implementation notes) — capabilities now travel through context
  alongside `callTool`/`readResource`/`hostContext`/`sandboxUrl`.

### 2. `src/lib/tools/ai-mcp-app/ai-mcp-app.ts` — capabilities wired to the bridge
- `new ExtAppsBridge(HOST_INFO, {})` → `new ExtAppsBridge(HOST_INFO, host.hostCapabilities ?? {})`.
  This was the one real gap flagged going into Step 4 (`McpUiInitializeResult` was
  returning empty capabilities to every widget). No other change needed here —
  display-mode echo, teardown-awaits-ack, and auto-resize were already correct from
  Steps 2/3.

### 3. `src/lib/ai-chatbot/ai-chatbot-base.ts` — `@provide` the `McpAppHost` context
- New `mcpAppSandboxUrl` property (`mcp-app-sandbox-url` attribute) — the only
  Storybook-facing config surface for the cross-origin sandbox proxy URL.
- New private `@provide({ context: mcpAppHostContext })` field `_mcpAppHost`:
  `callTool`/`readResource` delegate to `_coreController.adapter?.callMcpTool`/
  `readMcpResource`; `hostContext` seeded from the OS theme +
  `availableDisplayModes: ['fullscreen']` (decision #2); `hostCapabilities` is a module
  constant `{ openLinks: {}, serverTools: {}, serverResources: {}, logging: {} }`.
- Theme detection: `window.matchMedia('(prefers-color-scheme: dark)')` + a `change`
  listener registered in `connectedCallback` (after `super.connectedCallback()`) and
  removed in a new `disconnectedCallback` override (`super.disconnectedCallback()`
  first, per the existing precedent in `ai-message-thread.ts`). The handler reassigns
  `this._mcpAppHost` (spread, not mutation) — required for `@lit/context`'s
  `Object.is` check to fire and propagate to `@consume({ subscribe: true })` consumers.
- `willUpdate` now also reacts to `mcpAppSandboxUrl` changes, spreading a new
  `_mcpAppHost` with the updated `sandboxUrl`.

### 4. `src/stories/utils/mcp-app-mock-adapter.ts` (new) — `McpAppMockAdapter`
- Extends `MockAdapter`; registers one discoverable tool (`showWidget`, marked
  `mcpApp: {}`) via the `tools` constructor option.
- `sendMessage` bypasses the handler path entirely (drives raw `_emit*` calls directly,
  matching the `MixedResponseAdapter` pattern in `AiChatbot.stories.ts`) — streams
  `toolCallStart → toolCallArgs → toolCallEnd → _emitMcpUiResource → toolResult`, each
  gated 700ms apart so the mount is visibly separate from the streaming args and the
  final result.
- `resolveMcpAppResource` always returns an **explicit** `csp: {}` / `permissions: []`
  (never omitted — the presence-gate in `ai-mcp-app.ts`'s `#hasPolicy` would otherwise
  error-artifact) plus `prefersBorder: true`. Returns one of two widget HTML strings
  depending on the constructor's `widgetVariant` option.
- `callMcpTool` implements the app-only-tool simulation: accepts `refreshWidgetData`
  (never registered via `setTools`, so absent from the model-facing tool list) and
  rejects any other name — the mock's stand-in for `visibility: ["app"]` filtering
  (no real `visibility` field exists in this repo's `ToolDefinition`).
- `readMcpResource` returns a canned text resource.
- **Two widget HTML builders:**
  - `buildHandRolledWidgetHtml()` — inline `<script>`, no SDK, hand-written
    `ui/initialize` → `ui/notifications/initialized` handshake, listens for
    `tool-input(-partial)`/`tool-result`/`host-context-changed` notifications, and
    round-trips an app-initiated `tools/call` to `refreshWidgetData` via a button.
  - `buildSdkWidgetHtml()` — imports the real guest SDK via
    `import extAppsSdkSource from '@modelcontextprotocol/ext-apps/app-with-deps?raw'`
    (verified this session: Vite's `?raw` resolves through the package's `exports`
    map with no new bundling infra) and concatenates it into one `<script
    type="module">` ahead of widget logic that uses `App`/`PostMessageTransport`. Since
    the bundle's only "export" of those symbols is a trailing minified
    `export {realName as PublicName, ...}` clause (no importable module boundary once
    inlined), a small `extractSdkLocalNames()` helper regex-parses that clause to
    recover the current minified local names — confirmed against the installed
    `1.7.5` bundle (`App` → `eI`, `PostMessageTransport` → `Mu`) so this isn't
    hardcoded to one minification pass.

### 5. `src/stories/components/primitives/ai-chatbot/AiChatbotMcpApp.stories.ts` + `.mdx` (new)
- Title `'AI Components/Primitives/Chatbot/MCP App'`, two named stories —
  `HandRolledWidget` and `RealAppSdkWidget` — each constructing a `McpAppMockAdapter`
  with the matching `widgetVariant` and wiring `mcp-app-sandbox-url="http://localhost:6017/sandbox.html"`.
- MDX documents the two-terminal manual test setup (`pnpm --filter=@tylertech/forge-ai
  sandbox` + `pnpm storybook`) and flags the Storybook dark-mode toolbar
  gotcha (doesn't drive `prefers-color-scheme`; use devtools' rendering-pane emulator
  instead).

---

## Verification performed

| Check | Result |
|-------|--------|
| `npx tsc --noEmit -p tsconfig.json` | ✅ 0 new errors (same pre-existing `src/stories/**` errors as HEAD, listed in phase-4.md) |
| `npx eslint .` (full package) | ✅ exit 0, no warnings |
| `pnpm build:ai` (root) | ✅ green — lint, vite bundle, dts, CEM |
| `npx storybook build` | ✅ green — confirms the `?raw` SDK import resolves and inlines (`AiChatbotMcpApp.stories-*.js` ≈348KB, consistent with the ~337KB `app-with-deps.js` bundle text) |
| Regex-extracted `App`/`PostMessageTransport` local names against the installed `ext-apps@1.7.5` bundle | ✅ resolved (`eI`, `Mu`) |

**NOT verified (requires a browser + the two-terminal setup):** live mount, handshake,
streaming, app-initiated `callTool` round-trip, auto-resize, theme propagation,
teardown-awaits-ack, display-mode echo. All MVP acceptance items need a manual pass —
see "Next" below.

---

## Key invariants honored
- `toolCall.uiResource` presence remains the single render discriminator (untouched).
- `@provide` reassigns `_mcpAppHost` (spread), never mutates a nested field — the one
  gotcha flagged repeatedly in the implementation notes as the most likely silent
  failure point for theme propagation.
- Cross-origin sandbox still mandatory; nothing in Step 4 touches the error-artifact
  gates from Step 3.
- Library still never owns an MCP `Client` — the mock adapter is the only thing that
  "is" a server here, and it's `src/stories`-only, not `src/lib`.

## Decisions applied this session (already locked before implementation — not re-litigated)
1. Explicit-only `mcpApp` marker — used on the mock's `showWidget` tool.
2. `hostContext.availableDisplayModes = ['fullscreen']` only.
3. `structuredContent` uncapped — untouched.
4. `skipLibCheck: true` — untouched.
5. Theme via `matchMedia('(prefers-color-scheme: dark)')` — implemented as specified.
6. Both widget variants built (hand-rolled + real SDK via `?raw`).
7. `hostCapabilities` lives on the `McpAppHost` context interface (option (a), not
   hardcoded in `ai-mcp-app.ts`).
8. Sandbox URL config: `mcpAppSandboxUrl` property / `mcp-app-sandbox-url` attribute —
   picked and used consistently in the story.

---

## Next: manual test (do this before Step 5/6)

Two terminals:
```bash
pnpm --filter=@tylertech/forge-ai sandbox   # proxy on :6017
pnpm storybook                              # Storybook on :6016
```
Open **AI Components/Primitives/Chatbot/MCP App**, try both `HandRolledWidget` and
`RealAppSdkWidget`. Send any message to trigger `showWidget`. Walk the MVP acceptance
checklist from `docs/plans/mcp-apps-build-plan.md` §Step 4 "Done when" — mount-once,
live args, result render, app-initiated `callTool` round-trip (via the widget's
"Refresh via app tool call" button), auto-resize, theme propagation (**use browser
devtools' `prefers-color-scheme` emulator, not the Storybook dark-mode toggle**),
`hostCapabilities` reaching the widget, display-mode echo, app-only tool
(`refreshWidgetData`) callable yet absent from the model tool list, teardown-awaits-ack
on unmount. Also spot-check a plain non-MCP story (e.g. `AiChatbot.stories.ts` →
`Demo`) for regression.

**Do not start Step 5/6 until this manual pass is done and confirmed.**

## Working agreement (unchanged)
Stop + manual-test each step. No auto-stage git (ask first). No `.test.ts` (MCPA-8
deferred). Concise; return types; access modifiers; `#` privates.
