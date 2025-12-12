import{x as i}from"./iframe-DX3u0_W5.js";import{M as s}from"./mock-adapter-CyWJDEYb.js";import"./ai-threads-xs7XbkQe.js";import"./ai-chatbot-DzBafubj.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-D4agxrxF.js";import"./state-CO6Dtl_5.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-CnMxbxKV.js";import"./class-map-sJZ3tyzB.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-IMjNyWMT.js";import"./tooltip-OT5qTvPy.js";import"./overlay-YPHISKjt.js";import"./ai-chat-header-D75RKJre.js";import"./ai-icon-D4_wp2oe.js";import"./ai-gradient-container-B1FcS6CP.js";import"./ai-dropdown-menu-Bx9u4hov.js";import"./if-defined-DYQbmY0q.js";import"./popover-DGTagUYr.js";import"./ai-agent-info-CsyjNoFN.js";import"./ai-chat-interface-BuxSixTR.js";import"./ai-empty-state-C_OizUgC.js";import"./ai-error-message-Bab9Dgc0.js";import"./ai-file-picker-BwZOk37m.js";import"./ai-prompt-CdXolJd9.js";import"./ai-response-message-DD5XnvnO.js";import"./ai-actions-toolbar-BezhoRtO.js";import"./ai-suggestions-D-MonzcI.js";import"./ai-thinking-indicator-sX6CZBVd.js";import"./ai-user-message-CYYD9YFC.js";import"./ai-voice-input-CH04_mWm.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
