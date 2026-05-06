import{x as i}from"./iframe-C9phzLEP.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-C-LfzSNz.js";import"./ai-chatbot-base-CvHf5hKP.js";import"./ai-chatbot-DdMawAbA.js";import"./ai-message-thread-BTQOrl01.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-m-J6qff4.js";import"./base-Vz5TpuLf.js";import"./query-assigned-elements-D58BN_iA.js";import"./ref-gqbHHNDL.js";import"./class-map-3MfCNIMv.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BUXTIceu.js";import"./ai-spinner-C3qn9KL4.js";import"./tooltip-BN6ykjCH.js";import"./overlay-CXUi99Tk.js";import"./ai-chat-header-CGOGG-5L.js";import"./ai-icon-CP9i2Cpb.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Dm2BpTUo.js";import"./ai-dropdown-menu-DLKybbGT.js";import"./if-defined-B5NripEj.js";import"./popover-BOdtoD-p.js";import"./ai-dropdown-menu-item-B_Azgb1x.js";import"./ai-modal-DksJlSAZ.js";import"./ai-agent-info-BeSXdOK1.js";import"./ai-agent-selector-z71-_fRl.js";import"./ai-chat-interface-DU-8prit.js";import"./ai-file-picker-DR6272NG.js";import"./ai-prompt-CVWOOp1o.js";import"./ai-suggestions-Do0WGkA3.js";import"./ai-voice-input-BdjMmbMP.js";import"./ai-response-message-toolbar-CoMn0R4X.js";import"./ai-empty-state-CC0I3JbI.js";import"./ai-error-message-CIRMabRz.js";import"./ai-response-message-DUDeek9e.js";import"./ai-thinking-indicator-Mkc_eRPF.js";import"./ai-user-message-CNX0X0qG.js";import"./ai-user-message-toolbar-v11QQggR.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const W=["Demo"];export{e as Demo,W as __namedExportsOrder,V as default};
