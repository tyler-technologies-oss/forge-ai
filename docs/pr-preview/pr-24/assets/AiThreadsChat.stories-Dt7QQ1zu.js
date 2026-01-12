import{x as i}from"./iframe-S5vhSwLC.js";import{M as p}from"./mock-adapter-BEFlJ0Fr.js";import"./ai-threads-CqFuOtkK.js";import"./ai-chatbot-C8W8rIdX.js";import"./ai-message-thread-CWdmbP4l.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Bp_suIMj.js";import"./state-CetG9OIC.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DicNRC7z.js";import"./class-map-BiFUDh_y.js";import"./when-CI7b_ccM.js";import"./ai-attachment-lSaZtT9y.js";import"./ai-spinner-DqRH6NW5.js";import"./tooltip-B8-7cX_7.js";import"./query-BpjciUlk.js";import"./overlay-DcG2NXbu.js";import"./ai-chat-header-TMWXpRZI.js";import"./ai-icon-45nnL8A4.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BZPgPrxR.js";import"./ai-dropdown-menu-BtR2MIdp.js";import"./ai-dropdown-menu-item-DpwopPir.js";import"./popover-BFiMe0vM.js";import"./ai-modal-BKObpvdX.js";import"./ai-agent-info-D_bThNFi.js";import"./ai-chat-interface-DF85y35G.js";import"./ai-file-picker-B0CBJO_8.js";import"./ai-prompt-CT4oR_ZS.js";import"./ai-suggestions-D0xxXliA.js";import"./ai-voice-input-CCjQH_BS.js";import"./ai-empty-state-ILFtyutP.js";import"./ai-error-message-6ZjoTgvi.js";import"./ai-response-message-DFqorvLe.js";import"./ai-actions-toolbar-BKiP-Ews.js";import"./ai-thinking-indicator-GUggg0kh.js";import"./ai-user-message-DmHOYK41.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
