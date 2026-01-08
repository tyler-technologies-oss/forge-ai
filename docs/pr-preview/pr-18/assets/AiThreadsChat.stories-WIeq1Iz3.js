import{x as i}from"./iframe-CHRvhCkt.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-DsNEN7TR.js";import"./ai-chatbot-Bx14RJJC.js";import"./ai-message-thread-vKmoq9Oz.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-B7u-peYd.js";import"./state-C8k-OAW2.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DN83rnXY.js";import"./class-map-zjonzvri.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BnKyhKrE.js";import"./ai-spinner-COUbtRuZ.js";import"./tooltip-BPHB_Exb.js";import"./query-BpjciUlk.js";import"./overlay-C9hcDGRy.js";import"./ai-chat-header-DHmmArdB.js";import"./ai-icon-Dindyje1.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CeIJyCcD.js";import"./ai-dropdown-menu-CMBshoxX.js";import"./ai-dropdown-menu-item-B9YdxwET.js";import"./popover-DshZrjLQ.js";import"./ai-modal-C-WyvaPP.js";import"./ai-agent-info-CbLNCWPf.js";import"./ai-chat-interface-Cu_9cWLm.js";import"./ai-file-picker-YMDiHN5L.js";import"./ai-prompt-LrV1YyPg.js";import"./ai-suggestions-BA_Mj1GY.js";import"./ai-voice-input-C96sKlWZ.js";import"./ai-empty-state-AdXkBw4y.js";import"./ai-error-message-Cq4LsA8i.js";import"./ai-response-message-CWsgSWuk.js";import"./ai-actions-toolbar-DC3FObdR.js";import"./ai-thinking-indicator-N8n6XFXK.js";import"./ai-user-message-BOcpfIvC.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
