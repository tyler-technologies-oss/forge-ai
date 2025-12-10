import{x as i}from"./iframe-BvshHYB0.js";import{M as s}from"./mock-adapter-_zUjDDpK.js";import"./ai-threads-D0WUyp2w.js";import"./ai-chatbot-B7Z7xjis.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CNz_AyTb.js";import"./state-FSnMQzDC.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-DIEFCEQ3.js";import"./class-map-DzVkuVsC.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CUqHPw_A.js";import"./tooltip-BLcIYD8P.js";import"./overlay-C3UXNy6v.js";import"./ai-chat-header-DxlSF58Q.js";import"./ai-icon-JVxXKY6C.js";import"./ai-gradient-container-DRyx2Qae.js";import"./ai-dropdown-menu-C8cHPWF5.js";import"./if-defined-CKxQpWKL.js";import"./popover-D84T01xy.js";import"./ai-agent-info-DdvfNUef.js";import"./ai-chat-interface-BwBuglsn.js";import"./ai-empty-state-BcCpNoNS.js";import"./ai-error-message-DRrYoYzb.js";import"./ai-file-picker-G-rr2L71.js";import"./ai-prompt-DCTsZSJT.js";import"./ai-response-message-DtUK7Bbr.js";import"./ai-actions-toolbar-Bdiw5-1B.js";import"./ai-suggestions-DZdce_pM.js";import"./ai-thinking-indicator-BWTheSnz.js";import"./ai-user-message-CDPeWUct.js";import"./ai-voice-input-B-7XT_L_.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},enableFileUpload:{control:{type:"boolean"},description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{enableFileUpload:!1,placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const Y=["Demo"];export{t as Demo,Y as __namedExportsOrder,R as default};
