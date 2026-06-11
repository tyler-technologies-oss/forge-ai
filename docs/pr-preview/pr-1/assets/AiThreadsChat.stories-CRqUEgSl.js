import{x as i}from"./iframe-Da6NaqNu.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-CV40Ty9b.js";import"./ai-chatbot-base-Cg0gSTDz.js";import"./ai-chatbot-gyK7adcQ.js";import"./ai-message-thread-De92Hu4h.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-G9N9nf4E.js";import"./base-C0KdAt92.js";import"./query-assigned-elements-fri7ZP3s.js";import"./ref-BnsvjIP3.js";import"./class-map-DpKxFYP-.js";import"./when-CI7b_ccM.js";import"./ai-attachment-PGsXrPXZ.js";import"./ai-spinner-DgtVt-VP.js";import"./tooltip-Bi3b5EjA.js";import"./overlay-CMLtwmlw.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-Dv6uN0nO.js";import"./ai-icon-xR31sFng.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BjkZekyl.js";import"./ai-dropdown-menu-BHpT9cry.js";import"./if-defined-BosPmdGc.js";import"./popover-BT7wG347.js";import"./query-assigned-nodes-mHuxuqUA.js";import"./ai-dropdown-menu-item-CA5OoPTv.js";import"./ai-modal-BBAShs47.js";import"./ai-agent-info-CFdY0ycZ.js";import"./ai-agent-selector-BfW52cpl.js";import"./ai-chat-interface-Bj372ydY.js";import"./ai-conversations-panel-D_WV5riC.js";import"./ai-file-picker-BGMwuuq1.js";import"./ai-prompt-DJMkYZCM.js";import"./ai-suggestions-CNY0qen1.js";import"./ai-voice-input-JdDOKqm0.js";import"./ai-response-message-toolbar-CBdzPVM4.js";import"./ai-empty-state-D5BlzFb0.js";import"./ai-error-message-DfNQMgy-.js";import"./ai-response-message-OHX4zqKq.js";import"./ai-thinking-indicator-AhmmqVhJ.js";import"./ai-user-message-CRCX5wIz.js";import"./ai-user-message-toolbar-CBvmmvrn.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",createdAt:new Date(Date.now()-864e5).toISOString(),messageCount:5},{id:"thread-2",title:"Data analysis question",createdAt:new Date(Date.now()-36e5).toISOString(),messageCount:12},{id:"thread-3",title:"How do I implement authentication?",createdAt:new Date().toISOString(),messageCount:3}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const tt=["Demo"];export{e as Demo,tt as __namedExportsOrder,Z as default};
