import{x as i}from"./iframe-KxHShLTD.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-CvSHWVG8.js";import"./ai-chatbot-Cy7xv0Bt.js";import"./ai-message-thread-4YJlr52Z.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CSm6Jcaz.js";import"./state-DdNExJo2.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-Cs38hsWD.js";import"./class-map-DLCmFg5z.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DcHu0cuo.js";import"./tooltip-C4wA1hII.js";import"./query-BpjciUlk.js";import"./overlay-DUxlh6Z5.js";import"./ai-chat-header-DrRcTpIE.js";import"./ai-icon-VOV6A3SJ.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CvRGUNIU.js";import"./ai-dropdown-menu-FR5gpyyV.js";import"./if-defined-Bl6Q6J7m.js";import"./popover-C8OOO-q5.js";import"./ai-modal-BgQzPDz7.js";import"./ai-agent-info-Ctnppcr0.js";import"./ai-chat-interface-DGaOuC0a.js";import"./ai-file-picker-CHd7QzZp.js";import"./ai-prompt-CQE6fsow.js";import"./ai-suggestions-DFpy1SNC.js";import"./ai-voice-input-Dfr-P6SQ.js";import"./ai-empty-state-DK9YtoBB.js";import"./ai-error-message-C4DDZiom.js";import"./ai-response-message-C9JPL2Fk.js";import"./ai-actions-toolbar-D-A4hDQa.js";import"./ai-thinking-indicator-jlxvksJg.js";import"./ai-user-message-D32uDT4g.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
