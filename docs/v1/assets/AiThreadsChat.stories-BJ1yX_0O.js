import{x as i}from"./iframe-ysd04RiF.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-CSE3o4_R.js";import"./ai-chatbot-SRarFjEu.js";import"./ai-message-thread-BDi7XhT8.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-D0tvJkfb.js";import"./base-CPpLRmUR.js";import"./query-assigned-elements-CzwJtfVa.js";import"./ref-DLupEwAA.js";import"./class-map-Dp-jJjYy.js";import"./when-CI7b_ccM.js";import"./ai-attachment-KINqqg_A.js";import"./ai-spinner-BPKCcJ6R.js";import"./tooltip-UR00y06g.js";import"./overlay-BAFHgN0N.js";import"./ai-chat-header-DfDs9wBj.js";import"./ai-icon-DxsyDm8K.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Rq1HQVyL.js";import"./ai-dropdown-menu-Ge9qwWQ3.js";import"./if-defined-F4wxjC9t.js";import"./popover-D_gj7SBn.js";import"./ai-dropdown-menu-item-CNnGPmFK.js";import"./ai-modal-C-OPdRMv.js";import"./ai-agent-info-DiGfDCN0.js";import"./ai-agent-selector-Ds7a7MIg.js";import"./ai-chat-interface-CHrhEFyU.js";import"./ai-file-picker-yV4N6FEp.js";import"./ai-prompt-BaoAWkpb.js";import"./ai-suggestions-D4B6GUbZ.js";import"./ai-voice-input-DBP0tGUS.js";import"./ai-response-message-toolbar-1BXmkdiy.js";import"./ai-empty-state-1eWQ0HLk.js";import"./ai-error-message-BOEsLlxk.js";import"./ai-response-message-CeT22_Kd.js";import"./ai-thinking-indicator-Bnf5Rdca.js";import"./ai-user-message-yrRvcVMp.js";import"./ai-user-message-toolbar-BuOnIGqu.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
