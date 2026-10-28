import{j as e,M as r,T as d,C as t}from"./blocks-BMq_-Ydb.js";import{useMDXComponents as o}from"./index-Db33oXfe.js";import{A as l,H as c,R as h,W as a,T as x,S as j,a as p,C as u,b as m,M as g,c as f,d as w,e as b,f as y}from"./AiChatbotMcpApp.stories-tBR76H4N.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B3xO85yu.js";import"./ref-CENuII8n.js";import"./class-map-jjxocif1.js";import"./ai-chatbot-base-CReW923m.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./property-D2dUUzhA.js";import"./ai-message-thread-DNhqfRuH.js";import"./custom-element-UsVr97OX.js";import"./query-DCR03eDw.js";import"./when-CI7b_ccM.js";import"./utils-BRoM8yNS.js";import"./if-defined-BBSjWmC5.js";import"./ai-response-message-toolbar-Dn6fp7-k.js";import"./tooltip-BN7xokHm.js";import"./overlay-DGgKM79R.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-DxMFPUmL.js";import"./ai-spinner-CwmkST4L.js";import"./ai-thinking-indicator-BYQv71wk.js";import"./ai-empty-state-BgxUEWo8.js";import"./ai-client-message-Dh3E9FS3.js";import"./ai-error-message-B1GBxPJ6.js";import"./query-assigned-nodes-D6imQ5Dm.js";import"./ai-response-message-DqlZnJMh.js";import"./ai-user-message-CnUBMi1Z.js";import"./ai-user-message-toolbar-DQ8-UGFB.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-BIaRJXR0.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-D7uVJ13P.js";import"./ai-chat-header-DLif8hU0.js";import"./ai-icon-dzZni7F9.js";import"./ai-gradient-container-CpOSyVge.js";import"./ai-dropdown-menu-CmCMkh46.js";import"./query-assigned-elements-B6zK_KiS.js";import"./ai-dropdown-menu-item-Df4XBUJM.js";import"./ai-modal-NnBjKH5s.js";import"./ai-agent-info-DVjbCllq.js";import"./ai-agent-selector-DUr1_o1G.js";import"./ai-chat-interface-7b4w3LHw.js";import"./ai-prompt-DRa1YP29.js";import"./ai-conversations-panel-QNmNBGdK.js";import"./ai-edit-thread-FiNy_BDt.js";import"./ai-file-picker-y20tF4p-.js";import"./ai-suggestions-Cwx4Pk76.js";import"./ai-voice-input-Cj-SLDrh.js";import"./mock-adapter-LuDjfxfL.js";function i(n){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(d,{}),`
`,e.jsxs(s.p,{children:["Demonstrates an MCP-app widget rendered inline in ",e.jsx(s.code,{children:"forge-ai-chatbot"}),` as a sandboxed,
cross-origin iframe. Send any message to trigger the mock adapter's `,e.jsx(s.code,{children:"renderMcpApp"}),` tool
call — args stream live, then the widget mounts and receives the tool result.`]}),`
`,e.jsxs(s.p,{children:[`The mock adapters mimic a Foundry stream: no client-side tool definition is registered
(the `,e.jsx(s.code,{children:"mcp-ui-resource"}),` event alone marks a tool call as a widget), the model-facing
`,e.jsx(s.code,{children:"result"})," is plain text, and the widget's payload travels as ",e.jsx(s.code,{children:"mcpResult"}),` +
`,e.jsx(s.code,{children:"structuredContent"}),"."]}),`
`,e.jsx(s.h2,{id:"manual-test-setup",children:"Manual test setup"}),`
`,e.jsx(s.p,{children:`The widget's sandbox requires a separate-origin proxy running locally, in a second
terminal alongside Storybook:`}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`pnpm --filter=@tylertech/forge-ai sandbox   # proxy on :6017
pnpm storybook                              # Storybook on :6016
`})}),`
`,e.jsx(s.p,{children:`Different ports are different origins, so this exercises real same-origin-policy
isolation — the same as production.`}),`
`,e.jsx(s.h2,{id:"two-widget-variants",children:"Two widget variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"HandRolledWidget"})})," — a minimal inline ",e.jsx(s.code,{children:"<script>"})," speaking the ",e.jsx(s.code,{children:"ui/*"}),` JSON-RPC
protocol directly, no SDK. Fastest to iterate on.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"RealAppSdkWidget"})})," — imports the real ",e.jsx(s.code,{children:"@modelcontextprotocol/ext-apps"})," guest ",e.jsx(s.code,{children:"App"}),`
class (via a pre-bundled, dependency-free build) and speaks the full spec handshake.`]}),`
`]}),`
`,e.jsxs(s.p,{children:[`Both stories run against the same host-side bridge — a hand-rolled, zero-dependency
`,e.jsx(s.code,{children:"McpAppBridge"})," implementation (",e.jsx(s.code,{children:"mcp-app-bridge.ts"}),`). There's no config surface for
swapping bridge impls; the library only ships this one.`]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(s.h2,{id:"feature-demos",children:"Feature demos"}),`
`,e.jsx(s.p,{children:`Three additional stories, each grounded in a realistic use case and each exercising a
different slice of the app-to-host surface:`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"WeatherCard"})}),` — a read-only widget. No app-initiated calls at all; it renders
purely from streamed tool args and the final `,e.jsx(s.code,{children:"structuredContent"}),` (temperature,
condition, high/low, humidity, wind). Proves a widget can be pure display with zero
interactivity.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"TripDetailsForm"})}),` — an interactive widget. The form collects destination + date
from the user and forwards them as an app-initiated `,e.jsx(s.code,{children:"tools/call"}),`
(`,e.jsx(s.code,{children:"submitTripDetails"}),", a ",e.jsx(s.code,{children:'visibility:["app"]'}),`-style tool never exposed to the model's
tool list), then renders the server's response inline. Exercises `,e.jsx(s.code,{children:"oncalltool"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"StoreLocator"})})," — exercises ",e.jsx(s.code,{children:"ui/request-display-mode"}),` (the "Expand" button
promotes the widget to fullscreen via the Popover API — same DOM node, no iframe
reload) and `,e.jsx(s.code,{children:"ui/open-link"}),` (the "Directions" button; the host opens the link in a new
tab by default). Also exercises `,e.jsx(s.code,{children:"ui/message"}),` — "Ask about hours" is posted into the
chat as a user message, which the mock adapter answers as a natural follow-up rather
than re-running the tool call.`]}),`
`]}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(s.h2,{id:"lifecycle-scenarios",children:"Lifecycle scenarios"}),`
`,e.jsxs(s.p,{children:[`Each story below drives the mock adapter through one part of the widget lifecycle. Use the
`,e.jsx(s.code,{children:"widgetVariant"}),` control to run it against the hand-rolled or the real SDK widget, and watch
the console and the Actions panel (`,e.jsx(s.code,{children:"[mcp-app-mock] host: ..."})," logs show the ",e.jsx(s.code,{children:"toolCallId"}),`
the host passes on every call).`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"ToolErrorResult"})})," — ",e.jsx(s.code,{children:"tool-result"})," with ",e.jsx(s.code,{children:"isError"}),`. The widget still receives the
result (`,e.jsx(s.code,{children:"isError: true"}),", error ",e.jsx(s.code,{children:"content"})," and ",e.jsx(s.code,{children:"_meta"}),") rather than being left waiting."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"CancelledByAdapter"})})," — ",e.jsx(s.code,{children:"tool-result"})," with ",e.jsx(s.code,{children:"cancelled: true"}),` (team-stream style). The
widget receives `,e.jsx(s.code,{children:"ui/notifications/tool-cancelled"})," instead of a result."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"CancelledNoResult"})})," — the run finishes with no ",e.jsx(s.code,{children:"tool-result"}),` (agent-stream style).
The unsettled tool call is marked `,e.jsx(s.code,{children:"cancelled"})," and the widget gets ",e.jsx(s.code,{children:"tool-cancelled"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"HandRolledWidget"})})," / ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"RealAppSdkWidget"})}),` — once the result arrives the widget
also has "Open link" (opens `,e.jsx(s.code,{children:"https://example.com/"}),` in a new tab), "Open javascript:
link" (refused with `,e.jsx(s.code,{children:"{ isError: true }"}),`), "Send message" (posted into the chat as a user
message; `,e.jsx(s.code,{children:"{ isError: true }"}),` while a response is streaming), "Unknown method" (a raw
`,e.jsx(s.code,{children:"tools/list"})," that gets JSON-RPC ",e.jsx(s.code,{children:"-32601"}),`) and "Request teardown" buttons. The widget
shows each response.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"ModelContext"})}),' — click "Update model context" in the widget. ',e.jsx(s.code,{children:"ui/update-model-context"}),`
carries `,e.jsx(s.code,{children:"content"})," and ",e.jsx(s.code,{children:"structuredContent"}),`; the host logs both with the widget's
`,e.jsx(s.code,{children:"toolCallId"})," from ",e.jsx(s.code,{children:"updateMcpModelContext"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"ToolCallBeforeResource"})})," / ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"ResourceBeforeToolCall"})}),` — the two valid stream
orders of the `,e.jsx(s.code,{children:"tool-call"})," chunk and the ",e.jsx(s.code,{children:"mcp-ui-resource"}),` event. Both end with the
widget mounted and the result delivered.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"MultipleWidgets"})}),` — three widgets in one thread (the last one errors). Each
"Refresh via app tool call" echoes its own `,e.jsx(s.code,{children:"toolCallId"}),` and label, proving per-widget
isolation.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"RestoredHistory"})})," — ",e.jsx(s.code,{children:"setMessages"}),` with finalized tool calls (no resource), then one
`,e.jsx(s.code,{children:"_emitMcpUiResource"}),` per widget. Each is resolved again and remounted with its stored
`,e.jsx(s.code,{children:"mcpResult"})," + ",e.jsx(s.code,{children:"structuredContent"}),"."]}),`
`]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(s.h2,{id:"adapter-contract",children:"Adapter contract"}),`
`,e.jsxs(s.p,{children:["An adapter backs MCP-app widgets with these optional ",e.jsx(s.code,{children:"AgentAdapter"}),` members. Every call
carries the widget's `,e.jsx(s.code,{children:"toolCallId"})," so host calls are per-widget."]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Member"}),e.jsx(s.th,{children:"Purpose"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"_emitMcpUiResource({ toolCallId, resourceUri, toolName?, serverId?, mimeType? })"})}),e.jsxs(s.td,{children:["Announce a widget. Order relative to the ",e.jsx(s.code,{children:"tool-call"})," chunk doesn't matter. Call it again after ",e.jsx(s.code,{children:"setMessages"}),"/",e.jsx(s.code,{children:"setThreadState"})," to remount widgets restored from history."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"resolveMcpAppResource({ resourceUri, toolCallId })"})}),e.jsxs(s.td,{children:["Fetch the template. Return ",e.jsx(s.code,{children:"{ html, csp, permissions, prefersBorder? }"})," with ",e.jsx(s.code,{children:"csp"}),"/",e.jsx(s.code,{children:"permissions"})," from the template's ",e.jsx(s.code,{children:"_meta.ui"})," (",e.jsx(s.code,{children:"{}"})," when empty)."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"callMcpTool({ name, arguments, toolCallId })"})}),e.jsxs(s.td,{children:["View ",e.jsx(s.code,{children:"tools/call"}),". Resolve tool-level errors with ",e.jsx(s.code,{children:"isError: true"}),"; reject HTTP errors (e.g. 403 for a tool without ",e.jsx(s.code,{children:'"app"'})," visibility) to return a JSON-RPC error."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"readMcpResource({ uri, toolCallId })"})}),e.jsxs(s.td,{children:["View ",e.jsx(s.code,{children:"resources/read"}),". When absent the request is rejected. ",e.jsx(s.code,{children:"serverResources"})," is not advertised."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"updateMcpModelContext({ toolCallId, content, structuredContent })"})}),e.jsxs(s.td,{children:["View ",e.jsx(s.code,{children:"ui/update-model-context"}),". Each call replaces the widget's context; debounce and hold until the run ends if the backend requires it."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"disposeMcpAppView({ toolCallId })"})}),e.jsx(s.td,{children:"Called after a widget is torn down. Drop anything held for it (e.g. a pending model context); a removed widget shouldn't steer the model."})]})]})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"permissions"}),` uses the spec shape — keys present are requested:
`,e.jsx(s.code,{children:"{ camera: {}, microphone: {}, geolocation: {}, clipboardWrite: {} }"}),"."]}),`
`,e.jsx(s.h3,{id:"tool-results",children:"Tool results"}),`
`,e.jsxs(s.p,{children:["Emit the tool result with ",e.jsx(s.code,{children:"_emitToolResult"})," and the extra MCP fields:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"result"})," — model-facing text. ",e.jsx(s.strong,{children:"Never"})," sent to the widget."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"mcpResult: { content, isError?, _meta? }"})," and ",e.jsx(s.code,{children:"structuredContent"}),` — the widget's
`,e.jsx(s.code,{children:"ui/notifications/tool-result"})," is built as ",e.jsx(s.code,{children:"{ content, structuredContent, isError, _meta }"}),`
from these.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"mcpResultOmitted"})," / ",e.jsx(s.code,{children:"structuredContentOmitted"}),` — the field was dropped for size. The
widget gets whatever remains (`,e.jsx(s.code,{children:"content: []"})," when ",e.jsx(s.code,{children:"mcpResult"}),` is omitted); if both are
missing it still gets `,e.jsx(s.code,{children:"{ content: [] }"})," (with ",e.jsx(s.code,{children:"isError: true"}),` for an errored call) so it
isn't left waiting.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isError: true"})," — status ",e.jsx(s.code,{children:"error"}),"; the result is still delivered to the widget."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"cancelled: true"})," — status ",e.jsx(s.code,{children:"cancelled"}),"; the widget gets ",e.jsx(s.code,{children:"ui/notifications/tool-cancelled"}),`
instead of a result.`]}),`
`]}),`
`,e.jsxs(s.p,{children:[`A widget tool call only settles through a tool result. If the run finishes, is aborted,
or errors before one arrives, the tool call is marked `,e.jsx(s.code,{children:"cancelled"}),` and the widget is sent
`,e.jsx(s.code,{children:"tool-cancelled"}),`. A run that finishes while a client-tool handler is still executing isn't
over: the handler's result starts a continuation run, and unsettled widgets stay open until
that continuation finishes. Aborts and errors cancel immediately. Nothing is sent to a widget
before it sends `,e.jsx(s.code,{children:"ui/notifications/initialized"}),"."]}),`
`,e.jsx(s.h3,{id:"teardown",children:"Teardown"}),`
`,e.jsxs(s.p,{children:["Widgets get ",e.jsx(s.code,{children:"ui/resource-teardown"}),` (and a bounded wait for the ack) before their iframes are
removed: on `,e.jsx(s.code,{children:"clearMessages"}),", ",e.jsx(s.code,{children:"startNewChat"}),", ",e.jsx(s.code,{children:"setThreadState"}),`, and when editing or resending a
message removes the turns that rendered them. Only the removed turns' widgets are torn down;
the adapter's `,e.jsx(s.code,{children:"disposeMcpAppView"})," is called for each."]}),`
`,e.jsx(s.h3,{id:"host-capabilities",children:"Host capabilities"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"ui/initialize"})," result advertises only what is actually implemented:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Always: ",e.jsx(s.code,{children:"openLinks"}),", ",e.jsx(s.code,{children:"logging"}),", ",e.jsx(s.code,{children:"message: { text: {} }"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"serverTools"})," — only when the adapter implements ",e.jsx(s.code,{children:"callMcpTool"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"updateModelContext: { text: {}, structuredContent: {} }"}),` — only when the adapter
implements `,e.jsx(s.code,{children:"updateMcpModelContext"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"sandbox"})," — the widget's enforced ",e.jsx(s.code,{children:"csp"}),"/",e.jsx(s.code,{children:"permissions"}),"."]}),`
`,e.jsxs(s.li,{children:["Never: ",e.jsx(s.code,{children:"serverResources"}),", ",e.jsx(s.code,{children:"downloadFile"}),", ",e.jsx(s.code,{children:"sampling"}),"."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Requests for unsupported methods (",e.jsx(s.code,{children:"tools/list"}),", ",e.jsx(s.code,{children:"resources/list"}),", ",e.jsx(s.code,{children:"prompts/list"}),`,
`,e.jsx(s.code,{children:"sampling/createMessage"}),", ",e.jsx(s.code,{children:"ui/download-file"}),", …) get JSON-RPC ",e.jsx(s.code,{children:"-32601"}),` (method not
found); malformed params get `,e.jsx(s.code,{children:"-32602"}),"; adapter rejections get ",e.jsx(s.code,{children:"-32000"}),`. A request the
adapter resolves with `,e.jsx(s.code,{children:"undefined"})," is answered with ",e.jsx(s.code,{children:"{}"}),"."]}),`
`,e.jsx(s.h3,{id:"host-context",children:"Host context"}),`
`,e.jsxs(s.p,{children:["Every widget gets ",e.jsx(s.code,{children:"theme"}),", ",e.jsx(s.code,{children:"displayMode"}),", ",e.jsx(s.code,{children:"availableDisplayModes"}),", ",e.jsx(s.code,{children:"toolInfo"}),`
(`,e.jsx(s.code,{children:"{ id: toolCallId, tool: { name, inputSchema } }"}),"), ",e.jsx(s.code,{children:"containerDimensions"}),`
(`,e.jsx(s.code,{children:"{ width, maxHeight: 2000 }"})," inline; fixed ",e.jsx(s.code,{children:"width"}),"/",e.jsx(s.code,{children:"height"})," in fullscreen/pip), ",e.jsx(s.code,{children:"locale"}),`,
`,e.jsx(s.code,{children:"timeZone"}),", ",e.jsx(s.code,{children:"userAgent"}),", ",e.jsx(s.code,{children:"platform: 'web'"}),", ",e.jsx(s.code,{children:"deviceCapabilities"})," (",e.jsx(s.code,{children:"touch"}),"/",e.jsx(s.code,{children:"hover"}),`) and
zero `,e.jsx(s.code,{children:"safeAreaInsets"}),". A container resize sends ",e.jsx(s.code,{children:"ui/notifications/host-context-changed"}),`
(throttled to one per frame, only after `,e.jsx(s.code,{children:"initialized"}),"). ",e.jsx(s.code,{children:"styles"}),` (CSS variables/fonts) is
not sent. Inline heights from `,e.jsx(s.code,{children:"size-changed"})," are capped at 2000px."]}),`
`,e.jsx(s.h3,{id:"links",children:"Links"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ui/open-link"})," accepts ",e.jsx(s.code,{children:"http:"}),", ",e.jsx(s.code,{children:"https:"})," and ",e.jsx(s.code,{children:"mailto:"}),` URLs; anything else (e.g.
`,e.jsx(s.code,{children:"javascript:"}),", ",e.jsx(s.code,{children:"data:"}),") is refused with ",e.jsx(s.code,{children:"{ isError: true }"}),`. For an accepted URL the
cancelable `,e.jsx(s.code,{children:"forge-ai-mcp-app-open-link"}),` event fires first; unless a listener calls
`,e.jsx(s.code,{children:"preventDefault()"})," the host opens the URL in a new tab with ",e.jsx(s.code,{children:"noopener,noreferrer"}),`. The
widget gets `,e.jsx(s.code,{children:"{}"})," either way."]}),`
`,e.jsx(s.h3,{id:"messages",children:"Messages"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ui/message"}),` text blocks are joined and posted into the chat as a user message through
`,e.jsx(s.code,{children:"sendMessage"}),` — the same path as the prompt — so they show up in the thread and start a
model turn. Other block types (image, audio, resource) are dropped; a message with no text
is refused with `,e.jsx(s.code,{children:"{ isError: true }"}),`. Messages are not queued: while a response is
streaming, an upload is pending or no adapter is set, the widget gets `,e.jsx(s.code,{children:"{ isError: true }"}),`
and can retry. `,e.jsx(s.code,{children:"forge-ai-mcp-app-message"})," fires first (informational)."]}),`
`,e.jsx(s.h3,{id:"teardown-requests",children:"Teardown requests"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ui/notifications/request-teardown"}),` fires the cancelable
`,e.jsx(s.code,{children:"forge-ai-mcp-app-request-teardown"})," event (",e.jsx(s.code,{children:"{ toolCallId }"}),`). Unless a listener calls
`,e.jsx(s.code,{children:"preventDefault()"}),`, the widget goes through the normal per-widget teardown
(`,e.jsx(s.code,{children:"ui/resource-teardown"}),", then ",e.jsx(s.code,{children:"disposeMcpAppView"}),`) and its iframe is removed. The tool call
and the rest of the turn stay in the thread; the widget is not remounted.`]}),`
`,e.jsx(s.h3,{id:"logging",children:"Logging"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"notifications/message"})," fires the cancelable ",e.jsx(s.code,{children:"forge-ai-mcp-app-logging-message"}),` event;
unless a listener calls `,e.jsx(s.code,{children:"preventDefault()"}),` it is written to the console at the matching
level.`]}),`
`,e.jsx(s.h3,{id:"events",children:"Events"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"forge-ai-mcp-app-update-model-context"}),` bubbles from the widget with
`,e.jsx(s.code,{children:"{ toolCallId, content, structuredContent }"})," (same payload as ",e.jsx(s.code,{children:"updateMcpModelContext"}),")."]}),`
`,e.jsx(s.h3,{id:"display-modes",children:"Display modes"}),`
`,e.jsxs(s.p,{children:["The host offers ",e.jsx(s.code,{children:"inline"}),", ",e.jsx(s.code,{children:"fullscreen"})," and ",e.jsx(s.code,{children:"pip"}),`. A widget is switched only to a mode it
declared in `,e.jsx(s.code,{children:"ui/initialize"})," (",e.jsx(s.code,{children:"appCapabilities.availableDisplayModes"}),`); otherwise the
current mode is returned unchanged.`]}),`
`,e.jsx(s.h2,{id:"what-to-look-for",children:"What to look for"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The iframe mounts ",e.jsx(s.strong,{children:"once"})," — no flicker or remount as tool args stream in."]}),`
`,e.jsxs(s.li,{children:['Clicking "Refresh via app tool call" round-trips an app-initiated ',e.jsx(s.code,{children:"tools/call"}),` to
`,e.jsx(s.code,{children:"refreshWidgetData"})," (a ",e.jsx(s.code,{children:'visibility:["app"]'}),`-style tool: callable from the widget, but
never exposed to the model's tool list).`]}),`
`,e.jsx(s.li,{children:"Auto-resize: the iframe's height tracks the widget's content with no feedback loop."}),`
`,e.jsxs(s.li,{children:["Theme propagation: use the ",e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"theme"})," control"]})," (",e.jsx(s.code,{children:"auto"})," / ",e.jsx(s.code,{children:"light"})," / ",e.jsx(s.code,{children:"dark"}),`) on any
story to feed an explicit theme into the widget's `,e.jsx(s.code,{children:"hostContext.theme"}),` — the spec
(2026-01-26) defines only `,e.jsx(s.code,{children:"'light' | 'dark'"}),", no ",e.jsx(s.code,{children:"'system'"}),"/",e.jsx(s.code,{children:"'auto'"}),`. This control
does `,e.jsx(s.strong,{children:"not"}),` change the chatbot's own appearance (that's Forge design tokens,
unrelated) — it only demonstrates the widget-facing signal a real consumer would set
via `,e.jsx(s.code,{children:'<forge-ai-chatbot theme="dark">'}),". With ",e.jsx(s.code,{children:"theme"})," set to ",e.jsx(s.code,{children:"light"})," or ",e.jsx(s.code,{children:"dark"}),`, that
value wins outright. With `,e.jsx(s.code,{children:"theme"})," left on ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"auto"})}),`, the widget instead tracks
`,e.jsx(s.strong,{children:"Storybook's own dark-mode toolbar icon"}),` (the sun/moon button, top toolbar) live —
toggling it flips `,e.jsx(s.code,{children:"hostContext.theme"}),` without a page reload, since both this control
and Forge's own dark theme listen to the same `,e.jsx(s.code,{children:"@vueless/storybook-dark-mode"})," ",e.jsx(s.code,{children:"DARK_MODE"}),`
channel event. Watch the console (widgets log every
`,e.jsx(s.code,{children:"ui/notifications/host-context-changed"}),` they receive) or the widget's own background
color, which flips via `,e.jsx(s.code,{children:"body[data-theme]"})," in all three feature demos."]}),`
`]})]})}function ye(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{ye as default};
