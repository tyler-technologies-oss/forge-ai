import{x as i}from"./iframe-CfLMb5Cg.js";import{M as s}from"./mock-adapter-CyWJDEYb.js";import"./ai-threads-C5W5KOHh.js";import"./ai-chatbot-DoC0m--U.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CqL7H2X8.js";import"./state-DNLCl59q.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-BpxABJoC.js";import"./class-map-CrDF-G4y.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-_LiBkJby.js";import"./tooltip-BYIst8qW.js";import"./overlay-BLEqngTb.js";import"./ai-chat-header-DT7ULq5z.js";import"./ai-icon-BCph9qtf.js";import"./ai-gradient-container-Yi4wJsNL.js";import"./ai-dropdown-menu-CKd4i1wk.js";import"./if-defined-fT40bXeW.js";import"./popover-CSGHLDfL.js";import"./ai-agent-info-BltJnzSH.js";import"./ai-chat-interface-Dy6CZ9z3.js";import"./ai-empty-state-JkACD_Ha.js";import"./ai-error-message-DKTcyqYt.js";import"./ai-file-picker-o7EuU6x2.js";import"./ai-prompt-CNsArM6X.js";import"./ai-response-message-DYvhtbcy.js";import"./ai-actions-toolbar-BcMirJvq.js";import"./ai-suggestions-Btra_ro7.js";import"./ai-thinking-indicator-kxCu_J4t.js";import"./ai-user-message-AIxkJz4A.js";import"./ai-voice-input-BB1jPRQ0.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
