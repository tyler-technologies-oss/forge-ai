import{x as i}from"./iframe-jiECFzia.js";import{M as p}from"./mock-adapter-Dat2lqqN.js";import"./ai-threads-BjHaPWWr.js";import"./ai-chatbot-gy7ZGRRb.js";import"./ai-message-thread-DgTl_k9q.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-ClszgVLm.js";import"./state-B_csnfW2.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-D_ywKXfr.js";import"./class-map-D3JOxIYy.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CLsIW341.js";import"./ai-spinner-Bo33YpwU.js";import"./tooltip-D4UKEZWy.js";import"./query-BpjciUlk.js";import"./overlay-DJpR6odv.js";import"./ai-chat-header-CknM0ACy.js";import"./ai-icon-p9NI6JeS.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Ch9vyRLz.js";import"./ai-dropdown-menu-DBypqqW1.js";import"./ai-dropdown-menu-item-Dd8Ycxod.js";import"./popover-BEZfHKYQ.js";import"./ai-modal-kmerU1cU.js";import"./ai-agent-info-BkyQsNlC.js";import"./ai-chat-interface-BLAl7xBA.js";import"./ai-file-picker-EbRh9l4B.js";import"./ai-prompt-BYROfAfM.js";import"./ai-suggestions-CAb-bjGM.js";import"./ai-voice-input-BdsRkUdG.js";import"./ai-empty-state-BaxQ6sl-.js";import"./ai-error-message-CO4mBoqM.js";import"./ai-response-message-BaMsXeO0.js";import"./ai-actions-toolbar-W0NxCtV8.js";import"./ai-thinking-indicator-B_q3I48y.js";import"./ai-user-message-CD1GZJuk.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
