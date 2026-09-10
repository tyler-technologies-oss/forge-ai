import{r as ae,i as ne,x as c,E as j}from"./iframe-RRnsZQGs.js";import{n as re}from"./ref-D94Gb322.js";import"./ai-chatbot-base-DuDVO0Y3.js";import"./ai-chatbot-5e-vvs4p.js";import{o as Re}from"./ai-message-thread-BLV6tWto.js";import{r as Me}from"./utils-CwmN9dOd.js";import"./ai-empty-state-CzfEfi2o.js";import"./ai-suggestions-BihwA9Rh.js";import"./ai-voice-input-CWKEPF1h.js";import{t as ie}from"./custom-element-UsVr97OX.js";import{n as Y}from"./property-TwXTZb3z.js";import{r as J}from"./query-BSUsQcO2.js";import{n as We}from"./when-CI7b_ccM.js";import"./ai-artifact-CMkzi1G3.js";import"./tooltip-DNefRKJS.js";import{M as g}from"./mock-adapter-BpgeerXX.js";import{l as Oe,s as Pe}from"./mock-agents-Cm47oyNv.js";import{I as Be,t as Le,a as He}from"./scaffold-CqUsJtDT.js";import"./split-button-CtxBLhCa.js";import{d as Ne}from"./index-Cd592fEl.js";import{d as Ue}from"./index-7WzzMbpu.js";function qe(e){return"elementTag"in e}function Fe(e){return qe(e)?{elementTag:e.elementTag}:{render:e.render}}const se={name:"displayDataTable",displayName:"Display Data Table",description:"Display tabular data in a formatted table with headers and rows. Use this tool when you want to present structured data, lists where there are 2 or more columns, statistics, or any information that works well in a table format.",parameters:{type:"object",properties:{title:{type:"string",description:"Table title or caption displayed above the data."},headers:{type:"array",items:{type:"string"},description:"Column names displayed as table headers. Order matches the row data order."},maxNumberOfRows:{type:"number",description:"Limit total rows shown. Useful for large datasets to prevent overwhelming display."},rows:{type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}},description:"Data rows where each row is an array of values matching header order."}},required:["headers","rows"]},renderer:Fe({elementTag:"forge-ai-tool-data-table"})};function te(e){if(e==null)return"";const t=String(e);if(!t)return"";const a=/^(@)?(\+|-|=)?(DDE|HYPERLINK|IMPORTXML|IMPORTHTML|IMPORTDATA|IMPORTFEED|IMPORTRANGE)/i,n=/^[=+\-@|\t\r\n]/.test(t)||a.test(t)?`'${t}`:t;return/[",\n\r]/.test(n)?`"${n.replace(/"/g,'""')}"`:n}function Ge(e,t){return[e.map(o=>te(o)).join(","),...t.map(o=>o.map(n=>te(n)).join(","))].join(`\r
`)}function je(e,t="download"){const a=e.trim();if(!a)return`${t}.csv`;let o="",n=!1;for(const s of a){const h=/[a-zA-Z0-9._-]/.test(s)?s:"-";if(h==="-"){if(!o||n)continue;o+=h,n=!0;continue}o+=h,n=!1}return o=o.replace(/^[.-]+|[.-]+$/g,""),`${o||t}.csv`}function Ye(e,t){const a=new Blob([e],{type:"text/csv;charset=utf-8"}),o=URL.createObjectURL(a),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(o)}const Je='.forge-icon-button{--_icon-button-display:var(--forge-icon-button-display, inline-flex);--_icon-button-size:var(--forge-icon-button-size, 48px);--_icon-button-gap:var(--forge-icon-button-gap, 0);--_icon-button-icon-color:var(--forge-icon-button-icon-color, currentColor);--_icon-button-background-color:var(--forge-icon-button-background-color, none);--_icon-button-icon-size:var(--forge-icon-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.5));--_icon-button-cursor:var(--forge-icon-button-cursor, pointer);--_icon-button-padding:var(--forge-icon-button-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-border:var(--forge-icon-button-border, none);--_icon-button-shadow:var(--forge-icon-button-shadow, none);--_icon-button-transition-duration:var(--forge-icon-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_icon-button-transition-timing:var(--forge-icon-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_icon-button-shape:var(--forge-icon-button-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_icon-button-shape-start-start:var(--forge-icon-button-shape-start-start, var(--_icon-button-shape));--_icon-button-shape-start-end:var(--forge-icon-button-shape-start-end, var(--_icon-button-shape));--_icon-button-shape-end-start:var(--forge-icon-button-shape-end-start, var(--_icon-button-shape));--_icon-button-shape-end-end:var(--forge-icon-button-shape-end-end, var(--_icon-button-shape));--_icon-button-shape-squared:var(--forge-icon-button-shape-squared, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_icon-button-outlined-border-width:var(--forge-icon-button-outlined-border-width, 1px);--_icon-button-outlined-border-style:var(--forge-icon-button-outlined-border-style, solid);--_icon-button-outlined-border-color:var(--forge-icon-button-outlined-border-color, var(--_icon-button-icon-color));--_icon-button-tonal-icon-color:var(--forge-icon-button-tonal-icon-color, var(--forge-theme-on-primary-container, #222c62));--_icon-button-tonal-background-color:var(--forge-icon-button-tonal-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-filled-icon-color:var(--forge-icon-button-filled-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-filled-background-color:var(--forge-icon-button-filled-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-raised-shadow:var(--forge-icon-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_icon-button-raised-hover-shadow:var(--forge-icon-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_icon-button-raised-active-shadow:var(--forge-icon-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_icon-button-raised-disabled-shadow:var(--forge-icon-button-raised-disabled-shadow, none);--_icon-button-density-small-size:var(--forge-icon-button-density-small-size, 24px);--_icon-button-density-small-padding:var(--forge-icon-button-density-small-padding, var(--forge-spacing-xxxsmall, 2px));--_icon-button-density-small-icon-size:var(--forge-icon-button-density-small-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_icon-button-density-medium-size:var(--forge-icon-button-density-medium-size, 36px);--_icon-button-density-medium-padding:var(--forge-icon-button-density-medium-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-density-large-size:var(--forge-icon-button-density-large-size, var(--_icon-button-size));--_icon-button-toggle-on-background-color:var(--forge-icon-button-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-toggle-on-icon-color:var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-outlined-toggle-on-background-color:var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-outlined-toggle-on-icon-color:var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-tonal-toggle-background-color:var(--forge-icon-button-tonal-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-tonal-toggle-on-background-color:var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-tonal-toggle-on-icon-color:var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-background-color:var(--forge-icon-button-filled-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-filled-toggle-icon-color:var(--forge-icon-button-filled-toggle-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-background-color:var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-icon-color:var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-disabled-cursor:var(--forge-icon-button-disabled-cursor, not-allowed);--_icon-button-disabled-opacity:var(--forge-icon-button-disabled-opacity, .38);--_icon-button-popover-icon-padding:var(--forge-icon-button-popover-icon-padding, var(--forge-spacing-xsmall, 8px));--_icon-button-focus-indicator-color:var(--forge-icon-button-focus-indicator-color, var(--forge-theme-primary, #3f51b5))}.forge-icon-button{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;z-index:0;display:var(--_icon-button-display);align-items:center;justify-content:center;gap:var(--_icon-button-gap);box-sizing:border-box;height:var(--_icon-button-density-large-size);min-width:var(--_icon-button-density-large-size);border:var(--_icon-button-border);border-start-start-radius:var(--_icon-button-shape-start-start);border-start-end-radius:var(--_icon-button-shape-start-end);border-end-start-radius:var(--_icon-button-shape-end-start);border-end-end-radius:var(--_icon-button-shape-end-end);padding:var(--_icon-button-padding);box-shadow:var(--_icon-button-shadow);color:var(--_icon-button-icon-color);background:var(--_icon-button-background-color);font-size:var(--_icon-button-icon-size);cursor:var(--_icon-button-cursor);-webkit-user-select:none;user-select:none;transition-property:box-shadow,background;transition-duration:var(--_icon-button-transition-duration);transition-timing-function:var(--_icon-button-transition-timing)}.forge-icon-button img,.forge-icon-button svg{height:var(--_icon-button-icon-size);width:var(--_icon-button-icon-size)}.forge-icon-button svg{fill:currentColor}.forge-icon-button:not(:disabled){--_state-layer-display:var(--forge-state-layer-display, flex);--_state-layer-color:var(--forge-state-layer-color, var(--forge-theme-on-surface, #000000));--_state-layer-hover-color:var(--forge-state-layer-hover-color, var(--_state-layer-color));--_state-layer-hover-opacity:var(--forge-state-layer-hover-opacity, .08);--_state-layer-pressed-color:var(--forge-state-layer-pressed-color, var(--_state-layer-color));--_state-layer-pressed-opacity:var(--forge-state-layer-pressed-opacity, .12);--_state-layer-hover-duration:var(--forge-state-layer-hover-duration, 15ms);--_state-layer-pressed-duration:var(--forge-state-layer-pressed-duration, 105ms);--_state-layer-animation-duration:var(--forge-state-layer-animation-duration, 375ms)}.forge-icon-button:not(:disabled):before{position:absolute;backface-visibility:hidden;transform:translateZ(0);background-color:var(--_state-layer-hover-color);inset:0;transition:opacity var(--_state-layer-hover-duration) linear,background-color var(--_state-layer-hover-duration) linear;--_state-layer-hover-duration:var(--forge-state-layer-hover-duration, .1s);content:"";opacity:0;border-radius:inherit}.forge-icon-button:not(:disabled):hover:before{background-color:var(--_state-layer-hover-color);opacity:var(--_state-layer-hover-opacity)}.forge-icon-button:not(:disabled):active:before{opacity:var(--_state-layer-pressed-opacity);transition-duration:var(--_state-layer-pressed-duration);--_state-layer-pressed-opacity:var(--forge-state-layer-pressed-opacity, .18)}.forge-icon-button:not(:disabled){--forge-state-layer-color: var(--_icon-button-icon-color)}@keyframes forge-focus-indicator-outward-grow{0%{outline-width:0}to{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-outward-shrink{0%{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-grow{0%{border-width:0}to{border-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-shrink{0%{border-width:var(--_focus-indicator-active-width)}}.forge-icon-button:not(:disabled){outline:none}.forge-icon-button:not(:disabled):focus-visible:after{--_focus-indicator-display:var(--forge-focus-indicator-display, flex);--_focus-indicator-width:var(--forge-focus-indicator-width, var(--forge-border-medium, 2px));--_focus-indicator-active-width:var(--forge-focus-indicator-active-width, 6px);--_focus-indicator-color:var(--forge-focus-indicator-color, var(--forge-theme-primary, #3f51b5));--_focus-indicator-shape:var(--forge-focus-indicator-shape, calc(var(--forge-shape-extra-small, 1px) * var(--forge-shape-factor, 1)));--_focus-indicator-duration:var(--forge-focus-indicator-duration, var(--forge-animation-duration-long4, .6s));--_focus-indicator-easing:var(--forge-focus-indicator-easing, var(--forge-animation-easing-emphasized, cubic-bezier(.2, 0, 0, 1)));--_focus-indicator-shape-start-start:var(--forge-focus-indicator-shape-start-start, var(--_focus-indicator-shape));--_focus-indicator-shape-start-end:var(--forge-focus-indicator-shape-start-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-end:var(--forge-focus-indicator-shape-end-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-start:var(--forge-focus-indicator-shape-end-start, var(--_focus-indicator-shape));--_focus-indicator-outward-offset:var(--forge-focus-indicator-outward-offset, var(--forge-spacing-xxsmall, 4px));--_focus-indicator-inward-offset:var(--forge-focus-indicator-inward-offset, 0px);--_focus-indicator-offset-block:var(--forge-focus-indicator-offset-block, 0);--_focus-indicator-offset-inline:var(--forge-focus-indicator-offset-inline, 0)}.forge-icon-button:not(:disabled):focus-visible:after{animation-delay:0s,calc(var(--_focus-indicator-duration) * .25);animation-duration:calc(var(--_focus-indicator-duration) * .25),calc(var(--_focus-indicator-duration) * .75);animation-timing-function:var(--_focus-indicator-easing);box-sizing:border-box;color:var(--_focus-indicator-color);display:none;pointer-events:none;position:absolute;margin-block:var(--_focus-indicator-offset-block);margin-inline:var(--_focus-indicator-offset-inline);animation-name:forge-focus-indicator-outward-grow,forge-focus-indicator-outward-shrink;border-end-end-radius:calc(var(--_focus-indicator-shape-end-end) + var(--_focus-indicator-outward-offset));border-end-start-radius:calc(var(--_focus-indicator-shape-end-start) + var(--_focus-indicator-outward-offset));border-start-end-radius:calc(var(--_focus-indicator-shape-start-end) + var(--_focus-indicator-outward-offset));border-start-start-radius:calc(var(--_focus-indicator-shape-start-start) + var(--_focus-indicator-outward-offset));inset:calc(-1 * var(--_focus-indicator-outward-offset));outline:var(--_focus-indicator-width) solid currentColor;content:"";display:block}.forge-icon-button:not(:disabled){--forge-focus-indicator-color: var(--_icon-button-focus-indicator-color);--forge-focus-indicator-shape: var(--_icon-button-shape)}.forge-icon-button:not(:disabled):where(.forge-icon-button--text,:not(:where(.forge-icon-button--outlined,.forge-icon-button--tonal,.forge-icon-button--filled,.forge-icon-button--raised))){--forge-focus-indicator-outward-offset: 0px}.forge-icon-button--outlined{border-width:var(--_icon-button-outlined-border-width);border-style:var(--_icon-button-outlined-border-style);border-color:var(--_icon-button-outlined-border-color)}.forge-icon-button--tonal{--_icon-button-icon-color:var(--_icon-button-tonal-icon-color);--_icon-button-background-color:var(--_icon-button-tonal-background-color)}.forge-icon-button--filled,.forge-icon-button--raised{--_icon-button-icon-color:var(--_icon-button-filled-icon-color);--_icon-button-background-color:var(--_icon-button-filled-background-color)}.forge-icon-button--raised{--_icon-button-shadow:var(--_icon-button-raised-shadow)}.forge-icon-button--raised:hover{--_icon-button-raised-shadow:var(--_icon-button-raised-hover-shadow)}.forge-icon-button--raised:active{--_icon-button-raised-shadow:var(--_icon-button-raised-active-shadow)}.forge-icon-button--squared{--_icon-button-shape:var(--_icon-button-shape-squared)}.forge-icon-button--small{--_icon-button-size:var(--_icon-button-density-small-size);--_icon-button-icon-size:var(--_icon-button-density-small-icon-size);--_icon-button-padding:var(--_icon-button-density-small-padding)}.forge-icon-button--small>*{font-size:var(--_icon-button-density-small-icon-size)}.forge-icon-button--medium{--_icon-button-size:var(--_icon-button-density-medium-size);--_icon-button-padding:var(--_icon-button-density-medium-padding)}.forge-icon-button:disabled{pointer-events:none;opacity:var(--_icon-button-disabled-opacity);pointer-events:auto;cursor:not-allowed}.forge-icon-button forge-circular-progress{--forge-circular-progress-indicator-color: var(--_icon-button-icon-color);--forge-circular-progress-track-color: transparent;--forge-circular-progress-size: 1em}:host{display:block}.paginator-container{display:flex;align-items:center;justify-content:end;padding:var(--forge-spacing-small, 12px);border-block-start:1px solid var(--forge-theme-outline, #e0e0e0);border-end-start-radius:var(--forge-spacing-xsmall, 8px);border-end-end-radius:var(--forge-spacing-xsmall, 8px);background-color:var(--forge-theme-surface, #ffffff)}.paginator{display:flex;align-items:center;gap:var(--forge-spacing-small, 12px);border-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1));padding:var(--forge-spacing-xxxsmall, 2px)}.label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit)}';var Qe=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,le=e=>{throw TypeError(e)},_=(e,t,a,o)=>{for(var n=o>1?void 0:o?Ve(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(n=(o?i(t,a,n):i(n))||n);return o&&n&&Qe(t,a,n),n},Ke=(e,t,a)=>t.has(e)||le("Cannot "+a),Ze=(e,t,a)=>t.has(e)?le("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),G=(e,t,a)=>(Ke(e,t,"access private method"),a),w,ce,de,K;let m=class extends ne{constructor(){super(...arguments),Ze(this,w),this.currentPage=1,this.totalPages=1,this.disabled=!1,this._isPreviousDisabled=!0,this._isNextDisabled=!1}willUpdate(){this._isPreviousDisabled=this.disabled||this.currentPage<=1,this._isNextDisabled=this.disabled||this.currentPage>=this.totalPages}render(){return c`
      <div class="paginator-container">
        <div class="paginator">
          <button
            id="prev-btn"
            aria-label="View previous page"
            class="forge-icon-button forge-icon-button--medium"
            ?disabled=${this._isPreviousDisabled}
            @click=${G(this,w,ce)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.41 16.58 10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </button>
          <forge-ai-tooltip for="prev-btn" placement="bottom">Previous</forge-ai-tooltip>
          <span class="label">${this.currentPage} of ${this.totalPages}</span>
          <button
            id="next-btn"
            aria-label="View next page"
            class="forge-icon-button forge-icon-button--medium"
            ?disabled=${this._isNextDisabled}
            @click=${G(this,w,de)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
          <forge-ai-tooltip for="next-btn" placement="bottom">Next</forge-ai-tooltip>
        </div>
      </div>
    `}};w=new WeakSet;ce=function(){if(this._isPreviousDisabled)return;const e=this.currentPage-1;G(this,w,K).call(this,e)};de=function(){if(this._isNextDisabled)return;const e=this.currentPage+1;G(this,w,K).call(this,e)};K=function(e){this.dispatchEvent(new CustomEvent("page-change",{detail:{currentPage:e,previousPage:this.currentPage},bubbles:!0}))};m.styles=ae(Je);_([Y({type:Number,attribute:"current-page"})],m.prototype,"currentPage",2);_([Y({type:Number,attribute:"total-pages"})],m.prototype,"totalPages",2);_([Y({type:Boolean,reflect:!0})],m.prototype,"disabled",2);_([J()],m.prototype,"_isPreviousDisabled",2);_([J()],m.prototype,"_isNextDisabled",2);m=_([ie("forge-ai-paginator")],m);const Xe='.forge-icon-button{--_icon-button-display:var(--forge-icon-button-display, inline-flex);--_icon-button-size:var(--forge-icon-button-size, 48px);--_icon-button-gap:var(--forge-icon-button-gap, 0);--_icon-button-icon-color:var(--forge-icon-button-icon-color, currentColor);--_icon-button-background-color:var(--forge-icon-button-background-color, none);--_icon-button-icon-size:var(--forge-icon-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.5));--_icon-button-cursor:var(--forge-icon-button-cursor, pointer);--_icon-button-padding:var(--forge-icon-button-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-border:var(--forge-icon-button-border, none);--_icon-button-shadow:var(--forge-icon-button-shadow, none);--_icon-button-transition-duration:var(--forge-icon-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_icon-button-transition-timing:var(--forge-icon-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_icon-button-shape:var(--forge-icon-button-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_icon-button-shape-start-start:var(--forge-icon-button-shape-start-start, var(--_icon-button-shape));--_icon-button-shape-start-end:var(--forge-icon-button-shape-start-end, var(--_icon-button-shape));--_icon-button-shape-end-start:var(--forge-icon-button-shape-end-start, var(--_icon-button-shape));--_icon-button-shape-end-end:var(--forge-icon-button-shape-end-end, var(--_icon-button-shape));--_icon-button-shape-squared:var(--forge-icon-button-shape-squared, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_icon-button-outlined-border-width:var(--forge-icon-button-outlined-border-width, 1px);--_icon-button-outlined-border-style:var(--forge-icon-button-outlined-border-style, solid);--_icon-button-outlined-border-color:var(--forge-icon-button-outlined-border-color, var(--_icon-button-icon-color));--_icon-button-tonal-icon-color:var(--forge-icon-button-tonal-icon-color, var(--forge-theme-on-primary-container, #222c62));--_icon-button-tonal-background-color:var(--forge-icon-button-tonal-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-filled-icon-color:var(--forge-icon-button-filled-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-filled-background-color:var(--forge-icon-button-filled-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-raised-shadow:var(--forge-icon-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_icon-button-raised-hover-shadow:var(--forge-icon-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_icon-button-raised-active-shadow:var(--forge-icon-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_icon-button-raised-disabled-shadow:var(--forge-icon-button-raised-disabled-shadow, none);--_icon-button-density-small-size:var(--forge-icon-button-density-small-size, 24px);--_icon-button-density-small-padding:var(--forge-icon-button-density-small-padding, var(--forge-spacing-xxxsmall, 2px));--_icon-button-density-small-icon-size:var(--forge-icon-button-density-small-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_icon-button-density-medium-size:var(--forge-icon-button-density-medium-size, 36px);--_icon-button-density-medium-padding:var(--forge-icon-button-density-medium-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-density-large-size:var(--forge-icon-button-density-large-size, var(--_icon-button-size));--_icon-button-toggle-on-background-color:var(--forge-icon-button-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-toggle-on-icon-color:var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-outlined-toggle-on-background-color:var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-outlined-toggle-on-icon-color:var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-tonal-toggle-background-color:var(--forge-icon-button-tonal-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-tonal-toggle-on-background-color:var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-tonal-toggle-on-icon-color:var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-background-color:var(--forge-icon-button-filled-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-filled-toggle-icon-color:var(--forge-icon-button-filled-toggle-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-background-color:var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-icon-color:var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-disabled-cursor:var(--forge-icon-button-disabled-cursor, not-allowed);--_icon-button-disabled-opacity:var(--forge-icon-button-disabled-opacity, .38);--_icon-button-popover-icon-padding:var(--forge-icon-button-popover-icon-padding, var(--forge-spacing-xsmall, 8px));--_icon-button-focus-indicator-color:var(--forge-icon-button-focus-indicator-color, var(--forge-theme-primary, #3f51b5))}.forge-icon-button{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;z-index:0;display:var(--_icon-button-display);align-items:center;justify-content:center;gap:var(--_icon-button-gap);box-sizing:border-box;height:var(--_icon-button-density-large-size);min-width:var(--_icon-button-density-large-size);border:var(--_icon-button-border);border-start-start-radius:var(--_icon-button-shape-start-start);border-start-end-radius:var(--_icon-button-shape-start-end);border-end-start-radius:var(--_icon-button-shape-end-start);border-end-end-radius:var(--_icon-button-shape-end-end);padding:var(--_icon-button-padding);box-shadow:var(--_icon-button-shadow);color:var(--_icon-button-icon-color);background:var(--_icon-button-background-color);font-size:var(--_icon-button-icon-size);cursor:var(--_icon-button-cursor);-webkit-user-select:none;user-select:none;transition-property:box-shadow,background;transition-duration:var(--_icon-button-transition-duration);transition-timing-function:var(--_icon-button-transition-timing)}.forge-icon-button img,.forge-icon-button svg{height:var(--_icon-button-icon-size);width:var(--_icon-button-icon-size)}.forge-icon-button svg{fill:currentColor}.forge-icon-button:not(:disabled){--_state-layer-display:var(--forge-state-layer-display, flex);--_state-layer-color:var(--forge-state-layer-color, var(--forge-theme-on-surface, #000000));--_state-layer-hover-color:var(--forge-state-layer-hover-color, var(--_state-layer-color));--_state-layer-hover-opacity:var(--forge-state-layer-hover-opacity, .08);--_state-layer-pressed-color:var(--forge-state-layer-pressed-color, var(--_state-layer-color));--_state-layer-pressed-opacity:var(--forge-state-layer-pressed-opacity, .12);--_state-layer-hover-duration:var(--forge-state-layer-hover-duration, 15ms);--_state-layer-pressed-duration:var(--forge-state-layer-pressed-duration, 105ms);--_state-layer-animation-duration:var(--forge-state-layer-animation-duration, 375ms)}.forge-icon-button:not(:disabled):before{position:absolute;backface-visibility:hidden;transform:translateZ(0);background-color:var(--_state-layer-hover-color);inset:0;transition:opacity var(--_state-layer-hover-duration) linear,background-color var(--_state-layer-hover-duration) linear;--_state-layer-hover-duration:var(--forge-state-layer-hover-duration, .1s);content:"";opacity:0;border-radius:inherit}.forge-icon-button:not(:disabled):hover:before{background-color:var(--_state-layer-hover-color);opacity:var(--_state-layer-hover-opacity)}.forge-icon-button:not(:disabled):active:before{opacity:var(--_state-layer-pressed-opacity);transition-duration:var(--_state-layer-pressed-duration);--_state-layer-pressed-opacity:var(--forge-state-layer-pressed-opacity, .18)}.forge-icon-button:not(:disabled){--forge-state-layer-color: var(--_icon-button-icon-color)}@keyframes forge-focus-indicator-outward-grow{0%{outline-width:0}to{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-outward-shrink{0%{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-grow{0%{border-width:0}to{border-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-shrink{0%{border-width:var(--_focus-indicator-active-width)}}.forge-icon-button:not(:disabled){outline:none}.forge-icon-button:not(:disabled):focus-visible:after{--_focus-indicator-display:var(--forge-focus-indicator-display, flex);--_focus-indicator-width:var(--forge-focus-indicator-width, var(--forge-border-medium, 2px));--_focus-indicator-active-width:var(--forge-focus-indicator-active-width, 6px);--_focus-indicator-color:var(--forge-focus-indicator-color, var(--forge-theme-primary, #3f51b5));--_focus-indicator-shape:var(--forge-focus-indicator-shape, calc(var(--forge-shape-extra-small, 1px) * var(--forge-shape-factor, 1)));--_focus-indicator-duration:var(--forge-focus-indicator-duration, var(--forge-animation-duration-long4, .6s));--_focus-indicator-easing:var(--forge-focus-indicator-easing, var(--forge-animation-easing-emphasized, cubic-bezier(.2, 0, 0, 1)));--_focus-indicator-shape-start-start:var(--forge-focus-indicator-shape-start-start, var(--_focus-indicator-shape));--_focus-indicator-shape-start-end:var(--forge-focus-indicator-shape-start-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-end:var(--forge-focus-indicator-shape-end-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-start:var(--forge-focus-indicator-shape-end-start, var(--_focus-indicator-shape));--_focus-indicator-outward-offset:var(--forge-focus-indicator-outward-offset, var(--forge-spacing-xxsmall, 4px));--_focus-indicator-inward-offset:var(--forge-focus-indicator-inward-offset, 0px);--_focus-indicator-offset-block:var(--forge-focus-indicator-offset-block, 0);--_focus-indicator-offset-inline:var(--forge-focus-indicator-offset-inline, 0)}.forge-icon-button:not(:disabled):focus-visible:after{animation-delay:0s,calc(var(--_focus-indicator-duration) * .25);animation-duration:calc(var(--_focus-indicator-duration) * .25),calc(var(--_focus-indicator-duration) * .75);animation-timing-function:var(--_focus-indicator-easing);box-sizing:border-box;color:var(--_focus-indicator-color);display:none;pointer-events:none;position:absolute;margin-block:var(--_focus-indicator-offset-block);margin-inline:var(--_focus-indicator-offset-inline);animation-name:forge-focus-indicator-outward-grow,forge-focus-indicator-outward-shrink;border-end-end-radius:calc(var(--_focus-indicator-shape-end-end) + var(--_focus-indicator-outward-offset));border-end-start-radius:calc(var(--_focus-indicator-shape-end-start) + var(--_focus-indicator-outward-offset));border-start-end-radius:calc(var(--_focus-indicator-shape-start-end) + var(--_focus-indicator-outward-offset));border-start-start-radius:calc(var(--_focus-indicator-shape-start-start) + var(--_focus-indicator-outward-offset));inset:calc(-1 * var(--_focus-indicator-outward-offset));outline:var(--_focus-indicator-width) solid currentColor;content:"";display:block}.forge-icon-button:not(:disabled){--forge-focus-indicator-color: var(--_icon-button-focus-indicator-color);--forge-focus-indicator-shape: var(--_icon-button-shape)}.forge-icon-button:not(:disabled):where(.forge-icon-button--text,:not(:where(.forge-icon-button--outlined,.forge-icon-button--tonal,.forge-icon-button--filled,.forge-icon-button--raised))){--forge-focus-indicator-outward-offset: 0px}.forge-icon-button--outlined{border-width:var(--_icon-button-outlined-border-width);border-style:var(--_icon-button-outlined-border-style);border-color:var(--_icon-button-outlined-border-color)}.forge-icon-button--tonal{--_icon-button-icon-color:var(--_icon-button-tonal-icon-color);--_icon-button-background-color:var(--_icon-button-tonal-background-color)}.forge-icon-button--filled,.forge-icon-button--raised{--_icon-button-icon-color:var(--_icon-button-filled-icon-color);--_icon-button-background-color:var(--_icon-button-filled-background-color)}.forge-icon-button--raised{--_icon-button-shadow:var(--_icon-button-raised-shadow)}.forge-icon-button--raised:hover{--_icon-button-raised-shadow:var(--_icon-button-raised-hover-shadow)}.forge-icon-button--raised:active{--_icon-button-raised-shadow:var(--_icon-button-raised-active-shadow)}.forge-icon-button--squared{--_icon-button-shape:var(--_icon-button-shape-squared)}.forge-icon-button--small{--_icon-button-size:var(--_icon-button-density-small-size);--_icon-button-icon-size:var(--_icon-button-density-small-icon-size);--_icon-button-padding:var(--_icon-button-density-small-padding)}.forge-icon-button--small>*{font-size:var(--_icon-button-density-small-icon-size)}.forge-icon-button--medium{--_icon-button-size:var(--_icon-button-density-medium-size);--_icon-button-padding:var(--_icon-button-density-medium-padding)}.forge-icon-button:disabled{pointer-events:none;opacity:var(--_icon-button-disabled-opacity);pointer-events:auto;cursor:not-allowed}.forge-icon-button forge-circular-progress{--forge-circular-progress-indicator-color: var(--_icon-button-icon-color);--forge-circular-progress-track-color: transparent;--forge-circular-progress-size: 1em}.forge-icon{--_icon-color:var(--forge-icon-color, currentColor);--_icon-size:var(--forge-icon-size, 1em);--_icon-width:var(--forge-icon-width, var(--_icon-size));--_icon-height:var(--forge-icon-height, var(--_icon-size));--_icon-font-size:var(--forge-icon-font-size, calc(var(--forge-typography-font-size, 1rem) * 1.5))}img.forge-icon,svg.forge-icon{box-sizing:content-box;contain:content;font-size:var(--_icon-font-size);display:inline-block}img.forge-icon{width:var(--_icon-width);height:var(--_icon-height)}svg{width:var(--_icon-width);height:var(--_icon-height);display:block;fill:var(--_icon-color);stroke:var(--_icon-color);stroke-width:0}@keyframes float-in-label-animation{0%{translate:0;opacity:40%}to{translate:var(--_field-floating-label-translation);opacity:100%}}@keyframes float-out-label-animation{0%{translate:var(--_field-floating-label-translation);opacity:40%}to{translate:0;opacity:100%}}@keyframes multiline-inset-label-background-animation{0%{opacity:0%}to{opacity:100%}}@layer base,textarea,density,invalid,disabled;@layer base{.forge-field{--_field-shape:var(--forge-field-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_field-outline-style:var(--forge-field-outline-style, solid);--_field-outline-width:var(--forge-field-outline-width, var(--forge-border-thin, 1px));--_field-height:var(--forge-field-height, 40px);--_field-inset-height:var(--forge-field-inset-height, 48px);--_field-background:var(--forge-field-background, transparent);--_field-padding-inline:var(--forge-field-padding-inline, 12px);--_field-disabled-background:var(--forge-field-disabled-background, var(--forge-theme-surface-container-low, #ebebeb));--_field-disabled-opacity:var(--forge-field-disabled-opacity, .38);--_field-placeholder-color:var(--forge-field-placeholder-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)))}.forge-field{position:relative;display:flex;align-items:center;gap:var(--forge-spacing-xsmall, 8px);box-shadow:var(--_field-elevation);padding-inline:var(--_field-padding-inline);border-radius:var(--_field-shape);outline-style:var(--_field-outline-style);outline-width:var(--_field-outline-width);outline-color:var(--forge-theme-outline-low, #9e9e9e);outline-offset:calc(var(--_field-outline-width) * -1);background:var(--_field-background);opacity:var(--_field-disableable-opacity);cursor:var(--_field-disableable-cursor)}.forge-field:hover:not(:has(:where(input,textarea,select,.forge-field__input):disabled)){outline-color:var(--forge-theme-outline-high, #212121)}.forge-field :where(input,textarea,select,.forge-field__input){box-sizing:border-box;margin:0;outline:none;border:none;background-color:#0000;padding-block:0;padding-inline:0;block-size:100%;color:inherit;font:inherit;font-size:var(--_field-font-size);text-overflow:ellipsis;padding-block-start:0;padding-block-end:0;transition:padding-block var(--_field-floating-animation-duration) var(--_field-floating-animation-timing);display:flex;block-size:var(--_field-height);inline-size:100%;overflow:hidden;color:var(--forge-theme-text-high, rgba(0, 0, 0, .87));background:#0000;appearance:none}.forge-field :where(input,textarea,select,.forge-field__input)::placeholder{color:var(--_field-placeholder-color)}.forge-field--plain{--_field-multiline-inset-label-background:var(--forge-field-multiline-inset-label-background, var(--forge-theme-surface, #ffffff));--_field-multiline-inset-label-background-hover:var(--forge-field-multiline-inset-label-background-hover, var(--forge-theme-surface, #ffffff));--_field-outline-color:var(--forge-field-outline-color, transparent);--_field-outline-color-hover:var(--forge-field-outline-color-hover, transparent);--_field-inner-border-display:var(--forge-field-inner-border-display, none);--_field-padding-inline:var(--forge-field-padding-inline, 0);--_field-surface-display:var(--forge-field-surface-display, none);outline-width:0}.forge-field--tonal{--_field-outline-color:var(--forge-field-outline-color, transparent);--_field-outline-color-hover:var(--forge-field-outline-color-hover, transparent);--_field-inner-border-block-size:var(--forge-field-inner-border-block-size, calc(100% - 8px) );--_field-background:var(--_field-tonal-background);--_field-multiline-inset-label-background:var(--forge-field-multiline-inset-label-background, var(--_field-background));--_field-hover-background:var(--forge-field-hover-background, tonal-background-hover);--_field-multiline-inset-label-background:var(--forge-field-multiline-inset-label-background, var(--_field-multiline-inset-label-tonal-background));outline-width:0;background:var(--forge-theme-primary-container-low, #e8eaf6)}.forge-field--tonal:hover:not(:has(:where(input,textarea,select,.forge-field__input):disabled)){background:var(--forge-theme-surface-container-minimum, #f5f5f5)}.forge-field--filled{--_field-background:var(--_field-filled-background);--_field-multiline-inset-label-background:var(--forge-field-multiline-inset-label-background, var(--_field-background));background:var(--forge-theme-surface-bright, #ffffff)}.forge-field--raised{--_field-elevation:var(--forge-field-elevation, 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12));--_field-elevation-active:var(--forge-field-elevation-active, 0px 3px 3px -2px rgba(0, 0, 0, .2), 0px 3px 4px 0px rgba(0, 0, 0, .14), 0px 1px 8px 0px rgba(0, 0, 0, .12));--_field-outline-color:var(--forge-field-outline-color, transparent);--_field-outline-color-hover:var(--forge-field-outline-color-hover, transparent);--_field-inner-border-block-size:var(--forge-field-inner-border-block-size, calc(100% - 8px) );--_field-background:var(--_field-filled-background);--_field-multiline-inset-label-background:var(--forge-field-multiline-inset-label-background, var(--_field-background));outline-width:0}.forge-field--raised:hover:not(:has(:where(input,textarea,select,.forge-field__input):disabled)){box-shadow:var(--_field-elevation-active)}.forge-field--rounded{--_field-shape:var(--forge-field-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_field-padding-inline:var(--forge-field-padding-inline, var(--_field-rounded-container-padding-inline-start))}.forge-field:has(label){--_field-floating-label-translation:var(--forge-field-floating-label-translation, 0 calc(calc( calc(max(var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375))), var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25))))/2) + calc((var(--_field-height) - 56px) / 8)) * -1));display:grid;grid-template-columns:auto 1fr auto;gap:0;block-size:var(--_field-height);--_field-height:var(--forge-field-height, 48px)}.forge-field:has(label) label{position:absolute;grid-column:2;pointer-events:none;color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6))}.forge-field:has(label).forge-field--rounded{padding-inline:var(--forge-spacing-large, 24px)}@keyframes forge-field-float-label-in{0%{transform:translateY(15%);opacity:0}to{transform:translateY(0);opacity:1}}.forge-field:has(label).forge-field--float-label-in label{animation:forge-field-float-label-in var(--forge-animation-duration-short4, .2s) var(--forge-animation-easing-accelerate, cubic-bezier(.3, 0, 1, 1)) forwards}@keyframes forge-field-float-label-out{0%{opacity:0}to{opacity:1}}.forge-field:has(label).forge-field--float-label-out label{animation:forge-field-float-label-out var(--forge-animation-duration-short4, .2s) var(--forge-animation-easing-accelerate, cubic-bezier(.3, 0, 1, 1)) forwards}.forge-field:has(label).forge-field--float-label label,.forge-field:has(label):has(:where(:where(input,textarea,select,.forge-field__input):autofill,:where(input,textarea,select,.forge-field__input):placeholder-shown)) label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .8125)));font-weight:var(--forge-typography-label2-font-weight, 400);line-height:var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label2-letter-spacing, .0096153846em);text-transform:var(--forge-typography-label2-text-transform, inherit);text-decoration:var(--forge-typography-label2-text-decoration, inherit);translate:var(--_field-floating-label-translation)}.forge-field:has(label).forge-field--float-label:not(.forge-field--extra-small) :where(input,textarea,select,.forge-field__input),.forge-field:has(label):has(:where(:where(input,textarea,select,.forge-field__input):autofill,:where(input,textarea,select,.forge-field__input):placeholder-shown)):not(.forge-field--extra-small) :where(input,textarea,select,.forge-field__input){padding-block-start:calc((max(var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375))),var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)))) / 2 + (var(--_field-height) - 56px) / 8) * 2)!important}.forge-field:has(label) :where(input,textarea,select,.forge-field__input){grid-column:2;block-size:var(--_field-height)}.forge-field:has(label) :where(input,textarea,select,.forge-field__input)~*{grid-column:3;margin-inline-start:var(--forge-spacing-xsmall, 8px)}.forge-field:has(label)>:not(:where(input,textarea,select,.forge-field__input)~*,:where(input,textarea,select,.forge-field__input),label){grid-column:1;margin-inline-end:var(--forge-spacing-xsmall, 8px)}@keyframes forge-focus-indicator-outward-grow{0%{outline-width:0}to{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-outward-shrink{0%{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-grow{0%{border-width:0}to{border-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-shrink{0%{border-width:var(--_focus-indicator-active-width)}}.forge-field:has(:where(input,textarea,select,.forge-field__input):focus){outline:none}.forge-field:has(:where(input,textarea,select,.forge-field__input):focus):after{--_focus-indicator-display:var(--forge-focus-indicator-display, flex);--_focus-indicator-width:var(--forge-focus-indicator-width, var(--forge-border-medium, 2px));--_focus-indicator-active-width:var(--forge-focus-indicator-active-width, 6px);--_focus-indicator-color:var(--forge-focus-indicator-color, var(--forge-theme-primary, #3f51b5));--_focus-indicator-shape:var(--forge-focus-indicator-shape, calc(var(--forge-shape-extra-small, 1px) * var(--forge-shape-factor, 1)));--_focus-indicator-duration:var(--forge-focus-indicator-duration, var(--forge-animation-duration-long4, .6s));--_focus-indicator-easing:var(--forge-focus-indicator-easing, var(--forge-animation-easing-emphasized, cubic-bezier(.2, 0, 0, 1)));--_focus-indicator-shape-start-start:var(--forge-focus-indicator-shape-start-start, var(--_focus-indicator-shape));--_focus-indicator-shape-start-end:var(--forge-focus-indicator-shape-start-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-end:var(--forge-focus-indicator-shape-end-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-start:var(--forge-focus-indicator-shape-end-start, var(--_focus-indicator-shape));--_focus-indicator-outward-offset:var(--forge-focus-indicator-outward-offset, var(--forge-spacing-xxsmall, 4px));--_focus-indicator-inward-offset:var(--forge-focus-indicator-inward-offset, 0px);--_focus-indicator-offset-block:var(--forge-focus-indicator-offset-block, 0);--_focus-indicator-offset-inline:var(--forge-focus-indicator-offset-inline, 0);animation-delay:0s,calc(var(--_focus-indicator-duration) * .25);animation-duration:calc(var(--_focus-indicator-duration) * .25),calc(var(--_focus-indicator-duration) * .75);animation-timing-function:var(--_focus-indicator-easing);box-sizing:border-box;color:var(--_focus-indicator-color);display:none;pointer-events:none;position:absolute;margin-block:var(--_focus-indicator-offset-block);margin-inline:var(--_focus-indicator-offset-inline);animation-name:forge-focus-indicator-outward-grow,forge-focus-indicator-outward-shrink;border-end-end-radius:calc(var(--_focus-indicator-shape-end-end) + var(--_focus-indicator-outward-offset));border-end-start-radius:calc(var(--_focus-indicator-shape-end-start) + var(--_focus-indicator-outward-offset));border-start-end-radius:calc(var(--_focus-indicator-shape-start-end) + var(--_focus-indicator-outward-offset));border-start-start-radius:calc(var(--_focus-indicator-shape-start-start) + var(--_focus-indicator-outward-offset));inset:calc(-1 * var(--_focus-indicator-outward-offset));outline:var(--_focus-indicator-width) solid currentColor;content:"";display:block;border-radius:inherit}.forge-field:has(:where(input,textarea,select,.forge-field__input):focus){--forge-focus-indicator-color: var(--forge-theme-primary, #3f51b5);--forge-focus-indicator-outward-offset: 0px}}@layer textarea{.forge-field:has(textarea:only-child){padding-inline:0}.forge-field:has(textarea:only-child) textarea{padding-inline:var(--_field-padding-inline)}.forge-field:has(textarea){align-items:start;block-size:fit-content}.forge-field:has(textarea) textarea{padding-block-start:calc((var(--_field-height) - var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)))) / 2);padding-block-end:calc(max(var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375))),var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)))) / 2 + (var(--_field-height) - 56px) / 8 + (var(--_field-height) - var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)))) / 2);resize:vertical;block-size:fit-content}.forge-field:has(textarea) *:not(textarea){margin-block-start:var(--forge-spacing-xsmall, 8px)}}@layer density{.forge-field--dense,.forge-field--extra-small{--_field-height:var(--forge-field-height, 24px);--_field-padding-inline-start:var(--forge-field-padding-inline-start, 8px);--_field-padding-inline-end:var(--forge-field-padding-inline-end, 4px)}.forge-field--dense:has(label) label,.forge-field--extra-small:has(label) label{display:none}.forge-field--small{--_field-height:var(--forge-field-height, 32px)}.forge-field--small:has(label){--_field-height:var(--forge-field-height, 40px)}.forge-field--large{--_field-height:var(--forge-field-height, 48px)}.forge-field--large:has(label){--_field-height:var(--forge-field-height, 56px)}.forge-field--extra-large{--_field-height:var(--forge-field-height, 56px)}.forge-field--extra-large:has(label){--_field-height:var(--forge-field-height, 64px)}}@layer disabled{.forge-field:has(:where(input,textarea,select,.forge-field__input):disabled){--_field-background:var(--_field-disabled-background);--_field-disableable-cursor:var(--forge-field-disableable-cursor, not-allowed);--_field-disableable-opacity:var(--forge-field-disableable-opacity, var(--_field-disabled-opacity))}.forge-field:has(:where(input,textarea,select,.forge-field__input):disabled) :where(input,textarea,select,.forge-field__input):disabled{cursor:not-allowed}}@layer invalid{.forge-field--invalid,.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid){outline-color:var(--forge-theme-error, #b00020)}.forge-field--invalid :not(:where(input,textarea,select,.forge-field__input)),.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid) :not(:where(input,textarea,select,.forge-field__input)){color:var(--forge-theme-on-error-container, #5f0011)}.forge-field--invalid.forge-field:has(:where(input,textarea,select,.forge-field__input):focus),.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid).forge-field:has(:where(input,textarea,select,.forge-field__input):focus){--forge-focus-indicator-color: var(--forge-theme-error, #b00020);--forge-focus-indicator-outward-offset: calc(var(--_field-outline-width) * -1)}.forge-field--invalid label,.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid) label{color:var(--forge-theme-error, #b00020)}.forge-field--invalid.forge-field--tonal,.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid).forge-field--tonal{background:var(--forge-theme-error-container-low, #f6e0e4)}.forge-field--invalid.forge-field--tonal:hover:not(:has(:where(input,textarea,select,.forge-field__input):disabled)),.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid).forge-field--tonal:hover:not(:has(:where(input,textarea,select,.forge-field__input):disabled)){background:var(--forge-theme-error-container-minimum, #fcf5f6)}}@keyframes fadein{0%{opacity:0}to{opacity:1}}:host{display:block}.artifact{--forge-ai-artifact-content-padding: 0;height:100%}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading1-font-size-scale, .875)));font-weight:var(--forge-typography-heading1-font-weight, 500);line-height:var(--forge-typography-heading1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading1-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-heading1-letter-spacing, .0178571429em);text-transform:var(--forge-typography-heading1-text-transform, inherit);text-decoration:var(--forge-typography-heading1-text-decoration, inherit);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.icon-field{display:flex;align-items:center}.icon-field svg{width:20px;height:20px}.table-container{background-color:var(--forge-theme-surface, #ffffff);border-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1));overflow-x:auto}.table-container:focus-visible{outline:2px solid var(--forge-theme-primary, #3f51b5);outline-offset:2px}.table-container::-webkit-scrollbar{height:var(--forge-scrollbar-height, 16px);width:var(--forge-scrollbar-width, 16px)}.table-container::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.table-container::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover, var(--forge-theme-surface-container-low, #ebebeb))}.table-container::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.table-container::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height, 32px);width:var(--forge-scrollbar-thumb-min-width, 32px);border-radius:var(--forge-scrollbar-border-radius, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));border-width:var(--forge-scrollbar-border-width, 3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container, var(--forge-theme-surface-container-medium, #c2c2c2));background-clip:content-box}.table-container::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover, var(--forge-theme-surface-container-high, #9e9e9e))}.table-container::-webkit-scrollbar,.table-container::-webkit-scrollbar-corner,.table-container::-webkit-scrollbar-track{border-end-start-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1));border-end-end-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1))}.data-table{width:100%;border-spacing:0;overflow:hidden}.actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.table-head{color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6));font-weight:700;text-align:left;font-size:calc(var(--forge-typography-font-size, 1rem) * .75);box-sizing:border-box}.column-header{width:max-content;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .8125)));font-weight:var(--forge-typography-label2-font-weight, 400);line-height:var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label2-letter-spacing, .0096153846em);text-transform:var(--forge-typography-label2-text-transform, inherit);text-decoration:var(--forge-typography-label2-text-decoration, inherit);font-weight:600}.table-row{height:36px;height:32px}.table-row:nth-child(2n){background-color:var(--forge-theme-surface-dim, #fafafa)}.table-row:last-child td{border-bottom:none;border-end-start-radius:var(--forge-spacing-xsmall, 8px);border-end-end-radius:var(--forge-spacing-xsmall, 8px)}th,td{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit);padding-block:var(--forge-spacing-xsmall, 8px);padding-inline-start:var(--forge-spacing-xsmall, 8px);padding-inline-end:var(--forge-spacing-medium, 16px);border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:var(--forge-theme-outline, #e0e0e0)}td a{color:var(--forge-theme-primary, #3f51b5)}.body2{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit)}forge-ai-empty-state{display:block;padding:var(--forge-spacing-large, 24px);--ai-empty-state-icon-size: 48px}.empty-state-icon{width:48px;height:48px;fill:var(--forge-theme-outline, #e0e0e0)}';var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,ge=e=>{throw TypeError(e)},Q=(e,t,a,o)=>{for(var n=o>1?void 0:o?tt(t,a):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(n=(o?i(t,a,n):i(n))||n);return o&&n&&et(t,a,n),n},he=(e,t,a)=>t.has(e)||ge("Cannot "+a),d=(e,t,a)=>(he(e,t,"read from private field"),a?a.call(e):t.get(e)),oe=(e,t,a)=>t.has(e)?ge("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Z=(e,t,a)=>(he(e,t,"access private method"),a),l,f,q,pe,F,ue,fe,me,X,be,ve,ye,we,xe,ee,_e,$e,ke,Te,Se,Ce;const ot=10,at=5;let x=class extends ne{constructor(){super(...arguments),oe(this,l),this._currentPage=1,this._filterValue="",oe(this,ee,c`
    <label for="data-table-filter-input" class="sr-only">Filter table data</label>
    <div class="forge-field forge-field--small icon-field">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" />
      </svg>
      <input
        autocomplete="off"
        type="text"
        id="data-table-filter-input"
        placeholder="Filter data"
        .value=${this._filterValue}
        @input=${Z(this,l,ye)} />
    </div>
  `)}render(){const e=d(this,l,f);return!e||!e.headers||!e.rows?c`<forge-ai-artifact><p class="body2">No table data available</p></forge-ai-artifact>`:c`
      <forge-ai-artifact class="artifact">
        ${d(this,l,Se)} ${d(this,l,_e)} ${d(this,l,Te)} ${d(this,l,Ce)}
      </forge-ai-artifact>
    `}};l=new WeakSet;f=function(){return this.toolCall.args};q=function(){return d(this,l,f)?.maxNumberOfRows||ot};pe=function(){return d(this,l,f)?.rows?.length||0};F=function(){const e=d(this,l,f);return!e||!e.rows?[]:this._filterValue.trim()?e.rows.filter(t=>t.some(a=>String(a).toLowerCase().includes(this._filterValue.toLowerCase()))):e.rows};ue=function(){const e=d(this,l,F);if(!e.length||!d(this,l,X))return e;const t=(this._currentPage-1)*d(this,l,q),a=t+d(this,l,q);return e.slice(t,a)};fe=function(){const e=d(this,l,F);return e.length?Math.ceil(e.length/d(this,l,q)):1};me=function(){return d(this,l,pe)>at};X=function(){return d(this,l,F).length>d(this,l,q)};be=function(){return this._filterValue.trim()!==""&&d(this,l,F).length===0};ve=function(e){this._currentPage=e.detail.currentPage};ye=function(e){this._filterValue=e.target.value,this._currentPage=1};we=function(){const e=d(this,l,f);if(!e||!e.headers||!e.rows)return;const t=Ge(e.headers,e.rows),a=je(e.title||"","chatbot-data-table");Ye(t,a)};xe=function(){const e=d(this,l,f);return!e||!e.headers?.length||!e.rows?.length?j:c`
      <div>
        <button
          type="button"
          id="export-button"
          class="forge-icon-button forge-icon-button--medium"
          @click=${Z(this,l,we)}
          aria-label="Download table as CSV">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon" aria-hidden="true">
            <path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7z" />
          </svg>
        </button>
        <forge-ai-tooltip for="export-button" placement="bottom">Download CSV</forge-ai-tooltip>
      </div>
    `};ee=new WeakMap;_e=function(){const e=d(this,l,me),t=d(this,l,f)?.headers?.length&&d(this,l,f)?.rows?.length;return!e&&!t?j:c`
      <div class="actions" slot="actions">${We(e,()=>d(this,ee))} ${d(this,l,xe)}</div>
    `};$e=function(){return c`
      <forge-ai-empty-state>
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="empty-state-icon"
          aria-hidden="true">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />
        </svg>
        <h3 slot="heading">No results found</h3>
        <p slot="body">No data matches your filter "${this._filterValue}". Try adjusting your search terms.</p>
      </forge-ai-empty-state>
    `};ke=function(){const e=d(this,l,f),t=e?.title||"Data table";return c`
      <table class="data-table" aria-label="${t}">
        <thead class="table-head">
          <tr class="table-row">
            ${e?.headers.map(a=>c`
                <th>
                  <div class="column-header">${a}</div>
                </th>
              `)}
          </tr>
        </thead>
        <tbody>
          ${d(this,l,ue).map(a=>c`
              <tr class="table-row">
                ${a.map(o=>c` <td>${Re(Me(String(o)))}</td> `)}
              </tr>
            `)}
        </tbody>
      </table>
    `};Te=function(){return d(this,l,be)?d(this,l,$e):c`
      <div
        class="table-container"
        data-scroll-region="table"
        role="group"
        tabindex="0"
        aria-label="Tabular data: ${d(this,l,f)?.title||"Table"}">
        ${d(this,l,ke)}
      </div>
    `};Se=function(){const e=d(this,l,f);return e?.title?c`<h2 class="title" slot="start">${e.title}</h2>`:j};Ce=function(){return d(this,l,X)?c`<forge-ai-paginator
      current-page="${this._currentPage}"
      total-pages="${d(this,l,fe)}"
      @page-change=${Z(this,l,ve)}></forge-ai-paginator>`:j};x.styles=ae(Xe);Q([Y({attribute:!1})],x.prototype,"toolCall",2);Q([J()],x.prototype,"_currentPage",2);Q([J()],x.prototype,"_filterValue",2);x=Q([ie("forge-ai-tool-data-table")],x);const{action:r}=__STORYBOOK_MODULE_ACTIONS__,nt="forge-ai-chatbot",rt={title:"AI Components/Primitives/Chatbot",component:nt,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Custom title for the chatbot header"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},debugCommand:{control:"select",options:["on","off"],description:"Show/hide debug mode slash command"},exportOption:{control:"select",options:["on","off"],description:"Control export option visibility"},clearOption:{control:"select",options:["on","off"],description:'Control clear-conversation option visibility. "off" hides it entirely.'},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},showConversationsButton:{control:"boolean",description:"Show conversations button in header"},showThreadRename:{control:"boolean",description:"Show rename option in conversations panel"},showThreadDelete:{control:"boolean",description:"Show delete option in conversations panel"},threadsLoading:{control:"boolean",description:"Show a loading indicator in the conversations panel while recent chats are loading"},threadsError:{control:"text",description:"Message describing a failed thread load. Shown with a retry button in the conversations panel instead of its empty state or loading indicator"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt. Set to empty string to hide."},contextItems:{control:"object",description:"Context items to display as chips above the input",table:{type:{summary:"ContextItem[]"},category:"Properties"}}},args:{placeholder:"Ask a question...",titleText:"AI Assistant",fileUpload:"off",voiceInput:"on",debugCommand:"on",exportOption:"on",clearOption:"on",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",showConversationsButton:!1,showThreadRename:!0,showThreadDelete:!0,threadsLoading:!1,enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses.",contextItems:[]},render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a={name:"Staff Assistant",version:"1.3.5",identifier:"agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0",threadId:"7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf"},o=r("forge-ai-chatbot-connected"),n=r("forge-ai-chatbot-disconnected"),s=r("forge-ai-chatbot-message-sent"),i=r("forge-ai-chatbot-message-received"),h=r("forge-ai-chatbot-tool-call"),p=r("forge-ai-chatbot-error"),u=r("forge-ai-chatbot-expand"),b=r("forge-ai-chatbot-minimize"),Ie=r("forge-ai-chatbot-clear"),De=r("forge-ai-chatbot-export"),ze=r("forge-ai-chatbot-info"),Ae=r("forge-ai-chatbot-response-feedback"),Ee=r("forge-ai-chatbot-context-remove");return c`
      <div>
        <forge-ai-chatbot
          style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
          .adapter=${t}
          .agentInfo=${a}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          debug-command=${e.debugCommand}
          export-option=${e.exportOption}
          clear-option=${e.clearOption}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?show-conversations-button=${e.showConversationsButton}
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          ?threads-loading=${e.threadsLoading}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          .disclaimerText=${e.disclaimerText}
          .contextItems=${e.contextItems}
          @forge-ai-chatbot-connected=${o}
          @forge-ai-chatbot-disconnected=${n}
          @forge-ai-chatbot-message-sent=${s}
          @forge-ai-chatbot-message-received=${i}
          @forge-ai-chatbot-tool-call=${h}
          @forge-ai-chatbot-error=${p}
          @forge-ai-chatbot-expand=${u}
          @forge-ai-chatbot-minimize=${b}
          @forge-ai-chatbot-clear=${Ie}
          @forge-ai-chat-header-export=${De}
          @forge-ai-chatbot-info=${ze}
          @forge-ai-chatbot-response-feedback=${V=>Ae(V.detail)}
          @forge-ai-chatbot-context-remove=${V=>Ee(V.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},$={},k={render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return c`
      <div style="width: 100%; height: 800px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",value:"lorem-ipsum"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"}]}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Suggestions"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-connected=${r("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${r("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${r("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${r("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-error=${r("forge-ai-chatbot-error")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},T={args:{fileUpload:"on"},render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"1",label:"Customer ID: 12345",removable:!1},{id:"2",label:"Project: Phoenix"},{id:"3",label:"Order #78901"}],o=r("forge-ai-chatbot-context-remove");return c`
      <div style="height: 600px; max-width: 420px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .contextItems=${a}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Context"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-connected=${r("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${r("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${r("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${r("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-context-remove=${n=>o(n.detail)}
          @forge-ai-chatbot-error=${r("forge-ai-chatbot-error")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything with the current context in mind.</span>
        </forge-ai-chatbot>
      </div>
    `}},S={render:e=>{const t=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],a=new g({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:t}),o=n=>{r("forge-ai-chatbot-tool-call")(n.detail)};return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${a}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Tools"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          debug-mode
          @forge-ai-chatbot-tool-call=${o}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},C={args:{showMinimizeButton:!0},render:e=>{const t="ai-chatbot-thread-state",a=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const n=document.querySelector("forge-ai-chatbot");if(!n)return;const s=localStorage.getItem(t);if(s)try{const i=JSON.parse(s);n.setThreadState(i)}catch(i){console.error("Failed to restore thread state:",i)}n.addEventListener("forge-ai-chatbot-message-received",()=>{const i=n.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),n.addEventListener("forge-ai-chatbot-message-sent",()=>{const i=n.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),n.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(t)})},0),c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Thread Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Chat messages are automatically saved to localStorage. Refresh the page to see the conversation restored.
            Use the clear button in the header to reset.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${a}
          .suggestions=${o}
          placeholder=${e.placeholder}
          title-text="Persistent Chat"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-connected=${r("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${r("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${r("forge-ai-chatbot-message-received")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},I={render:e=>{const t=new it;return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .suggestions=${[{text:"Text then tool",value:"text-then-tool"},{text:"Tool then text",value:"tool-then-text"},{text:"Text, tool, text",value:"text-tool-text"},{text:"Alternating",value:"alternating"},{text:"Multiple tools",value:"multiple-tools"},{text:"Slow sequential tools",value:"slow-sequential"},{text:"Multiple text chunks",value:"multiple-text"},{text:"Text then gap",value:"text-then-gap"},{text:"Tool then gap then tool",value:"tool-gap-tool"},{text:"Tool then gap then text",value:"tool-gap-text"},{text:"Step gap (thinking between steps)",value:"step-gap"}]}
          placeholder=${e.placeholder}
          title-text="Mixed Responses"
          ?enable-reactions=${e.enableReactions}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}};class it extends g{#a=2e3;#o=2e3;#n=500;#r=2e3;#i=50;constructor(){super({simulateStreaming:!0,simulateTools:!0})}sendMessage(t){this._updateState({isRunning:!0});const o=t[t.length-1]?.content?.toLowerCase()||"";this._emitRunStarted(),o.includes("text-then-tool")||o==="text then tool"?this.#s():o.includes("tool-then-text")||o==="tool then text"?this.#l():o.includes("text-tool-text")||o==="text, tool, text"?this.#c():o.includes("alternating")?this.#d():o.includes("multiple-tools")||o==="multiple tools"?this.#g():o.includes("slow-sequential")||o==="slow sequential tools"?this.#h():o.includes("multiple-text")||o==="multiple text chunks"?this.#b():o.includes("text-then-gap")||o==="text then gap"?this.#p():o.includes("tool-gap-tool")||o==="tool then gap then tool"?this.#f():o.includes("tool-gap-text")||o==="tool then gap then text"?this.#m():(o.includes("step-gap")||o==="step gap (thinking between steps)")&&this.#u()}sendToolResult(t,a){this._emitToolResult({toolCallId:t,result:a,message:{id:this.#e(),role:"tool",content:JSON.stringify(a),timestamp:Date.now(),status:"complete",toolCallId:t}})}#s(){const t=this.#e(),a=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"Let me check the weather for you.",()=>{this._emitToolCallStart({id:a,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"getCurrentWeather",args:{location:"Chicago"}}),this._emitToolResult({toolCallId:a,result:{temperature:65,conditions:"cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#o)})},this.#a)}#l(){const t=this.#e(),a=this.#e();setTimeout(()=>{this._emitMessageStart(t),this._emitToolCallStart({id:a,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"getCurrentWeather",args:{location:"Boston"}}),this._emitToolResult({toolCallId:a,result:{temperature:58,conditions:"partly cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}});const o=this.#e();this._emitMessageStart(o),this.#t(o,"Based on the weather data, it looks sunny today!",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#o)},this.#a)}#c(){const t=this.#e(),a=this.#e(),o=this.#e(),n=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"Let me gather that information for you.",()=>{this._emitToolCallStart({id:a,messageId:t,name:"fetchUserData"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"fetchUserData",args:{userId:"abc123"}}),this._emitToolResult({toolCallId:a,result:{name:"Jane Smith",role:"Admin"},message:{id:t,role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitToolCallStart({id:o,messageId:t,name:"queryPermissions"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"queryPermissions",args:{role:"Admin"}}),this._emitToolResult({toolCallId:o,result:{canEdit:!0,canDelete:!0},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:n,messageId:t,name:"loadDashboard"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:t,name:"loadDashboard",args:{view:"summary"}}),this._emitToolResult({toolCallId:n,result:{widgets:5,lastUpdated:"2024-01-15"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}}),this.#t(t,"Done! I found the user profile, verified permissions, and loaded the dashboard. Everything is ready for you.",()=>{this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#o)},this.#o)},this.#o)})},this.#a)}#d(){const t=this.#e(),a=this.#e(),o=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"First, let me check the weather.",()=>{this._emitToolCallStart({id:a,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"getCurrentWeather",args:{location:"Denver"}}),this._emitToolResult({toolCallId:a,result:{temperature:70,conditions:"clear"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitMessageStart(t),this.#t(t,"Now let me search the database for related info.",()=>{this._emitToolCallStart({id:o,messageId:t,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"searchDatabase",args:{query:"weather history"}}),this._emitToolResult({toolCallId:o,result:{records:42,summary:"Historical data found"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitMessageStart(t),this.#t(t,"All done! I found the information you need.",()=>{this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#o)})},this.#o)})},this.#a)}#g(){const t=this.#e(),a=this.#e(),o=this.#e(),n=this.#e();setTimeout(()=>{this._emitMessageStart(t),this._emitToolCallStart({id:a,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"getCurrentWeather",args:{location:"Miami"}}),this._emitToolResult({toolCallId:a,result:{temperature:85,conditions:"humid"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitToolCallStart({id:o,messageId:t,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"searchDatabase",args:{query:"forecast"}}),this._emitToolResult({toolCallId:o,result:{records:15,summary:"Forecast data available"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:n,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:t,name:"getCurrentWeather",args:{location:"Orlando"}}),this._emitToolResult({toolCallId:n,result:{temperature:82,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}}),this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#o)},this.#o)},this.#o)},this.#a)}#h(){const a=(n,s,i)=>{let h=0;const p=()=>{if(h<s.length){const u=s[h],b=this.#e();this._emitToolCallStart({id:b,messageId:n,name:u.name}),setTimeout(()=>{this._emitToolCallEnd({id:b,messageId:n,name:u.name,args:u.args}),this._emitToolResult({toolCallId:b,result:u.result,message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:b}}),h++,p()},2500)}else i()};p()},o=this.#e();setTimeout(()=>{this._emitMessageStart(o),this.#t(o,"I'll help you with that comprehensive analysis. Let me gather the necessary data first.",()=>{this._emitMessageEnd(o);const n=this.#e();a(n,[{name:"fetchUserProfile",args:{userId:"12345"},result:{name:"John Doe",role:"Admin"}},{name:"queryDatabase",args:{table:"orders"},result:{count:47,total:"$12,450"}},{name:"loadPermissions",args:{role:"Admin"},result:{canEdit:!0,canDelete:!0}},{name:"fetchAccountSettings",args:{userId:"12345"},result:{theme:"dark",notifications:!0}},{name:"loadRecentActivity",args:{limit:20},result:{activities:20,lastLogin:"2024-01-15"}},{name:"queryInventory",args:{warehouse:"main"},result:{items:1250,lowStock:12}},{name:"fetchPaymentMethods",args:{userId:"12345"},result:{cards:2,defaultCard:"Visa ****4242"}},{name:"loadShippingAddresses",args:{userId:"12345"},result:{addresses:3,defaultAddress:"Home"}}],()=>{const s=this.#e();this.#t(s,"Great, I found the user data and permissions. Now let me analyze the trends and generate your report.",()=>{this._emitMessageEnd(s);const i=this.#e();a(i,[{name:"generateAnalyticsReport",args:{format:"pdf",range:"30d"},result:{url:"/reports/analytics.pdf"}}],()=>{const h=this.#e();this.#t(h,"All done! Here's what I found: John Doe has admin privileges with 47 orders totaling $12,450. The analytics report has been generated and is ready for download.",()=>{this._emitMessageEnd(h),this._updateState({isRunning:!1}),this._emitRunFinished()})})})})})},this.#a)}#p(){const a=this.#e();setTimeout(()=>{this._emitMessageStart(a),this.#t(a,"Here is a first thought. Now watch for a gap with no active tool.",()=>{this._emitMessageEnd(a),setTimeout(()=>{const o=this.#e();this._emitMessageStart(o),this.#t(o,"And here is more after the gap.",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})},3e3)})},this.#a)}#u(){const a=this.#e();setTimeout(()=>{this._emitMessageStart(a),this.#t(a,"Let me look into that for you.",()=>{this._emitStepFinished("step-0"),setTimeout(()=>{this._emitStepStarted("step-1"),this.#t(a," Based on what I found, here is the answer.",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})},3e3)})},this.#a)}#f(){const t=this.#e(),a=this.#e(),o=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"Let me check the weather and look up the forecast history.",()=>{this._emitToolCallStart({id:a,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"getCurrentWeather",args:{location:"Seattle"}}),this._emitToolResult({toolCallId:a,result:{temperature:55,conditions:"rainy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),setTimeout(()=>{this._emitToolCallStart({id:o,messageId:t,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"searchDatabase",args:{query:"forecast"}}),this._emitToolResult({toolCallId:o,result:{records:30,summary:"Forecast data found"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this.#t(t,"It's currently rainy and 55°F in Seattle, with matching historical trends.",()=>{this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#o)},this.#r)},this.#o)})},this.#a)}#m(){const t=this.#e(),a=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"Let me pull up the current weather for you.",()=>{this._emitToolCallStart({id:a,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"getCurrentWeather",args:{location:"Austin"}}),this._emitToolResult({toolCallId:a,result:{temperature:92,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),setTimeout(()=>{const o=this.#e();this._emitMessageStart(o),this.#t(o,"Based on the data I gathered, here is your summary.",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#r)},this.#o)})},this.#a)}#b(){const t=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"This is the first text chunk of the response.",()=>{this._emitMessageEnd(t),setTimeout(()=>{const a=this.#e();this._emitMessageStart(a),this.#t(a,"Here is another text chunk that follows immediately.",()=>{this._emitMessageEnd(a),setTimeout(()=>{const o=this.#e();this._emitMessageStart(o),this.#t(o,"And finally, a third text chunk to complete the response!",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#n)})},this.#n)})},this.#a)}#t(t,a,o){const n=a.split(" ");let s=0;const i=()=>{s<n.length?(this._emitMessageDelta(t,(s===0?"":" ")+n[s]),s++,setTimeout(i,this.#i)):o()};i()}#e(){return Math.random().toString(36).slice(2,11)}}const D={parameters:{controls:{include:["agentListSize","titleText"]}},argTypes:{agentListSize:{control:"select",options:["small","large"],description:"Toggle between small (4) and large (50) agent lists"}},args:{agentListSize:"small"},render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=e.agentListSize==="large"?Oe:Pe,o=r("forge-ai-chatbot-agent-change");return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Agent Selector Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Click on the header title to see the agent selector dropdown. Use the "agentListSize" control to toggle
            between a small list (4 agents) and a large list (50 agents) which shows the search filter.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${t}
          .agents=${a}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-agent-change=${n=>o(n.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},z={args:{enableReactions:!0},render:e=>{const t="ai-chatbot-feedback-state",a=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{id:"user-1",role:"user",content:"What is TypeScript?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to the language.",timestamp:Date.now()-59e3,status:"complete",feedback:{type:"positive"}},{id:"user-2",role:"user",content:"What are the benefits?",timestamp:Date.now()-3e4,status:"complete"},{id:"assistant-2",role:"assistant",content:"Key benefits include: better IDE support with autocompletion and refactoring, catching errors at compile time rather than runtime, improved code documentation through types, and easier maintenance of large codebases.",timestamp:Date.now()-29e3,status:"complete",feedback:{type:"negative",reason:"Missing information about interfaces"}}];return setTimeout(()=>{const n=document.querySelector("forge-ai-chatbot");if(!n)return;const s=localStorage.getItem(t);if(s)try{const i=JSON.parse(s);n.setThreadState(i)}catch(i){console.error("Failed to restore thread state:",i),n.setThreadState({messages:o})}else n.setThreadState({messages:o});n.addEventListener("forge-ai-chatbot-response-feedback",()=>{const i=n.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),n.addEventListener("forge-ai-chatbot-message-received",()=>{const i=n.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),n.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(t)})},0),c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Feedback Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows pre-loaded messages with feedback state. The first response has thumbs up, the second has
            thumbs down. Give feedback on new responses and refresh to see it persist.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${a}
          placeholder=${e.placeholder}
          title-text="Feedback Persistence"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-response-feedback=${r("forge-ai-chatbot-response-feedback")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},A={args:{showMinimizeButton:!0,showExpandButton:!0},render:e=>{Ue(),Ne(),Be.define([Le,He]);const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text="Chatbot with Custom Actions"
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          @forge-ai-chatbot-connected=${r("forge-ai-chatbot-connected")}>
          <forge-icon-button slot="header-actions" density="medium" aria-label="History">
            <forge-icon name="history"></forge-icon>
          </forge-icon-button>
          <forge-icon-button slot="header-actions" density="medium" aria-label="Settings">
            <forge-icon name="settings"></forge-icon>
          </forge-icon-button>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},E={render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500,tools:[se]}),a={id:"tool-1",messageId:"assistant-1",name:"displayDataTable",status:"complete",type:"client",args:{title:"Q4 2024 Sales Report",headers:["Region","Product","Units Sold","Revenue","Growth"],rows:[["North","Widget Pro",1250,"$125,000","+15%"],["South","Widget Pro",890,"$89,000","+8%"],["East","Widget Basic",2100,"$84,000","+22%"],["West","Widget Basic",1750,"$70,000","+12%"],["North","Widget Enterprise",45,"$225,000","+35%"],["South","Widget Enterprise",32,"$160,000","+18%"],["East","Widget Pro",980,"$98,000","+10%"],["West","Widget Pro",1100,"$110,000","+14%"],["North","Widget Basic",1800,"$72,000","+20%"],["South","Widget Basic",1450,"$58,000","+11%"],["East","Widget Enterprise",28,"$140,000","+25%"],["West","Widget Enterprise",38,"$190,000","+30%"],["North","Gadget Plus",650,"$97,500","+18%"],["South","Gadget Plus",520,"$78,000","+9%"],["East","Gadget Plus",780,"$117,000","+24%"],["West","Gadget Plus",690,"$103,500","+16%"],["North","Gadget Basic",2200,"$66,000","+28%"],["South","Gadget Basic",1950,"$58,500","+19%"],["East","Gadget Basic",2450,"$73,500","+32%"],["West","Gadget Basic",2100,"$63,000","+21%"]]}},o=[{id:"user-1",role:"user",content:"Can you show me the Q4 sales data?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"Here's the Q4 2024 sales report broken down by region and product:",timestamp:Date.now()-59e3,status:"complete",toolCalls:[a],children:[{type:"text",messageId:"assistant-1",content:"Here's the Q4 2024 sales report broken down by region and product:",status:"complete"},{type:"toolCall",data:a},{type:"text",messageId:"assistant-2",content:"Is there anything else you would like to know?",status:"complete"}]}];return setTimeout(()=>{const n=document.querySelector("forge-ai-chatbot");n&&n.setThreadState({messages:o})},0),c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text="Data Table Demo"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-tool-call=${r("forge-ai-chatbot-tool-call")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},R={render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"user-1",role:"user",content:`Here's the data you requested:

| Product | Q1 Sales | Q2 Sales | Q3 Sales | Q4 Sales |
|---------|----------|----------|----------|----------|
| Widget A | $45,000 | $52,000 | $48,000 | $61,000 |
| Widget B | $32,000 | $38,000 | $41,000 | $39,000 |
| Widget C | $28,000 | $31,000 | $35,000 | $42,000 |`,timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:`Thanks for sharing that data! I've analyzed the quarterly trends and here's a comparison with last year:

| Product | This Year Total | Last Year Total | Growth |
|---------|----------------|-----------------|--------|
| Widget A | $206,000 | $180,000 | +14.4% |
| Widget B | $150,000 | $145,000 | +3.4% |
| Widget C | $136,000 | $115,000 | +18.3% |
| **Total** | **$492,000** | **$440,000** | **+11.8%** |

Key insights:
- Widget A shows strongest absolute growth
- Widget C has the highest growth percentage
- All products show positive year-over-year growth`,timestamp:Date.now()-59e3,status:"complete"},{id:"user-2",role:"user",content:"Can you show me the team roster?",timestamp:Date.now()-3e4,status:"complete"},{id:"assistant-2",role:"assistant",content:`Here's the current team roster with contact information:

| Name | Department | Email | Extension | Location |
|------|------------|-------|-----------|----------|
| Sarah Johnson | Engineering | sarah.j@company.com | 5421 | Building A |
| Michael Chen | Product | michael.c@company.com | 5422 | Building B |
| Emily Rodriguez | Design | emily.r@company.com | 5423 | Building A |
| James Wilson | Marketing | james.w@company.com | 5424 | Building C |
| Lisa Anderson | Sales | lisa.a@company.com | 5425 | Building B |
| David Martinez | Operations | david.m@company.com | 5426 | Building C |`,timestamp:Date.now()-29e3,status:"complete"}];return setTimeout(()=>{const o=document.querySelector("forge-ai-chatbot");o&&o.setThreadState({messages:a})},0),c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Markdown Tables Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows markdown tables rendered in both user messages and assistant responses. Tables support all
            standard markdown table syntax including alignment and formatting.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text="Markdown Tables Demo"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},M={render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15},{id:"thread-3",title:"How to use localStorage?",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),messageCount:3},{id:"thread-4",title:"Lit reactive controllers explained",createdAt:new Date(Date.now()-2160*60*1e3).toISOString(),messageCount:12},{id:"thread-5",title:"CSS Grid vs Flexbox comparison",createdAt:new Date(Date.now()-2880*60*1e3).toISOString(),messageCount:6}],o=r("forge-ai-chatbot-thread-select"),n=r("forge-ai-chatbot-new-chat"),s=r("forge-ai-chatbot-conversations-open"),i=r("forge-ai-chatbot-conversations-close"),h=r("forge-ai-chatbot-thread-rename"),p=r("forge-ai-chatbot-thread-delete");return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .threads=${a}
          ?show-conversations-button=${!0}
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          placeholder=${e.placeholder}
          title-text="AI Assistant with History"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-thread-select=${u=>o(u.detail)}
          @forge-ai-chatbot-new-chat=${n}
          @forge-ai-chatbot-conversations-open=${s}
          @forge-ai-chatbot-conversations-close=${i}
          @forge-ai-chatbot-thread-rename=${u=>h(u.detail)}
          @forge-ai-chatbot-thread-delete=${u=>p(u.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},W={render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=r("forge-ai-chatbot-thread-select"),o=r("forge-ai-chatbot-new-chat"),n=r("forge-ai-chatbot-conversations-open"),s=r("forge-ai-chatbot-conversations-close"),i=r("forge-ai-chatbot-thread-rename"),h=r("forge-ai-chatbot-thread-delete");return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .threads=${[]}
          ?show-conversations-button=${!0}
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Empty History"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-thread-select=${p=>a(p.detail)}
          @forge-ai-chatbot-new-chat=${o}
          @forge-ai-chatbot-conversations-open=${n}
          @forge-ai-chatbot-conversations-close=${s}
          @forge-ai-chatbot-thread-rename=${p=>i(p.detail)}
          @forge-ai-chatbot-thread-delete=${p=>h(p.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},O={args:{threadsLoading:!0},render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=r("forge-ai-chatbot-conversations-open"),o=r("forge-ai-chatbot-conversations-close");return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .threads=${[]}
          ?show-conversations-button=${!0}
          ?threads-loading=${e.threadsLoading}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Loading History"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-conversations-open=${a}
          @forge-ai-chatbot-conversations-close=${o}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},v={args:{threadsError:"Could not load your chats."},render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15}];let o=null;return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          ${re(n=>{o=n})}
          .adapter=${t}
          .threads=${[]}
          .threadsError=${e.threadsError}
          ?show-conversations-button=${!0}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Failed History"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-thread-retry=${()=>{r("forge-ai-chatbot-thread-retry")(),o&&(o.threadsError=void 0,o.threadsLoading=!0,setTimeout(()=>{o.threads=a,o.threadsLoading=!1,r("retry succeeded")({threads:a.length})},800))}}
          @forge-ai-chatbot-thread-select=${n=>r("forge-ai-chatbot-thread-select")(n.detail)}
          @forge-ai-chatbot-conversations-open=${r("forge-ai-chatbot-conversations-open")}
          @forge-ai-chatbot-conversations-close=${r("forge-ai-chatbot-conversations-close")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},y={render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15},{id:"thread-3",title:"How to use localStorage?",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),messageCount:3}],o=new Set;let n=null;return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          ${re(s=>{n=s})}
          .adapter=${t}
          .threads=${a}
          ?show-conversations-button=${!0}
          placeholder=${e.placeholder}
          title-text="AI Assistant"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-thread-select=${async s=>{r("forge-ai-chatbot-thread-select")(s.detail),s.preventDefault();const{id:i}=s.detail;if(n.threadsError=void 0,n.threadsLoading=!0,await new Promise(h=>setTimeout(h,600)),n.threadsLoading=!1,!o.has(i)){o.add(i),n.threadsError="403 Forbidden - access to this chat was revoked",r("host load failed")({id:i,error:n.threadsError,selectedThreadId:n?.selectedThreadId});return}n.selectedThreadId=i,r("host commit")({id:i,selectedThreadId:n?.selectedThreadId})}}
          @forge-ai-chatbot-thread-retry=${()=>{r("forge-ai-chatbot-thread-retry")(),n.threadsError=void 0}}
          @forge-ai-chatbot-conversations-open=${r("forge-ai-chatbot-conversations-open")}
          @forge-ai-chatbot-conversations-close=${r("forge-ai-chatbot-conversations-close")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},P={render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),n=[{id:"user-1",role:"user",content:"Show me the regional breakdown and the deploy command.",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:`Here's the full regional revenue breakdown. This table is wider than the chat, so it becomes a keyboard-focusable scroll region:

| Region | Q1 Revenue | Q2 Revenue | Q3 Revenue | Q4 Revenue | YoY Growth | Market Share | Notes |
|--------|-----------|-----------|-----------|-----------|-----------|-------------|-------|
| North America Central | $1,250,000 | $1,340,000 | $1,410,000 | $1,580,000 | +18.2% | 34.5% | Strongest performing region this fiscal year |
| Europe Middle East Africa | $980,000 | $1,020,000 | $1,110,000 | $1,240,000 | +12.4% | 27.1% | Steady growth across all product lines |
| Asia Pacific Region | $760,000 | $840,000 | $920,000 | $1,050,000 | +24.8% | 22.9% | Fastest growing region driven by emerging markets |

And here's the deploy command as a single long line — the code block scrolls horizontally instead of wrapping:

\`\`\`bash
docker run --rm -it --name my-very-long-container-name -e "DATABASE_URL=postgres://user:password@some-very-long-hostname.example.com:5432/mydatabase" -v /host/path/to/data:/container/path/to/data --network my-custom-bridge-network my-registry.example.com/my-org/my-image:latest --flag-one --flag-two --flag-three
\`\`\``,timestamp:Date.now()-59e3,status:"complete"}];return setTimeout(()=>{const s=document.querySelector("forge-ai-chatbot");s&&s.setThreadState({messages:n})},0),c`
      <div style="width: 100%; height: 600px; max-width: 520px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Overflowing Content Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            The wide table and long code block overflow horizontally. They become focusable scroll regions
            (<code>role="region"</code>, <code>tabindex="0"</code>, <code>aria-label</code>). Press <kbd>Tab</kbd> to
            focus them and use arrow keys to scroll. Content that fits gets no tab stop.
          </p>
        </div>
        <forge-ai-chatbot .adapter=${t} placeholder=${e.placeholder} title-text="Overflowing Content">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},B={render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500,tools:[se]}),a={id:"tool-links-1",messageId:"assistant-2",name:"displayDataTable",status:"complete",type:"client",args:{title:"Team Resources",headers:["Name","Email","Docs"],rows:[["Sarah Johnson","sarah.j@company.com","https://docs.company.com/sarah"],["Michael Chen","michael.c@company.com","https://docs.company.com/michael"],["Emily Rodriguez","emily.r@company.com","www.company.com/emily"],["Priya Patel","priya.p@company.com",`<a href="https://docs.company.com/priya">Priya's docs</a>`]]}},o=[{id:"user-1",role:"user",content:"Where can I find the docs and who do I contact?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:`You can find everything at https://docs.company.com and email support@company.com with questions. Bare links also work inside markdown tables:

| Resource | Link |
|----------|------|
| API Reference | https://api.company.com/reference |
| Support | support@company.com |
| Homepage | www.company.com |`,timestamp:Date.now()-59e3,status:"complete"},{id:"assistant-2",role:"assistant",content:"And here it is rendered via the data-table tool — links in those cells are clickable too:",timestamp:Date.now()-58e3,status:"complete",toolCalls:[a],children:[{type:"text",messageId:"assistant-2",content:"And here it is rendered via the data-table tool — links in those cells are clickable too:",status:"complete"},{type:"toolCall",data:a}]}];return setTimeout(()=>{const n=document.querySelector("forge-ai-chatbot");n&&n.setThreadState({messages:o})},0),c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Linkified Content Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Bare URLs and email addresses are automatically turned into clickable links in prose, markdown table cells,
            and data-table tool cells. Data-table cells also render raw
            <code>&lt;a&gt;</code> anchors emitted by the agent. Links open in a new tab with
            <code>rel="noreferrer noopener"</code>.
          </p>
        </div>
        <forge-ai-chatbot .adapter=${t} placeholder=${e.placeholder} title-text="Linkified Content">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},L={args:{clearOption:"off"},render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"user-1",role:"user",content:"What is a web component?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"Web components are a set of web platform APIs that let you create reusable, encapsulated custom HTML elements.",timestamp:Date.now()-59e3,status:"complete"}];return setTimeout(()=>{const o=document.querySelector("forge-ai-chatbot");o&&o.setThreadState({messages:a})},0),c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Clear Option Off Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Even though messages are present, <code>clear-option="off"</code> suppresses the "Clear chat" action in the
            header options menu. Set the <code>clearOption</code> control back to "on" to restore the default behavior.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text="Clear Option Off"
          clear-option=${e.clearOption}
          @forge-ai-chatbot-clear=${r("forge-ai-chatbot-clear")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},H={parameters:{controls:{include:["headerTitleColor"]}},argTypes:{headerTitleColor:{control:"color",description:"Header title color (--forge-ai-chatbot-header-title-color)"}},args:{headerTitleColor:"#6200ee"},render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return c`
      <style>
        .branded-title-chatbot {
          --forge-ai-chatbot-header-title-color: ${e.headerTitleColor};
        }
      </style>
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Branded Header Title Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            The header title color is themed via the <code>--forge-ai-chatbot-header-title-color</code>
            custom property to match tenant branding.
          </p>
        </div>
        <forge-ai-chatbot
          class="branded-title-chatbot"
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text="Tenant Branded Assistant">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},N={parameters:{controls:{include:["iconShape"]}},argTypes:{iconShape:{control:"select",options:["0px (square)","8px (rounded)","50% (circular)"],description:"Shape of header and empty state icons (--forge-ai-chatbot-icon-shape)"}},args:{iconShape:"0px (square)"},render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{text:"Tell me about Tyler products",value:"products"},{text:"How can I get support?",value:"support"},{text:"Learn about Forge components",value:"forge"}],o=e.iconShape?.split(" ")[0]||"0px",n="https://cdn.forge.tylertech.com/v1/images/branding/tyler/talking-t-logo.svg";return c`
      <style>
        .branded-chatbot {
          --forge-ai-chatbot-icon-shape: ${o};
        }
      </style>
      <div style="width: 100%; height: 700px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          class="branded-chatbot"
          .adapter=${t}
          .suggestions=${a}
          placeholder="Ask Tyler AI anything..."
          title-text="Tyler AI Assistant">
          <img
            slot="icon"
            src="${n}"
            alt="Tyler Technologies Logo"
            style="width: 36px; height: 36px; display: block;" />

          <img
            slot="empty-state-icon"
            src="${n}"
            alt="Tyler Technologies"
            style="width: 200px; height: 200px; display: block;" />

          <span slot="empty-state-heading">
            <strong>Welcome to Tyler AI Assistant</strong>
          </span>

          <span slot="empty-state-message">
            Get instant answers to your questions about Tyler Technologies <b>products and services</b>. <br /><br />
            Need personalized help?
            <a href="#contact" style="color: #4A90E2; text-decoration: underline;">Contact our support team</a>
          </span>
        </forge-ai-chatbot>
      </div>
    `}},U={render:e=>{const t=new g({simulateStreaming:!0,simulateTools:!1,streamingDelay:150,responseDelay:800}),a=o=>{const n=document.querySelector("forge-ai-chatbot");n&&o(n)};return c`
      <div>
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Client Messages Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Send a message, then click a button below while the reply is streaming - client messages never touch the
            live response, so the reply keeps streaming normally underneath. Session Expired includes a "Refresh" action
            button.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=${()=>a(o=>o.addClientMessage({id:"session-expired",kind:"error",header:"Session expired",content:"Your session expired. Please refresh the page to re-authenticate.",actions:[{id:"refresh",label:"Refresh",onClick:()=>r("refresh-clicked")()}]}))}>
              Show session expired
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=${()=>a(o=>o.removeClientMessage("session-expired"))}>
              Dismiss session expired
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=${()=>a(o=>o.addClientMessage({id:"indexing",kind:"info",header:"Indexing",content:"Indexing 3 uploaded documents..."}))}>
              Show indexing (info)
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=${()=>a(o=>o.addClientMessage({id:"indexing",kind:"success",content:"Finished indexing 3 documents."}))}>
              Show indexing done (success, upsert)
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=${()=>a(o=>o.addClientMessage({content:"Switched to Research Assistant"}))}>
              Show agent switch (text)
            </button>
          </div>
        </div>
        <forge-ai-chatbot
          style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text=${e.titleText}>
        </forge-ai-chatbot>
      </div>
    `}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"{}",...$.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const suggestions = [{
      text: 'Help me write an email',
      value: 'email'
    }, {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      value: 'lorem-ipsum'
    }, {
      text: 'Create a presentation',
      value: 'presentation'
    }, {
      text: 'Write some code',
      value: 'code'
    }] as Suggestion[];
    return html\`
      <div style="width: 100%; height: 800px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with Suggestions"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-disconnected=\${action('forge-ai-chatbot-disconnected')}
          @forge-ai-chatbot-message-sent=\${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=\${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-error=\${action('forge-ai-chatbot-error')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    fileUpload: 'on'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const contextItems: ContextItem[] = [{
      id: '1',
      label: 'Customer ID: 12345',
      removable: false
    }, {
      id: '2',
      label: 'Project: Phoenix'
    }, {
      id: '3',
      label: 'Order #78901'
    }];
    const onContextRemove = action('forge-ai-chatbot-context-remove');
    return html\`
      <div style="height: 600px; max-width: 420px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .contextItems=\${contextItems}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with Context"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-disconnected=\${action('forge-ai-chatbot-disconnected')}
          @forge-ai-chatbot-message-sent=\${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=\${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-context-remove=\${(evt: CustomEvent) => onContextRemove(evt.detail)}
          @forge-ai-chatbot-error=\${action('forge-ai-chatbot-error')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything with the current context in mind.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const tools: ToolDefinition[] = [{
      name: 'getCurrentWeather',
      displayName: 'Get Current Weather',
      description: 'Get the current weather for a location',
      parameters: {
        type: 'object',
        properties: {
          location: {
            type: 'string',
            description: 'The city and state, e.g. San Francisco, CA'
          }
        },
        required: ['location']
      }
    }, {
      name: 'getUserInput',
      displayName: 'Get User Input',
      description: 'Prompts the user for input using a native dialog',
      parameters: {
        type: 'object',
        properties: {
          prompt: {
            type: 'string',
            description: 'The message to show the user'
          }
        },
        required: ['prompt']
      }
    }];
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: true,
      streamingDelay: 50,
      responseDelay: 500,
      tools
    });
    const onToolCall = (e: CustomEvent) => {
      action('forge-ai-chatbot-tool-call')(e.detail);
    };
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with Tools"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          debug-mode
          @forge-ai-chatbot-tool-call=\${onToolCall}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    showMinimizeButton: true
  },
  render: (args: any) => {
    const STORAGE_KEY = 'ai-chatbot-thread-state';
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const suggestions = [{
      text: 'What is TypeScript?',
      value: 'typescript'
    }, {
      text: 'Explain web components',
      value: 'webcomponents'
    }, {
      text: 'How do I use localStorage?',
      value: 'localstorage'
    }] as Suggestion[];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const state = JSON.parse(saved);
          chatbot.setThreadState(state);
        } catch (error) {
          console.error('Failed to restore thread state:', error);
        }
      }
      chatbot.addEventListener('forge-ai-chatbot-message-received', () => {
        const state = chatbot.getThreadState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });
      chatbot.addEventListener('forge-ai-chatbot-message-sent', () => {
        const state = chatbot.getThreadState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });
      chatbot.addEventListener('forge-ai-chatbot-clear', () => {
        localStorage.removeItem(STORAGE_KEY);
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Thread Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Chat messages are automatically saved to localStorage. Refresh the page to see the conversation restored.
            Use the clear button in the header to reset.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          placeholder=\${args.placeholder}
          title-text="Persistent Chat"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-message-sent=\${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=\${action('forge-ai-chatbot-message-received')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MixedResponseAdapter();
    const suggestions = [{
      text: 'Text then tool',
      value: 'text-then-tool'
    }, {
      text: 'Tool then text',
      value: 'tool-then-text'
    }, {
      text: 'Text, tool, text',
      value: 'text-tool-text'
    }, {
      text: 'Alternating',
      value: 'alternating'
    }, {
      text: 'Multiple tools',
      value: 'multiple-tools'
    }, {
      text: 'Slow sequential tools',
      value: 'slow-sequential'
    }, {
      text: 'Multiple text chunks',
      value: 'multiple-text'
    }, {
      text: 'Text then gap',
      value: 'text-then-gap'
    }, {
      text: 'Tool then gap then tool',
      value: 'tool-gap-tool'
    }, {
      text: 'Tool then gap then text',
      value: 'tool-gap-text'
    }, {
      text: 'Step gap (thinking between steps)',
      value: 'step-gap'
    }] as Suggestion[];
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          placeholder=\${args.placeholder}
          title-text="Mixed Responses"
          ?enable-reactions=\${args.enableReactions}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['agentListSize', 'titleText']
    }
  },
  argTypes: {
    agentListSize: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Toggle between small (4) and large (50) agent lists'
    }
  },
  args: {
    agentListSize: 'small'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const agents = args.agentListSize === 'large' ? largeAgentList : smallAgentList;
    const onAgentChange = action('forge-ai-chatbot-agent-change');
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Agent Selector Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Click on the header title to see the agent selector dropdown. Use the "agentListSize" control to toggle
            between a small list (4 agents) and a large list (50 agents) which shows the search filter.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          .agents=\${agents}
          placeholder=\${args.placeholder}
          title-text=\${args.titleText}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          @forge-ai-chatbot-agent-change=\${(e: CustomEvent) => onAgentChange(e.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    enableReactions: true
  },
  render: (args: any) => {
    const STORAGE_KEY = 'ai-chatbot-feedback-state';
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: 'What is TypeScript?',
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to the language.',
      timestamp: Date.now() - 59000,
      status: 'complete',
      feedback: {
        type: 'positive'
      }
    }, {
      id: 'user-2',
      role: 'user',
      content: 'What are the benefits?',
      timestamp: Date.now() - 30000,
      status: 'complete'
    }, {
      id: 'assistant-2',
      role: 'assistant',
      content: 'Key benefits include: better IDE support with autocompletion and refactoring, catching errors at compile time rather than runtime, improved code documentation through types, and easier maintenance of large codebases.',
      timestamp: Date.now() - 29000,
      status: 'complete',
      feedback: {
        type: 'negative',
        reason: 'Missing information about interfaces'
      }
    }];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const state = JSON.parse(saved);
          chatbot.setThreadState(state);
        } catch (error) {
          console.error('Failed to restore thread state:', error);
          chatbot.setThreadState({
            messages: initialMessages
          });
        }
      } else {
        chatbot.setThreadState({
          messages: initialMessages
        });
      }
      chatbot.addEventListener('forge-ai-chatbot-response-feedback', () => {
        const state = chatbot.getThreadState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });
      chatbot.addEventListener('forge-ai-chatbot-message-received', () => {
        const state = chatbot.getThreadState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });
      chatbot.addEventListener('forge-ai-chatbot-clear', () => {
        localStorage.removeItem(STORAGE_KEY);
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Feedback Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows pre-loaded messages with feedback state. The first response has thumbs up, the second has
            thumbs down. Give feedback on new responses and refresh to see it persist.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Feedback Persistence"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-response-feedback=\${action('forge-ai-chatbot-response-feedback')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    showMinimizeButton: true,
    showExpandButton: true
  },
  render: (args: any) => {
    defineIconButtonComponent();
    defineIconComponent();
    IconRegistry.define([tylIconHistory, tylIconSettings]);
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Chatbot with Custom Actions"
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}>
          <forge-icon-button slot="header-actions" density="medium" aria-label="History">
            <forge-icon name="history"></forge-icon>
          </forge-icon-button>
          <forge-icon-button slot="header-actions" density="medium" aria-label="Settings">
            <forge-icon name="settings"></forge-icon>
          </forge-icon-button>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500,
      tools: [displayDataTableTool]
    });
    const dataTableToolCall: ToolCall = {
      id: 'tool-1',
      messageId: 'assistant-1',
      name: 'displayDataTable',
      status: 'complete',
      type: 'client',
      args: {
        title: 'Q4 2024 Sales Report',
        headers: ['Region', 'Product', 'Units Sold', 'Revenue', 'Growth'],
        rows: [['North', 'Widget Pro', 1250, '$125,000', '+15%'], ['South', 'Widget Pro', 890, '$89,000', '+8%'], ['East', 'Widget Basic', 2100, '$84,000', '+22%'], ['West', 'Widget Basic', 1750, '$70,000', '+12%'], ['North', 'Widget Enterprise', 45, '$225,000', '+35%'], ['South', 'Widget Enterprise', 32, '$160,000', '+18%'], ['East', 'Widget Pro', 980, '$98,000', '+10%'], ['West', 'Widget Pro', 1100, '$110,000', '+14%'], ['North', 'Widget Basic', 1800, '$72,000', '+20%'], ['South', 'Widget Basic', 1450, '$58,000', '+11%'], ['East', 'Widget Enterprise', 28, '$140,000', '+25%'], ['West', 'Widget Enterprise', 38, '$190,000', '+30%'], ['North', 'Gadget Plus', 650, '$97,500', '+18%'], ['South', 'Gadget Plus', 520, '$78,000', '+9%'], ['East', 'Gadget Plus', 780, '$117,000', '+24%'], ['West', 'Gadget Plus', 690, '$103,500', '+16%'], ['North', 'Gadget Basic', 2200, '$66,000', '+28%'], ['South', 'Gadget Basic', 1950, '$58,500', '+19%'], ['East', 'Gadget Basic', 2450, '$73,500', '+32%'], ['West', 'Gadget Basic', 2100, '$63,000', '+21%']]
      }
    };
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: 'Can you show me the Q4 sales data?',
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: "Here's the Q4 2024 sales report broken down by region and product:",
      timestamp: Date.now() - 59000,
      status: 'complete',
      toolCalls: [dataTableToolCall],
      children: [{
        type: 'text',
        messageId: 'assistant-1',
        content: "Here's the Q4 2024 sales report broken down by region and product:",
        status: 'complete'
      }, {
        type: 'toolCall',
        data: dataTableToolCall
      }, {
        type: 'text',
        messageId: 'assistant-2',
        content: 'Is there anything else you would like to know?',
        status: 'complete'
      }]
    }];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      chatbot.setThreadState({
        messages: initialMessages
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Data Table Demo"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-tool-call=\${action('forge-ai-chatbot-tool-call')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: \`Here's the data you requested:

| Product | Q1 Sales | Q2 Sales | Q3 Sales | Q4 Sales |
|---------|----------|----------|----------|----------|
| Widget A | $45,000 | $52,000 | $48,000 | $61,000 |
| Widget B | $32,000 | $38,000 | $41,000 | $39,000 |
| Widget C | $28,000 | $31,000 | $35,000 | $42,000 |\`,
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: \`Thanks for sharing that data! I've analyzed the quarterly trends and here's a comparison with last year:

| Product | This Year Total | Last Year Total | Growth |
|---------|----------------|-----------------|--------|
| Widget A | $206,000 | $180,000 | +14.4% |
| Widget B | $150,000 | $145,000 | +3.4% |
| Widget C | $136,000 | $115,000 | +18.3% |
| **Total** | **$492,000** | **$440,000** | **+11.8%** |

Key insights:
- Widget A shows strongest absolute growth
- Widget C has the highest growth percentage
- All products show positive year-over-year growth\`,
      timestamp: Date.now() - 59000,
      status: 'complete'
    }, {
      id: 'user-2',
      role: 'user',
      content: 'Can you show me the team roster?',
      timestamp: Date.now() - 30000,
      status: 'complete'
    }, {
      id: 'assistant-2',
      role: 'assistant',
      content: \`Here's the current team roster with contact information:

| Name | Department | Email | Extension | Location |
|------|------------|-------|-----------|----------|
| Sarah Johnson | Engineering | sarah.j@company.com | 5421 | Building A |
| Michael Chen | Product | michael.c@company.com | 5422 | Building B |
| Emily Rodriguez | Design | emily.r@company.com | 5423 | Building A |
| James Wilson | Marketing | james.w@company.com | 5424 | Building C |
| Lisa Anderson | Sales | lisa.a@company.com | 5425 | Building B |
| David Martinez | Operations | david.m@company.com | 5426 | Building C |\`,
      timestamp: Date.now() - 29000,
      status: 'complete'
    }];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      chatbot.setThreadState({
        messages: initialMessages
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Markdown Tables Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows markdown tables rendered in both user messages and assistant responses. Tables support all
            standard markdown table syntax including alignment and formatting.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Markdown Tables Demo"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const threads = [{
      id: 'thread-1',
      title: 'TypeScript best practices',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messageCount: 8
    }, {
      id: 'thread-2',
      title: 'Web component architecture',
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      messageCount: 15
    }, {
      id: 'thread-3',
      title: 'How to use localStorage?',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 3
    }, {
      id: 'thread-4',
      title: 'Lit reactive controllers explained',
      createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
      messageCount: 12
    }, {
      id: 'thread-5',
      title: 'CSS Grid vs Flexbox comparison',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 6
    }];
    const onThreadSelect = action('forge-ai-chatbot-thread-select');
    const onNewChat = action('forge-ai-chatbot-new-chat');
    const onConversationsOpen = action('forge-ai-chatbot-conversations-open');
    const onConversationsClose = action('forge-ai-chatbot-conversations-close');
    const onThreadRename = action('forge-ai-chatbot-thread-rename');
    const onThreadDelete = action('forge-ai-chatbot-thread-delete');
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .threads=\${threads}
          ?show-conversations-button=\${true}
          ?show-thread-rename=\${args.showThreadRename}
          ?show-thread-delete=\${args.showThreadDelete}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with History"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-thread-select=\${(e: CustomEvent) => onThreadSelect(e.detail)}
          @forge-ai-chatbot-new-chat=\${onNewChat}
          @forge-ai-chatbot-conversations-open=\${onConversationsOpen}
          @forge-ai-chatbot-conversations-close=\${onConversationsClose}
          @forge-ai-chatbot-thread-rename=\${(e: CustomEvent) => onThreadRename(e.detail)}
          @forge-ai-chatbot-thread-delete=\${(e: CustomEvent) => onThreadDelete(e.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...M.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const onThreadSelect = action('forge-ai-chatbot-thread-select');
    const onNewChat = action('forge-ai-chatbot-new-chat');
    const onConversationsOpen = action('forge-ai-chatbot-conversations-open');
    const onConversationsClose = action('forge-ai-chatbot-conversations-close');
    const onThreadRename = action('forge-ai-chatbot-thread-rename');
    const onThreadDelete = action('forge-ai-chatbot-thread-delete');
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .threads=\${[]}
          ?show-conversations-button=\${true}
          ?show-thread-rename=\${args.showThreadRename}
          ?show-thread-delete=\${args.showThreadDelete}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with Empty History"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-thread-select=\${(e: CustomEvent) => onThreadSelect(e.detail)}
          @forge-ai-chatbot-new-chat=\${onNewChat}
          @forge-ai-chatbot-conversations-open=\${onConversationsOpen}
          @forge-ai-chatbot-conversations-close=\${onConversationsClose}
          @forge-ai-chatbot-thread-rename=\${(e: CustomEvent) => onThreadRename(e.detail)}
          @forge-ai-chatbot-thread-delete=\${(e: CustomEvent) => onThreadDelete(e.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...W.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    threadsLoading: true
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const onConversationsOpen = action('forge-ai-chatbot-conversations-open');
    const onConversationsClose = action('forge-ai-chatbot-conversations-close');
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .threads=\${[]}
          ?show-conversations-button=\${true}
          ?threads-loading=\${args.threadsLoading}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with Loading History"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-conversations-open=\${onConversationsOpen}
          @forge-ai-chatbot-conversations-close=\${onConversationsClose}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...O.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    threadsError: 'Could not load your chats.'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const threads = [{
      id: 'thread-1',
      title: 'TypeScript best practices',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messageCount: 8
    }, {
      id: 'thread-2',
      title: 'Web component architecture',
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      messageCount: 15
    }];
    let chatbot: AiChatbotComponent | null = null;
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          \${ref(el => {
      chatbot = el as AiChatbotComponent;
    })}
          .adapter=\${adapter}
          .threads=\${[]}
          .threadsError=\${args.threadsError}
          ?show-conversations-button=\${true}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with Failed History"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-thread-retry=\${() => {
      action('forge-ai-chatbot-thread-retry')();
      if (!chatbot) {
        return;
      }
      chatbot.threadsError = undefined;
      chatbot.threadsLoading = true;
      setTimeout(() => {
        chatbot!.threads = threads;
        chatbot!.threadsLoading = false;
        action('retry succeeded')({
          threads: threads.length
        });
      }, 800);
    }}
          @forge-ai-chatbot-thread-select=\${(e: CustomEvent) => action('forge-ai-chatbot-thread-select')(e.detail)}
          @forge-ai-chatbot-conversations-open=\${action('forge-ai-chatbot-conversations-open')}
          @forge-ai-chatbot-conversations-close=\${action('forge-ai-chatbot-conversations-close')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...v.parameters?.docs?.source},description:{story:`A failed conversations load. The panel shows the error with a retry instead of its "no chats yet"
empty state, so the failure is not mistaken for an empty history. Retry succeeds.`,...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const threads = [{
      id: 'thread-1',
      title: 'TypeScript best practices',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messageCount: 8
    }, {
      id: 'thread-2',
      title: 'Web component architecture',
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      messageCount: 15
    }, {
      id: 'thread-3',
      title: 'How to use localStorage?',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 3
    }];
    const attemptedThreadIds = new Set<string>();
    let chatbot: AiChatbotComponent | null = null;
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          \${ref(el => {
      chatbot = el as AiChatbotComponent;
    })}
          .adapter=\${adapter}
          .threads=\${threads}
          ?show-conversations-button=\${true}
          placeholder=\${args.placeholder}
          title-text="AI Assistant"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-thread-select=\${async (e: CustomEvent) => {
      action('forge-ai-chatbot-thread-select')(e.detail);
      e.preventDefault();
      const {
        id
      } = e.detail;
      chatbot!.threadsError = undefined;
      chatbot!.threadsLoading = true;
      await new Promise(resolve => setTimeout(resolve, 600));
      chatbot!.threadsLoading = false;
      if (!attemptedThreadIds.has(id)) {
        attemptedThreadIds.add(id);
        // Nothing to undo - selectedThreadId was never touched.
        chatbot!.threadsError = '403 Forbidden - access to this chat was revoked';
        action('host load failed')({
          id,
          error: chatbot!.threadsError,
          selectedThreadId: chatbot?.selectedThreadId
        });
        return;
      }
      chatbot!.selectedThreadId = id;
      action('host commit')({
        id,
        selectedThreadId: chatbot?.selectedThreadId
      });
    }}
          @forge-ai-chatbot-thread-retry=\${() => {
      action('forge-ai-chatbot-thread-retry')();
      chatbot!.threadsError = undefined;
    }}
          @forge-ai-chatbot-conversations-open=\${action('forge-ai-chatbot-conversations-open')}
          @forge-ai-chatbot-conversations-close=\${action('forge-ai-chatbot-conversations-close')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...y.parameters?.docs?.source},description:{story:"The host rejects the select by calling preventDefault(), then owns the commit. The first thread\nclicked always fails to load, so `selectedThreadId` must stay untouched; clicking the same thread\nagain succeeds and the host commits it.",...y.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const wideTable = \`| Region | Q1 Revenue | Q2 Revenue | Q3 Revenue | Q4 Revenue | YoY Growth | Market Share | Notes |
|--------|-----------|-----------|-----------|-----------|-----------|-------------|-------|
| North America Central | $1,250,000 | $1,340,000 | $1,410,000 | $1,580,000 | +18.2% | 34.5% | Strongest performing region this fiscal year |
| Europe Middle East Africa | $980,000 | $1,020,000 | $1,110,000 | $1,240,000 | +12.4% | 27.1% | Steady growth across all product lines |
| Asia Pacific Region | $760,000 | $840,000 | $920,000 | $1,050,000 | +24.8% | 22.9% | Fastest growing region driven by emerging markets |\`;
    const longCode = \`\\\`\\\`\\\`bash
docker run --rm -it --name my-very-long-container-name -e "DATABASE_URL=postgres://user:password@some-very-long-hostname.example.com:5432/mydatabase" -v /host/path/to/data:/container/path/to/data --network my-custom-bridge-network my-registry.example.com/my-org/my-image:latest --flag-one --flag-two --flag-three
\\\`\\\`\\\`\`;
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: 'Show me the regional breakdown and the deploy command.',
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: \`Here's the full regional revenue breakdown. This table is wider than the chat, so it becomes a keyboard-focusable scroll region:\\n\\n\${wideTable}\\n\\nAnd here's the deploy command as a single long line — the code block scrolls horizontally instead of wrapping:\\n\\n\${longCode}\`,
      timestamp: Date.now() - 59000,
      status: 'complete'
    }];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      chatbot.setThreadState({
        messages: initialMessages
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 520px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Overflowing Content Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            The wide table and long code block overflow horizontally. They become focusable scroll regions
            (<code>role="region"</code>, <code>tabindex="0"</code>, <code>aria-label</code>). Press <kbd>Tab</kbd> to
            focus them and use arrow keys to scroll. Content that fits gets no tab stop.
          </p>
        </div>
        <forge-ai-chatbot .adapter=\${adapter} placeholder=\${args.placeholder} title-text="Overflowing Content">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500,
      tools: [displayDataTableTool]
    });
    const linkTableToolCall: ToolCall = {
      id: 'tool-links-1',
      messageId: 'assistant-2',
      name: 'displayDataTable',
      status: 'complete',
      type: 'client',
      args: {
        title: 'Team Resources',
        headers: ['Name', 'Email', 'Docs'],
        rows: [['Sarah Johnson', 'sarah.j@company.com', 'https://docs.company.com/sarah'], ['Michael Chen', 'michael.c@company.com', 'https://docs.company.com/michael'], ['Emily Rodriguez', 'emily.r@company.com', 'www.company.com/emily'], ['Priya Patel', 'priya.p@company.com', '<a href="https://docs.company.com/priya">Priya\\'s docs</a>']]
      }
    };
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: 'Where can I find the docs and who do I contact?',
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: \`You can find everything at https://docs.company.com and email support@company.com with questions. Bare links also work inside markdown tables:

| Resource | Link |
|----------|------|
| API Reference | https://api.company.com/reference |
| Support | support@company.com |
| Homepage | www.company.com |\`,
      timestamp: Date.now() - 59000,
      status: 'complete'
    }, {
      id: 'assistant-2',
      role: 'assistant',
      content: 'And here it is rendered via the data-table tool — links in those cells are clickable too:',
      timestamp: Date.now() - 58000,
      status: 'complete',
      toolCalls: [linkTableToolCall],
      children: [{
        type: 'text',
        messageId: 'assistant-2',
        content: 'And here it is rendered via the data-table tool — links in those cells are clickable too:',
        status: 'complete'
      }, {
        type: 'toolCall',
        data: linkTableToolCall
      }]
    }];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      chatbot.setThreadState({
        messages: initialMessages
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Linkified Content Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Bare URLs and email addresses are automatically turned into clickable links in prose, markdown table cells,
            and data-table tool cells. Data-table cells also render raw
            <code>&lt;a&gt;</code> anchors emitted by the agent. Links open in a new tab with
            <code>rel="noreferrer noopener"</code>.
          </p>
        </div>
        <forge-ai-chatbot .adapter=\${adapter} placeholder=\${args.placeholder} title-text="Linkified Content">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...B.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    clearOption: 'off'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: 'What is a web component?',
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: 'Web components are a set of web platform APIs that let you create reusable, encapsulated custom HTML elements.',
      timestamp: Date.now() - 59000,
      status: 'complete'
    }];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      chatbot.setThreadState({
        messages: initialMessages
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Clear Option Off Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Even though messages are present, <code>clear-option="off"</code> suppresses the "Clear chat" action in the
            header options menu. Set the <code>clearOption</code> control back to "on" to restore the default behavior.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Clear Option Off"
          clear-option=\${args.clearOption}
          @forge-ai-chatbot-clear=\${action('forge-ai-chatbot-clear')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...L.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['headerTitleColor']
    }
  },
  argTypes: {
    headerTitleColor: {
      control: 'color',
      description: 'Header title color (--forge-ai-chatbot-header-title-color)'
    }
  },
  args: {
    headerTitleColor: '#6200ee'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    return html\`
      <style>
        .branded-title-chatbot {
          --forge-ai-chatbot-header-title-color: \${args.headerTitleColor};
        }
      </style>
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Branded Header Title Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            The header title color is themed via the <code>--forge-ai-chatbot-header-title-color</code>
            custom property to match tenant branding.
          </p>
        </div>
        <forge-ai-chatbot
          class="branded-title-chatbot"
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Tenant Branded Assistant">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...H.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['iconShape']
    }
  },
  argTypes: {
    iconShape: {
      control: 'select',
      options: ['0px (square)', '8px (rounded)', '50% (circular)'],
      description: 'Shape of header and empty state icons (--forge-ai-chatbot-icon-shape)'
    }
  },
  args: {
    iconShape: '0px (square)'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const suggestions = [{
      text: 'Tell me about Tyler products',
      value: 'products'
    }, {
      text: 'How can I get support?',
      value: 'support'
    }, {
      text: 'Learn about Forge components',
      value: 'forge'
    }] as Suggestion[];
    const iconShapeValue = args.iconShape?.split(' ')[0] || '0px';
    const tylerLogo = 'https://cdn.forge.tylertech.com/v1/images/branding/tyler/talking-t-logo.svg';
    return html\`
      <style>
        .branded-chatbot {
          --forge-ai-chatbot-icon-shape: \${iconShapeValue};
        }
      </style>
      <div style="width: 100%; height: 700px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          class="branded-chatbot"
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          placeholder="Ask Tyler AI anything..."
          title-text="Tyler AI Assistant">
          <img
            slot="icon"
            src="\${tylerLogo}"
            alt="Tyler Technologies Logo"
            style="width: 36px; height: 36px; display: block;" />

          <img
            slot="empty-state-icon"
            src="\${tylerLogo}"
            alt="Tyler Technologies"
            style="width: 200px; height: 200px; display: block;" />

          <span slot="empty-state-heading">
            <strong>Welcome to Tyler AI Assistant</strong>
          </span>

          <span slot="empty-state-message">
            Get instant answers to your questions about Tyler Technologies <b>products and services</b>. <br /><br />
            Need personalized help?
            <a href="#contact" style="color: #4A90E2; text-decoration: underline;">Contact our support team</a>
          </span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...N.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 150,
      responseDelay: 800
    });
    const withChatbot = (fn: (chatbot: any) => void): void => {
      const chatbot = document.querySelector('forge-ai-chatbot');
      if (chatbot) {
        fn(chatbot);
      }
    };
    return html\`
      <div>
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Client Messages Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Send a message, then click a button below while the reply is streaming - client messages never touch the
            live response, so the reply keeps streaming normally underneath. Session Expired includes a "Refresh" action
            button.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=\${() => withChatbot(chatbot => chatbot.addClientMessage({
      id: 'session-expired',
      kind: 'error',
      header: 'Session expired',
      content: 'Your session expired. Please refresh the page to re-authenticate.',
      actions: [{
        id: 'refresh',
        label: 'Refresh',
        onClick: () => action('refresh-clicked')()
      }]
    }))}>
              Show session expired
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=\${() => withChatbot(chatbot => chatbot.removeClientMessage('session-expired'))}>
              Dismiss session expired
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=\${() => withChatbot(chatbot => chatbot.addClientMessage({
      id: 'indexing',
      kind: 'info',
      header: 'Indexing',
      content: 'Indexing 3 uploaded documents...'
    }))}>
              Show indexing (info)
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=\${() => withChatbot(chatbot => chatbot.addClientMessage({
      id: 'indexing',
      kind: 'success',
      content: 'Finished indexing 3 documents.'
    }))}>
              Show indexing done (success, upsert)
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=\${() => withChatbot(chatbot => chatbot.addClientMessage({
      content: 'Switched to Research Assistant'
    }))}>
              Show agent switch (text)
            </button>
          </div>
        </div>
        <forge-ai-chatbot
          style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text=\${args.titleText}>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...U.parameters?.docs?.source}}};const st=["Demo","WithSuggestions","WithContextItems","WithTools","WithPersistence","MixedResponses","WithAgents","WithFeedbackPersistence","WithHeaderActions","WithDataTableTool","MarkdownTables","WithConversationHistory","WithEmptyConversationHistory","WithLoadingConversationHistory","WithConversationHistoryError","ThreadSelectRejection","OverflowingContent","LinkifiedContent","ClearOptionOff","BrandedHeaderTitle","Branded","ClientMessages"],Dt=Object.freeze(Object.defineProperty({__proto__:null,Branded:N,BrandedHeaderTitle:H,ClearOptionOff:L,ClientMessages:U,Demo:$,LinkifiedContent:B,MarkdownTables:R,MixedResponses:I,OverflowingContent:P,ThreadSelectRejection:y,WithAgents:D,WithContextItems:T,WithConversationHistory:M,WithConversationHistoryError:v,WithDataTableTool:E,WithEmptyConversationHistory:W,WithFeedbackPersistence:z,WithHeaderActions:A,WithLoadingConversationHistory:O,WithPersistence:C,WithSuggestions:k,WithTools:S,__namedExportsOrder:st,default:rt},Symbol.toStringTag,{value:"Module"}));export{Dt as A,U as C,$ as D,y as T,v as W};
