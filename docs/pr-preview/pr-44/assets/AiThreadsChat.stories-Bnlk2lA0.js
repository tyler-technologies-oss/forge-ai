import{x as i}from"./iframe-Cd3FoPNi.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-DYG0QF9X.js";import"./ai-chatbot-Bm21QzqJ.js";import"./ai-message-thread-B-PI_rwW.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-0LWEPd0l.js";import"./base-Dr6MRocc.js";import"./query-assigned-elements-BJf1uYxR.js";import"./ref-Du2r9_Ql.js";import"./class-map-DWYmLOgq.js";import"./when-CI7b_ccM.js";import"./ai-attachment-dl2Fsqpd.js";import"./ai-spinner-BmiHKjJQ.js";import"./tooltip-Cx_Eg2Iq.js";import"./overlay-rT-T_JqY.js";import"./ai-chat-header-Dn8IzPEt.js";import"./ai-icon-Ccneltho.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DsjpX5vB.js";import"./ai-dropdown-menu-CLwQmymb.js";import"./if-defined-B15whIf1.js";import"./popover-D4PZsZxW.js";import"./ai-dropdown-menu-item-DrWW4HOv.js";import"./ai-modal-rQnQxFX5.js";import"./ai-agent-info-FKYnkUmL.js";import"./ai-agent-selector-DJ84T8A_.js";import"./ai-chat-interface-DtO29Ip1.js";import"./ai-file-picker-DKY_xk-d.js";import"./ai-prompt-C0TwI6CZ.js";import"./ai-suggestions-DnyKRdw2.js";import"./ai-voice-input-B_W7sUBE.js";import"./ai-response-message-toolbar-By4YXs9b.js";import"./ai-empty-state-0vXkKspu.js";import"./ai-error-message-lTQWr5EV.js";import"./ai-response-message-BbU6fARg.js";import"./ai-thinking-indicator-N5qwDn86.js";import"./ai-user-message-D_Rkl9OD.js";import"./ai-user-message-toolbar-BxcAltIF.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${t("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${t("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${t("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot
            .adapter=${r}
            file-upload=${o.fileUpload}
            placeholder=${o.placeholder}
            @forge-ai-chatbot-connected=${t("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-disconnected=${t("forge-ai-chatbot-disconnected")}
            @forge-ai-chatbot-message-sent=${t("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${t("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${t("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${t("forge-ai-chatbot-error")}
            @forge-ai-chatbot-clear=${t("forge-ai-chatbot-clear")}
            @forge-ai-chatbot-info=${t("forge-ai-chatbot-info")}>
          </forge-ai-chatbot>
        </forge-ai-threads>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const V=["Demo"];export{e as Demo,V as __namedExportsOrder,Q as default};
