import{x as i}from"./iframe-DDWPZmOE.js";import{M as s}from"./mock-adapter-BN0uINtG.js";import"./ai-threads-C2kqS7cW.js";import"./ai-chatbot-C0gljCg4.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-mWOTrp2D.js";import"./state-jx-YFNrJ.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-BLpa6fBg.js";import"./class-map-CpoAwji8.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CJNfq6B-.js";import"./tooltip-nYTVWPp2.js";import"./overlay-C_S7gTBX.js";import"./ai-chat-header-DM7Hlvd7.js";import"./ai-icon-hCVW1rCl.js";import"./ai-gradient-container-C33sWMK8.js";import"./ai-dropdown-menu-Bgi2bjfx.js";import"./if-defined-C_bAK3Dg.js";import"./popover-DlkdoYYb.js";import"./ai-agent-info-Dj3T8_gm.js";import"./ai-chat-interface-yw5A2iSV.js";import"./ai-empty-state-CrMHvV0x.js";import"./ai-error-message-C0zwIK7S.js";import"./ai-file-picker-Bq9rqrwC.js";import"./ai-prompt-Chm3Rzii.js";import"./ai-response-message-DVAHIPDk.js";import"./ai-actions-toolbar-D80EjPAO.js";import"./ai-suggestions-B3X4csks.js";import"./ai-thinking-indicator-CYwwy84Q.js";import"./ai-user-message-DEwQ5aWv.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",N={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},enableFileUpload:{control:{type:"boolean"},description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{enableFileUpload:!1,placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const R=["Demo"];export{t as Demo,R as __namedExportsOrder,N as default};
