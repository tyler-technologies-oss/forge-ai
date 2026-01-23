import{x as i}from"./iframe-BFO7QacJ.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-ou-Wfnzx.js";import"./ai-chatbot-CfOlipJP.js";import"./ai-message-thread-7c2rCFeh.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CGSgnwNH.js";import"./base-CFUbOJr1.js";import"./query-assigned-elements-DWqh8e4r.js";import"./ref-CI5zG1GD.js";import"./class-map-Z5cfhCgN.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CRZSNTP-.js";import"./ai-spinner-DROFO4Bv.js";import"./tooltip-D6veFXsF.js";import"./overlay-C6V0q44g.js";import"./ai-chat-header-DAFfaGZi.js";import"./ai-icon-BVOjiUW1.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DqtqC40a.js";import"./ai-dropdown-menu-Bkw8dmIb.js";import"./if-defined-o6mMk28u.js";import"./popover-KHTuWxKK.js";import"./ai-dropdown-menu-item-DAGK3F7N.js";import"./ai-modal-BTVfmkmw.js";import"./ai-agent-info-C5BZwRIL.js";import"./ai-agent-selector-6b7aZBKM.js";import"./ai-chat-interface-CAkdmob1.js";import"./ai-file-picker-Cs0nvUvg.js";import"./ai-prompt-m30uAR11.js";import"./ai-suggestions-CP39R0gQ.js";import"./ai-voice-input-DKm2Qjyh.js";import"./ai-actions-toolbar-D97K7GCO.js";import"./ai-empty-state-BrFuOmz7.js";import"./ai-error-message-hoT2G86m.js";import"./ai-response-message-CBXGbQfk.js";import"./ai-thinking-indicator-Clnui0Ci.js";import"./ai-user-message-CJsWcvzv.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
