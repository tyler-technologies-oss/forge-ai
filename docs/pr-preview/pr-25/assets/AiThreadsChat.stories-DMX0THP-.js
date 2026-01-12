import{x as i}from"./iframe-DYTYHfQu.js";import{M as p}from"./mock-adapter-BEFlJ0Fr.js";import"./ai-threads-Coy96v6o.js";import"./ai-chatbot-D5hbWweI.js";import"./ai-message-thread-DrfRtcBc.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BXCNymd2.js";import"./state-CyLue2Ii.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DT9-Im1b.js";import"./class-map-DAGtr3sh.js";import"./when-CI7b_ccM.js";import"./ai-attachment-JYLQlyKJ.js";import"./ai-spinner-CbbCij_-.js";import"./tooltip-poQeOcnf.js";import"./query-BpjciUlk.js";import"./overlay-D26t9RnR.js";import"./ai-chat-header-CokF54by.js";import"./ai-icon-CgYhG0JY.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-aAWTjLIN.js";import"./ai-dropdown-menu-QrpAdjJi.js";import"./ai-dropdown-menu-item-BR4wcyYR.js";import"./popover-CebNjjHJ.js";import"./ai-modal-CZ8UeHak.js";import"./ai-agent-info-AuxIQEJj.js";import"./ai-chat-interface-CNkztfAX.js";import"./ai-file-picker-Bz2M7gRh.js";import"./ai-prompt-IYuZfOjt.js";import"./ai-suggestions-DN1gv5ln.js";import"./ai-voice-input-COD57ht4.js";import"./ai-empty-state-B8QS4kA8.js";import"./ai-error-message-BbdtZAhV.js";import"./ai-response-message-OX6WvWVb.js";import"./ai-actions-toolbar-DgBD7sQY.js";import"./ai-thinking-indicator-DOQ63BQl.js";import"./ai-user-message-CPm-52wB.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
