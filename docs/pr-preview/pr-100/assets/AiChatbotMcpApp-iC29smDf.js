import{j as e,M as s,T as d,C as n}from"./blocks-K-b86g8p.js";import{useMDXComponents as r}from"./index-D2uPRfRn.js";import{A as a,H as l,R as c,W as h,T as p,S as m}from"./AiChatbotMcpApp.stories-DejhB3H4.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ByaASZAq.js";import"./ref-B25wxmZ_.js";import"./class-map-ntPvOCSg.js";import"./property-DR4X3CdD.js";import"./ai-chatbot-base-C1SC2pGM.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-DqIe38mM.js";import"./custom-element-UsVr97OX.js";import"./when-CI7b_ccM.js";import"./markdown-CtLA8yAF.js";import"./if-defined-x4iZ2Mw3.js";import"./ai-response-message-toolbar-BhfO3bjd.js";import"./tooltip-DJ_M162U.js";import"./overlay-DlSuCDEe.js";import"./floating-ui.dom-alButkyJ.js";import"./popover-CkBxFejF.js";import"./ai-spinner-CPCAC9IA.js";import"./ai-thinking-indicator-DmwwLsAS.js";import"./ai-empty-state-me-XG0w2.js";import"./ai-error-message-DUQuOp8f.js";import"./ai-response-message-zxHIY9AQ.js";import"./ai-user-message-cH4PUP_l.js";import"./ai-user-message-toolbar-CwXpzVp2.js";import"./mock-adapter-6zZ6n2sP.js";import"./ai-chatbot-B96XI2Cs.js";import"./ai-attachment-o623x0VO.js";import"./ai-chat-header-1caPUllS.js";import"./ai-icon-DHGABlSg.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CnNTGVoV.js";import"./ai-dropdown-menu-CW4X6aNf.js";import"./query-assigned-nodes-DL4sh39u.js";import"./ai-dropdown-menu-item-DZaucG6L.js";import"./ai-modal-srScDJ9e.js";import"./ai-agent-info-CkRp85ok.js";import"./ai-agent-selector-CenwOcxj.js";import"./ai-chat-interface-DD4_IQCF.js";import"./ai-prompt-Bpa8qUkV.js";import"./ai-conversations-panel-ztzF4HzN.js";import"./ai-edit-thread-C6VUlZjf.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BRD6RHBI.js";import"./ai-suggestions-BwffHetq.js";import"./ai-voice-input-Ds1NxwCe.js";function i(o){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
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
