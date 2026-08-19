# MCP Apps — Phase 2 Status & Handoff (Step 2 / MCPA-4, IN PROGRESS)

> Working memory for **Step 2** (element + bridge impl A). Read `phase-1.md` first
> (Step 0/1 done), then this. Plan: `docs/plans/mcp-apps-build-plan.md` §"Step 2".

**Last updated:** 2026-08-07
**Branch:** `feat/mcp-apps`
**Status:** ✅ **Step 2 COMPLETE** — all 6 files written, `pnpm build:ai` green (bundle +
dts + CEM), element in bundle at `dist/tools/ai-mcp-app/`. See `phase-3.md` for the
finished-state handoff + design decisions. Section below is the original per-file plan
(kept for reference).

---

## What changed on disk this session (Step 2 so far)

- **`packages/ai/package.json`** — added two runtime deps under `dependencies`:
  - `@modelcontextprotocol/ext-apps": "^1.7.5"`
  - `@modelcontextprotocol/sdk": "^1.30.0"`
- **`pnpm install` ran** — lockfile + `node_modules` updated (46 packages added). ext-apps
  is present at `packages/ai/node_modules/@modelcontextprotocol/ext-apps`.
- **Nothing staged** (per repo rule).

**Not yet written:** `mcp-app-context.ts`, `mcp-app-bridge-controller.ts`, `app-bridge.ts`,
`ai-mcp-app.ts`, `ai-mcp-app.scss`, `index.ts`; no registration in `src/lib/index.ts` /
`src/lib/tools/index.ts`.

---

## ext-apps API — VERIFIED against installed `@1.7.5` `.d.ts` (do not re-investigate)

Import browser-safe surface from **`@modelcontextprotocol/ext-apps/app-bridge`** ONLY
(never `@modelcontextprotocol/sdk/client` as a value in `src/lib`).

### Construction (impl A, no Client)
```ts
import { AppBridge, PostMessageTransport, buildAllowAttribute } from '@modelcontextprotocol/ext-apps/app-bridge';
const bridge = new AppBridge(
  null,                       // _client: pass null → manual handlers (no SDK Client in lib)
  hostInfo,                   // Implementation { name, version }
  capabilities,              // McpUiHostCapabilities (see below)
  { hostContext }            // HostOptions { hostContext?: McpUiHostContext }
);
```

### Sandbox handshake (host side, double-iframe)
- Host loads OUTER iframe = `sandboxUrl` (our `sandbox.html`, cross-origin).
- `bridge.connect(new PostMessageTransport(iframe.contentWindow, iframe.contentWindow))`.
  **Both args = the OUTER iframe's `contentWindow`** (scopes bridge to that window — the
  proxy relays to the inner app frame). Transport validates `event.source`.
- Sandbox proxy posts `ui/notifications/sandbox-proxy-ready`. AppBridge surfaces this via
  `addEventListener('sandboxready', …)` (or deprecated `onsandboxready`).
- On sandboxready → `bridge.sendSandboxResourceReady({ html, sandbox?, csp?, permissions? })`.
  **params shape (verified):** `{ html: string; sandbox?: string; csp?: McpUiResourceCsp;
  permissions?: McpUiResourcePermissions }`. Our `sandbox.js` reads `html`, `permissions`,
  `sandbox` (ignores csp — CSP is the HTTP header on `sandbox.html` via `?csp=`).
- View then sends `ui/initialize`; bridge auto-responds with `hostCapabilities` +
  `hostContext`, fires `addEventListener('initialized', …)` (or `oninitialized`).
- **Host MUST NOT send tool input before `initialized`.** Gate first `sendToolInput*` on it.

### Streaming + lifecycle (all return Promise<void>)
- `bridge.sendToolInputPartial({ arguments })` — 0+ times during args stream.
- `bridge.sendToolInput({ arguments })` — once, after initialized + args complete.
- `bridge.sendToolResult(result)` — CallToolResult shape. (structuredContent rides in the
  result object per SDK CallToolResult.structuredContent.)
- `bridge.sendToolCancelled({ reason })` — on abort/error.
- `bridge.setHostContext(hostContext)` — diffs vs current, emits host-context-changed only
  for changed fields. **Use this for theme/size updates** (NOT the low-level
  `sendHostContextChange`).
- `bridge.teardownResource({})` → Promise; await before removing iframe (SHOULD wait for
  ack). `sendResourceTeardown` is the deprecated alias.

### Handler slots (assign BEFORE connect) — signatures VERIFIED
All are property setters on the bridge. `extra` = RequestHandlerExtra (has `.signal`).
- `bridge.oncalltool = async (params, extra) => CallToolResult` — params `{name, arguments?}`.
  Delegate → `host.callTool`.
- `bridge.onreadresource = async (params, extra) => ReadResourceResult` — params `{uri}`.
  Delegate → `host.readResource`.
- `bridge.onopenlink = async ({url}, extra) => McpUiOpenLinkResult` (`{}` | `{isError:true}`).
- `bridge.onmessage = async ({role, content}, extra) => McpUiMessageResult` (`{}` success).
- `bridge.onrequestdisplaymode = async ({mode}, extra) => ({ mode })` — echo resulting mode.
- `bridge.onupdatemodelcontext = async ({content, structuredContent}, extra) => ({})`
  (EmptyResult).
