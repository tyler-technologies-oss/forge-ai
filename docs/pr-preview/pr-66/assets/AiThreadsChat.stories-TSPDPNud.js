import{x as i}from"./iframe-64sADwjS.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-DJIgDqbe.js";import"./ai-chatbot-base-BFaEt4k-.js";import"./ai-chatbot-CUBdTLQz.js";import"./ai-message-thread-CRT4kLli.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-B0O4WdJb.js";import"./base-kVk2_Lmd.js";import"./query-assigned-elements-Cyu3Uoag.js";import"./ref-DVBAuqwq.js";import"./class-map-CzoAaMNW.js";import"./when-CI7b_ccM.js";import"./ai-attachment-SrljVrb2.js";import"./ai-spinner-DylQZZEo.js";import"./tooltip-HuIZ4ERa.js";import"./query-CWdzDXj9.js";import"./overlay-Dm0Nth00.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-jwFn0pij.js";import"./ai-icon-KLo0SUAk.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Ds4ifFf0.js";import"./ai-dropdown-menu-B4H-Gg8O.js";import"./if-defined-D3UIaa_H.js";import"./popover-BB8IwKnR.js";import"./query-assigned-nodes-CzDxKWgN.js";import"./ai-dropdown-menu-item-B5f9GU5f.js";import"./ai-modal-BUugj2UK.js";import"./ai-agent-info-BjiuthYj.js";import"./ai-agent-selector-DW2ePzzv.js";import"./ai-chat-interface-CBy06wry.js";import"./ai-conversations-panel-C9AmHZgE.js";import"./ai-file-picker-CDbpuFp5.js";import"./ai-prompt-BF_SJI6t.js";import"./ai-suggestions-C8bEqY8k.js";import"./ai-voice-input-B2M2mh1v.js";import"./ai-response-message-toolbar-BzZTKOJD.js";import"./ai-empty-state-DGnk_swN.js";import"./ai-error-message-dO5Y-HDn.js";import"./ai-response-message-D6mW230H.js";import"./ai-thinking-indicator-COgSAwll.js";import"./ai-user-message-BcXdJ9JV.js";import"./ai-user-message-toolbar-ZMjzvY0h.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",tt={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const et=["Demo"];export{e as Demo,et as __namedExportsOrder,tt as default};
