import{x as i}from"./iframe-BQxvjztD.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-DzcEOTbG.js";import"./ai-chatbot-BtNGE4z0.js";import"./ai-message-thread-DZCDognW.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DZ1ArpCQ.js";import"./state-Bn9if9qm.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-BPTjykbD.js";import"./class-map-DmnMcxWp.js";import"./when-CI7b_ccM.js";import"./ai-attachment-JwoqNYXy.js";import"./tooltip-ClEnvWXS.js";import"./query-BpjciUlk.js";import"./overlay-Dcg-_GSQ.js";import"./ai-chat-header-BkPEC4J0.js";import"./ai-icon-DXEgaFld.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CaHMsrrj.js";import"./ai-dropdown-menu-CbvN5NH0.js";import"./if-defined-BOoLCEQA.js";import"./popover-JsaENivg.js";import"./ai-modal-Bn-0iEtD.js";import"./ai-agent-info-CUldArwn.js";import"./ai-chat-interface-CNkY6KVq.js";import"./ai-file-picker-BQ2LbXHw.js";import"./ai-prompt-C8c8wEZw.js";import"./ai-suggestions-Ce0CPkdl.js";import"./ai-voice-input-jGYHpiv6.js";import"./ai-empty-state-CA6CkW5A.js";import"./ai-error-message-apeTUJOY.js";import"./ai-response-message-B0Dn07HK.js";import"./ai-actions-toolbar-CQz4KDkD.js";import"./ai-thinking-indicator-LLk_mNRi.js";import"./ai-user-message-BvlmFYKZ.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
