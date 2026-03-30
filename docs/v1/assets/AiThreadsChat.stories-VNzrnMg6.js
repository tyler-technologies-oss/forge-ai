import{x as i}from"./iframe-2rBvKK5_.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-Da-gEPOS.js";import"./ai-chatbot-base-CPoxqN6-.js";import"./ai-chatbot-CEcfe52L.js";import"./ai-message-thread-De1gd5nt.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Dn--K5et.js";import"./base-C9NkJQ01.js";import"./query-assigned-elements-DLxx7AcP.js";import"./ref-cC_IUWYZ.js";import"./class-map-CBrDPJxO.js";import"./when-CI7b_ccM.js";import"./ai-attachment-9py_lq-H.js";import"./ai-spinner-C2YG4Fho.js";import"./tooltip-8EFzQ-Ky.js";import"./overlay-BrJxg0Ga.js";import"./ai-chat-header-D_MoGj6q.js";import"./ai-icon-CuU87CNK.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CaaJN_Wj.js";import"./ai-dropdown-menu-BPkCDwsw.js";import"./if-defined-CWGlnA6N.js";import"./popover-C13IpVkK.js";import"./ai-dropdown-menu-item-BOmHiGzX.js";import"./ai-modal-DFOZ3ZC4.js";import"./ai-agent-info-DMGfdEPc.js";import"./ai-agent-selector-Dp0lPMB1.js";import"./ai-chat-interface-FISxD7KH.js";import"./ai-file-picker-B2rmhOK0.js";import"./ai-prompt-BkJCchwL.js";import"./ai-suggestions-szTwFVta.js";import"./ai-voice-input-DQO9vVXi.js";import"./ai-response-message-toolbar-CO2wM3AY.js";import"./ai-empty-state-B8QZ8La-.js";import"./ai-error-message-CqOSmeYJ.js";import"./ai-response-message-Pm-nKzDM.js";import"./ai-thinking-indicator-BL8V-8t7.js";import"./ai-user-message-BpeOsKmF.js";import"./ai-user-message-toolbar-KoyGJOYo.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
