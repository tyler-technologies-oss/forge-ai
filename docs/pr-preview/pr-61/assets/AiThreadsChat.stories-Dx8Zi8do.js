import{x as i}from"./iframe-8UuaHQOQ.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-K5uNN8yd.js";import"./ai-chatbot-base-C59GlNWU.js";import"./ai-chatbot-D2AE9CIm.js";import"./ai-message-thread-JLdg-fsE.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BxKcJA03.js";import"./base-C3-ZS_ab.js";import"./query-assigned-elements-BwNLr1MV.js";import"./ref-cqcR2cY-.js";import"./class-map-DEOlFY-y.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CFlHO6JO.js";import"./ai-spinner-DxQCKiSK.js";import"./tooltip-CWgpKB5s.js";import"./overlay-BrqjwOef.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-D8oxcor1.js";import"./ai-icon-DDAIw0wI.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-ps0lC9Kd.js";import"./ai-dropdown-menu-DlHnGGOn.js";import"./if-defined-CBrbu2BV.js";import"./popover-uF195eRC.js";import"./query-assigned-nodes-C-5LSqt-.js";import"./ai-dropdown-menu-item-CaGYTUDH.js";import"./ai-modal-BnmQyBrE.js";import"./ai-agent-info-6WHzUmTd.js";import"./ai-agent-selector-CWAzV1fC.js";import"./ai-chat-interface-DzFIaVfl.js";import"./ai-file-picker-D-J5MR-h.js";import"./ai-prompt-Bxw7_hv1.js";import"./ai-suggestions-BkWjj88e.js";import"./ai-voice-input-Bz3LV1yV.js";import"./ai-response-message-toolbar-Be7G8WZR.js";import"./ai-empty-state-CXXX3TZH.js";import"./ai-error-message-BxMqzqWj.js";import"./ai-response-message-CLkM8YRb.js";import"./ai-thinking-indicator-BjaK-w6W.js";import"./ai-user-message-CTs3CMHd.js";import"./ai-user-message-toolbar-BTD3CXxK.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["Demo"];export{e as Demo,Z as __namedExportsOrder,X as default};
