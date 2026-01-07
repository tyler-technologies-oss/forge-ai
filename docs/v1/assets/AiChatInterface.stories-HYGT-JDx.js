import{x as o}from"./iframe-Bp7ipRCr.js";import"./ai-chat-interface-8HS09v53.js";import"./ai-chat-header-DaIq-QPU.js";import"./ai-user-message-Bu68EeGF.js";import"./ai-response-message-DyBTydAO.js";import"./ai-suggestions-CVMG0DHJ.js";import"./ai-gradient-container-DJ3JRIIT.js";import"./ai-empty-state-BT6NE1vf.js";import"./ai-prompt-2SFyynPj.js";import{d as n}from"./index-Bgf7SWe0.js";const g="forge-ai-chat-interface";n();const p={title:"AI Components/Primitives/Chat Interface",component:g,render:()=>o`
      <forge-ai-chat-interface>
        <forge-ai-chat-header slot="header"></forge-ai-chat-header>
        <forge-ai-prompt slot="prompt"></forge-ai-prompt>
      </forge-ai-chat-interface>
    `},e={},a={render:()=>o`
      <forge-ai-gradient-container>
        <forge-ai-chat-interface>
          <forge-ai-chat-header slot="header"></forge-ai-chat-header>
          <forge-ai-empty-state>
            <forge-ai-suggestions slot="actions" variant="block" .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}> </forge-ai-suggestions>
          </forge-ai-empty-state>
          <forge-ai-prompt slot="prompt"></forge-ai-prompt>
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `},r={render:()=>o`
      <forge-ai-chat-interface>
        <forge-ai-chat-header slot="header"></forge-ai-chat-header>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
        <forge-ai-response-message>
          Sure! Here's a simple example of a generic function: This function works with any type T, providing type
          safety while being reusable.
        </forge-ai-response-message>
        <forge-ai-prompt slot="prompt"></forge-ai-prompt>
      </forge-ai-chat-interface>
    `},t={render:()=>o`
      <forge-ai-chat-interface>
        <forge-ai-chat-header slot="header"></forge-ai-chat-header>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
        <forge-ai-response-message>
          Sure! Here's a simple example of a generic function: This function works with any type T, providing type
          safety while being reusable.
        </forge-ai-response-message>
        <forge-ai-suggestions slot="suggestions" .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}></forge-ai-suggestions>
        <forge-ai-prompt slot="prompt"></forge-ai-prompt>
      </forge-ai-chat-interface>
    `},s={render:()=>o`
      <forge-ai-gradient-container>
        <forge-ai-chat-interface>
          <forge-ai-chat-header slot="header"></forge-ai-chat-header>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
          <forge-ai-suggestions slot="suggestions" .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}></forge-ai-suggestions>
          <forge-ai-prompt slot="prompt"></forge-ai-prompt>
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const suggestions = [{
      text: 'Help me write an email',
      value: 'email'
    }, {
      text: 'Create a presentation',
      value: 'presentation'
    }, {
      text: 'Write some code',
      value: 'code'
    }, {
      text: 'Plan a meeting',
      value: 'meeting'
    }, {
      text: 'Summarize a document',
      value: 'summarize'
    }] as Suggestion[];
    return html\`
      <forge-ai-gradient-container>
        <forge-ai-chat-interface>
          <forge-ai-chat-header slot="header"></forge-ai-chat-header>
          <forge-ai-empty-state>
            <forge-ai-suggestions slot="actions" variant="block" .suggestions=\${suggestions}> </forge-ai-suggestions>
          </forge-ai-empty-state>
          <forge-ai-prompt slot="prompt"></forge-ai-prompt>
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    \`;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-ai-chat-interface>
        <forge-ai-chat-header slot="header"></forge-ai-chat-header>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
        <forge-ai-response-message>
          Sure! Here's a simple example of a generic function: This function works with any type T, providing type
          safety while being reusable.
        </forge-ai-response-message>
        <forge-ai-prompt slot="prompt"></forge-ai-prompt>
      </forge-ai-chat-interface>
    \`;
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const suggestions = [{
      text: 'Help me write an email',
      value: 'email'
    }, {
      text: 'Create a presentation',
      value: 'presentation'
    }, {
      text: 'Write some code',
      value: 'code'
    }, {
      text: 'Plan a meeting',
      value: 'meeting'
    }, {
      text: 'Summarize a document',
      value: 'summarize'
    }] as Suggestion[];
    return html\`
      <forge-ai-chat-interface>
        <forge-ai-chat-header slot="header"></forge-ai-chat-header>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
        <forge-ai-response-message>
          Sure! Here's a simple example of a generic function: This function works with any type T, providing type
          safety while being reusable.
        </forge-ai-response-message>
        <forge-ai-suggestions slot="suggestions" .suggestions=\${suggestions}></forge-ai-suggestions>
        <forge-ai-prompt slot="prompt"></forge-ai-prompt>
      </forge-ai-chat-interface>
    \`;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const suggestions = [{
      text: 'Help me write an email',
      value: 'email'
    }, {
      text: 'Create a presentation',
      value: 'presentation'
    }, {
      text: 'Write some code',
      value: 'code'
    }, {
      text: 'Plan a meeting',
      value: 'meeting'
    }, {
      text: 'Summarize a document',
      value: 'summarize'
    }] as Suggestion[];
    return html\`
      <forge-ai-gradient-container>
        <forge-ai-chat-interface>
          <forge-ai-chat-header slot="header"></forge-ai-chat-header>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
          <forge-ai-suggestions slot="suggestions" .suggestions=\${suggestions}></forge-ai-suggestions>
          <forge-ai-prompt slot="prompt"></forge-ai-prompt>
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const m=["Demo","WithEmptyState","WithMessages","WithSuggestions","WithGradientBorderComponent"],S=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,WithEmptyState:a,WithGradientBorderComponent:s,WithMessages:r,WithSuggestions:t,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{S as A,e as D};
