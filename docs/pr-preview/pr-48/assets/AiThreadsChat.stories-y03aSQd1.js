import{x as i}from"./iframe-DPbeJets.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-nVYHfnZJ.js";import"./ai-chatbot-base-ChG5MEba.js";import"./ai-chatbot-DnF2H7E4.js";import"./ai-message-thread-BAzZh1wg.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DMuxl-Af.js";import"./base-DIQuphXz.js";import"./query-assigned-elements-DIOCMv97.js";import"./ref-D0YwaI0t.js";import"./class-map-CezjGASE.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B_qzIIWf.js";import"./ai-spinner-B0OpRgNJ.js";import"./tooltip-DJsFJqMy.js";import"./overlay-V7JICMml.js";import"./ai-chat-header-CzG-QuSS.js";import"./ai-icon-CSJUmHGr.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-96XE407T.js";import"./ai-dropdown-menu-CGSTpVd8.js";import"./if-defined-4Sn3281o.js";import"./popover-BXEV4k8o.js";import"./ai-dropdown-menu-item-Dnubq3c-.js";import"./ai-modal-CWwZCVLG.js";import"./ai-agent-info-BxTilQSx.js";import"./ai-agent-selector-DZ8WHHVT.js";import"./ai-chat-interface-VZaIkC34.js";import"./ai-file-picker-CFNCVIVz.js";import"./ai-prompt-CPinMXqn.js";import"./ai-suggestions-Bap8tHAc.js";import"./ai-voice-input-DkSlmjHh.js";import"./ai-response-message-toolbar-CmMlwdQb.js";import"./ai-empty-state-DKBMUCxK.js";import"./ai-error-message-CZRXojoJ.js";import"./ai-response-message-BZzH7MZw.js";import"./ai-thinking-indicator-Ds2VmX0D.js";import"./ai-user-message-PhMcHSyY.js";import"./ai-user-message-toolbar-DyJjpLku.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
