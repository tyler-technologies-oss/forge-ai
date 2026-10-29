import{j as e,M as r,T as d,C as t}from"./blocks-DL48Wthz.js";import{useMDXComponents as i}from"./index-QXfpNc2a.js";import{A as l,H as c,R as h,W as a,T as x,S as p,a as j,C as m,b as u,M as g,c as f,d as w,e as b,f as y}from"./AiChatbotMcpApp.stories-B8V9N9-E.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DEcNNnXJ.js";import"./ref-C279TtBj.js";import"./class-map-BeSwq50g.js";import"./ai-chatbot-base-ClCOmQuL.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./property-kyPe6sCU.js";import"./ai-message-thread-CVB0JWwg.js";import"./custom-element-UsVr97OX.js";import"./query-9TxMBkJB.js";import"./when-CI7b_ccM.js";import"./utils-BRoM8yNS.js";import"./if-defined-DzeJCBd6.js";import"./ai-response-message-toolbar-Cqsj9loB.js";import"./tooltip-BLyoi8k-.js";import"./overlay-CR0j_AGH.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-CzpxPole.js";import"./ai-spinner-BKmKk2t_.js";import"./ai-thinking-indicator-C4R-43xw.js";import"./ai-empty-state-DEIO1xCB.js";import"./ai-client-message-Ct5nn5EI.js";import"./ai-error-message-DUskqYlc.js";import"./query-assigned-nodes-B5tHLvsz.js";import"./ai-response-message-8jfA_nvf.js";import"./ai-user-message-BztNxitL.js";import"./ai-user-message-toolbar-BcLesbuC.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-Ds1bTI_d.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-BBk0kxXU.js";import"./ai-chat-header-BLvMq46H.js";import"./ai-icon-BspMNLtd.js";import"./ai-gradient-container-CAmK_cVH.js";import"./ai-dropdown-menu-DZ-UPflM.js";import"./query-assigned-elements-BEBxHFen.js";import"./ai-dropdown-menu-item-C2nO9by0.js";import"./ai-modal-Df7Vrhbb.js";import"./ai-agent-info-Bj9slowf.js";import"./ai-agent-selector-BcXerDCA.js";import"./ai-chat-interface-Di7o-dwK.js";import"./ai-prompt-9-A6ys6h.js";import"./ai-conversations-panel-CwZu-YvJ.js";import"./ai-edit-thread-bdO5OXTJ.js";import"./ai-file-picker-gx2jRvHe.js";import"./ai-suggestions-2enq6qc8.js";import"./ai-voice-input-CUxIgJ-Z.js";import"./mock-adapter-LuDjfxfL.js";function o(s){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(d,{}),`
`,e.jsxs(n.p,{children:["Demonstrates an MCP-app widget rendered inline in ",e.jsx(n.code,{children:"forge-ai-chatbot"}),` as a sandboxed,
cross-origin iframe. Send any message to trigger the mock adapter's `,e.jsx(n.code,{children:"renderMcpApp"}),` tool
call — args stream live, then the widget mounts and receives the tool result.`]}),`
`,e.jsxs(n.p,{children:[`The mock adapters mimic a Foundry stream: no client-side tool definition is registered
(the `,e.jsx(n.code,{children:"mcp-ui-resource"}),` event alone marks a tool call as a widget), the model-facing
`,e.jsx(n.code,{children:"result"})," is plain text, and the widget's payload travels as ",e.jsx(n.code,{children:"mcpResult"}),` +
`,e.jsx(n.code,{children:"structuredContent"}),"."]}),`
`,e.jsx(n.h2,{id:"manual-test-setup",children:"Manual test setup"}),`
`,e.jsx(n.p,{children:`The widget's sandbox requires a separate-origin proxy running locally, in a second
terminal alongside Storybook:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm --filter=@tylertech/forge-ai sandbox   # proxy on :6017
pnpm storybook                              # Storybook on :6016
`})}),`
`,e.jsx(n.p,{children:`Different ports are different origins, so this exercises real same-origin-policy
isolation — the same as production.`}),`
`,e.jsx(n.h2,{id:"two-widget-variants",children:"Two widget variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"HandRolledWidget"})})," — a minimal inline ",e.jsx(n.code,{children:"<script>"})," speaking the ",e.jsx(n.code,{children:"ui/*"}),` JSON-RPC
protocol directly, no SDK. Fastest to iterate on.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"RealAppSdkWidget"})})," — imports the real ",e.jsx(n.code,{children:"@modelcontextprotocol/ext-apps"})," guest ",e.jsx(n.code,{children:"App"}),`
class (via a pre-bundled, dependency-free build) and speaks the full spec handshake.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Both stories run against the same host-side bridge — a hand-rolled, zero-dependency
`,e.jsx(n.code,{children:"McpAppBridge"})," implementation (",e.jsx(n.code,{children:"mcp-app-bridge.ts"}),`). There's no config surface for
swapping bridge impls; the library only ships this one.`]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h2,{id:"feature-demos",children:"Feature demos"}),`
`,e.jsx(n.p,{children:`Three additional stories, each grounded in a realistic use case and each exercising a
different slice of the app-to-host surface:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"WeatherCard"})}),` — a read-only widget. No app-initiated calls at all; it renders
purely from streamed tool args and the final `,e.jsx(n.code,{children:"structuredContent"}),` (temperature,
condition, high/low, humidity, wind). Proves a widget can be pure display with zero
interactivity.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"TripDetailsForm"})}),` — an interactive widget. The form collects destination + date
from the user and forwards them as an app-initiated `,e.jsx(n.code,{children:"tools/call"}),`
(`,e.jsx(n.code,{children:"submitTripDetails"}),", a ",e.jsx(n.code,{children:'visibility:["app"]'}),`-style tool never exposed to the model's
tool list), then renders the server's response inline. Exercises `,e.jsx(n.code,{children:"oncalltool"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"StoreLocator"})})," — exercises ",e.jsx(n.code,{children:"ui/request-display-mode"}),` (the "Expand" and "Pop out"
buttons promote the widget to fullscreen or pip via the Popover API — same DOM node, no iframe
reload) and `,e.jsx(n.code,{children:"ui/open-link"}),` (the "Directions" button; the host asks the user to confirm,
then opens the link in a new tab). Also exercises `,e.jsx(n.code,{children:"ui/message"}),` — "Ask about hours" fills the prompt; once
sent, the mock adapter answers it as a natural follow-up rather than re-running the
tool call.`]}),`
`]}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"lifecycle-scenarios",children:"Lifecycle scenarios"}),`
`,e.jsxs(n.p,{children:[`Each story below drives the mock adapter through one part of the widget lifecycle. Use the
`,e.jsx(n.code,{children:"widgetVariant"}),` control to run it against the hand-rolled or the real SDK widget, and watch
the console and the Actions panel (`,e.jsx(n.code,{children:"[mcp-app-mock] host: ..."})," logs show the ",e.jsx(n.code,{children:"toolCallId"}),`
the host passes on every call).`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ToolErrorResult"})})," — ",e.jsx(n.code,{children:"tool-result"})," with ",e.jsx(n.code,{children:"isError"}),`. The widget still receives the
result (`,e.jsx(n.code,{children:"isError: true"}),", error ",e.jsx(n.code,{children:"content"})," and ",e.jsx(n.code,{children:"_meta"}),") rather than being left waiting."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"CancelledByAdapter"})})," — ",e.jsx(n.code,{children:"tool-result"})," with ",e.jsx(n.code,{children:"cancelled: true"}),` (team-stream style). The
widget receives `,e.jsx(n.code,{children:"ui/notifications/tool-cancelled"})," instead of a result."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"CancelledNoResult"})})," — the run finishes with no ",e.jsx(n.code,{children:"tool-result"}),` (agent-stream style).
The unsettled tool call is marked `,e.jsx(n.code,{children:"cancelled"})," and the widget gets ",e.jsx(n.code,{children:"tool-cancelled"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"HandRolledWidget"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"RealAppSdkWidget"})}),` — once the result arrives the widget
also has "Open link" (opens `,e.jsx(n.code,{children:"https://example.com/"}),` in a new tab), "Open javascript:
link" (refused with `,e.jsx(n.code,{children:"{ isError: true }"}),`), "Send message" (posted into the chat as a user
message; `,e.jsx(n.code,{children:"{ isError: true }"}),` while a response is streaming), "Unknown method" (a raw
`,e.jsx(n.code,{children:"tools/list"})," that gets JSON-RPC ",e.jsx(n.code,{children:"-32601"}),`) and "Request teardown" buttons. The widget
shows each response.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ModelContext"})}),' — click "Update model context" in the widget. ',e.jsx(n.code,{children:"ui/update-model-context"}),`
carries `,e.jsx(n.code,{children:"content"})," and ",e.jsx(n.code,{children:"structuredContent"}),`; the host logs both with the widget's
`,e.jsx(n.code,{children:"toolCallId"})," from ",e.jsx(n.code,{children:"updateMcpModelContext"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ToolCallBeforeResource"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ResourceBeforeToolCall"})}),` — the two valid stream
orders of the `,e.jsx(n.code,{children:"tool-call"})," chunk and the ",e.jsx(n.code,{children:"mcp-ui-resource"}),` event. Both end with the
widget mounted and the result delivered.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"MultipleWidgets"})}),` — three widgets in one thread (the last one errors). Each
"Refresh via app tool call" echoes its own `,e.jsx(n.code,{children:"toolCallId"}),` and label, proving per-widget
isolation.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"RestoredHistory"})})," — ",e.jsx(n.code,{children:"setMessages"}),` with finalized tool calls (no resource), then one
`,e.jsx(n.code,{children:"_emitMcpUiResource"}),` per widget. Each is resolved again and remounted with its stored
`,e.jsx(n.code,{children:"mcpResult"})," + ",e.jsx(n.code,{children:"structuredContent"}),"."]}),`
`]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(n.h2,{id:"adapter-contract",children:"Adapter contract"}),`
`,e.jsxs(n.p,{children:["An adapter backs MCP-app widgets with these optional ",e.jsx(n.code,{children:"AgentAdapter"}),` members. Every call
carries the widget's `,e.jsx(n.code,{children:"toolCallId"})," so host calls are per-widget."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Member"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"_emitMcpUiResource({ toolCallId, resourceUri, toolName?, serverId?, mimeType? })"})}),e.jsxs(n.td,{children:["Announce a widget. Order relative to the ",e.jsx(n.code,{children:"tool-call"})," chunk doesn't matter. Call it again after ",e.jsx(n.code,{children:"setMessages"}),"/",e.jsx(n.code,{children:"setThreadState"})," to remount widgets restored from history."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"resolveMcpAppResource({ resourceUri, toolCallId })"})}),e.jsxs(n.td,{children:["Fetch the template. Return ",e.jsx(n.code,{children:"{ html, csp, permissions, prefersBorder? }"})," with ",e.jsx(n.code,{children:"csp"}),"/",e.jsx(n.code,{children:"permissions"})," from the template's ",e.jsx(n.code,{children:"_meta.ui"})," (",e.jsx(n.code,{children:"{}"})," when empty)."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"callMcpTool({ name, arguments, toolCallId })"})}),e.jsxs(n.td,{children:["View ",e.jsx(n.code,{children:"tools/call"}),". Resolve tool-level errors with ",e.jsx(n.code,{children:"isError: true"}),"; reject HTTP errors (e.g. 403 for a tool without ",e.jsx(n.code,{children:'"app"'})," visibility) to return a JSON-RPC error."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"readMcpResource({ uri, toolCallId })"})}),e.jsxs(n.td,{children:["View ",e.jsx(n.code,{children:"resources/read"}),". When absent the request is rejected. ",e.jsx(n.code,{children:"serverResources"})," is not advertised."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"updateMcpModelContext({ toolCallId, content, structuredContent })"})}),e.jsxs(n.td,{children:["View ",e.jsx(n.code,{children:"ui/update-model-context"}),". Each call replaces the widget's context; debounce and hold until the run ends if the backend requires it."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"disposeMcpAppView({ toolCallId })"})}),e.jsx(n.td,{children:"Called after a widget is torn down. Drop anything held for it (e.g. a pending model context); a removed widget shouldn't steer the model."})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"permissions"}),` uses the spec shape — keys present are requested:
`,e.jsx(n.code,{children:"{ camera: {}, microphone: {}, geolocation: {}, clipboardWrite: {} }"}),"."]}),`
`,e.jsx(n.h3,{id:"tool-results",children:"Tool results"}),`
`,e.jsxs(n.p,{children:["Emit the tool result with ",e.jsx(n.code,{children:"_emitToolResult"})," and the extra MCP fields:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"result"})," — model-facing text. ",e.jsx(n.strong,{children:"Never"})," sent to the widget."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mcpResult: { content, isError?, _meta? }"})," and ",e.jsx(n.code,{children:"structuredContent"}),` — the widget's
`,e.jsx(n.code,{children:"ui/notifications/tool-result"})," is built as ",e.jsx(n.code,{children:"{ content, structuredContent, isError, _meta }"}),`
from these.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mcpResultOmitted"})," / ",e.jsx(n.code,{children:"structuredContentOmitted"}),` — the field was dropped for size. The
widget gets whatever remains (`,e.jsx(n.code,{children:"content: []"})," when ",e.jsx(n.code,{children:"mcpResult"}),` is omitted); if both are
missing it still gets `,e.jsx(n.code,{children:"{ content: [] }"})," (with ",e.jsx(n.code,{children:"isError: true"}),` for an errored call) so it
isn't left waiting.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isError: true"})," — status ",e.jsx(n.code,{children:"error"}),"; the result is still delivered to the widget."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cancelled: true"})," — status ",e.jsx(n.code,{children:"cancelled"}),"; the widget gets ",e.jsx(n.code,{children:"ui/notifications/tool-cancelled"}),`
instead of a result.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`A widget tool call only settles through a tool result. If the run finishes, is aborted,
or errors before one arrives, the tool call is marked `,e.jsx(n.code,{children:"cancelled"}),` and the widget is sent
`,e.jsx(n.code,{children:"tool-cancelled"}),`. A run that finishes while a client-tool handler is still executing isn't
over: the handler's result starts a continuation run, and unsettled widgets stay open until
that continuation finishes. Aborts and errors cancel immediately. Nothing is sent to a widget
before it sends `,e.jsx(n.code,{children:"ui/notifications/initialized"}),"."]}),`
`,e.jsx(n.h3,{id:"teardown",children:"Teardown"}),`
`,e.jsxs(n.p,{children:["Widgets get ",e.jsx(n.code,{children:"ui/resource-teardown"}),` (and a bounded wait for the ack) before their iframes are
removed: on `,e.jsx(n.code,{children:"clearMessages"}),", ",e.jsx(n.code,{children:"startNewChat"}),", ",e.jsx(n.code,{children:"setThreadState"}),`, and when editing or resending a
message removes the turns that rendered them. Only the removed turns' widgets are torn down;
the adapter's `,e.jsx(n.code,{children:"disposeMcpAppView"})," is called for each."]}),`
`,e.jsx(n.h3,{id:"host-capabilities",children:"Host capabilities"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ui/initialize"})," result advertises only what is actually implemented:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always: ",e.jsx(n.code,{children:"openLinks"}),", ",e.jsx(n.code,{children:"logging"}),", ",e.jsx(n.code,{children:"message: { text: {} }"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"serverTools"})," — only when the adapter implements ",e.jsx(n.code,{children:"callMcpTool"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"updateModelContext: { text: {}, structuredContent: {} }"}),` — only when the adapter
implements `,e.jsx(n.code,{children:"updateMcpModelContext"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sandbox"})," — the widget's enforced ",e.jsx(n.code,{children:"csp"}),"/",e.jsx(n.code,{children:"permissions"}),"."]}),`
`,e.jsxs(n.li,{children:["Never: ",e.jsx(n.code,{children:"serverResources"}),", ",e.jsx(n.code,{children:"downloadFile"}),", ",e.jsx(n.code,{children:"sampling"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Requests for unsupported methods (",e.jsx(n.code,{children:"tools/list"}),", ",e.jsx(n.code,{children:"resources/list"}),", ",e.jsx(n.code,{children:"prompts/list"}),`,
`,e.jsx(n.code,{children:"sampling/createMessage"}),", ",e.jsx(n.code,{children:"ui/download-file"}),", …) get JSON-RPC ",e.jsx(n.code,{children:"-32601"}),` (method not
found); malformed params get `,e.jsx(n.code,{children:"-32602"}),"; adapter rejections get ",e.jsx(n.code,{children:"-32000"}),`. A request the
adapter resolves with `,e.jsx(n.code,{children:"undefined"})," is answered with ",e.jsx(n.code,{children:"{}"}),"."]}),`
`,e.jsx(n.h3,{id:"host-context",children:"Host context"}),`
`,e.jsxs(n.p,{children:["Every widget gets ",e.jsx(n.code,{children:"theme"}),", ",e.jsx(n.code,{children:"displayMode"}),", ",e.jsx(n.code,{children:"availableDisplayModes"}),", ",e.jsx(n.code,{children:"toolInfo"}),`
(`,e.jsx(n.code,{children:"{ id: toolCallId, tool: { name, inputSchema } }"}),"), ",e.jsx(n.code,{children:"containerDimensions"}),`
(`,e.jsx(n.code,{children:"{ width, maxHeight: 2000 }"})," inline; fixed ",e.jsx(n.code,{children:"width"}),"/",e.jsx(n.code,{children:"height"})," in fullscreen/pip), ",e.jsx(n.code,{children:"locale"}),`,
`,e.jsx(n.code,{children:"timeZone"}),", ",e.jsx(n.code,{children:"userAgent"}),", ",e.jsx(n.code,{children:"platform: 'web'"}),", ",e.jsx(n.code,{children:"deviceCapabilities"})," (",e.jsx(n.code,{children:"touch"}),"/",e.jsx(n.code,{children:"hover"}),`) and
zero `,e.jsx(n.code,{children:"safeAreaInsets"}),". A container resize sends ",e.jsx(n.code,{children:"ui/notifications/host-context-changed"}),`
(throttled to one per frame, only after `,e.jsx(n.code,{children:"initialized"}),"). Inline heights from ",e.jsx(n.code,{children:"size-changed"}),`
are capped at 2000px.`]}),`
`,e.jsx(n.h3,{id:"theming",children:"Theming"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"styles.variables"})," carries the spec's CSS variables (",e.jsx(n.code,{children:"--color-background-primary"}),`,
`,e.jsx(n.code,{children:"--color-text-secondary"}),", ",e.jsx(n.code,{children:"--font-sans"}),", ",e.jsx(n.code,{children:"--border-radius-md"}),", ",e.jsx(n.code,{children:"--shadow-md"}),`, …) filled
from Forge tokens. The widget is cross-origin and can't read the page's custom properties,
so the host sends each token's resolved value. Token overrides in scope of the chatbot
(e.g. `,e.jsx(n.code,{children:"--forge-theme-surface"}),`) carry through. Values are re-read whenever the host context
changes (e.g. `,e.jsx(n.code,{children:"mcp-app-theme"}),` or the OS theme flips). Widgets apply them with
`,e.jsx(n.code,{children:"applyHostStyleVariables"})," from ",e.jsx(n.code,{children:"@modelcontextprotocol/ext-apps"}),` and keep their own
fallbacks for anything not sent. Font loading (`,e.jsx(n.code,{children:"styles.css.fonts"}),") is not sent."]}),`
`,e.jsx(n.h3,{id:"links",children:"Links"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ui/open-link"})," accepts ",e.jsx(n.code,{children:"http:"}),", ",e.jsx(n.code,{children:"https:"})," and ",e.jsx(n.code,{children:"mailto:"}),` URLs; anything else (e.g.
`,e.jsx(n.code,{children:"javascript:"}),", ",e.jsx(n.code,{children:"data:"}),") is refused with ",e.jsx(n.code,{children:"{ isError: true }"}),`. For an accepted URL the
cancelable `,e.jsx(n.code,{children:"forge-ai-mcp-app-open-link"}),` event fires first. If a listener calls
`,e.jsx(n.code,{children:"preventDefault()"})," it owns the link and the widget gets ",e.jsx(n.code,{children:"{}"}),`. Otherwise the user is
asked to confirm inside the widget; on confirm the URL opens in a new tab with
`,e.jsx(n.code,{children:"noopener,noreferrer"}),` (from the click, so it isn't popup-blocked) and the widget gets
`,e.jsx(n.code,{children:"{}"}),", on cancel it gets ",e.jsx(n.code,{children:"{ isError: true }"}),"."]}),`
`,e.jsx(n.h3,{id:"messages",children:"Messages"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ui/message"}),` text blocks are joined and placed in the prompt input for the user to review
and send; a widget never starts a model turn on its own. Other block types (image, audio,
resource) are dropped; a message with no text is refused with `,e.jsx(n.code,{children:"{ isError: true }"}),`.
`,e.jsx(n.code,{children:"forge-ai-mcp-app-message"})," fires first (informational)."]}),`
`,e.jsx(n.h3,{id:"teardown-requests",children:"Teardown requests"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ui/notifications/request-teardown"}),` fires the cancelable
`,e.jsx(n.code,{children:"forge-ai-mcp-app-request-teardown"})," event (",e.jsx(n.code,{children:"{ toolCallId }"}),`). Unless a listener calls
`,e.jsx(n.code,{children:"preventDefault()"}),`, the widget goes through the normal per-widget teardown
(`,e.jsx(n.code,{children:"ui/resource-teardown"}),", then ",e.jsx(n.code,{children:"disposeMcpAppView"}),`) and its iframe is removed. The tool call
and the rest of the turn stay in the thread; the widget is not remounted.`]}),`
`,e.jsx(n.h3,{id:"logging",children:"Logging"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"notifications/message"})," fires the cancelable ",e.jsx(n.code,{children:"forge-ai-mcp-app-logging-message"}),` event;
unless a listener calls `,e.jsx(n.code,{children:"preventDefault()"}),` it is written to the console at the matching
level.`]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"forge-ai-mcp-app-update-model-context"}),` bubbles from the widget with
`,e.jsx(n.code,{children:"{ toolCallId, content, structuredContent }"})," (same payload as ",e.jsx(n.code,{children:"updateMcpModelContext"}),")."]}),`
`,e.jsx(n.h3,{id:"display-modes",children:"Display modes"}),`
`,e.jsxs(n.p,{children:["The host offers ",e.jsx(n.code,{children:"inline"}),", ",e.jsx(n.code,{children:"fullscreen"})," and ",e.jsx(n.code,{children:"pip"}),`. A widget is switched only to a mode it
declared in `,e.jsx(n.code,{children:"ui/initialize"})," (",e.jsx(n.code,{children:"appCapabilities.availableDisplayModes"}),`); otherwise the
current mode is returned unchanged.`]}),`
`,e.jsx(n.h2,{id:"what-to-look-for",children:"What to look for"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The iframe mounts ",e.jsx(n.strong,{children:"once"})," — no flicker or remount as tool args stream in."]}),`
`,e.jsxs(n.li,{children:['Clicking "Refresh via app tool call" round-trips an app-initiated ',e.jsx(n.code,{children:"tools/call"}),` to
`,e.jsx(n.code,{children:"refreshWidgetData"})," (a ",e.jsx(n.code,{children:'visibility:["app"]'}),`-style tool: callable from the widget, but
never exposed to the model's tool list).`]}),`
`,e.jsx(n.li,{children:"Auto-resize: the iframe's height tracks the widget's content with no feedback loop."}),`
`,e.jsxs(n.li,{children:["Theme propagation: use the ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"theme"})," control"]})," (",e.jsx(n.code,{children:"auto"})," / ",e.jsx(n.code,{children:"light"})," / ",e.jsx(n.code,{children:"dark"}),`) on any
story to feed an explicit theme into the widget's `,e.jsx(n.code,{children:"hostContext.theme"}),` — the spec
(2026-01-26) defines only `,e.jsx(n.code,{children:"'light' | 'dark'"}),", no ",e.jsx(n.code,{children:"'system'"}),"/",e.jsx(n.code,{children:"'auto'"}),`. This control
does `,e.jsx(n.strong,{children:"not"}),` change the chatbot's own appearance (that's Forge design tokens,
unrelated) — it only demonstrates the widget-facing signal a real consumer would set
via `,e.jsx(n.code,{children:'<forge-ai-chatbot mcp-app-theme="dark">'}),". With ",e.jsx(n.code,{children:"theme"})," set to ",e.jsx(n.code,{children:"light"})," or ",e.jsx(n.code,{children:"dark"}),`, that
value wins outright. With `,e.jsx(n.code,{children:"theme"})," left on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"auto"})}),`, the widget instead tracks
`,e.jsx(n.strong,{children:"Storybook's own dark-mode toolbar icon"}),` (the sun/moon button, top toolbar) live —
toggling it flips `,e.jsx(n.code,{children:"hostContext.theme"}),` without a page reload, since both this control
and Forge's own dark theme listen to the same `,e.jsx(n.code,{children:"@vueless/storybook-dark-mode"})," ",e.jsx(n.code,{children:"DARK_MODE"}),`
channel event. Watch the console (widgets log every
`,e.jsx(n.code,{children:"ui/notifications/host-context-changed"}),` they receive) or the widget's own background
color, which flips via `,e.jsx(n.code,{children:"body[data-theme]"})," in all three feature demos."]}),`
`]})]})}function ye(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{ye as default};
