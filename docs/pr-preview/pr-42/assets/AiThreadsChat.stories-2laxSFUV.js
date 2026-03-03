import{x as i}from"./iframe-CKzw9gl8.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-i5kFKzLh.js";import"./ai-chatbot-Isdq0dmj.js";import"./ai-message-thread-BA2-ruIS.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CUFSCCFK.js";import"./base-BN50TGFm.js";import"./query-assigned-elements-D56_08aJ.js";import"./ref-DxATmgz5.js";import"./class-map-D8ct3ge3.js";import"./when-CI7b_ccM.js";import"./ai-attachment-_O6Nmifl.js";import"./ai-spinner-BuemFxkq.js";import"./tooltip-CfsrwqTD.js";import"./overlay-BvP0IBmd.js";import"./ai-chat-header-DwRiJKDI.js";import"./ai-icon-WUiTqspi.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-C-k2v9n8.js";import"./ai-dropdown-menu-B968PLJn.js";import"./if-defined-BsPuRM3B.js";import"./popover-HPSB2kjM.js";import"./ai-dropdown-menu-item-D34twNsD.js";import"./ai-modal-BqEJG5_J.js";import"./ai-agent-info-DXBeS5c8.js";import"./ai-agent-selector-D9z1tFLu.js";import"./ai-chat-interface-B6jTbQfq.js";import"./ai-file-picker-D5ATSQsg.js";import"./ai-prompt-NF-36HYN.js";import"./ai-suggestions-tFLpk76Y.js";import"./ai-voice-input-B5iXwUBb.js";import"./ai-response-message-toolbar-CUDgs2nu.js";import"./ai-empty-state-CTTu9LDg.js";import"./ai-error-message-GCNM1-pu.js";import"./ai-response-message-BkKRfSea.js";import"./ai-thinking-indicator-CIiItsaS.js";import"./ai-user-message-BxLZu0V7.js";import"./ai-user-message-toolbar-B8KhjKBg.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
