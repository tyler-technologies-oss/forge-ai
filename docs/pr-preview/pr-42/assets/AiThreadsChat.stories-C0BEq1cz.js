import{x as i}from"./iframe-yNE1prNJ.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-DqeZgeeq.js";import"./ai-chatbot-BwByeS-U.js";import"./ai-message-thread-DsVzJ4wO.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-D8FNk0GT.js";import"./base-B9RVm7Lw.js";import"./query-assigned-elements-Bht9_v-f.js";import"./ref-D4CUrYx7.js";import"./class-map-DFzHtIKx.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BPAcbBzn.js";import"./ai-spinner-DSKj9Bap.js";import"./tooltip-OrOh89Yi.js";import"./overlay-C5_on7Bl.js";import"./ai-chat-header-w8jtXot2.js";import"./ai-icon-CP_NRE1g.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-htBJZ14n.js";import"./ai-dropdown-menu-kRRb9r73.js";import"./if-defined-Cf_nufDR.js";import"./popover-qQjKK8TW.js";import"./ai-dropdown-menu-item-Cc_ZDSoU.js";import"./ai-modal-DzqdQjb1.js";import"./ai-agent-info-B1Qgpwfk.js";import"./ai-agent-selector-D3c774o5.js";import"./ai-chat-interface-C8dH05CI.js";import"./ai-file-picker-CQSpVrNv.js";import"./ai-prompt-DRwuDyVE.js";import"./ai-suggestions-Br2l1isV.js";import"./ai-voice-input-j7RRwxov.js";import"./ai-response-message-toolbar-Cmp-SlKH.js";import"./ai-empty-state-UyBlgOYy.js";import"./ai-error-message-D76VB7UH.js";import"./ai-response-message-D0xrgqTG.js";import"./ai-thinking-indicator-DrH_wXEh.js";import"./ai-user-message-C1wKSRZy.js";import"./ai-user-message-toolbar-CbZCuDHl.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
