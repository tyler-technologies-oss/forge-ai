import{j as e,M as r,T as d,C as n}from"./blocks-Cw4qwG11.js";import{useMDXComponents as i}from"./index-b0gRJ5Z4.js";import{A as c,H as l,R as h,W as a,T as x,S as p,a as j,C as m,b as u,M as g,c as f,d as w,e as b,f as v}from"./AiChatbotMcpApp.stories-De6qs-WH.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-KGJDsxB0.js";import"./ref-B3abCnr6.js";import"./class-map-CWt6gxkh.js";import"./ai-canvas-BCkIp8G7.js";import"./provide-RUGHcQ60.js";import"./consume-BHVW6YKk.js";import"./property-DNEaXqo9.js";import"./ai-message-thread-BTcXTRNc.js";import"./custom-element-UsVr97OX.js";import"./query-Dc_gICXE.js";import"./when-CI7b_ccM.js";import"./utils-DTEt2qv1.js";import"./if-defined-X1CVUfgS.js";import"./ai-response-message-toolbar-BQioRWfN.js";import"./tooltip-0t-tRitu.js";import"./overlay-QVYEApzp.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-CenIWkrz.js";import"./ai-artifact-card-DPDWk4wR.js";import"./ai-spinner-DcYtbmsx.js";import"./ai-thinking-indicator-Df_gD2P0.js";import"./ai-empty-state-CPSDaF9n.js";import"./ai-client-message-WAugr0Jk.js";import"./ai-error-message-BPKqAqxe.js";import"./query-assigned-nodes-AePoqt1W.js";import"./ai-response-message-Bzcq_NSP.js";import"./ai-user-message-UYbSdrMw.js";import"./ai-user-message-toolbar-DUF9zWNA.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chat-header-FHOIZmEu.js";import"./ai-icon-Cynh0Ul0.js";import"./utils-DIqd7FWX.js";import"./ai-gradient-container-BZKYNfxK.js";import"./ai-dropdown-menu-BtUIY3oh.js";import"./query-assigned-elements-F0ABw4lw.js";import"./ai-dropdown-menu-item-UpBUTyyW.js";import"./ai-modal-BBHZoAhX.js";import"./ai-agent-info-ekk1GiKP.js";import"./ai-agent-selector-B6wGAGr3.js";import"./ai-chatbot-DENeobx4.js";import"./ai-attachment-DKNc0rPd.js";import"./ai-chat-interface-EUQ_naCi.js";import"./ai-prompt-DUCnkW8e.js";import"./ai-conversations-panel-L8_lC1fC.js";import"./ai-edit-thread-BBlWPyoV.js";import"./ai-file-picker-BD4mYxBi.js";import"./ai-suggestions-B7RROxuV.js";import"./ai-voice-input-DYB9wZi3.js";import"./mock-adapter-M1NsMV0N.js";function o(t){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
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
`,e.jsx(n,{of:l}),`
`,e.jsx(n,{of:h}),`
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
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"StoreLocator"})})," — exercises ",e.jsx(s.code,{children:"ui/request-display-mode"}),` (the "Expand" and "Pop out"
buttons promote the widget to fullscreen or pip via the Popover API — same DOM node, no iframe
reload) and `,e.jsx(s.code,{children:"ui/open-link"}),` (the "Directions" button; the host asks the user to confirm,
then opens the link in a new tab). Also exercises `,e.jsx(s.code,{children:"ui/message"}),` — "Ask about hours" fills the prompt; once
sent, the mock adapter answers it as a natural follow-up rather than re-running the
tool call.`]}),`
`]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(n,{of:p}),`
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
`,e.jsx(n,{of:j}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(s.h2,{id:"adapter-contract",children:"Adapter contract"}),`
`,e.jsxs(s.p,{children:["An adapter backs MCP-app widgets with these optional ",e.jsx(s.code,{children:"AgentAdapter"}),` members. Every call
carries the widget's `,e.jsx(s.code,{children:"toolCallId"})," so host calls are per-widget."]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Member"}),e.jsx(s.th,{children:"Purpose"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"_emitMcpUiResource({ toolCallId, resourceUri, toolName?, serverId?, mimeType? })"})}),e.jsxs(s.td,{children:["Announce a widget. Order relative to the ",e.jsx(s.code,{children:"tool-call"})," chunk doesn't matter. Call it again after ",e.jsx(s.code,{children:"setMessages"}),"/",e.jsx(s.code,{children:"setThreadState"})," to remount widgets restored from history."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"resolveMcpAppResource({ resourceUri, toolCallId })"})}),e.jsxs(s.td,{children:["Fetch the template. Return ",e.jsx(s.code,{children:"{ html, csp, permissions, prefersBorder? }"})," with ",e.jsx(s.code,{children:"csp"}),"/",e.jsx(s.code,{children:"permissions"})," from the template's ",e.jsx(s.code,{children:"_meta.ui"})," (",e.jsx(s.code,{children:"{}"})," when empty). See below."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"callMcpTool({ name, arguments, toolCallId })"})}),e.jsxs(s.td,{children:["View ",e.jsx(s.code,{children:"tools/call"}),". Resolve tool-level errors with ",e.jsx(s.code,{children:"isError: true"}),"; reject HTTP errors (e.g. 403 for a tool without ",e.jsx(s.code,{children:'"app"'})," visibility) to return a JSON-RPC error."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"readMcpResource({ uri, toolCallId })"})}),e.jsxs(s.td,{children:["View ",e.jsx(s.code,{children:"resources/read"}),". When absent the request is rejected. ",e.jsx(s.code,{children:"serverResources"})," is not advertised."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"updateMcpModelContext({ toolCallId, content, structuredContent })"})}),e.jsxs(s.td,{children:["View ",e.jsx(s.code,{children:"ui/update-model-context"}),". Each call replaces the widget's context; debounce and hold until the run ends if the backend requires it."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"disposeMcpAppView({ toolCallId })"})}),e.jsx(s.td,{children:"Called after a widget is torn down. Drop anything held for it (e.g. a pending model context); a removed widget shouldn't steer the model."})]})]})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"permissions"}),` uses the spec shape — keys present are requested:
`,e.jsx(s.code,{children:"{ camera: {}, microphone: {}, geolocation: {}, clipboardWrite: {} }"}),"."]}),`
`,e.jsx(s.h3,{id:"resource-loading",children:"Resource loading"}),`
`,e.jsxs(s.p,{children:["From the moment ",e.jsx(s.code,{children:"mcp-ui-resource"})," arrives, the tool call carries ",e.jsx(s.code,{children:"uiResourceStatus: 'loading'"}),`
and renders as a `,e.jsx(s.code,{children:"forge-ai-mcp-app"}),` skeleton in its final position, never in the tool-call
indicator. Text that streams afterwards renders below it. When `,e.jsx(s.code,{children:"resolveMcpAppResource"}),`
settles, the same element switches in place:`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Resolves a resource"})," — ",e.jsx(s.code,{children:"uiResource"})," is stamped, the status is cleared and the widget mounts."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Resolves ",e.jsx(s.code,{children:"undefined"})]}),` (MCP apps unavailable, e.g. HTTP 422) — the status is cleared and the
call falls back to a plain tool call (tool-call indicator or its renderer).`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Throws"})," — ",e.jsx(s.code,{children:"uiResourceStatus: 'error'"}),'; the widget shows "Unable to display app".']}),`
`]}),`
`,e.jsxs(s.p,{children:["Core applies no timeout; reject from ",e.jsx(s.code,{children:"resolveMcpAppResource"}),` if a fetch should give up. When
the same `,e.jsx(s.code,{children:"toolCallId"}),` is announced again, the latest announcement wins and older resolves are
dropped. `,e.jsx(s.code,{children:"uiResource"})," and ",e.jsx(s.code,{children:"uiResourceStatus"})," are stripped from ",e.jsx(s.code,{children:"getMessages()"}),"."]}),`
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
`,e.jsxs(s.p,{children:["Widgets get ",e.jsx(s.code,{children:"ui/resource-teardown"}),` and their iframes are removed immediately (the host
doesn't wait for the ack, so Views should persist state as they go): on `,e.jsx(s.code,{children:"clearMessages"}),", ",e.jsx(s.code,{children:"startNewChat"}),", ",e.jsx(s.code,{children:"setThreadState"}),`, and when editing or resending a
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
adapter resolves with `,e.jsx(s.code,{children:"undefined"})," is answered with ",e.jsx(s.code,{children:"{}"}),". ",e.jsx(s.code,{children:"tools/call"})," and ",e.jsx(s.code,{children:"resources/read"}),`
sent before `,e.jsx(s.code,{children:"ui/notifications/initialized"})," are rejected with ",e.jsx(s.code,{children:"-32000"}),` and never reach the
adapter.`]}),`
`,e.jsx(s.h3,{id:"host-context",children:"Host context"}),`
`,e.jsxs(s.p,{children:["Every widget gets ",e.jsx(s.code,{children:"theme"}),", ",e.jsx(s.code,{children:"displayMode"}),", ",e.jsx(s.code,{children:"availableDisplayModes"}),", ",e.jsx(s.code,{children:"toolInfo"}),`
(`,e.jsx(s.code,{children:"{ id: toolCallId, tool: { name, title?, description?, inputSchema } }"}),`, from the
registered `,e.jsx(s.code,{children:"ToolDefinition"})," when there is one; otherwise ",e.jsx(s.code,{children:"inputSchema"})," is ",e.jsx(s.code,{children:"{ type: 'object' }"}),"), ",e.jsx(s.code,{children:"containerDimensions"}),`
(`,e.jsx(s.code,{children:"{ width, maxHeight: 2000 }"})," inline; fixed ",e.jsx(s.code,{children:"width"}),"/",e.jsx(s.code,{children:"height"})," in fullscreen/pip), ",e.jsx(s.code,{children:"locale"}),`,
`,e.jsx(s.code,{children:"timeZone"}),", ",e.jsx(s.code,{children:"userAgent"}),", ",e.jsx(s.code,{children:"platform: 'web'"}),", ",e.jsx(s.code,{children:"deviceCapabilities"})," (",e.jsx(s.code,{children:"touch"}),"/",e.jsx(s.code,{children:"hover"}),`) and
zero `,e.jsx(s.code,{children:"safeAreaInsets"}),". A container resize sends ",e.jsx(s.code,{children:"ui/notifications/host-context-changed"}),`
(throttled to one per frame, only after `,e.jsx(s.code,{children:"initialized"}),"). Inline heights from ",e.jsx(s.code,{children:"size-changed"}),`
are capped at 2000px.`]}),`
`,e.jsx(s.h3,{id:"theming",children:"Theming"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"styles.variables"})," carries the spec's CSS variables (",e.jsx(s.code,{children:"--color-background-primary"}),`,
`,e.jsx(s.code,{children:"--color-text-secondary"}),", ",e.jsx(s.code,{children:"--font-sans"}),", ",e.jsx(s.code,{children:"--border-radius-md"}),", ",e.jsx(s.code,{children:"--shadow-md"}),`, …) filled
from Forge tokens. The widget is cross-origin and can't read the page's custom properties,
so the host sends each token's resolved value. Token overrides in scope of the chatbot
(e.g. `,e.jsx(s.code,{children:"--forge-theme-surface"}),`) carry through. Widgets apply them with
`,e.jsx(s.code,{children:"applyHostStyleVariables"})," from ",e.jsx(s.code,{children:"@modelcontextprotocol/ext-apps"}),` and keep their own
fallbacks for anything not sent. Font loading (`,e.jsx(s.code,{children:"styles.css.fonts"}),") is not sent."]}),`
`,e.jsx(s.p,{children:"The chatbot can't detect Forge token changes on its own, so tell it when the theme changes:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Light/dark switch:"})," set ",e.jsx(s.code,{children:"mcpAppTheme"})," (",e.jsx(s.code,{children:"mcp-app-theme"}),`) from your app's theme
mechanism. Widgets get the new `,e.jsx(s.code,{children:"theme"})," and re-resolved ",e.jsx(s.code,{children:"styles.variables"}),`. When unset,
it follows `,e.jsx(s.code,{children:"prefers-color-scheme"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Other token changes"})," (e.g. a brand change): call ",e.jsx(s.code,{children:"chatbot.refreshMcpAppStyles()"}),"."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`themeService.onChange(theme => {
  chatbot.mcpAppTheme = theme;
});
`})}),`
`,e.jsx(s.h3,{id:"links",children:"Links"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ui/open-link"})," accepts ",e.jsx(s.code,{children:"http:"}),", ",e.jsx(s.code,{children:"https:"})," and ",e.jsx(s.code,{children:"mailto:"}),` URLs; anything else (e.g.
`,e.jsx(s.code,{children:"javascript:"}),", ",e.jsx(s.code,{children:"data:"}),") is refused with ",e.jsx(s.code,{children:"{ isError: true }"}),`. For an accepted URL the
cancelable `,e.jsx(s.code,{children:"forge-ai-mcp-app-open-link"}),` event fires first. If a listener calls
`,e.jsx(s.code,{children:"preventDefault()"})," it owns the link and the widget gets ",e.jsx(s.code,{children:"{}"}),`. Otherwise the user is
asked to confirm inside the widget; on confirm the URL opens in a new tab with
`,e.jsx(s.code,{children:"noopener,noreferrer"}),` (from the click, so it isn't popup-blocked) and the widget gets
`,e.jsx(s.code,{children:"{}"}),", on cancel it gets ",e.jsx(s.code,{children:"{ isError: true }"}),"."]}),`
`,e.jsx(s.h3,{id:"messages",children:"Messages"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ui/message"}),` text blocks are joined and placed in the prompt input for the user to review
and send; a widget never starts a model turn on its own. Other block types (image, audio,
resource) are dropped; a message with no text is refused with `,e.jsx(s.code,{children:"{ isError: true }"}),`.
`,e.jsx(s.code,{children:"forge-ai-mcp-app-message"})," fires first (informational)."]}),`
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
`,e.jsxs(s.p,{children:[`Promoted widgets get a host-owned close button; it and Escape return the widget inline.
Fullscreen is modal: the rest of the page is made `,e.jsx(s.code,{children:"inert"}),` while it's open. Pip stays
non-modal, so the chat behind it remains usable.`]}),`
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
via `,e.jsx(s.code,{children:'<forge-ai-chatbot mcp-app-theme="dark">'}),". With ",e.jsx(s.code,{children:"theme"})," set to ",e.jsx(s.code,{children:"light"})," or ",e.jsx(s.code,{children:"dark"}),`, that
value wins outright. With `,e.jsx(s.code,{children:"theme"})," left on ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"auto"})}),`, the widget instead tracks
`,e.jsx(s.strong,{children:"Storybook's own dark-mode toolbar icon"}),` (the sun/moon button, top toolbar) live —
toggling it flips `,e.jsx(s.code,{children:"hostContext.theme"}),` without a page reload, since both this control
and Forge's own dark theme listen to the same `,e.jsx(s.code,{children:"@vueless/storybook-dark-mode"})," ",e.jsx(s.code,{children:"DARK_MODE"}),`
channel event. Watch the console (widgets log every
`,e.jsx(s.code,{children:"ui/notifications/host-context-changed"}),` they receive) or the widget's own background
color, which flips via `,e.jsx(s.code,{children:"body[data-theme]"})," in all three feature demos."]}),`
`]})]})}function ye(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(o,{...t})}):o(t)}export{ye as default};
