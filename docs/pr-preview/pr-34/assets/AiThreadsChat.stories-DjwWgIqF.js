import{x as i}from"./iframe-Dx6l1SA4.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-C9IWk0r-.js";import"./ai-chatbot-COgaElg7.js";import"./ai-message-thread-BjssgFuV.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DkEvHAKu.js";import"./base-Bow49_Z0.js";import"./query-assigned-elements-DNoUv3V4.js";import"./ref-mZqTVAEb.js";import"./class-map-eYU_TGy6.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B0KTFpAl.js";import"./ai-spinner-BeToFEfd.js";import"./tooltip-D50irp9f.js";import"./overlay-yyAxCjJ5.js";import"./ai-chat-header-CBABIfu3.js";import"./ai-icon-CbSBUN4P.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-2XfG5chD.js";import"./ai-dropdown-menu-ifaVSjHF.js";import"./if-defined-BjQmecEO.js";import"./popover-C0ASn7-B.js";import"./ai-dropdown-menu-item-sSrEMkZM.js";import"./ai-modal-SAAsKYn6.js";import"./ai-agent-info-gQzNICT1.js";import"./ai-agent-selector-B2UY10kA.js";import"./ai-chat-interface-C00exD71.js";import"./ai-file-picker-DXYb-7mk.js";import"./ai-prompt-K7IqenHZ.js";import"./ai-suggestions-JcmO8FFj.js";import"./ai-voice-input-Cm6rVGrP.js";import"./ai-response-message-toolbar-Ben8eNi2.js";import"./ai-empty-state-BeoExBmr.js";import"./ai-error-message-BUrX7qqA.js";import"./ai-response-message-B4_k2yQc.js";import"./ai-thinking-indicator-9JzkHips.js";import"./ai-user-message-BdbD0vY7.js";import"./ai-user-message-toolbar-Dj4Dovyo.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
