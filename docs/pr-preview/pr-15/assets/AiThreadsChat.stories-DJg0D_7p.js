import{x as i}from"./iframe-CJ1HM2fh.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-TFMHjO3U.js";import"./ai-chatbot-Cj02Ea8X.js";import"./ai-message-thread-Be4Qumad.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-B_dicjY-.js";import"./state-DA5ihIqT.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-oMGdO1zU.js";import"./class-map-BO_N24F0.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CZSkuxNk.js";import"./tooltip-YjA9RdPZ.js";import"./query-BpjciUlk.js";import"./overlay-MdhgF2Qq.js";import"./ai-chat-header-GBL-2gG9.js";import"./ai-icon-ecs09ux3.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DVEe7B8I.js";import"./ai-dropdown-menu-D4QcWYXL.js";import"./if-defined-D4080SyM.js";import"./popover-B-yG1gg1.js";import"./ai-modal-CS-M3w4q.js";import"./ai-agent-info-CRw1hwlc.js";import"./ai-chat-interface-DITd02-h.js";import"./ai-file-picker-D9E8mVc9.js";import"./ai-prompt-ColcBzqk.js";import"./ai-suggestions-YN3oCiHt.js";import"./ai-voice-input-BOTckuvJ.js";import"./ai-empty-state-Da9ekMtc.js";import"./ai-error-message-BQrQvuYG.js";import"./ai-response-message-CFG4Byty.js";import"./ai-actions-toolbar-DS3MV62L.js";import"./ai-thinking-indicator-Jhz-7w9W.js";import"./ai-user-message-K37rvyZy.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
