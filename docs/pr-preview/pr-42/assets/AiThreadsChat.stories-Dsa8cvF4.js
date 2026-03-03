import{x as i}from"./iframe-ZhYW_EER.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-_lFrPJry.js";import"./ai-chatbot-Pojr87Qz.js";import"./ai-message-thread-Ccb5q3XW.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DHkf64Wo.js";import"./base-CqpAyAqn.js";import"./query-assigned-elements-IZclBzng.js";import"./ref-Qos0KfdX.js";import"./class-map-CRUOvWx1.js";import"./when-CI7b_ccM.js";import"./ai-attachment-qn4OMjdH.js";import"./ai-spinner-sHKtgra5.js";import"./tooltip-zVMquqZA.js";import"./overlay-DAiShLk5.js";import"./ai-chat-header-ZaoWSy3C.js";import"./ai-icon-BJfS8x_a.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-jDZDz7zj.js";import"./ai-dropdown-menu-DVP9SjFQ.js";import"./if-defined-DKc-o8-1.js";import"./popover-BubyXk27.js";import"./ai-dropdown-menu-item-D92Dbt6G.js";import"./ai-modal-CuJ2VpiI.js";import"./ai-agent-info-CBOtsnO7.js";import"./ai-agent-selector-BfPBtLM7.js";import"./ai-chat-interface-CiXFmtoj.js";import"./ai-file-picker-CRyDkLHJ.js";import"./ai-prompt-BseHe_hY.js";import"./ai-suggestions-D2tJNaYu.js";import"./ai-voice-input-CRaWq6za.js";import"./ai-response-message-toolbar-BBmHKiob.js";import"./ai-empty-state-C2-Gru8M.js";import"./ai-error-message-O3fkyJmK.js";import"./ai-response-message-D5-LFIl4.js";import"./ai-thinking-indicator-D64XROPO.js";import"./ai-user-message-CnLuyRwh.js";import"./ai-user-message-toolbar-CoKK4jQX.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
