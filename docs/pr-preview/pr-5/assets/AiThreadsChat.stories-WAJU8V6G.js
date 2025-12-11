import{x as i}from"./iframe-LIIuC7rX.js";import{M as s}from"./mock-adapter-_zUjDDpK.js";import"./ai-threads-BN3GPHeR.js";import"./ai-chatbot-BtYd15B6.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CkC1yvH-.js";import"./state-B17KYY1U.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-BJddkrWV.js";import"./class-map-DGV5TZNf.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DlzknW69.js";import"./tooltip-IkyjmT5U.js";import"./overlay-xIbk5H-k.js";import"./ai-chat-header-DD8etMYz.js";import"./ai-icon-CdtaxtOb.js";import"./ai-gradient-container-BuRIEREJ.js";import"./ai-dropdown-menu-Bax5x_Eg.js";import"./if-defined-DY8ijfJs.js";import"./popover-DBUewozM.js";import"./ai-agent-info-DK-sVwVX.js";import"./ai-chat-interface-C_yeaJfa.js";import"./ai-empty-state-BMI77hU3.js";import"./ai-error-message-CPbPxhMX.js";import"./ai-file-picker-DRyfdc-J.js";import"./ai-prompt-jlzxQiLS.js";import"./ai-response-message-5vwIIdUX.js";import"./ai-actions-toolbar-5DHJMQqt.js";import"./ai-suggestions-DFvciqk4.js";import"./ai-thinking-indicator-BfXpP9M_.js";import"./ai-user-message-Bj6oW8gO.js";import"./ai-voice-input-CxHGKOUG.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},enableFileUpload:{control:{type:"boolean"},description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{enableFileUpload:!1,placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${e("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot
            .adapter=${r}
            ?enable-file-upload=${o.enableFileUpload}
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
