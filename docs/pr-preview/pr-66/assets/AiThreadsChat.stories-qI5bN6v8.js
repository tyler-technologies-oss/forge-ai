import{x as i}from"./iframe-DUa2prrc.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-BuHKejh-.js";import"./ai-chatbot-base-pp8VmC-m.js";import"./ai-chatbot-1cRA_a7H.js";import"./ai-message-thread-rtMzvj7L.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DT16U5GV.js";import"./base-Ci4Z37Ec.js";import"./query-assigned-elements-BkmWFt1p.js";import"./ref-3isn6155.js";import"./class-map-Byipqzvq.js";import"./when-CI7b_ccM.js";import"./ai-attachment-PI6TR5jd.js";import"./ai-spinner-CnXX8lps.js";import"./tooltip-B8srEZCB.js";import"./overlay-Cjw8giFM.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-CMzAOh5o.js";import"./ai-icon-BbFqGr8Z.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DzmINuhS.js";import"./ai-dropdown-menu-DoWQq4FX.js";import"./if-defined-DHrk989B.js";import"./popover-D6b_MD_r.js";import"./query-assigned-nodes-rxmvL9st.js";import"./ai-dropdown-menu-item-Bjwt7StC.js";import"./ai-modal-DXfq4FFy.js";import"./ai-agent-info-J9qxp6ie.js";import"./ai-agent-selector-DHWE7KOL.js";import"./ai-chat-interface-B1yARxfC.js";import"./ai-conversations-panel-2glVoH7g.js";import"./ai-file-picker-D6cW0sev.js";import"./ai-prompt-Cn8Obo3b.js";import"./ai-suggestions-DX7WbOMJ.js";import"./ai-voice-input-DQDjY4hD.js";import"./ai-response-message-toolbar-vmYriGHV.js";import"./ai-empty-state-Cpn87IM6.js";import"./ai-error-message-BUA-0Hlp.js";import"./ai-response-message-CTUaQWNx.js";import"./ai-thinking-indicator-BJ_A3nAh.js";import"./ai-user-message-C8EDvm3P.js";import"./ai-user-message-toolbar-DitInd38.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",createdAt:new Date(Date.now()-864e5).toISOString(),messageCount:5},{id:"thread-2",title:"Data analysis question",createdAt:new Date(Date.now()-36e5).toISOString(),messageCount:12},{id:"thread-3",title:"How do I implement authentication?",createdAt:new Date().toISOString(),messageCount:3}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const tt=["Demo"];export{e as Demo,tt as __namedExportsOrder,Z as default};
