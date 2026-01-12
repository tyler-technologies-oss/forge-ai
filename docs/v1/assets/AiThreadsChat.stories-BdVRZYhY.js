import{x as i}from"./iframe-DbYUv31D.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-CSoB10G5.js";import"./ai-chatbot-DODMxbyD.js";import"./ai-message-thread-BPTAmh9Q.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DJ_SmNVs.js";import"./state-DKROCAgB.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-CZDgOGxH.js";import"./class-map-DHPkP9wc.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Cor1L1Qj.js";import"./ai-spinner-DlrqjHTJ.js";import"./tooltip-B1PewwDs.js";import"./query-BpjciUlk.js";import"./overlay-zFbY7LdT.js";import"./ai-chat-header-BYNBrojY.js";import"./ai-icon-DTwInCkb.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DM3ZowEC.js";import"./ai-dropdown-menu-CQaXLt-o.js";import"./ai-dropdown-menu-item-Dx5vQ-uG.js";import"./popover-CvdAa5RR.js";import"./ai-modal-BlzDQXzM.js";import"./ai-agent-info-DST2wU04.js";import"./ai-chat-interface-HhYlbQfW.js";import"./ai-file-picker-DzNETG2l.js";import"./ai-prompt-BFtB3PKn.js";import"./ai-suggestions-B-F59nub.js";import"./ai-voice-input-DcDgPWRY.js";import"./ai-empty-state-B7Ly12vV.js";import"./ai-error-message-DUM0YQF8.js";import"./ai-response-message-CTNE6Xf-.js";import"./ai-actions-toolbar-D0DWmXe8.js";import"./ai-thinking-indicator-DcS1cU5e.js";import"./ai-user-message-D85t1pS7.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
