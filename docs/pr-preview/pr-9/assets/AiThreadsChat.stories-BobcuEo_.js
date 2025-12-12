import{x as i}from"./iframe-tTf1YFhn.js";import{M as s}from"./mock-adapter-CyWJDEYb.js";import"./ai-threads-Tve0Y-i0.js";import"./ai-chatbot-DWK1j3OM.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-D1sRqruW.js";import"./state-CoFQ-eiY.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-TlMp46a4.js";import"./class-map-D6J53kEk.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-LLh_wDA9.js";import"./tooltip-BIm1aYoH.js";import"./overlay-CnMC4RNa.js";import"./ai-chat-header-CXxFzTYY.js";import"./ai-icon-CDI56_P3.js";import"./ai-gradient-container-BdITaPxp.js";import"./ai-dropdown-menu-B9oRGfTU.js";import"./if-defined-DTbNC0rV.js";import"./popover--wdwyx1y.js";import"./ai-agent-info-CVbUOhXk.js";import"./ai-chat-interface-CqVdqT-d.js";import"./ai-empty-state-D23znYeq.js";import"./ai-error-message-CEAmwJRA.js";import"./ai-file-picker-BnVATo6H.js";import"./ai-prompt-DGdjuIFE.js";import"./ai-response-message-DTJdxfmr.js";import"./ai-actions-toolbar-DhLQ5XAy.js";import"./ai-suggestions-DsIXhdAL.js";import"./ai-thinking-indicator-D_qc2Btw.js";import"./ai-user-message-BoEhGfEC.js";import"./ai-voice-input-DtaWbmEE.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Y=["Demo"];export{e as Demo,Y as __namedExportsOrder,R as default};
