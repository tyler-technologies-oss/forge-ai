import{x as i}from"./iframe-Dgt9eTI-.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-CB1a_iXe.js";import"./ai-chatbot-base-Ci0yqlLw.js";import"./ai-chatbot-Y1UOcnkD.js";import"./ai-message-thread-Bsk_UVwX.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Bw7vS1iB.js";import"./base-WW3bLuII.js";import"./query-assigned-elements-BJKjVPl1.js";import"./ref-WGjiGXeE.js";import"./class-map-DcPyR-i2.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CHoPFZ-x.js";import"./ai-spinner-B18XZywO.js";import"./tooltip-BnCo3SPQ.js";import"./overlay-BEw4eyG3.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-DWqyZ-MM.js";import"./ai-icon-CPAIx5Wa.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-hPBpYg_A.js";import"./ai-dropdown-menu-D0Hpv60-.js";import"./if-defined-BxpsnrKp.js";import"./popover-D6eQA2MJ.js";import"./query-assigned-nodes-bGd5Z61O.js";import"./ai-dropdown-menu-item-Vs-OjV29.js";import"./ai-modal-Cx_1wuxl.js";import"./ai-agent-info-BOiGgO-T.js";import"./ai-agent-selector-CyfSps5_.js";import"./ai-chat-interface-6D7UaRkE.js";import"./ai-conversations-panel-CwDn2yBz.js";import"./ai-file-picker-BNByN24l.js";import"./ai-prompt-BgOhk8qb.js";import"./ai-suggestions-CkdnZfbK.js";import"./ai-voice-input-B8lY2mi7.js";import"./ai-response-message-toolbar-BRCLhjQH.js";import"./ai-empty-state-Dvq4WwO8.js";import"./ai-error-message-DnGH7NKP.js";import"./ai-response-message-Pv0TqNOR.js";import"./ai-thinking-indicator-BevtWkZ8.js";import"./ai-user-message-Don5CKYs.js";import"./ai-user-message-toolbar-BVGLhc2i.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",Z={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
