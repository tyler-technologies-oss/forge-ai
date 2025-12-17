import{x as i}from"./iframe-BxTEDDqz.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-6emrWcTD.js";import"./ai-chatbot-Bu8mGD5J.js";import"./ai-message-thread-DsML6Wje.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DhSIdph-.js";import"./state-CzZMf_Ah.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DvBp_9z3.js";import"./class-map-DkD-DFjH.js";import"./when-CI7b_ccM.js";import"./ai-attachment-84_GKvCK.js";import"./tooltip-DpbiJaK_.js";import"./query-BpjciUlk.js";import"./overlay-A5jJuAI2.js";import"./ai-chat-header-BH4eTax3.js";import"./ai-icon-DhmGLga1.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B7eauXBh.js";import"./ai-dropdown-menu-BaUFCIEC.js";import"./if-defined-DntViRB-.js";import"./popover-CdpT-WHN.js";import"./ai-modal-CSwG1GRs.js";import"./ai-agent-info-BknzEdyM.js";import"./ai-chat-interface-CIrTyN-m.js";import"./ai-file-picker-D3DI6pPP.js";import"./ai-prompt-CXDB1Q-a.js";import"./ai-suggestions-9Yi56VjA.js";import"./ai-voice-input-O-D2rQ8S.js";import"./ai-empty-state-BFMD0k_0.js";import"./ai-error-message-BV2-iXw5.js";import"./ai-response-message-CTnAxzfv.js";import"./ai-actions-toolbar-CkyrJA6L.js";import"./ai-thinking-indicator-U9wcdd7b.js";import"./ai-user-message-ECyl3xrv.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
