import{r as F,i as S,x as l}from"./iframe-CupD09ex.js";import{t as E}from"./custom-element-C028faeO.js";import{n as y}from"./property-BSx3MwTX.js";import{r as T}from"./state-DZMgFiNl.js";import{n as A,e as I}from"./ai-modal-B4kaFx2m.js";import"./ai-dialog-BdKvd8zI.js";import"./ai-chat-interface-BELZ5qor.js";import"./ai-chat-header-Cpv6Dy43.js";import"./ai-user-message-ryaaA4ek.js";import"./ai-response-message-zkwZmrJ0.js";import"./ai-fab-T00E6ED5.js";import"./ai-suggestions-Dy_2Qs3U.js";const H=":host{display:block}";var z=Object.defineProperty,k=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},f=(e,t,o,r)=>{for(var a=r>1?void 0:r?k(t,o):t,u=e.length-1,m;u>=0;u--)(m=e[u])&&(a=(r?m(t,o,a):m(a))||a);return r&&a&&z(t,o,a),a},w=(e,t,o)=>t.has(e)||v("Cannot "+o),d=(e,t,o)=>(w(e,t,"read from private field"),o?o.call(e):t.get(e)),x=(e,t,o)=>t.has(e)?v("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),n=(e,t,o)=>(w(e,t,"access private method"),o),h,s,_,b,$,C,i;const O="forge-ai-floating-chat";let c=class extends S{constructor(){super(...arguments),x(this,s),this.open=!1,this.expanded=!1,this._isFullscreen=!1,x(this,h,I())}updated(){d(this,h).value&&this._isFullscreen!==d(this,h).value.isFullscreen&&(this._isFullscreen=d(this,h).value.isFullscreen)}render(){return l`
      <forge-ai-dialog
        ${A(d(this,h))}
        ?open=${this.open}
        ?expanded=${this.expanded}
        @forge-ai-dialog-fullscreen-change=${n(this,s,_)}
        @forge-ai-dialog-close=${n(this,s,C)}>
        <forge-ai-chat-interface>
          <forge-ai-chat-header
            slot="header"
            @forge-ai-chat-header-expand=${n(this,s,b)}
            @forge-ai-chat-header-minimize=${n(this,s,$)}
            ?show-expand-button=${!this._isFullscreen}
            show-minimize-button
            minimize-icon="default"
            ?expanded=${this.expanded}>
          </forge-ai-chat-header>
          <slot></slot>
          <slot name="suggestions" slot="suggestions"></slot>
          <slot name="prompt" slot="prompt"></slot>
        </forge-ai-chat-interface>
      </forge-ai-dialog>
    `}show(){this.open=!0,n(this,s,i).call(this,"forge-ai-floating-chat-open")}close(){this.expanded&&(this.expanded=!1,n(this,s,i).call(this,"forge-ai-floating-chat-collapse")),this.open=!1,n(this,s,i).call(this,"forge-ai-floating-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,n(this,s,i).call(this,"forge-ai-floating-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,n(this,s,i).call(this,"forge-ai-floating-chat-collapse"))}};h=new WeakMap;s=new WeakSet;_=function(e){this._isFullscreen=e.detail.isFullscreen};b=function(){this.expanded=!this.expanded,this.expanded?n(this,s,i).call(this,"forge-ai-floating-chat-expand"):n(this,s,i).call(this,"forge-ai-floating-chat-collapse")};$=function(){this.close()};C=function(){this.open&&this.close()};i=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};c.styles=F(H);f([y({type:Boolean})],c.prototype,"open",2);f([y({type:Boolean})],c.prototype,"expanded",2);f([T()],c.prototype,"_isFullscreen",2);c=f([E(O)],c);const W="forge-ai-floating-chat",D={title:"AI Components/Form Factors/Floating",component:W,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:e=>{const t=l`
      <forge-ai-floating-chat ?open=${e.open} ?expanded=${e.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
      </forge-ai-floating-chat>
    `,o=l`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab>
    `;return l`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo (Form Factor Component)</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This demo shows the structured form factor component that handles composition automatically.</p>
        </div>
        ${o} ${t}
      </div>
    `}},p={},g={render:e=>{const t=[{text:"Can you show me an example?",value:"example"},{text:"How do I use generics with interfaces?",value:"interfaces"},{text:"What are the benefits of generics?",value:"benefits"},{text:"How do I constrain generic types?",value:"constraints"}],o=l`
      <forge-ai-floating-chat ?open=${e.open} ?expanded=${e.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>

        <forge-ai-suggestions
          slot="suggestions"
          .suggestions=${t}
          @forge-ai-suggestions-select=${a=>{console.log("Selected suggestion:",a.detail)}}>
        </forge-ai-suggestions>
      </forge-ai-floating-chat>
    `,r=l`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab>
    `;return l`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Suggestions</h2>
          <p>This example shows how to slot in suggestions to the chat interface.</p>
        </div>
        ${r} ${o}
      </div>
    `}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const suggestions = [{
      text: 'Can you show me an example?',
      value: 'example'
    }, {
      text: 'How do I use generics with interfaces?',
      value: 'interfaces'
    }, {
      text: 'What are the benefits of generics?',
      value: 'benefits'
    }, {
      text: 'How do I constrain generic types?',
      value: 'constraints'
    }] as Suggestion[];
    const chat = html\`
      <forge-ai-floating-chat ?open=\${args.open} ?expanded=\${args.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>

        <forge-ai-suggestions
          slot="suggestions"
          .suggestions=\${suggestions}
          @forge-ai-suggestions-select=\${(event: CustomEvent) => {
      console.log('Selected suggestion:', event.detail);
    }}>
        </forge-ai-suggestions>
      </forge-ai-floating-chat>
    \`;
    const fab = html\`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=\${() => {
      const chatEl = document.querySelector('forge-ai-floating-chat');
      chatEl?.show();
    }}>
      </forge-ai-fab>
    \`;
    return html\`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Suggestions</h2>
          <p>This example shows how to slot in suggestions to the chat interface.</p>
        </div>
        \${fab} \${chat}
      </div>
    \`;
  }
}`,...g.parameters?.docs?.source}}};const P=["Demo","WithSuggestions"],V=Object.freeze(Object.defineProperty({__proto__:null,Demo:p,WithSuggestions:g,__namedExportsOrder:P,default:D},Symbol.toStringTag,{value:"Module"}));export{V as A};
