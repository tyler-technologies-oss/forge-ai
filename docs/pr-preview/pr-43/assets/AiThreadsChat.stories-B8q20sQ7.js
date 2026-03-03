import{x as i}from"./iframe-XWml_phI.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-Ezsu_5gO.js";import"./ai-chatbot-ChVtj1q7.js";import"./ai-message-thread-Cl1JNuwP.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CPtZoXga.js";import"./base-CmsSc0gD.js";import"./query-assigned-elements-BcstsRPa.js";import"./ref-BwCKS_3O.js";import"./class-map-BJBQucdb.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CL0_VZIX.js";import"./ai-spinner-C7LFH41y.js";import"./tooltip-DQrjgPvv.js";import"./overlay-DyqMHNrF.js";import"./ai-chat-header-CieSP2DZ.js";import"./ai-icon-Cl-qB0pr.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-r0hUVQd7.js";import"./ai-dropdown-menu-Chtl3s0O.js";import"./if-defined-DuMJGNmA.js";import"./popover-DJd5pnlp.js";import"./ai-dropdown-menu-item-BB8dEuMB.js";import"./ai-modal-AiuxPT19.js";import"./ai-agent-info-CdYGW8QY.js";import"./ai-agent-selector-OIaXZejk.js";import"./ai-chat-interface-D9AEPFn2.js";import"./ai-file-picker-iPqA7Ndh.js";import"./ai-prompt-6Uy0femZ.js";import"./ai-suggestions-Bcp6Nzeb.js";import"./ai-voice-input-Br3fWsJk.js";import"./ai-response-message-toolbar-Ccr5qVxu.js";import"./ai-empty-state-C6zfm-9L.js";import"./ai-error-message-BdLG1onY.js";import"./ai-response-message-C_UemnMv.js";import"./ai-thinking-indicator-riLaJ2nT.js";import"./ai-user-message-DnlaS6u3.js";import"./ai-user-message-toolbar-BqoiZnKL.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
