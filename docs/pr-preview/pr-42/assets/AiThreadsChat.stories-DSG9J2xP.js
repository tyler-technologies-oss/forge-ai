import{x as i}from"./iframe-DM1GMnXU.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-pfR-R-82.js";import"./ai-chatbot-DaKhAgH7.js";import"./ai-message-thread-DyMxZ-Hp.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BhIuyCwY.js";import"./base-DwcTzGNu.js";import"./query-assigned-elements-dqVd8HD8.js";import"./ref-DcFR8kmu.js";import"./class-map-C8Wwm7jR.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B2K2lpjm.js";import"./ai-spinner-DBJFKnNi.js";import"./tooltip-zpySpb-i.js";import"./overlay-C2e0i6P6.js";import"./ai-chat-header-_x3N8AQv.js";import"./ai-icon-BQe_bpOD.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-F-eW1xA1.js";import"./ai-dropdown-menu-3gAJryZS.js";import"./if-defined-CN05rEW6.js";import"./popover-MCoSjueR.js";import"./ai-dropdown-menu-item-Co9zksrL.js";import"./ai-modal-alfr0toY.js";import"./ai-agent-info-BHUT9tRc.js";import"./ai-agent-selector-C0M8UlYZ.js";import"./ai-chat-interface-dBehyHiZ.js";import"./ai-file-picker-lugmBdc7.js";import"./ai-prompt-7yTTRc9e.js";import"./ai-suggestions-B1PML4pG.js";import"./ai-voice-input-D3OFVf78.js";import"./ai-response-message-toolbar-CvczW8C7.js";import"./ai-empty-state-DoW8VTCm.js";import"./ai-error-message-CzJamSFo.js";import"./ai-response-message-H378CfHV.js";import"./ai-thinking-indicator-BwS1z72i.js";import"./ai-user-message-BfDb95xz.js";import"./ai-user-message-toolbar-C8WpebnY.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const V=["Demo"];export{e as Demo,V as __namedExportsOrder,Q as default};
