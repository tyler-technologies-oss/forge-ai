import{x as i}from"./iframe-Bbo3iDA_.js";import{M as s}from"./mock-adapter-_zUjDDpK.js";import"./ai-threads-DJVYM-al.js";import"./ai-chatbot-BbQ7wO2g.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Cs8oSks1.js";import"./state-BU7Tj9Q3.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-BfA28vgQ.js";import"./class-map-CK-DSwSk.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CV-k1mBz.js";import"./tooltip-DJO3jiyt.js";import"./overlay-DfsU18gm.js";import"./ai-chat-header-BguHCPsM.js";import"./ai-icon-Ds_fb6wu.js";import"./ai-gradient-container-Le8wktZ_.js";import"./ai-dropdown-menu-Cup0izI-.js";import"./if-defined-ByKSdq3b.js";import"./popover-wG0ixEmg.js";import"./ai-agent-info-Czgk7O11.js";import"./ai-chat-interface-CKKuR4ed.js";import"./ai-empty-state-wawAPfW9.js";import"./ai-error-message-nzUYHbVM.js";import"./ai-file-picker-BEH6lfMC.js";import"./ai-prompt-uXchv6QV.js";import"./ai-response-message-CXSk45xX.js";import"./ai-actions-toolbar-BAFNoFQz.js";import"./ai-suggestions-2KRNfLLP.js";import"./ai-thinking-indicator-Canl47HW.js";import"./ai-user-message-D0yklD4y.js";import"./ai-voice-input-BGtROpwc.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["enabled","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${e("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot
            .adapter=${r}
            file-upload=${o.fileUpload}
            placeholder=${o.placeholder}
            @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-disconnected=${e("forge-ai-chatbot-disconnected")}
            @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${e("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${e("forge-ai-chatbot-error")}
            @forge-ai-chatbot-clear=${e("forge-ai-chatbot-clear")}
            @forge-ai-chatbot-info=${e("forge-ai-chatbot-info")}>
          </forge-ai-chatbot>
        </forge-ai-threads>
      </div>
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const Y=["Demo"];export{t as Demo,Y as __namedExportsOrder,R as default};
