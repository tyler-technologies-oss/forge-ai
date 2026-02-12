import{x as i}from"./iframe-CjyLkcAf.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-BrqvQI6Y.js";import"./ai-chatbot-CSNCV8xk.js";import"./ai-message-thread-bJfD-44Y.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CCXGwIaz.js";import"./base-CwBp4TWH.js";import"./query-assigned-elements-BrhC7RoA.js";import"./ref-CHywetYt.js";import"./class-map-DwLEfOJ3.js";import"./when-CI7b_ccM.js";import"./ai-attachment-7TRhOU1U.js";import"./ai-spinner-yZ6iFdj_.js";import"./tooltip-0qQm8HIB.js";import"./overlay-Cd7mO8-r.js";import"./ai-chat-header-DmRbOxHV.js";import"./ai-icon-BIBFBXw1.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B0VYt1uL.js";import"./ai-dropdown-menu-CSeCBmsK.js";import"./if-defined-CkrV1gqJ.js";import"./popover-678H1k0O.js";import"./ai-dropdown-menu-item-xAnJVzKk.js";import"./ai-modal-j8wtGyA_.js";import"./ai-agent-info-Brf7jdv5.js";import"./ai-agent-selector-CsM-DslM.js";import"./ai-chat-interface-JYXCClbf.js";import"./ai-file-picker-v6YRCUzR.js";import"./ai-prompt-DFBz3J8m.js";import"./ai-suggestions-DI7DC5K9.js";import"./ai-voice-input-BoGAExV_.js";import"./ai-response-message-toolbar-D13tisLD.js";import"./ai-empty-state-DRyH8wsu.js";import"./ai-error-message-o4CBBCfz.js";import"./ai-response-message-C-TI2c1u.js";import"./ai-thinking-indicator-DMgtzGp5.js";import"./ai-user-message-CoLYsfH6.js";import"./ai-user-message-toolbar-DaD-MXi-.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const V=["Demo"];export{e as Demo,V as __namedExportsOrder,Q as default};
