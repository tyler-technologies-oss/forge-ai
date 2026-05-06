import{x as i}from"./iframe-CSaZy7F4.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-BVhmSb_7.js";import"./ai-chatbot-base-CtTK3myr.js";import"./ai-chatbot-B_qlXoJc.js";import"./ai-message-thread-6peqC5MP.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BWDh5IFT.js";import"./base-BQJ7kEyo.js";import"./query-assigned-elements-B6qx3O8o.js";import"./ref-CRnoEsCA.js";import"./class-map-R1IPMdQ5.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CQVSuDrA.js";import"./ai-spinner-Q72BMHiX.js";import"./tooltip-BdG5y8mq.js";import"./overlay-Dz3Xglf4.js";import"./ai-chat-header-DFlqhRo_.js";import"./ai-icon-7i4xdEmT.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-u-mbeu-X.js";import"./ai-dropdown-menu-Cto8tMtg.js";import"./if-defined-txxG69SW.js";import"./popover-BIP4L1rg.js";import"./ai-dropdown-menu-item-CnCoGwKE.js";import"./ai-modal-BoNyhdC4.js";import"./ai-agent-info-DuxB_T2d.js";import"./ai-agent-selector-BcaCGIzL.js";import"./ai-chat-interface-DQFdGdei.js";import"./ai-file-picker-D47mag_R.js";import"./ai-prompt-CDdP_VJe.js";import"./ai-suggestions-DdAfcR8g.js";import"./ai-voice-input-DPg6v2dH.js";import"./ai-response-message-toolbar-BjCGyeJS.js";import"./ai-empty-state-Di2Ts9ge.js";import"./ai-error-message-BqTHAFD3.js";import"./ai-response-message-DwBgeB-y.js";import"./ai-thinking-indicator-DCAMahFw.js";import"./ai-user-message-DwVEOwI6.js";import"./ai-user-message-toolbar-T7-XZsI_.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const W=["Demo"];export{e as Demo,W as __namedExportsOrder,V as default};
