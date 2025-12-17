import{x as i}from"./iframe-CiD_2B1H.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-By-36k-F.js";import"./ai-chatbot-DU1t0OlF.js";import"./ai-message-thread-CZZ-J7_U.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-8H9SP3jZ.js";import"./state-C2aNvpfb.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-CEFa_2q0.js";import"./class-map-BtuRAi1R.js";import"./when-CI7b_ccM.js";import"./ai-attachment-C2vNc2V_.js";import"./tooltip-Ci5zO0Yo.js";import"./query-BpjciUlk.js";import"./overlay-BHmEGlHR.js";import"./ai-chat-header-BjRliVu6.js";import"./ai-icon-B7aKNDE2.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B81IKYYX.js";import"./ai-dropdown-menu-DNElHzUe.js";import"./if-defined-BwckqxmS.js";import"./popover-EsfQxxAI.js";import"./ai-modal-CojVdLed.js";import"./ai-agent-info-Dnr382_R.js";import"./ai-chat-interface-D6YOyt4z.js";import"./ai-file-picker-CQt5CHd7.js";import"./ai-prompt-Bp6gVmW6.js";import"./ai-suggestions-C3OM535g.js";import"./ai-voice-input-clqF9id9.js";import"./ai-empty-state-BOfkporj.js";import"./ai-error-message-e4JjJKKV.js";import"./ai-response-message-CtsPcrRX.js";import"./ai-actions-toolbar-wM5avrM8.js";import"./ai-thinking-indicator-Mt0IXo4l.js";import"./ai-user-message-CUiaRjRc.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const J=["Demo"];export{e as Demo,J as __namedExportsOrder,z as default};
