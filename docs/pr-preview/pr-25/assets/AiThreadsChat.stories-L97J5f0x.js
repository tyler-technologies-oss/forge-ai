import{x as i}from"./iframe-DyjsB23L.js";import{M as p}from"./mock-adapter-DPRgB_9-.js";import"./ai-threads-MHc30byd.js";import"./ai-chatbot-BErCRJEN.js";import"./ai-message-thread-D9tRHvZw.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-J3kLzzhT.js";import"./state-BJelEoZP.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-B8YufSM5.js";import"./class-map-Ccfd-drH.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DybO5EIF.js";import"./ai-spinner-BV2hQxex.js";import"./tooltip-B7Wlk9PQ.js";import"./query-BpjciUlk.js";import"./overlay-Cnw66Xtr.js";import"./ai-chat-header-BQ0kcMqJ.js";import"./ai-icon-CfAPud2L.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D7ytFrVw.js";import"./ai-dropdown-menu-auuuecaH.js";import"./ai-dropdown-menu-item-C6funui_.js";import"./popover-BzTceL9c.js";import"./ai-modal-C3BvkBkf.js";import"./ai-agent-info-Ygfh1DZ2.js";import"./ai-chat-interface-B_zJsca7.js";import"./ai-file-picker-DUjxges6.js";import"./ai-prompt-50tvHD-X.js";import"./ai-suggestions-DEYhDPl1.js";import"./ai-voice-input-I4sSXQKO.js";import"./ai-actions-toolbar-Bd_G_LBR.js";import"./ai-empty-state-B65UJj7O.js";import"./ai-error-message-a2BMjfQq.js";import"./ai-response-message-BelwloRc.js";import"./ai-thinking-indicator-D_OfNx24.js";import"./ai-user-message-BoMmwZPE.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
