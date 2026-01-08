import{x as i}from"./iframe-iHczl8pU.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-Cu7uZIyb.js";import"./ai-chatbot-Dj0EnKEA.js";import"./ai-message-thread-Di2ycuE5.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DzDm77j8.js";import"./state-BUiQQJU4.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DUqKHoUA.js";import"./class-map-CtOTOkRA.js";import"./when-CI7b_ccM.js";import"./ai-attachment-9B21Edgv.js";import"./ai-spinner-BipWReMP.js";import"./tooltip-BTjl_pYZ.js";import"./query-BpjciUlk.js";import"./overlay-Zy2N0Ot0.js";import"./ai-chat-header-CDrF3ZJu.js";import"./ai-icon-CPCJaIoC.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D008G1dm.js";import"./ai-dropdown-menu-E-nr0sJ6.js";import"./ai-dropdown-menu-item-D2nNziiF.js";import"./popover-DMHl1re5.js";import"./ai-modal-DNksKaxp.js";import"./ai-agent-info-CWiBClNr.js";import"./ai-chat-interface-DPdEvb57.js";import"./ai-file-picker-CWXUJyJJ.js";import"./ai-prompt-CymuW0cJ.js";import"./ai-suggestions-Bf6SRXMw.js";import"./ai-voice-input-hI2XYEoz.js";import"./ai-empty-state-WsUwe1Uv.js";import"./ai-error-message-e40QuZvi.js";import"./ai-response-message-B5Bt1Xz_.js";import"./ai-actions-toolbar-DtcwDNRW.js";import"./ai-thinking-indicator-BhOEOATU.js";import"./ai-user-message-DSnDAjtJ.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
