import{x as i}from"./iframe-DMbuo427.js";import{M as p}from"./mock-adapter-DPRgB_9-.js";import"./ai-threads-CmKkHabj.js";import"./ai-chatbot-i9apFBBG.js";import"./ai-message-thread-CV_r2smz.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CtXI_GOA.js";import"./state-p5EnGfoQ.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DWzFxNhl.js";import"./class-map-Z_RZVYSV.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B9kDtrOn.js";import"./ai-spinner-fhSzb56z.js";import"./tooltip-fB3wd5DJ.js";import"./query-BpjciUlk.js";import"./overlay-CkHWG2Gf.js";import"./ai-chat-header-CmLJFgMR.js";import"./ai-icon-B8a1EEB0.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D8d20ro0.js";import"./ai-dropdown-menu-CYfCqcl1.js";import"./ai-dropdown-menu-item-CFMrBnzB.js";import"./popover-BAvHGkqZ.js";import"./ai-modal-SyFxU2yM.js";import"./ai-agent-info-kauVJzQ1.js";import"./ai-chat-interface-CeCepkyk.js";import"./ai-file-picker-zmFoaoUl.js";import"./ai-prompt-BgEfB_WS.js";import"./ai-suggestions-ni791voM.js";import"./ai-voice-input-CRkHzMS8.js";import"./ai-actions-toolbar-CavtQ-st.js";import"./ai-empty-state-C7CPZeCq.js";import"./ai-error-message-beHYZ0y0.js";import"./ai-response-message-DCp2PR2S.js";import"./ai-thinking-indicator-zSmzXlPW.js";import"./ai-user-message-DcQbmobB.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Q=["Demo"];export{e as Demo,Q as __namedExportsOrder,J as default};
