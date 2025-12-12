import{x as i}from"./iframe-D2L_qK33.js";import{M as s}from"./mock-adapter-CyWJDEYb.js";import"./ai-threads-BFur-li7.js";import"./ai-chatbot-COX25ttw.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CRgPyxET.js";import"./state-Cj4bTwK0.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-C0blzj7V.js";import"./class-map-hwj8Nz_C.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B6EimvfH.js";import"./tooltip-CqO2t31b.js";import"./overlay-uat_ldX5.js";import"./ai-chat-header-C2Qn4z5Z.js";import"./ai-icon-BNUZIOxs.js";import"./ai-gradient-container-Db5nwzcM.js";import"./ai-dropdown-menu-DYdF40Pz.js";import"./if-defined-MIluXGbz.js";import"./popover-Cpix4WUQ.js";import"./ai-agent-info-xRWLDabz.js";import"./ai-chat-interface-BkVVfZSZ.js";import"./ai-empty-state-BJJGcxWg.js";import"./ai-error-message-CcbgaNfO.js";import"./ai-file-picker-NkEeIWUb.js";import"./ai-prompt-M40l_1XV.js";import"./ai-response-message-BPYajvav.js";import"./ai-actions-toolbar-BMzSv3Tu.js";import"./ai-suggestions-CZhJs6z8.js";import"./ai-thinking-indicator-Cs_dIg2D.js";import"./ai-user-message-Nlt_6rut.js";import"./ai-voice-input-BB6n0mpu.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Y=["Demo"];export{e as Demo,Y as __namedExportsOrder,R as default};
