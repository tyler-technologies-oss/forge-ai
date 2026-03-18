import{r as E,x as n,E as _}from"./iframe-D3pErfQx.js";import{t as R}from"./custom-element-UsVr97OX.js";import{n as l}from"./property-BeBNLgIk.js";import{e as p,n as b}from"./ref-B64WPUXy.js";import{n as v}from"./when-CI7b_ccM.js";import{A as B}from"./ai-chatbot-base-Dt8_T3_b.js";import{g as $}from"./utils-B0W8KtS_.js";import"./ai-attachment-Cx1rtWdO.js";import"./ai-chat-header-CBnDNx-V.js";import"./ai-chat-interface-D1VEZpRH.js";import"./ai-file-picker-BSGr1UtO.js";import"./ai-message-thread-D0jE1HUp.js";import"./ai-prompt-BpPHZe0f.js";import"./ai-spinner-DA8VMGWG.js";import"./ai-suggestions-DY-kyJob.js";import"./ai-voice-input-4BKu-T-d.js";const H=':host{display:block;width:100%;height:100%}forge-ai-chat-interface::part(messages){overflow:hidden}forge-ai-chat-interface forge-ai-message-thread{min-height:0}.session-files{display:flex;flex-direction:column;gap:var(--forge-spacing-xsmall, 8px);min-width:0}.session-files .session-files-header{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit);color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6))}.session-files .session-files-list::-webkit-scrollbar{height:var(--forge-scrollbar-height, 16px);width:var(--forge-scrollbar-width, 16px)}.session-files .session-files-list::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.session-files .session-files-list::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover, var(--forge-theme-surface-container-low, #ebebeb))}.session-files .session-files-list::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.session-files .session-files-list::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height, 32px);width:var(--forge-scrollbar-thumb-min-width, 32px);border-radius:var(--forge-scrollbar-border-radius, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));border-width:var(--forge-scrollbar-border-width, 3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container, var(--forge-theme-surface-container-medium, #c2c2c2));background-clip:content-box}.session-files .session-files-list::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover, var(--forge-theme-surface-container-high, #9e9e9e))}.session-files .session-files-list{display:flex;gap:var(--forge-spacing-small, 12px);overflow-x:auto;padding-block-end:var(--forge-spacing-xsmall, 8px)}.disclaimer{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit);color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6));text-align:center;margin-block-start:var(--forge-spacing-xxsmall, 4px);margin-block-end:calc(var(--forge-spacing-small, 12px) * -1)}.suggestions-container{width:100%;align-self:start}';var P=Object.defineProperty,U=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},i=(e,t,a,g)=>{for(var s=g>1?void 0:g?U(t,a):t,c=e.length-1,f;c>=0;c--)(f=e[c])&&(s=(g?f(t,a,s):f(s))||s);return g&&s&&P(t,a,s),s},w=(e,t,a)=>t.has(e)||x("Cannot "+a),h=(e,t,a)=>(w(e,t,"read from private field"),a?a.call(e):t.get(e)),u=(e,t,a)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),d=(e,t,a)=>(w(e,t,"access private method"),a),y,m,o,I,k,z,A,C,M,S,T;const O="forge-ai-chatbot";let r=class extends B{constructor(){super(...arguments),u(this,o),this.showExpandButton=!1,this.showMinimizeButton=!1,this.expanded=!1,this.minimizeIcon="default",this.agents=[],u(this,y,p()),this._messageThreadRef=p(),this._promptRef=p(),u(this,m,p())}get _eventPrefix(){return"forge-ai-chatbot"}clearMessages(){this._dispatchHostEvent({type:"forge-ai-chatbot-clear",cancelable:!0}).defaultPrevented||super.clearMessages()}_handleInfo(){const e=h(this,m).value;e?.showAgentInfo&&e.showAgentInfo(),super._handleInfo()}getSelectedAgent(){return this.agents.find(e=>e.id===this.selectedAgentId)}async sendMessage(e,t){this._promptRef.value?.closeSlashMenu(),await super.sendMessage(e,t)}getThreadState(){return{...super.getThreadState(),selectedAgentId:this.selectedAgentId}}async setThreadState(e){await super.setThreadState(e),this.selectedAgentId=e.selectedAgentId}render(){return n`
      <forge-ai-chat-interface
        ${b(h(this,y))}
        role="region"
        aria-label="AI chatbot"
        aria-live="polite"
        aria-busy=${this._isStreaming}>
        <forge-ai-chat-header
          ${b(h(this,m))}
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
          @forge-ai-chat-header-expand=${d(this,o,I)}
          @forge-ai-chat-header-minimize=${d(this,o,k)}
          @forge-ai-chat-header-clear=${d(this,o,z)}
          @forge-ai-chat-header-export=${this._handleExport}
          @forge-ai-chat-header-info=${d(this,o,A)}
          @forge-ai-chat-header-agent-change=${d(this,o,C)}>
          <slot name="icon" slot="icon">
            <forge-ai-icon></forge-ai-icon>
          </slot>
        </forge-ai-chat-header>
        ${h(this,o,M)} ${h(this,o,T)} ${h(this,o,S)}
        ${v(this.disclaimerText,()=>n`<div class="disclaimer" slot="disclaimer">${this.disclaimerText}</div>`)}
      </forge-ai-chat-interface>
    `}};y=new WeakMap;m=new WeakMap;o=new WeakSet;I=function(){this._dispatchHostEvent({type:"forge-ai-chatbot-expand"})};k=function(){this._dispatchHostEvent({type:"forge-ai-chatbot-minimize"})};z=function(){this.clearMessages()};A=function(){this._handleInfo()};C=function(e){const{agent:t,previousAgentId:a}=e.detail;if(!this._dispatchHostEvent({type:"forge-ai-chatbot-agent-change",detail:{agent:t,previousAgentId:a}}).defaultPrevented){this.selectedAgentId=t?.id;const s=this._coreController.adapter;if(s&&(s.threadId=$()),this._hasMessages){const c=t?.name??this.titleText,f={id:$(),role:"system",content:`Switched to ${c}`,timestamp:Date.now(),status:"complete",clientOnly:!0};this._coreController.addMessage(f)}}};M=function(){const e=this._sessionFilesTemplate;return e===_?_:n`<div class="session-files" slot="attachments">${e}</div>`};S=function(){const e=this._isUploading;return n`
      <forge-ai-prompt
        ${b(this._promptRef)}
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
        ${v(this.fileUpload==="on",()=>n`
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
        ${v(this.voiceInput==="on",()=>n`
            <forge-ai-voice-input slot="actions-end" @forge-ai-voice-input-result=${this._handleVoiceInputResult}>
            </forge-ai-voice-input>
          `)}
      </forge-ai-prompt>
    `};T=function(){return n`
      <forge-ai-message-thread
        ${b(this._messageThreadRef)}
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
    `};r.styles=E(H);i([l({type:Boolean,attribute:"show-expand-button"})],r.prototype,"showExpandButton",2);i([l({type:Boolean,attribute:"show-minimize-button"})],r.prototype,"showMinimizeButton",2);i([l({type:Boolean})],r.prototype,"expanded",2);i([l({attribute:"minimize-icon"})],r.prototype,"minimizeIcon",2);i([l({type:Object,attribute:!1})],r.prototype,"agentInfo",2);i([l({attribute:!1})],r.prototype,"agents",2);i([l({attribute:"selected-agent-id"})],r.prototype,"selectedAgentId",2);r=i([R(O)],r);
