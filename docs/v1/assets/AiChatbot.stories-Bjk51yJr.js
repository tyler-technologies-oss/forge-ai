import{r as G,i as q,x as d,E as W}from"./iframe-Cdy4RhMs.js";import"./ai-chatbot-base-BzIKVA32.js";import"./ai-chatbot-DYkkYbTs.js";import"./ai-message-thread-nkdueEj5.js";import"./utils-BojVjD0a.js";import"./ai-empty-state-4j3Rzu8f.js";import"./ai-suggestions-d4r-ATNy.js";import"./ai-voice-input-bX57VDpk.js";import{t as U}from"./custom-element-UsVr97OX.js";import{n as R}from"./property-B6CB5CKs.js";import{r as M}from"./base-OhZCqXTS.js";import"./ai-artifact-C1RyqZRV.js";import"./tooltip-oHQzqeEM.js";import{M as u}from"./mock-adapter-BYw0QxWR.js";import{l as ue,s as he}from"./mock-agents-Cm47oyNv.js";function pe(e){return"elementTag"in e}function be(e){return pe(e)?{elementTag:e.elementTag}:{render:e.render}}const me={name:"displayDataTable",displayName:"Display Data Table",description:"Display tabular data in a formatted table with headers and rows. Use this tool when you want to present structured data, lists where there are 2 or more columns, statistics, or any information that works well in a table format.",parameters:{type:"object",properties:{title:{type:"string",description:"Table title or caption displayed above the data."},headers:{type:"array",items:{type:"string"},description:"Column names displayed as table headers. Order matches the row data order."},maxNumberOfRows:{type:"number",description:"Limit total rows shown. Useful for large datasets to prevent overwhelming display."},rows:{type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}},description:"Data rows where each row is an array of values matching header order."}},required:["headers","rows"]},renderer:be({elementTag:"forge-ai-tool-data-table"})},ve='.forge-icon-button{--_icon-button-display: var(--forge-icon-button-display, inline-flex);--_icon-button-size: var(--forge-icon-button-size, 48px);--_icon-button-gap: var(--forge-icon-button-gap, 0);--_icon-button-icon-color: var(--forge-icon-button-icon-color, currentColor);--_icon-button-background-color: var(--forge-icon-button-background-color, none);--_icon-button-icon-size: var(--forge-icon-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.5));--_icon-button-cursor: var(--forge-icon-button-cursor, pointer);--_icon-button-padding: var(--forge-icon-button-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-border: var(--forge-icon-button-border, none);--_icon-button-shadow: var(--forge-icon-button-shadow, none);--_icon-button-transition-duration: var(--forge-icon-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_icon-button-transition-timing: var(--forge-icon-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_icon-button-shape: var(--forge-icon-button-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_icon-button-shape-start-start: var(--forge-icon-button-shape-start-start, var(--_icon-button-shape));--_icon-button-shape-start-end: var(--forge-icon-button-shape-start-end, var(--_icon-button-shape));--_icon-button-shape-end-start: var(--forge-icon-button-shape-end-start, var(--_icon-button-shape));--_icon-button-shape-end-end: var(--forge-icon-button-shape-end-end, var(--_icon-button-shape));--_icon-button-shape-squared: var(--forge-icon-button-shape-squared, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_icon-button-outlined-border-width: var(--forge-icon-button-outlined-border-width, 1px);--_icon-button-outlined-border-style: var(--forge-icon-button-outlined-border-style, solid);--_icon-button-outlined-border-color: var(--forge-icon-button-outlined-border-color, var(--_icon-button-icon-color));--_icon-button-tonal-icon-color: var(--forge-icon-button-tonal-icon-color, var(--forge-theme-on-primary-container, #222c62));--_icon-button-tonal-background-color: var(--forge-icon-button-tonal-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-filled-icon-color: var(--forge-icon-button-filled-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-filled-background-color: var(--forge-icon-button-filled-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-raised-shadow: var(--forge-icon-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_icon-button-raised-hover-shadow: var(--forge-icon-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_icon-button-raised-active-shadow: var(--forge-icon-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_icon-button-raised-disabled-shadow: var(--forge-icon-button-raised-disabled-shadow, none);--_icon-button-density-small-size: var(--forge-icon-button-density-small-size, 24px);--_icon-button-density-small-padding: var(--forge-icon-button-density-small-padding, var(--forge-spacing-xxxsmall, 2px));--_icon-button-density-small-icon-size: var(--forge-icon-button-density-small-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_icon-button-density-medium-size: var(--forge-icon-button-density-medium-size, 36px);--_icon-button-density-medium-padding: var(--forge-icon-button-density-medium-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-density-large-size: var(--forge-icon-button-density-large-size, var(--_icon-button-size));--_icon-button-toggle-on-background-color: var(--forge-icon-button-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-tonal-toggle-background-color: var(--forge-icon-button-tonal-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-background-color: var(--forge-icon-button-filled-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-filled-toggle-icon-color: var(--forge-icon-button-filled-toggle-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-disabled-cursor: var(--forge-icon-button-disabled-cursor, not-allowed);--_icon-button-disabled-opacity: var(--forge-icon-button-disabled-opacity, .38);--_icon-button-popover-icon-padding: var(--forge-icon-button-popover-icon-padding, var(--forge-spacing-xsmall, 8px));--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-primary, #3f51b5))}.forge-icon-button{outline:none;-webkit-tap-highlight-color:transparent;position:relative;z-index:0;display:var(--_icon-button-display);align-items:center;justify-content:center;gap:var(--_icon-button-gap);box-sizing:border-box;height:var(--_icon-button-density-large-size);min-width:var(--_icon-button-density-large-size);border:var(--_icon-button-border);border-start-start-radius:var(--_icon-button-shape-start-start);border-start-end-radius:var(--_icon-button-shape-start-end);border-end-start-radius:var(--_icon-button-shape-end-start);border-end-end-radius:var(--_icon-button-shape-end-end);padding:var(--_icon-button-padding);box-shadow:var(--_icon-button-shadow);color:var(--_icon-button-icon-color);background:var(--_icon-button-background-color);font-size:var(--_icon-button-icon-size);cursor:var(--_icon-button-cursor);-webkit-user-select:none;user-select:none;transition-property:box-shadow,background;transition-duration:var(--_icon-button-transition-duration);transition-timing-function:var(--_icon-button-transition-timing)}.forge-icon-button img,.forge-icon-button svg{height:var(--_icon-button-icon-size);width:var(--_icon-button-icon-size)}.forge-icon-button svg{fill:currentColor}.forge-icon-button:not(:disabled){--_state-layer-display: var(--forge-state-layer-display, flex);--_state-layer-color: var(--forge-state-layer-color, var(--forge-theme-on-surface, #000000));--_state-layer-hover-color: var(--forge-state-layer-hover-color, var(--_state-layer-color));--_state-layer-hover-opacity: var(--forge-state-layer-hover-opacity, .08);--_state-layer-pressed-color: var(--forge-state-layer-pressed-color, var(--_state-layer-color));--_state-layer-pressed-opacity: var(--forge-state-layer-pressed-opacity, .12);--_state-layer-hover-duration: var(--forge-state-layer-hover-duration, 15ms);--_state-layer-pressed-duration: var(--forge-state-layer-pressed-duration, 105ms);--_state-layer-animation-duration: var(--forge-state-layer-animation-duration, 375ms)}.forge-icon-button:not(:disabled):before{position:absolute;backface-visibility:hidden;transform:translateZ(0);background-color:var(--_state-layer-hover-color);inset:0;transition:opacity var(--_state-layer-hover-duration) linear,background-color var(--_state-layer-hover-duration) linear;--_state-layer-hover-duration: var(--forge-state-layer-hover-duration, .1s);content:"";opacity:0;border-radius:inherit}.forge-icon-button:not(:disabled):hover:before{background-color:var(--_state-layer-hover-color);opacity:var(--_state-layer-hover-opacity)}.forge-icon-button:not(:disabled):active:before{opacity:var(--_state-layer-pressed-opacity);transition-duration:var(--_state-layer-pressed-duration);--_state-layer-pressed-opacity: var(--forge-state-layer-pressed-opacity, .18)}.forge-icon-button:not(:disabled){--forge-state-layer-color: var(--_icon-button-icon-color)}@keyframes forge-focus-indicator-outward-grow{0%{outline-width:0}to{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-outward-shrink{0%{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-grow{0%{border-width:0}to{border-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-shrink{0%{border-width:var(--_focus-indicator-active-width)}}.forge-icon-button:not(:disabled){outline:none}.forge-icon-button:not(:disabled):focus-visible:after{--_focus-indicator-display: var(--forge-focus-indicator-display, flex);--_focus-indicator-width: var(--forge-focus-indicator-width, var(--forge-border-medium, 2px));--_focus-indicator-active-width: var(--forge-focus-indicator-active-width, 6px);--_focus-indicator-color: var(--forge-focus-indicator-color, var(--forge-theme-primary, #3f51b5));--_focus-indicator-shape: var(--forge-focus-indicator-shape, calc(var(--forge-shape-extra-small, 1px) * var(--forge-shape-factor, 1)));--_focus-indicator-duration: var(--forge-focus-indicator-duration, var(--forge-animation-duration-long4, .6s));--_focus-indicator-easing: var(--forge-focus-indicator-easing, var(--forge-animation-easing-emphasized, cubic-bezier(.2, 0, 0, 1)));--_focus-indicator-shape-start-start: var(--forge-focus-indicator-shape-start-start, var(--_focus-indicator-shape));--_focus-indicator-shape-start-end: var(--forge-focus-indicator-shape-start-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-end: var(--forge-focus-indicator-shape-end-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-start: var(--forge-focus-indicator-shape-end-start, var(--_focus-indicator-shape));--_focus-indicator-outward-offset: var(--forge-focus-indicator-outward-offset, var(--forge-spacing-xxsmall, 4px));--_focus-indicator-inward-offset: var(--forge-focus-indicator-inward-offset, 0px);--_focus-indicator-offset-block: var(--forge-focus-indicator-offset-block, 0);--_focus-indicator-offset-inline: var(--forge-focus-indicator-offset-inline, 0)}.forge-icon-button:not(:disabled):focus-visible:after{animation-delay:0s,calc(var(--_focus-indicator-duration) * .25);animation-duration:calc(var(--_focus-indicator-duration) * .25),calc(var(--_focus-indicator-duration) * .75);animation-timing-function:var(--_focus-indicator-easing);box-sizing:border-box;color:var(--_focus-indicator-color);display:none;pointer-events:none;position:absolute;margin-block:var(--_focus-indicator-offset-block);margin-inline:var(--_focus-indicator-offset-inline);animation-name:forge-focus-indicator-outward-grow,forge-focus-indicator-outward-shrink;border-end-end-radius:calc(var(--_focus-indicator-shape-end-end) + var(--_focus-indicator-outward-offset));border-end-start-radius:calc(var(--_focus-indicator-shape-end-start) + var(--_focus-indicator-outward-offset));border-start-end-radius:calc(var(--_focus-indicator-shape-start-end) + var(--_focus-indicator-outward-offset));border-start-start-radius:calc(var(--_focus-indicator-shape-start-start) + var(--_focus-indicator-outward-offset));inset:calc(-1 * var(--_focus-indicator-outward-offset));outline:var(--_focus-indicator-width) solid currentColor;content:"";display:block}.forge-icon-button:not(:disabled){--forge-focus-indicator-color: var(--_icon-button-focus-indicator-color);--forge-focus-indicator-shape: var(--_icon-button-shape)}.forge-icon-button:not(:disabled):where(.forge-icon-button--text,:not(:where(.forge-icon-button--outlined,.forge-icon-button--tonal,.forge-icon-button--filled,.forge-icon-button--raised))){--forge-focus-indicator-outward-offset: 0px}.forge-icon-button--outlined{border-width:var(--_icon-button-outlined-border-width);border-style:var(--_icon-button-outlined-border-style);border-color:var(--_icon-button-outlined-border-color)}.forge-icon-button--tonal{--_icon-button-icon-color: var(--_icon-button-tonal-icon-color);--_icon-button-background-color: var(--_icon-button-tonal-background-color)}.forge-icon-button--filled,.forge-icon-button--raised{--_icon-button-icon-color: var(--_icon-button-filled-icon-color);--_icon-button-background-color: var(--_icon-button-filled-background-color)}.forge-icon-button--raised{--_icon-button-shadow: var(--_icon-button-raised-shadow)}.forge-icon-button--raised:hover{--_icon-button-raised-shadow: var(--_icon-button-raised-hover-shadow)}.forge-icon-button--raised:active{--_icon-button-raised-shadow: var(--_icon-button-raised-active-shadow)}.forge-icon-button--squared{--_icon-button-shape: var(--_icon-button-shape-squared)}.forge-icon-button--small{--_icon-button-size: var(--_icon-button-density-small-size);--_icon-button-icon-size: var(--_icon-button-density-small-icon-size);--_icon-button-padding: var(--_icon-button-density-small-padding)}.forge-icon-button--small>*{font-size:var(--_icon-button-density-small-icon-size)}.forge-icon-button--medium{--_icon-button-size: var(--_icon-button-density-medium-size);--_icon-button-padding: var(--_icon-button-density-medium-padding)}.forge-icon-button:disabled{pointer-events:none;opacity:var(--_icon-button-disabled-opacity);pointer-events:auto;cursor:not-allowed}.forge-icon-button forge-circular-progress{--forge-circular-progress-indicator-color: var(--_icon-button-icon-color);--forge-circular-progress-track-color: transparent;--forge-circular-progress-size: 1em}:host{display:block}.paginator-container{display:flex;align-items:center;justify-content:end;padding:var(--forge-spacing-small, 12px);border-block-start:1px solid var(--forge-theme-outline, #e0e0e0);border-end-start-radius:var(--forge-spacing-xsmall, 8px);border-end-end-radius:var(--forge-spacing-xsmall, 8px);background-color:var(--forge-theme-surface, #ffffff)}.paginator{display:flex;align-items:center;gap:var(--forge-spacing-small, 12px);border-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1));padding:var(--forge-spacing-xxxsmall, 2px)}.label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit)}';var ye=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,F=e=>{throw TypeError(e)},y=(e,t,o,a)=>{for(var r=a>1?void 0:a?_e(t,o):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&ye(t,o,r),r},xe=(e,t,o)=>t.has(e)||F("Cannot "+o),we=(e,t,o)=>t.has(e)?F("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),E=(e,t,o)=>(xe(e,t,"access private method"),o),m,H,J,O;let f=class extends q{constructor(){super(...arguments),we(this,m),this.currentPage=1,this.totalPages=1,this.disabled=!1,this._isPreviousDisabled=!0,this._isNextDisabled=!1}willUpdate(){this._isPreviousDisabled=this.disabled||this.currentPage<=1,this._isNextDisabled=this.disabled||this.currentPage>=this.totalPages}render(){return d`
      <div class="paginator-container">
        <div class="paginator">
          <button
            id="prev-btn"
            aria-label="View previous page"
            class="forge-icon-button forge-icon-button--medium"
            ?disabled=${this._isPreviousDisabled}
            @click=${E(this,m,H)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
            @click=${E(this,m,J)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
          <forge-ai-tooltip for="next-btn" placement="bottom">Next</forge-ai-tooltip>
        </div>
      </div>
    `}};m=new WeakSet;H=function(){if(this._isPreviousDisabled)return;const e=this.currentPage-1;E(this,m,O).call(this,e)};J=function(){if(this._isNextDisabled)return;const e=this.currentPage+1;E(this,m,O).call(this,e)};O=function(e){this.dispatchEvent(new CustomEvent("page-change",{detail:{currentPage:e,previousPage:this.currentPage},bubbles:!0}))};f.styles=G(ve);y([R({type:Number,attribute:"current-page"})],f.prototype,"currentPage",2);y([R({type:Number,attribute:"total-pages"})],f.prototype,"totalPages",2);y([R({type:Boolean,reflect:!0})],f.prototype,"disabled",2);y([M()],f.prototype,"_isPreviousDisabled",2);y([M()],f.prototype,"_isNextDisabled",2);f=y([U("forge-ai-paginator")],f);const ke='.forge-icon-button{--_icon-button-display: var(--forge-icon-button-display, inline-flex);--_icon-button-size: var(--forge-icon-button-size, 48px);--_icon-button-gap: var(--forge-icon-button-gap, 0);--_icon-button-icon-color: var(--forge-icon-button-icon-color, currentColor);--_icon-button-background-color: var(--forge-icon-button-background-color, none);--_icon-button-icon-size: var(--forge-icon-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.5));--_icon-button-cursor: var(--forge-icon-button-cursor, pointer);--_icon-button-padding: var(--forge-icon-button-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-border: var(--forge-icon-button-border, none);--_icon-button-shadow: var(--forge-icon-button-shadow, none);--_icon-button-transition-duration: var(--forge-icon-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_icon-button-transition-timing: var(--forge-icon-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_icon-button-shape: var(--forge-icon-button-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_icon-button-shape-start-start: var(--forge-icon-button-shape-start-start, var(--_icon-button-shape));--_icon-button-shape-start-end: var(--forge-icon-button-shape-start-end, var(--_icon-button-shape));--_icon-button-shape-end-start: var(--forge-icon-button-shape-end-start, var(--_icon-button-shape));--_icon-button-shape-end-end: var(--forge-icon-button-shape-end-end, var(--_icon-button-shape));--_icon-button-shape-squared: var(--forge-icon-button-shape-squared, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_icon-button-outlined-border-width: var(--forge-icon-button-outlined-border-width, 1px);--_icon-button-outlined-border-style: var(--forge-icon-button-outlined-border-style, solid);--_icon-button-outlined-border-color: var(--forge-icon-button-outlined-border-color, var(--_icon-button-icon-color));--_icon-button-tonal-icon-color: var(--forge-icon-button-tonal-icon-color, var(--forge-theme-on-primary-container, #222c62));--_icon-button-tonal-background-color: var(--forge-icon-button-tonal-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-filled-icon-color: var(--forge-icon-button-filled-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-filled-background-color: var(--forge-icon-button-filled-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-raised-shadow: var(--forge-icon-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_icon-button-raised-hover-shadow: var(--forge-icon-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_icon-button-raised-active-shadow: var(--forge-icon-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_icon-button-raised-disabled-shadow: var(--forge-icon-button-raised-disabled-shadow, none);--_icon-button-density-small-size: var(--forge-icon-button-density-small-size, 24px);--_icon-button-density-small-padding: var(--forge-icon-button-density-small-padding, var(--forge-spacing-xxxsmall, 2px));--_icon-button-density-small-icon-size: var(--forge-icon-button-density-small-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_icon-button-density-medium-size: var(--forge-icon-button-density-medium-size, 36px);--_icon-button-density-medium-padding: var(--forge-icon-button-density-medium-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-density-large-size: var(--forge-icon-button-density-large-size, var(--_icon-button-size));--_icon-button-toggle-on-background-color: var(--forge-icon-button-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-tonal-toggle-background-color: var(--forge-icon-button-tonal-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-background-color: var(--forge-icon-button-filled-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-filled-toggle-icon-color: var(--forge-icon-button-filled-toggle-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-disabled-cursor: var(--forge-icon-button-disabled-cursor, not-allowed);--_icon-button-disabled-opacity: var(--forge-icon-button-disabled-opacity, .38);--_icon-button-popover-icon-padding: var(--forge-icon-button-popover-icon-padding, var(--forge-spacing-xsmall, 8px));--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-primary, #3f51b5))}.forge-icon-button{outline:none;-webkit-tap-highlight-color:transparent;position:relative;z-index:0;display:var(--_icon-button-display);align-items:center;justify-content:center;gap:var(--_icon-button-gap);box-sizing:border-box;height:var(--_icon-button-density-large-size);min-width:var(--_icon-button-density-large-size);border:var(--_icon-button-border);border-start-start-radius:var(--_icon-button-shape-start-start);border-start-end-radius:var(--_icon-button-shape-start-end);border-end-start-radius:var(--_icon-button-shape-end-start);border-end-end-radius:var(--_icon-button-shape-end-end);padding:var(--_icon-button-padding);box-shadow:var(--_icon-button-shadow);color:var(--_icon-button-icon-color);background:var(--_icon-button-background-color);font-size:var(--_icon-button-icon-size);cursor:var(--_icon-button-cursor);-webkit-user-select:none;user-select:none;transition-property:box-shadow,background;transition-duration:var(--_icon-button-transition-duration);transition-timing-function:var(--_icon-button-transition-timing)}.forge-icon-button img,.forge-icon-button svg{height:var(--_icon-button-icon-size);width:var(--_icon-button-icon-size)}.forge-icon-button svg{fill:currentColor}.forge-icon-button:not(:disabled){--_state-layer-display: var(--forge-state-layer-display, flex);--_state-layer-color: var(--forge-state-layer-color, var(--forge-theme-on-surface, #000000));--_state-layer-hover-color: var(--forge-state-layer-hover-color, var(--_state-layer-color));--_state-layer-hover-opacity: var(--forge-state-layer-hover-opacity, .08);--_state-layer-pressed-color: var(--forge-state-layer-pressed-color, var(--_state-layer-color));--_state-layer-pressed-opacity: var(--forge-state-layer-pressed-opacity, .12);--_state-layer-hover-duration: var(--forge-state-layer-hover-duration, 15ms);--_state-layer-pressed-duration: var(--forge-state-layer-pressed-duration, 105ms);--_state-layer-animation-duration: var(--forge-state-layer-animation-duration, 375ms)}.forge-icon-button:not(:disabled):before{position:absolute;backface-visibility:hidden;transform:translateZ(0);background-color:var(--_state-layer-hover-color);inset:0;transition:opacity var(--_state-layer-hover-duration) linear,background-color var(--_state-layer-hover-duration) linear;--_state-layer-hover-duration: var(--forge-state-layer-hover-duration, .1s);content:"";opacity:0;border-radius:inherit}.forge-icon-button:not(:disabled):hover:before{background-color:var(--_state-layer-hover-color);opacity:var(--_state-layer-hover-opacity)}.forge-icon-button:not(:disabled):active:before{opacity:var(--_state-layer-pressed-opacity);transition-duration:var(--_state-layer-pressed-duration);--_state-layer-pressed-opacity: var(--forge-state-layer-pressed-opacity, .18)}.forge-icon-button:not(:disabled){--forge-state-layer-color: var(--_icon-button-icon-color)}@keyframes forge-focus-indicator-outward-grow{0%{outline-width:0}to{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-outward-shrink{0%{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-grow{0%{border-width:0}to{border-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-shrink{0%{border-width:var(--_focus-indicator-active-width)}}.forge-icon-button:not(:disabled){outline:none}.forge-icon-button:not(:disabled):focus-visible:after{--_focus-indicator-display: var(--forge-focus-indicator-display, flex);--_focus-indicator-width: var(--forge-focus-indicator-width, var(--forge-border-medium, 2px));--_focus-indicator-active-width: var(--forge-focus-indicator-active-width, 6px);--_focus-indicator-color: var(--forge-focus-indicator-color, var(--forge-theme-primary, #3f51b5));--_focus-indicator-shape: var(--forge-focus-indicator-shape, calc(var(--forge-shape-extra-small, 1px) * var(--forge-shape-factor, 1)));--_focus-indicator-duration: var(--forge-focus-indicator-duration, var(--forge-animation-duration-long4, .6s));--_focus-indicator-easing: var(--forge-focus-indicator-easing, var(--forge-animation-easing-emphasized, cubic-bezier(.2, 0, 0, 1)));--_focus-indicator-shape-start-start: var(--forge-focus-indicator-shape-start-start, var(--_focus-indicator-shape));--_focus-indicator-shape-start-end: var(--forge-focus-indicator-shape-start-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-end: var(--forge-focus-indicator-shape-end-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-start: var(--forge-focus-indicator-shape-end-start, var(--_focus-indicator-shape));--_focus-indicator-outward-offset: var(--forge-focus-indicator-outward-offset, var(--forge-spacing-xxsmall, 4px));--_focus-indicator-inward-offset: var(--forge-focus-indicator-inward-offset, 0px);--_focus-indicator-offset-block: var(--forge-focus-indicator-offset-block, 0);--_focus-indicator-offset-inline: var(--forge-focus-indicator-offset-inline, 0)}.forge-icon-button:not(:disabled):focus-visible:after{animation-delay:0s,calc(var(--_focus-indicator-duration) * .25);animation-duration:calc(var(--_focus-indicator-duration) * .25),calc(var(--_focus-indicator-duration) * .75);animation-timing-function:var(--_focus-indicator-easing);box-sizing:border-box;color:var(--_focus-indicator-color);display:none;pointer-events:none;position:absolute;margin-block:var(--_focus-indicator-offset-block);margin-inline:var(--_focus-indicator-offset-inline);animation-name:forge-focus-indicator-outward-grow,forge-focus-indicator-outward-shrink;border-end-end-radius:calc(var(--_focus-indicator-shape-end-end) + var(--_focus-indicator-outward-offset));border-end-start-radius:calc(var(--_focus-indicator-shape-end-start) + var(--_focus-indicator-outward-offset));border-start-end-radius:calc(var(--_focus-indicator-shape-start-end) + var(--_focus-indicator-outward-offset));border-start-start-radius:calc(var(--_focus-indicator-shape-start-start) + var(--_focus-indicator-outward-offset));inset:calc(-1 * var(--_focus-indicator-outward-offset));outline:var(--_focus-indicator-width) solid currentColor;content:"";display:block}.forge-icon-button:not(:disabled){--forge-focus-indicator-color: var(--_icon-button-focus-indicator-color);--forge-focus-indicator-shape: var(--_icon-button-shape)}.forge-icon-button:not(:disabled):where(.forge-icon-button--text,:not(:where(.forge-icon-button--outlined,.forge-icon-button--tonal,.forge-icon-button--filled,.forge-icon-button--raised))){--forge-focus-indicator-outward-offset: 0px}.forge-icon-button--outlined{border-width:var(--_icon-button-outlined-border-width);border-style:var(--_icon-button-outlined-border-style);border-color:var(--_icon-button-outlined-border-color)}.forge-icon-button--tonal{--_icon-button-icon-color: var(--_icon-button-tonal-icon-color);--_icon-button-background-color: var(--_icon-button-tonal-background-color)}.forge-icon-button--filled,.forge-icon-button--raised{--_icon-button-icon-color: var(--_icon-button-filled-icon-color);--_icon-button-background-color: var(--_icon-button-filled-background-color)}.forge-icon-button--raised{--_icon-button-shadow: var(--_icon-button-raised-shadow)}.forge-icon-button--raised:hover{--_icon-button-raised-shadow: var(--_icon-button-raised-hover-shadow)}.forge-icon-button--raised:active{--_icon-button-raised-shadow: var(--_icon-button-raised-active-shadow)}.forge-icon-button--squared{--_icon-button-shape: var(--_icon-button-shape-squared)}.forge-icon-button--small{--_icon-button-size: var(--_icon-button-density-small-size);--_icon-button-icon-size: var(--_icon-button-density-small-icon-size);--_icon-button-padding: var(--_icon-button-density-small-padding)}.forge-icon-button--small>*{font-size:var(--_icon-button-density-small-icon-size)}.forge-icon-button--medium{--_icon-button-size: var(--_icon-button-density-medium-size);--_icon-button-padding: var(--_icon-button-density-medium-padding)}.forge-icon-button:disabled{pointer-events:none;opacity:var(--_icon-button-disabled-opacity);pointer-events:auto;cursor:not-allowed}.forge-icon-button forge-circular-progress{--forge-circular-progress-indicator-color: var(--_icon-button-icon-color);--forge-circular-progress-track-color: transparent;--forge-circular-progress-size: 1em}@keyframes float-in-label-animation{0%{translate:0;opacity:40%}to{translate:var(--_field-floating-label-translation);opacity:100%}}@keyframes float-out-label-animation{0%{translate:var(--_field-floating-label-translation);opacity:40%}to{translate:0;opacity:100%}}@keyframes multiline-inset-label-background-animation{0%{opacity:0%}to{opacity:100%}}@layer base,textarea,density,invalid,disabled;@layer base{.forge-field{--_field-shape: var(--forge-field-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_field-outline-style: var(--forge-field-outline-style, solid);--_field-outline-width: var(--forge-field-outline-width, var(--forge-border-thin, 1px));--_field-height: var(--forge-field-height, 40px);--_field-inset-height: var(--forge-field-inset-height, 48px);--_field-background: var(--forge-field-background, transparent);--_field-padding-inline: var(--forge-field-padding-inline, 12px);--_field-disabled-background: var(--forge-field-disabled-background, var(--forge-theme-surface-container-low, #ebebeb));--_field-disabled-opacity: var(--forge-field-disabled-opacity, .38);--_field-placeholder-color: var(--forge-field-placeholder-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)))}.forge-field{position:relative;display:flex;align-items:center;gap:var(--forge-spacing-xsmall, 8px);box-shadow:var(--_field-elevation);padding-inline:var(--_field-padding-inline);border-radius:var(--_field-shape);outline-style:var(--_field-outline-style);outline-width:var(--_field-outline-width);outline-color:var(--forge-theme-outline-low, #9e9e9e);outline-offset:calc(var(--_field-outline-width) * -1);background:var(--_field-background);opacity:var(--_field-disableable-opacity);cursor:var(--_field-disableable-cursor)}.forge-field:hover:not(:has(:where(input,textarea,select,.forge-field__input):disabled)){outline-color:var(--forge-theme-outline-high, #212121)}.forge-field :where(input,textarea,select,.forge-field__input){box-sizing:border-box;margin:0;outline:none;border:none;background-color:transparent;padding-block:0;padding-inline:0;block-size:100%;color:inherit;font:inherit;font-size:var(--_field-font-size);text-overflow:ellipsis;padding-block-start:0;padding-block-end:0;transition:padding-block var(--_field-floating-animation-duration) var(--_field-floating-animation-timing);display:flex;block-size:var(--_field-height);inline-size:100%;overflow:hidden;color:var(--forge-theme-text-high, rgba(0, 0, 0, .87));background:transparent;appearance:none}.forge-field :where(input,textarea,select,.forge-field__input)::placeholder{color:var(--_field-placeholder-color)}.forge-field--plain{--_field-multiline-inset-label-background: var(--forge-field-multiline-inset-label-background, var(--forge-theme-surface, #ffffff));--_field-multiline-inset-label-background-hover: var(--forge-field-multiline-inset-label-background-hover, var(--forge-theme-surface, #ffffff));--_field-outline-color: var(--forge-field-outline-color, transparent);--_field-outline-color-hover: var(--forge-field-outline-color-hover, transparent);--_field-inner-border-display: var(--forge-field-inner-border-display, none);--_field-padding-inline: var(--forge-field-padding-inline, 0);--_field-surface-display: var(--forge-field-surface-display, none);outline-width:0}.forge-field--tonal{--_field-outline-color: var(--forge-field-outline-color, transparent);--_field-outline-color-hover: var(--forge-field-outline-color-hover, transparent);--_field-inner-border-block-size: var(--forge-field-inner-border-block-size, calc(100% - 8px) );--_field-background: var(--_field-tonal-background);--_field-multiline-inset-label-background: var(--forge-field-multiline-inset-label-background, var(--_field-background));--_field-hover-background: var(--forge-field-hover-background, tonal-background-hover);--_field-multiline-inset-label-background: var(--forge-field-multiline-inset-label-background, var(--_field-multiline-inset-label-tonal-background));outline-width:0;background:var(--forge-theme-primary-container-low, #e8eaf6)}.forge-field--tonal:hover:not(:has(:where(input,textarea,select,.forge-field__input):disabled)){background:var(--forge-theme-surface-container-minimum, #f5f5f5)}.forge-field--filled{--_field-background: var(--_field-filled-background);--_field-multiline-inset-label-background: var(--forge-field-multiline-inset-label-background, var(--_field-background));background:var(--forge-theme-surface-bright, #ffffff)}.forge-field--raised{--_field-elevation: var(--forge-field-elevation, 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12));--_field-elevation-active: var(--forge-field-elevation-active, 0px 3px 3px -2px rgba(0, 0, 0, .2), 0px 3px 4px 0px rgba(0, 0, 0, .14), 0px 1px 8px 0px rgba(0, 0, 0, .12));--_field-outline-color: var(--forge-field-outline-color, transparent);--_field-outline-color-hover: var(--forge-field-outline-color-hover, transparent);--_field-inner-border-block-size: var(--forge-field-inner-border-block-size, calc(100% - 8px) );--_field-background: var(--_field-filled-background);--_field-multiline-inset-label-background: var(--forge-field-multiline-inset-label-background, var(--_field-background));outline-width:0}.forge-field--raised:hover:not(:has(:where(input,textarea,select,.forge-field__input):disabled)){box-shadow:var(--_field-elevation-active)}.forge-field--rounded{--_field-shape: var(--forge-field-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_field-padding-inline: var(--forge-field-padding-inline, var(--_field-rounded-container-padding-inline-start))}.forge-field:has(label){--_field-floating-label-translation: var(--forge-field-floating-label-translation, 0 calc(calc( calc(max(var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375))), var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25))))/2) + calc((var(--_field-height) - 56px) / 8)) * -1));display:grid;grid-template-columns:auto 1fr auto;gap:0;block-size:var(--_field-height);--_field-height: var(--forge-field-height, 48px)}.forge-field:has(label) label{position:absolute;grid-column:2;pointer-events:none;color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6))}.forge-field:has(label).forge-field--rounded{padding-inline:var(--forge-spacing-large, 24px)}@keyframes forge-field-float-label-in{0%{transform:translateY(15%);opacity:0}to{transform:translateY(0);opacity:1}}.forge-field:has(label).forge-field--float-label-in label{animation:forge-field-float-label-in var(--forge-animation-duration-short4, .2s) var(--forge-animation-easing-accelerate, cubic-bezier(.3, 0, 1, 1)) forwards}@keyframes forge-field-float-label-out{0%{opacity:0}to{opacity:1}}.forge-field:has(label).forge-field--float-label-out label{animation:forge-field-float-label-out var(--forge-animation-duration-short4, .2s) var(--forge-animation-easing-accelerate, cubic-bezier(.3, 0, 1, 1)) forwards}.forge-field:has(label).forge-field--float-label label,.forge-field:has(label):has(:where(:where(input,textarea,select,.forge-field__input):autofill,:where(input,textarea,select,.forge-field__input):placeholder-shown)) label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .8125)));font-weight:var(--forge-typography-label2-font-weight, 400);line-height:var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label2-letter-spacing, .0096153846em);text-transform:var(--forge-typography-label2-text-transform, inherit);text-decoration:var(--forge-typography-label2-text-decoration, inherit);translate:var(--_field-floating-label-translation)}.forge-field:has(label).forge-field--float-label:not(.forge-field--extra-small) :where(input,textarea,select,.forge-field__input),.forge-field:has(label):has(:where(:where(input,textarea,select,.forge-field__input):autofill,:where(input,textarea,select,.forge-field__input):placeholder-shown)):not(.forge-field--extra-small) :where(input,textarea,select,.forge-field__input){padding-block-start:calc((max(var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375))),var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)))) / 2 + (var(--_field-height) - 56px) / 8) * 2)!important}.forge-field:has(label) :where(input,textarea,select,.forge-field__input){grid-column:2;block-size:var(--_field-height)}.forge-field:has(label) :where(input,textarea,select,.forge-field__input)~*{grid-column:3;margin-inline-start:var(--forge-spacing-xsmall, 8px)}.forge-field:has(label)>:not(:where(input,textarea,select,.forge-field__input)~*,:where(input,textarea,select,.forge-field__input),label){grid-column:1;margin-inline-end:var(--forge-spacing-xsmall, 8px)}@keyframes forge-focus-indicator-outward-grow{0%{outline-width:0}to{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-outward-shrink{0%{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-grow{0%{border-width:0}to{border-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-shrink{0%{border-width:var(--_focus-indicator-active-width)}}.forge-field:has(:where(input,textarea,select,.forge-field__input):focus){outline:none}.forge-field:has(:where(input,textarea,select,.forge-field__input):focus):after{--_focus-indicator-display: var(--forge-focus-indicator-display, flex);--_focus-indicator-width: var(--forge-focus-indicator-width, var(--forge-border-medium, 2px));--_focus-indicator-active-width: var(--forge-focus-indicator-active-width, 6px);--_focus-indicator-color: var(--forge-focus-indicator-color, var(--forge-theme-primary, #3f51b5));--_focus-indicator-shape: var(--forge-focus-indicator-shape, calc(var(--forge-shape-extra-small, 1px) * var(--forge-shape-factor, 1)));--_focus-indicator-duration: var(--forge-focus-indicator-duration, var(--forge-animation-duration-long4, .6s));--_focus-indicator-easing: var(--forge-focus-indicator-easing, var(--forge-animation-easing-emphasized, cubic-bezier(.2, 0, 0, 1)));--_focus-indicator-shape-start-start: var(--forge-focus-indicator-shape-start-start, var(--_focus-indicator-shape));--_focus-indicator-shape-start-end: var(--forge-focus-indicator-shape-start-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-end: var(--forge-focus-indicator-shape-end-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-start: var(--forge-focus-indicator-shape-end-start, var(--_focus-indicator-shape));--_focus-indicator-outward-offset: var(--forge-focus-indicator-outward-offset, var(--forge-spacing-xxsmall, 4px));--_focus-indicator-inward-offset: var(--forge-focus-indicator-inward-offset, 0px);--_focus-indicator-offset-block: var(--forge-focus-indicator-offset-block, 0);--_focus-indicator-offset-inline: var(--forge-focus-indicator-offset-inline, 0);animation-delay:0s,calc(var(--_focus-indicator-duration) * .25);animation-duration:calc(var(--_focus-indicator-duration) * .25),calc(var(--_focus-indicator-duration) * .75);animation-timing-function:var(--_focus-indicator-easing);box-sizing:border-box;color:var(--_focus-indicator-color);display:none;pointer-events:none;position:absolute;margin-block:var(--_focus-indicator-offset-block);margin-inline:var(--_focus-indicator-offset-inline);animation-name:forge-focus-indicator-outward-grow,forge-focus-indicator-outward-shrink;border-end-end-radius:calc(var(--_focus-indicator-shape-end-end) + var(--_focus-indicator-outward-offset));border-end-start-radius:calc(var(--_focus-indicator-shape-end-start) + var(--_focus-indicator-outward-offset));border-start-end-radius:calc(var(--_focus-indicator-shape-start-end) + var(--_focus-indicator-outward-offset));border-start-start-radius:calc(var(--_focus-indicator-shape-start-start) + var(--_focus-indicator-outward-offset));inset:calc(-1 * var(--_focus-indicator-outward-offset));outline:var(--_focus-indicator-width) solid currentColor;content:"";display:block;border-radius:inherit}.forge-field:has(:where(input,textarea,select,.forge-field__input):focus){--forge-focus-indicator-color: var(--forge-theme-primary, #3f51b5);--forge-focus-indicator-outward-offset: 0px}}@layer textarea{.forge-field:has(textarea:only-child){padding-inline:0}.forge-field:has(textarea:only-child) textarea{padding-inline:var(--_field-padding-inline)}.forge-field:has(textarea){align-items:start;block-size:fit-content}.forge-field:has(textarea) textarea{padding-block-start:calc((var(--_field-height) - var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)))) / 2);padding-block-end:calc(max(var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375))),var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)))) / 2 + (var(--_field-height) - 56px) / 8 + (var(--_field-height) - var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)))) / 2);resize:vertical;block-size:fit-content}.forge-field:has(textarea) *:not(textarea){margin-block-start:var(--forge-spacing-xsmall, 8px)}}@layer density{.forge-field--dense,.forge-field--extra-small{--_field-height: var(--forge-field-height, 24px);--_field-padding-inline-start: var(--forge-field-padding-inline-start, 8px);--_field-padding-inline-end: var(--forge-field-padding-inline-end, 4px)}.forge-field--dense:has(label) label,.forge-field--extra-small:has(label) label{display:none}.forge-field--small{--_field-height: var(--forge-field-height, 32px)}.forge-field--small:has(label){--_field-height: var(--forge-field-height, 40px)}.forge-field--large{--_field-height: var(--forge-field-height, 48px)}.forge-field--large:has(label){--_field-height: var(--forge-field-height, 56px)}.forge-field--extra-large{--_field-height: var(--forge-field-height, 56px)}.forge-field--extra-large:has(label){--_field-height: var(--forge-field-height, 64px)}}@layer disabled{.forge-field:has(:where(input,textarea,select,.forge-field__input):disabled){--_field-background: var(--_field-disabled-background);--_field-disableable-cursor: var(--forge-field-disableable-cursor, not-allowed);--_field-disableable-opacity: var(--forge-field-disableable-opacity, var(--_field-disabled-opacity))}.forge-field:has(:where(input,textarea,select,.forge-field__input):disabled) :where(input,textarea,select,.forge-field__input):disabled{cursor:not-allowed}}@layer invalid{.forge-field--invalid,.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid){outline-color:var(--forge-theme-error, #b00020)}.forge-field--invalid :not(:where(input,textarea,select,.forge-field__input)),.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid) :not(:where(input,textarea,select,.forge-field__input)){color:var(--forge-theme-on-error-container, #5f0011)}.forge-field--invalid.forge-field:has(:where(input,textarea,select,.forge-field__input):focus),.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid).forge-field:has(:where(input,textarea,select,.forge-field__input):focus){--forge-focus-indicator-color: var(--forge-theme-error, #b00020);--forge-focus-indicator-outward-offset: calc(var(--_field-outline-width) * -1)}.forge-field--invalid label,.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid) label{color:var(--forge-theme-error, #b00020)}.forge-field--invalid.forge-field--tonal,.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid).forge-field--tonal{background:var(--forge-theme-error-container-low, #f6e0e4)}.forge-field--invalid.forge-field--tonal:hover:not(:has(:where(input,textarea,select,.forge-field__input):disabled)),.forge-field:has(:where(input,textarea,select,.forge-field__input):invalid).forge-field--tonal:hover:not(:has(:where(input,textarea,select,.forge-field__input):disabled)){background:var(--forge-theme-error-container-minimum, #fcf5f6)}}@keyframes fadein{0%{opacity:0}to{opacity:1}}:host{display:block}.artifact{--forge-ai-artifact-content-padding: 0;height:100%;margin-block-start:var(--forge-spacing-small, 12px)}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading1-font-size-scale, .875)));font-weight:var(--forge-typography-heading1-font-weight, 500);line-height:var(--forge-typography-heading1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading1-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-heading1-letter-spacing, .0178571429em);text-transform:var(--forge-typography-heading1-text-transform, inherit);text-decoration:var(--forge-typography-heading1-text-decoration, inherit)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.icon-field{display:flex;align-items:center}.icon-field svg{width:20px;height:20px}.table-container{background-color:var(--forge-theme-surface, #ffffff);border-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1));overflow-x:auto}.table-container::-webkit-scrollbar{height:var(--forge-scrollbar-height, 16px);width:var(--forge-scrollbar-width, 16px)}.table-container::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.table-container::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover, var(--forge-theme-surface-container-low, #ebebeb))}.table-container::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.table-container::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height, 32px);width:var(--forge-scrollbar-thumb-min-width, 32px);border-radius:var(--forge-scrollbar-border-radius, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));border-width:var(--forge-scrollbar-border-width, 3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container, var(--forge-theme-surface-container-medium, #c2c2c2));background-clip:content-box}.table-container::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover, var(--forge-theme-surface-container-high, #9e9e9e))}.table-container::-webkit-scrollbar,.table-container::-webkit-scrollbar-corner,.table-container::-webkit-scrollbar-track{border-end-start-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1));border-end-end-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1))}.data-table{width:100%;border-spacing:0;overflow:hidden}.actions{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.table-head{color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6));font-weight:700;text-align:left;font-size:calc(var(--forge-typography-font-size, 1rem) * .75);box-sizing:border-box}.column-header{width:max-content;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .8125)));font-weight:var(--forge-typography-label2-font-weight, 400);line-height:var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label2-letter-spacing, .0096153846em);text-transform:var(--forge-typography-label2-text-transform, inherit);text-decoration:var(--forge-typography-label2-text-decoration, inherit);font-weight:600}.table-row{height:36px;height:32px}.table-row:nth-child(2n){background-color:var(--forge-theme-surface-dim, #fafafa)}.table-row:last-child td{border-bottom:none;border-end-start-radius:var(--forge-spacing-xsmall, 8px);border-end-end-radius:var(--forge-spacing-xsmall, 8px)}th,td{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit);padding-block:var(--forge-spacing-xsmall, 8px);padding-inline-start:var(--forge-spacing-xsmall, 8px);padding-inline-end:var(--forge-spacing-medium, 16px);border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:var(--forge-theme-outline, #e0e0e0)}.body2{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit)}.empty-state-icon{width:48px;height:48px;fill:var(--forge-theme-outline, #e0e0e0)}';var $e=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,K=e=>{throw TypeError(e)},P=(e,t,o,a)=>{for(var r=a>1?void 0:a?ze(t,o):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&$e(t,o,r),r},Y=(e,t,o)=>t.has(e)||K("Cannot "+o),s=(e,t,o)=>(Y(e,t,"read from private field"),o?o.call(e):t.get(e)),L=(e,t,o)=>t.has(e)?K("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),A=(e,t,o)=>(Y(e,t,"access private method"),o),n,h,C,V,I,j,Q,Z,B,X,ee,te,oe,N,ae,re,ie,ne,se,le;const Te=10,Se=5;let v=class extends q{constructor(){super(...arguments),L(this,n),this._currentPage=1,this._filterValue="",L(this,N,d`
    <div class="actions" slot="actions">
      <label for="data-table-filter-input" class="sr-only">Filter table data</label>
      <div class="forge-field forge-field--small icon-field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" />
        </svg>
        <input
          autocomplete="off"
          type="text"
          id="data-table-filter-input"
          placeholder="Filter data"
          .value=${this._filterValue}
          @input=${A(this,n,te)} />
      </div>
    </div>
  `)}firstUpdated(){A(this,n,oe).call(this)}render(){const e=s(this,n,h);return!e||!e.headers||!e.rows?d`<forge-ai-artifact><p class="body2">No table data available</p></forge-ai-artifact>`:d`
      <forge-ai-artifact class="artifact">
        ${s(this,n,ne)} ${s(this,n,se)} ${s(this,n,ie)} ${s(this,n,le)}
      </forge-ai-artifact>
    `}};n=new WeakSet;h=function(){return this.toolCall.args};C=function(){return s(this,n,h)?.maxNumberOfRows||Te};V=function(){return s(this,n,h)?.rows?.length||0};I=function(){const e=s(this,n,h);return!e||!e.rows?[]:this._filterValue.trim()?e.rows.filter(t=>t.some(o=>String(o).toLowerCase().includes(this._filterValue.toLowerCase()))):e.rows};j=function(){const e=s(this,n,I);if(!e.length||!s(this,n,B))return e;const t=(this._currentPage-1)*s(this,n,C),o=t+s(this,n,C);return e.slice(t,o)};Q=function(){const e=s(this,n,I);return e.length?Math.ceil(e.length/s(this,n,C)):1};Z=function(){return s(this,n,V)>Se};B=function(){return s(this,n,I).length>s(this,n,C)};X=function(){return this._filterValue.trim()!==""&&s(this,n,I).length===0};ee=function(e){this._currentPage=e.detail.currentPage};te=function(e){this._filterValue=e.target.value,this._currentPage=1};oe=function(){requestAnimationFrame(()=>{const e=this.shadowRoot?.querySelector(".artifact");if(e){const t=e.scrollHeight;this.style.height=`${t}px`}})};N=new WeakMap;ae=function(){return d`
      <forge-ai-empty-state>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="empty-state-icon">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />
        </svg>
        <h3 slot="heading">No results found</h3>
        <p slot="body">No data matches your filter "${this._filterValue}". Try adjusting your search terms.</p>
      </forge-ai-empty-state>
    `};re=function(){const e=s(this,n,h),t=e?.title||"Data table";return d`
      <table class="data-table" aria-label="${t}">
        <thead class="table-head">
          <tr class="table-row">
            ${e?.headers.map(o=>d`
                <th>
                  <div class="column-header">${o}</div>
                </th>
              `)}
          </tr>
        </thead>
        <tbody>
          ${s(this,n,j).map(o=>d`
              <tr class="table-row">
                ${o.map(a=>d` <td>${a}</td> `)}
              </tr>
            `)}
        </tbody>
      </table>
    `};ie=function(){return s(this,n,X)?s(this,n,ae):d` <div class="table-container">${s(this,n,re)}</div> `};ne=function(){const e=s(this,n,h);return e?.title?d`<h2 class="title" slot="start">${e.title}</h2>`:W};se=function(){return s(this,n,Z)?s(this,N):W};le=function(){return s(this,n,B)?d`<forge-ai-paginator
      current-page="${this._currentPage}"
      total-pages="${s(this,n,Q)}"
      @page-change=${A(this,n,ee)}></forge-ai-paginator>`:W};v.styles=G(ke);P([R({attribute:!1})],v.prototype,"toolCall",2);P([M()],v.prototype,"_currentPage",2);P([M()],v.prototype,"_filterValue",2);v=P([U("forge-ai-tool-data-table")],v);const{action:c}=__STORYBOOK_MODULE_ACTIONS__,Ce="forge-ai-chatbot",Ie={title:"AI Components/Primitives/Chatbot",component:Ce,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Custom title for the chatbot header"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},debugCommand:{control:"select",options:["on","off"],description:"Show/hide debug mode slash command"},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt. Set to empty string to hide."}},args:{placeholder:"Ask a question...",titleText:"AI Assistant",fileUpload:"off",voiceInput:"on",debugCommand:"on",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:e=>{const t=new u({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=c("forge-ai-chatbot-connected"),a=c("forge-ai-chatbot-disconnected"),r=c("forge-ai-chatbot-message-sent"),l=c("forge-ai-chatbot-message-received"),i=c("forge-ai-chatbot-tool-call"),g=c("forge-ai-chatbot-error"),D=c("forge-ai-chatbot-expand"),p=c("forge-ai-chatbot-minimize"),b=c("forge-ai-chatbot-clear"),ce=c("forge-ai-chatbot-export"),de=c("forge-ai-chatbot-info"),ge=c("forge-ai-chatbot-response-feedback");return d`
      <div>
        <forge-ai-chatbot
          style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          debug-command=${e.debugCommand}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-connected=${o}
          @forge-ai-chatbot-disconnected=${a}
          @forge-ai-chatbot-message-sent=${r}
          @forge-ai-chatbot-message-received=${l}
          @forge-ai-chatbot-tool-call=${i}
          @forge-ai-chatbot-error=${g}
          @forge-ai-chatbot-expand=${D}
          @forge-ai-chatbot-minimize=${p}
          @forge-ai-chatbot-clear=${b}
          @forge-ai-chat-header-export=${ce}
          @forge-ai-chatbot-info=${de}
          @forge-ai-chatbot-response-feedback=${fe=>ge(fe.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},_={},x={render:e=>{const t=new u({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return d`
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
          @forge-ai-chatbot-connected=${c("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${c("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${c("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${c("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-error=${c("forge-ai-chatbot-error")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},w={render:e=>{const t=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],o=new u({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:t}),a=r=>{c("forge-ai-chatbot-tool-call")(r.detail)};return d`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${o}
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
          @forge-ai-chatbot-tool-call=${a}>
        </forge-ai-chatbot>
      </div>
    `}},k={args:{showMinimizeButton:!0},render:e=>{const t="ai-chatbot-thread-state",o=new u({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const r=document.querySelector("forge-ai-chatbot");if(!r)return;const l=localStorage.getItem(t);if(l)try{const i=JSON.parse(l);r.setThreadState(i)}catch(i){console.error("Failed to restore thread state:",i)}r.addEventListener("forge-ai-chatbot-message-received",()=>{const i=r.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),r.addEventListener("forge-ai-chatbot-message-sent",()=>{const i=r.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),r.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(t)})},0),d`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Thread Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Chat messages are automatically saved to localStorage. Refresh the page to see the conversation restored.
            Use the clear button in the header to reset.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${o}
          .suggestions=${a}
          placeholder=${e.placeholder}
          title-text="Persistent Chat"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-connected=${c("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${c("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${c("forge-ai-chatbot-message-received")}>
        </forge-ai-chatbot>
      </div>
    `}},$={render:e=>{const t=new De;return d`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .suggestions=${[{text:"Text then tool",value:"text-then-tool"},{text:"Tool then text",value:"tool-then-text"},{text:"Text, tool, text",value:"text-tool-text"},{text:"Alternating",value:"alternating"},{text:"Multiple tools",value:"multiple-tools"},{text:"Slow sequential tools",value:"slow-sequential"},{text:"Multiple text chunks",value:"multiple-text"}]}
          placeholder=${e.placeholder}
          title-text="Mixed Responses"
          ?enable-reactions=${e.enableReactions}>
        </forge-ai-chatbot>
      </div>
    `}};class De extends u{#a=2e3;#o=2e3;#r=500;#i=50;constructor(){super({simulateStreaming:!0,simulateTools:!0})}sendMessage(t){this._updateState({isRunning:!0});const a=t[t.length-1]?.content?.toLowerCase()||"";this._emitRunStarted(),a.includes("text-then-tool")||a==="text then tool"?this.#n():a.includes("tool-then-text")||a==="tool then text"?this.#s():a.includes("text-tool-text")||a==="text, tool, text"?this.#l():a.includes("alternating")?this.#c():a.includes("multiple-tools")||a==="multiple tools"?this.#d():a.includes("slow-sequential")||a==="slow sequential tools"?this.#g():(a.includes("multiple-text")||a==="multiple text chunks")&&this.#f()}sendToolResult(t,o){this._emitToolResult({toolCallId:t,result:o,message:{id:this.#e(),role:"tool",content:JSON.stringify(o),timestamp:Date.now(),status:"complete",toolCallId:t}})}#n(){const t=this.#e(),o=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"Let me check the weather for you.",()=>{this._emitToolCallStart({id:o,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"getCurrentWeather",args:{location:"Chicago"}}),this._emitToolResult({toolCallId:o,result:{temperature:65,conditions:"cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#o)})},this.#a)}#s(){const t=this.#e(),o=this.#e();setTimeout(()=>{this._emitMessageStart(t),this._emitToolCallStart({id:o,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"getCurrentWeather",args:{location:"Boston"}}),this._emitToolResult({toolCallId:o,result:{temperature:58,conditions:"partly cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}});const a=this.#e();this._emitMessageStart(a),this.#t(a,"Based on the weather data, it looks sunny today!",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#o)},this.#a)}#l(){const t=this.#e(),o=this.#e(),a=this.#e(),r=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"Let me gather that information for you.",()=>{this._emitToolCallStart({id:o,messageId:t,name:"fetchUserData"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"fetchUserData",args:{userId:"abc123"}}),this._emitToolResult({toolCallId:o,result:{name:"Jane Smith",role:"Admin"},message:{id:t,role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:a,messageId:t,name:"queryPermissions"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"queryPermissions",args:{role:"Admin"}}),this._emitToolResult({toolCallId:a,result:{canEdit:!0,canDelete:!0},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitToolCallStart({id:r,messageId:t,name:"loadDashboard"}),setTimeout(()=>{this._emitToolCallEnd({id:r,messageId:t,name:"loadDashboard",args:{view:"summary"}}),this._emitToolResult({toolCallId:r,result:{widgets:5,lastUpdated:"2024-01-15"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:r}}),this.#t(t,"Done! I found the user profile, verified permissions, and loaded the dashboard. Everything is ready for you.",()=>{this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#o)},this.#o)},this.#o)})},this.#a)}#c(){const t=this.#e(),o=this.#e(),a=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"First, let me check the weather.",()=>{this._emitToolCallStart({id:o,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"getCurrentWeather",args:{location:"Denver"}}),this._emitToolResult({toolCallId:o,result:{temperature:70,conditions:"clear"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitMessageStart(t),this.#t(t,"Now let me search the database for related info.",()=>{this._emitToolCallStart({id:a,messageId:t,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"searchDatabase",args:{query:"weather history"}}),this._emitToolResult({toolCallId:a,result:{records:42,summary:"Historical data found"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitMessageStart(t),this.#t(t,"All done! I found the information you need.",()=>{this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#o)})},this.#o)})},this.#a)}#d(){const t=this.#e(),o=this.#e(),a=this.#e(),r=this.#e();setTimeout(()=>{this._emitMessageStart(t),this._emitToolCallStart({id:o,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"getCurrentWeather",args:{location:"Miami"}}),this._emitToolResult({toolCallId:o,result:{temperature:85,conditions:"humid"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:a,messageId:t,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"searchDatabase",args:{query:"forecast"}}),this._emitToolResult({toolCallId:a,result:{records:15,summary:"Forecast data available"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitToolCallStart({id:r,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:r,messageId:t,name:"getCurrentWeather",args:{location:"Orlando"}}),this._emitToolResult({toolCallId:r,result:{temperature:82,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:r}}),this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#o)},this.#o)},this.#o)},this.#a)}#g(){const o=(r,l,i)=>{let g=0;const D=()=>{if(g<l.length){const p=l[g],b=this.#e();this._emitToolCallStart({id:b,messageId:r,name:p.name}),setTimeout(()=>{this._emitToolCallEnd({id:b,messageId:r,name:p.name,args:p.args}),this._emitToolResult({toolCallId:b,result:p.result,message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:b}}),g++,D()},2500)}else i()};D()},a=this.#e();setTimeout(()=>{this._emitMessageStart(a),this.#t(a,"I'll help you with that comprehensive analysis. Let me gather the necessary data first.",()=>{this._emitMessageEnd(a);const r=this.#e();o(r,[{name:"fetchUserProfile",args:{userId:"12345"},result:{name:"John Doe",role:"Admin"}},{name:"queryDatabase",args:{table:"orders"},result:{count:47,total:"$12,450"}},{name:"loadPermissions",args:{role:"Admin"},result:{canEdit:!0,canDelete:!0}},{name:"fetchAccountSettings",args:{userId:"12345"},result:{theme:"dark",notifications:!0}},{name:"loadRecentActivity",args:{limit:20},result:{activities:20,lastLogin:"2024-01-15"}},{name:"queryInventory",args:{warehouse:"main"},result:{items:1250,lowStock:12}},{name:"fetchPaymentMethods",args:{userId:"12345"},result:{cards:2,defaultCard:"Visa ****4242"}},{name:"loadShippingAddresses",args:{userId:"12345"},result:{addresses:3,defaultAddress:"Home"}}],()=>{const l=this.#e();this.#t(l,"Great, I found the user data and permissions. Now let me analyze the trends and generate your report.",()=>{this._emitMessageEnd(l);const i=this.#e();o(i,[{name:"generateAnalyticsReport",args:{format:"pdf",range:"30d"},result:{url:"/reports/analytics.pdf"}}],()=>{const g=this.#e();this.#t(g,"All done! Here's what I found: John Doe has admin privileges with 47 orders totaling $12,450. The analytics report has been generated and is ready for download.",()=>{this._emitMessageEnd(g),this._updateState({isRunning:!1}),this._emitRunFinished()})})})})})},this.#a)}#f(){const t=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"This is the first text chunk of the response.",()=>{this._emitMessageEnd(t),setTimeout(()=>{const o=this.#e();this._emitMessageStart(o),this.#t(o,"Here is another text chunk that follows immediately.",()=>{this._emitMessageEnd(o),setTimeout(()=>{const a=this.#e();this._emitMessageStart(a),this.#t(a,"And finally, a third text chunk to complete the response!",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#r)})},this.#r)})},this.#a)}#t(t,o,a){const r=o.split(" ");let l=0;const i=()=>{l<r.length?(this._emitMessageDelta(t,(l===0?"":" ")+r[l]),l++,setTimeout(i,this.#i)):a()};i()}#e(){return Math.random().toString(36).slice(2,11)}}const z={parameters:{controls:{include:["agentListSize","titleText"]}},argTypes:{agentListSize:{control:"select",options:["small","large"],description:"Toggle between small (4) and large (50) agent lists"}},args:{agentListSize:"small"},render:e=>{const t=new u({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=e.agentListSize==="large"?ue:he,a=c("forge-ai-chatbot-agent-change");return d`
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
          .agents=${o}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-agent-change=${r=>a(r.detail)}>
        </forge-ai-chatbot>
      </div>
    `}},T={args:{enableReactions:!0},render:e=>{const t="ai-chatbot-feedback-state",o=new u({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"user-1",role:"user",content:"What is TypeScript?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to the language.",timestamp:Date.now()-59e3,status:"complete",feedback:{type:"positive"}},{id:"user-2",role:"user",content:"What are the benefits?",timestamp:Date.now()-3e4,status:"complete"},{id:"assistant-2",role:"assistant",content:"Key benefits include: better IDE support with autocompletion and refactoring, catching errors at compile time rather than runtime, improved code documentation through types, and easier maintenance of large codebases.",timestamp:Date.now()-29e3,status:"complete",feedback:{type:"negative",reason:"Missing information about interfaces"}}];return setTimeout(()=>{const r=document.querySelector("forge-ai-chatbot");if(!r)return;const l=localStorage.getItem(t);if(l)try{const i=JSON.parse(l);r.setThreadState(i)}catch(i){console.error("Failed to restore thread state:",i),r.setThreadState({messages:a})}else r.setThreadState({messages:a});r.addEventListener("forge-ai-chatbot-response-feedback",()=>{const i=r.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),r.addEventListener("forge-ai-chatbot-message-received",()=>{const i=r.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),r.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(t)})},0),d`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Feedback Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows pre-loaded messages with feedback state. The first response has thumbs up, the second has
            thumbs down. Give feedback on new responses and refresh to see it persist.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${o}
          placeholder=${e.placeholder}
          title-text="Feedback Persistence"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-response-feedback=${c("forge-ai-chatbot-response-feedback")}>
        </forge-ai-chatbot>
      </div>
    `}},S={render:e=>{const t=new u({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500,tools:[me]}),o={id:"tool-1",messageId:"assistant-1",name:"displayDataTable",status:"complete",type:"client",args:{title:"Q4 2024 Sales Report",headers:["Region","Product","Units Sold","Revenue","Growth"],rows:[["North","Widget Pro",1250,"$125,000","+15%"],["South","Widget Pro",890,"$89,000","+8%"],["East","Widget Basic",2100,"$84,000","+22%"],["West","Widget Basic",1750,"$70,000","+12%"],["North","Widget Enterprise",45,"$225,000","+35%"],["South","Widget Enterprise",32,"$160,000","+18%"],["East","Widget Pro",980,"$98,000","+10%"],["West","Widget Pro",1100,"$110,000","+14%"],["North","Widget Basic",1800,"$72,000","+20%"],["South","Widget Basic",1450,"$58,000","+11%"],["East","Widget Enterprise",28,"$140,000","+25%"],["West","Widget Enterprise",38,"$190,000","+30%"],["North","Gadget Plus",650,"$97,500","+18%"],["South","Gadget Plus",520,"$78,000","+9%"],["East","Gadget Plus",780,"$117,000","+24%"],["West","Gadget Plus",690,"$103,500","+16%"],["North","Gadget Basic",2200,"$66,000","+28%"],["South","Gadget Basic",1950,"$58,500","+19%"],["East","Gadget Basic",2450,"$73,500","+32%"],["West","Gadget Basic",2100,"$63,000","+21%"]]}},a=[{id:"user-1",role:"user",content:"Can you show me the Q4 sales data?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"Here's the Q4 2024 sales report broken down by region and product:",timestamp:Date.now()-59e3,status:"complete",toolCalls:[o],children:[{type:"text",messageId:"assistant-1",content:"Here's the Q4 2024 sales report broken down by region and product:",status:"complete"},{type:"toolCall",data:o}]}];return setTimeout(()=>{const r=document.querySelector("forge-ai-chatbot");r&&r.setThreadState({messages:a})},0),d`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text="Data Table Demo"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-tool-call=${c("forge-ai-chatbot-tool-call")}>
        </forge-ai-chatbot>
      </div>
    `}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"{}",..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...k.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
    }] as Suggestion[];
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          placeholder=\${args.placeholder}
          title-text="Mixed Responses"
          ?enable-reactions=\${args.enableReactions}>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...$.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...S.parameters?.docs?.source}}};const Ee=["Demo","WithSuggestions","WithTools","WithPersistence","MixedResponses","WithAgents","WithFeedbackPersistence","WithDataTableTool"],Ke=Object.freeze(Object.defineProperty({__proto__:null,Demo:_,MixedResponses:$,WithAgents:z,WithDataTableTool:S,WithFeedbackPersistence:T,WithPersistence:k,WithSuggestions:x,WithTools:w,__namedExportsOrder:Ee,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Ke as A,_ as D};
