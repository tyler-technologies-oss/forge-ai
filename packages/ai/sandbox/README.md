# MCP App sandbox proxy (local dev)

Untrusted MCP-App widget HTML must run on an origin **distinct** from the chatbot host,
or the `<iframe sandbox>` provides no isolation (see `docs/plans/mcp-apps-epic.html` §5).
This directory is a local, spec-faithful stand-in for the production sandbox origin
(MCPA-2, owned by backend/infra).

## Run it

```bash
pnpm --filter=@tylertech/forge-ai sandbox
```

Serves on **http://localhost:6017** (override with `MCP_SANDBOX_PORT`). Storybook runs on
**6016** — different port = different origin, so Same-Origin Policy isolation is real in
dev. Run this in a separate terminal alongside `pnpm storybook`.

Point a story's `sandboxUrl` at `http://localhost:6017/sandbox.html`.

## What it does

- `sandbox.html` — the proxy document. Loads first, loads `sandbox.js`.
- `sandbox.js` — the relay. Announces `ui/notifications/sandbox-proxy-ready`, receives
  the app HTML + CSP + permissions via `ui/notifications/sandbox-resource-ready`, builds
  the inner-iframe `allow` from permissions, applies the `sandbox` attribute (host may
  override), `document.write`s the app HTML into an inner iframe, and relays every
  non-`ui/notifications/sandbox-*` message bidirectionally. Self-tests that `window.top`
  is inaccessible and validates the host origin via `document.referrer`.
- `server.mjs` — sets the CSP as a real HTTP `Content-Security-Policy` response header
  on `sandbox.html`, read from the `?csp=` query param (spec-faithful, tamper-proof).
  Applies the restrictive default block when `?csp=` is absent.
