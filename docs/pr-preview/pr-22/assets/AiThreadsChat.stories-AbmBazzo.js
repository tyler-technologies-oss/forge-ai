import{x as i}from"./iframe-CxWCRyiw.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-DKxHO23U.js";import"./ai-chatbot-B1D3ejkO.js";import"./ai-message-thread-Cyh8B-u4.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-wvKxgXea.js";import"./state-DczHS6Ew.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-C5MHfp4j.js";import"./class-map-DAisp0u-.js";import"./when-CI7b_ccM.js";import"./ai-attachment-8vA_6uaT.js";import"./ai-spinner-CLPN1YF9.js";import"./tooltip-D9t6sFVt.js";import"./query-BpjciUlk.js";import"./overlay-DL-t7FJX.js";import"./ai-chat-header-CvRIxYEJ.js";import"./ai-icon-CJfSaGaM.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CbDXQLae.js";import"./ai-dropdown-menu-OuSeK9nv.js";import"./ai-dropdown-menu-item-B9L18oYR.js";import"./popover-BiZ0AO2f.js";import"./ai-modal-f_uBIKt1.js";import"./ai-agent-info-C_nyG-VQ.js";import"./ai-chat-interface-B2X0blbx.js";import"./ai-file-picker-BPRJuZwL.js";import"./ai-prompt-B3metBv4.js";import"./ai-suggestions-BfKcHKBy.js";import"./ai-voice-input-CniYQ7ny.js";import"./ai-empty-state-D4SkZ3Y8.js";import"./ai-error-message-CVvziQzQ.js";import"./ai-response-message-0To-5TLM.js";import"./ai-actions-toolbar-8ti2C7d0.js";import"./ai-thinking-indicator-COktXiMh.js";import"./ai-user-message-BVZTGAqt.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
