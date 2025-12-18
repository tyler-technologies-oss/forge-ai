import{x as i}from"./iframe-CLXkpy3u.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-BKyJOL-N.js";import"./ai-chatbot-C0Ia1970.js";import"./ai-message-thread-CBfknr-_.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-r5QwSp9U.js";import"./state-3_jdtenV.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-CU85LQ3c.js";import"./class-map-B-HobL0F.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CmpA6RKK.js";import"./tooltip-DYj3R-0Q.js";import"./query-BpjciUlk.js";import"./overlay-U6VO9BNn.js";import"./ai-chat-header-HGDDK7gm.js";import"./ai-icon-CAP7HWGr.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-VhbVw1XR.js";import"./ai-dropdown-menu-Do1v0pWG.js";import"./if-defined-D9qgStYo.js";import"./popover-D61owTBI.js";import"./ai-modal-BF7BbcW5.js";import"./ai-agent-info-b_GkrHil.js";import"./ai-chat-interface-BHRzN72T.js";import"./ai-file-picker-BrudWKzo.js";import"./ai-prompt-CXzRxh7-.js";import"./ai-suggestions-Bm70_Bhf.js";import"./ai-voice-input-CW140QdW.js";import"./ai-empty-state-BVpq1BHw.js";import"./ai-error-message-Ce0cZsfY.js";import"./ai-response-message-CnVE_7_P.js";import"./ai-actions-toolbar-BYrZjVZE.js";import"./ai-thinking-indicator-BZAMbbrX.js";import"./ai-user-message-C9hSntWw.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
