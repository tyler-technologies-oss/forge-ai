import{j as e,M as s,T as d,C as n}from"./blocks-XSgIOzBr.js";import{useMDXComponents as r}from"./index-BBhWSdBn.js";import{A as a,H as l,R as c,W as h,T as p,S as m}from"./AiChatbotMcpApp.stories-BSbn1lL7.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CT8aTrUD.js";import"./ref-kKaXfD1S.js";import"./class-map-DqaYJRwU.js";import"./property-BYN9SZug.js";import"./ai-chatbot-base-CWYaAuSG.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-CwqhL2dx.js";import"./custom-element-UsVr97OX.js";import"./when-CI7b_ccM.js";import"./markdown-CtLA8yAF.js";import"./if-defined-Ctqvb-ON.js";import"./ai-response-message-toolbar-BwlSm175.js";import"./tooltip-CW0bSAwg.js";import"./overlay-CkC9bm_E.js";import"./floating-ui.dom-alButkyJ.js";import"./popover-C31U5eWB.js";import"./ai-spinner-CbunOA-Q.js";import"./ai-thinking-indicator-1U5Ry1f2.js";import"./ai-empty-state-B8rhv3e3.js";import"./ai-error-message-D1Ga38or.js";import"./ai-response-message-CnZ_638a.js";import"./ai-user-message-CMqBaTZX.js";import"./ai-user-message-toolbar-bdzNKp7D.js";import"./mock-adapter-6zZ6n2sP.js";import"./ai-chatbot-DKovxT-G.js";import"./ai-attachment-ZtYpr-6d.js";import"./ai-chat-header-B5KievFi.js";import"./ai-icon-B_MpfO3w.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CKrFco1R.js";import"./ai-dropdown-menu-CF8QeNYI.js";import"./query-assigned-nodes-Bae88zyY.js";import"./ai-dropdown-menu-item-CISMvfun.js";import"./ai-modal-TqbNCh2K.js";import"./ai-agent-info-BrzqVyJE.js";import"./ai-agent-selector-BDdhk9WV.js";import"./ai-chat-interface-CjGxkuME.js";import"./ai-prompt-Dkiq_vL3.js";import"./ai-conversations-panel-MZL5s_XE.js";import"./ai-edit-thread-04tCXzP7.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-8c3pAnbZ.js";import"./ai-suggestions-D00Es9-w.js";import"./ai-voice-input-D704c7Ra.js";function i(o){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(d,{}),`
`,e.jsxs(t.p,{children:["Demonstrates an MCP-app widget rendered inline in ",e.jsx(t.code,{children:"forge-ai-chatbot"}),` as a sandboxed,
cross-origin iframe. Send any message to trigger the mock adapter's `,e.jsx(t.code,{children:"renderMcpApp"}),` tool
call — args stream live, then the widget mounts and receives the tool result.`]}),`
`,e.jsx(t.h2,{id:"manual-test-setup",children:"Manual test setup"}),`
`,e.jsx(t.p,{children:`The widget's sandbox requires a separate-origin proxy running locally, in a second
terminal alongside Storybook:`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`pnpm --filter=@tylertech/forge-ai sandbox   # proxy on :6017
pnpm storybook                              # Storybook on :6016
`})}),`
`,e.jsx(t.p,{children:`Different ports are different origins, so this exercises real same-origin-policy
isolation — the same as production.`}),`
`,e.jsx(t.h2,{id:"two-widget-variants",children:"Two widget variants"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"HandRolledWidget"})})," — a minimal inline ",e.jsx(t.code,{children:"<script>"})," speaking the ",e.jsx(t.code,{children:"ui/*"}),` JSON-RPC
protocol directly, no SDK. Fastest to iterate on.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"RealAppSdkWidget"})})," — imports the real ",e.jsx(t.code,{children:"@modelcontextprotocol/ext-apps"})," guest ",e.jsx(t.code,{children:"App"}),`
class (via a pre-bundled, dependency-free build) and speaks the full spec handshake.`]}),`
`]}),`
`,e.jsxs(t.p,{children:[`Both stories run against the same host-side bridge — a hand-rolled, zero-dependency
`,e.jsx(t.code,{children:"McpAppBridge"})," implementation (",e.jsx(t.code,{children:"mcp-app-bridge.ts"}),`). There's no config surface for
swapping bridge impls; the library only ships this one.`]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h2,{id:"feature-demos",children:"Feature demos"}),`
`,e.jsx(t.p,{children:`Three additional stories, each grounded in a realistic use case and each exercising a
different slice of the app-to-host surface:`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"WeatherCard"})}),` — a read-only widget. No app-initiated calls at all; it renders
purely from streamed tool args and the final `,e.jsx(t.code,{children:"structuredContent"}),` (temperature,
condition, high/low, humidity, wind). Proves a widget can be pure display with zero
interactivity.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"TripDetailsForm"})}),` — an interactive widget. The form collects destination + date
from the user and forwards them as an app-initiated `,e.jsx(t.code,{children:"tools/call"}),`
(`,e.jsx(t.code,{children:"submitTripDetails"}),", a ",e.jsx(t.code,{children:'visibility:["app"]'}),`-style tool never exposed to the model's
tool list), then renders the server's response inline. Exercises `,e.jsx(t.code,{children:"oncalltool"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"StoreLocator"})})," — exercises ",e.jsx(t.code,{children:"ui/request-display-mode"}),` (the "Expand" button
promotes the widget to fullscreen via the Popover API — same DOM node, no iframe
reload) and `,e.jsx(t.code,{children:"ui/open-link"}),` (the "Directions" button opens a host-validated link in a
new tab; the host's `,e.jsx(t.code,{children:"handleOpenLink"})," allowlists ",e.jsx(t.code,{children:"http"}),"/",e.jsx(t.code,{children:"https"}),` before calling
`,e.jsx(t.code,{children:"window.open"}),`, since the URL comes from an untrusted widget). Also exercises
`,e.jsx(t.code,{children:"ui/message"}),` — "Ask about hours" re-enters the normal chat stream with a
widget-authored user message, which the mock adapter answers as a natural follow-up
rather than re-running the tool call.`]}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"what-to-look-for",children:"What to look for"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The iframe mounts ",e.jsx(t.strong,{children:"once"})," — no flicker or remount as tool args stream in."]}),`
`,e.jsxs(t.li,{children:['Clicking "Refresh via app tool call" round-trips an app-initiated ',e.jsx(t.code,{children:"tools/call"}),` to
`,e.jsx(t.code,{children:"refreshWidgetData"})," (a ",e.jsx(t.code,{children:'visibility:["app"]'}),`-style tool: callable from the widget, but
never exposed to the model's tool list).`]}),`
`,e.jsx(t.li,{children:"Auto-resize: the iframe's height tracks the widget's content with no feedback loop."}),`
`,e.jsxs(t.li,{children:["Theme propagation: use the ",e.jsxs(t.strong,{children:[e.jsx(t.code,{children:"theme"})," control"]})," (",e.jsx(t.code,{children:"auto"})," / ",e.jsx(t.code,{children:"light"})," / ",e.jsx(t.code,{children:"dark"}),`) on any
story to feed an explicit theme into the widget's `,e.jsx(t.code,{children:"hostContext.theme"}),` — the spec
(2026-01-26) defines only `,e.jsx(t.code,{children:"'light' | 'dark'"}),", no ",e.jsx(t.code,{children:"'system'"}),"/",e.jsx(t.code,{children:"'auto'"}),`. This control
does `,e.jsx(t.strong,{children:"not"}),` change the chatbot's own appearance (that's Forge design tokens,
unrelated) — it only demonstrates the widget-facing signal a real consumer would set
via `,e.jsx(t.code,{children:'<forge-ai-chatbot theme="dark">'}),". With ",e.jsx(t.code,{children:"theme"})," set to ",e.jsx(t.code,{children:"light"})," or ",e.jsx(t.code,{children:"dark"}),`, that
value wins outright. With `,e.jsx(t.code,{children:"theme"})," left on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"auto"})}),`, the widget instead tracks
`,e.jsx(t.strong,{children:"Storybook's own dark-mode toolbar icon"}),` (the sun/moon button, top toolbar) live —
toggling it flips `,e.jsx(t.code,{children:"hostContext.theme"}),` without a page reload, since both this control
and Forge's own dark theme listen to the same `,e.jsx(t.code,{children:"@vueless/storybook-dark-mode"})," ",e.jsx(t.code,{children:"DARK_MODE"}),`
channel event. Watch the console (widgets log every
`,e.jsx(t.code,{children:"ui/notifications/host-context-changed"}),` they receive) or the widget's own background
color, which flips via `,e.jsx(t.code,{children:"body[data-theme]"})," in all three feature demos."]}),`
`]})]})}function ce(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{ce as default};
