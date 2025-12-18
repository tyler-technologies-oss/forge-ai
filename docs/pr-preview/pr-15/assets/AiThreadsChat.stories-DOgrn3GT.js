import{x as i}from"./iframe-Cyq9kBDn.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-DonTEUfi.js";import"./ai-chatbot-C2jFCs2y.js";import"./ai-message-thread-Y48Pw2kN.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-3UedVxhJ.js";import"./state-CyFMonJN.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-BapRVp3h.js";import"./class-map-BgGy4c1l.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DuU09ZqT.js";import"./tooltip-Cg_3A92h.js";import"./query-BpjciUlk.js";import"./overlay-C5kcfW3X.js";import"./ai-chat-header-CuRAhzVm.js";import"./ai-icon-D6EHSNPn.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Bhln5--Q.js";import"./ai-dropdown-menu-Rb0fZqUT.js";import"./if-defined-BN-vgoQJ.js";import"./popover-CHG3GjLd.js";import"./ai-modal-CmwYHqSJ.js";import"./ai-agent-info-BJoYKtI4.js";import"./ai-chat-interface-U2qY9PpO.js";import"./ai-file-picker-D3513i4c.js";import"./ai-prompt-Dat8gXHb.js";import"./ai-suggestions-DGVALkoL.js";import"./ai-voice-input-DAZ4-WTR.js";import"./ai-empty-state-CI2qtCxx.js";import"./ai-error-message-BxPYnrth.js";import"./ai-response-message-DSNM5Dxl.js";import"./ai-actions-toolbar-DGpx6iex.js";import"./ai-thinking-indicator-Bv7dNNaP.js";import"./ai-user-message-Eu1lpg4_.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