- `bridge.onloggingmessage = ({level, logger, data}) => void` (or addEventListener).
- **size:** `addEventListener('sizechange', ({width, height}) => …)` — `onsizechange` is
  DEPRECATED. width/height may each be undefined.
- `bridge.onrequestteardown` — app-initiated teardown request notification.

> The `McpAppBridge` interface in `mcp-app-bridge.ts` (Step 1) is the surface our element
> talks to. Impl A (`app-bridge.ts`) maps the above onto it. Note the Step 1 interface uses
> `sendHostContextChange(hostContext)` — implement it by calling `bridge.setHostContext(...)`
> (the diffing one), NOT the low-level `sendHostContextChange`.

### Key ext-apps types (map to our LOCAL types — do NOT leak ext-apps types through
### `McpAppBridge`)
- `McpUiHostContext` (spec.types) — big/loose (`[key:string]: unknown`). Relevant fields:
  `theme?: 'light'|'dark'`; `displayMode?`; `availableDisplayModes?: McpUiDisplayMode[]`;
  `containerDimensions?` = `({height:number}|{maxHeight?}) & ({width:number}|{maxWidth?})`.
  **Our local `McpAppHostContext.container {width,height}` maps to
  `containerDimensions:{width,height}`.** `toolInfo`, `styles`, locale, etc. = MVP cuts.
- `McpUiResourcePermissions` (VERIFIED) = **object of empty-object flags**, keys:
  `camera?, microphone?, geolocation?, clipboardWrite?` — each `{}`. **NOTE: NO
  `clipboardRead`, `displayCapture`, or `fullscreen`** in ext-apps @1.7.5 (our local
  `McpAppResourcePermissions` type + `sandbox.js` PERMISSION_FEATURE_MAP are a superset —
  fine, our sandbox tolerates extra keys; but impl A should only forward what ext-apps
  models, or pass our permissions straight to `sendSandboxResourceReady` which types as
  `McpUiResourcePermissions`).
- `McpUiResourceCsp` (VERIFIED) = `{ connectDomains?, resourceDomains?, frameDomains?,
  baseUriDomains?: string[] }` — matches our local `McpAppResourceCsp` 1:1.
- `McpUiHostCapabilities` (VERIFIED) — `{ experimental?, openLinks?:{}, downloadFile?:{},
  serverTools?:{listChanged?}, serverResources?:{listChanged?}, logging?:{},
  sandbox?:{permissions?,csp?}, updateModelContext?, message?, sampling? }`. For MVP advertise
  `{ openLinks:{}, serverTools:{}, serverResources:{}, logging:{} }` (Step 4 finalizes).
- `buildAllowAttribute(permissions)` — ext-apps helper: maps `McpUiResourcePermissions` →
  iframe `allow` string. **Our `sandbox.js` already has its own `buildAllowAttribute`** and
  builds `allow` on the INNER frame. The OUTER iframe (sandboxUrl) also needs an `allow`
  attr so the permission can delegate through — controller can use ext-apps'
  `buildAllowAttribute` for the outer iframe.

---

## The 6 files to write (next agent) — under `packages/ai/src/lib/tools/ai-mcp-app/`

Mirror `tools/ai-data-table/` structure. `mcp-app-bridge.ts` (interface) already exists here.

1. **`mcp-app-context.ts`** — `@lit/context createContext<McpAppHost>(Symbol('mcp-app-host'))`.
   `McpAppHost = { callTool(params): Promise<unknown>; readResource(params): Promise<unknown>;
   hostContext: McpAppHostContext; sandboxUrl?: string }`. **First `@lit/context` use in
   repo** — no local precedent. Provider = base component (Step 4); consumer = element via
   `@consume({ context, subscribe: true })`.

2. **`app-bridge.ts`** — impl A. `export class ExtAppsBridge implements McpAppBridge`.
   Wraps `AppBridge`. Constructor builds `new AppBridge(null, hostInfo, capabilities,
   {hostContext})`. `connect(config)`: register all handlers (map bridge's `.on*` →
   `this.oncalltool` etc.), await `initialized` (wire an internal promise off
   `addEventListener('initialized')`), then resolve. Translate our local
   `McpAppHostContext` ↔ `McpUiHostContext` (container→containerDimensions, theme
   passthrough). Keep ALL ext-apps value imports in THIS file only.
   ⚠ The sandbox handshake (load outer iframe, await sandboxready, sendSandboxResourceReady)
   is arguably controller territory — but `sandboxready` fires on the AppBridge, so impl A
   must expose a hook or own the outer-iframe load. **Design decision to make:** either (a)
   controller creates AppBridge+transport and drives sandboxready→sendSandboxResourceReady,
   with impl A a thinner wrapper; or (b) impl A owns full lifecycle incl. sandbox handshake
   given `connect(config)` receives `{html, hostContext}` + needs the iframe. Recommend (b):
   pass the iframe into the bridge (extend `McpAppBridgeConnectConfig` with the sandbox
   iframe + sandboxUrl + csp/permissions, OR give the bridge the contentWindow). Revisit the
   Step 1 `McpAppBridgeConnectConfig` — it currently only has `{html, hostContext}`, which is
   insufficient to run the sandbox handshake. **This is the main open design point.**

