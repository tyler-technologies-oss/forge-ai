import{x as i}from"./iframe-mzit-ZdE.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-lnGT7WLG.js";import"./ai-chatbot-Cd4cr2XP.js";import"./ai-message-thread-DLwcrhXn.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BB2m1osM.js";import"./state-B7qZ09g0.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DuqRmvAA.js";import"./class-map-B_wXCLtT.js";import"./when-CI7b_ccM.js";import"./ai-attachment-9viVWJzr.js";import"./ai-spinner-BTkgANxZ.js";import"./tooltip-DXDPemtK.js";import"./query-BpjciUlk.js";import"./overlay-CjAD2rBw.js";import"./ai-chat-header-DLxTJ0lw.js";import"./ai-icon-B2HV1K0W.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DbkyIZJp.js";import"./ai-dropdown-menu-sGXDEFh7.js";import"./ai-dropdown-menu-item-RbNvG6Og.js";import"./popover-DuRJmsj2.js";import"./ai-modal-CqV0Rq-C.js";import"./ai-agent-info-DTBB3vzx.js";import"./ai-chat-interface-dkcQYRCB.js";import"./ai-file-picker-DMWu5vZd.js";import"./ai-prompt-Cx9lORck.js";import"./ai-suggestions-B2vVKgCD.js";import"./ai-voice-input-CrJAVKAG.js";import"./ai-empty-state-Cf0oO7ti.js";import"./ai-error-message-wJDGz95P.js";import"./ai-response-message-CTF4QUqR.js";import"./ai-actions-toolbar-CcIb6pWA.js";import"./ai-thinking-indicator-CPLIHnhw.js";import"./ai-user-message-BhpK-J70.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Q=["Demo"];export{e as Demo,Q as __namedExportsOrder,J as default};
