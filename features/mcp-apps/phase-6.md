# MCP Apps — Phase 6 Status & Handoff (Step 5 DONE → manual test next)

> Read `phase-5.md` (Step 4 done + manual-test findings + post-test refinements), then
> this. Plan: `docs/plans/mcp-apps-build-plan.md` §Step 5. Comparison doc:
> `docs/plans/mcp-apps-bridge-comparison.md`.

**Last updated:** 2026-08-08
**Branch:** `feat/mcp-apps`
**Status:** ✅ **Step 5 (MCPA-4B) COMPLETE, build-verified. Manual test still needed.**
Impl B (`app-bridge2.ts`) exists, both impls are interchangeable behind `McpAppBridge`
via a config switch, and the comparison doc records a decision: **impl B ships**, impl A
removal is a follow-up (not done in this pass).

---

## What Step 5 delivered (4 files edited, 2 new files)

### 1. `src/lib/tools/ai-mcp-app/app-bridge2.ts` (new) — impl B
Hand-rolled, zero-new-dependency `McpAppBridge` implementation. ~270 lines.

- `window.addEventListener('message', ...)` scoped to the specific `sandboxWindow`
  passed into `connect()`; validates `event.source === sandboxWindow` **and** pins
  `event.origin` to the first observed origin (stricter than impl A's
  `PostMessageTransport`, which only checks `source`).
- Hand-rolled JSON-RPC 2.0 framing: an incrementing numeric `id` for host-initiated
  requests (`ui/resource-teardown`), a `Map<id, {resolve,reject}>` for matching
  responses; notifications (everything else the host sends) get no reply and expect
  none back.
- Implements the full ratified `ui/` method set confirmed against the installed
  `@modelcontextprotocol/ext-apps@1.7.5`'s `spec.types.d.ts` this session: `ui/initialize`
  (request, replies with `hostInfo`/`hostCapabilities`/`hostContext`),
  `ui/notifications/initialized`, `ui/notifications/tool-input(-partial)`,
  `ui/notifications/tool-result`, `ui/notifications/tool-cancelled`,
  `ui/notifications/host-context-changed`, `ui/notifications/size-changed`, `ui/message`,
  `ui/open-link`, `ui/request-display-mode` (echoes the resulting mode back),
  `ui/update-model-context`, `ui/resource-teardown`, `notifications/message` (logging),
  `ping`. Non-`ui/` methods (`tools/call`, `resources/read`) forward to the same
  `oncalltool`/`onreadresource` slots the interface already defines.
- Sandbox handshake matches impl A exactly against the same
  `packages/ai/sandbox/sandbox.js`: `sandbox-proxy-ready` → `sandbox-resource-ready` →
  `ui/initialize` → `ui/notifications/initialized`.
- **No zod/SDK** — every inbound field is narrowed with `typeof`/`Array.isArray` checks
  before use (see `#dispatchRequest`/`#handleNotification`). The cross-origin sandbox is
  the security boundary, not schema validation, per the plan's explicit instruction.
- **Two gaps found and fixed during implementation, not deferred:**
  1. The `message` listener registered in `connect()` was never removed → every widget
     mount would have leaked a global listener forever. Fixed: `sendTeardown()` now
     calls a private `#dispose()` that removes the listener and rejects any in-flight
     requests.
  2. `sendTeardown()`'s `ui/resource-teardown` request had no timeout — a widget that
     never acks would hang the host's `disconnectedCallback` indefinitely (and, before
     fix #1, doubly leak the listener). Fixed: a 5s `Promise.race` timeout, then dispose
     regardless. This is a spike default, not a spec-derived number — worth revisiting
     if impl B ships for real.
- **Gap left open, not fixed:** no `onerror`-equivalent — a malformed inbound message
  (fails `asJsonRpc` narrowing, or matches no case in the dispatch switches) is silently
  dropped, versus impl A's zod-validation-error → `onerror` callback. Documented in the
  comparison doc as an acceptable spike gap, not fixed here (would need a design
  decision on where a dropped-message signal should surface).

