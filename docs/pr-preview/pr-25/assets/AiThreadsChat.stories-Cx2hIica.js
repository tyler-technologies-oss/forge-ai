import{x as i}from"./iframe-CacTwh6x.js";import{M as p}from"./mock-adapter-DPRgB_9-.js";import"./ai-threads-8nBmdJ6_.js";import"./ai-chatbot-SaaN-4Fk.js";import"./ai-message-thread-DHdPiDKZ.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BhYE8ewN.js";import"./state-hSAXgEHR.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-CqfjQ_I3.js";import"./class-map-DEL-697K.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Cs7IU5PQ.js";import"./ai-spinner-C3abGCTz.js";import"./tooltip-DgeKRqVs.js";import"./query-BpjciUlk.js";import"./overlay-DLZB0C6A.js";import"./ai-chat-header-BJsTonma.js";import"./ai-icon-LFDLlvFE.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D4hRuU6m.js";import"./ai-dropdown-menu-0aLfkWSZ.js";import"./ai-dropdown-menu-item-BahTM6mz.js";import"./popover-BJqt8i3F.js";import"./ai-modal-CKtQv8rX.js";import"./ai-agent-info-D2I-694r.js";import"./ai-chat-interface-35rSnnnS.js";import"./ai-file-picker-DBgo13NN.js";import"./ai-prompt-mmQ6nwy-.js";import"./ai-suggestions-B5MCSrRe.js";import"./ai-voice-input-DC_0nsTJ.js";import"./ai-actions-toolbar-CwvDo8Lq.js";import"./ai-empty-state-D0XGRYxp.js";import"./ai-error-message-XiDD3pSC.js";import"./ai-response-message-Cb4zfp4v.js";import"./ai-thinking-indicator-BdAZrrpj.js";import"./ai-user-message-CnKeSM9M.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Q=["Demo"];export{e as Demo,Q as __namedExportsOrder,J as default};
