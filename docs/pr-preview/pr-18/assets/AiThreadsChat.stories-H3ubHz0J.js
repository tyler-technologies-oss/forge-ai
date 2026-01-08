import{x as i}from"./iframe-D_DcwE26.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-8Nl603X4.js";import"./ai-chatbot-Dw1hHikZ.js";import"./ai-message-thread-B5covmP1.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CAONy3qu.js";import"./state-B7kTAA3S.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-CwFCYcC1.js";import"./class-map-BfamIo2g.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Cq5ltGJQ.js";import"./ai-spinner-pIXMEem6.js";import"./tooltip-Cpj0YucU.js";import"./query-BpjciUlk.js";import"./overlay-Bsbr97tW.js";import"./ai-chat-header-BtxGrnSd.js";import"./ai-icon-CKYlSWp5.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D87r55YH.js";import"./ai-dropdown-menu-DMWTofYs.js";import"./ai-dropdown-menu-item-bsXHM7pO.js";import"./popover-BfX2qdWe.js";import"./ai-modal-D4MBonB8.js";import"./ai-agent-info-Bgn1IXI-.js";import"./ai-chat-interface-CYhcTv7e.js";import"./ai-file-picker-B26OPvbb.js";import"./ai-prompt-IJMd6eDs.js";import"./ai-suggestions-DkFFdRyF.js";import"./ai-voice-input-3kOf7Xj2.js";import"./ai-empty-state-BNIUsfbl.js";import"./ai-error-message-Drnv4r6z.js";import"./ai-response-message-0tpLRGV8.js";import"./ai-actions-toolbar-D-hbv2dO.js";import"./ai-thinking-indicator-CK5GI__u.js";import"./ai-user-message-CCKJPXum.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
