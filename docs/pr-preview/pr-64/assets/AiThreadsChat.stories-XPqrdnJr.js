import{x as i}from"./iframe-CRuS9SIp.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-DA9wM-Ni.js";import"./ai-chatbot-base-Bym4olkR.js";import"./ai-chatbot-RdzodOKy.js";import"./ai-message-thread-C4Kar6ep.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-n3XsYwo3.js";import"./base-_NSG3AqT.js";import"./query-assigned-elements-DESE-9KO.js";import"./ref-8qPkssCL.js";import"./class-map-dkdV_leM.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CFIyfH5e.js";import"./ai-spinner-DaH7ad4W.js";import"./tooltip-C7v_-3l2.js";import"./overlay-DqofdP2E.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-CloFh2FO.js";import"./ai-icon-bd3zB4cV.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BmW1PIx5.js";import"./ai-dropdown-menu-CgmQtKZ9.js";import"./if-defined-GusZpkg4.js";import"./popover-DSCpflF6.js";import"./query-assigned-nodes-luzoC6OA.js";import"./ai-dropdown-menu-item-D8y0MJmG.js";import"./ai-modal-DXdSGqee.js";import"./ai-agent-info-Hz1TFXmq.js";import"./ai-agent-selector-BdDp9kzD.js";import"./ai-chat-interface-L-kuZQUZ.js";import"./ai-file-picker-Dqf0WV1u.js";import"./ai-prompt-Pbg8BWCL.js";import"./ai-suggestions-DXNizESj.js";import"./ai-voice-input-DXckn_QP.js";import"./ai-response-message-toolbar-Cp0st6sC.js";import"./ai-empty-state-B4JgwxQu.js";import"./ai-error-message-C5p_0JGo.js";import"./ai-response-message-DLFwOLCp.js";import"./ai-thinking-indicator-Ds-9pia9.js";import"./ai-user-message-BDDQD1OM.js";import"./ai-user-message-toolbar-omu7E5nm.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["Demo"];export{e as Demo,Z as __namedExportsOrder,X as default};
