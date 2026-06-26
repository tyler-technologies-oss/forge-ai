import{x as d}from"./iframe-DM5dAlEW.js";import{I as p,l as c,a as l,m as f,n as m,o as g,p as h,q as u}from"./scaffold-C7L4w-0j.js";import"./split-button-CrmNwz_i.js";import{d as b,a as y}from"./ai-sidebar-BGjZogDk.js";import{d as I}from"./index-C2xCVSAE.js";import"./ai-chat-interface-CURRx06w.js";import"./ai-prompt-BBkYS6m2.js";import"./ai-chat-header-BAJGrR4G.js";import"./ai-user-message-lSyV3kX9.js";import"./ai-response-message-C7qDwyZs.js";import"./ai-button-DEstH_GT.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__;b();y();I();p.define([c,l,f,m,g,h,u]);const w="forge-ai-sidebar",x={title:"AI Components/Primitives/Sidebar",component:w,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the sidebar is open"},expanded:{control:{type:"boolean"},description:"Controls whether the sidebar is displayed in an expanded state"},resizable:{control:{type:"boolean"},description:"Enables sidebar resizing"}},args:{open:!1,expanded:!1,resizable:!0},render:a=>{const t=r("forge-ai-sidebar-open"),i=r("forge-ai-sidebar-close"),s=()=>{const e=document.querySelector("forge-ai-chat-interface");e&&(e.expanded=!e.expanded)},n=()=>{document.querySelector("forge-ai-sidebar")?.close()};return d`
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
          ?open=${a.open}
          ?resizable=${a.resizable}
          @forge-ai-sidebar-open=${t}
          @forge-ai-sidebar-close=${i}>
          <forge-ai-chat-interface>
            <forge-ai-chat-header
              slot="header"
              show-expand-button
              show-minimize-button
              minimize-icon="panel"
              ?expanded=${a.expanded}
              @forge-ai-chat-header-expand=${s}
              @forge-ai-chat-header-minimize=${n}>
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
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const S=["Demo"],P=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{P as A};
