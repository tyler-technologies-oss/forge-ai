import{x as i}from"./iframe-BuxWpKam.js";import{M as s}from"./mock-adapter-Kih2mlwa.js";import"./ai-threads-HAz7aFwX.js";import"./ai-chatbot-B-q3RAb4.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BJGhh1xK.js";import"./state-hP4D4pII.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-CXufL6Jo.js";import"./class-map-CdXFCBBA.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B9j9BrF8.js";import"./tooltip-CTsd6bwy.js";import"./overlay-BN51lO8p.js";import"./ai-chat-header-Cu74QsOG.js";import"./ai-icon-Cl8hjl42.js";import"./ai-gradient-container--ODevv2X.js";import"./ai-dropdown-menu-BR_-mojL.js";import"./if-defined-Dn2ytPqt.js";import"./popover-DBs-wodE.js";import"./ai-agent-info-B_LbojVT.js";import"./ai-chat-interface-DFDY2grZ.js";import"./ai-empty-state-Cbn255m9.js";import"./ai-error-message-D-JENbTo.js";import"./ai-file-picker-DU65_7Is.js";import"./ai-prompt-DImuVpVi.js";import"./ai-response-message-D3QpPcX2.js";import"./ai-actions-toolbar-Dad1kunM.js";import"./ai-suggestions-DyRMNUZj.js";import"./ai-thinking-indicator-DZi2NEna.js";import"./ai-user-message-6cqXRQk3.js";import"./ai-voice-input-CLsrnWds.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Y=["Demo"];export{e as Demo,Y as __namedExportsOrder,R as default};
