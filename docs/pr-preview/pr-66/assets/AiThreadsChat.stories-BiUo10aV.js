import{x as i}from"./iframe-CqVW0k1n.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-DT9kvXE7.js";import"./ai-chatbot-base-C6bZnj69.js";import"./ai-chatbot-CANE-UaI.js";import"./ai-message-thread-D5-7ohNe.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DiJ-gpN2.js";import"./base-GhD4QnsJ.js";import"./query-assigned-elements-BIXOXxu8.js";import"./ref-D3c8n6_t.js";import"./class-map-B_hvCE9j.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CzECcrRW.js";import"./ai-spinner-CxBZ3bUf.js";import"./tooltip-CvzQ5a_-.js";import"./query-Ck0xuX4c.js";import"./overlay-DFaVJXIH.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BYbOZ7nC.js";import"./ai-icon-DPOGCuT5.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-vwZWijz2.js";import"./ai-dropdown-menu-WyEyxpfL.js";import"./if-defined-u8vYIkT8.js";import"./popover-WyLjZdu1.js";import"./query-assigned-nodes-LxhG4uqk.js";import"./ai-dropdown-menu-item-DeyeCKlX.js";import"./ai-modal-74MCm6Ab.js";import"./ai-agent-info-xeBeQJ1s.js";import"./ai-agent-selector-Bd-HTTV1.js";import"./ai-chat-interface-B5ClpfEb.js";import"./ai-conversations-panel-BdXsDWG_.js";import"./ai-file-picker-BWV_cWV2.js";import"./ai-prompt-CvG_D-T4.js";import"./ai-suggestions-g6FLqkJ2.js";import"./ai-voice-input-DFD1WElB.js";import"./ai-response-message-toolbar-CdK3Howl.js";import"./ai-empty-state-DZgxaP2J.js";import"./ai-error-message-Bqnv2Uwg.js";import"./ai-response-message-_hB82Cxk.js";import"./ai-thinking-indicator-CVhEG5s8.js";import"./ai-user-message-DjKFIYJJ.js";import"./ai-user-message-toolbar-zdtNjYma.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",tt={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const et=["Demo"];export{e as Demo,et as __namedExportsOrder,tt as default};
