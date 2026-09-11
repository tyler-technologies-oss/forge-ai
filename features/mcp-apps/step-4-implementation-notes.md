# MCP Apps — Step 4 (MCPA-6) Implementation Notes

> **Read first:** `step-4-handoff.md` (task brief), `docs/plans/mcp-apps-build-plan.md`
> §Step 4, `phase-4.md` (Step 3 status). This doc is the research/design output from the
> session that scoped Step 4 — it did NOT write any code. It exists so the next agent can
> start implementing immediately instead of re-deriving the below. Nothing is staged in
> git; nothing in `src/lib` or `src/stories` has changed since phase-4.md.

## Decisions locked this session (do not re-litigate)

Answered via user prompts; treat as settled:

1. **Discovery mode:** explicit-only `ToolDefinition.mcpApp` marker for v1. No
   `mcpApps` auto-detect.
2. **Display modes for Step 4:** `hostContext.availableDisplayModes = ['fullscreen']`
   only (not `pip`). Popover mechanics are Step 6 regardless; this only affects what the
   host *advertises* in Step 4's initial context.
3. **`structuredContent` persistence cap:** leave uncapped. Full payload continues to
   ride on `ToolCall.structuredContent` as-is. No truncation/offload logic in Step 4.
4. **`skipLibCheck: true`** in `packages/ai/tsconfig.json` (phase-3 D6): keep as-is, no
   action needed.
