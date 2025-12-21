import{x as i}from"./iframe-TlxgqHzZ.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-CiM_UpPT.js";import"./ai-chatbot-D7XWh1cj.js";import"./ai-message-thread-Ruj2LcKC.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CvirgL1L.js";import"./state-CNwGT1if.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-Cg8IVXmE.js";import"./class-map-DWzJ8PAl.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BtANCbhB.js";import"./tooltip-31eMLASc.js";import"./query-BpjciUlk.js";import"./overlay-D3wXtkxR.js";import"./ai-chat-header-vzCBi6OQ.js";import"./ai-icon-CMv2AAob.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B92XkYhN.js";import"./ai-dropdown-menu-COjzr4oW.js";import"./if-defined-BWzBto7g.js";import"./popover-DDHpPADV.js";import"./ai-modal-XJLE1qk1.js";import"./ai-agent-info-LDLjJ3Ni.js";import"./ai-chat-interface-2bweSQtq.js";import"./ai-file-picker-CZ_lz2uS.js";import"./ai-prompt-C6yYw80I.js";import"./ai-suggestions-BUx5ofbd.js";import"./ai-voice-input-DUJH7P_a.js";import"./ai-empty-state-C5f8Dd69.js";import"./ai-error-message-B68KlQtL.js";import"./ai-response-message-DKMnNThM.js";import"./ai-actions-toolbar-pqhgYhxx.js";import"./ai-thinking-indicator-F92OOwIK.js";import"./ai-user-message-WoVDJOB7.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
