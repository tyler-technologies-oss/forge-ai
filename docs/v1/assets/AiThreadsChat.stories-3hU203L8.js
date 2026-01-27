import{x as i}from"./iframe-CFGs3NmZ.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-CsMF1gqG.js";import"./ai-chatbot-BDMEYenN.js";import"./ai-message-thread-zBQqXPAw.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-C9Ge2RQo.js";import"./base-idDAIGqb.js";import"./query-assigned-elements-MbWOot4L.js";import"./ref-D5ijMg7U.js";import"./class-map-DWPXKVEM.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B-f0d4_F.js";import"./ai-spinner-CPm8ym02.js";import"./tooltip-DpzU-a6I.js";import"./overlay-Dp2pafiU.js";import"./ai-chat-header-2ySVtbEr.js";import"./ai-icon-DbSUDTPA.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DB8OloCM.js";import"./ai-dropdown-menu-0o0JpH30.js";import"./if-defined-BSze8p1m.js";import"./popover-Dm9pbetb.js";import"./ai-dropdown-menu-item-C1Un49Bc.js";import"./ai-modal-CxcraQmP.js";import"./ai-agent-info-BvTjPBxg.js";import"./ai-chat-interface-CmAFtZ0Z.js";import"./ai-file-picker-CTrebtgT.js";import"./ai-prompt-I_0rk-39.js";import"./ai-suggestions-DGii8F99.js";import"./ai-voice-input-dRqGQj_4.js";import"./ai-response-message-toolbar-d5ZfJ7hs.js";import"./ai-empty-state-B155du4A.js";import"./ai-error-message-BmGl4nsd.js";import"./ai-response-message-C8E2hq92.js";import"./ai-thinking-indicator-C9tsyiEC.js";import"./ai-user-message-DL3SEa9h.js";import"./ai-user-message-toolbar-DT-QDlaS.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
