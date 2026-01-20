import{x as i}from"./iframe-D5kciGQW.js";import{M as p}from"./mock-adapter-DPRgB_9-.js";import"./ai-threads-BBEOnfbB.js";import"./ai-chatbot-4FZbMiW0.js";import"./ai-message-thread-DUZvlY2V.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DE-Wz1R-.js";import"./state-CjHMRjfJ.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-BGBwsW_C.js";import"./class-map-B9Lu3lqA.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CLGQz8jy.js";import"./ai-spinner-rxmesOiO.js";import"./tooltip-D-sdF6Mc.js";import"./query-BpjciUlk.js";import"./overlay-CSj3RQUY.js";import"./ai-chat-header-CcbqFXGG.js";import"./ai-icon-DSrI8rM5.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DabbXs_e.js";import"./ai-dropdown-menu-vRY_4_CF.js";import"./if-defined-DNqCbI_c.js";import"./popover-CSkEBD3R.js";import"./ai-dropdown-menu-item-C5GR-C7_.js";import"./ai-modal-k0vuvRjB.js";import"./ai-agent-info-I_LWOtfS.js";import"./ai-chat-interface-D8Vo2eAU.js";import"./ai-file-picker-Du4CkNij.js";import"./ai-prompt-BvK1hZZF.js";import"./ai-suggestions-DTPuXUdO.js";import"./ai-voice-input-BoDJU91f.js";import"./ai-actions-toolbar-15IUL_Q3.js";import"./ai-empty-state-BQcOhSwD.js";import"./ai-error-message-Bl-S2RrU.js";import"./ai-response-message-CRmi7lZ1.js";import"./ai-thinking-indicator-K53KYZ6_.js";import"./ai-user-message-16epU-dh.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
