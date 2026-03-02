import{x as i}from"./iframe-BNZmS7a2.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-BB6vVUzJ.js";import"./ai-chatbot-BAjtXZlK.js";import"./ai-message-thread-Dwe_2y-M.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CemaUf82.js";import"./base-ByPPNGkD.js";import"./query-assigned-elements-CLLLsuRC.js";import"./ref-CIwV2gfC.js";import"./class-map-CrqGH--Q.js";import"./when-CI7b_ccM.js";import"./ai-attachment-VBaVnCYt.js";import"./ai-spinner-DkrmBM4v.js";import"./tooltip-CD8R2_QB.js";import"./overlay-DsvNMFeA.js";import"./ai-chat-header-BXD1QT3e.js";import"./ai-icon-D5jFbeiA.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Dzzz1TqC.js";import"./ai-dropdown-menu-pFPXdEUe.js";import"./if-defined-GSGM5fiE.js";import"./popover-CMlay6oc.js";import"./ai-dropdown-menu-item-D6ki98BQ.js";import"./ai-modal-BPEwfklS.js";import"./ai-agent-info-Dixpn5tb.js";import"./ai-agent-selector-BSDVRAjl.js";import"./ai-chat-interface-BFJVsIfn.js";import"./ai-file-picker-BqeNMI0J.js";import"./ai-prompt-B_5ApUo5.js";import"./ai-suggestions-7F7Pn8Mb.js";import"./ai-voice-input-DLiVSYmf.js";import"./ai-response-message-toolbar-BrRJFWRE.js";import"./ai-empty-state-C29soh7z.js";import"./ai-error-message-CMHJY_8l.js";import"./ai-response-message-B0VnS0Bz.js";import"./ai-thinking-indicator-Dp1WBmhC.js";import"./ai-user-message-CS9szT8h.js";import"./ai-user-message-toolbar-b_DHmxtZ.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
