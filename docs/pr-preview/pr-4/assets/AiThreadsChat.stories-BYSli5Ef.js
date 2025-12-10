import{x as i}from"./iframe-zSBoEOSS.js";import{M as s}from"./mock-adapter-_zUjDDpK.js";import"./ai-threads-DhxBXnYp.js";import"./ai-chatbot-Bby3dNb0.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DCTSgVUY.js";import"./state-BoONYIrG.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-CITA1go2.js";import"./class-map-DqAkA70d.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-JzUT3HX1.js";import"./tooltip-DIGI7x-B.js";import"./overlay-Cih-ZuAq.js";import"./ai-chat-header-DbbQTYxb.js";import"./ai-icon-NRXA4-Wc.js";import"./ai-gradient-container-CEFUaiWO.js";import"./ai-dropdown-menu-BSGrBZTr.js";import"./if-defined-Dj2bLt0A.js";import"./popover-CZIkQHzr.js";import"./ai-agent-info-sCHIYRDf.js";import"./ai-chat-interface-DYQJRx7V.js";import"./ai-empty-state-qtlNX_l8.js";import"./ai-error-message-os8NwKhf.js";import"./ai-file-picker-DoeQiw8I.js";import"./ai-prompt-NiIsffi9.js";import"./ai-response-message-aXY8vI5t.js";import"./ai-actions-toolbar-BziRl7YM.js";import"./ai-suggestions-ux561B2E.js";import"./ai-thinking-indicator-gBgRzYej.js";import"./ai-user-message-DUCnPPcc.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",N={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},enableFileUpload:{control:{type:"boolean"},description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{enableFileUpload:!1,placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${e("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot
            .adapter=${r}
            ?enable-file-upload=${o.enableFileUpload}
            placeholder=${o.placeholder}
            @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-disconnected=${e("forge-ai-chatbot-disconnected")}
            @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${e("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${e("forge-ai-chatbot-error")}
            @forge-ai-chatbot-clear=${e("forge-ai-chatbot-clear")}
            @forge-ai-chatbot-info=${e("forge-ai-chatbot-info")}>
          </forge-ai-chatbot>
        </forge-ai-threads>
      </div>
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const R=["Demo"];export{t as Demo,R as __namedExportsOrder,N as default};
