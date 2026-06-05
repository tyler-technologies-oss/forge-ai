import{x as i}from"./iframe-B0NQNGVo.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-B7y7Ze2t.js";import"./ai-chatbot-base-PK2W5D5t.js";import"./ai-chatbot-BCtR5jfh.js";import"./ai-message-thread-CJa9T2sM.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-xWtNckDH.js";import"./base-Cd_fmXEx.js";import"./query-assigned-elements-DgCaSwxo.js";import"./ref-DrTNw50r.js";import"./class-map-C_R_nGT0.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DrlZ07Df.js";import"./ai-spinner-CWcYuAB0.js";import"./tooltip-Dm_717O5.js";import"./overlay-D0vxknou.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-R1QJng16.js";import"./ai-icon-C_QBKE8c.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-wJqWKzem.js";import"./ai-dropdown-menu-Ci0YkJHV.js";import"./if-defined-CKo-ggUg.js";import"./popover-DAiYzUZF.js";import"./query-assigned-nodes-G_sXMAHW.js";import"./ai-dropdown-menu-item-BLYa9MuJ.js";import"./ai-modal-DNJB854V.js";import"./ai-agent-info-B22Pf07n.js";import"./ai-agent-selector-CwBL5zbX.js";import"./ai-chat-interface-gtgX9qeU.js";import"./ai-file-picker-DElVmTFw.js";import"./ai-prompt-DyBE3VaG.js";import"./ai-suggestions-Cc-YJ_kI.js";import"./ai-voice-input-ClvLZYtw.js";import"./ai-response-message-toolbar-4cId3khQ.js";import"./ai-empty-state-Dkl-s0lF.js";import"./ai-error-message-DgvSUx22.js";import"./ai-response-message-DOoapu-l.js";import"./ai-thinking-indicator-Dn2Nmc1B.js";import"./ai-user-message-BIwE9jbQ.js";import"./ai-user-message-toolbar-D2-y7ktd.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
