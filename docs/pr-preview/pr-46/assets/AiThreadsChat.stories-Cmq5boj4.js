import{x as i}from"./iframe-BPJous7M.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-SxTLZB4N.js";import"./ai-chatbot-base-BSJ8F4B-.js";import"./ai-chatbot-CuKiRQfb.js";import"./ai-message-thread-DBK5r_Eq.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-TlzTqd7d.js";import"./base-BwKwAoSK.js";import"./query-assigned-elements-B5PF_l9O.js";import"./ref-DHdyc2Fc.js";import"./class-map-uYtyWEZq.js";import"./when-CI7b_ccM.js";import"./ai-attachment-jsrM2J7S.js";import"./ai-spinner-rnz26dWd.js";import"./tooltip-D80hkwWW.js";import"./overlay-BGkZwIil.js";import"./ai-chat-header-Dy90ixhd.js";import"./ai-icon-87qm-36p.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DV1zkfBg.js";import"./ai-dropdown-menu-Bl9gIBV9.js";import"./if-defined-ChX85WYI.js";import"./popover-9Q1xQChe.js";import"./ai-dropdown-menu-item-0Vn6RA39.js";import"./ai-modal-Bes4JoXc.js";import"./ai-agent-info-1QrjlwF8.js";import"./ai-agent-selector-CVTuNHmd.js";import"./ai-chat-interface-CmlTwz-Z.js";import"./ai-file-picker-C_b-8iDm.js";import"./ai-prompt-y2wc9wOf.js";import"./ai-suggestions-DKpsYfZF.js";import"./ai-voice-input-WhwKcoSZ.js";import"./ai-response-message-toolbar-CPkD8mAB.js";import"./ai-empty-state-B9YLWxyc.js";import"./ai-error-message-C0dN8mk8.js";import"./ai-response-message-_Yglw0eQ.js";import"./ai-thinking-indicator-9aDYllkM.js";import"./ai-user-message-B8L4xAyU.js";import"./ai-user-message-toolbar-BLdCFbde.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
