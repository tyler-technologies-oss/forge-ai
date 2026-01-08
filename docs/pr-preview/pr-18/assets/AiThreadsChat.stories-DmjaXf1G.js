import{x as i}from"./iframe-Bcri2xcO.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-CJkJipz4.js";import"./ai-chatbot-D_RidKqX.js";import"./ai-message-thread-C9ZKHjzu.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DzE06-XM.js";import"./state-C44k3JPR.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-BoXFEmd1.js";import"./class-map-DDiZ5tZQ.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Cz20QNri.js";import"./ai-spinner-DzZ7u59z.js";import"./tooltip-azU7TLlN.js";import"./query-BpjciUlk.js";import"./overlay-DOiN9kB-.js";import"./ai-chat-header-CVAKB52V.js";import"./ai-icon-Cyq2MFpy.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Bvk5FvUq.js";import"./ai-dropdown-menu-DWAtyVAb.js";import"./ai-dropdown-menu-item--1x278zV.js";import"./popover-DkIqmuWs.js";import"./ai-modal-C-VnzXs8.js";import"./ai-agent-info-I90YHhtI.js";import"./ai-chat-interface-BhsPIoLJ.js";import"./ai-file-picker-BHKPMQ-D.js";import"./ai-prompt-DjcrxIxI.js";import"./ai-suggestions-B0iMDlbN.js";import"./ai-voice-input-CLuzS_bq.js";import"./ai-empty-state-C01pUCQ2.js";import"./ai-error-message--XP0SFdK.js";import"./ai-response-message-U19gNmjZ.js";import"./ai-actions-toolbar-jOpD_I3J.js";import"./ai-thinking-indicator-CuqBxY1C.js";import"./ai-user-message-DNX3zz2z.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