3. **`mcp-app-bridge-controller.ts`** — pure module (no Lit decorators). Owns:
   `loadSandboxProxy(iframe, {sandboxUrl, csp, permissions})` → set `iframe.src` =
   `${sandboxUrl}?csp=${encodeURIComponent(buildCspHeader(csp))}`, set outer `allow` via
   ext-apps `buildAllowAttribute(permissions)`; instantiate bridge; register handlers before
   connect; drive streaming from tool-call state; teardown. Talks to `McpAppBridge` interface
   ONLY (so impl B swaps in). **`buildCspHeader(csp)`** = compose the `McpAppResourceCsp`
   domains into the CSP string the server expects on `?csp=` (connect-src from
   connectDomains; img/script/style/font/media-src from resourceDomains; frame-src from
   frameDomains else 'none'; base-uri from baseUriDomains else 'self'; object-src 'none';
   default-src 'none'; script/style-src include 'self' 'unsafe-inline'). Mirror `sandbox/
   server.mjs` DEFAULT_CSP when csp absent. (This is the client-side counterpart that
   BUILDS what the server just echoes.)

4. **`ai-mcp-app.ts`** — `@customElement('forge-ai-mcp-app')`, `LitElement implements
   IToolRenderer`. `@property({attribute:false}) toolCall!: ToolCall`. `@consume` McpAppHost.
   Renders `<iframe>` inside `<forge-ai-artifact>`. Drive controller from
   `firstUpdated`/`updated`/`disconnectedCallback`. Honor `toolCall.uiResource.prefersBorder`
   → pass to artifact chrome (artifact currently always draws border+bg via `:host` border
   in `ai-artifact.scss` — prefersBorder=false needs a way to suppress it; may need a new
   attr on `forge-ai-artifact`, check Step 2). **Error artifact when `host.sandboxUrl`
   missing** (never same-origin iframe). Tag: `forge-ai-mcp-app` (NOT `forge-ai-tool-*` —
   it's rendered directly, not via createToolRenderer). Mark `@internal`.

5. **`ai-mcp-app.scss`** — Forge tokens only, no inline styles. iframe: `border:0; width:100%`.

6. **`index.ts`** — `export * from './ai-mcp-app.js';` (+ context/bridge if public).
   Then register: add `export * from './ai-mcp-app';`-style to `src/lib/tools/index.ts`
   AND ensure `src/lib/index.ts` picks up tools (currently `src/lib/index.ts` does NOT
   re-export `./tools` — data-table is only pulled in via dev/stories imports! **Verify how
   tools get into the built bundle** before assuming the barrel path. `grep`
   `forge-ai-tool-data-table` shows it's imported by dev/shared/tools.ts + demo.js, not the
   lib barrel. Decide whether `forge-ai-mcp-app` needs a lib-level export or is imported by
   the render path in Step 3 (ai-assistant-response imports the element module directly).)

---

## Gotchas (from plan §Step 2 + verified)
- Scope every bridge to its own `contentWindow` (concurrent apps must not cross-talk).
- Register handlers BEFORE `connect()`.
- Await `initialized` before first `sendToolInput*`.
- ext-apps `onsizechange`/`oninitialized`/`onsandboxready` are DEPRECATED in favor of
  `addEventListener` — use addEventListener to avoid clobbering + get cleanup.
- `AppBridge extends Protocol` pulls SDK + zod (~80KB gz) — impl B (Step 5) exists to drop
  this. Keep impl A imports isolated to `app-bridge.ts`.
- No `.test.ts` (MCPA-8 deferred).

## OPEN DESIGN POINT (resolve before/while writing app-bridge.ts)
`McpAppBridgeConnectConfig` (Step 1) is `{html, hostContext}` — **insufficient** to run the
sandbox handshake (needs the outer iframe/contentWindow + sandboxUrl + csp + permissions).
Decide: extend the interface's connect config, or split responsibilities
(controller loads proxy + owns iframe; bridge gets contentWindow). Recommend the controller
owns the iframe + `sendSandboxResourceReady` timing, and the bridge exposes the AppBridge
lifecycle. Adjust `mcp-app-bridge.ts` accordingly and keep it bridge-agnostic.

## Manual test (once files exist) — needs BOTH servers
`pnpm --filter=@tylertech/forge-ai sandbox` (port 6017) + `pnpm storybook` (6016). No visual
surface until Step 4's story. Step 2 acceptance = element mounts one iframe, handshakes,
receives input/result — realistically exercised with the Step 4 harness. Consider building a
minimal story stub alongside Step 2 for live confirmation.

## Working agreement (unchanged)
Stop + manual-test each step. No auto-stage git. No tests. Concise, return types, access
modifiers, `#` privates. Answer user's 3 open questions (phase-1) before Steps 4/6.
