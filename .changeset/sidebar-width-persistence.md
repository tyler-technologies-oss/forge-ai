---
'@tylertech/forge-ai': minor
---

feat(sidebar): persist resized width per tab via sessionStorage with a localStorage fallback for new tabs, expose `width` property and `forge-ai-sidebar-resize` / `forge-ai-sidebar-chat-resize` events, retain width across expand/collapse

BREAKING: `resizable` on `forge-ai-sidebar` and `forge-ai-sidebar-chat` is now `'on' | 'off'` (default `'on'`) instead of a boolean, so it can be disabled via attribute. Replace `.resizable=${false}` with `resizable="off"`.
