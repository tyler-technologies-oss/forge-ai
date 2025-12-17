import{r as M,i as O,x as p}from"./iframe-lCzSBZJV.js";import{t as S}from"./custom-element-C028faeO.js";import{n as x}from"./property-Fh8vuuB6.js";import{r as T}from"./state-DLFYxJ1X.js";import{n as A,e as F}from"./ai-modal-CtX-saxy.js";import{n as V}from"./when-3fO0zp9C.js";import"./ai-chat-interface-D0ljhRPA.js";import"./ai-chat-header-CWPz654e.js";import"./ai-gradient-container-BD9bft1n.js";import"./ai-user-message-CkustoM5.js";import"./ai-response-message-CWIRDCyo.js";import"./ai-suggestions-vMi2Hoee.js";const D=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}.ai-embedded-chat{display:contents}`;var I=Object.defineProperty,P=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},m=(e,t,a,h)=>{for(var r=h>1?void 0:h?P(t,a):t,f=e.length-1,g;f>=0;f--)(g=e[f])&&(r=(h?g(t,a,r):g(r))||r);return h&&r&&I(t,a,r),r},b=(e,t,a)=>t.has(e)||y("Cannot "+a),i=(e,t,a)=>(b(e,t,"read from private field"),a?a.call(e):t.get(e)),_=(e,t,a)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),o=(e,t,a)=>(b(e,t,"access private method"),a),s,n,u,C,$,w,E,c;const z="forge-ai-embedded-chat";let d=class extends O{constructor(){super(...arguments),_(this,n),this.expanded=!1,this.gradientVariant="medium",this._isModalFullscreen=!1,_(this,s,F())}updated(){i(this,s).value&&this._isModalFullscreen!==i(this,s).value.fullscreen&&(this._isModalFullscreen=i(this,s).value.fullscreen??!1)}render(){return p`
      ${V(this.expanded,()=>p`
          <forge-ai-modal
            ${A(i(this,s))}
            ?open=${this.expanded}
            @forge-ai-modal-close=${o(this,n,w)}
            @forge-ai-modal-fullscreen-change=${o(this,n,E)}>
            ${i(this,n,u)}
          </forge-ai-modal>
        `,()=>p`
          <forge-ai-gradient-container variant=${this.gradientVariant}>
            ${i(this,n,u)}
          </forge-ai-gradient-container>
        `)}
    `}expand(){this.expanded||(this.expanded=!0,o(this,n,c).call(this,"forge-ai-embedded-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,o(this,n,c).call(this,"forge-ai-embedded-chat-collapse"))}};s=new WeakMap;n=new WeakSet;u=function(){return p`
      <forge-ai-chat-interface>
        <forge-ai-chat-header
          slot="header"
          @forge-ai-chat-header-expand=${o(this,n,C)}
          @forge-ai-chat-header-minimize=${o(this,n,$)}
          show-expand-button
          ?expanded=${this.expanded}>
        </forge-ai-chat-header>
        <slot></slot>
        <slot name="suggestions" slot="suggestions"></slot>
        <slot name="prompt" slot="prompt"></slot>
      </forge-ai-chat-interface>
    `};C=function(){this.expanded=!this.expanded,this.expanded?o(this,n,c).call(this,"forge-ai-embedded-chat-expand"):o(this,n,c).call(this,"forge-ai-embedded-chat-collapse")};$=function(){this.collapse()};w=function(){this.expanded&&this.collapse()};E=function(e){this._isModalFullscreen=e.detail.isFullscreen};c=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};d.styles=M(D);m([x({type:Boolean})],d.prototype,"expanded",2);m([x({attribute:"gradient-variant"})],d.prototype,"gradientVariant",2);m([T()],d.prototype,"_isModalFullscreen",2);d=m([S(z)],d);const{action:v}=__STORYBOOK_MODULE_ACTIONS__,H="forge-ai-embedded-chat",W={title:"AI Components/Form Factors/Embedded",component:H,argTypes:{expanded:{control:{type:"boolean"},description:"Controls whether the modal view is open when expanded"},gradientVariant:{control:{type:"select"},options:["low","medium","high"],description:"Controls the gradient variant applied to the container"}},args:{expanded:!1,gradientVariant:"medium"},render:e=>p`
      <forge-ai-embedded-chat
        ?expanded=${e.expanded}
        gradient-variant=${e.gradientVariant}
        @forge-ai-embedded-chat-expand=${v("expand")}
        @forge-ai-embedded-chat-collapse=${v("collapse")}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
      </forge-ai-embedded-chat>
    `},l={};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};const B=["Demo"],X=Object.freeze(Object.defineProperty({__proto__:null,Demo:l,__namedExportsOrder:B,default:W},Symbol.toStringTag,{value:"Module"}));export{X as A};
