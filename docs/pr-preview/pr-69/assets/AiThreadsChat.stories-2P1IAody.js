import{x as i}from"./iframe-B2xilAYM.js";import{M as s}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-CLY61iCy.js";import"./ai-chatbot-launcher-CljHR-I8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CX_NQepL.js";import"./custom-element-UsVr97OX.js";import"./property-CTUsD98T.js";import"./class-map-BilxbH5L.js";import"./when-CI7b_ccM.js";import"./ai-edit-thread-Bl_Z_Rhu.js";import"./ref-B0wis6Ay.js";import"./ai-dropdown-menu-bt0uc5xr.js";import"./query-assigned-nodes-uzVy2dol.js";import"./if-defined-CHHnv7Aq.js";import"./popover-sp4nYeJt.js";import"./overlay-BfQFi6SA.js";import"./floating-ui.dom-C0FiGihr.js";import"./utils-BGBq21po.js";import"./ai-dropdown-menu-item-B1Oo6Cw2.js";import"./ai-icon-Bwm5eGCF.js";import"./ai-gradient-container-CC88DWXI.js";import"./ai-spinner-Ddm2d6ZN.js";import"./ai-modal-XqcFyQ1P.js";import"./ai-chatbot-base-Ds5W7_lN.js";import"./ai-attachment-CpiiP38G.js";import"./tooltip-Qy_wnCOD.js";import"./ai-chat-header-SQGhrw0i.js";import"./ai-agent-info-CkcPY6bk.js";import"./ai-agent-selector-CrEtG9MR.js";import"./ai-file-picker-SRyYlMDc.js";import"./ai-message-thread-CbAAduiT.js";import"./ai-response-message-toolbar-BJELw0mJ.js";import"./ai-empty-state-DEP-gMMJ.js";import"./ai-error-message-CxIjsoxb.js";import"./ai-response-message-CUQ3Q7An.js";import"./ai-thinking-indicator-COHQVIHm.js";import"./ai-user-message-wN1-bBNE.js";import"./ai-user-message-toolbar-D6qECeZw.js";import"./ai-prompt-DzWi6gS8.js";import"./ai-suggestions-CrPSqzrL.js";import"./ai-voice-input-BqBTcyA9.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,p="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:p,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",createdAt:new Date(Date.now()-864e5).toISOString(),messageCount:5},{id:"thread-2",title:"Data analysis question",createdAt:new Date(Date.now()-36e5).toISOString(),messageCount:12},{id:"thread-3",title:"How do I implement authentication?",createdAt:new Date().toISOString(),messageCount:3}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${t("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${t("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${t("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot-launcher
            .adapter=${r}
            file-upload=${o.fileUpload}
            placeholder=${o.placeholder}
            @forge-ai-chatbot-connected=${t("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-message-sent=${t("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${t("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${t("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${t("forge-ai-chatbot-error")}
            @forge-ai-chatbot-info=${t("forge-ai-chatbot-info")}
            @forge-ai-chatbot-launcher-conversation-start=${t("forge-ai-chatbot-launcher-conversation-start")}>
          </forge-ai-chatbot-launcher>
        </forge-ai-threads>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const W=["Demo"];export{e as Demo,W as __namedExportsOrder,V as default};
