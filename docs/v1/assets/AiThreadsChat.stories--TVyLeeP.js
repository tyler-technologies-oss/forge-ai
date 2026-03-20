import{x as i}from"./iframe-Cdy4RhMs.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-COyHpJpI.js";import"./ai-chatbot-base-BzIKVA32.js";import"./ai-chatbot-DYkkYbTs.js";import"./ai-message-thread-nkdueEj5.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-B6CB5CKs.js";import"./base-OhZCqXTS.js";import"./query-assigned-elements-F3MQT6_l.js";import"./ref-Du2rKaNb.js";import"./class-map-6nIIfOde.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B5NPjDM4.js";import"./ai-spinner-Cf8V5lEr.js";import"./tooltip-oHQzqeEM.js";import"./overlay-BIQKsxB7.js";import"./ai-chat-header-B24eJ8_T.js";import"./ai-icon-BJ5p5fkw.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DOLSIN7b.js";import"./ai-dropdown-menu-ByqHvjqP.js";import"./if-defined-CXPIZVks.js";import"./popover-CiQlKlvT.js";import"./ai-dropdown-menu-item-V2dfCsj8.js";import"./ai-modal-sI9UMKSw.js";import"./ai-agent-info-iloM0d1z.js";import"./ai-agent-selector-C_VN3bdJ.js";import"./ai-chat-interface-BJW1Gpz1.js";import"./ai-file-picker-DfW3HPDg.js";import"./ai-prompt-DlRXqhGa.js";import"./ai-suggestions-d4r-ATNy.js";import"./ai-voice-input-bX57VDpk.js";import"./ai-response-message-toolbar-CQ9c8ltn.js";import"./ai-empty-state-4j3Rzu8f.js";import"./ai-error-message-CrzSemOl.js";import"./ai-response-message-CzcZ9_lh.js";import"./ai-thinking-indicator-yqFZervP.js";import"./ai-user-message-BJAMnyYO.js";import"./ai-user-message-toolbar-C9pkJRsK.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
