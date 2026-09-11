# Task: MCP Apps — Step 4 (MCPA-6) — Host wiring + Storybook proof `[fe]`

You're picking up an in-progress feature. **Read first, in order:**
1. `docs/plans/mcp-apps-build-plan.md` — authoritative spec/plan (§"Step 4").
2. `docs/plans/mcp-apps-epic.html` — full "why".
3. `features/mcp-apps/phase-1.md` → `phase-2.md` → `phase-3.md` → `phase-4.md` — Steps 0–3 status + locked decisions (D2/D5/D5a/D6). **Do not re-litigate them.**

## Where things stand
- **Steps 0–3 complete & build-verified.** Sandbox proxy (`:6017`), types/interface/adapter surface, `<forge-ai-mcp-app>` element + `ExtAppsBridge` + `McpAppBridgeController` + `@lit/context` surface, and **render routing + resource stamping** all done. `pnpm build:ai` green.
- **The element is reachable at runtime now** — both render paths branch on `toolCall.uiResource` and the core controller stamps it from the `mcp-ui-resource` event.
- **BUT nothing provides the `McpAppHost` context yet**, so the element error-artifacts (no `sandboxUrl`). **Step 4 is the first real end-to-end run — the MVP proof.**
- **Nothing staged in git.** Uncommitted: 4 `src/lib` edits + `features/mcp-apps/phase-4.md` (+ untracked `docs/`).

## Working agreement (hard rules)
- **Stop and manual-test at each step.** Don't barrel Step 4→6.
- **Never auto-stage git. Ask before staging.**
- **No `.test.ts`** (MCPA-8 deferred) unless told.
- Concise; no code comments unless complex; always return types; `public/private/protected` + `#` privates.
- Follow `CLAUDE.md` (root + `packages/ai`): no direct `@tylertech/forge*` imports in component TS, inline `<svg>` not `<forge-icon>`, no inline styles, Forge tokens, logical margin props, positive boolean naming, `readonly` vs `get` for templates.

## Your job (per plan §Step 4)
1. **`src/lib/ai-chatbot/ai-chatbot-base.ts`** — `@provide` the `McpAppHost` context: `callTool`/`readResource` delegate to `_coreController.adapter?.callMcpTool`/`readMcpResource`; supply initial `hostContext` (theme + container dims + `availableDisplayModes`) + `sandboxUrl` config; **update the provided value** on Forge theme change (consumers re-render via `subscribe:true`). Context surface built in Step 2 (`mcp-app-context.ts`) — first `@lit/context` use in repo; no local precedent.
2. **Host capabilities:** advertise `{ openLinks:{}, serverTools:{}, serverResources:{}, logging:{} }` (`McpAppHostCapabilities`, Step 1) → passed to the bridge → returned in `McpUiInitializeResult`. Element currently passes `{}` (see phase-3 note) — wire the real object. Without these, `serverTools`-gated widgets never call the adapter.
3. **Display-mode negotiation:** host declares supported modes in `hostContext.availableDisplayModes`; the `ui/request-display-mode` handler MUST echo the *resulting* mode and MUST NOT switch to a mode absent from the widget's `appCapabilities.availableDisplayModes`. (Popover mechanics = Step 6.)
4. **`src/stories/utils/mcp-app-mock-adapter.ts`** (new, model on `mock-adapter.ts`) — streams a tool call; `resolveMcpAppResource` returns self-contained inline MCP-app HTML (reads tool input via guest `App` SDK, renders, can issue a follow-up `callTool`); canned `callMcpTool`/`readMcpResource`; then `_emitToolResult`. **Include a `visibility:["app"]` app-only tool** callable via `tools/call` but hidden from the model tool list; reject app `tools/call` for tools lacking `"app"`.
5. **`src/stories/…/ai-chatbot/AiChatbotMcpApp.stories.ts`** (new) + MDX — wire the mock adapter + a tool marked `mcpApp`, `sandboxUrl` → the Step 0 proxy.

## Manual test setup (two terminals)
- `pnpm --filter=@tylertech/forge-ai sandbox` → proxy on **:6017**
- `pnpm storybook` → Storybook on **:6016**
- Different ports = different origins = real SOP isolation. Story sets `sandboxUrl=http://localhost:6017/sandbox.html`.

## MVP acceptance (Done when)
Tool streams → iframe mounts **once** (no flicker/remount) → args stream live → result renders → app-initiated `callTool` round-trips → auto-resize with no feedback loop → theme toggle propagates → `hostCapabilities` returned in `McpUiInitializeResult` → display-mode request echoes resulting mode → app-only tool callable via `tools/call` yet absent from model tool list → teardown awaits View ack before iframe removal. **Regression:** plain (non-MCP) tool-call rendering unchanged.

## Answer these BEFORE coding (they gate Step 4/6 scope)
- **Auto-discovery vs explicit `mcpApp` marker** — explicit-only v1, or also `mcpApps` auto-detect? (author leans explicit-only)
- **`pip` vs `fullscreen`-only** (Step 6).
- **`structuredContent` persistence cap** — full payload currently rides on `ToolCall`; add a cap (truncate+flag / offload / skip above N KB)?
- **`skipLibCheck:true`** in `packages/ai/tsconfig.json` (phase-3 D6) — keep?

## Key invariants (do not violate)
- `toolCall.uiResource` presence = single render discriminator.
- Never route MCP apps through `forge-ai-chatbot-tool-call` (remounts child per delta → iframe/bridge teardown). Keep the `keyed(id)` position so Lit reuses the node.
- Cross-origin sandbox mandatory; missing `sandboxUrl` **or** missing `csp`/`permissions` policy → error artifact.
- Library never owns an MCP `Client`; app→server calls delegate to adapter methods.
- `resolveMcpAppResource` consumes the resolved `resourceUri` + policy from the event — no client-side templated-URI re-interpolation.

## Depends on backend (does not block FE MVP with mock adapter)
Real-backend rehydration on long threads needs Story 5b (persist `csp`/`permissions`) + emitted-URI lookup beyond 500 messages (review #1/#2). FE gate already in place (error artifact on missing policy). Live render + short-thread rehydration with a persisted-policy mock are unaffected.

## When done
Update `features/mcp-apps/phase-4.md` (or add `phase-5.md`) with status + decisions, then **STOP and report** for manual testing — do not start Step 5/6.
