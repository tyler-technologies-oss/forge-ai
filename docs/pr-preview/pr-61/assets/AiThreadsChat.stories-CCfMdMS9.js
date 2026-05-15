import{x as i}from"./iframe-DFsyteUX.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-uCtclf-z.js";import"./ai-chatbot-base-C9nYLMRY.js";import"./ai-chatbot-CJU7Uhzo.js";import"./ai-message-thread-C6EZpsfz.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-B0SX08Wa.js";import"./base-D1C34w3f.js";import"./query-assigned-elements-BufxX3pH.js";import"./ref-O1rwsKA-.js";import"./class-map-B3cGpxoh.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CyP0lZdn.js";import"./ai-spinner-BU_QUVae.js";import"./tooltip-Cfmf1TI2.js";import"./overlay-D2adnYUH.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-C5TLUmbq.js";import"./ai-icon-DSQuFJOg.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CwmZPL5H.js";import"./ai-dropdown-menu-Dbl5F0AW.js";import"./if-defined-D7IsuE0F.js";import"./popover-DCWfMAto.js";import"./query-assigned-nodes-DVn74Qjz.js";import"./ai-dropdown-menu-item-BNScmGjH.js";import"./ai-modal-ww-SeDfs.js";import"./ai-agent-info-qUHBh8M7.js";import"./ai-agent-selector-VWzOLV2a.js";import"./ai-chat-interface-CjEDFaf2.js";import"./ai-file-picker-CzqEvOSJ.js";import"./ai-prompt-Do4anHZo.js";import"./ai-suggestions-CqWPVvvo.js";import"./ai-voice-input-DcJfLCI8.js";import"./ai-response-message-toolbar-D6KZ-jY8.js";import"./ai-empty-state-C113gpyU.js";import"./ai-error-message-Bs_lux2G.js";import"./ai-response-message-CeUpwxCg.js";import"./ai-thinking-indicator-ARE39Y7K.js";import"./ai-user-message-392l8dTp.js";import"./ai-user-message-toolbar-_8Vphmne.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["Demo"];export{e as Demo,Z as __namedExportsOrder,X as default};
