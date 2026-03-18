import{x as i}from"./iframe-CMnSMcE7.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-C3C8p1bB.js";import"./ai-chatbot-base-DZ0NpiJy.js";import"./ai-chatbot-BkUB7lY1.js";import"./ai-message-thread-BomSae7d.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-D_h1lty0.js";import"./base-DEXl8F5U.js";import"./query-assigned-elements-BvI0U-8l.js";import"./ref-DQAijAUo.js";import"./class-map-CtwDN7N0.js";import"./when-CI7b_ccM.js";import"./ai-attachment-C7I035TS.js";import"./ai-spinner-J1X-BP2H.js";import"./tooltip-SZgBq3RM.js";import"./overlay-CVApnUGp.js";import"./ai-chat-header-CAeLMhjm.js";import"./ai-icon-DgVSEEXj.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CkqwJDW7.js";import"./ai-dropdown-menu-JbJm5Qnz.js";import"./if-defined-pfkln-iz.js";import"./popover-BlfkfKC6.js";import"./ai-dropdown-menu-item-Du_3enZ8.js";import"./ai-modal-Bm_fJufi.js";import"./ai-agent-info-DiBpVXG4.js";import"./ai-agent-selector-BHQ0vwHG.js";import"./ai-chat-interface-DIaGLlEO.js";import"./ai-file-picker-BbZyt6j6.js";import"./ai-prompt-mBc4Ey-8.js";import"./ai-suggestions-CJtotVuz.js";import"./ai-voice-input-CWGUheUQ.js";import"./ai-response-message-toolbar-mJvJp6qQ.js";import"./ai-empty-state-CJicMMgd.js";import"./ai-error-message-W8gqvzIp.js";import"./ai-response-message-wH9-BJT-.js";import"./ai-thinking-indicator-xnbfps6E.js";import"./ai-user-message-CX3t2a8P.js";import"./ai-user-message-toolbar-C9iB9x7r.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const W=["Demo"];export{e as Demo,W as __namedExportsOrder,V as default};
