import{x as i}from"./iframe-DHVsy-bn.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-wbi1IQ8X.js";import"./ai-chatbot-base-_iCSnRMc.js";import"./ai-chatbot-QxRAbdgi.js";import"./ai-message-thread-CS8yO6LJ.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Ba6ahSVr.js";import"./base-CTaLj2WB.js";import"./query-assigned-elements-fWWlw_Qy.js";import"./ref-CZRQtfpF.js";import"./class-map-CFrCwJe5.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CUvZpLlC.js";import"./ai-spinner-C_GYWRWw.js";import"./tooltip-BfJBAel8.js";import"./overlay-D2cVUPzw.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-033hJWkd.js";import"./ai-icon-CfKtRn-R.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DB4MKzII.js";import"./ai-dropdown-menu-IA3DNHEW.js";import"./if-defined-DT4PuL_w.js";import"./popover-GCBs6qZF.js";import"./query-assigned-nodes-BgsLA585.js";import"./ai-dropdown-menu-item-Ds7_3t1q.js";import"./ai-modal-C4SKryg2.js";import"./ai-agent-info-qghsmjzT.js";import"./ai-agent-selector-BEgD4a3n.js";import"./ai-chat-interface-Crx-JcSK.js";import"./ai-file-picker-DPmwi98l.js";import"./ai-prompt-CK2KbxX6.js";import"./ai-suggestions-DPKAvh2r.js";import"./ai-voice-input-DIPIdaGq.js";import"./ai-response-message-toolbar-6CYUakGj.js";import"./ai-empty-state-DMAFg850.js";import"./ai-error-message-BE-sN8LC.js";import"./ai-response-message-Bxvu3QO0.js";import"./ai-thinking-indicator-DdGKz16y.js";import"./ai-user-message-Pier3PvP.js";import"./ai-user-message-toolbar-B4IPnFoC.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
