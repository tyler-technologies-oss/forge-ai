# MCP Apps — Phase 1 Status & Handoff

> **Purpose:** working memory for the MCP-Apps build. Records what's done, decisions,
> findings, gotchas, and exactly where the next agent picks up. Read this first, then
> the plan (`docs/plans/mcp-apps-build-plan.md`) and epic (`docs/plans/mcp-apps-epic.html`).

**Last updated:** 2026-08-07
**Branch:** `main` (base commit `8662d53c`)
**Author of this phase:** implementation agent (Step 0 + Step 1)

---

## TL;DR

- **Done:** Step 0 (local cross-origin sandbox proxy) + Step 1 (MCPA-3 foundations:
  types, `McpAppBridge` interface, adapter surface).
- **Verified:** tsc type-checks clean (pre-existing story errors only, confirmed on
  HEAD), ESLint clean on all new/changed files, sandbox server smoke-tested via curl.
- **Not started:** Steps 2–6 (element, bridge impls, render routing, host wiring,
  Storybook proof, interactivity). **No `@modelcontextprotocol/*` dependency added yet.**
- **Next up:** Step 2 (MCPA-4) — `<forge-ai-mcp-app>` element + bridge impl A. This is
  the step that adds the ext-apps + SDK deps.
- **Nothing is staged in git** (per repo rule — do not auto-stage).

---

## Scope recap (from the build plan)

- **In scope:** MCPA-3 → MCPA-7 (render-only MVP + app→host interactivity).
- **Deferred:** MCPA-8 (unit tests) — no `.test.ts` files while prototyping. Repo has a
  98.5% coverage gate; that debt is paid back later on explicit go-ahead.
- **Build order:** `Step 0 ∥ Step 1` → 2 → 3 → 4 → {5, 6}.

---

## Completed work

### Step 0 — Local cross-origin sandbox proxy ✅

New directory: **`packages/ai/sandbox/`**

| File | Purpose |
|------|---------|
| `sandbox.html` | The proxy document. Loads first, loads `sandbox.js`. |
| `sandbox.js` | Spec-faithful relay (ported/adapted from `ext-apps/examples/basic-host/src/sandbox.ts`). |
| `server.mjs` | Node http server on **port 6017**, sets CSP as a real HTTP header from `?csp=`. |
| `README.md` | How to run it + what it does. |

**`sandbox.js` behavior (spec §5-6):**
1. Self-test `window.top` inaccessible (refuses to render if same-origin with host).
2. Resolve host origin from `document.referrer`; validate inbound host messages by
   `event.source === window.parent` **and** origin.
3. Post `ui/notifications/sandbox-proxy-ready` to host.
4. On `ui/notifications/sandbox-resource-ready` (`{ html, csp, permissions, sandbox? }`):
   build inner-iframe `allow` from `permissions`, apply `sandbox` attr (host may
   override; default `allow-scripts allow-same-origin`), `document.write(html)` into the
   inner iframe.
5. Relay every **non-`ui/notifications/sandbox-*`** message bidirectionally
   (host↔inner-app).

**`server.mjs` behavior:**
- Serves `sandbox.html` + `sandbox.js` only; 404s everything else; blocks `../` traversal.
- Sets `Content-Security-Policy` header on **`sandbox.html` only**, from the `?csp=`
  query param the host appends to `sandboxUrl`. Applies a restrictive default block when
  `?csp=` absent: `default-src 'none'; script-src 'self' 'unsafe-inline'; style-src
  'self' 'unsafe-inline'; img-src 'self' data:; media-src 'self' data:; connect-src
  'none'; object-src 'none'; base-uri 'self'; frame-src 'none'`.
- Port override via `MCP_SANDBOX_PORT` env var.

**Run:** `pnpm --filter=@tylertech/forge-ai sandbox` (added as the `sandbox` script in
`packages/ai/package.json`). Storybook is on 6016 → different port = different origin =
real SOP isolation in dev. **Run in a separate terminal** alongside `pnpm storybook`.

