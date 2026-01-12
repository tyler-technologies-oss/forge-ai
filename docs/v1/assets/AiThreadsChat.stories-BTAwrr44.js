import{x as i}from"./iframe-Ih5tSNSU.js";import{M as p}from"./mock-adapter-BEFlJ0Fr.js";import"./ai-threads-Cmpa3qvL.js";import"./ai-chatbot-BN2cwbOl.js";import"./ai-message-thread-BJgS3phf.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-M7SsXt5P.js";import"./state-Ckg-U2js.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-C-VaoU8Q.js";import"./class-map-Dp1MLPp5.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BhgdbXqD.js";import"./ai-spinner-HBCIfGOg.js";import"./tooltip-Z9qsl_mA.js";import"./query-BpjciUlk.js";import"./overlay-CXSmlE1b.js";import"./ai-chat-header-Bt6Wl-ys.js";import"./ai-icon-CLSy0Bt_.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DETbPq0n.js";import"./ai-dropdown-menu-CdPQDPAW.js";import"./ai-dropdown-menu-item-BJh3wzWS.js";import"./popover-DGytvd4P.js";import"./ai-modal-BkpCx7Jb.js";import"./ai-agent-info-gRJAA8E6.js";import"./ai-chat-interface-DVn9-6sE.js";import"./ai-file-picker-BtiUBCVa.js";import"./ai-prompt-BdeF5wD-.js";import"./ai-suggestions-B-Y4MD_D.js";import"./ai-voice-input-BXwteJoH.js";import"./ai-empty-state-Yy53xVVj.js";import"./ai-error-message-2x3r3Ajd.js";import"./ai-response-message-CrtD7HdK.js";import"./ai-actions-toolbar-DJSDrd6N.js";import"./ai-thinking-indicator-DA52xc1K.js";import"./ai-user-message-C5ah7DpI.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
