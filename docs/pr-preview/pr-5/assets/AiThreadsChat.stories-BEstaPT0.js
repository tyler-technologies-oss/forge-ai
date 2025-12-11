import{x as i}from"./iframe-C-oCfh6o.js";import{M as s}from"./mock-adapter-BN0uINtG.js";import"./ai-threads-DFLU1oYy.js";import"./ai-chatbot-BdfPIY0D.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DUo5ZXnR.js";import"./state-Ccn4xpoz.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-PSXe0bbM.js";import"./class-map-a8lvp7nX.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BwX9t-in.js";import"./tooltip-DbABNxiE.js";import"./overlay-x6nSTGMx.js";import"./ai-chat-header-D86kmPT2.js";import"./ai-icon-32LGqU7K.js";import"./ai-gradient-container-uPlRZFTv.js";import"./ai-dropdown-menu-Dnj3qKQ0.js";import"./if-defined-B5nqshDD.js";import"./popover-GGPN00iV.js";import"./ai-agent-info-C75yYRA3.js";import"./ai-chat-interface-o0uk4Qky.js";import"./ai-empty-state-CYzvJhVR.js";import"./ai-error-message-CFlAn7JV.js";import"./ai-file-picker-BqqanHl-.js";import"./ai-prompt-CGp-zJr5.js";import"./ai-response-message-Cltz1P-0.js";import"./ai-actions-toolbar-Du_QlMCq.js";import"./ai-suggestions-D-gdioVC.js";import"./ai-thinking-indicator-E6W2BR7T.js";import"./ai-user-message-DX9bkRNQ.js";import"./ai-voice-input-Dt1N-Q9y.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Y=["Demo"];export{e as Demo,Y as __namedExportsOrder,R as default};
