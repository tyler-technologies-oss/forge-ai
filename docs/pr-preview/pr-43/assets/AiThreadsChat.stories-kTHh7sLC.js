import{x as i}from"./iframe-CYwKsxxd.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-DNxkPSEf.js";import"./ai-chatbot-BPDtwvMC.js";import"./ai-message-thread-BRR8Yol8.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Du0s4Y53.js";import"./base-Bh44Xa5m.js";import"./query-assigned-elements-DuZ_5qhD.js";import"./ref-fW9Llhj0.js";import"./class-map-CkH3AWG4.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BCUUca5P.js";import"./ai-spinner-CzbEC-B6.js";import"./tooltip-D5JzSrII.js";import"./overlay-D2YE7aYB.js";import"./ai-chat-header-9P1Serxl.js";import"./ai-icon-C5Y858Ua.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DC-Wdfpr.js";import"./ai-dropdown-menu-Djh-EkaJ.js";import"./if-defined-D269OB2b.js";import"./popover-DMQuCV2z.js";import"./ai-dropdown-menu-item-xXecJQ2v.js";import"./ai-modal-B-6OM5m2.js";import"./ai-agent-info-B_dT4FbG.js";import"./ai-agent-selector-BWg9cH7t.js";import"./ai-chat-interface-XwhVK3k4.js";import"./ai-file-picker-1iuOul7T.js";import"./ai-prompt-CKdR_SXM.js";import"./ai-suggestions-BvHXmMEV.js";import"./ai-voice-input-Bn2-el8J.js";import"./ai-response-message-toolbar-_pjHDEn5.js";import"./ai-empty-state-B5CbDVrS.js";import"./ai-error-message-C4jYpSmT.js";import"./ai-response-message-B9I_CXxv.js";import"./ai-thinking-indicator-kLKpF89V.js";import"./ai-user-message-B1B8PK9d.js";import"./ai-user-message-toolbar-Bz-9THy5.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
