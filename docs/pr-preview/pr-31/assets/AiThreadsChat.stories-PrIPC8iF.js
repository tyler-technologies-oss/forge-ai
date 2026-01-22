import{x as i}from"./iframe-WXw08rX5.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-BO8ovJog.js";import"./ai-chatbot-oVkoFt4S.js";import"./ai-message-thread-CRTDxWf2.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CwNbMPWj.js";import"./base-BxJkqhC4.js";import"./query-assigned-elements-DRalrVsp.js";import"./ref-D5U5pwia.js";import"./class-map-Ce5VxPPS.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CibNIGcN.js";import"./ai-spinner-DV5lJ-Jl.js";import"./tooltip-YPMgXhaZ.js";import"./overlay-BRllYS8f.js";import"./ai-chat-header-GOJB5Env.js";import"./ai-icon-D0FUjlpI.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BHccZZxt.js";import"./ai-dropdown-menu-B9-h6jZk.js";import"./if-defined-CgZ0gVIy.js";import"./popover-CA6EzmKf.js";import"./ai-dropdown-menu-item-0ax1OzMB.js";import"./ai-modal-D6lWumJm.js";import"./ai-agent-info-C5ggbhTc.js";import"./ai-chat-interface-BBZfe0ra.js";import"./ai-file-picker-lIVD4ck-.js";import"./ai-prompt-CqduYdW0.js";import"./ai-suggestions-Csl58nWS.js";import"./ai-voice-input-kr_qUtxi.js";import"./ai-actions-toolbar-B6IYbxqG.js";import"./ai-empty-state-sAuHCF7m.js";import"./ai-error-message-BFWY0v9k.js";import"./ai-response-message-D-875uBY.js";import"./ai-thinking-indicator-vza9Vzuc.js";import"./ai-user-message-DGRi6-vM.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
