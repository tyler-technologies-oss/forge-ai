import{x as i}from"./iframe-cAcVdJOC.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-CWo-wUPh.js";import"./ai-chatbot-Ci2VJtpX.js";import"./ai-message-thread-26lttJek.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DAlSbE--.js";import"./base-o2zR27RY.js";import"./query-assigned-elements-BydP-9d7.js";import"./ref-CRgcZThK.js";import"./class-map-DmegHRu1.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BI8Pdw7a.js";import"./ai-spinner-o6NGYFBh.js";import"./tooltip-CClV-1g0.js";import"./overlay-Cnwze5-L.js";import"./ai-chat-header-DBhOt9XU.js";import"./ai-icon-BQTq73xc.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Bs1aYbvH.js";import"./ai-dropdown-menu-BebnJ1Xd.js";import"./if-defined-BMWLyYBF.js";import"./popover-CNEIUetX.js";import"./ai-dropdown-menu-item-BGi4P3qt.js";import"./ai-modal-aZz8z5K6.js";import"./ai-agent-info-Bp5MpnGy.js";import"./ai-chat-interface-Bwa89KmT.js";import"./ai-file-picker-LwZd6Nib.js";import"./ai-prompt-5gnrrAYv.js";import"./ai-suggestions-CkAAllXS.js";import"./ai-voice-input-ChLDcx-9.js";import"./ai-response-message-toolbar-CTbSHl3E.js";import"./ai-empty-state-YGG-y-1_.js";import"./ai-error-message-DWlCdSEb.js";import"./ai-response-message-CPvrm0Sc.js";import"./ai-thinking-indicator-Cqax72YV.js";import"./ai-user-message-Bb5nZMPi.js";import"./ai-user-message-toolbar-CFIvQD6C.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
