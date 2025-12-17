import{x as i}from"./iframe-BFtq55eQ.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-DXXgHZ0N.js";import"./ai-chatbot-Bw1n9Stm.js";import"./ai-message-thread-BFZdwb24.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DJ3KSV_I.js";import"./state-CJmJxoPr.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-C3yjBHDW.js";import"./class-map-CRSbawX2.js";import"./when-CI7b_ccM.js";import"./ai-attachment-VGvS6344.js";import"./tooltip-DO-styU8.js";import"./query-BpjciUlk.js";import"./overlay-87kqU2Qf.js";import"./ai-chat-header-DBR596wQ.js";import"./ai-icon-DKMd29Ld.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BhFBVeNS.js";import"./ai-dropdown-menu-u8d--cRH.js";import"./if-defined-CuI65JUU.js";import"./popover-1ysrJblV.js";import"./ai-modal-D5nvtQe-.js";import"./ai-agent-info-mkuplCX3.js";import"./ai-chat-interface-BZHDuBpz.js";import"./ai-file-picker-BsF73Aja.js";import"./ai-prompt-Cjp0KJ19.js";import"./ai-suggestions-DYOYR8Cx.js";import"./ai-voice-input-C6sGlheO.js";import"./ai-empty-state-D95h47Ez.js";import"./ai-error-message-B290H4z9.js";import"./ai-response-message-geYj2VYn.js";import"./ai-actions-toolbar-B2k9Oi1L.js";import"./ai-thinking-indicator-BVitz5XH.js";import"./ai-user-message-CC79WQl6.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
