import{x as i}from"./iframe-dgZ-nBwM.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-BJbtw7UO.js";import"./ai-chatbot-B5OoHGGA.js";import"./ai-message-thread-VK3h-0Ss.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BZZUByg2.js";import"./base-D7HsqePj.js";import"./query-assigned-elements-JBlzPtbd.js";import"./ref-CUB877wA.js";import"./class-map-DsLoCMMq.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BbgCXHn5.js";import"./ai-spinner-CajZeYv_.js";import"./tooltip-D4fesZ0c.js";import"./overlay-3r8LozlA.js";import"./ai-chat-header-W-DhCcJj.js";import"./ai-icon-GzldnmEj.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BaY7bbCl.js";import"./ai-dropdown-menu-H6Cxfifr.js";import"./if-defined-Cp6CVYbP.js";import"./popover-mxIhRs1L.js";import"./ai-dropdown-menu-item-__I01P1N.js";import"./ai-modal-D2ymMAUU.js";import"./ai-agent-info-prtEovBs.js";import"./ai-chat-interface-C-RR454p.js";import"./ai-file-picker-gYakvVQu.js";import"./ai-prompt-C80vR0Wb.js";import"./ai-suggestions-CR4vhbfY.js";import"./ai-voice-input-ClEps3ET.js";import"./ai-response-message-toolbar-z0Ln1W_D.js";import"./ai-empty-state-ZCveNvd0.js";import"./ai-error-message-DyIKK-88.js";import"./ai-response-message-c6bc2xLf.js";import"./ai-thinking-indicator-xlHDbU-Y.js";import"./ai-user-message-Du-rYPQb.js";import"./ai-user-message-toolbar-DZ2zBiIc.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
