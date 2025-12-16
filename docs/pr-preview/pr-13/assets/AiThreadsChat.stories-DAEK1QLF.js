import{x as i}from"./iframe-D7Tpnw0V.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-DKqKtHSo.js";import"./ai-chatbot-CEgo1a9m.js";import"./ai-message-thread-C8jeCHe3.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CTCtJMTe.js";import"./state-BO3gOgF-.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-6Xaa47nS.js";import"./class-map-C41-uo6p.js";import"./when-CI7b_ccM.js";import"./ai-attachment-By1qTmVu.js";import"./tooltip-C5KXqkj1.js";import"./query-BpjciUlk.js";import"./overlay-_AeYfkKe.js";import"./ai-chat-header-CJwD0fMJ.js";import"./ai-icon-DI1xjnc_.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DH2HpMed.js";import"./ai-dropdown-menu-aomML9bq.js";import"./if-defined-CS0wN6ZP.js";import"./popover-CFtsN5vH.js";import"./ai-modal-D5vVTMm0.js";import"./ai-agent-info-wm0OJbz3.js";import"./ai-chat-interface-CNJVsBWL.js";import"./ai-file-picker-CdzgM5Qt.js";import"./ai-prompt-DED1H-U-.js";import"./ai-suggestions-C50wPYkW.js";import"./ai-voice-input-BSBHSZbK.js";import"./ai-empty-state-DkeuJZDY.js";import"./ai-error-message-D6KaGQYb.js";import"./ai-response-message-DFyR2oEa.js";import"./ai-actions-toolbar-BWaH1osi.js";import"./ai-thinking-indicator--Ov-1fe0.js";import"./ai-user-message-BBDKoKsr.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