> **DECISION (user-approved):** standalone Node http server on a second port, with CSP as
> a **real HTTP header** from `?csp=`. This means **no documented deviation** from the
> spec is needed (the plan's Step 0 flagged CSP-via-header as a possible deviation — we
> avoided it). `concurrently` was intentionally NOT added as a dep; run the two servers
> in separate terminals.

**Expected console messages when loading `sandbox.html` directly (top-level, not
embedded):** both are correct/by-design, NOT bugs —
- `window.top is accessible — proxy is same-origin with the host … refusing to render` —
  standalone, `window.top === window`, so the isolation self-test correctly refuses.
- `no document.referrer origin` — direct navigation has no referrer.
In the real embedded flow (host `:6016` iframes sandbox `:6017`), `window.top` is
cross-origin → throws → `isolated = true` → renders; `document.referrer` = host URL →
origin validation active. The messages confirm the security gates work.

**Smoke test performed (all pass):**
- `curl -D-` on `/sandbox.html` → default CSP header present.
- `?csp=<custom>` → custom header echoed verbatim.
- `/sandbox.js` → served, no CSP header (correct — only the doc carries CSP).
- `/../package.json` → 404 (traversal blocked).

### Step 1 — MCPA-3 foundations ✅

**No new dependency added. No bridge implementation. Compiles standalone.**

**`packages/ai/src/lib/ai-chatbot/types.ts`** — added LOCAL types (deliberately NOT
aliased from `@modelcontextprotocol/ext-apps` — keeps the type layer bridge-agnostic so
the impl-B spike can drop ext-apps entirely if it wins):
- `McpAppResourceCsp` — `{ connectDomains?, resourceDomains?, frameDomains?, baseUriDomains? }`
- `McpAppResourcePermissions` — `string[]` OR boolean-flag map
  (`camera`, `microphone`, `geolocation`, `clipboardRead`, `clipboardWrite`,
  `displayCapture`, `fullscreen`)
- `McpAppUiResource` — `{ html; csp?; permissions?; resourceUri?; prefersBorder? }`
- `McpAppDisplayMode` — `'inline' | 'fullscreen' | 'pip'`
- `McpAppHostContext` — `{ theme: 'light'|'dark'; container?: {width,height}; availableDisplayModes? }`
  - **Deliberate MVP cut:** `styles.variables` (~80 CSS vars) and `styles.css.fonts` are
    NOT propagated. `theme` light/dark is the whole theming surface.
- `McpAppHostCapabilities` — `{ openLinks?; serverTools?; serverResources?; logging?; sandbox? }`
- `ToolCall.uiResource?: McpAppUiResource` + `ToolCall.structuredContent?: unknown`
- `ToolDefinition.mcpApp?: { resourceUri? }` (opt-in marker)
- `ToolResultEvent.structuredContent?: unknown` (companion field)

**`packages/ai/src/lib/ai-chatbot/agent-adapter.ts`:**
- `McpUiResourceEvent` — `{ toolCallId; toolName?; resourceUri; serverId?; mimeType?; csp?; permissions?; rawEvent? }`
- `McpToolCallParams` — `{ name; arguments? }`
- `McpResourceReadParams` — `{ uri }`
- Added `mcpUiResource` EventEmitter + `onMcpUiResource(cb)` subscription +
  `_emitMcpUiResource(event)` protected emitter (mirrors existing event patterns).
