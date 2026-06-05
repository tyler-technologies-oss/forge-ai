import{x as i}from"./iframe-CYS3kzqJ.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-iEmO3EP-.js";import"./ai-chatbot-base-USTo6u-s.js";import"./ai-chatbot-D9Qs3Gwr.js";import"./ai-message-thread-C1e1XMjU.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CobdqkQR.js";import"./base-hE2hm4R6.js";import"./query-assigned-elements-CJNJ9QyQ.js";import"./ref-B9dku83Q.js";import"./class-map-Ct4vfER1.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BRXEIN-O.js";import"./ai-spinner-CSz7jxYC.js";import"./tooltip-BSHNkrAx.js";import"./overlay-C-6P4d9r.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BpTRaYcs.js";import"./ai-icon-BdB7SDhZ.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-De1TzMCw.js";import"./ai-dropdown-menu-BQ_qxyr9.js";import"./if-defined-U3NDWvi9.js";import"./popover-xkl1FFis.js";import"./query-assigned-nodes-TNUg5qoj.js";import"./ai-dropdown-menu-item-DPzgGYXg.js";import"./ai-modal-s3g0D1Ff.js";import"./ai-agent-info-ABbanCMN.js";import"./ai-agent-selector-zDfFEQ3Y.js";import"./ai-chat-interface-DDH-Hw8q.js";import"./ai-file-picker-CMPmLlVB.js";import"./ai-prompt-DkK1qyAv.js";import"./ai-suggestions-C3tS0EYk.js";import"./ai-voice-input-BVzfwBkg.js";import"./ai-response-message-toolbar-DNmhLeqW.js";import"./ai-empty-state-4XIRJdOY.js";import"./ai-error-message-NA49txbW.js";import"./ai-response-message-qx-ggN0n.js";import"./ai-thinking-indicator-BSBuJtf-.js";import"./ai-user-message-Bs7Wg7uu.js";import"./ai-user-message-toolbar-CM-WTNyZ.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["Demo"];export{e as Demo,Z as __namedExportsOrder,X as default};
