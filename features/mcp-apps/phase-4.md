# MCP Apps — Phase 4 Status & Handoff (Step 3 DONE → Step 4 next)

> Read `phase-1.md` (Step 0/1), `phase-2.md` (Step 2 plan + ext-apps API), `phase-3.md`
> (Step 2 done + D5/D5a/D6), then this. Plan: `docs/plans/mcp-apps-build-plan.md` §Step 3.

**Last updated:** 2026-08-07
**Branch:** `feat/mcp-apps`
**Status:** ✅ **Step 3 (MCPA-5) COMPLETE & build-verified.** `<forge-ai-mcp-app>` is now
reachable at runtime — render paths branch on `toolCall.uiResource` and the core controller
stamps it from the `mcp-ui-resource` event. **First live end-to-end run is still Step 4**
(nothing provides the `McpAppHost` context yet → the element error-artifacts until then).
Nothing staged in git.

---

## What Step 3 delivered (4 files edited, 0 new files)

### 1. `src/lib/core/chatbot-core-controller.ts` — subscribe + stamp + agent-branch fix
- Imported `McpUiResourceEvent`.
- Subscribed `adapter.onMcpUiResource(this.#handleMcpUiResource)` in `#setupAdapter`
  (alongside the other subscriptions).
- New `#handleMcpUiResource(event)`: calls
  `adapter.resolveMcpAppResource({ resourceUri, csp, permissions })` **with the resolved
  URI + policy from the event** (NOT the tool name — backend review #3), then stamps via
  `messageStateController.updateToolCallInResponse(toolCallId, { uiResource })`. No-ops if
  the adapter doesn't implement `resolveMcpAppResource` or it returns `undefined`.
- **Agent-branch fix** (`#handleToolCall`): `else` → `else if (!toolCall.uiResource)`, so an
  MCP-app agent tool is **not** force-completed with `{ status: 'complete' }` before its UI
  streams. (Depends on this to let `syncToolCall` stream input→result — phase-3 note.)

### 2. `src/lib/ai-assistant-response/ai-assistant-response.ts` — render routing
- `import '../tools/ai-mcp-app/ai-mcp-app.js';` (D2 — the render path is how the element
  reaches the bundle; the lib barrel does NOT export tools).
- `#renderToolCall` branches **first** on `toolCall.uiResource`, returning
  `keyed(toolCall.id, html\`<forge-ai-mcp-app .toolCall=…>\`)` **regardless of the
  `status === 'complete'` gate**; else falls through unchanged.

### 3. `src/lib/ai-message-thread/ai-message-thread.ts` — render routing + filter
- Same import + same `uiResource`-first branch in its `#renderToolCall`.
- Standalone-`toolCall` filter in `#messages` now returns `true` for `item.data.uiResource`
  (before the `toolDef?.renderer` check) so rehydrated threads render the widget with no
  tool definition present.

### 4. `src/lib/tools/ai-mcp-app/ai-mcp-app.ts` — rehydration safety gate (backend review #1)
- New `#hasPolicy` getter: `csp !== undefined && permissions !== undefined` (**presence**,
  not truthiness — an explicit empty policy `{}`/`[]` is valid). `#canRender` now also
  requires `#hasPolicy`.
- Error artifact body is now a `#errorBody` getter that distinguishes the two failure modes
  (no `sandboxUrl` → "no secure sandbox configured"; missing policy → "security policy is
  missing"). `#errorArtifact` changed from `readonly` field to a `get` (dynamic body).
- **Net:** a rehydrated `uiResource` missing `csp`/`permissions` renders the error artifact
  — never runs the widget under an empty/wrong policy.

### Type note (keyed directive)
`keyed()` returns a `DirectiveResult`, not a `TemplateResult`. `#renderToolCall` (both
components), `#children` (assistant-response), and `#messages` (message-thread) return types
were widened to `unknown` / `unknown[]` (Lit renders `unknown` fine). Minimal, localized.

---

## Verification performed

| Check | Result |
|-------|--------|
| `npx tsc --noEmit -p tsconfig.json` | ✅ 0 errors in `src/lib` (only the pre-existing `src/stories/**` errors remain, same as HEAD) |
| `npx eslint` on all 4 changed files | ✅ exit 0 |
| `pnpm build:ai` (root) | ✅ green — lint, vite bundle, dts (4.4s), CEM |
| Element reaches bundle via render path | ✅ `dist/ai-assistant-response/*.mjs` + `dist/ai-message-thread/*.mjs` both import `ai-mcp-app` |

**NOT verified (by design — no host provider yet):** live mount / handshake / streaming /
rehydration. Requires Step 4's `McpAppHost` provider on `ai-chatbot-base.ts` + the mock
adapter + story pointing `sandboxUrl` at the Step 0 proxy (`:6017`). Until then the element
error-artifacts (no `sandboxUrl`) — **expected**. Step 3 proves routing/stamping only.

---

## Key invariants honored
- `toolCall.uiResource` presence is the single render discriminator (both paths).
- MCP apps route through `<forge-ai-mcp-app>` at a `keyed(id)` position — **never** through
  `forge-ai-chatbot-tool-call` (which remounts its child per delta → iframe/bridge teardown).
- Cross-origin sandbox mandatory; missing `sandboxUrl` **or** missing policy → error artifact.
- `resolveMcpAppResource` consumes the resolved `resourceUri` + policy from the event, not
  the tool name (no client-side templated-URI re-interpolation).

## Depends on backend (does not block FE routing — carried forward)
- **Review #1:** rehydration needs Story 5b to persist `csp`/`permissions` alongside
  `resourceUri`/`structuredContent`. FE gate is in place (error artifact on missing policy).
- **Review #2:** emitted-URI authorization scans only the last 500 messages → proxy re-fetch
  404s for a widget deep in a long thread. Live render unaffected. Treat rehydration
  acceptance as verified only for short threads with a persisted-policy mock adapter.

---

## PENDING USER DECISIONS (unchanged — still gate Step 4/6; one touches Step 3)
1. **Auto-discovery vs explicit `mcpApp` marker** — lean explicit-only v1. (Step 4)
2. **`pip` vs `fullscreen`-only** — (Step 6).
3. **`structuredContent` persistence cap** — truncate+flag / offload / skip above N KB?
   **Relevant to what gets persisted for rehydration.** Not implemented — ask before adding
   a cap. (Currently the full `structuredContent` rides on the `ToolCall`.)
4. **`skipLibCheck: true`** in `packages/ai/tsconfig.json` (phase-3 D6) — confirm OK to keep.

---

## Next: Step 4 (MCPA-6) — DO NOT START until manual-test go-ahead
Host wiring + Storybook proof (first real end-to-end run). Per plan §Step 4:
`@provide` the `McpAppHost` context on `ai-chatbot-base.ts` (callTool/readResource delegate
to the adapter; supply initial `hostContext` + `sandboxUrl`; update provided value on theme
change); advertise host capabilities; display-mode negotiation; new `mcp-app-mock-adapter.ts`
+ `AiChatbotMcpApp.stories.ts` + MDX. Answer decisions 1–3 first (they gate Step 4/6 scope).

## Working agreement (unchanged)
Stop + manual-test each step. No auto-stage git (ask first). No `.test.ts` (MCPA-8 deferred).
Concise; return types; access modifiers; `#` privates.
