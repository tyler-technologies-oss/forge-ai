import{x as i}from"./iframe-b0QhNVr8.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-Bhb9uUEI.js";import"./ai-chatbot-base-C_3dNBbW.js";import"./ai-chatbot-C9cQGzwJ.js";import"./ai-message-thread-zMPEeMt9.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DXDoedCY.js";import"./base-D1yMNR7I.js";import"./query-assigned-elements-DY3oLtpy.js";import"./ref-BVN12uZp.js";import"./class-map-ddQoDWxa.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DU4rRbwv.js";import"./ai-spinner-CXBIleG6.js";import"./tooltip-BDC_8lyX.js";import"./overlay-SoS0i7xb.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-Bh2-wRS1.js";import"./ai-icon-plrVPH71.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CTlqhO-W.js";import"./ai-dropdown-menu-ODJ4F6os.js";import"./if-defined-IDNBKJ-m.js";import"./popover-BBxHy1hJ.js";import"./query-assigned-nodes-BR_VOxb3.js";import"./ai-dropdown-menu-item-B-EGDOJx.js";import"./ai-modal-703_CxOu.js";import"./ai-agent-info-DWiLU547.js";import"./ai-agent-selector-uICRsk41.js";import"./ai-chat-interface-BjMb4zQ7.js";import"./ai-file-picker-CGL0XnDd.js";import"./ai-prompt-DL5fCa-X.js";import"./ai-suggestions-B50lZaXe.js";import"./ai-voice-input-DDThFnP0.js";import"./ai-response-message-toolbar-D25ppjjb.js";import"./ai-empty-state-DLrO7ofV.js";import"./ai-error-message-XuiTxRMv.js";import"./ai-response-message-CIZOx1hO.js";import"./ai-thinking-indicator-RpXQO1JK.js";import"./ai-user-message-CHBK4MxE.js";import"./ai-user-message-toolbar-xphMFfC7.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
