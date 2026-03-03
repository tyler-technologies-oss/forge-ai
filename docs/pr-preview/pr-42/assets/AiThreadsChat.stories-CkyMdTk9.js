import{x as i}from"./iframe-D-P2ZnM9.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-CvyOf31o.js";import"./ai-chatbot-IKra5Doe.js";import"./ai-message-thread-CMLGTHFw.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-WLAZzCmz.js";import"./base-D6Wr1b2_.js";import"./query-assigned-elements-Bs-Z5SZs.js";import"./ref-55OrgSvh.js";import"./class-map-CWIybCBS.js";import"./when-CI7b_ccM.js";import"./ai-attachment-m2DD0qI1.js";import"./ai-spinner-D1nt4fhW.js";import"./tooltip-ZAQIF6_u.js";import"./overlay-Cy4jqGko.js";import"./ai-chat-header-CkxWiZUg.js";import"./ai-icon-25M8T6OF.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-C8DyuCXl.js";import"./ai-dropdown-menu-0MpIdNpD.js";import"./if-defined-CS3BzuDH.js";import"./popover-CPldyS3b.js";import"./ai-dropdown-menu-item-CAXGqHqB.js";import"./ai-modal-C8nu7vyR.js";import"./ai-agent-info-Cx7qrbQP.js";import"./ai-agent-selector-CJXwkA5u.js";import"./ai-chat-interface-BsQ21aFT.js";import"./ai-file-picker-BGB1W9RT.js";import"./ai-prompt-LFg4wUiW.js";import"./ai-suggestions-B10wQCx-.js";import"./ai-voice-input-BYHNPCEu.js";import"./ai-response-message-toolbar-Chbg9-AI.js";import"./ai-empty-state-BDSIfgc2.js";import"./ai-error-message-Ca9akEh8.js";import"./ai-response-message-CiGszp6M.js";import"./ai-thinking-indicator-yirzdIl9.js";import"./ai-user-message-B5IvSCJE.js";import"./ai-user-message-toolbar-CXTSaF_X.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
