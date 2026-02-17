import{x as i}from"./iframe-BE0vYhhu.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-DDaUa3Gp.js";import"./ai-chatbot-Ba5xPMZv.js";import"./ai-message-thread-G7IWXvIc.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BKOuPZs4.js";import"./base-Bbyp53ba.js";import"./query-assigned-elements-CWOByZt9.js";import"./ref-OntQz8h1.js";import"./class-map-CksRTQk-.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BrzUH0A6.js";import"./ai-spinner-DzDLaiFr.js";import"./tooltip-D2IL7bGB.js";import"./overlay-CCS0-No4.js";import"./ai-chat-header-agTb7fuF.js";import"./ai-icon-CJ1BXyb-.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CjjGylep.js";import"./ai-dropdown-menu-kPp79m9N.js";import"./if-defined-B8g6U1y_.js";import"./popover-LtWfr9rD.js";import"./ai-dropdown-menu-item-Bk73Beez.js";import"./ai-modal-vRNrhunc.js";import"./ai-agent-info-Jynx2Jxd.js";import"./ai-agent-selector-B9EDuWle.js";import"./ai-chat-interface-DJopIrR_.js";import"./ai-file-picker-BpI_tK24.js";import"./ai-prompt-2dQi7aqP.js";import"./ai-suggestions-D913ntDt.js";import"./ai-voice-input-BXoGT79c.js";import"./ai-response-message-toolbar-Bs1WAqLR.js";import"./ai-empty-state-DNPp5zeb.js";import"./ai-error-message-sBx0ju0m.js";import"./ai-response-message-UHBUi-Br.js";import"./ai-thinking-indicator-CHVuyyBC.js";import"./ai-user-message-CVIRWmjq.js";import"./ai-user-message-toolbar-DAxEUnwV.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
