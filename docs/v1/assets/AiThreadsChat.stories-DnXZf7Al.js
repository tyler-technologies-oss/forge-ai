import{x as i}from"./iframe-BAxVbwLB.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-CUPWhC-T.js";import"./ai-chatbot-base-B2onOXFp.js";import"./ai-chatbot-BsLsE35M.js";import"./ai-message-thread-Bufh9m-M.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DkpCXdf_.js";import"./base-C1e8NJ0Y.js";import"./query-assigned-elements-m2KpB10p.js";import"./ref-CcZRiytj.js";import"./class-map-B51DPJ2K.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CIi5xMDN.js";import"./ai-spinner-b6_tr5nf.js";import"./tooltip-BStxRYAC.js";import"./overlay-8Vp-JEDj.js";import"./ai-chat-header-HrqPBIMw.js";import"./ai-icon-B_uoGP6H.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DFDk0utS.js";import"./ai-dropdown-menu-We-LH0e3.js";import"./if-defined-Ayq_1nsD.js";import"./popover-CPC1s2K4.js";import"./ai-dropdown-menu-item-DGLyOBT8.js";import"./ai-modal-aZVqWGor.js";import"./ai-agent-info-BtJPDXZz.js";import"./ai-agent-selector-B7I-n7_p.js";import"./ai-chat-interface-CQhMfsbQ.js";import"./ai-file-picker-BpVVljcs.js";import"./ai-prompt-DifHbBAf.js";import"./ai-suggestions-BQvxYIxG.js";import"./ai-voice-input-B8mN2FAM.js";import"./ai-response-message-toolbar-Chgp0T9e.js";import"./ai-empty-state-ChRpGkBB.js";import"./ai-error-message-CPj0s-t7.js";import"./ai-response-message-Conr04yl.js";import"./ai-thinking-indicator-BKmbXLkB.js";import"./ai-user-message-H8vMRGyB.js";import"./ai-user-message-toolbar-fBVaU1xF.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
