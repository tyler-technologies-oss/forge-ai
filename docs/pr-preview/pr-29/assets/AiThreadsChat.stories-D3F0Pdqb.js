import{x as i}from"./iframe-CwTMpg-v.js";import{M as p}from"./mock-adapter-DPRgB_9-.js";import"./ai-threads-DhS2Pxx8.js";import"./ai-chatbot-CxG5lIvD.js";import"./ai-message-thread-Dww8pEku.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BdROvRhb.js";import"./state-CMGdv0G-.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DkNJZ4Aw.js";import"./class-map-BJcAPdgZ.js";import"./when-CI7b_ccM.js";import"./ai-attachment-5j4y24m_.js";import"./ai-spinner-BouASlJI.js";import"./tooltip-DJFrRKZL.js";import"./query-BpjciUlk.js";import"./overlay-C5RBeNgR.js";import"./ai-chat-header-DzMBzPju.js";import"./ai-icon-DkUfJzOG.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B9KxuGI1.js";import"./ai-dropdown-menu-B3Aa12wP.js";import"./if-defined-eA0jVjM8.js";import"./popover-DKOjTtG6.js";import"./ai-dropdown-menu-item-RayuCyH7.js";import"./ai-modal-BVXB63-z.js";import"./ai-agent-info-BZIRR0fA.js";import"./ai-chat-interface-DFRVpWoP.js";import"./ai-file-picker-BO14bBph.js";import"./ai-prompt-DwrJImp-.js";import"./ai-suggestions-DAqOcFp7.js";import"./ai-voice-input-Dz71Bzj8.js";import"./ai-actions-toolbar-cV-8N5gb.js";import"./ai-empty-state-CB8JB1PZ.js";import"./ai-error-message-4bCr9f6g.js";import"./ai-response-message-DUG26pxi.js";import"./ai-thinking-indicator-CILF9J54.js";import"./ai-user-message-BdqIPaV8.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
