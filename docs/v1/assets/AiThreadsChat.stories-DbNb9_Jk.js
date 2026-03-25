import{x as i}from"./iframe-OA0q1wRJ.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-Cl__M6td.js";import"./ai-chatbot-base-Br8C8fHr.js";import"./ai-chatbot-dGJaa8yd.js";import"./ai-message-thread-CWk39wMr.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DEPBIAgJ.js";import"./base-Dq6U01qp.js";import"./query-assigned-elements-DCMBGTBM.js";import"./ref-yT45ZfX5.js";import"./class-map-d0ICPsjm.js";import"./when-CI7b_ccM.js";import"./ai-attachment-pvlu6pho.js";import"./ai-spinner-h9PUBaRe.js";import"./tooltip-4s77247-.js";import"./overlay-DucL7Ul3.js";import"./ai-chat-header-Ci2GtVUE.js";import"./ai-icon-BnzV0TEa.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-uWBbBOyU.js";import"./ai-dropdown-menu-D7q7nJzX.js";import"./if-defined-omTGmGa7.js";import"./popover-Cps0qP0M.js";import"./ai-dropdown-menu-item-CqRNmerB.js";import"./ai-modal-DQzTphkx.js";import"./ai-agent-info-DNOpoMnn.js";import"./ai-agent-selector-BO3RFBVq.js";import"./ai-chat-interface-CRRd9ilh.js";import"./ai-file-picker-B1G0eyIt.js";import"./ai-prompt-ndb7ETK9.js";import"./ai-suggestions-CDuOzbiH.js";import"./ai-voice-input-BlMMaLFx.js";import"./ai-response-message-toolbar-srrRSBKe.js";import"./ai-empty-state-BLYBD2YK.js";import"./ai-error-message-S47dCjlh.js";import"./ai-response-message-DjOGP5xT.js";import"./ai-thinking-indicator-CvHHjFLL.js";import"./ai-user-message-DarnHoSI.js";import"./ai-user-message-toolbar-C3DoTZsj.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const W=["Demo"];export{e as Demo,W as __namedExportsOrder,V as default};
