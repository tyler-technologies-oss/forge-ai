# MCP Apps — Phase 3 Status & Handoff (Step 2 DONE → Step 3 next)

> Read `phase-1.md` (Step 0/1) + `phase-2.md` (Step 2 plan + verified ext-apps API), then
> this. Plan: `docs/plans/mcp-apps-build-plan.md`. Epic: `docs/plans/mcp-apps-epic.html`.

**Last updated:** 2026-08-07
**Branch:** `feat/mcp-apps`
**Status:** ✅ **Step 2 (MCPA-4) COMPLETE & VERIFIED (build-level).** Next: Step 3 (MCPA-5)
render routing + resource stamping — **gated on the working agreement: stop + manual-test
first.** Nothing staged in git.

---

## What Step 2 delivered (6 new files + edits)

Under `packages/ai/src/lib/tools/ai-mcp-app/`:

1. **`mcp-app-context.ts`** — `@lit/context` `createContext<McpAppHost>` (Symbol keyed).
   `McpAppHost = { callTool, readResource, hostContext, sandboxUrl? }`. First `@lit/context`
   use in the repo. Provider = base component (Step 4); consumer = element (`@consume({
   subscribe: true })`).
2. **`app-bridge.ts`** — impl A, `ExtAppsBridge implements McpAppBridge`. **The ONLY file
   importing ext-apps** (`@modelcontextprotocol/ext-apps/app-bridge`). Wraps `AppBridge`.
   Maps ext-apps handler surface → the bridge-agnostic interface. Isolated so it + deps
   drop cleanly if impl B wins.
3. **`mcp-app-bridge-controller.ts`** — pure module (no Lit). Owns the OUTER iframe DOM
   (`src` w/ `?csp=`, outer `allow`) + streaming lifecycle (`sendToolInputPartial →
   sendToolInput → sendToolResult`, teardown). Talks to `McpAppBridge` interface ONLY.
   Exports `buildCspHeader(csp)` (client-side counterpart of `sandbox/server.mjs`
   DEFAULT_CSP) + `McpAppHandlers` type.
4. **`ai-mcp-app.ts`** — `<forge-ai-mcp-app>`, `LitElement implements IToolRenderer`,
   `@internal`. `@consume` McpAppHost. Renders `<iframe>` in `<forge-ai-artifact>`. Honors
   `uiResource.prefersBorder` (`false` → bare iframe, no chrome; `true`/omitted → wrapped
   in artifact = border+bg). **Error artifact when `host.sandboxUrl` missing** (never
   same-origin). Re-emits view→host handlers as `forge-ai-mcp-app-*` CustomEvents (Step 6
   wires host behavior).
5. **`ai-mcp-app.scss`** — Forge tokens, no inline styles.
6. **`index.ts`** — re-exports element + context + bridge interface.

**Edits to existing files:**
- `src/lib/tools/index.ts` — added `export * from './ai-mcp-app';`.
- `src/lib/tools/ai-mcp-app/mcp-app-bridge.ts` (Step 1 interface) — **extended
  `McpAppBridgeConnectConfig`** (see Decision D5) with `sandboxWindow`, `permissions`,
  `sandbox`. Still bridge-agnostic (no ext-apps types leak).
- `packages/ai/tsconfig.json` — **added `"skipLibCheck": true`** (see Decision D6).

---

## Design decisions made this phase (the two open points from phase-2)

