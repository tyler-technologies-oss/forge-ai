import{x as i}from"./iframe-BIzRH6t4.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-BeSCEPH1.js";import"./ai-chatbot-base-BZ9oJPrI.js";import"./ai-chatbot-uyVl8Gqp.js";import"./ai-message-thread-CGDDLfv4.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Di18529Q.js";import"./base-BMdqYILz.js";import"./query-assigned-elements-wUyeqP-8.js";import"./ref-BmPYxnWv.js";import"./class-map-CFFvMCmh.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Dr4W2mPn.js";import"./ai-spinner-U9YbH1x8.js";import"./tooltip-ChRjzBsg.js";import"./overlay-C0lmVdl7.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-CwCHWg-u.js";import"./ai-icon-CzgRsVQt.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BSNIQLT0.js";import"./ai-dropdown-menu-Dak-pN-L.js";import"./if-defined-C7dB1jXR.js";import"./popover-AP2Bc3yZ.js";import"./query-assigned-nodes-CFZWE20k.js";import"./ai-dropdown-menu-item-DhNKXqT-.js";import"./ai-modal-BRtDm9Cm.js";import"./ai-agent-info-BP3DjZnN.js";import"./ai-agent-selector-DklQc62T.js";import"./ai-chat-interface-CBNGncWi.js";import"./ai-file-picker-vSSYY0RW.js";import"./ai-prompt-BDwakLV3.js";import"./ai-suggestions-woSSAlXW.js";import"./ai-voice-input-CPQ79osP.js";import"./ai-response-message-toolbar-B-TRDbaF.js";import"./ai-empty-state-Cr-A7JcZ.js";import"./ai-error-message-COCcW7vp.js";import"./ai-response-message-BB79E7zm.js";import"./ai-thinking-indicator-DrkBar7n.js";import"./ai-user-message-CuTafb8G.js";import"./ai-user-message-toolbar-BF1pKJUo.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
