import{x as i}from"./iframe-Bgc2upo1.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-zV6kOvKJ.js";import"./ai-chatbot-Czl7yYyx.js";import"./ai-message-thread-Brhe_qG_.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-a-eTBmEy.js";import"./base-NR2YKDt3.js";import"./query-assigned-elements-C-GUNlV-.js";import"./ref-Tcg_P52F.js";import"./class-map-BdpBTpsS.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CAE2-tRQ.js";import"./ai-spinner-Ct3RWHRL.js";import"./tooltip-7sc8BDLw.js";import"./overlay-DfAu0KiV.js";import"./ai-chat-header-BElXWquB.js";import"./ai-icon-ciURyd9t.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CMIN9Oar.js";import"./ai-dropdown-menu-B1yRgZTJ.js";import"./if-defined-ChphoQ98.js";import"./popover-DWKnb5Xn.js";import"./ai-dropdown-menu-item-BQGemFtD.js";import"./ai-modal-BTGHR5ri.js";import"./ai-agent-info-CcmPSbZo.js";import"./ai-agent-selector-ClyPUR5S.js";import"./ai-chat-interface-D9NOeiO-.js";import"./ai-file-picker-BzN3GQ9P.js";import"./ai-prompt-CVvxwHt4.js";import"./ai-suggestions-DMj4Y3IJ.js";import"./ai-voice-input-DyvXZROI.js";import"./ai-response-message-toolbar-p_CDs3_S.js";import"./ai-empty-state-BGmNRuyP.js";import"./ai-error-message-CwG1hJwS.js";import"./ai-response-message-BJkNgGQz.js";import"./ai-thinking-indicator-BjNWbYCq.js";import"./ai-user-message-CEWllFVM.js";import"./ai-user-message-toolbar-CD41Nmcs.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
