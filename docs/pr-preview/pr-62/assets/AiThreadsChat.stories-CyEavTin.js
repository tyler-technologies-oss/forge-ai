import{x as i}from"./iframe-D5E-uNG9.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-DduMyIoe.js";import"./ai-chatbot-base-DJ55e1vI.js";import"./ai-chatbot-q5qW790a.js";import"./ai-message-thread-waWmkrxg.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CdeMDwTb.js";import"./base-DgZOs6XM.js";import"./query-assigned-elements-CzRDbfUk.js";import"./ref-B_pzrLtq.js";import"./class-map-DFghohS0.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B6ruuAD0.js";import"./ai-spinner-YYQ0fXwh.js";import"./tooltip-C9yTqkLz.js";import"./overlay-BtQU2IAY.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-CZQ1O2Gv.js";import"./ai-icon-DEmR6vZB.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CGZsVwhn.js";import"./ai-dropdown-menu-DS_0TFg4.js";import"./if-defined-9eYkaeTI.js";import"./popover-3QuQ29Wx.js";import"./query-assigned-nodes-DIJQwy-a.js";import"./ai-dropdown-menu-item-qoPGhiyL.js";import"./ai-modal-CTKMOMgH.js";import"./ai-agent-info-SAOd6GG7.js";import"./ai-agent-selector-Cq3ICqob.js";import"./ai-chat-interface-CQWyXbH6.js";import"./ai-file-picker-BTIE7gMM.js";import"./ai-prompt-B9cdLsQW.js";import"./ai-suggestions-CvpwVngX.js";import"./ai-voice-input-B4lgc-Sy.js";import"./ai-response-message-toolbar-_BDmPtI7.js";import"./ai-empty-state-CzZkv9uf.js";import"./ai-error-message-7IGTl_0z.js";import"./ai-response-message-B-tDpcgG.js";import"./ai-thinking-indicator-BzJ7cQNq.js";import"./ai-user-message-BQFOLxqT.js";import"./ai-user-message-toolbar-CiSpx4W8.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["Demo"];export{e as Demo,Z as __namedExportsOrder,X as default};
