import{x as i}from"./iframe-DB8_A1GE.js";import{M as p}from"./mock-adapter-BEFlJ0Fr.js";import"./ai-threads-08e7BGAi.js";import"./ai-chatbot-DHGIJN1k.js";import"./ai-message-thread-CoxwnoRy.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-C-KeJI1U.js";import"./state-D75fVejJ.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-B9R9y69a.js";import"./class-map-DvdlqBmB.js";import"./when-CI7b_ccM.js";import"./ai-attachment-D1UYKMLL.js";import"./ai-spinner-DhEUcjme.js";import"./tooltip-gApHeCtc.js";import"./query-BpjciUlk.js";import"./overlay--2bcBOQq.js";import"./ai-chat-header-BS_C9768.js";import"./ai-icon-BUIvT9ZU.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DEgVF0QC.js";import"./ai-dropdown-menu-BLK9Bbew.js";import"./ai-dropdown-menu-item-Dbel1Xab.js";import"./popover-B6RxkQXy.js";import"./ai-modal-CGDSEJqc.js";import"./ai-agent-info-CME2kgJ1.js";import"./ai-chat-interface-DrG3b69B.js";import"./ai-file-picker-BpHwu0fA.js";import"./ai-prompt-DBmmn_av.js";import"./ai-suggestions-YRyc_Qr3.js";import"./ai-voice-input-JedvGf-h.js";import"./ai-empty-state-DlmkdOEq.js";import"./ai-error-message-ctbRUZsS.js";import"./ai-response-message-BN_q1hh1.js";import"./ai-actions-toolbar-Bb3aqG5r.js";import"./ai-thinking-indicator-DDI9V_-F.js";import"./ai-user-message-COSyuz7c.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
