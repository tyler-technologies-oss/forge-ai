import{x as i}from"./iframe-D3PhEF1v.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-D9gitaUs.js";import"./ai-chatbot-base-Bg3UmniU.js";import"./ai-chatbot-n6XpubTP.js";import"./ai-message-thread-CPMwbQe9.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DTHP93b5.js";import"./base-BsNZsSrq.js";import"./query-assigned-elements-lmG9RUgS.js";import"./ref-C3GBm-e-.js";import"./class-map-BR_-Kk0S.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CZXPwDx3.js";import"./ai-spinner-B1Ilwuqs.js";import"./tooltip-YfHRuNBv.js";import"./query-DjqIDoNK.js";import"./overlay-CUSEDwZw.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BUssaTsN.js";import"./ai-icon-CdZ-Rm95.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DqlMVjps.js";import"./ai-dropdown-menu-BuBJoKnO.js";import"./if-defined-kahygY2v.js";import"./popover-dyFsdLt-.js";import"./query-assigned-nodes-Bb7sFDWs.js";import"./ai-dropdown-menu-item-P_a_ukUx.js";import"./ai-modal-DST1FdN2.js";import"./ai-agent-info-D1oufrzi.js";import"./ai-agent-selector-BgFQRAWo.js";import"./ai-chat-interface-BLBvIEpv.js";import"./ai-conversations-panel-I4qucILF.js";import"./ai-file-picker-OL59ikqp.js";import"./ai-prompt-BLNASag-.js";import"./ai-suggestions-DSAqyBKT.js";import"./ai-voice-input-ClhHdyUM.js";import"./ai-response-message-toolbar-CJngXd6m.js";import"./ai-empty-state-Cqi_28FC.js";import"./ai-error-message-FHKMxjwD.js";import"./ai-response-message-D66q0I7S.js";import"./ai-thinking-indicator-BQzn3A__.js";import"./ai-user-message-DUV_PSKp.js";import"./ai-user-message-toolbar-CnZrIdWI.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",tt={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
