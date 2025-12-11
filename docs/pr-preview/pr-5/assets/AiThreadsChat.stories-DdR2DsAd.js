import{x as i}from"./iframe-DjaQ0J0C.js";import{M as s}from"./mock-adapter-_zUjDDpK.js";import"./ai-threads-BHvPV_WS.js";import"./ai-chatbot-Cf89Olsl.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CD-qlNYd.js";import"./state-CqtMIGZx.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-Cw0pOTW_.js";import"./class-map-DFSZ06Gv.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Dr20MiRg.js";import"./tooltip-WY1FBlPt.js";import"./overlay-BQLyz-PP.js";import"./ai-chat-header-CN4bIDW1.js";import"./ai-icon-Cea-fRFj.js";import"./ai-gradient-container-CWGUsw_n.js";import"./ai-dropdown-menu-BWTQq-Fd.js";import"./if-defined-CuWAuQKS.js";import"./popover-A5LZgFrf.js";import"./ai-agent-info-BleS1IvC.js";import"./ai-chat-interface-B4v1zptg.js";import"./ai-empty-state-Btaf0jV5.js";import"./ai-error-message-_Jn8zIbM.js";import"./ai-file-picker-BXJEZtVq.js";import"./ai-prompt-C1MgwYlt.js";import"./ai-response-message-bYiYEqVI.js";import"./ai-actions-toolbar-CksLEiJe.js";import"./ai-suggestions-DvcPpKJD.js";import"./ai-thinking-indicator-D7gprRe1.js";import"./ai-user-message-uVzZNv2h.js";import"./ai-voice-input-D1zER7O1.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},enableFileUpload:{control:{type:"boolean"},description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{enableFileUpload:!1,placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${e("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot
            .adapter=${r}
            ?enable-file-upload=${o.enableFileUpload}
            placeholder=${o.placeholder}
            @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-disconnected=${e("forge-ai-chatbot-disconnected")}
            @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${e("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${e("forge-ai-chatbot-error")}
            @forge-ai-chatbot-clear=${e("forge-ai-chatbot-clear")}
            @forge-ai-chatbot-info=${e("forge-ai-chatbot-info")}>
          </forge-ai-chatbot>
        </forge-ai-threads>
      </div>
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const Y=["Demo"];export{t as Demo,Y as __namedExportsOrder,R as default};
