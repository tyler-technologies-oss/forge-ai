import{x as i}from"./iframe-fPrcZ3VO.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-CAkNPwRx.js";import"./ai-chatbot-CAXi5YD3.js";import"./ai-message-thread-CXOhDvXV.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-B-tBK14A.js";import"./base-DyNh_L8u.js";import"./query-assigned-elements-qrRdHlAa.js";import"./ref-BralWNcM.js";import"./class-map-BSy_Mb4a.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DLgPTYCE.js";import"./ai-spinner-CDox9il2.js";import"./tooltip-CYBNOcYv.js";import"./overlay-CuJc5RGk.js";import"./ai-chat-header-Bt8c0vpY.js";import"./ai-icon-BQYDNa9D.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CbrG-nsY.js";import"./ai-dropdown-menu-1GmztPGw.js";import"./if-defined-DbOHjKr4.js";import"./popover-BmnC3vgR.js";import"./ai-dropdown-menu-item-hFOVXuVl.js";import"./ai-modal-DUhHLR9N.js";import"./ai-agent-info-Bla-pJiG.js";import"./ai-agent-selector-D0nCZwhX.js";import"./ai-chat-interface-Cy-4Qo7m.js";import"./ai-file-picker-CcYkLecX.js";import"./ai-prompt-CD7xLUX7.js";import"./ai-suggestions-DJQeI3C2.js";import"./ai-voice-input-D3-EAzHY.js";import"./ai-response-message-toolbar-BsRzDdY4.js";import"./ai-empty-state-DIUqrVXt.js";import"./ai-error-message-gSUNsGNW.js";import"./ai-response-message-CldQCtQm.js";import"./ai-thinking-indicator-Dusqwk0O.js";import"./ai-user-message-DT-zUBJ9.js";import"./ai-user-message-toolbar-BZ0ku4_d.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
