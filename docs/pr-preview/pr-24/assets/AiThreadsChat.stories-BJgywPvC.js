import{x as i}from"./iframe-B7vYi7uH.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-DghiknPv.js";import"./ai-chatbot-C2IowTtR.js";import"./ai-message-thread--qz8oQpP.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BZFUCOVk.js";import"./state-CGhdqYRa.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-B1TAIuW9.js";import"./class-map-y9czvYsH.js";import"./when-CI7b_ccM.js";import"./ai-attachment-wGZj-CMz.js";import"./ai-spinner-B1dGnIVN.js";import"./tooltip-SuSgKNLS.js";import"./query-BpjciUlk.js";import"./overlay-B5YX2zt_.js";import"./ai-chat-header-7m3a41eq.js";import"./ai-icon-DptoPWuj.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BfmYOuK3.js";import"./ai-dropdown-menu-CLT_pm_X.js";import"./ai-dropdown-menu-item-CmitAtK8.js";import"./popover-C1bFQh3_.js";import"./ai-modal-Dnf7MA40.js";import"./ai-agent-info-C_pzH76u.js";import"./ai-chat-interface-Bsb_RPEV.js";import"./ai-file-picker-BZanpAj0.js";import"./ai-prompt-Fo32umpF.js";import"./ai-suggestions-CKnUM9tk.js";import"./ai-voice-input-DhNHrSaE.js";import"./ai-empty-state-p3tiPKaL.js";import"./ai-error-message-CY3NWq7k.js";import"./ai-response-message-CJLn4UIe.js";import"./ai-actions-toolbar-DnzqW5G0.js";import"./ai-thinking-indicator-DS-6NnZr.js";import"./ai-user-message-Cda9D-yq.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