### 2. `src/lib/tools/ai-mcp-app/mcp-app-context.ts` — `bridgeImpl` config flag
- Added `bridgeImpl?: 'ext-apps' | 'hand-rolled'` to the `McpAppHost` interface. Absent
  → defaults to `'ext-apps'` (impl A) at the call site, preserving existing behavior for
  anyone not opting in yet.

### 3. `src/lib/tools/ai-mcp-app/ai-mcp-app.ts` — impl switch
- New `#createBridge(host)` private method: returns `new HandRolledBridge(...)` when
  `host.bridgeImpl === 'hand-rolled'`, else `new ExtAppsBridge(...)` (unchanged default).
  `#connect()` now calls `this.#createBridge(host)` instead of hardcoding `ExtAppsBridge`.
  No other change to the element — the controller and everything downstream still only
  see the bridge-agnostic `McpAppBridge` interface.

### 4. `src/lib/ai-chatbot/ai-chatbot-base.ts` — config surface threaded through
- New `mcpAppBridgeImpl?: 'ext-apps' | 'hand-rolled'` property (`mcp-app-bridge-impl`
  attribute), mirroring the existing `mcpAppSandboxUrl` pattern exactly: `_mcpAppHost`
  seeded with `bridgeImpl: undefined`, `willUpdate` reacts to
  `changedProperties.has('mcpAppBridgeImpl')` and spreads a new `_mcpAppHost` (never
  mutates in place — same `@lit/context` `Object.is` requirement as the sandbox-URL and
  theme-change paths already followed).

### 5. `src/stories/components/primitives/ai-chatbot/AiChatbotMcpApp.stories.ts` — parameterized, not duplicated
- Added a `bridgeImpl` Storybook control (`select`, `['ext-apps', 'hand-rolled']`,
  defaults to `'ext-apps'`) to `meta.argTypes`/`meta.args`. Both existing stories
  (`HandRolledWidget`, `RealAppSdkWidget` — these name the **widget-variant** axis, a
  different axis from the bridge impl) now pass `mcp-app-bridge-impl=${args.bridgeImpl}`
  to `<forge-ai-chatbot>`. All four combinations of widget-variant × bridge-impl are
  reachable from these two stories via the control — no new story files.
- `AiChatbotMcpApp.mdx` updated with a note distinguishing the widget-variant axis
  (guest-side, hand-rolled vs. real SDK) from the bridge-impl axis (host-side, impl A vs
  impl B) — these are easy to conflate by name.

### 6. `docs/plans/mcp-apps-bridge-comparison.md` (new) — the comparison doc
Measured bundle delta, LOC/maintenance surface, spec-conformance risk,
handshake/error-handling fidelity, draft-spec extensibility, and a recorded decision.
**Decision: impl B ships.** Key numbers (esbuild 0.27.2, min+gzip, isolated bundle per
impl — see doc for full methodology):

| | Impl A (`ExtAppsBridge`) | Impl B (`HandRolledBridge`) |
|---|---|---|
| Gzip, full bundle | 63,992 B | 1,983 B |
| Gzip, deps-only floor | 63,150 B (≈98.7% of A's total) | — (no new deps) |

Corrects the plan's estimate: impl A is **~62.5 KB gzip, not ~80 KB** (this repo's zod is
v3.25.76, not v4 as the plan assumed — v3 has a smaller locale surface). Impl B is
**~1.9 KB gzip**, under the "<5 KB" target. Impl A's own glue code is only ~840 B gzip on
top of the SDK+zod floor — the estimate's shape (deps dominate impl A's cost) was right,
the absolute number wasn't.

**Follow-up, explicitly not done in this pass** (per the plan's instruction not to delete
the loser in the same pass as the decision): delete `app-bridge.ts`, drop
`@modelcontextprotocol/ext-apps` + `@modelcontextprotocol/sdk` from
`packages/ai/package.json`, remove the `bridgeImpl` config surface (context field +
`AiChatbotBase` property/attribute + story control), and default `ai-mcp-app.ts` straight
to `HandRolledBridge`. Needs its own review.

---

## Verification performed

