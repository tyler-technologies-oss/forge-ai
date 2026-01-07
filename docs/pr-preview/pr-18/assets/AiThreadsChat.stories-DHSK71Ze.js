import{x as i}from"./iframe-Bk1gE7dP.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-Cj5PYZBr.js";import"./ai-chatbot-SZVN9_rC.js";import"./ai-message-thread-q7HOzsTF.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BxhCSDhd.js";import"./state-CX2ZEhhj.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-BIadqe6l.js";import"./class-map-D3WfKmJg.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DrQ40Lmg.js";import"./tooltip-CfF3OuJM.js";import"./query-BpjciUlk.js";import"./overlay-CKchru3y.js";import"./ai-chat-header-CMZzX46L.js";import"./ai-icon-CHjVRi8S.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DPP9WL-h.js";import"./ai-dropdown-menu-Dvs4HWKQ.js";import"./if-defined-De2hZ4bj.js";import"./popover-BaTKYC7O.js";import"./ai-modal-CNvcuo9P.js";import"./ai-agent-info-DINLhKqS.js";import"./ai-chat-interface-GryYq12i.js";import"./ai-file-picker-F41Op3xX.js";import"./ai-prompt-CopF8Abr.js";import"./ai-suggestions-Cj2WEjnA.js";import"./ai-voice-input-BEyeyxqT.js";import"./ai-empty-state-CZ061FD9.js";import"./ai-error-message-BPPwIDu8.js";import"./ai-response-message-D32oKuOY.js";import"./ai-actions-toolbar-BVCOqJf3.js";import"./ai-thinking-indicator-Ck0UycOf.js";import"./ai-user-message-DBEetpp-.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
