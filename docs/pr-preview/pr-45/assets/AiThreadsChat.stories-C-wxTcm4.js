import{x as i}from"./iframe-BRsdX7CS.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-B0W2z5jV.js";import"./ai-chatbot-base-CYiWhc0S.js";import"./ai-chatbot-Cx7E6Rhi.js";import"./ai-message-thread-DdXc45EH.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-A8EomY7a.js";import"./base-DhO5RY4Q.js";import"./query-assigned-elements-CAC9wX3O.js";import"./ref-HuKCV8QP.js";import"./class-map-BuZuxNSz.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BxS8pnAZ.js";import"./ai-spinner-D5ia96zE.js";import"./tooltip-BJ5VCnzh.js";import"./overlay-Cm1tnHrg.js";import"./ai-chat-header-CXPdeikm.js";import"./ai-icon-DKG0q2iS.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DQuRMyX8.js";import"./ai-dropdown-menu-DmPGyL-c.js";import"./if-defined-D4KQxt1K.js";import"./popover-EyG9jO4n.js";import"./ai-dropdown-menu-item-I893qG2W.js";import"./ai-modal-By-z2sPW.js";import"./ai-agent-info-CGl7PCN5.js";import"./ai-agent-selector-iwEXQS-v.js";import"./ai-chat-interface-C_Lz_HUu.js";import"./ai-file-picker-D_gQq_oN.js";import"./ai-prompt-CpR9erLx.js";import"./ai-suggestions-Duk1XVtp.js";import"./ai-voice-input-LSaHOcVF.js";import"./ai-response-message-toolbar-X247-bT6.js";import"./ai-empty-state-VK-76YJE.js";import"./ai-error-message-DJsckap7.js";import"./ai-response-message-nuxmPpJB.js";import"./ai-thinking-indicator-CGEE2pGZ.js";import"./ai-user-message--HhTZHDm.js";import"./ai-user-message-toolbar-ELOr43YF.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
