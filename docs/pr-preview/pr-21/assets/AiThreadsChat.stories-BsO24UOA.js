import{x as i}from"./iframe-BetLbKJY.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-D2kL0KLf.js";import"./ai-chatbot-C6HHRRvG.js";import"./ai-message-thread-B_6AA_gu.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BzsD8_K2.js";import"./state-BVsJZuhX.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-BodCzjdn.js";import"./class-map-BUOGnY9S.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DkWuK-5t.js";import"./ai-spinner-op63fl-V.js";import"./tooltip-CGBZ92Fl.js";import"./query-BpjciUlk.js";import"./overlay-Bog4jxJk.js";import"./ai-chat-header-CbCzSuic.js";import"./ai-icon-DbEIHcvn.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BVfEc3Hx.js";import"./ai-dropdown-menu-70D1iOXP.js";import"./ai-dropdown-menu-item-DE2nrYht.js";import"./popover-WNOam_O8.js";import"./ai-modal-m0_jBcv2.js";import"./ai-agent-info-bYXBkCR6.js";import"./ai-chat-interface-D-23HnpE.js";import"./ai-file-picker-CYBBUQMB.js";import"./ai-prompt-4QLZDvrW.js";import"./ai-suggestions-DvZvzFiN.js";import"./ai-voice-input-HbSiLi13.js";import"./ai-empty-state-BDv4b587.js";import"./ai-error-message-CZSNeaBZ.js";import"./ai-response-message-DWaKdQan.js";import"./ai-actions-toolbar-DvXSu0HK.js";import"./ai-thinking-indicator-CkzK1744.js";import"./ai-user-message-awQLjads.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
