import{x as i}from"./iframe-Y4HhiJ4A.js";import{M as p}from"./mock-adapter-Hm3siCZ0.js";import"./ai-threads-C5PzEno7.js";import"./ai-chatbot-De6KDt7c.js";import"./ai-message-thread-Wd38ykuW.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-SIyljl7k.js";import"./state-BA2uRDxx.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-YK6433Cq.js";import"./class-map-6BoDHv5R.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DAkMxkH4.js";import"./ai-spinner-CXY3PWeQ.js";import"./tooltip-Dhv5Va5A.js";import"./query-BpjciUlk.js";import"./overlay-BQQVYIi4.js";import"./ai-chat-header-uzEo3bYZ.js";import"./ai-icon-BnfSveGF.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DvbTOfJN.js";import"./ai-dropdown-menu-DVvAvzCo.js";import"./ai-dropdown-menu-item-D-PJPb8V.js";import"./popover-DH3tV-95.js";import"./ai-modal-Xm2ZcdgM.js";import"./ai-agent-info-DA95mj4s.js";import"./ai-chat-interface-BDC45tYn.js";import"./ai-file-picker-CoqfxkHc.js";import"./ai-prompt-DAsbetDJ.js";import"./ai-suggestions-D-z0vqjw.js";import"./ai-voice-input-DPQiHvut.js";import"./ai-empty-state-CRCVtCdx.js";import"./ai-error-message-DPlpFSIu.js";import"./ai-response-message-j-bQGnhK.js";import"./ai-actions-toolbar-C39aOFya.js";import"./ai-thinking-indicator-DNqNCHmo.js";import"./ai-user-message-n6Va5WcD.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
