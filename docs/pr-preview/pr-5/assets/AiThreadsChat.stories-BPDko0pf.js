import{x as i}from"./iframe-CRRKe4or.js";import{M as s}from"./mock-adapter-Kih2mlwa.js";import"./ai-threads-CwVcsY-Z.js";import"./ai-chatbot-DOhp_IFR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DzPeuZQY.js";import"./state-VeZUPSlM.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-PJ5a4qEb.js";import"./class-map-N5jQNIq6.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-qjiW9QnL.js";import"./tooltip-CwGeg5GD.js";import"./overlay-BenEX-2t.js";import"./ai-chat-header-DGpsWLX6.js";import"./ai-icon-ym_cdAIt.js";import"./ai-gradient-container-BIgrEy9H.js";import"./ai-dropdown-menu-BPwUXgs4.js";import"./if-defined-BLuEunwU.js";import"./popover-DDuV-68M.js";import"./ai-agent-info-DNSyNGHR.js";import"./ai-chat-interface-nv_fQvIu.js";import"./ai-empty-state-hyoKbs7R.js";import"./ai-error-message-B-3TwFjx.js";import"./ai-file-picker-C-I6IOP-.js";import"./ai-prompt-BzjC_KLV.js";import"./ai-response-message-Be9iyQ8p.js";import"./ai-actions-toolbar-De3yVh4r.js";import"./ai-suggestions-CrzFj82d.js";import"./ai-thinking-indicator-BA4wVQwg.js";import"./ai-user-message-D2XNDjms.js";import"./ai-voice-input-BtdNRGJu.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Y=["Demo"];export{e as Demo,Y as __namedExportsOrder,R as default};