- `ToolResultEvent` (adapter's copy) gained `structuredContent?`.
- Optional methods (follow the `clearMemory?()` precedent):
  - `resolveMcpAppResource?({ resourceUri, csp?, permissions? })` — **takes the
    already-resolved `resourceUri`, NOT the tool name** (backend review #3: name-keyed
    resolution would force forbidden client-side URI re-interpolation).
  - `callMcpTool?(params)`, `readMcpResource?(params)`.

**`packages/ai/src/lib/tools/ai-mcp-app/mcp-app-bridge.ts`** (new) — the bridge-agnostic
`McpAppBridge` **interface** both impls will satisfy. Element + controller depend on this
ONLY. Methods: `connect`, `sendToolInputPartial`, `sendToolInput`, `sendToolResult`,
`sendToolCancelled`, `sendHostContextChange`, `sendTeardown` (returns a promise to await
before iframe removal — spec "SHOULD wait for ack"). Handler slots: `oncalltool`,
`onreadresource`, `onopenlink`, `onmessage`, `onloggingmessage`, `onsizechange`,
`onrequestdisplaymode`, `onupdatemodelcontext`. Plus param/result helper interfaces
(`McpAppOpenLinkParams`, `McpAppMessageParams`, `McpAppUpdateModelContextParams`,
`McpAppRequestDisplayModeParams/Result`, `McpAppLoggingMessage`, `McpAppSizeChange`,
`McpAppBridgeConnectConfig`).

**`packages/ai/src/lib/ai-chatbot/index.ts`** — barrel now exports all the new types
(the MCP-app types from `types.ts` + the new adapter event/param types). This is how the
bridge interface imports them via `../../ai-chatbot`.

---

## Files touched (nothing staged)

```
 M packages/ai/package.json                          # added "sandbox" script
 M packages/ai/src/lib/ai-chatbot/agent-adapter.ts   # events + optional methods
 M packages/ai/src/lib/ai-chatbot/index.ts           # barrel exports
 M packages/ai/src/lib/ai-chatbot/types.ts           # MCP-app local types
?? packages/ai/sandbox/                               # Step 0 proxy (4 files)
?? packages/ai/src/lib/tools/ai-mcp-app/             # mcp-app-bridge.ts only
```

---

## Verification status

| Check | Result |
|-------|--------|
| `npx tsc --noEmit -p tsconfig.json` on new/changed lib files | ✅ clean (probed: tsc catches errors in the new bridge file, so it IS in the compile path) |
| Pre-existing story-file tsc errors | Present on HEAD too (9 error lines) — NOT ours, all under `src/stories/` |
| `npx eslint` on all new/changed files | ✅ exit 0 |
| Sandbox server curl smoke test | ✅ (see Step 0 above) |

> **NOTE on `pnpm build:ai`:** its `prebuild`/`lint` step runs eslint over the whole
> package **including `src/stories`**, which has pre-existing errors unrelated to this
> work. The MCP-app *type layer* is clean. Don't be alarmed by story-file noise; verify
> with a targeted `tsc`/`eslint` on the lib files instead.

---

## Key invariants (DO NOT VIOLATE — carried from the plan/epic)

1. **`toolCall.uiResource` presence is the SINGLE render discriminator.** MCP app is an
   attribute of a tool call, not a standalone message.
2. **Never route MCP apps through `forge-ai-chatbot-tool-call`** — it imperatively
   remounts its child on every `toolCall` change
   (`ai-chatbot-tool-call.ts:65-90`), which tears down the iframe/bridge. Render
   `<forge-ai-mcp-app>` at a stable `keyed(toolCall.id, …)` template position so Lit
   reuses the DOM node and only updates `.toolCall`.
3. **Cross-origin sandbox is mandatory.** Missing `sandboxUrl` → error artifact, NEVER an
   insecure same-origin iframe.
4. **The library never owns an MCP `Client`.** App→server calls delegate to adapter
   `callMcpTool`/`readMcpResource`. `src/lib` imports only the browser-safe bridge; the
   SDK `Client` lives in adapter/consumer code.
5. **Local types, not ext-apps aliases** (already honored in Step 1).
6. **Host context via plain `@lit/context`** re-provide + `@consume({ subscribe: true })`
   — NOT a custom observable stream. `@lit/context` `^1.1.6` is already a dep but
   **currently unused in the repo** — Step 2 is the first use, no local precedent to copy.
7. **`resolveMcpAppResource` takes the resolved `resourceUri`, not the tool name**
   (backend review #3).

---

## Codebase findings / useful context for the next agent

- **This is greenfield** — before this phase there was ZERO MCP code in the repo
  (`grep -ri mcp src/lib` was empty).
- **Component pattern to mirror:** `src/lib/tools/ai-data-table/` — folder layout
  (`*.ts`, `*.scss`, `index.ts`), `LitElement implements IToolRenderer<T>`,
  `@property({attribute:false}) toolCall`, renders inside `<forge-ai-artifact>`, registers
  in `src/lib/index.ts` + `src/lib/tools/index.ts`. `DataTableToolElement` is `@internal`
  and NOT publicly exported as consumer API — mirror that (MCP app is internal for v1).
- **`forge-ai-artifact`** (`src/lib/ai-artifact/ai-artifact.ts`) — slots: `start`,
  `actions`, default. Has `--forge-theme-surface` css prop. `prefersBorder` will need to
  map to its border/bg chrome (may require a new attr/prop on the artifact — check when
  wiring Step 2).
- **Render gate to change (Step 3):**
  - `ai-assistant-response.ts` `#renderToolCall` (~line 105) currently returns `nothing`
    unless `toolDefinition?.renderer && toolCall.status === 'complete'`. MCP branch must
    come FIRST and render on `uiResource` presence regardless of status.
  - `ai-message-thread.ts` `#renderToolCall` (~line 239) + the standalone-`toolCall`
    filter in `#messages` (~lines 306-319, currently `return !!toolDef?.renderer`) must
    include `uiResource` tool calls so rehydrated threads render.
- **Core controller stamping (Step 3):** `chatbot-core-controller.ts`
  - Adapter subscriptions are wired in `#setupAdapter` (~line 131). Add
    `this.#adapter.onMcpUiResource(...)` there.
  - `#handleToolCall` `type:'agent'` branch (~line 293) does
    `updateToolCallInResponse(..., { status: 'complete' })` — this force-completes agent
    tools. MCP-app agent tools must NOT complete before their UI streams. Fix per plan
    Step 3.
  - Stamp via `messageStateController.updateToolCallInResponse(toolCallId, { uiResource })`.
    NOTE: `updateToolCallInResponse`'s 3rd param is typed for `tool-call-args|tool-call-end`
    events only — stamping `uiResource` uses just the `updates` arg, which is fine.
- **`MessageStateController.setMessages`** (rehydration path, ~line 470) already preserves
  `msg.children` including `toolCall` children verbatim → `uiResource` will survive
  rehydration as long as it's on the persisted `ToolCall`. Good.
- **Host wiring (Step 4):** `ai-chatbot-base.ts` `connectedCallback` (~line 129) builds
  the `ChatbotCoreController`. The `@provide` context + `sandboxUrl` property + theme
  change → `sendHostContextChange` go here. `_coreController.adapter` is the delegate
  target for `callTool`/`readResource`.
- **Storybook:** `main.ts` globs `src/stories/**`. Mock adapters live in
  `src/stories/utils/` (`mock-adapter.ts` is the model for the MCP mock). Stories use
  `import { action } from 'storybook/actions'` and MDX uses
  `@storybook/addon-docs/blocks` (per CLAUDE.md).
- **Node version:** v22.17.0 (top-level `await`, `node:` imports fine in `server.mjs`).

---

## Decisions log

| # | Decision | Rationale | Status |
|---|----------|-----------|--------|
| D1 | Sandbox served by standalone Node http server on :6017 | Real cross-origin vs Storybook :6016; spec-faithful | ✅ user-approved |
| D2 | CSP via real HTTP header from `?csp=` (not `<meta>`) | Tamper-proof, spec-faithful, avoids the documented deviation | ✅ user-approved |
| D3 | Did NOT add `concurrently` dep | Keep deps minimal; run 2 terminals | ✅ done |
| D4 | All MCP types local, not ext-apps aliases | Keeps type layer bridge-agnostic for impl-B spike | ✅ done |

---

## OPEN QUESTIONS (pending user answer — do not assume)

These do NOT block Step 2, but affect Step 4/6 scope. **Ask the user before implementing
the affected step.**

1. **Auto-discovery vs explicit marker** — ship explicit `mcpApp` per-tool marker only
   (built), or also add `mcpApps` auto-detect toggle on the chatbot? Author leans
   **explicit-only for v1** (simpler, matches the opt-in-marker invariant).
2. **`pip` display mode** — ship both `fullscreen`+`pip` in Step 6, or `fullscreen` only?
   (`McpAppDisplayMode` type already includes all three; this is about which the host
   actually implements.)
3. **`structuredContent` persistence cap** — truncate+flag / offload / skip rehydration
   above N KB? (Affects rehydration payload size; relevant at Step 3.)

---

## Next steps (Step 2 — MCPA-4, for the next agent)

New files under `packages/ai/src/lib/tools/ai-mcp-app/` (mirror `ai-data-table/`):
- `mcp-app-context.ts` — `@lit/context` `createContext` for `McpAppHost`
  (`{ callTool, readResource, hostContext }` — provided value, updated by base). **First
  use of `@lit/context` in the repo.**
- `mcp-app-bridge-controller.ts` — pure module (no Lit decorators), drives the
  `McpAppBridge` interface: `loadSandboxProxy(iframe, {sandboxUrl, csp, permissions})`
  (set `src` w/ `?csp=`, build `allow`, await `sandbox-proxy-ready`), register handlers
  **before** `connect()`, streaming `sendToolInputPartial → sendToolInput →
  sendToolResult`, `sendToolCancelled`, teardown. **Bridge-agnostic.**
- `app-bridge.ts` — impl A: wraps `new AppBridge(null, hostInfo, capabilities,
  { hostContext })` from `@modelcontextprotocol/ext-apps`; maps its handlers +
  `connect(PostMessageTransport(iframe.contentWindow, iframe.contentWindow))` /
  `sendSandboxResourceReady` / `teardownResource` onto the `McpAppBridge` surface.
  Isolated so it + deps drop cleanly if impl B wins.
- `ai-mcp-app.ts` — `forge-ai-mcp-app`, `LitElement implements IToolRenderer`; `@consume`
  `McpAppHost`; renders `<iframe>` inside `forge-ai-artifact`; drives controller from
  `firstUpdated`/`updated`/`disconnectedCallback`. Honor `uiResource.prefersBorder`.
  Error artifact if `sandboxUrl` missing.
- `ai-mcp-app.scss`, `index.ts` — Forge tokens, no inline styles; register in
  `src/lib/index.ts` + `src/lib/tools/index.ts`.
- **`packages/ai/package.json`** — add `@modelcontextprotocol/ext-apps` (`^1.7.5`) +
  `@modelcontextprotocol/sdk` (`^1.30.0`) — **impl A only.** ⚠️ First run needs
  `pnpm install`. `src/lib` must import ONLY the browser-safe `/app-bridge` entry (no SDK
  `Client` value import).

**Gotchas for Step 2:**
- Scope every bridge to its own `contentWindow` (concurrent apps must not cross-talk).
- Register bridge handlers BEFORE `connect()`.
- Await the `initialized` handshake before the first `sendToolInput*`.
- `AppBridge extends Protocol` pulls in SDK + zod (~80KB gzip) — this is the cost impl B
  (Step 5) exists to avoid. Keep impl A's imports isolated to `app-bridge.ts`.

**How to manually test Step 2 onward:** you need BOTH the sandbox server
(`pnpm --filter=@tylertech/forge-ai sandbox`) AND Storybook running, and a story
(Step 4) pointing `sandboxUrl` at `http://localhost:6017/sandbox.html`. Until Step 4's
story exists there's no visual surface — Step 2's acceptance is "element mounts one
iframe, handshakes, receives input/result" which realistically needs the Step 4 harness
to exercise. Consider building Step 2 + a minimal story stub together if you want to see
it live before Step 3/4.

---

## Working agreement with the user

- **Stop and manual-test at each level** before proceeding to the next step. Do not
  barrel through all steps.
- Do NOT auto-stage git files; ask before staging.
- No tests (`.test.ts`) while prototyping (MCPA-8 deferred).
- Be concise; don't add code comments unless complex; always add return types; use
  `public/private/protected`; `#` for non-decorator private members.
- See root `CLAUDE.md` + `packages/ai` conventions for the full component style rules
  (SCSS token imports, inline `<svg>` not `<forge-icon>`, logical margin properties,
  positive boolean prop naming, `readonly` vs `get` for templates, etc.).
