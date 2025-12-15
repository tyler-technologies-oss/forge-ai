import{x as i}from"./iframe-C_V5_8XG.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-DXZDbX7M.js";import"./ai-chatbot-enCl-FxE.js";import"./ai-message-thread-DHvxSxRK.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CmHdYqm1.js";import"./state-Bi84z9Cw.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DKIKbCUb.js";import"./class-map-DXuGM1pt.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DLHG5Ioy.js";import"./tooltip-CI-bySCn.js";import"./query-BpjciUlk.js";import"./overlay-Dxc2qL-b.js";import"./ai-chat-header-B9JvbGKU.js";import"./ai-icon-shg-qg0G.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DTT6rarA.js";import"./ai-dropdown-menu-BrQ9gAYs.js";import"./if-defined-C0-QtTgc.js";import"./popover-BLSBZHbV.js";import"./ai-modal-BUGrBo2K.js";import"./ai-agent-info-Dof8WFXA.js";import"./ai-chat-interface-B_5TLcfX.js";import"./ai-file-picker-DpFnICzV.js";import"./ai-prompt-CB80u5Zy.js";import"./ai-suggestions-BLKGxT4h.js";import"./ai-voice-input-C2emidNs.js";import"./ai-empty-state-DpV0Cxu9.js";import"./ai-error-message-n8kd8ac6.js";import"./ai-response-message-DuYFjLfh.js";import"./ai-actions-toolbar-D4SCZA2l.js";import"./ai-thinking-indicator-CJyRA3i8.js";import"./ai-user-message-CYAI71FK.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
