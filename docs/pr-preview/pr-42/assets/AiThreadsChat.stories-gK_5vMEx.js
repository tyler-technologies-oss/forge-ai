import{x as i}from"./iframe-C4owungV.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-BFyZskQA.js";import"./ai-chatbot-C5veGnyF.js";import"./ai-message-thread-B1RmLfoM.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DfngWxb3.js";import"./base-BhYbfcz8.js";import"./query-assigned-elements-YSxGxF1u.js";import"./ref-CO1F5-i2.js";import"./class-map-CsYxbibv.js";import"./when-CI7b_ccM.js";import"./ai-attachment-vq31v8Bj.js";import"./ai-spinner-4s0z2mGI.js";import"./tooltip-BHvZHxUK.js";import"./overlay-B3-QU2dt.js";import"./ai-chat-header-CILWXjxz.js";import"./ai-icon-DGXft36V.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-7dj1P6rR.js";import"./ai-dropdown-menu-DqczPauE.js";import"./if-defined-aa2jfrJ4.js";import"./popover-CArc67Dx.js";import"./ai-dropdown-menu-item-CMlk25Nq.js";import"./ai-modal-C_av5ZjZ.js";import"./ai-agent-info-DXPsLOYD.js";import"./ai-agent-selector-CqVir4el.js";import"./ai-chat-interface-FZy7B-b0.js";import"./ai-file-picker-B0eV38Ym.js";import"./ai-prompt-yALqNQ6M.js";import"./ai-suggestions-B8CIg3Uz.js";import"./ai-voice-input-8JS2iSNu.js";import"./ai-response-message-toolbar-Cfo5IusC.js";import"./ai-empty-state-qYylDbN0.js";import"./ai-error-message-x-S4KNNK.js";import"./ai-response-message-B8n4Syms.js";import"./ai-thinking-indicator-BCQJc-bw.js";import"./ai-user-message-BMAlPsh9.js";import"./ai-user-message-toolbar-BYjQnKXX.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
