import{x as i}from"./iframe-tazyWlA3.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-CVSjaX9z.js";import"./ai-chatbot-MiWgzQe0.js";import"./ai-message-thread-Bk6WX3Dz.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-uklEewmv.js";import"./state-CJ-WvLki.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-e5tk489r.js";import"./class-map-Cq5IMGZI.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BPRii5zL.js";import"./ai-spinner-Ktz2Ny9s.js";import"./tooltip-h5jQds3i.js";import"./query-BpjciUlk.js";import"./overlay-DRpUV7Gc.js";import"./ai-chat-header-O7Yvbaay.js";import"./ai-icon-Cd0H3YbB.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CoUwVsRA.js";import"./ai-dropdown-menu-CwgO_yut.js";import"./ai-dropdown-menu-item-3qFnqzRl.js";import"./popover-BFOcyyLU.js";import"./ai-modal-kfiO1yV7.js";import"./ai-agent-info-D_8EY2mC.js";import"./ai-chat-interface-RhSQftJg.js";import"./ai-file-picker-TqsXEUvl.js";import"./ai-prompt-DJrDbe-_.js";import"./ai-suggestions-Cggqsdci.js";import"./ai-voice-input-dXDqaAKJ.js";import"./ai-empty-state-wymyBxK6.js";import"./ai-error-message-DqTQZS3a.js";import"./ai-response-message-CoySX_HO.js";import"./ai-actions-toolbar-Ba6XHgaJ.js";import"./ai-thinking-indicator-DKpC4uuD.js";import"./ai-user-message-6n7eS5gx.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
