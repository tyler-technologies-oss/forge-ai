import{x as i}from"./iframe-BP-zW2Td.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-CIh01CZ9.js";import"./ai-chatbot-Cc5JKveL.js";import"./ai-message-thread-BRuNeXc4.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CO0IOIxm.js";import"./state-Dio0HDon.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-Bh1iX8wA.js";import"./class-map-kLxLOTTZ.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DENRVCfZ.js";import"./tooltip-4VkuwOls.js";import"./query-BpjciUlk.js";import"./overlay-esxv8em9.js";import"./ai-chat-header-AKsdlmuj.js";import"./ai-icon-DM5EFOV1.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CwhTBJOA.js";import"./ai-dropdown-menu-YYtBqm9k.js";import"./if-defined-C_uwT5jN.js";import"./popover-DIbI3v2g.js";import"./ai-modal-wwTJiEVE.js";import"./ai-agent-info-D3_dc6Zv.js";import"./ai-chat-interface-pHJs0hV_.js";import"./ai-file-picker-H1Us6Fna.js";import"./ai-prompt-Cx4CZIXH.js";import"./ai-suggestions-D-DnKhec.js";import"./ai-voice-input-BboGEBqy.js";import"./ai-empty-state-Bj1gYPU-.js";import"./ai-error-message-g7acQeHH.js";import"./ai-response-message-CVtnP0Ju.js";import"./ai-actions-toolbar-C_4NsK_M.js";import"./ai-thinking-indicator-D41oqkpB.js";import"./ai-user-message-29aM79z7.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
