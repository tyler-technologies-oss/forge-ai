import{x as i}from"./iframe-DZPj7ddu.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-CYg-wdc5.js";import"./ai-chatbot-B_JpfGzN.js";import"./ai-message-thread-BRUmqCDZ.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-B6-mWfVu.js";import"./state-JArgnu9E.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-D27WBBLQ.js";import"./class-map-CR6oE6D-.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DXFzrudH.js";import"./tooltip-DRurawGT.js";import"./query-BpjciUlk.js";import"./overlay-xUisDo-B.js";import"./ai-chat-header-BW4VNUlS.js";import"./ai-icon-DIWMsOIB.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-2IAFuXal.js";import"./ai-dropdown-menu-DzW3Gr_d.js";import"./if-defined-B6_L83eB.js";import"./popover-DS6hsmUA.js";import"./ai-modal-BCkx3htJ.js";import"./ai-agent-info-CZlIHk8C.js";import"./ai-chat-interface-CsJJZhJl.js";import"./ai-file-picker-BrMNCiNM.js";import"./ai-prompt-Dhv44f6Y.js";import"./ai-suggestions-DJ7Om8gL.js";import"./ai-voice-input-C5rthhgn.js";import"./ai-empty-state-BcrxEIcX.js";import"./ai-error-message-BdCcebN8.js";import"./ai-response-message-dFQZy7IU.js";import"./ai-actions-toolbar-CDNYhljH.js";import"./ai-thinking-indicator-C-dv2NH7.js";import"./ai-user-message-D6JbTuRY.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const J=["Demo"];export{e as Demo,J as __namedExportsOrder,z as default};
