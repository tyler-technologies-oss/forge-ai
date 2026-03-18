import{x as i}from"./iframe-D3pErfQx.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-lEzwKnBo.js";import"./ai-chatbot-base-Dt8_T3_b.js";import"./ai-chatbot-GOEwloF2.js";import"./ai-message-thread-D0jE1HUp.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BeBNLgIk.js";import"./base-DkBR9i0N.js";import"./query-assigned-elements-C-3kek_S.js";import"./ref-B64WPUXy.js";import"./class-map-ChkbNi-Y.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Cx1rtWdO.js";import"./ai-spinner-DA8VMGWG.js";import"./tooltip-C7NUuCl9.js";import"./overlay-C1PEBxZv.js";import"./ai-chat-header-CBnDNx-V.js";import"./ai-icon-B1C0mYM5.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DUE5MT-M.js";import"./ai-dropdown-menu-C1Cj4lYc.js";import"./if-defined-B3RdSpai.js";import"./popover-DHr3MqJw.js";import"./ai-dropdown-menu-item-B4psLtuz.js";import"./ai-modal-BAo4MsNn.js";import"./ai-agent-info-BowPR8XO.js";import"./ai-agent-selector-BZLxCMy6.js";import"./ai-chat-interface-D1VEZpRH.js";import"./ai-file-picker-BSGr1UtO.js";import"./ai-prompt-BpPHZe0f.js";import"./ai-suggestions-DY-kyJob.js";import"./ai-voice-input-4BKu-T-d.js";import"./ai-response-message-toolbar-x1k-l7S6.js";import"./ai-empty-state-_DQw-6UU.js";import"./ai-error-message-BYRkhIQA.js";import"./ai-response-message-D9SFE0ch.js";import"./ai-thinking-indicator-DH56QppJ.js";import"./ai-user-message-NWCULZA8.js";import"./ai-user-message-toolbar-BWJnAZ-D.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const W=["Demo"];export{e as Demo,W as __namedExportsOrder,V as default};
