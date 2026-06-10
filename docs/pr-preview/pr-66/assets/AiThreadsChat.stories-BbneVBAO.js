import{x as i}from"./iframe-GE7whtSK.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-CNoCruGw.js";import"./ai-chatbot-base-zFmTIPL4.js";import"./ai-chatbot-CaSrEvMy.js";import"./ai-message-thread-z4zwd3MG.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-03qbO25n.js";import"./base-Df1FQLg5.js";import"./query-assigned-elements-DijmKiKe.js";import"./ref-DIcpijIK.js";import"./class-map-CqUkso6z.js";import"./when-CI7b_ccM.js";import"./ai-attachment-D_ogjbAu.js";import"./ai-spinner-Bnen5CG9.js";import"./tooltip-BCmLBQs1.js";import"./overlay-C9g9EA1V.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BVdftkeh.js";import"./ai-icon-EqONRjTN.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Dd31vSHI.js";import"./ai-dropdown-menu-Cixyeyq0.js";import"./if-defined-BFvdBFgM.js";import"./popover-5RcyX4Ha.js";import"./query-assigned-nodes-C5L24fzr.js";import"./ai-dropdown-menu-item-JYmVxfGs.js";import"./ai-modal-CumIQGEM.js";import"./ai-agent-info-B0lG-jNq.js";import"./ai-agent-selector-DySmbV9P.js";import"./ai-chat-interface-Bjr0wOFt.js";import"./ai-conversations-panel-sIxf7zuD.js";import"./ai-file-picker-vmdKMOWF.js";import"./ai-prompt-BinTYY3w.js";import"./ai-suggestions-hCrvLU7d.js";import"./ai-voice-input-CzohorJV.js";import"./ai-response-message-toolbar-ob1DSGvu.js";import"./ai-empty-state-DRFhbD7x.js";import"./ai-error-message-BT4FDETz.js";import"./ai-response-message-BDHYeNDZ.js";import"./ai-thinking-indicator-YUEMfsdA.js";import"./ai-user-message-PltEH_wL.js";import"./ai-user-message-toolbar-GQa8b_lQ.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",Z={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
