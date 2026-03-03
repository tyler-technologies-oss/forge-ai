import{x as i}from"./iframe-D-dL9PtP.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-i9OlBIDV.js";import"./ai-chatbot-DrrB0_hS.js";import"./ai-message-thread-C7t_AD0y.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CS0yiTQj.js";import"./base-C-RB2Ffl.js";import"./query-assigned-elements-C8kYp4aQ.js";import"./ref-B1dIxD7d.js";import"./class-map-CfSxY2sS.js";import"./when-CI7b_ccM.js";import"./ai-attachment-C5vjRk8N.js";import"./ai-spinner-CmbatFiH.js";import"./tooltip-DO2q2mEX.js";import"./overlay-C982Ht3L.js";import"./ai-chat-header-BkFF6SdW.js";import"./ai-icon-Cjcuz4_h.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CAqAqWPI.js";import"./ai-dropdown-menu-D4Oin7Or.js";import"./if-defined-DlSC7zVK.js";import"./popover-eR_3--h6.js";import"./ai-dropdown-menu-item-B9WFwQ11.js";import"./ai-modal-BnBjcrci.js";import"./ai-agent-info-R3tPe1ET.js";import"./ai-agent-selector-BfV0c0Ly.js";import"./ai-chat-interface-C1dJe1mE.js";import"./ai-file-picker-CHjf-SoK.js";import"./ai-prompt-DfBzS8PF.js";import"./ai-suggestions-DqYcWNdj.js";import"./ai-voice-input-BLSJS1Hf.js";import"./ai-response-message-toolbar-99fWQvuf.js";import"./ai-empty-state-DP9u_g3Q.js";import"./ai-error-message-DJ4eB4J0.js";import"./ai-response-message-DkzDi9wC.js";import"./ai-thinking-indicator-DQtv36K6.js";import"./ai-user-message-C8MA83B6.js";import"./ai-user-message-toolbar-CZTItZzQ.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
