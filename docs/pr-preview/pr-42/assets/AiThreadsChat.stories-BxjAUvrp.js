import{x as i}from"./iframe-CKPI_308.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-CtbRJ-8t.js";import"./ai-chatbot-DGPLVWeS.js";import"./ai-message-thread-cdSanomM.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BuCxLf5n.js";import"./base-bof8o-8k.js";import"./query-assigned-elements-Rui0iODg.js";import"./ref-lKoI05CQ.js";import"./class-map-CHGzKPQj.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CjPYT8Tw.js";import"./ai-spinner-BZZhAA6W.js";import"./tooltip-DJR_82Wi.js";import"./overlay-XrlyjpJu.js";import"./ai-chat-header-BHupwfSf.js";import"./ai-icon-DpW3EXlZ.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DRUY3yZl.js";import"./ai-dropdown-menu-CxEYG79E.js";import"./if-defined-CpXbPat2.js";import"./popover--ykzdfV_.js";import"./ai-dropdown-menu-item-C3HoL403.js";import"./ai-modal-CdbgQVev.js";import"./ai-agent-info-ZiU_dd-C.js";import"./ai-agent-selector-BBNe2Ufj.js";import"./ai-chat-interface-BhTtgfJb.js";import"./ai-file-picker-BR7KXE3g.js";import"./ai-prompt-B4hirhPc.js";import"./ai-suggestions-BS3kwy8F.js";import"./ai-voice-input-BWejCngr.js";import"./ai-response-message-toolbar-ClNKrv79.js";import"./ai-empty-state-Dlol8ESn.js";import"./ai-error-message-Zfr8anHP.js";import"./ai-response-message-EImldB8F.js";import"./ai-thinking-indicator-D8j2v1Dl.js";import"./ai-user-message-DarRPFKK.js";import"./ai-user-message-toolbar-B5DVBNGu.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
