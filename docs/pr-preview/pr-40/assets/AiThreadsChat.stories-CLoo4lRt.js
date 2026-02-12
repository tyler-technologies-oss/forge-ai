import{x as i}from"./iframe-B0MoPG8h.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-Cv3q2Ql9.js";import"./ai-chatbot-i12LJby3.js";import"./ai-message-thread-C_Y8yhF5.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DjXMEGxG.js";import"./base-24nMPJpH.js";import"./query-assigned-elements-CLsBl_vR.js";import"./ref-xJdD2TbP.js";import"./class-map-CHkWOg_P.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BgcEm_g_.js";import"./ai-spinner-DCu28kOF.js";import"./tooltip-zQmDTxVe.js";import"./overlay-CV6BPj3A.js";import"./ai-chat-header-DNyQO4PY.js";import"./ai-icon-BbWPm1ca.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-QhXLycSL.js";import"./ai-dropdown-menu-6GlD_AAn.js";import"./if-defined-CapsZhD3.js";import"./popover-9-cs5a5D.js";import"./ai-dropdown-menu-item-CZT-wS16.js";import"./ai-modal-Bxsj_k1Z.js";import"./ai-agent-info-BEG8mHrH.js";import"./ai-agent-selector-BCP8NoQp.js";import"./ai-chat-interface-Da5a3BAn.js";import"./ai-file-picker-Be6rTxA9.js";import"./ai-prompt-Bl-D3r_N.js";import"./ai-suggestions-BqAmHGX9.js";import"./ai-voice-input-C_9DHn9K.js";import"./ai-response-message-toolbar-DZqigJHo.js";import"./ai-empty-state-_XB0aX1q.js";import"./ai-error-message-Bt-nBPx4.js";import"./ai-response-message-BtaPXdXw.js";import"./ai-thinking-indicator-CgdFkbFt.js";import"./ai-user-message-BZPcX_Yo.js";import"./ai-user-message-toolbar-xR3Y7lzG.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
