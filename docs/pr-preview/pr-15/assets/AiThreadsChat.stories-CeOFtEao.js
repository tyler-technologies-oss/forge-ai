import{x as i}from"./iframe-DJqIFReq.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-CsckNivP.js";import"./ai-chatbot-DQRQ85ML.js";import"./ai-message-thread-BZJx7CNl.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BSDtbF_b.js";import"./state-M65rRrod.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DU9y2pU3.js";import"./class-map-BgB-TLy1.js";import"./when-CI7b_ccM.js";import"./ai-attachment-D68208tN.js";import"./tooltip-CTHQbUKg.js";import"./query-BpjciUlk.js";import"./overlay-DStfyh-W.js";import"./ai-chat-header-B0X4xSgN.js";import"./ai-icon-NPXQmVsG.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-C4ZBbLE3.js";import"./ai-dropdown-menu-DUUAYwx1.js";import"./if-defined-CNru6eQ0.js";import"./popover-FLzd6Hbc.js";import"./ai-modal-Byioybns.js";import"./ai-agent-info-BWxrPGlW.js";import"./ai-chat-interface-Bwv_QJBh.js";import"./ai-file-picker-2RFkM2_J.js";import"./ai-prompt-vyh3iED_.js";import"./ai-suggestions-Cgw233Fs.js";import"./ai-voice-input-EHIQeFhg.js";import"./ai-empty-state-CC77wwcq.js";import"./ai-error-message-_XM5MF7v.js";import"./ai-response-message-8uyPwMlU.js";import"./ai-actions-toolbar-DOcPD7Pm.js";import"./ai-thinking-indicator-C7_I5zMA.js";import"./ai-user-message-BQ2GKb1V.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const J=["Demo"];export{e as Demo,J as __namedExportsOrder,z as default};
