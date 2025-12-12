import{x as i}from"./iframe-BkMOBzcx.js";import{M as s}from"./mock-adapter-CyWJDEYb.js";import"./ai-threads-BxZjvfK-.js";import"./ai-chatbot-3G4xj9Hs.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-1La6JTKz.js";import"./state-BiOga4JF.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-B94UxZy5.js";import"./class-map-Cyp3n6mH.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B19DTO_c.js";import"./tooltip-D1XajLv2.js";import"./overlay-DFm5yHqH.js";import"./ai-chat-header-C6hqWY0n.js";import"./ai-icon-BtEhF2MU.js";import"./ai-gradient-container-DRXfOfl9.js";import"./ai-dropdown-menu-B_5LyXAR.js";import"./if-defined-oggwpKYW.js";import"./popover-Y50QGf8L.js";import"./ai-agent-info-3hIFyrSi.js";import"./ai-chat-interface-C1Q9EttS.js";import"./ai-empty-state-DcAnB1hN.js";import"./ai-error-message-DPiscept.js";import"./ai-file-picker-B48sX8yZ.js";import"./ai-prompt-C4abo235.js";import"./ai-response-message-aMurMvh7.js";import"./ai-actions-toolbar-yFBkGO8t.js";import"./ai-suggestions-GqIsyjOl.js";import"./ai-thinking-indicator-D8xvwhTI.js";import"./ai-user-message-Bp_9TacL.js";import"./ai-voice-input-Bh7e39JC.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Y=["Demo"];export{e as Demo,Y as __namedExportsOrder,R as default};
