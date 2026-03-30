import{r as S,x as s,E as _}from"./iframe-2rBvKK5_.js";import{t as T}from"./custom-element-UsVr97OX.js";import{n as d}from"./property-Dn--K5et.js";import{e as g,n as p}from"./ref-cC_IUWYZ.js";import{n as v}from"./when-CI7b_ccM.js";import{A}from"./ai-chatbot-base-CPoxqN6-.js";import"./ai-attachment-9py_lq-H.js";import"./ai-chat-header-D_MoGj6q.js";import"./ai-chat-interface-FISxD7KH.js";import"./ai-file-picker-B2rmhOK0.js";import"./ai-message-thread-De1gd5nt.js";import"./ai-prompt-BkJCchwL.js";import"./ai-spinner-C2YG4Fho.js";import"./ai-suggestions-szTwFVta.js";import"./ai-voice-input-DQO9vVXi.js";const E=':host{display:block;width:100%;height:100%}forge-ai-chat-interface::part(messages){overflow:hidden}forge-ai-chat-interface forge-ai-message-thread{min-height:0}.session-files{display:flex;flex-direction:column;gap:var(--forge-spacing-xsmall, 8px);min-width:0}.session-files .session-files-header{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit);color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6))}.session-files .session-files-list::-webkit-scrollbar{height:var(--forge-scrollbar-height, 16px);width:var(--forge-scrollbar-width, 16px)}.session-files .session-files-list::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.session-files .session-files-list::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover, var(--forge-theme-surface-container-low, #ebebeb))}.session-files .session-files-list::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.session-files .session-files-list::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height, 32px);width:var(--forge-scrollbar-thumb-min-width, 32px);border-radius:var(--forge-scrollbar-border-radius, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));border-width:var(--forge-scrollbar-border-width, 3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container, var(--forge-theme-surface-container-medium, #c2c2c2));background-clip:content-box}.session-files .session-files-list::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover, var(--forge-theme-surface-container-high, #9e9e9e))}.session-files .session-files-list{display:flex;gap:var(--forge-spacing-small, 12px);overflow-x:auto;padding-block-end:var(--forge-spacing-xsmall, 8px)}.disclaimer{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit);color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6));text-align:center;margin-block-start:var(--forge-spacing-xxsmall, 4px);margin-block-end:calc(var(--forge-spacing-small, 12px) * -1)}.suggestions-container{width:100%;align-self:start}';var B=Object.defineProperty,U=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},l=(e,t,a,h)=>{for(var r=h>1?void 0:h?U(t,a):t,m=e.length-1,b;m>=0;m--)(b=e[m])&&(r=(h?b(t,a,r):b(r))||r);return h&&r&&B(t,a,r),r},x=(e,t,a)=>t.has(e)||$("Cannot "+a),n=(e,t,a)=>(x(e,t,"read from private field"),a?a.call(e):t.get(e)),u=(e,t,a)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),f=(e,t,a)=>(x(e,t,"access private method"),a),y,c,o,w,k,z,C,I,M,R;const H="forge-ai-chatbot";let i=class extends A{constructor(){super(...arguments),u(this,o),this.showExpandButton=!1,this.showMinimizeButton=!1,this.expanded=!1,this.minimizeIcon="default",u(this,y,g()),this._messageThreadRef=g(),this._promptRef=g(),u(this,c,g())}_handleInfo(){const e=n(this,c).value;e?.showAgentInfo&&e.showAgentInfo(),super._handleInfo()}async sendMessage(e,t){this._promptRef.value?.closeSlashMenu(),await super.sendMessage(e,t)}focus(){this._promptRef.value?.focus()}render(){return s`
      <forge-ai-chat-interface
        ${p(n(this,y))}
        role="region"
        aria-label="AI chatbot"
        aria-live="polite"
        aria-busy=${this._isStreaming}>
        <forge-ai-chat-header
          ${p(n(this,c))}
          slot="header"
          ?show-expand-button=${this.showExpandButton}
          ?show-minimize-button=${this.showMinimizeButton}
          ?expanded=${this.expanded}
          ?disable-agent-selector=${this._isStreaming}
          export-option=${this._hasMessages?"enabled":"off"}
          clear-option=${this._hasMessages?"enabled":"off"}
          .minimizeIcon=${this.minimizeIcon}
          .agentInfo=${this.agentInfo}
          .headingLevel=${this.headingLevel}
          .titleText=${this.titleText}
          .agents=${this.agents}
          .selectedAgentId=${this.selectedAgentId}
          @forge-ai-chat-header-expand=${f(this,o,w)}
          @forge-ai-chat-header-minimize=${f(this,o,k)}
          @forge-ai-chat-header-clear=${f(this,o,z)}
          @forge-ai-chat-header-export=${this._handleExport}
          @forge-ai-chat-header-info=${f(this,o,C)}
          @forge-ai-chat-header-agent-change=${this._handleAgentChange}>
          <slot name="icon" slot="icon">
            <forge-ai-icon></forge-ai-icon>
          </slot>
        </forge-ai-chat-header>
        ${n(this,o,I)} ${n(this,o,R)} ${n(this,o,M)}
        ${v(this.disclaimerText,()=>s`<div class="disclaimer" slot="disclaimer">${this.disclaimerText}</div>`)}
      </forge-ai-chat-interface>
    `}};y=new WeakMap;c=new WeakMap;o=new WeakSet;w=function(){this._dispatchHostEvent({type:"forge-ai-chatbot-expand"})};k=function(){this._dispatchHostEvent({type:"forge-ai-chatbot-minimize"})};z=function(){this.clearMessages()};C=function(){this._handleInfo()};I=function(){const e=this._sessionFilesTemplate;return e===_?_:s`<div class="session-files" slot="attachments">${e}</div>`};M=function(){const e=this._isUploading;return s`
      <forge-ai-prompt
        ${p(this._promptRef)}
        slot="prompt"
        .placeholder=${this.placeholder}
        .running=${this._isStreaming||e}
        .slashCommands=${this._slashCommands}
        ?disabled=${e}
        ?debug-mode=${this.debugMode}
        @forge-ai-prompt-send=${this._handleSend}
        @forge-ai-prompt-stop=${this._handleStop}
        @forge-ai-prompt-cancel=${this._handleCancel}
        @forge-ai-prompt-debug-toggle=${this._handleDebugToggle}
        @forge-ai-prompt-command=${this._handleSlashCommand}>
        ${v(this.fileUpload==="on",()=>s`
            <forge-ai-file-picker
              slot="actions-start"
              variant="icon-button"
              multiple
              ?disabled=${e}
              .selectedFiles=${this._coreController?.pendingAttachments.map(t=>t.filename)??[]}
              @forge-ai-file-picker-change=${this._handleFileSelect}
              @forge-ai-file-picker-error=${this._handleFileError}>
            </forge-ai-file-picker>
          `)}
        ${v(this.voiceInput==="on",()=>s`
            <forge-ai-voice-input slot="actions-end" @forge-ai-voice-input-result=${this._handleVoiceInputResult}>
            </forge-ai-voice-input>
          `)}
      </forge-ai-prompt>
    `};R=function(){return s`
      <forge-ai-message-thread
        ${p(this._messageThreadRef)}
        .messageItems=${this._messageItems}
        .tools=${this._tools}
        ?enable-reactions=${this.enableReactions}
        ?show-thinking=${this._isStreaming}
        ?debug-mode=${this.debugMode}
        @forge-ai-message-thread-copy=${this._handleCopy}
        @forge-ai-message-thread-resend=${this._handleResend}
        @forge-ai-message-thread-thumbs-up=${this._handleThumbsUp}
        @forge-ai-message-thread-thumbs-down=${this._handleThumbsDown}
        @forge-ai-message-thread-user-copy=${this._handleUserCopy}
        @forge-ai-message-thread-user-resend=${this._handleUserResend}
        @forge-ai-message-thread-user-edit=${this._handleUserEdit}>
        <slot name="empty-state-heading" slot="empty-state-heading"></slot>
        <slot name="empty-state-message" slot="empty-state-message"></slot>
        <div class="suggestions-container" slot="empty-state-actions">
          <forge-ai-suggestions
            variant="block"
            .suggestions=${this.suggestions??[]}
            @forge-ai-suggestions-select=${this._handleSuggestionSelect}>
          </forge-ai-suggestions>
        </div>
      </forge-ai-message-thread>
    `};i.styles=S(E);l([d({type:Boolean,attribute:"show-expand-button"})],i.prototype,"showExpandButton",2);l([d({type:Boolean,attribute:"show-minimize-button"})],i.prototype,"showMinimizeButton",2);l([d({type:Boolean})],i.prototype,"expanded",2);l([d({attribute:"minimize-icon"})],i.prototype,"minimizeIcon",2);i=l([T(H)],i);
