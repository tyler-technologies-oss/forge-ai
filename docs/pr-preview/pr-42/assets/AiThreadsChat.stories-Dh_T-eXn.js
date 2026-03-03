import{x as i}from"./iframe-BebqAyXr.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-DbSQQFcj.js";import"./ai-chatbot-CNAUG10Q.js";import"./ai-message-thread-CmbF8nQD.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Uv7HOIGR.js";import"./base-CYYBI5kr.js";import"./query-assigned-elements-BlK_osnq.js";import"./ref-Ck_2AgT9.js";import"./class-map-Dr1--Sas.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DMaPSaeJ.js";import"./ai-spinner-ChT3la29.js";import"./tooltip-K5g5KnQf.js";import"./overlay-CzTjgle8.js";import"./ai-chat-header-C4u4aw0O.js";import"./ai-icon-CiVkzgZe.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B2-AcCTs.js";import"./ai-dropdown-menu-D_cX_paQ.js";import"./if-defined-BYTAvEhh.js";import"./popover-ksk7tC7Z.js";import"./ai-dropdown-menu-item-UB4Xe-SU.js";import"./ai-modal-94Hs0kyY.js";import"./ai-agent-info-DTlL_ty5.js";import"./ai-agent-selector-DSoXFno6.js";import"./ai-chat-interface-BFD33dh0.js";import"./ai-file-picker-DCey7HRO.js";import"./ai-prompt-DpFFbeHK.js";import"./ai-suggestions-BSz4k1-w.js";import"./ai-voice-input-C4r-2da2.js";import"./ai-response-message-toolbar-B1UxLoOC.js";import"./ai-empty-state-RpjXyrSt.js";import"./ai-error-message-DeXJTyuc.js";import"./ai-response-message-CQH_N0tw.js";import"./ai-thinking-indicator-BZnsFi6R.js";import"./ai-user-message-BXnsoadv.js";import"./ai-user-message-toolbar-BTh23wzP.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
