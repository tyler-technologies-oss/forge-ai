import{x as i}from"./iframe-tckOIesX.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-B2QXDus4.js";import"./ai-chatbot-CoXzI67H.js";import"./ai-message-thread-Ddk-xlCP.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-C7BK6K9m.js";import"./base-DKWyRx40.js";import"./query-assigned-elements-BlnI87pT.js";import"./ref-DwJH8UYD.js";import"./class-map-B_mcsG0m.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BN-dsPZc.js";import"./ai-spinner-CzBepGaf.js";import"./tooltip-DFwMcK0M.js";import"./overlay-C7MgbqbI.js";import"./ai-chat-header-D2hTFgva.js";import"./ai-icon-H3xCCL7e.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-iY6cjQOj.js";import"./ai-dropdown-menu-Db7nmNgP.js";import"./if-defined-BQrA863s.js";import"./popover-BoNVS1Uk.js";import"./ai-dropdown-menu-item-hlMPNyUF.js";import"./ai-modal-o4f8uSwU.js";import"./ai-agent-info-CQBpLdNC.js";import"./ai-agent-selector-zeETbFHv.js";import"./ai-chat-interface-ejFVXgsJ.js";import"./ai-file-picker-BJJL0C2a.js";import"./ai-prompt-DW8n7e6V.js";import"./ai-suggestions-CzzeczGm.js";import"./ai-voice-input-CpC02ULc.js";import"./ai-response-message-toolbar-DLC8SsIv.js";import"./ai-empty-state-DVmoR6DG.js";import"./ai-error-message--2lW7gkK.js";import"./ai-response-message-D2nBlN8L.js";import"./ai-thinking-indicator-DuaeP54F.js";import"./ai-user-message-_lJHeR0p.js";import"./ai-user-message-toolbar-LKjC8mE5.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
