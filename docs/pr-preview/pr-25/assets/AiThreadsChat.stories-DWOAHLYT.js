import{x as i}from"./iframe-CvmPcUI8.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-WYxYERP6.js";import"./ai-chatbot-DoA6UUgg.js";import"./ai-message-thread-CsLps7yb.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-B32Pcjm5.js";import"./base-D3YXRiGL.js";import"./query-assigned-elements-8Ko2aplq.js";import"./ref-OUD70ONz.js";import"./class-map-BmsxCHkz.js";import"./when-CI7b_ccM.js";import"./ai-attachment-QplK-OYH.js";import"./ai-spinner-BlmkzSz-.js";import"./tooltip-BYH_Y-xU.js";import"./overlay-GLzBTR1O.js";import"./ai-chat-header-DdeDYvMz.js";import"./ai-icon-B8oQHrbq.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Bych8hba.js";import"./ai-dropdown-menu-DOIVjsku.js";import"./if-defined-BEKehhrt.js";import"./popover-DLXXMyea.js";import"./ai-dropdown-menu-item-Bx8F6CrY.js";import"./ai-modal-BVinP_ZX.js";import"./ai-agent-info-CK3hwj8-.js";import"./ai-chat-interface-D6IrC88u.js";import"./ai-file-picker-DOmM1XV3.js";import"./ai-prompt-DZ6g1QdH.js";import"./ai-suggestions-DYuFQYfa.js";import"./ai-voice-input-CtS2puhv.js";import"./ai-actions-toolbar-vCRWfXPI.js";import"./ai-empty-state-DKIuG_Ku.js";import"./ai-error-message-hYlIo3Af.js";import"./ai-response-message-DOe0j7uI.js";import"./ai-thinking-indicator-Ci-DqUKy.js";import"./ai-user-message-DMcZ0DNh.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
