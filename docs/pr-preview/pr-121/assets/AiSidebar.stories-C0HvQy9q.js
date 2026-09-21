import{x as p}from"./iframe-Cah43CYj.js";import{o as c}from"./if-defined-CMO5RKXX.js";import{I as l,l as f,a as m,m as h,n as g,o as u,p as b,q as y}from"./scaffold-DVgAiNe3.js";import"./split-button-BCl7423l.js";import{d as w,a as I}from"./ai-sidebar-DAIt0fwU.js";import{d as x}from"./index-BbSWjAK0.js";import"./ai-chat-interface-C_hV0NJy.js";import"./ai-prompt-C1ETOLxO.js";import"./ai-chat-header-ClBmHfkA.js";import"./ai-user-message-CIGFsZ3-.js";import"./ai-response-message-gvTjuVQe.js";import"./ai-button-CFcj984V.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__;w();I();x();l.define([f,m,h,g,u,b,y]);const S="forge-ai-sidebar",C={title:"AI Components/Primitives/Sidebar",component:S,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the sidebar is open"},expanded:{control:{type:"boolean"},description:"Controls whether the sidebar is displayed in an expanded state"},resizable:{control:{type:"select"},options:["on","off"],description:"Enables sidebar resizing"},width:{control:{type:"number"},description:"The current width of the sidebar in pixels. When set, overrides the persisted width."}},args:{open:!1,expanded:!1,resizable:"on",width:void 0},render:r=>{const t=a("forge-ai-sidebar-open"),i=a("forge-ai-sidebar-close"),s=a("forge-ai-sidebar-resize"),n=()=>{const e=document.querySelector("forge-ai-chat-interface");e&&(e.expanded=!e.expanded)},d=()=>{document.querySelector("forge-ai-sidebar")?.close()};return p`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Demo"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Page Title</h2>
          <forge-ai-button
            slot="end"
            @click=${()=>{document.querySelector("forge-ai-sidebar")?.toggle()}}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>Demo of the AI Sidebar component within a typical application layout.</p>
          </forge-card>
        </main>

        <forge-ai-sidebar
          slot="body-right"
          ?open=${r.open}
          resizable=${r.resizable}
          width=${c(r.width)}
          @forge-ai-sidebar-open=${t}
          @forge-ai-sidebar-close=${i}
          @forge-ai-sidebar-resize=${s}>
          <forge-ai-chat-interface>
            <forge-ai-chat-header
              slot="header"
              show-expand-button
              show-minimize-button
              minimize-icon="panel"
              ?expanded=${r.expanded}
              @forge-ai-chat-header-expand=${n}
              @forge-ai-chat-header-minimize=${d}>
            </forge-ai-chat-header>
            <forge-ai-user-message>
              Hello! Can you help me understand the analytics data I'm seeing in my dashboard?
            </forge-ai-user-message>
            <forge-ai-response-message>
              I'd be happy to help you understand your analytics data! I can see you're looking at your dashboard with
              various metrics and activity reports. What specific aspects would you like me to explain? I can help with:
              - Interpreting trends and patterns - Explaining key performance indicators - Suggesting areas for
              improvement - Answering questions about specific data points
            </forge-ai-response-message>
            <forge-ai-user-message> What should I focus on first when reviewing my dashboard? </forge-ai-user-message>
            <forge-ai-response-message>
              Great question! Here's a recommended approach for dashboard review: 1. **Start with key metrics** - Look
              at your primary KPIs first 2. **Check for anomalies** - Notice any unusual spikes or drops 3. **Review
              time trends** - Compare current data to historical patterns 4. **Identify opportunities** - Look for areas
              showing positive growth 5. **Address concerns** - Investigate any declining metrics Would you like me to
              walk through any of these areas with your current data?
            </forge-ai-response-message>

            <forge-ai-prompt slot="prompt"></forge-ai-prompt>
          </forge-ai-chat-interface>
        </forge-ai-sidebar>
      </forge-scaffold>
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const k=["Demo"],R=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:k,default:C},Symbol.toStringTag,{value:"Module"}));export{R as A};