| Check | Result |
|-------|--------|
| `npx tsc --noEmit -p tsconfig.json` | ✅ 0 new errors (same pre-existing `src/stories/**` errors as phase-5.md baseline) |
| `npx eslint .` (full package, and targeted on touched files) | ✅ exit 0, no warnings on any touched file |
| `pnpm build:ai` (root) | ✅ green — lint, vite bundle (incl. `dist/tools/ai-mcp-app/app-bridge2.mjs`), dts, CEM |
| `pnpm run build:storybook` | ✅ green — `AiChatbotMcpApp.stories-*.js` (349 KB) bundles correctly, confirms the `?raw` SDK import and new `bridgeImpl` control both compile through Storybook's build |
| Bundle-size measurement (esbuild, isolated entries per impl) | ✅ see comparison doc — cross-checked against real `pnpm build:ai` output (`dist/tools/ai-mcp-app/app-bridge.mjs`, deps externalized, unminified, 3.9 KB — confirms local glue-code size independent of the dep floor) |

**NOT verified (requires a browser + the two-terminal setup, same as Step 4):** impl B's
live handshake, streaming, app-initiated `callTool` round-trip, teardown-awaits-ack, and
the two fixed gaps (listener cleanup, teardown timeout) under a real widget. All of
Step 4's MVP acceptance items need re-running with `mcp-app-bridge-impl="hand-rolled"` in
addition to the default `"ext-apps"` path (already verified working per phase-5.md).

---

## Key invariants honored

- `McpAppBridge` interface remains the only thing `ai-mcp-app.ts` / the controller depend
  on — `#createBridge` is the single point of impl-specific branching, nothing else in
  the element or controller changed.
- Bridge scoped per-instance to its own `contentWindow` — impl B validates `event.source`
  against the specific `sandboxWindow` passed to `connect()`, same as impl A's
  `PostMessageTransport` constructor binding. Concurrent widgets still can't cross-talk.
- Handlers registered before `connect()` — unchanged; `McpAppBridgeController.connect()`
  still does `Object.assign(this.#bridge, config.handlers)` before calling
  `bridge.connect(...)`, and this holds for either impl since both just implement the
  same interface.
- `src/lib` still never owns an MCP `Client` — impl B has zero new imports beyond local
  types; impl A's `Client`-adjacent SDK types remain isolated to `app-bridge.ts`.

## Decisions applied this session (already locked before implementation — not re-litigated)
1. Impl B is hand-rolled JSON-RPC over `postMessage`, no zod/SDK — per plan.
2. Config switch lives on `McpAppHost` context (`bridgeImpl`), threaded through
   `AiChatbotBase` exactly like `mcpAppSandboxUrl` — consistent with the existing
   context-config pattern rather than inventing a new one.
3. Existing two stories parameterized with a `bridgeImpl` control rather than
   duplicated into four stories — per the plan's explicit instruction.
4. Decision recorded: **impl B ships**; impl A removal deferred to a follow-up review,
   not bundled into this change — per the plan's explicit instruction not to delete the
   loser in the same pass.

---

## Next: manual test (do this before Step 6)

Two terminals, same as Step 4:
```bash
pnpm --filter=@tylertech/forge-ai sandbox   # proxy on :6017
pnpm storybook                                # Storybook on :6016
```
Open **AI Components/Primitives/Chatbot/MCP App**. For **both** `HandRolledWidget` and
`RealAppSdkWidget`, run the full Step 4 MVP acceptance checklist twice — once with the
`bridgeImpl` control on `ext-apps` (already verified in Step 4; re-run only to confirm no
regression from the `#createBridge` refactor), once on `hand-rolled` (first-ever live run
of impl B). Pay particular attention to:
- Teardown: switch away from the story / unmount the chatbot and confirm no console
  errors, no hung state, and (if you can inspect it) that the `message` listener is
  actually removed — the two bugs fixed during implementation were both teardown-path
  bugs that a build-only check can't catch.
- Malformed-message resilience is NOT expected to log anything for impl B (documented
  gap) — don't file that as a new bug unless it causes a visible functional failure.

**Do not start Step 6 until this manual pass is done and confirmed.**

## Working agreement (unchanged)
Stop + manual-test each step. No auto-stage git (ask first). No `.test.ts` (MCPA-8
deferred). Concise; return types; access modifiers; `#` privates.
