import{x as i}from"./iframe-DRsL2ns4.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-D_Xx4YuP.js";import"./ai-chatbot-Df2rEmWb.js";import"./ai-message-thread-BGd0AScZ.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DPyWoITz.js";import"./base-OpNLvqZ3.js";import"./query-assigned-elements-De4K2Nnc.js";import"./ref-DeRHFoqu.js";import"./class-map-BaJflN8y.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CoEeisan.js";import"./ai-spinner-BqtuCJaz.js";import"./tooltip-CSzFW8d7.js";import"./overlay-CwzJ86n6.js";import"./ai-chat-header-CqdGlSMZ.js";import"./ai-icon-DcHe1sEo.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DCRrgMZa.js";import"./ai-dropdown-menu-DRF1ZaiT.js";import"./if-defined-Do6IdDBT.js";import"./popover-D5taBWDi.js";import"./ai-dropdown-menu-item-BpiMaW5a.js";import"./ai-modal-Y-m6nPXK.js";import"./ai-agent-info-BZSpZL3B.js";import"./ai-agent-selector-CHR1VORZ.js";import"./ai-chat-interface-Dok8Up4V.js";import"./ai-file-picker-E0Vq942i.js";import"./ai-prompt-ByG71PtZ.js";import"./ai-suggestions-Vfx5O0EL.js";import"./ai-voice-input-B34-v9yh.js";import"./ai-response-message-toolbar-BxAyzO5F.js";import"./ai-empty-state-CEV4Ys4h.js";import"./ai-error-message-d_QorRlr.js";import"./ai-response-message-CRitFGWI.js";import"./ai-thinking-indicator-DOTlgXTH.js";import"./ai-user-message-t8CiVcmJ.js";import"./ai-user-message-toolbar-qMzryTuI.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const V=["Demo"];export{e as Demo,V as __namedExportsOrder,Q as default};
