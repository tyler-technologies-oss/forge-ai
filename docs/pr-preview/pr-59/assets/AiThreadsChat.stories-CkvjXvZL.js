import{x as i}from"./iframe-BXJHJCEF.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-8iKxcsZy.js";import"./ai-chatbot-base-InGPTjv5.js";import"./ai-chatbot-CI4iXwhv.js";import"./ai-message-thread-CmPwcN-q.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BNW4iySQ.js";import"./base-BxmjvQjl.js";import"./query-assigned-elements-BjNpp3kN.js";import"./ref-C1r4YUJU.js";import"./class-map-BDjwf473.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CPlGNDab.js";import"./ai-spinner-adtNym75.js";import"./tooltip-DhLdkeEu.js";import"./overlay-CDn1f-rv.js";import"./ai-chat-header-DCZoD3SC.js";import"./ai-icon-jYToZypd.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D8mj7R78.js";import"./ai-dropdown-menu-DW_4I9b4.js";import"./if-defined-BXP6mi-7.js";import"./popover-G8-N31Qa.js";import"./ai-dropdown-menu-item-Bv7n3J1l.js";import"./ai-modal-CC1aNPYw.js";import"./ai-agent-info-BKwqxlCS.js";import"./ai-agent-selector-DQkyIVbG.js";import"./ai-chat-interface-Cp9l-NnL.js";import"./ai-file-picker-O1GEcmDg.js";import"./ai-prompt-DY_ekIjd.js";import"./ai-suggestions-DV849pIH.js";import"./ai-voice-input-CELfxzZg.js";import"./ai-response-message-toolbar-DXvmMmbE.js";import"./ai-empty-state-_mAUuD6d.js";import"./ai-error-message-lEdtJ7cJ.js";import"./ai-response-message-X7K3KvFH.js";import"./ai-thinking-indicator-B_m4bPvS.js";import"./ai-user-message-C29w17t5.js";import"./ai-user-message-toolbar-TTuKIn9y.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
