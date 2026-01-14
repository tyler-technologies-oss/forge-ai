import{x as i}from"./iframe-DMENHs4Z.js";import{M as p}from"./mock-adapter-DPRgB_9-.js";import"./ai-threads-CmWTdIuQ.js";import"./ai-chatbot-BFYXsqDj.js";import"./ai-message-thread-D3S-Xm37.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BKE5NMYw.js";import"./state-Brcd1tri.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-Hv3zszU9.js";import"./class-map-DzMB-gXD.js";import"./when-CI7b_ccM.js";import"./ai-attachment-914cOhxr.js";import"./ai-spinner-BqE_XEUU.js";import"./tooltip-CcxggfbE.js";import"./query-BpjciUlk.js";import"./overlay-Dyb666FB.js";import"./ai-chat-header-CsRdrCH9.js";import"./ai-icon-BTqnVuCR.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BnTwaCSY.js";import"./ai-dropdown-menu-CGw3qZcF.js";import"./ai-dropdown-menu-item-_M73s_FN.js";import"./popover-BxJcY05_.js";import"./ai-modal-z-tO1iJM.js";import"./ai-agent-info-k5Warxlj.js";import"./ai-chat-interface-Da2km73S.js";import"./ai-file-picker-xsY15NQ3.js";import"./ai-prompt-NMr55OED.js";import"./ai-suggestions-B_xU38ZC.js";import"./ai-voice-input-BDk1qJXi.js";import"./ai-actions-toolbar-2yYatvdq.js";import"./ai-empty-state-BJUwv42O.js";import"./ai-error-message-UBlTw0El.js";import"./ai-response-message-DSK-_UP2.js";import"./ai-thinking-indicator-CZfJttIj.js";import"./ai-user-message-B-YX9d9d.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Q=["Demo"];export{e as Demo,Q as __namedExportsOrder,J as default};
