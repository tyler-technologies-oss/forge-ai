import{r as u,i as f,x as s}from"./iframe-CCWsMM7d.js";import{t as p}from"./custom-element-UsVr97OX.js";import{n as h}from"./property-BBKQEB1X.js";import{o as x}from"./if-defined-DErItRzL.js";import"./ai-reasoning-header-BSA_2DxZ.js";import"./ai-chat-interface-DnZT2ajC.js";import"./ai-chat-header-Dm9seQfX.js";import"./ai-prompt-CCEcOO_b.js";import"./ai-dropdown-menu-D6owgupQ.js";import"./ai-dropdown-menu-item-6b9KrcIv.js";import"./ai-voice-input-Br6U9Lud.js";import"./ai-gradient-container-DTeYDIA3.js";import"./ai-user-message-Bpc9fM_G.js";import"./ai-response-message-B4btXO6j.js";import{I as T,q as C,t as M}from"./icon-registry-D8cCWsde.js";import{d as $}from"./index-DhI3e-uN.js";import{d as q}from"./index-Dixai88h.js";import{d as H}from"./index-BAgwReiQ.js";const D=".forge-expansion-panel{--_expansion-panel-animation-duration: var(--forge-expansion-panel-animation-duration, var(--forge-animation-duration-medium4, .4s));--_expansion-panel-animation-easing: var(--forge-expansion-panel-animation-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)))}.forge-expansion-panel{display:grid;grid-template-rows:0fr;transition-property:visibility,opacity,grid-template-rows;transition-duration:var(--_expansion-panel-animation-duration);transition-timing-function:var(--_expansion-panel-animation-easing);min-height:0;opacity:0;transform:translateZ(0);backface-visibility:hidden}.forge-expansion-panel:not(.forge-expansion-panel--open){visibility:hidden}.forge-expansion-panel--open{opacity:1;grid-template-rows:1fr}.forge-expansion-panel__content{display:grid;grid-template-rows:1fr;overflow:hidden}@media(prefers-reduced-motion:reduce){.forge-expansion-panel{transition:none}}.forge-icon{--_icon-color: var(--forge-icon-color, currentColor);--_icon-size: var(--forge-icon-size, 1em);--_icon-width: var(--forge-icon-width, var(--_icon-size));--_icon-height: var(--forge-icon-height, var(--_icon-size));--_icon-font-size: var(--forge-icon-font-size, calc(var(--forge-typography-font-size, 1rem) * 1.5))}img.forge-icon,svg.forge-icon{box-sizing:content-box;contain:content;font-size:var(--_icon-font-size);display:inline-block}img.forge-icon{width:var(--_icon-width);height:var(--_icon-height)}svg{width:var(--_icon-width);height:var(--_icon-height);display:block;fill:var(--_icon-color);stroke:var(--_icon-color);stroke-width:0}@keyframes fadein{0%{opacity:0}to{opacity:1}}:host{width:100%;display:block}.header-container{display:grid;grid-template-columns:56px 1fr auto;align-items:center;padding:0}.thought-content-container{margin-block-start:var(--forge-spacing-medium, 16px)}";var E=Object.defineProperty,O=Object.getOwnPropertyDescriptor,w=(a,r,n,e)=>{for(var t=e>1?void 0:e?O(r,n):r,i=a.length-1,o;i>=0;i--)(o=a[i])&&(t=(e?o(r,n,t):o(t))||t);return e&&t&&E(r,n,t),t};const P="forge-ai-chain-of-thought";let b=class extends f{constructor(){super(...arguments),this.expanded=!1}render(){return s`
      <slot name="heading" @toggle=${this._handleHeaderToggle}></slot>
      <div
        class="forge-expansion-panel thought-content-container ${this.expanded?"forge-expansion-panel--open":""}">
        <div class="forge-expansion-panel__content " id="chain-content" aria-hidden=${!this.expanded}>
          <slot></slot>
        </div>
      </div>
    `}_handleHeaderToggle(a){this.expanded=a.detail.expanded}};b.styles=u(D);w([h({type:Boolean,reflect:!0})],b.prototype,"expanded",2);b=w([p(P)],b);const I='.forge-button{--_button-primary-color: var(--forge-button-primary-color, var(--forge-theme-primary, #3f51b5));--_button-text-color: var(--forge-button-text-color, var(--_button-primary-color));--_button-disabled-color: var(--forge-button-disabled-color, var(--forge-theme-surface-container, #e0e0e0));--_button-padding: var(--forge-button-padding, var(--forge-spacing-medium, 16px));--_button-display: var(--forge-button-display, inline-grid);--_button-justify: var(--forge-button-justify, center);--_button-shape: var(--forge-button-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_button-height: var(--forge-button-height, 36px);--_button-min-width: var(--forge-button-min-width, 64px);--_button-spacing: var(--forge-button-spacing, var(--forge-spacing-xsmall, 8px));--_button-border-width: var(--forge-button-border-width, medium);--_button-border-style: var(--forge-button-border-style, none);--_button-border-color: var(--forge-button-border-color, currentColor);--_button-shape-start-start-radius: var(--forge-button-shape-start-start-radius, var(--_button-shape));--_button-shape-start-end-radius: var(--forge-button-shape-start-end-radius, var(--_button-shape));--_button-shape-end-start-radius: var(--forge-button-shape-end-start-radius, var(--_button-shape));--_button-shape-end-end-radius: var(--forge-button-shape-end-end-radius, var(--_button-shape));--_button-padding-block: var(--forge-button-padding-block, var(--_button-0));--_button-padding-inline: var(--forge-button-padding-inline, var(--_button-padding));--_button-background: var(--forge-button-background, transparent);--_button-hover-background: var(--forge-button-hover-background, var(--_button-background));--_button-active-background: var(--forge-button-active-background, var(--_button-background));--_button-color: var(--forge-button-color, var(--_button-text-color));--_button-icon-size: var(--forge-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_button-shadow: var(--forge-button-shadow, none);--_button-hover-shadow: var(--forge-button-hover-shadow, none);--_button-active-shadow: var(--forge-button-active-shadow, none);--_button-cursor: var(--forge-button-cursor, pointer);--_button-transition-duration: var(--forge-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-transition-timing: var(--forge-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-text-padding-inline: var(--forge-button-text-padding-inline, var(--forge-spacing-xsmall, 8px));--_button-outlined-background: var(--forge-button-outlined-background, transparent);--_button-outlined-color: var(--forge-button-outlined-color, var(--_button-primary-color));--_button-outlined-border-width: var(--forge-button-outlined-border-width, var(--forge-border-thin, 1px));--_button-outlined-border-style: var(--forge-button-outlined-border-style, solid);--_button-outlined-border-color: var(--forge-button-outlined-border-color, var(--_button-primary-color));--_button-tonal-background: var(--forge-button-tonal-background, var(--forge-theme-primary-container, #d1d5ed));--_button-tonal-disabled-background: var(--forge-button-tonal-disabled-background, var(--_button-disabled-color));--_button-tonal-color: var(--forge-button-tonal-color, var(--forge-theme-on-primary-container, #222c62));--_button-tonal-disabled-color: var(--forge-button-tonal-disabled-color, var(--_button-disabled-text-color));--_button-filled-background: var(--forge-button-filled-background, var(--_button-primary-color));--_button-filled-disabled-background: var(--forge-button-filled-disabled-background, var(--_button-disabled-color));--_button-filled-color: var(--forge-button-filled-color, var(--forge-theme-on-primary, #ffffff));--_button-filled-disabled-color: var(--forge-button-filled-disabled-color, var(--_button-disabled-text-color));--_button-raised-background: var(--forge-button-raised-background, var(--_button-primary-color));--_button-raised-disabled-background: var(--forge-button-raised-disabled-background, var(--_button-disabled-color));--_button-raised-color: var(--forge-button-raised-color, var(--forge-theme-on-primary, #ffffff));--_button-raised-disabled-color: var(--forge-button-raised-disabled-color, var(--_button-disabled-text-color));--_button-raised-shadow: var(--forge-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_button-raised-hover-shadow: var(--forge-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_button-raised-active-shadow: var(--forge-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_button-raised-disabled-shadow: var(--forge-button-raised-disabled-shadow, none);--_button-link-color: var(--forge-button-link-color, var(--_button-primary-color));--_button-link-text-decoration: var(--forge-button-link-text-decoration, underline);--_button-link-height: var(--forge-button-link-height, auto);--_button-link-padding: var(--forge-button-link-padding, 0);--_button-link-line-height: var(--forge-button-link-line-height, normal);--_button-link-width: var(--forge-button-link-width, auto);--_button-link-hover-text-decoration: var(--forge-button-link-hover-text-decoration, none);--_button-link-active-opacity: var(--forge-button-link-active-opacity, .65);--_button-link-transition-duration: var(--forge-button-link-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-link-transition-timing: var(--forge-button-link-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-disabled-cursor: var(--forge-button-disabled-cursor, not-allowed);--_button-disabled-text-color: var(--forge-button-disabled-text-color, var(--forge-theme-text-low, rgba(0, 0, 0, .38)));--_button-disabled-background: var(--forge-button-disabled-background, transparent);--_button-disabled-border-color: var(--forge-button-disabled-border-color, var(--_button-disabled-color));--_button-disabled-shadow: var(--forge-button-disabled-shadow, none);--_button-dense-height: var(--forge-button-dense-height, 24px);--_button-pill-shape: var(--forge-button-pill-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_button-pill-padding-inline: var(--forge-button-pill-padding-inline, var(--forge-spacing-small, 12px));--_button-focus-indicator-offset: var(--forge-button-focus-indicator-offset, 4px);--_button-text-focus-indicator-offset: var(--forge-button-text-focus-indicator-offset, 0px);--_button-link-focus-indicator-offset: var(--forge-button-link-focus-indicator-offset, 2px);--_button-popover-icon-transition-duration: var(--forge-button-popover-icon-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-popover-icon-transition-timing: var(--forge-button-popover-icon-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-popover-icon-open-rotation: var(--forge-button-popover-icon-open-rotation, 180deg)}.forge-button{-webkit-tap-highlight-color:transparent;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-button-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-button-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-button-font-size-scale, .875)));font-weight:var(--forge-typography-button-font-weight, 500);line-height:var(--forge-typography-button-line-height, normal);letter-spacing:var(--forge-typography-button-letter-spacing, .0714285714em);text-transform:var(--forge-typography-button-text-transform, inherit);text-decoration:var(--forge-typography-button-text-decoration, inherit);position:relative;display:var(--_button-display);grid-auto-flow:column;align-items:center;justify-content:var(--_button-justify);gap:var(--_button-spacing);z-index:0;box-sizing:border-box;min-inline-size:var(--_button-min-width);height:var(--_button-height);inline-size:100%;border-width:var(--_button-border-width);border-style:var(--_button-border-style);border-color:var(--_button-border-color);border-start-start-radius:var(--_button-shape-start-start-radius);border-start-end-radius:var(--_button-shape-start-end-radius);border-end-start-radius:var(--_button-shape-end-start-radius);border-end-end-radius:var(--_button-shape-end-end-radius);padding-block:var(--_button-padding-block);padding-inline:var(--_button-padding-inline);box-shadow:var(--_button-shadow);outline:none;-webkit-user-select:none;user-select:none;-webkit-appearance:none;vertical-align:middle;text-decoration:none;white-space:nowrap;background:var(--_button-background);color:var(--_button-color);cursor:var(--_button-cursor);transition-property:box-shadow,background;transition-duration:var(--_button-transition-duration);transition-timing-function:var(--_button-transition-timing)}.forge-button::-moz-focus-inner{padding:0;border:0}.forge-button:hover{--_button-shadow: var(--_button-hover-shadow);background:var(--_button-hover-background)}.forge-button:active{--_button-shadow: var(--_button-active-shadow);background:var(--_button-active-background)}.forge-button{position:relative;inline-size:auto}.forge-button:not(:disabled):not(.forge-button--link){--_state-layer-display: var(--forge-state-layer-display, flex);--_state-layer-color: var(--forge-state-layer-color, var(--forge-theme-on-surface, #000000));--_state-layer-hover-color: var(--forge-state-layer-hover-color, var(--_state-layer-color));--_state-layer-hover-opacity: var(--forge-state-layer-hover-opacity, .08);--_state-layer-pressed-color: var(--forge-state-layer-pressed-color, var(--_state-layer-color));--_state-layer-pressed-opacity: var(--forge-state-layer-pressed-opacity, .12);--_state-layer-hover-duration: var(--forge-state-layer-hover-duration, 15ms);--_state-layer-pressed-duration: var(--forge-state-layer-pressed-duration, 105ms);--_state-layer-animation-duration: var(--forge-state-layer-animation-duration, 375ms)}.forge-button:not(:disabled):not(.forge-button--link):before{position:absolute;backface-visibility:hidden;transform:translateZ(0);background-color:var(--_state-layer-hover-color);inset:0;transition:opacity var(--_state-layer-hover-duration) linear,background-color var(--_state-layer-hover-duration) linear;--_state-layer-hover-duration: var(--forge-state-layer-hover-duration, .1s);content:"";opacity:0;border-radius:inherit}.forge-button:not(:disabled):not(.forge-button--link):hover:before{background-color:var(--_state-layer-hover-color);opacity:var(--_state-layer-hover-opacity)}.forge-button:not(:disabled):not(.forge-button--link):active:before{opacity:var(--_state-layer-pressed-opacity);transition-duration:var(--_state-layer-pressed-duration);--_state-layer-pressed-opacity: var(--forge-state-layer-pressed-opacity, .18)}@keyframes forge-focus-indicator-outward-grow{0%{outline-width:0}to{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-outward-shrink{0%{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-grow{0%{border-width:0}to{border-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-shrink{0%{border-width:var(--_focus-indicator-active-width)}}.forge-button:not(:disabled){outline:none}.forge-button:not(:disabled):focus-visible:after{--_focus-indicator-display: var(--forge-focus-indicator-display, flex);--_focus-indicator-width: var(--forge-focus-indicator-width, var(--forge-border-medium, 2px));--_focus-indicator-active-width: var(--forge-focus-indicator-active-width, 6px);--_focus-indicator-color: var(--forge-focus-indicator-color, var(--forge-theme-primary, #3f51b5));--_focus-indicator-shape: var(--forge-focus-indicator-shape, calc(var(--forge-shape-extra-small, 1px) * var(--forge-shape-factor, 1)));--_focus-indicator-duration: var(--forge-focus-indicator-duration, var(--forge-animation-duration-long4, .6s));--_focus-indicator-easing: var(--forge-focus-indicator-easing, var(--forge-animation-easing-emphasized, cubic-bezier(.2, 0, 0, 1)));--_focus-indicator-shape-start-start: var(--forge-focus-indicator-shape-start-start, var(--_focus-indicator-shape));--_focus-indicator-shape-start-end: var(--forge-focus-indicator-shape-start-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-end: var(--forge-focus-indicator-shape-end-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-start: var(--forge-focus-indicator-shape-end-start, var(--_focus-indicator-shape));--_focus-indicator-outward-offset: var(--forge-focus-indicator-outward-offset, var(--forge-spacing-xxsmall, 4px));--_focus-indicator-inward-offset: var(--forge-focus-indicator-inward-offset, 0px);--_focus-indicator-offset-block: var(--forge-focus-indicator-offset-block, 0);--_focus-indicator-offset-inline: var(--forge-focus-indicator-offset-inline, 0)}.forge-button:not(:disabled):focus-visible:after{animation-delay:0s,calc(var(--_focus-indicator-duration) * .25);animation-duration:calc(var(--_focus-indicator-duration) * .25),calc(var(--_focus-indicator-duration) * .75);animation-timing-function:var(--_focus-indicator-easing);box-sizing:border-box;color:var(--_focus-indicator-color);display:none;pointer-events:none;position:absolute;margin-block:var(--_focus-indicator-offset-block);margin-inline:var(--_focus-indicator-offset-inline);animation-name:forge-focus-indicator-outward-grow,forge-focus-indicator-outward-shrink;border-end-end-radius:calc(var(--_focus-indicator-shape-end-end) + var(--_focus-indicator-outward-offset));border-end-start-radius:calc(var(--_focus-indicator-shape-end-start) + var(--_focus-indicator-outward-offset));border-start-end-radius:calc(var(--_focus-indicator-shape-start-end) + var(--_focus-indicator-outward-offset));border-start-start-radius:calc(var(--_focus-indicator-shape-start-start) + var(--_focus-indicator-outward-offset));inset:calc(-1 * var(--_focus-indicator-outward-offset));outline:var(--_focus-indicator-width) solid currentColor;content:"";display:block}.forge-button:not(:disabled){--forge-focus-indicator-color: var(--_button-primary-color)}.forge-button:disabled{cursor:var(--_button-disabled-cursor);--_button-background: var(--_button-disabled-background);--_button-color: var(--_button-disabled-text-color);--_button-shadow: var(--_button-disabled-shadow);pointer-events:none;pointer-events:initial}.forge-button:where(:not(.forge-button--outlined,.forge-button--tonal,.forge-button--filled,.forge-button--raised,.forge-button--link)),.forge-button--text{--_button-padding-inline: var(--_button-text-padding-inline)}.forge-button--outlined{--_button-background: var(--_button-outlined-background);--_button-color: var(--_button-outlined-color);--_button-border-width: var(--_button-outlined-border-width);--_button-border-style: var(--_button-outlined-border-style);--_button-border-color: var(--_button-outlined-border-color)}.forge-button--outlined:disabled{--_button-border-color: var(--_button-disabled-border-color)}.forge-button--tonal{--_button-background: var(--_button-tonal-background);--_button-color: var(--_button-tonal-color)}.forge-button--tonal:disabled{--_button-background: var(--_button-tonal-disabled-background);--_button-color: var(--_button-tonal-disabled-color)}.forge-button--filled,.forge-button--raised{--_button-background: var(--_button-filled-background);--_button-color: var(--_button-filled-color);--forge-state-layer-color: var(--_button-filled-color)}.forge-button--filled:disabled,.forge-button--raised:disabled{--_button-background: var(--_button-filled-disabled-background);--_button-color: var(--_button-filled-disabled-color)}.forge-button--raised{--_button-background: var(--_button-raised-background);--_button-color: var(--_button-raised-color);--_button-shadow: var(--_button-raised-shadow)}.forge-button--raised:hover{--_button-shadow: var(--_button-raised-hover-shadow)}.forge-button--raised:active{--_button-shadow: var(--_button-raised-active-shadow)}.forge-button--raised:disabled{--_button-background: var(--_button-raised-disabled-background);--_button-color: var(--_button-raised-disabled-color);--_button-shadow: var(--_button-raised-disabled-shadow)}.forge-button--link{--_button-color: var(--_button-link-color);--_button-height: var(--_button-link-height);--_button-padding: var(--_button-link-padding);--_button-focus-indicator-offset: var(--_button-link-focus-indicator-offset);text-decoration:var(--_button-link-text-decoration);line-height:var(--_button-link-line-height);transition:opacity var(--_button-link-transition-duration) var(--_button-link-transition-timing);inline-size:var(--_button-link-width)}.forge-button--link:hover{text-decoration:var(--_button-link-hover-text-decoration)}.forge-button--link:active{opacity:var(--_button-link-active-opacity)}.forge-button--pill{--_button-shape: var(--_button-pill-shape);--_button-padding-inline: var(--_button-pill-padding-inline);--forge-focus-indicator-shape: var(--_button-pill-shape)}.forge-button{--forge-icon-font-size: var(--_button-icon-size)}.forge-button--dense{--_button-height: var(--_button-dense-height)}@keyframes fadein{0%{opacity:0}to{opacity:1}}:host{display:block;box-sizing:border-box}.title-container{display:grid;grid-template-columns:56px 1fr auto;align-items:center;padding:0}::slotted([slot=icon]){fill:var(--forge-theme-text-medium, rgba(0, 0, 0, .6));height:24px;width:24px}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6))}.content-container{display:grid;grid-template-columns:56px 1fr auto;align-items:center;padding:0;padding:var(--forge-spacing-small, 12px)}.vertical-line{display:block;width:1px;min-height:100%;height:100%;background-color:var(--forge-theme-outline, #e0e0e0);grid-row:2;grid-column:1}.main-content{--forge-card-outline-color: transparent;display:grid;place-content:start;place-items:start;grid-row:2;grid-column:2;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:var(--forge-theme-on-surface, #000000);line-height:1.5}';var L=Object.defineProperty,j=Object.getOwnPropertyDescriptor,k=(a,r,n,e)=>{for(var t=e>1?void 0:e?j(r,n):r,i=a.length-1,o;i>=0;i--)(o=a[i])&&(t=(e?o(r,n,t):o(t))||t);return e&&t&&L(r,n,t),t};const B="forge-ai-thought-base";let v=class extends f{render(){return s`
      <div class="thought-base-container">
        <div class="title-container">
          <slot name="icon"></slot>
          <span class="title"><slot name="title"></slot></span>
        </div>
        <div class="content-container">
          <div class="vertical-line"></div>
          <div class="main-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}};v.styles=u(I);k([h({type:Number})],v.prototype,"step",2);v=k([p(B)],v);const R='@keyframes fadein{0%{opacity:0}to{opacity:1}}:host{display:block;opacity:0;animation:fadein .25s ease-in-out forwards}.sources-container{display:flex;align-items:center;column-gap:var(--forge-spacing-small, 12px);row-gap:var(--forge-spacing-xxsmall, 4px);flex-wrap:wrap;margin-block-start:var(--forge-spacing-xsmall, 8px)}.source{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-button-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-button-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-button-font-size-scale, .875)));font-weight:var(--forge-typography-button-font-weight, 500);line-height:var(--forge-typography-button-line-height, normal);letter-spacing:var(--forge-typography-button-letter-spacing, .0714285714em);text-transform:var(--forge-typography-button-text-transform, inherit);text-decoration:var(--forge-typography-button-text-decoration, inherit);display:flex;align-items:center;gap:var(--forge-spacing-xsmall, 8px);border-radius:calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1));background-color:var(--forge-theme-surface-container, #e0e0e0);padding-inline:var(--forge-spacing-medium, 16px);padding-block:var(--forge-spacing-xxsmall, 4px);color:var(--forge-theme-text-high, rgba(0, 0, 0, .87));cursor:pointer}.source svg{height:16px;width:16px}';var V=Object.defineProperty,N=Object.getOwnPropertyDescriptor,_=(a,r,n,e)=>{for(var t=e>1?void 0:e?N(r,n):r,i=a.length-1,o;i>=0;i--)(o=a[i])&&(t=(e?o(r,n,t):o(t))||t);return e&&t&&V(r,n,t),t};const G="forge-ai-thought-search-result";let c=class extends f{constructor(){super(...arguments),this.sources=[]}render(){return s`
      <forge-ai-thought-base step=${x(this.step)}>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />
        </svg>
        <slot slot="title" name="title"></slot>
        <slot></slot>
        <div class="sources-container">
          ${this.sources.map(a=>s`
              <a href="${a.href}" class="source" target="_blank" rel="noopener noreferrer">
                <span>${a.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
                  <path
                    d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z" />
                </svg>
              </a>
            `)}
        </div>
      </forge-ai-thought-base>
    `}};c.styles=u(R);_([h({type:Number})],c.prototype,"step",2);_([h({type:Array})],c.prototype,"sources",2);c=_([p(G)],c);const F="@keyframes fadein{0%{opacity:0}to{opacity:1}}:host{display:block;opacity:0;animation:fadein .25s ease-in-out forwards}.image-container{--forge-card-outline-color: transparent;display:grid;place-content:center;place-items:center}::slotted(img[slot=image]){height:150px;width:150px;object-fit:cover;border-radius:calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1))}";var K=Object.defineProperty,W=Object.getOwnPropertyDescriptor,z=(a,r,n,e)=>{for(var t=e>1?void 0:e?W(r,n):r,i=a.length-1,o;i>=0;i--)(o=a[i])&&(t=(e?o(r,n,t):o(t))||t);return e&&t&&K(r,n,t),t};const Z="forge-ai-thought-image";let m=class extends f{render(){return s`
      <forge-ai-thought-base step=${x(this.step)}>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path
            d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5.04 9.29-2.75 3.54-1.96-2.36L6.5 17h11z" />
        </svg>
        <slot slot="title" name="title"></slot>
        <div class="image-container">
          <slot name="image"></slot>
        </div>
      </forge-ai-thought-base>
    `}};m.styles=u(F);z([h({type:Number})],m.prototype,"step",2);m=z([p(Z)],m);const Y="@keyframes fadein{0%{opacity:0}to{opacity:1}}:host{display:block;opacity:0;animation:fadein .25s ease-in-out forwards}";var J=Object.getOwnPropertyDescriptor,Q=(a,r,n,e)=>{for(var t=e>1?void 0:e?J(r,n):r,i=a.length-1,o;i>=0;i--)(o=a[i])&&(t=o(t)||t);return t};const U="forge-ai-thought-detail";let y=class extends f{render(){return s`
      <forge-ai-thought-base>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path d="M12 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4" />
        </svg>
        <slot slot="title" name="title"></slot>
        <slot></slot>
      </forge-ai-thought-base>
    `}};y.styles=u(Y);y=Q([p(U)],y);const X="forge-ai-chain-of-thought";H();$();q();T.define([C,M]);const S=[{title:"Powder Safety Guide",href:"https://example.com/safety-guide"},{title:"Equipment Reviews 2024",href:"https://example.com/equipment-reviews"}],A=()=>s`
    <forge-ai-prompt slot="prompt">
      <forge-ai-dropdown-menu variant="icon-button" selection-mode="none" slot="actions">
        <span slot="trigger-content">
          <forge-icon name="add" external></forge-icon>
        </span>
        <forge-ai-dropdown-menu-item value="add-image">
          <span>Add image</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-pdf">
          <span>Add PDF</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-spreadsheet">
          <span>Add spreadsheet</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
      <forge-ai-voice-input slot="actions" @forge-ai-voice-input-result=${r=>{const n=document.querySelector("forge-ai-prompt");n&&(n.value=r.detail.transcript)}}></forge-ai-voice-input>
    </forge-ai-prompt>
  `,tt={title:"AI Components/Primitives/Chain of Thought",component:X,tags:["autodocs"],argTypes:{expanded:{control:"boolean",description:"Whether the chain of thought is expanded"}},args:{expanded:!1},render:a=>s`
      <forge-ai-chain-of-thought .expanded=${a.expanded}>
        <forge-ai-reasoning-header slot="heading" .expanded=${a.expanded}>
          <span slot="title">Chain of Thought</span>
        </forge-ai-reasoning-header>

        <forge-ai-thought-search-result .sources=${S}>
          <span slot="title">Searching for snowboarding information</span>
          Found 2 relevant articles about advanced snowboarding techniques and safety tips for experienced riders.
        </forge-ai-thought-search-result>

        <forge-ai-thought-image>
          <span slot="title">Analyzing the snowboarder's technique</span>
          <img
            src="https://images.unsplash.com/photo-1495469552678-d0fb77903866?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            slot="image" />
        </forge-ai-thought-image>

        <forge-ai-thought-detail>
          <span slot="title">Assessment and conclusion</span>
          Based on the image analysis and research, this snowboarder demonstrates excellent form with proper edge
          control, balanced stance, and appropriate speed for the terrain. The powder conditions appear ideal for this
          type of riding.
        </forge-ai-thought-detail>
      </forge-ai-chain-of-thought>
    `},d={},l={render:()=>s`
      <forge-ai-gradient-container style="height: 800px; width: 100%;">
        <forge-ai-chat-interface>
          <forge-ai-chat-header slot="header"></forge-ai-chat-header>

          <forge-ai-user-message>
            Can you analyze this snowboarding image and tell me about the technique being used?
          </forge-ai-user-message>

          <forge-ai-response-message>
            <p>I'll analyze the snowboarding image for you. Let me break down my thought process:</p>
          </forge-ai-response-message>

          <forge-ai-chain-of-thought>
            <forge-ai-reasoning-header slot="heading">
              <span slot="title">Analyzing Snowboarding Technique</span>
            </forge-ai-reasoning-header>

            <forge-ai-thought-search-result .sources=${S}>
              <span slot="title">Searching for snowboarding information</span>
              Found 2 relevant articles about advanced snowboarding techniques and safety tips for experienced riders.
            </forge-ai-thought-search-result>

            <forge-ai-thought-image>
              <span slot="title">Analyzing the snowboarder's technique</span>
              <img
                src="https://images.unsplash.com/photo-1495469552678-d0fb77903866?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by-web8fHx8MA%3D%3D"
                slot="image" />
            </forge-ai-thought-image>

            <forge-ai-thought-detail>
              <span slot="title">Assessment and conclusion</span>
              Based on the image analysis and research, this snowboarder demonstrates excellent form with proper edge
              control, balanced stance, and appropriate speed for the terrain. The powder conditions appear ideal for
              this type of riding.
            </forge-ai-thought-detail>
          </forge-ai-chain-of-thought>

          ${A()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `},g={render:()=>{const a=[{type:"search",title:"Searching for Mini Australian Shepherd information",content:"Found 12 breed-specific articles and veterinary resources about Mini Australian Shepherds.",sources:[{title:"AKC Breed Standards",href:"https://example.com/akc-standards"},{title:"Mini Aussie Health Guide",href:"https://example.com/health-guide"},{title:"Herding Dog Training Manual",href:"https://example.com/training-manual"}],delay:1500},{type:"detail",title:"Analyzing breed characteristics",content:"Mini Australian Shepherds are highly intelligent, energetic herding dogs that typically weigh 20-40 pounds and stand 13-18 inches tall.",delay:3500},{type:"image",title:"Examining breed appearance",content:"This Mini Aussie shows the typical merle coat pattern and alert expression characteristic of the breed.",imageSrc:"https://images.unsplash.com/photo-1551717743-49959800b1f6?q=80&w=1287&auto=format&fit=crop",delay:6e3},{type:"detail",title:"Cross-referencing temperament data",content:"Research shows Mini Aussies are loyal, protective, and require significant mental and physical stimulation due to their herding instincts.",delay:8500},{type:"detail",title:"Care and training recommendations",content:"Mini Australian Shepherds thrive with consistent training, daily exercise, and early socialization. They excel at agility, herding trials, and make devoted family companions.",delay:11e3}],r=n=>{const e=n.querySelector("forge-ai-reasoning-header");e&&(e.reasoning=!0),a.forEach((t,i)=>{setTimeout(()=>{let o;t.type==="search"?(o=document.createElement("forge-ai-thought-search-result"),o.sources=t.sources,o.innerHTML=`
              <span slot="title">${t.title}</span>
              ${t.content}
            `):t.type==="image"?(o=document.createElement("forge-ai-thought-image"),o.innerHTML=`
              <span slot="title">${t.title}</span>
              <img src="${t.imageSrc}" slot="image" alt="Analysis image" />
              ${t.content}
            `):(o=document.createElement("forge-ai-thought-detail"),o.innerHTML=`
              <span slot="title">${t.title}</span>
              ${t.content}
            `),n.appendChild(o),i===a.length-1&&setTimeout(()=>{e&&(e.reasoning=!1)},300)},t.delay)})};return setTimeout(()=>{const n=document.querySelector("#sequential-chain");n&&r(n)},500),s`
      <forge-ai-gradient-container style="height: 800px; width: 100%;">
        <forge-ai-chat-interface>
          <forge-ai-chat-header slot="header"></forge-ai-chat-header>

          <forge-ai-user-message>
            Can you tell me about Mini Australian Shepherds? I'm thinking about getting one as a family pet.
          </forge-ai-user-message>

          <forge-ai-response-message>
            <p>
              I'd be happy to help you learn about Mini Australian Shepherds! Let me gather some information for you:
            </p>
          </forge-ai-response-message>

          <forge-ai-chain-of-thought id="sequential-chain" expanded>
            <forge-ai-reasoning-header slot="heading" expanded>
              <span slot="title">Mini Australian Shepherd Analysis</span>
              <span slot="reasoning-title">Thinking...</span>
            </forge-ai-reasoning-header>
          </forge-ai-chain-of-thought>

          ${A()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-ai-gradient-container style="height: 800px; width: 100%;">
        <forge-ai-chat-interface>
          <forge-ai-chat-header slot="header"></forge-ai-chat-header>

          <forge-ai-user-message>
            Can you analyze this snowboarding image and tell me about the technique being used?
          </forge-ai-user-message>

          <forge-ai-response-message>
            <p>I'll analyze the snowboarding image for you. Let me break down my thought process:</p>
          </forge-ai-response-message>

          <forge-ai-chain-of-thought>
            <forge-ai-reasoning-header slot="heading">
              <span slot="title">Analyzing Snowboarding Technique</span>
            </forge-ai-reasoning-header>

            <forge-ai-thought-search-result .sources=\${snowboardingSources}>
              <span slot="title">Searching for snowboarding information</span>
              Found 2 relevant articles about advanced snowboarding techniques and safety tips for experienced riders.
            </forge-ai-thought-search-result>

            <forge-ai-thought-image>
              <span slot="title">Analyzing the snowboarder's technique</span>
              <img
                src="https://images.unsplash.com/photo-1495469552678-d0fb77903866?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by-web8fHx8MA%3D%3D"
                slot="image" />
            </forge-ai-thought-image>

            <forge-ai-thought-detail>
              <span slot="title">Assessment and conclusion</span>
              Based on the image analysis and research, this snowboarder demonstrates excellent form with proper edge
              control, balanced stance, and appropriate speed for the terrain. The powder conditions appear ideal for
              this type of riding.
            </forge-ai-thought-detail>
          </forge-ai-chain-of-thought>

          \${createPrompt()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    \`;
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const thoughtSteps = [{
      type: 'search',
      title: 'Searching for Mini Australian Shepherd information',
      content: 'Found 12 breed-specific articles and veterinary resources about Mini Australian Shepherds.',
      sources: [{
        title: 'AKC Breed Standards',
        href: 'https://example.com/akc-standards'
      }, {
        title: 'Mini Aussie Health Guide',
        href: 'https://example.com/health-guide'
      }, {
        title: 'Herding Dog Training Manual',
        href: 'https://example.com/training-manual'
      }],
      delay: 1500
    }, {
      type: 'detail',
      title: 'Analyzing breed characteristics',
      content: 'Mini Australian Shepherds are highly intelligent, energetic herding dogs that typically weigh 20-40 pounds and stand 13-18 inches tall.',
      delay: 3500
    }, {
      type: 'image',
      title: 'Examining breed appearance',
      content: 'This Mini Aussie shows the typical merle coat pattern and alert expression characteristic of the breed.',
      imageSrc: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?q=80&w=1287&auto=format&fit=crop',
      delay: 6000
    }, {
      type: 'detail',
      title: 'Cross-referencing temperament data',
      content: 'Research shows Mini Aussies are loyal, protective, and require significant mental and physical stimulation due to their herding instincts.',
      delay: 8500
    }, {
      type: 'detail',
      title: 'Care and training recommendations',
      content: 'Mini Australian Shepherds thrive with consistent training, daily exercise, and early socialization. They excel at agility, herding trials, and make devoted family companions.',
      delay: 11000
    }];
    const startSequentialLoading = (chainContainer: HTMLElement) => {
      const reasoningHeader = chainContainer.querySelector('forge-ai-reasoning-header') as any;

      // Set reasoning mode to true when starting
      if (reasoningHeader) {
        reasoningHeader.reasoning = true;
      }
      thoughtSteps.forEach((step, stepIndex) => {
        setTimeout(() => {
          let thoughtElement: HTMLElement;
          if (step.type === 'search') {
            thoughtElement = document.createElement('forge-ai-thought-search-result');
            (thoughtElement as any).sources = step.sources;
            thoughtElement.innerHTML = \`
              <span slot="title">\${step.title}</span>
              \${step.content}
            \`;
          } else if (step.type === 'image') {
            thoughtElement = document.createElement('forge-ai-thought-image');
            thoughtElement.innerHTML = \`
              <span slot="title">\${step.title}</span>
              <img src="\${step.imageSrc}" slot="image" alt="Analysis image" />
              \${step.content}
            \`;
          } else {
            thoughtElement = document.createElement('forge-ai-thought-detail');
            thoughtElement.innerHTML = \`
              <span slot="title">\${step.title}</span>
              \${step.content}
            \`;
          }
          chainContainer.appendChild(thoughtElement);

          // If this is the last step, set reasoning to false
          if (stepIndex === thoughtSteps.length - 1) {
            setTimeout(() => {
              if (reasoningHeader) {
                reasoningHeader.reasoning = false;
              }
            }, 300); // Small delay after the last thought appears
          }
        }, step.delay);
      });
    };
    setTimeout(() => {
      const chainContainer = document.querySelector('#sequential-chain') as HTMLElement;
      if (chainContainer) {
        startSequentialLoading(chainContainer);
      }
    }, 500);
    return html\`
      <forge-ai-gradient-container style="height: 800px; width: 100%;">
        <forge-ai-chat-interface>
          <forge-ai-chat-header slot="header"></forge-ai-chat-header>

          <forge-ai-user-message>
            Can you tell me about Mini Australian Shepherds? I'm thinking about getting one as a family pet.
          </forge-ai-user-message>

          <forge-ai-response-message>
            <p>
              I'd be happy to help you learn about Mini Australian Shepherds! Let me gather some information for you:
            </p>
          </forge-ai-response-message>

          <forge-ai-chain-of-thought id="sequential-chain" expanded>
            <forge-ai-reasoning-header slot="heading" expanded>
              <span slot="title">Mini Australian Shepherd Analysis</span>
              <span slot="reasoning-title">Thinking...</span>
            </forge-ai-reasoning-header>
          </forge-ai-chain-of-thought>

          \${createPrompt()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    \`;
  }
}`,...g.parameters?.docs?.source}}};const et=["Demo","InChatInterface","SequentialLoading"],_t=Object.freeze(Object.defineProperty({__proto__:null,Demo:d,InChatInterface:l,SequentialLoading:g,__namedExportsOrder:et,default:tt},Symbol.toStringTag,{value:"Module"}));export{_t as A,d as D};
