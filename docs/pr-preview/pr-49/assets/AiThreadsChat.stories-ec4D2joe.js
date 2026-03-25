import{x as i}from"./iframe-B25rCiek.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-CnSXuFw4.js";import"./ai-chatbot-base-DBnJVniN.js";import"./ai-chatbot-CHByphXO.js";import"./ai-message-thread-CL6pP70a.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-D1344F-h.js";import"./base-AYZI3H7f.js";import"./query-assigned-elements-CnfXVDp2.js";import"./ref-DY3IsjLR.js";import"./class-map-DpTpkP-w.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BDQ0fpn2.js";import"./ai-spinner-DUljrZ28.js";import"./tooltip-BItLBmqE.js";import"./overlay-B8kAuYKV.js";import"./ai-chat-header-CtZgCEta.js";import"./ai-icon-Bkw4FpVY.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-gLEsfhY7.js";import"./ai-dropdown-menu-D6REszE2.js";import"./if-defined-BafAh2Oo.js";import"./popover-C7QHbcGt.js";import"./ai-dropdown-menu-item-BTeApNAl.js";import"./ai-modal-6GnNPTVc.js";import"./ai-agent-info-BizkQuJg.js";import"./ai-agent-selector-VpYO_FYU.js";import"./ai-chat-interface-4ajp9aRd.js";import"./ai-file-picker-QeNeKyYh.js";import"./ai-prompt-BYmLCnRu.js";import"./ai-suggestions-Cc7oinol.js";import"./ai-voice-input-DD6KCKwq.js";import"./ai-response-message-toolbar-D99rutDj.js";import"./ai-empty-state-BCiUmofn.js";import"./ai-error-message-ho8jaesI.js";import"./ai-response-message-wZdU17bv.js";import"./ai-thinking-indicator-BXxnAgL0.js";import"./ai-user-message-Bv5_O4Ai.js";import"./ai-user-message-toolbar-BJlAHSFi.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const W=["Demo"];export{e as Demo,W as __namedExportsOrder,V as default};
