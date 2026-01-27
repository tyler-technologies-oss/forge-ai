import{x as i}from"./iframe-DztW-vaP.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-DB_JQex_.js";import"./ai-chatbot-CPd3AxGO.js";import"./ai-message-thread-QUoipRCx.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DOwBPA7P.js";import"./base-DtdLByOV.js";import"./query-assigned-elements-BqXM2k65.js";import"./ref-BBlojXKf.js";import"./class-map-CzRmM1xG.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CJC5eroR.js";import"./ai-spinner-mm8BQ3iX.js";import"./tooltip-DEOmqn3U.js";import"./overlay-BowostL3.js";import"./ai-chat-header-4j4yZD6y.js";import"./ai-icon-Dh9bY6yz.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BYwlYIGY.js";import"./ai-dropdown-menu-B4_sUUYl.js";import"./if-defined-BV3MbJfm.js";import"./popover-BvxrMkLv.js";import"./ai-dropdown-menu-item-DYzWlrBz.js";import"./ai-modal-D_k97OKG.js";import"./ai-agent-info-VkyQMXyK.js";import"./ai-agent-selector-B_tWtJ-x.js";import"./ai-chat-interface-CiB9SDM4.js";import"./ai-file-picker-BP7mE1wV.js";import"./ai-prompt-DNjVLd0U.js";import"./ai-suggestions-DTLPolmw.js";import"./ai-voice-input-iO974lVC.js";import"./ai-response-message-toolbar-CtWaMnEQ.js";import"./ai-empty-state-Dpg1bo5C.js";import"./ai-error-message-KvtXFDhd.js";import"./ai-response-message-BNbFUPLa.js";import"./ai-thinking-indicator-p7tkcZFJ.js";import"./ai-user-message-wGxAW-3z.js";import"./ai-user-message-toolbar-QH8xyN9n.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
