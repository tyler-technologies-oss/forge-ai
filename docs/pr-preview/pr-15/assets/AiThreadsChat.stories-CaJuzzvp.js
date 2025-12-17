import{x as i}from"./iframe-DP1O552k.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-DGz6UXQA.js";import"./ai-chatbot-B9_40jsW.js";import"./ai-message-thread-fmTOrZ8W.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-7766Zhax.js";import"./state-Boknmvlj.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-BiQQyTFl.js";import"./class-map-CCxdV4XW.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DCT7DUKH.js";import"./tooltip-DizKM9x6.js";import"./query-BpjciUlk.js";import"./overlay-COYKcqS2.js";import"./ai-chat-header-DEAwbXSS.js";import"./ai-icon-BRb_TNTR.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Dctspu48.js";import"./ai-dropdown-menu-CcPfCa88.js";import"./if-defined-x2IsY8Pt.js";import"./popover-DAQiuA32.js";import"./ai-modal-DPGynCQ5.js";import"./ai-agent-info-B4-jxWDp.js";import"./ai-chat-interface-BizlxBX3.js";import"./ai-file-picker-B8nW4nmz.js";import"./ai-prompt-CYszYWFR.js";import"./ai-suggestions-CGXXgv6H.js";import"./ai-voice-input-DE1pqHr4.js";import"./ai-empty-state-BDu0-mqr.js";import"./ai-error-message-omCqbQ34.js";import"./ai-response-message-EI4ZGX4O.js";import"./ai-actions-toolbar-5NG4gmrg.js";import"./ai-thinking-indicator-CBA4Nk61.js";import"./ai-user-message-CaRMShPB.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
