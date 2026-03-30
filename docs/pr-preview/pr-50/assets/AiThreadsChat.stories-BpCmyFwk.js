import{x as i}from"./iframe-Tq2oLOLI.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-5RyFXKrw.js";import"./ai-chatbot-base-B3bCkdji.js";import"./ai-chatbot-CI-lsXas.js";import"./ai-message-thread-BvN0nLzI.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Befmiq9U.js";import"./base-BJRUVhYU.js";import"./query-assigned-elements-CNlIIDNo.js";import"./ref-BvdYZHYZ.js";import"./class-map-60Wn57OH.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Dp05aqeF.js";import"./ai-spinner-Cm7OcWEB.js";import"./tooltip-Ct3kPPMi.js";import"./overlay-DET8XgbF.js";import"./ai-chat-header-Blkm2777.js";import"./ai-icon-BKSz5uco.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CkohTgxt.js";import"./ai-dropdown-menu-Dt2hr8_A.js";import"./if-defined-DAFyaJA5.js";import"./popover-CqWUXQ78.js";import"./ai-dropdown-menu-item-tLKdxwey.js";import"./ai-modal-D7LzHnRg.js";import"./ai-agent-info-BgQlVDks.js";import"./ai-agent-selector-D6ffM5IV.js";import"./ai-chat-interface-DKkfQ784.js";import"./ai-file-picker-c1qxCVX8.js";import"./ai-prompt-esaA3UH5.js";import"./ai-suggestions-Bezdgdlw.js";import"./ai-voice-input-B2VktDHO.js";import"./ai-response-message-toolbar-DlUq-OyH.js";import"./ai-empty-state-nvSD8dsV.js";import"./ai-error-message-BMHXC40h.js";import"./ai-response-message-DhbCrGRD.js";import"./ai-thinking-indicator-CXYdU-lo.js";import"./ai-user-message-C9YHG4y4.js";import"./ai-user-message-toolbar-DQ94lJt5.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
