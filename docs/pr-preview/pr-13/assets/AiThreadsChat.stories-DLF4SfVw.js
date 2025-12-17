import{x as i}from"./iframe-DS4ksZRn.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-CLzTd6fw.js";import"./ai-chatbot-BQ7amnFj.js";import"./ai-message-thread-DWmarU4D.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-D6D3zu9w.js";import"./state-DS8nSqOi.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-CILUlrSY.js";import"./class-map-DKlLiIDr.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CITGB8qb.js";import"./tooltip-hnB36iqd.js";import"./query-BpjciUlk.js";import"./overlay-thuWbJXV.js";import"./ai-chat-header-BaRe_U0l.js";import"./ai-icon-C0ppfTGq.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Xo793DWf.js";import"./ai-dropdown-menu-7h1-SYEy.js";import"./if-defined-hgYczexI.js";import"./popover-CkUxvIJt.js";import"./ai-modal-BdmaDoxc.js";import"./ai-agent-info-r9gBEAnV.js";import"./ai-chat-interface-7XY8yVFS.js";import"./ai-file-picker-DfqUb7WX.js";import"./ai-prompt-DfvpqR6v.js";import"./ai-suggestions-C--C5fHD.js";import"./ai-voice-input-CAPbXZ17.js";import"./ai-empty-state-Z_pzT3ag.js";import"./ai-error-message-BenRHeNT.js";import"./ai-response-message-D6UqgnpK.js";import"./ai-actions-toolbar-CQHJ1SPM.js";import"./ai-thinking-indicator-DDw7TLml.js";import"./ai-user-message-CvDEeE5S.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
