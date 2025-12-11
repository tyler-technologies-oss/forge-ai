import{x as i}from"./iframe-DNPZiRV8.js";import{M as s}from"./mock-adapter-_zUjDDpK.js";import"./ai-threads-B_SmnXmo.js";import"./ai-chatbot-Cx9SA98c.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-_rIcp3E4.js";import"./state-CgJGsGUT.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-BVxB8zNe.js";import"./class-map-BAXGTaLk.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DbcKoq-k.js";import"./tooltip-Do7jSokR.js";import"./overlay-Cza_ksMz.js";import"./ai-chat-header-DaU_IQsy.js";import"./ai-icon-BwgLmcgx.js";import"./ai-gradient-container-D9NPqEDJ.js";import"./ai-dropdown-menu-C-nPD7w0.js";import"./if-defined-DRkPVxdp.js";import"./popover-hTPuxKBs.js";import"./ai-agent-info-CrM-HHPp.js";import"./ai-chat-interface-rfxUwx7f.js";import"./ai-empty-state-CzQzg6oh.js";import"./ai-error-message-B5Fh2k-h.js";import"./ai-file-picker-ClUI58C0.js";import"./ai-prompt-CBv7w6Q5.js";import"./ai-response-message-CY2znWhi.js";import"./ai-actions-toolbar-B4UBpQvr.js";import"./ai-suggestions-2MOWzyUn.js";import"./ai-thinking-indicator-BCsZsWp1.js";import"./ai-user-message-ClynzvNo.js";import"./ai-voice-input-DciOp5aI.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",R={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["enabled","disabled"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"disabled",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${e("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot
            .adapter=${r}
            file-upload=${o.fileUpload}
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
