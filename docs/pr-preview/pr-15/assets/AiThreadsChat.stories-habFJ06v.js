import{x as i}from"./iframe-CRcLxRdn.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-xSYUzkmp.js";import"./ai-chatbot-KoNYdnDH.js";import"./ai-message-thread-D-zAv6N6.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DWmMKgh8.js";import"./state-BeZYk2iF.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-eOfpKTvc.js";import"./class-map-DT5IuCxG.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BqEj6kzP.js";import"./tooltip-CTwx1LOQ.js";import"./query-BpjciUlk.js";import"./overlay-Dcs8UVlI.js";import"./ai-chat-header-BbR1kS1R.js";import"./ai-icon-M6Ifp8f1.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BfsLzU7h.js";import"./ai-dropdown-menu-D487dUKw.js";import"./if-defined-BZIKZu84.js";import"./popover-Fd_1fdD5.js";import"./ai-modal-C9HMKNYE.js";import"./ai-agent-info-DoVOb_FK.js";import"./ai-chat-interface-CkjeIT-a.js";import"./ai-file-picker-DT05cz4i.js";import"./ai-prompt-DHREqJBd.js";import"./ai-suggestions-D0-h_MPD.js";import"./ai-voice-input-uKT2e0oI.js";import"./ai-empty-state-CwX7EASV.js";import"./ai-error-message-BM2glOOb.js";import"./ai-response-message-Fb45wDVU.js";import"./ai-actions-toolbar-RGLrbiqN.js";import"./ai-thinking-indicator-DkU_IBfz.js";import"./ai-user-message-Dgf4ncJ-.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const J=["Demo"];export{e as Demo,J as __namedExportsOrder,z as default};
