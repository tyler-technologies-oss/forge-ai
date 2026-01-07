import{x as i}from"./iframe-Bp7ipRCr.js";import{M as p}from"./mock-adapter-Dat2lqqN.js";import"./ai-threads-CnBwwCHn.js";import"./ai-chatbot-CE0BPr1o.js";import"./ai-message-thread-CyaNe8YC.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-7jE7f0Cs.js";import"./state-DdHSmUcP.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-D9cN2G7K.js";import"./class-map-D7uXj0Ka.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BM5d9d1e.js";import"./ai-spinner-9_uHY4pA.js";import"./tooltip-FWUsvKqm.js";import"./query-BpjciUlk.js";import"./overlay-B4m--PfO.js";import"./ai-chat-header-DaIq-QPU.js";import"./ai-icon-dj4Wl-PB.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DJ3JRIIT.js";import"./ai-dropdown-menu-DVdftkVk.js";import"./ai-dropdown-menu-item-NWZgt-pQ.js";import"./popover-BEehH7-m.js";import"./ai-modal-CZ9M1yzR.js";import"./ai-agent-info-D1iqFw6B.js";import"./ai-chat-interface-8HS09v53.js";import"./ai-file-picker-8jTVBIOF.js";import"./ai-prompt-2SFyynPj.js";import"./ai-suggestions-CVMG0DHJ.js";import"./ai-voice-input-Dw2mYwy8.js";import"./ai-empty-state-BT6NE1vf.js";import"./ai-error-message-8UIODciE.js";import"./ai-response-message-DyBTydAO.js";import"./ai-actions-toolbar-Dm0r8gp9.js";import"./ai-thinking-indicator-CNfZntMc.js";import"./ai-user-message-Bu68EeGF.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