5. **Theme-change detection in `ai-chatbot-base.ts`:** use
   `window.matchMedia('(prefers-color-scheme: dark)')` + a `change` listener. This
   matches the existing pattern in `src/dev/chatbot/main.ts:180` and
   `src/dev/chatbot-launcher/main.ts:82` (`colorScheme: matches ? 'dark' : 'light'`).
   Zero Forge coupling. **Known limitation (accepted):** this will NOT react to an
   app-level manual light/dark toggle that ignores the OS preference — there is no
   existing Forge convention in this repo for that (see "Rejected alternatives" below).
   The Storybook story should demonstrate the propagation by having the mock widget
   render `hostContext.theme` and toggling it via the OS/browser color-scheme emulator
   (Storybook's dark-mode toolbar addon does NOT drive this — see gotcha below).
6. **Mock widget wire protocol — build BOTH variants** (user explicitly asked for both,
   don't pick one):
   - **Variant A (realistic):** a real MCP-app HTML file that imports the actual guest
     `App` SDK from `@modelcontextprotocol/ext-apps` and speaks the full spec handshake.
   - **Variant B (hand-rolled):** inline HTML string with a minimal hand-written
     postMessage/JSON-RPC handshake, no SDK, no build step — for quick/easy iteration.
   - Ship as **two separate stories** (or two variants within one story file) so both
     paths are demoed. See "Mock widget: two variants" below for exactly how to build
     variant A without adding new bundling infra.

## Rejected alternatives (recorded so they aren't re-proposed)

- **Theme via `MutationObserver` on `documentElement[data-forge-theme]`** — this
  attribute is set by `forge-theme-toggle`, which lives in `@tylertech/forge-extended`
  (`ThemeToggleComponent`, source at
  `../../forge-extended/packages/extended/src/lib/theme-toggle/theme-toggle.ts` in the
  sibling repo checkout). **`@tylertech/forge-extended` is not a dependency of this
  package** (`packages/ai/package.json` has no `forge-extended` in `dependencies` or
  `devDependencies`). Also, Storybook's own dark-mode toggle
  (`.storybook/preview.ts:7-10`, `@vueless/storybook-dark-mode`) toggles a
  `.forge-storybook-dark` **class on `document.body`**, not the `data-forge-theme`
  attribute — so wiring to that attribute wouldn't even react to the Storybook dark-mode
  toolbar button. Rejected for both non-dependency and non-integration reasons.
- **Explicit `theme` property on `ai-chatbot-base`** — simplest, but rejected in favor of
  auto-detection via media query (user's choice).
- **CDN import of `@modelcontextprotocol/ext-apps`** for the mock widget (e.g.
  `esm.sh`) — rejected: breaks offline dev, depends on a third-party CDN, and would
  require widening the widget's CSP `connect-src`/`script-src` to a domain outside our
  control. See "Mock widget" section for the chosen approach instead.

## File-by-file implementation plan

### 1. `src/lib/ai-chatbot/ai-chatbot-base.ts`

Current state (read in full this session — 629 lines, abstract base extended by both
`AiChatbotComponent` and `AiChatbotLauncherComponent`). Relevant existing members:
- `protected _coreController!: ChatbotCoreController;` (line 97)
- `public override connectedCallback()` (line 129) — constructs `_coreController`,
  assigns `adapter`
- No `@state()` currently exists on this class (both subclasses use `@state()` for their
  own view-state, e.g. `ai-chatbot-launcher.ts:119-126` — established local pattern to
  follow).

**Add:**

```ts
import { provide } from '@lit/context';
import { mcpAppHostContext, type McpAppHost } from '../tools/ai-mcp-app/mcp-app-context.js';
import type { McpAppHostContext as McpAppHostContextType, McpAppHostCapabilities } from './types.js';
```
(Name the imported context-value type something other than `McpAppHostContext` to avoid
colliding with the `McpAppHostContext` type from `types.js` — e.g. import the type as
`HostContext` via `type { McpAppHostContext as HostContext }`, OR just reference
`McpAppHost['hostContext']` inline. Pick whichever reads cleaner; both compile.)

- **New property surface** (mirrors existing `sandboxUrl` mention in the plan):
  ```ts
  @property({ attribute: 'mcp-app-sandbox-url' })
  public mcpAppSandboxUrl?: string;
  ```
  (Naming: the plan text says "add `sandboxUrl` config surfaced to the element" — decide
  attribute name; `mcp-app-sandbox-url` avoids collision with any future unrelated
  `sandbox-url` usage. Confirm no existing `sandboxUrl`-named property elsewhere in the
  base — there is none, grepped this session.)

- **New `@provide` field:**
  ```ts
  @provide({ context: mcpAppHostContext })
  @property({ attribute: false })
  private _mcpAppHost: McpAppHost = {
    callTool: params => this._coreController?.adapter?.callMcpTool?.(params) ?? Promise.resolve({ content: [] }),
    readResource: params => this._coreController?.adapter?.readMcpResource?.(params) ?? Promise.resolve({ contents: [] }),
    hostContext: { theme: 'light', availableDisplayModes: ['fullscreen'] },
    sandboxUrl: undefined
  };
  ```
  **Important nuance on `@provide` + reactivity:** per
  `node_modules/.pnpm/@lit+context@1.1.6/.../lib/decorators/provide.d.ts` and the JS
  implementation read this session, `@provide` wraps the property setter to call
  `ContextProvider.setValue()` — so **assigning a new object** to `_mcpAppHost` (not
  mutating it in place) is what propagates to `@consume({ subscribe: true })` consumers.
  Always do `this._mcpAppHost = { ...this._mcpAppHost, hostContext: newContext }`, never
  `this._mcpAppHost.hostContext = newContext`.

- **Theme detection** — add in `connectedCallback` (after `super.connectedCallback()`):
  ```ts
  #themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  #handleThemeChange = (): void => this.#updateHostContext({ theme: this.#themeMediaQuery.matches ? 'dark' : 'light' });
  ```
  Register `this.#themeMediaQuery.addEventListener('change', this.#handleThemeChange)` in
  `connectedCallback`, remove in `disconnectedCallback` (base doesn't currently override
  `disconnectedCallback` — add one, call `super.disconnectedCallback()` first per Lit
  convention... actually Lit convention is call super first for connected, last for
  disconnected — verify against an existing override in this file if one exists; none
  does yet in base, but check `ai-chatbot-launcher.ts` / other components for the
  established ordering before writing).

- **`sandboxUrl` and capabilities wiring:** when `mcpAppSandboxUrl` property changes
  (via `willUpdate`, same pattern as the existing `adapter` sync at
  `ai-chatbot-base.ts:147-151`), update `_mcpAppHost.sandboxUrl`.

- **Host capabilities → passed to the bridge, not the context object.** Re-read
  `mcp-app-context.ts` (`McpAppHost` interface) — it does **not** have a
  `hostCapabilities` field; capabilities are a bridge-construction-time argument
  (`ExtAppsBridge` constructor takes `capabilities: McpAppHostCapabilities` — see
  `app-bridge.ts:29-32`). **This means capabilities are NOT something `ai-chatbot-base`
  provides via context** — they're currently hardcoded as `{}` in
  `ai-mcp-app.ts:134`:
  ```ts
  const controller = new McpAppBridgeController(new ExtAppsBridge(HOST_INFO, {}));
  ```
  **Step 4 must change this `{}`.** Two options, pick one and update this doc / tell the
  user which was chosen:
  - (a) Add `hostCapabilities: McpAppHostCapabilities` to the `McpAppHost` context
    interface (`mcp-app-context.ts`) alongside `callTool`/`readResource`/`hostContext`/
    `sandboxUrl`, provide it from `ai-chatbot-base.ts` as
    `{ openLinks: {}, serverTools: {}, serverResources: {}, logging: {} }`, and have
    `ai-mcp-app.ts:134` read `this.host.hostCapabilities` instead of `{}`.
  - (b) Hardcode the capabilities object directly in `ai-mcp-app.ts` since it's static
    for the MVP (no per-instance variation needed yet).
  **Recommendation: (a)** — matches the plan's literal wording ("Host capabilities...
  passed to the bridge") and keeps `ai-mcp-app.ts` host-agnostic (it already gets
  everything else through the context). This requires a small `mcp-app-context.ts` edit
  in addition to `ai-chatbot-base.ts`.

### 2. `src/lib/tools/ai-mcp-app/mcp-app-context.ts`

Add `hostCapabilities: McpAppHostCapabilities` to the `McpAppHost` interface (see
option (a) above). Import `McpAppHostCapabilities` from `../../ai-chatbot` (already
exported from the barrel per `ai-chatbot/index.ts:75`).

### 3. `src/lib/tools/ai-mcp-app/ai-mcp-app.ts`

Line 134 currently: `new ExtAppsBridge(HOST_INFO, {})`. Change to
`new ExtAppsBridge(HOST_INFO, this.host?.hostCapabilities ?? {})`. `this.host` is
already consumed via `@consume({ context: mcpAppHostContext, subscribe: true })`
(line 42-44) — no new wiring needed on this file besides reading the new field.

**Display-mode negotiation is ALREADY IMPLEMENTED end-to-end** — verified this session,
no code change needed here:
- `ai-mcp-app.ts:93-96` (`onrequestdisplaymode` handler) already echoes back whatever
  mode `app-bridge.ts`'s `onrequestdisplaymode` resolves to.
- `app-bridge.ts:119-122` already returns `{ mode: result?.mode ?? params.mode }` — i.e.
  it echoes the *resulting* mode, defaulting to the requested mode if the host doesn't
  override.
- The **only thing Step 4 controls here** is what `hostContext.availableDisplayModes`
  the host advertises (locked to `['fullscreen']` per decision #2 above) — that's set in
  `ai-chatbot-base.ts`'s initial `_mcpAppHost.hostContext`, not in `ai-mcp-app.ts` or
  `app-bridge.ts`. The "MUST NOT switch to a mode absent from the widget's
  `appCapabilities.availableDisplayModes`" spec requirement is the widget's job to
  self-police (or a real host's `onrequestdisplaymode` override) — for the MVP mock
  adapter this doesn't need extra host-side enforcement code since Step 6 owns the real
  popover mechanics; flag this as a known gap if the acceptance checklist is read
  literally (see "MVP acceptance checklist mapping" below).

### 4. `src/stories/utils/mcp-app-mock-adapter.ts` (new file)

Model on `src/stories/utils/mock-adapter.ts` (237 lines, read this session). Key
patterns to replicate:
- `extends AgentAdapter`, implement `connect()`/`disconnect()`/`sendMessage()`/
  `sendToolResult()`/`abort()`/`threadId` getter/setter — all abstract on `AgentAdapter`.
- Use the protected `_emit*` methods (`_emitToolCallStart`, `_emitToolCallArgs`,
  `_emitToolCallEnd`, `_emitToolCall`, `_emitToolResult`, `_emitMcpUiResource`,
  `_emitRunStarted`, `_emitRunFinished`) — these are the adapter's public emission API,
  see `agent-adapter.ts:377-399`.

**New pieces beyond `MockAdapter`:**
- Implement the two optional adapter methods from `agent-adapter.ts:217-227`:
  ```ts
  public override resolveMcpAppResource(params: {
    resourceUri: string;
    csp?: McpAppResourceCsp;
    permissions?: McpAppResourcePermissions;
  }): Promise<McpAppUiResource | undefined> { ... }

  public override callMcpTool(params: McpToolCallParams): Promise<unknown> { ... }
  public override readMcpResource(params: McpResourceReadParams): Promise<unknown> { ... }
  ```
  `resolveMcpAppResource` returns `{ html: <the widget HTML string>, csp: {}, permissions: [], resourceUri: params.resourceUri, prefersBorder: true }`.
  **`csp: {}` and `permissions: []` must be explicit (not omitted)** — recall
  `ai-mcp-app.ts`'s `#hasPolicy` getter checks `csp !== undefined && permissions !==
  undefined` (presence, not truthiness) — omitting them entirely triggers the error
  artifact.

- **Streaming flow to simulate** (mirrors `MockAdapter.#simulateToolCall`, but the tool
  name is one flagged `mcpApp: {}` on the `ToolDefinition`, and after the normal
  start→args→end→call sequence, additionally emit `_emitMcpUiResource({ toolCallId,
  resourceUri: 'ui://mock-widget', csp: {}, permissions: [] })` — this is what
  `chatbot-core-controller.ts:#handleMcpUiResource` (already implemented, Step 3)
  listens for to call `resolveMcpAppResource` and stamp `uiResource` onto the ToolCall.**
  Sequence:
  ```
  toolCallStart → toolCallArgs (partial) → toolCallEnd (final args)
    → emitMcpUiResource (triggers resolveMcpAppResource → stamps uiResource,
       causing the element to mount)
    → [wait a beat so the mount is visible before the result lands]
    → emitToolResult (widget receives the final result via sendToolResult)
  ```
  Do NOT emit a plain `_emitToolCall` for this tool the way `MockAdapter` does for
  `'client'`-type tools — MCP-app tools are handled by the `type: 'agent'` branch in
  `chatbot-core-controller.ts#handleToolCall` (`this.tools.has(event.name)` is false for
  an agent-only mock tool — OR, if you want the tool registered via `setTools()` for
  discoverability, it'll classify as `'client'` and go through the `client` branch
  instead, which handles a `handler` callback. **Check which classification path you
  actually want**: `chatbot-core-controller.ts:204,275` — `type: this.tools.has(event.name) ? 'client' : 'agent'`.
  Since the mock tool needs a `ToolDefinition` (with `mcpApp: {}`) registered so
  `_tools` / `this.tools` map has it for other purposes (e.g. `renderer` lookups aren't
  used for MCP-app tools per the routing-first branch in `ai-assistant-response.ts`, so
  a `renderer` isn't required) — decide whether to register it via `setTools()` at all.
  **Recommendation:** register a minimal `ToolDefinition` with just `name` + `mcpApp:
  {}` (no `handler`, no `renderer`) via `options.tools` / `setTools()` so it's
  discoverable in `this.tools`, matching `type: 'client'`. Then in `sendMessage()`,
  instead of calling a `handler`, directly drive the emit sequence above (bypass
  `#executeToolHandler` since there's no `handler` — the `client`-type branch in
  `chatbot-core-controller.ts:287-293` calls `#sendToolResult` with a synthesized
  response if no handler exists, which is wrong for this case — so this needs
  `_emitToolResult` called manually with the *event stream* path, meaning it needs to go
  through the raw adapter event emitters, not through `sendToolResult()`/`#sendToolResult`.
  **Trace this precisely against `chatbot-core-controller.ts` `#handleToolCall` (lines
  261-297) before writing** — the exact branch taken depends on whether the tool has a
  `.handler`. Recommend testing with a `handler` that's a no-op / returns undefined so
  `#executeToolHandler` runs and calls `_emitToolResult`-equivalent via
  `#sendToolResult(toolCallId, ...)`, OR skip `handler` entirely and let the mock adapter
  drive raw events like `MixedResponseAdapter` does in the existing stories (this class,
  read in full this session at
  `src/stories/components/primitives/ai-chatbot/AiChatbot.stories.ts:495-1097`, is the
  best template — it extends `MockAdapter` and overrides `sendMessage`/`sendToolResult`
  to drive raw `_emit*` calls directly, bypassing the handler-based path entirely. **Use
  this pattern**, not the handler pattern.)

- **`visibility: ["app"]` tool** (app-only, hidden from model tool list, callable via
  `tools/call`): this is a property on individual **MCP tool definitions returned by a
  real MCP server**, not a first-class field in this repo's `ToolDefinition` type
  (`types.ts:92-125` has no `visibility` field). **The mock must simulate this itself**
  since there's no backend here:
  - Keep a second "tool" that is NOT registered via `setTools()` (so it never appears in
    `this.tools` / the model-facing tool list) but IS recognized inside the mock
    adapter's `callMcpTool(params)` implementation by name (e.g.
    `'refreshWidgetData'`).
  - `callMcpTool` should check: if `params.name` is the app-only tool, return a canned
    result; if it's any *other* name not in the "app-visible" allowlist, reject
    (`throw` or return an error result) — this is the "adapter must reject an app
    `tools/call` for a tool whose visibility lacks `"app"`" requirement from the plan.
  - This is purely mock-side bookkeeping (e.g. a `Set<string>` of app-visible tool
    names inside the adapter class) — there's no `visibility` field to thread through
    any real type.

### 5. `src/stories/components/.../ai-chatbot/AiChatbotMcpApp.stories.ts` (new) + MDX

Follow the structure of `AiChatbot.stories.ts` (1986 lines, fully read this session) —
`meta` object with `title: 'AI Components/Primitives/Chatbot'` subpath (pick something
like `'AI Components/Primitives/Chatbot/MCP App'` or a dedicated top-level story area —
check how other multi-file component stories nest titles before deciding), `render`
returning `html` with a `forge-ai-chatbot` wired to the mock adapter.

**Two stories per decision #6** (or one story with a Storybook `args` toggle — simpler
to just make two named exports, e.g. `export const RealAppSdkWidget` and
`export const HandRolledWidget`, each constructing a differently-configured
`McpAppMockAdapter` — e.g. an adapter constructor option `widgetVariant: 'sdk' | 'hand-rolled'`
that picks which HTML string `resolveMcpAppResource` returns).

`sandboxUrl` must point at `http://localhost:6017/sandbox.html` (Step 0's proxy, already
built and running via `pnpm --filter=@tylertech/forge-ai sandbox`) — wire it as
`mcp-app-sandbox-url="http://localhost:6017/sandbox.html"` attribute (or whatever
property name Step 4 lands on in `ai-chatbot-base.ts`).

MDX docs: follow `AiChatbot.mdx` structure (not read in full this session — quick skim
recommended before writing, to match heading/section conventions).

## Mock widget: two variants, concretely

### Variant B (hand-rolled) — write this first, it's simpler

A plain JS `<script>` inside the widget HTML string that:
1. On load, `postMessage({ jsonrpc: '2.0', method: 'ui/initialize', id: 1, params: {
   appInfo: { name: 'mock-widget', version: '1.0.0' }, appCapabilities: {}, protocolVersion: '2026-01-26' } }, '*')`
   to `window.parent` — **note:** it's actually talking to the *sandbox proxy* window
   (same-origin relay), which the proxy's `sandbox.js` (already built, Step 0) forwards
   verbatim to the real host — confirm this by re-reading `sandbox/sandbox.js:120-143`
   (`#handleMessage`) — the proxy relays everything that isn't a
   `ui/notifications/sandbox-*` method, so a plain `ui/initialize` JSON-RPC message from
   the inner app IS relayed to the host bridge untouched. Good — no special-casing
   needed in the widget.
2. Listen for the host's `ui/notifications/initialized` ack, then
   `ui/notifications/tool-input-partial` / `ui/notifications/tool-input` /
   `ui/notifications/tool-result` notifications (see method name strings enumerated in
   "Wire protocol reference" below) and render the args/result into the DOM.
3. Optionally send a `ui/message`-shaped request or call `tools/call` back for the
   "app-initiated `callTool` round-trip" MVP acceptance item — construct the JSON-RPC
   request manually (`{ jsonrpc: '2.0', id: <n>, method: 'tools/call', params: { name:
   'refreshWidgetData', arguments: {} } }`) and listen for the matching `id` in the
   response.

This can be a plain multi-line template string in `mcp-app-mock-adapter.ts` — no new
files, no build step. **This is the "quick and easy testing without a build" variant the
user asked for.**

### Variant A (realistic, real SDK) — needs one new static asset

**Key finding this session:** `@modelcontextprotocol/ext-apps` ships a
**pre-bundled, dependency-free ESM file** at
`node_modules/@modelcontextprotocol/ext-apps/dist/src/app-with-deps.js` (337KB,
confirmed via `grep -o 'from"[^"]*"'` → zero bare import specifiers; zod v4 + the MCP SDK
`Protocol` base class are already inlined into this single file). This is exactly what's
needed to load the real guest `App` class inside a sandboxed iframe with **no bundler
invocation at story-render time** — it's already built, just needs to be copied/served
as a static file.

**Recommended approach (avoids new build tooling):**
1. Copy (or symlink, or a tiny `cp` step in a package.json script)
   `node_modules/@modelcontextprotocol/ext-apps/dist/src/app-with-deps.js` into
   `packages/ai/sandbox/vendor/app-with-deps.js` (new subfolder) at prepare/build time —
   OR, simpler for a first pass, just read the file's contents in the mock adapter at
   story-render time via a Vite feature (`?raw` import or `new URL(..., import.meta.url)`)
   and inline it as a `<script type="module">...</script>` block directly in the widget
   HTML string. **`?raw` import is the simplest — no new files, no copy step, no server
   changes:**
   ```ts
   import extAppsSdkSource from '@modelcontextprotocol/ext-apps/dist/src/app-with-deps.js?raw';
   ```
   Then interpolate `extAppsSdkSource` into an inline `<script type="module">` in the
   widget HTML string returned by `resolveMcpAppResource`. Verify Vite's `?raw` suffix
   works for a path resolving into `node_modules` (it should — Vite treats `?raw` as a
   universal loader suffix regardless of package boundary) — **smoke-test this early**,
   it's the one unverified assumption in this plan.
2. **CSP implication:** an inline `<script type="module">` with the SDK source embedded
   needs `script-src 'unsafe-inline'` in the sandbox's CSP — already the default per
   `mcp-app-bridge-controller.ts:32-34` (`DEFAULT_CSP` includes
   `script-src 'self' 'unsafe-inline'`), so **no CSP change needed** if using inline
   `<script>` injection. (Using a `<script src="...">` pointing at a same-origin static
   file would avoid inlining ~337KB of text into every tool-call's HTML payload, which is
   the real tradeoff here — inlining is simplest to implement but bloats
   `ToolCall.uiResource.html` on every render. **Flag this as a known inefficiency, not
   a blocker**, for MVP purposes.)
3. Inside that widget's script, `import { App } from` **cannot** be used against inlined
   source text directly (it's a script tag, not an ES module import target) — the
   `app-with-deps.js` bundle's own top-level statements need to run in a module context
   and then expose `App` on `window` for the rest of the widget's inline code to use, OR
   the whole widget script (SDK + app logic) needs to be ONE concatenated module script
   (SDK bundle text + widget logic appended below it, since `app-with-deps.js` `export`s
   `App` via ESM `export {... as App}` at the end — see the tail of that file, captured
   this session: `...lb as ProtocolWithEvents,...eI as App}`). **Two ways to make this
   work:**
   - (i) Concatenate: `<script type="module">${extAppsSdkSource}\nconst app = new App(...); ...</script>` — relies on the SDK bundle's trailing `export {...}` statement being valid when concatenated with more code below it in the same module (it is — ES module `export` can appear anywhere at top level, and code after it still executes in order).
   - (ii) Two script tags: one `type="importmap"` isn't applicable here (no bare specifiers to map, the file has none) — so (i) is simpler. **Use (i).**

## Wire protocol reference (for variant B / hand-rolled widget)

Confirmed method name strings from
`node_modules/@modelcontextprotocol/ext-apps/dist/src/spec.types.d.ts` (grepped this
session):

```
ui/open-link
ui/download-file
ui/message
ui/notifications/sandbox-proxy-ready       (host-proxy internal, don't emit from widget)
ui/notifications/sandbox-resource-ready    (host-proxy internal, don't emit from widget)
ui/notifications/size-changed
ui/notifications/tool-input
ui/notifications/tool-input-partial
ui/notifications/tool-result
ui/notifications/tool-cancelled
ui/notifications/host-context-changed
ui/update-model-context
ui/resource-teardown
ui/notifications/request-teardown
ui/initialize
ui/notifications/initialized
ui/request-display-mode
```

`McpUiInitializeRequest.params` shape: `{ appInfo: Implementation, appCapabilities:
McpUiAppCapabilities, protocolVersion: string }` (`spec.types.d.ts:420-430`).
`McpUiAppCapabilities`: `{ experimental?, tools?: { listChanged? }, availableDisplayModes?
}` (`spec.types.d.ts:404-413`) — for the mock widget, an empty `{}` is fine.

`McpUiHostContext` (what the host sends the widget, i.e. what `ai-chatbot-base.ts`'s
`_mcpAppHost.hostContext` eventually becomes on the wire — mapped via
`app-bridge.ts:#toMcpUiHostContext`) includes `theme`, `styles`, `displayMode`,
`availableDisplayModes`, `containerDimensions`, plus fields this repo's local
`McpAppHostContext` type deliberately does NOT populate (`toolInfo`, `locale`,
`timeZone`, `userAgent`, `platform`, `deviceCapabilities`, `safeAreaInsets` — all
optional on the wire type, so omitting them is spec-legal).

## Gotchas / things that will bite if missed

1. **`#hasPolicy` presence check** (`ai-mcp-app.ts:63-66`): `csp` and `permissions` must
   be present (even as `{}`/`[]`), not just truthy-omitted, on whatever
   `resolveMcpAppResource` returns — already noted above, repeating because it's the
   single most likely silent failure (widget renders the error artifact instead of
   mounting, with no obvious error message pointing at the cause).
2. **`ExtAppsBridge` capabilities argument is currently `{}`** (`ai-mcp-app.ts:134`) —
   must be wired to the real `McpAppHostCapabilities` object per plan requirement #2;
   see "3." above for the exact interface change needed to thread it through context.
3. **`@provide` requires reassignment, not mutation**, to notify subscribed consumers —
   see the `ValueNotifier`/`ContextProvider` source read this session
   (`node_modules/@lit/context/development/lib/value-notifier.js`): `setValue` only
   fires `updateObservers` when `!Object.is(v, this._value)` — mutating a nested field
   on the existing object leaves `Object.is` true (same reference) and **silently does
   not propagate**. This is the most likely place a "theme toggle propagates" MVP
   acceptance check silently fails.
4. **Two things both need to run through `chatbot-core-controller.ts`'s existing
   Step-3 code, unchanged:** `#handleMcpUiResource` (already calls
   `adapter.resolveMcpAppResource` and stamps `uiResource`) and the agent-branch fix at
   `#handleToolCall` (`else if (!toolCall.uiResource)` — already guards against
   force-completing MCP-app tool calls). **Do not re-touch these** — Step 3 already
   landed them; Step 4 only needs the mock adapter to emit events in the right order to
   exercise this existing code path.
5. **Sandbox proxy must be running** (`pnpm --filter=@tylertech/forge-ai sandbox`, port
   6017) **in a separate terminal** alongside `pnpm storybook` (port 6016) for any
   manual test to work — this is infra from Step 0, not something Step 4 builds, but
   it's easy to forget when picking this back up fresh.
6. **`keyed()` directive return-type widening** already applied in Step 3
   (`ai-assistant-response.ts`, `ai-message-thread.ts` — `unknown`/`unknown[]` return
   types) — no further action, just don't be surprised by it when reading those files.
7. **Storybook's dark-mode toolbar button does NOT drive `prefers-color-scheme`** — it
   toggles a `body` class (`preview.ts:7-10`) using the `@vueless/storybook-dark-mode`
   addon, entirely independent of the OS media query. **The MCP-app theme-propagation
   demo will need the tester to change their OS/browser color scheme setting** (e.g. via
   browser devtools' rendering pane → "Emulate CSS media feature
   prefers-color-scheme"), NOT the Storybook toolbar toggle. **Document this clearly in
   the story's MDX / description** so the manual tester isn't confused when clicking the
   Storybook dark-mode button does nothing to the widget.

## MVP acceptance checklist mapping (from build-plan.md §Step 4 "Done when")

| Acceptance item | Status after this plan's file changes |
|---|---|
| tool streams → iframe mounts once (no flicker) | Already works (Step 2/3 element + routing) — verify with mock adapter's emit sequence |
| args stream live | Already works (`McpAppBridgeController.syncToolCall`, Step 2) |
| result renders | Already works — verify mock adapter emits `_emitToolResult` correctly |
| app-initiated `callTool` round-trips | Needs `McpAppHost.callTool` wired in `ai-chatbot-base.ts` → `adapter.callMcpTool` (this plan, §1) + mock adapter's `callMcpTool` impl (§4) |
| auto-resize, no feedback loop | Already implemented (`ai-mcp-app.ts:88-92`, `onsizechange` sets `this.style.height`) — no Step 4 code needed, just verify manually |
| theme toggle propagates | Needs `ai-chatbot-base.ts` media-query wiring (§1) — **watch gotcha #3** |
| `hostCapabilities` returned in `McpUiInitializeResult` | Needs the `{}` → real object fix (§2, §3) |
| display-mode request echoes resulting mode | **Already implemented**, no code change (see §3 "ALREADY IMPLEMENTED" note) — only the advertised `availableDisplayModes: ['fullscreen']` is new, and that's part of §1 |
| app-only tool callable via `tools/call`, absent from model tool list | Mock-adapter-only work, no `src/lib` change (§4, "visibility" sub-section) |
| teardown awaits View ack before iframe removal | **Already implemented** (`ai-mcp-app.ts:118`, `mcp-app-bridge-controller.ts:162-172` `teardown()` awaits `sendTeardown()`) — no code change, just verify manually |
| regression: plain tool-call rendering unchanged | No code touches the non-`uiResource` branch — should be a no-op, verify with an existing non-MCP story (e.g. `WithTools`) after changes |

**Net new code surface for Step 4 is smaller than the plan's file list suggests** —
`ai-mcp-app.ts` and `app-bridge.ts` need only the one-line capabilities fix; the bulk of
the real work is `ai-chatbot-base.ts` (context provider + theme detection) and the new
mock adapter + stories (which are pure additions, zero risk to existing code).

## Open item NOT resolved this session

- Exact attribute/property name for the sandbox URL config on `ai-chatbot-base.ts`
  (`mcpAppSandboxUrl` suggested, not confirmed with user). Pick something and note it in
  the eventual `phase-5.md` handoff.
- Whether `hostCapabilities` lives on the `McpAppHost` context interface (recommended,
  option (a) in §1) vs. hardcoded in `ai-mcp-app.ts` (option (b)) — recommended (a) but
  not confirmed with user; low-risk either way, revisit only if it causes friction.
- Story file path/title nesting convention for a multi-story MCP-app demo — skim
  existing multi-file story groups (e.g. `ai-data-table` stories, if any exist
  separately) before deciding; not investigated this session.
