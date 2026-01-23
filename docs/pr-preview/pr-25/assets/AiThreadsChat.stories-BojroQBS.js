import{x as i}from"./iframe-C3YYcVRv.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-DeKdIGcg.js";import"./ai-chatbot-C7CbcXJx.js";import"./ai-message-thread-wm8WELff.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DMaiXm-7.js";import"./base-CLWV4m-H.js";import"./query-assigned-elements-BHtcriMW.js";import"./ref-g0g529Cf.js";import"./class-map-DU4w5fyi.js";import"./when-CI7b_ccM.js";import"./ai-attachment-RDd-LqSt.js";import"./ai-spinner-CntCam-A.js";import"./tooltip-_ulj50Ws.js";import"./overlay-BSPbhwt4.js";import"./ai-chat-header-C9QBBXHf.js";import"./ai-icon-BLtvqwTT.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-lac1NJkI.js";import"./ai-dropdown-menu-BPfYXyXG.js";import"./if-defined-CwqwrW_-.js";import"./popover-CJ_pZlwr.js";import"./ai-dropdown-menu-item-TLfVl2t5.js";import"./ai-modal-CrMrk9kr.js";import"./ai-agent-info-DG7FThtr.js";import"./ai-chat-interface-Rs5-N-WI.js";import"./ai-file-picker-DhVEtNbF.js";import"./ai-prompt-CTmzm4IH.js";import"./ai-suggestions-BOitUrOY.js";import"./ai-voice-input-B8KIHFfE.js";import"./ai-actions-toolbar-BJ9U6tsM.js";import"./ai-empty-state-C1t6qlfm.js";import"./ai-error-message-CCciXfFq.js";import"./ai-response-message-Dwvt3HvE.js";import"./ai-thinking-indicator-K0TpgBUh.js";import"./ai-user-message-DVlwgjgx.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
