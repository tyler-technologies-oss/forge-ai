import{x as i}from"./iframe-DlJEpWNk.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-Dx6zbBiM.js";import"./ai-chatbot-DBjriPfx.js";import"./ai-message-thread-C2RHbYsv.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DAoWjuXC.js";import"./base-BU384QaK.js";import"./query-assigned-elements-Cv0PNhL8.js";import"./ref-Z7SisNL-.js";import"./class-map-DIYZ0kX4.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BDUTEvoK.js";import"./ai-spinner-CZRnyvOe.js";import"./tooltip-zCFPGIz_.js";import"./overlay-D2vQqLFf.js";import"./ai-chat-header-B8Mg0c6i.js";import"./ai-icon-DhoXFNmD.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BEWILPcf.js";import"./ai-dropdown-menu-CoV_vhUt.js";import"./if-defined-CZl0aa8O.js";import"./popover-Bo4XjLbu.js";import"./ai-dropdown-menu-item-Bl8Q2w-d.js";import"./ai-modal-DqaVtGGK.js";import"./ai-agent-info-vQ0bPKid.js";import"./ai-agent-selector-BYDYAsgl.js";import"./ai-chat-interface-DA0j8UPt.js";import"./ai-file-picker-D5mHTtBi.js";import"./ai-prompt-xrlKhMbu.js";import"./ai-suggestions-Be_p6eiU.js";import"./ai-voice-input-B2JmdvYH.js";import"./ai-response-message-toolbar-BP0uo5qX.js";import"./ai-empty-state-OhVpi5oK.js";import"./ai-error-message-BFpIonfX.js";import"./ai-response-message-D5HSpzJj.js";import"./ai-thinking-indicator-eB0g0lXW.js";import"./ai-user-message-Bkm1o-nT.js";import"./ai-user-message-toolbar-BkSnZ2c2.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
