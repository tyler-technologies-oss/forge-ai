import{x as i}from"./iframe-BN_B54Ct.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-C4wA2rQh.js";import"./ai-chatbot-BfnQYcU0.js";import"./ai-message-thread-DTpfP5QQ.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CfothDfB.js";import"./state-CyK1_W0v.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-t_WpqSXU.js";import"./class-map-quvSQlAy.js";import"./when-CI7b_ccM.js";import"./ai-attachment-C9hQHhWR.js";import"./tooltip-ZBCXVdGF.js";import"./query-BpjciUlk.js";import"./overlay-DymsZ2kP.js";import"./ai-chat-header-Cje_7rWr.js";import"./ai-icon-FNY9p1Kg.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DPOLwXj3.js";import"./ai-dropdown-menu-BxKb9-Lb.js";import"./if-defined-YLufiVTk.js";import"./popover-CtSQffiF.js";import"./ai-modal-ftVRuO72.js";import"./ai-agent-info-pAV-GECA.js";import"./ai-chat-interface-69zaqoKi.js";import"./ai-file-picker-eIZWXg8d.js";import"./ai-prompt-DAHDrFGO.js";import"./ai-suggestions-CV2pjDvd.js";import"./ai-voice-input-DyLp2Jax.js";import"./ai-empty-state-D0wk6Aog.js";import"./ai-error-message-DozdMs7u.js";import"./ai-response-message-BM5tJxJe.js";import"./ai-actions-toolbar-CSvB7eDD.js";import"./ai-thinking-indicator-m8dnGD7b.js";import"./ai-user-message-SLFUJpJI.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
