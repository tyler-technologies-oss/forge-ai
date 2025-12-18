import{x as i}from"./iframe-C1dGMsns.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-9045RgGj.js";import"./ai-chatbot-c7yS146e.js";import"./ai-message-thread-CRmX23t7.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BVzYc869.js";import"./state-C5u-JZ1r.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-CcSq0ATE.js";import"./class-map-C-Xec_cd.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CnmmuulF.js";import"./tooltip-C0ZwTSZ8.js";import"./query-BpjciUlk.js";import"./overlay-ynCj7mHd.js";import"./ai-chat-header-CVnYH6nI.js";import"./ai-icon-B7CK63hy.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Du6xHRTk.js";import"./ai-dropdown-menu-CSdNKfdM.js";import"./if-defined-2TCesGSJ.js";import"./popover-14gAb2-7.js";import"./ai-modal-B22mhv87.js";import"./ai-agent-info-NbSgNNa6.js";import"./ai-chat-interface-BBRHeGLI.js";import"./ai-file-picker-BR3jiCPu.js";import"./ai-prompt-jzJWC4F8.js";import"./ai-suggestions-dfHZb3id.js";import"./ai-voice-input-CTPE2spq.js";import"./ai-empty-state-4QfzCVQ3.js";import"./ai-error-message-CeFLOSEK.js";import"./ai-response-message-sWQ6dDXG.js";import"./ai-actions-toolbar-rGBVxO0c.js";import"./ai-thinking-indicator-BkrOmd8d.js";import"./ai-user-message-D186eT26.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const J=["Demo"];export{e as Demo,J as __namedExportsOrder,z as default};
