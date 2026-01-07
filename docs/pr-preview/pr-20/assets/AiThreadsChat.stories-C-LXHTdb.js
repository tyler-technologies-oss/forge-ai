import{x as i}from"./iframe-ZSJZT9AU.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-DhzBHGFg.js";import"./ai-chatbot-Zqgqtacs.js";import"./ai-message-thread-BqvCBNY8.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DA1UX5j1.js";import"./state-DGEiELV0.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DF0FTnmn.js";import"./class-map-C0XU_0cz.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CKlFIw_n.js";import"./ai-spinner-BeGeXxqx.js";import"./tooltip-DOiTGO6b.js";import"./query-BpjciUlk.js";import"./overlay-gUGZE80S.js";import"./ai-chat-header-Dqam9WSe.js";import"./ai-icon-YXLSpGdO.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BfJ6E2sT.js";import"./ai-dropdown-menu-i7Y_6mhV.js";import"./ai-dropdown-menu-item-BkrHaULK.js";import"./popover-Bya3eWRE.js";import"./ai-modal-D0UvMacu.js";import"./ai-agent-info-DqL-OXaA.js";import"./ai-chat-interface-CU-A8LiW.js";import"./ai-file-picker-BrPCdq4j.js";import"./ai-prompt-Cv_F_2cm.js";import"./ai-suggestions-oheB2Xgk.js";import"./ai-voice-input-CuoM9JrA.js";import"./ai-empty-state-b0ZC-zUP.js";import"./ai-error-message-DKPg4i3M.js";import"./ai-response-message-CWQEKoJd.js";import"./ai-actions-toolbar-Dkcy3WQ1.js";import"./ai-thinking-indicator-DGkP9Zu7.js";import"./ai-user-message-jUB3qwmn.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