### D5 — Controller/bridge split (the "main open design point")
**Chosen: recommendation (b) split.** The **controller owns the outer sandbox iframe DOM**
(sets `src` with `?csp=`, sets the outer `allow` via ext-apps `buildAllowAttribute`); the
**bridge owns the AppBridge/postMessage lifecycle**. `McpAppBridgeConnectConfig` extended to
carry `sandboxWindow: Window` (the loaded iframe's contentWindow) + `permissions` + optional
`sandbox` — all plain/local types, no ext-apps leak. Flow in `controller.connect()`:
1. `Object.assign(bridge, handlers)` — register view→host handlers BEFORE connect.
2. Build + set outer `allow` on the iframe.
3. `bridge.connect({ sandboxWindow, html, hostContext, permissions, sandbox })` — this
   registers the PostMessageTransport listener (via `transport.start()`), so it must run
   **before** navigating the iframe. Then set `iframe.src` (with `?csp=`).
4. Bridge internally: `sandboxready` → `sendSandboxResourceReady({html, permissions,
   sandbox})` → `initialized` → resolve.

### D5a — Initial host context via constructor, NOT `setHostContext`
**Critical correctness fix discovered reading `app-bridge.js`:** `AppBridge.setHostContext()`
calls `this.notification(...)`, which **throws over a null transport** if called
pre-connect. The initial host context is actually delivered in the **`ui/initialize`
response** (`_oninitialize` returns `this._hostContext`). So `ExtAppsBridge` constructs the
`AppBridge` **lazily inside `connect()`** with `{ hostContext }` in the constructor options,
and only uses `setHostContext` for **subsequent** changes (theme/size) after connect. If a
future refactor moves construction back to the ctor, do NOT call `setHostContext` before
`connect()`.

### D6 — `skipLibCheck: true` added to `packages/ai/tsconfig.json`
ext-apps@1.7.5 ships `.d.ts` built against **zod v4** (`$strip`, `zod/v4/core`), but pnpm
resolves **zod 3.25.76** for it in this workspace → 6 `error TS2344/TS2416` in
`node_modules/.../app-bridge.d.ts` (a third-party declaration/runtime-dep mismatch, not our
code). `skipLibCheck` is the standard remedy (stop typechecking node_modules declarations).
**This is a repo-wide tsconfig change** — flagged for review. Side effect: it also silenced
the ext-apps lib noise the phase-1 note mentioned; the 9 pre-existing `src/stories/**`
errors are unchanged (confirmed present on HEAD).

### D2 (bundle path — resolved, no change needed)
`src/lib/index.ts` does **NOT** export `./tools` — and neither data-table nor mcp-app needs
it to. The element reaches the bundle by being **imported directly by the render path**
(Step 3: `ai-assistant-response.ts` / `ai-message-thread.ts` will `import
'../tools/ai-mcp-app/ai-mcp-app.js'`), exactly like `forge-ai-tool-data-table` (imported by
`dev/shared/tools.ts` + `dev/chatbot/tools/demo.js`, never the lib barrel). Registration in
`tools/index.ts` is done; **no lib-barrel export added** (matches data-table precedent).

---

## Verification performed

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` on `tools/ai-mcp-app/**` | ✅ clean (0 errors in our files) |
| `npx tsc --noEmit` whole package | only the 9 pre-existing `src/stories/**` errors (same as HEAD) |
| `npx eslint src/lib/tools/ai-mcp-app/` | ✅ exit 0 |
| `pnpm build:ai` (root) | ✅ green — prebuild lint passed, vite bundle built, dts built (4.4s), CEM analyzed |
| Element in bundle | ✅ `dist/tools/ai-mcp-app/{ai-mcp-app,app-bridge,mcp-app-bridge-controller,mcp-app-context}.{mjs,d.ts}` |

**NOT verified (by design — no runtime surface yet):** live handshake / iframe mount /
streaming. Step 2 has **no visual surface until Step 4's story**. To exercise live you need
the Step 4 mock adapter + story pointing `sandboxUrl` at the Step 0 proxy. A minimal story
stub was **not** built (it depends on the Step 4 mock adapter, which is gated on the pending
user decisions below).

---

## Manual test setup (when there's a surface — Step 4)
Two servers, separate terminals:
- `pnpm --filter=@tylertech/forge-ai sandbox` → proxy on **:6017**
- `pnpm storybook` → Storybook on **:6016**
Different ports = different origins = real SOP isolation. Story sets
`sandboxUrl=http://localhost:6017/sandbox.html`.

---

## Notes / small deferrals for later steps
- **Host capabilities** passed to the bridge are `{}` right now (element line ~115). Step 4
  wires the real `{ openLinks:{}, serverTools:{}, serverResources:{}, logging:{} }` (from
  `McpAppHostCapabilities`, Step 1) — needed or `serverTools`-gated widgets never call the
  adapter.
- **`onmessage`** flattens ext-apps `ContentBlock[]` → a plain string (text blocks only)
  before crossing the `McpAppBridge` interface (keeps the interface bridge-agnostic /
  string-based per `McpAppMessageParams`). Non-text blocks are dropped for MVP.
- **`syncToolCall`** gates each send once (`#inputSent`/`#resultSent`) and treats
  `executing|complete|error` as "args complete". Depends on Step 3 NOT force-completing
  MCP-app agent tools before the UI streams (the `type:'agent'` branch fix at
  `chatbot-core-controller.ts` ~line 293).
- **`prefersBorder`** handled WITHOUT modifying `forge-ai-artifact` (no new attr): `false`
  renders the bare iframe; otherwise wrap in the artifact. If a future need arises for
  "chrome-less but still inside artifact," revisit adding an attr to the artifact then.

---

## OPEN QUESTIONS (unchanged from phase-1 — pending user answer; gate Steps 4/6, NOT Step 3)
1. **Auto-discovery vs explicit marker** — explicit `mcpApp` per-tool marker only (built),
   or also `mcpApps` auto-detect on the chatbot? (lean explicit-only v1)
2. **`pip` display mode** — ship `fullscreen`+`pip`, or `fullscreen` only? (Step 6)
3. **`structuredContent` persistence cap** — truncate+flag / offload / skip above N KB?
   (Step 3 relevance: what gets persisted for rehydration.)

## NEW question for the user
4. **`skipLibCheck: true`** added to `packages/ai/tsconfig.json` (D6) to tolerate ext-apps'
   zod-v4 `.d.ts` under a zod-v3 resolution. OK to keep? Alternative: pin/align zod, or a
   dep override — but that's a bigger lockfile change. (Impl B in Step 5 removes ext-apps
   entirely, which would let us drop this.)

---

## Next: Step 3 (MCPA-5) — DO NOT START until manual-test go-ahead
Per plan §Step 3: stamp `uiResource` in `chatbot-core-controller.ts` on the
`mcp-ui-resource` event (resolved URI + policy, NOT tool name); branch first on
`toolCall.uiResource` in `ai-assistant-response.ts` `#renderToolCall` + `ai-message-thread.ts`
(+ standalone-toolCall filter); import the element module directly on those render paths
(D2). Rehydration safety gate: missing `csp`/`permissions` → error artifact.

## Working agreement (unchanged)
Stop + manual-test each step. No auto-stage git (ask first). No `.test.ts` (MCPA-8
deferred). Concise; return types; access modifiers; `#` privates.
