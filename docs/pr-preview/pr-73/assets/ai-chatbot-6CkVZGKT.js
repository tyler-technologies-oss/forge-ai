import{r as N,x as d}from"./iframe-D0Quxatl.js";import{t as F}from"./custom-element-UsVr97OX.js";import{n as g}from"./property-DTfo_sT5.js";import{r as V}from"./class-map-zwx_ooUS.js";import{e as h,n as f}from"./ref-DSyLRuzg.js";import{n as v}from"./when-CI7b_ccM.js";import{A as G}from"./ai-chatbot-base-D19MV-92.js";import"./ai-attachment-BRZERHwW.js";import"./ai-chat-header-BuMd-48Y.js";import"./ai-chat-interface-B_I5K7kM.js";import"./ai-prompt-DEw7cBw2.js";import"./ai-conversations-panel-CWAlKU0Z.js";import"./ai-file-picker-BPajpDR1.js";import"./ai-message-thread-CDMN11pF.js";import"./ai-spinner-BfTFtFn-.js";import"./ai-suggestions-CH_haeo3.js";import"./ai-voice-input-P5vvi4DJ.js";const K='@keyframes forge-dialog-zoom-in{0%{opacity:var(--_dialog-zoom-opacity);scale:var(--_dialog-zoom-scale)}to{opacity:1;scale:1}}@keyframes forge-dialog-zoom-out{0%{opacity:1;scale:1}to{opacity:var(--_dialog-zoom-opacity);scale:var(--_dialog-zoom-scale)}}@keyframes forge-dialog-fade-in{0%{opacity:var(--_dialog-fade-opacity)}to{opacity:1}}@keyframes forge-dialog-fade-out{0%{opacity:1}to{opacity:var(--_dialog-fade-opacity)}}@keyframes forge-dialog-slide-in{0%{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}to{opacity:1;translate:0 0}}@keyframes forge-dialog-slide-out{0%{opacity:1;translate:0 0}to{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}}.forge-dialog{--_dialog-background:var(--forge-dialog-background, var(--forge-theme-surface-bright, #ffffff));--_dialog-shape:var(--forge-dialog-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_dialog-elevation:var(--forge-dialog-elevation, 0px 11px 15px -7px rgba(0, 0, 0, .2), 0px 24px 38px 3px rgba(0, 0, 0, .14), 0px 9px 46px 8px rgba(0, 0, 0, .12));--_dialog-spacing:var(--forge-dialog-spacing, auto);--_dialog-block-start-spacing:var(--forge-dialog-block-start-spacing, var(--_dialog-spacing));--_dialog-block-end-spacing:var(--forge-dialog-block-end-spacing, var(--_dialog-spacing));--_dialog-inline-start-spacing:var(--forge-dialog-inline-start-spacing, var(--_dialog-spacing));--_dialog-inline-end-spacing:var(--forge-dialog-inline-end-spacing, var(--_dialog-spacing));--_dialog-padding:var(--forge-dialog-padding, 0);--_dialog-width:var(--forge-dialog-width, fit-content);--_dialog-height:var(--forge-dialog-height, fit-content);--_dialog-min-width:var(--forge-dialog-min-width, 0);--_dialog-max-width:var(--forge-dialog-max-width, calc(100% - var(--forge-spacing-xxlarge, 48px)));--_dialog-min-height:var(--forge-dialog-min-height, 0);--_dialog-max-height:var(--forge-dialog-max-height, calc(100% - var(--forge-spacing-xxlarge, 48px)));--_dialog-z-index:var(--forge-dialog-z-index, var(--forge-z-index-dialog, 8));--_dialog-move-handle-color:var(--forge-dialog-move-handle-color, currentColor);--_dialog-move-handle-size:var(--forge-dialog-move-handle-size, 24px);--_dialog-move-handle-hover-cursor:var(--forge-dialog-move-handle-hover-cursor, grab);--_dialog-move-handle-active-cursor:var(--forge-dialog-move-handle-active-cursor, grabbing);--_dialog-move-handle-spacing:var(--forge-dialog-move-handle-spacing, calc(var(--forge-spacing-xxsmall, 4px) * -1) 0 0);--_dialog-move-transition-duration:var(--forge-dialog-move-transition-duration, var(--forge-animation-duration-short4, .2s));--_dialog-move-transition-easing:var(--forge-dialog-move-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_dialog-moving-opacity:var(--forge-dialog-moving-opacity, .54);--_dialog-enter-animation-duration:var(--forge-dialog-enter-animation-duration, var(--forge-animation-duration-medium1, .25s));--_dialog-enter-animation-easing:var(--forge-dialog-enter-animation-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_dialog-exit-animation-duration:var(--forge-dialog-exit-animation-duration, var(--forge-animation-duration-short2, .1s));--_dialog-exit-animation-easing:var(--forge-dialog-exit-animation-easing, var(--forge-animation-easing-emphasized-accelerate, cubic-bezier(.3, 0, .8, .15)));--_dialog-zoom-opacity:var(--forge-dialog-zoom-opacity, 0);--_dialog-zoom-scale:var(--forge-dialog-zoom-scale, .8);--_dialog-fade-opacity:var(--forge-dialog-fade-opacity, 0);--_dialog-slide-opacity:var(--forge-dialog-slide-opacity, 0);--_dialog-slide-translate:var(--forge-dialog-slide-translate, 0 -30%);--_dialog-backdrop-opacity:var(--forge-dialog-backdrop-opacity, var(--forge-backdrop-opacity, .54));--_dialog-nonmodal-elevation:var(--forge-dialog-nonmodal-elevation, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_dialog-fullscreen-enter-animation-duration:var(--forge-dialog-fullscreen-enter-animation-duration, var(--forge-animation-duration-medium1, .25s));--_dialog-fullscreen-exit-animation-duration:var(--forge-dialog-fullscreen-exit-animation-duration, var(--forge-animation-duration-short2, .1s));--_dialog-position-x:var(--forge-dialog-position-x, 0);--_dialog-position-y:var(--forge-dialog-position-y, 0);--_dialog-preset-sheet-enter-animation-duration:var(--forge-dialog-preset-sheet-enter-animation-duration, var(--forge-animation-duration-medium1, .25s));--_dialog-preset-sheet-exit-animation-duration:var(--forge-dialog-preset-sheet-exit-animation-duration, var(--forge-animation-duration-short3, .15s));--_backdrop-background:var(--forge-backdrop-background, #000);--_backdrop-opacity:var(--forge-backdrop-opacity, .54);--_backdrop-z-index:var(--forge-backdrop-z-index, var(--forge-z-index-backdrop, 7));--_backdrop-enter-animation-duration:var(--forge-backdrop-enter-animation-duration, var(--forge-animation-duration-short4, .2s));--_backdrop-enter-animation-easing:var(--forge-backdrop-enter-animation-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_backdrop-exit-animation-duration:var(--forge-backdrop-exit-animation-duration, var(--forge-animation-duration-short1, 50ms));--_backdrop-exit-animation-easing:var(--forge-backdrop-exit-animation-easing, var(--forge-animation-easing-emphasized-accelerate, cubic-bezier(.3, 0, .8, .15)));--forge-theme-surface: var(--forge-theme-surface-bright, #ffffff)}.forge-dialog{background-color:#0000;color:inherit;border:none;width:auto;height:auto;padding:0;margin:0;overflow:visible;max-width:100%;max-height:100%;position:absolute;inset:0;display:flex;background:var(--_dialog-background);box-shadow:var(--_dialog-elevation);z-index:var(--_dialog-z-index);overflow:hidden;border-radius:var(--_dialog-shape);margin-block-start:var(--_dialog-block-start-spacing);margin-block-end:var(--_dialog-block-end-spacing);margin-inline-start:var(--_dialog-inline-start-spacing);margin-inline-end:var(--_dialog-inline-end-spacing);padding:var(--_dialog-padding);width:var(--_dialog-width);height:var(--_dialog-height);min-width:var(--_dialog-min-width);max-width:var(--_dialog-max-width);min-height:var(--_dialog-min-height);max-height:var(--_dialog-max-height);box-sizing:border-box;animation-duration:var(--_dialog-exit-animation-duration);animation-timing-function:var(--_dialog-exit-animation-easing);position:fixed;transition-property:display,opacity,overlay,scale;transition-behavior:allow-discrete}.forge-dialog>forge-scaffold{height:auto}.forge-dialog--fullscreen{--_dialog-enter-animation-duration:var(--_dialog-fullscreen-enter-animation-duration);--_dialog-exit-animation-duration:var(--_dialog-fullscreen-exit-animation-duration);height:100%;width:100%;max-width:none;max-height:none;border-radius:0;box-shadow:none}.forge-dialog:not(:modal){--_dialog-elevation:var(--_dialog-nonmodal-elevation);pointer-events:all}.forge-dialog--moveable{-webkit-user-select:none;user-select:none;transition-property:opacity;transition-duration:var(--_dialog-move-transition-duration);transition-timing-function:var(--_dialog-move-transition-easing)}.forge-dialog--moved{margin:0}.forge-dialog--moving{opacity:var(--_dialog-moving-opacity)}.forge-dialog__move-handle{fill:var(--_dialog-move-handle-color);height:var(--_dialog-move-handle-size);width:var(--_dialog-move-handle-size);margin:var(--_dialog-move-handle-spacing);touch-action:none}.forge-dialog__move-handle:hover{cursor:var(--_dialog-move-handle-hover-cursor)}.forge-dialog__move-handle:active{cursor:var(--_dialog-move-handle-active-cursor)}.forge-dialog__move-handle-container{position:absolute;top:0;z-index:1;display:flex;justify-content:center;width:100%}.forge-dialog--top{--_dialog-block-start-spacing:var(--forge-dialog-block-start-spacing, 0);top:0;bottom:auto}.forge-dialog--top-right{--_dialog-spacing:var(--forge-dialog-spacing, 0);inset:0 0 auto auto}.forge-dialog--top-left{--_dialog-spacing:var(--forge-dialog-spacing, 0);inset:0 auto auto 0}.forge-dialog--bottom{--_dialog-block-end-spacing:var(--forge-dialog-block-end-spacing, 0);top:auto;bottom:0}.forge-dialog--bottom-right{--_dialog-spacing:var(--forge-dialog-spacing, 0);inset:auto 0 0 auto}.forge-dialog--bottom-left{--_dialog-spacing:var(--forge-dialog-spacing, 0);inset:auto auto 0 0}.forge-dialog--right{--_dialog-spacing:var(--forge-dialog-spacing, 0);inset:auto 0 auto auto}.forge-dialog--left{--_dialog-spacing:var(--forge-dialog-spacing, 0);inset:auto auto auto 0}.forge-dialog--custom{margin:0;top:var(--_dialog-position-x);left:var(--_dialog-position-y)}.forge-dialog--bottom-sheet{--_dialog-enter-animation-duration:var(--_dialog-preset-sheet-enter-animation-duration);--_dialog-exit-animation-duration:var(--_dialog-preset-sheet-exit-animation-duration);--_dialog-max-width:var(--forge-dialog-max-width, none);--_dialog-max-height:var(--forge-dialog-max-height, none);display:inline-flex;inset:auto 0 0;border-bottom-left-radius:0;border-bottom-right-radius:0;--_dialog-slide-translate:var(--forge-dialog-slide-translate, 0 100%)}.forge-dialog--bottom-sheet.forge-dialog{transition-property:display,opacity,overlay,translate}.forge-dialog--bottom-sheet.forge-dialog[open]{translate:0 0}@starting-style{.forge-dialog--bottom-sheet.forge-dialog[open]{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}}.forge-dialog--bottom-sheet.forge-dialog:not([open]){opacity:var(--_dialog-slide-opacity);scale:1;translate:var(--_dialog-slide-translate)}.forge-dialog--left-sheet{--_dialog-enter-animation-duration:var(--_dialog-preset-sheet-enter-animation-duration);--_dialog-exit-animation-duration:var(--_dialog-preset-sheet-exit-animation-duration);--_dialog-max-width:var(--forge-dialog-max-width, none);--_dialog-max-height:var(--forge-dialog-max-height, none);display:inline-flex;inset:0 auto 0 0;height:100%;border-top-left-radius:0;border-bottom-left-radius:0;--_dialog-slide-translate:var(--forge-dialog-slide-translate, -100% 0)}.forge-dialog--left-sheet.forge-dialog{transition-property:display,opacity,overlay,translate}.forge-dialog--left-sheet.forge-dialog[open]{translate:0 0}@starting-style{.forge-dialog--left-sheet.forge-dialog[open]{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}}.forge-dialog--left-sheet.forge-dialog:not([open]){opacity:var(--_dialog-slide-opacity);scale:1;translate:var(--_dialog-slide-translate)}.forge-dialog--right-sheet{--_dialog-enter-animation-duration:var(--_dialog-preset-sheet-enter-animation-duration);--_dialog-exit-animation-duration:var(--_dialog-preset-sheet-exit-animation-duration);--_dialog-max-width:var(--forge-dialog-max-width, none);--_dialog-max-height:var(--forge-dialog-max-height, none);inset:0 0 0 auto;display:inline-flex;height:100%;border-top-right-radius:0;border-bottom-right-radius:0;--_dialog-slide-translate:var(--forge-dialog-slide-translate, 100% 0)}.forge-dialog--right-sheet.forge-dialog{transition-property:display,opacity,overlay,translate}.forge-dialog--right-sheet.forge-dialog[open]{translate:0 0}@starting-style{.forge-dialog--right-sheet.forge-dialog[open]{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}}.forge-dialog--right-sheet.forge-dialog:not([open]){opacity:var(--_dialog-slide-opacity);scale:1;translate:var(--_dialog-slide-translate)}.forge-dialog--top-sheet{--_dialog-enter-animation-duration:var(--_dialog-preset-sheet-enter-animation-duration);--_dialog-exit-animation-duration:var(--_dialog-preset-sheet-exit-animation-duration);--_dialog-max-width:var(--forge-dialog-max-width, none);--_dialog-max-height:var(--forge-dialog-max-height, none);display:inline-flex;inset:0 0 auto;border-top-left-radius:0;border-top-right-radius:0;--_dialog-slide-translate:var(--forge-dialog-slide-translate, 0 -100%)}.forge-dialog--top-sheet.forge-dialog{transition-property:display,opacity,overlay,translate}.forge-dialog--top-sheet.forge-dialog[open]{translate:0 0}@starting-style{.forge-dialog--top-sheet.forge-dialog[open]{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}}.forge-dialog--top-sheet.forge-dialog:not([open]){opacity:var(--_dialog-slide-opacity);scale:1;translate:var(--_dialog-slide-translate)}.forge-dialog::backdrop{--forge-backdrop-opacity: var(--_backdrop-opacity);--forge-backdrop-enter-animation-duration: var(--_backdrop-enter-animation-duration);--forge-backdrop-enter-animation-easing: var(--_backdrop-enter-animation-easing);--forge-backdrop-exit-animation-duration: var(--_backdrop-exit-animation-duration);--forge-backdrop-exit-animation-easing: var(--_backdrop-exit-animation-easing);position:absolute;inset:0;z-index:var(--_backdrop-z-index);background:var(--_backdrop-background);opacity:0;animation-fill-mode:forwards;transition-property:display,opacity,overlay}.forge-dialog[open]{opacity:1;scale:1;transition-duration:var(--_dialog-enter-animation-duration);transition-timing-function:var(--_dialog-enter-animation-easing)}@starting-style{.forge-dialog[open]{opacity:var(--_dialog-zoom-opacity);scale:var(--_dialog-zoom-scale)}}.forge-dialog[open]::backdrop{opacity:var(--_backdrop-opacity);transition-duration:var(--_backdrop-enter-animation-duration);transition-timing-function:var(--_backdrop-enter-animation-easing)}@starting-style{.forge-dialog[open]::backdrop{opacity:0}}.forge-dialog:not([open]){animation-duration:var(--_dialog-enter-animation-duration);animation-timing-function:var(--_dialog-enter-animation-easing);display:none;opacity:var(--_dialog-zoom-opacity);scale:var(--_dialog-zoom-scale);transition-duration:var(--_dialog-exit-animation-duration);transition-timing-function:var(--_dialog-exit-animation-easing)}.forge-dialog:not([open])::backdrop{transition-duration:var(--_backdrop-exit-animation-duration);transition-timing-function:var(--_backdrop-exit-animation-easing)}.forge-dialog--animation-fade.forge-dialog{transition-property:display,opacity,overlay}@starting-style{.forge-dialog--animation-fade.forge-dialog[open]{opacity:var(--_dialog-fade-opacity)}}.forge-dialog--animation-fade.forge-dialog:not([open]){opacity:var(--_dialog-fade-opacity);scale:1}.forge-dialog--animation-slide.forge-dialog{transition-property:display,opacity,overlay,translate}.forge-dialog--animation-slide.forge-dialog[open]{translate:0 0}@starting-style{.forge-dialog--animation-slide.forge-dialog[open]{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}}.forge-dialog--animation-slide.forge-dialog:not([open]){opacity:var(--_dialog-slide-opacity);scale:1;translate:var(--_dialog-slide-translate)}.forge-dialog--animation-none{--_dialog-enter-animation-duration:var(--forge-dialog-enter-animation-duration, 0s);--_dialog-exit-animation-duration:var(--forge-dialog-exit-animation-duration, 0s);--_backdrop-enter-animation-duration:var(--forge-backdrop-enter-animation-duration, 0s);--_backdrop-exit-animation-duration:var(--forge-backdrop-exit-animation-duration, 0s)}@media(prefers-reduced-motion){.forge-dialog.forge-dialog{transition-property:display,opacity,overlay}@starting-style{.forge-dialog.forge-dialog[open]{opacity:var(--_dialog-fade-opacity)}}.forge-dialog.forge-dialog:not([open]){opacity:var(--_dialog-fade-opacity);scale:1}}:host{display:block;width:100%;height:100%;--_ai-chatbot-icon-shape: var(--forge-ai-chatbot-icon-shape, calc(var(--forge-shape-round, 50%) * var(--forge-shape-factor, 1)))}.chatbot-container{position:relative;display:grid;height:100%;overflow:hidden}forge-ai-chat-interface::part(messages){overflow:hidden}forge-ai-chat-interface forge-ai-message-thread{min-height:0}.disclaimer{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit);color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6));text-align:center;margin-block-start:var(--forge-spacing-xxsmall, 4px);margin-block-end:calc(var(--forge-spacing-small, 12px) * -1)}.suggestions-container{width:100%;align-self:start}.empty-state-icon,::slotted([slot=empty-state-icon]){height:200px;width:200px;border-radius:var(--_ai-chatbot-icon-shape)}.conversations-backdrop{position:absolute;inset:0;background-color:transparent;z-index:1}.conversations-dialog{display:grid;width:min(90%,360px);padding:0;border:0;position:absolute;z-index:2;--forge-dialog-shape: 0;--forge-dialog-nonmodal-elevation: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)}';var j=Object.defineProperty,q=Object.getOwnPropertyDescriptor,S=a=>{throw TypeError(a)},l=(a,e,i,c)=>{for(var p=c>1?void 0:c?q(e,i):e,b=a.length-1,x;b>=0;b--)(x=a[b])&&(p=(c?x(e,i,p):x(p))||p);return c&&p&&j(e,i,p),p},E=(a,e,i)=>e.has(a)||S("Cannot "+i),o=(a,e,i)=>(E(a,e,"read from private field"),i?i.call(a):e.get(a)),n=(a,e,i)=>e.has(a)?S("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,i),r=(a,e,i)=>(E(a,e,"access private method"),i),w,_,y,m,u,t,I,T,Z,A,B,L,R,D,H,W,O,k,M,$,C,P,U,z;const J="forge-ai-chatbot";let s=class extends G{constructor(){super(...arguments),n(this,t),this.showExpandButton=!1,this.showMinimizeButton=!1,this.expanded=!1,this.minimizeIcon="default",this.showConversationsButton=!1,this.recentThreads=[],this.conversationsOpen=!1,this.showConversationRename=!1,this.showConversationDelete=!1,this._selectedThreadId=null,n(this,w,h()),this._messageThreadRef=h(),this._promptRef=h(),n(this,_,h()),n(this,y,h()),n(this,m,h()),n(this,u,r(this,t,L).bind(this)),n(this,k,a=>{const e=new CustomEvent("forge-ai-chatbot-conversation-search",{detail:a.detail,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)||a.preventDefault()}),n(this,M,a=>{const e=new CustomEvent("forge-ai-chatbot-conversation-load-more",{detail:a.detail,bubbles:!0,composed:!0});this.dispatchEvent(e)}),n(this,$,a=>{const e=new CustomEvent("forge-ai-chatbot-conversation-rename",{detail:a.detail,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)||a.preventDefault()}),n(this,C,a=>{const e=new CustomEvent("forge-ai-chatbot-conversation-delete",{detail:a.detail,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)||a.preventDefault()}),n(this,z,d`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="empty-state-icon">
      <defs>
        <style>
          .cls-1 {
            isolation: isolate;
          }
          .cls-2 {
            fill: #d0dbf4;
          }
          .cls-11,
          .cls-2 {
            fill-rule: evenodd;
          }
          .cls-15,
          .cls-3 {
            fill: #fcbf12;
          }
          .cls-13,
          .cls-4,
          .cls-5 {
            fill: none;
          }
          .cls-14,
          .cls-15,
          .cls-16,
          .cls-17,
          .cls-4,
          .cls-5 {
            stroke: #586ab1;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .cls-5 {
            stroke-width: 0.75px;
          }
          .cls-6 {
            fill: #99a2bc;
          }
          .cls-10,
          .cls-12,
          .cls-17,
          .cls-19,
          .cls-7 {
            fill: #d1d1d1;
          }
          .cls-7 {
            opacity: 0.6;
          }
          .cls-10,
          .cls-12,
          .cls-19,
          .cls-7 {
            mix-blend-mode: multiply;
          }
          .cls-8 {
            fill: #e5e5e5;
          }
          .cls-11,
          .cls-14,
          .cls-9 {
            fill: #fff;
          }
          .cls-10 {
            opacity: 0.44;
          }
          .cls-12 {
            opacity: 0.62;
          }
          .cls-16 {
            fill: #5cc5cd;
          }
          .cls-18 {
            fill: #586ab1;
          }
          .cls-19 {
            opacity: 0.07;
          }
        </style>
      </defs>
      <title>chickadee-guide-spot-hero</title>
      <g class="cls-1">
        <g id="Layer_1" data-name="Layer 1">
          <path class="cls-2" d="M98.17,120.45A43.77,43.77,0,1,0,54.4,76.68,43.77,43.77,0,0,0,98.17,120.45Z" />
          <path
            class="cls-3"
            d="M157.52,156.26s1.48-.55,2.14,2c2,7.77-1.77,16.33-3.63,15.77,0,0-1.44,1.58-2.93-.84,0,0-1.16-3.07-12.51-3.25l-58-.28-10.6-.37s-2,1.3-5.21-.56-16.84-8.93-16.84-8.93-4.46-.75-6.6-.37L28,154.12s-1.12-1.3.65-1.3,14.08,3.25,14.08,3.25l8.15-.27-3.67-6.89s-.05-2.14,1.81-.74L54.63,156l16.84,7.54,36.28-1.12,31.63-.18s9.86,0,13.39-2.05A14.54,14.54,0,0,0,157.52,156.26Z" />
          <path
            class="cls-4"
            d="M51.61,156l-8.85.11s-10.24-2.58-13.17-3.17-1.86,1-1.86,1L43,159.31s4.93-.27,7.37.74,15.39,8.15,17.2,9a5.89,5.89,0,0,0,3.59.33l24.32.58s43.72-.15,45.77-.06,8.93.82,12.56,3.61c0,0,2.09,2.23,3.9-.7" />
          <path
            class="cls-4"
            d="M50.77,155.34l-3.53-6.43a1.17,1.17,0,0,1,1.16-1.47L55,156.18,70,162.78l70.41-.47c2,.09,13.59-.64,16-4.56,0,0,1.86-2.28,2.84-.19" />
          <path
            class="cls-5"
            d="M96.45,167.25a61.73,61.73,0,0,0,16.31,0c12.94-1.71,14.89-1.47,21-.74a54.38,54.38,0,0,0,14.32,0" />
          <path class="cls-5" d="M90.59,166.08s.9.28,2.53.61" />
          <path class="cls-5" d="M150.61,166a10.32,10.32,0,0,1,5.13-.49" />
          <path class="cls-5" d="M87.52,165.24s-4.75-.84-7-.42" />
          <path class="cls-5" d="M55.56,159.8s9.49,4.88,14.8,4.74" />
          <path
            class="cls-6"
            d="M101.4,143.68,89.26,159.31a2.44,2.44,0,0,1-1.39.7c-.7,0-9.7-.56-11.24-.28s-1.74.83-1.39,1,6.77.91,6.77.91l-7,1.61s-1.26,1.11-1,1.74,2-.07,2-.07L84,163.36s-4.81,2-5.3,2.86-1.51,1.95-.86,2S89.12,163,90,162.87a45,45,0,0,1,5,.21s1.13-.79-.13-1.41a12.23,12.23,0,0,0-3.63-.76s-.49-.55.48-1.67,13.82-13.19,13.82-13.19l-4.4-2.44" />
          <polygon class="cls-7" points="97.52 148.73 100.96 150.03 103.38 147.8 99.1 146.77 97.52 148.73" />
          <path
            class="cls-6"
            d="M117.1,146.26a142.71,142.71,0,0,1,8.84,11.44c3.16,4.84,6,7,8,6s1.86-5.12,1.86-5.12,6.91.65,8.1-2-1.22-3.81-4.38-5.11S127.24,141,127.24,141Z" />
          <path class="cls-7" d="M120,150.4c.65-.18,9.12-2.79,11.44-4.65l-2.1-1.53-2.92-.05-8.65,3.63Z" />
          <path
            class="cls-6"
            d="M113.24,146.4,110.45,161a1.75,1.75,0,0,1-1.54.83,12.83,12.83,0,0,0-4,0c-.51.28-.79.79-.14.88a19.22,19.22,0,0,1,4.38,1.21c.65.47,6.6,5.3,7.21,6.05s3,3.49,3.53,3,.23-2.33-.6-3.12-2.66-2.75-2.66-2.75l7.17,4.28s1.52-.89.43-1.79-7-4.11-7-4.11,8,1.95,7.72,1.2-12.33-4.88-12.33-4.88l5.12-14.65Z" />
          <polygon class="cls-7" points="112.68 150.68 116.5 150.4 117.69 147.5 113.89 148.36 112.68 150.68" />
          <path
            class="cls-8"
            d="M41.68,90.4s-5,19.93-1.36,26c0,0,1.88,2.28,2.3-1.17S45.88,105,47.85,104c0,0-2.65,12.43.34,18.13,0,0,1.42,4.08,2.61,3.6s.91-3.6.78-6,2.24-11.78,5.52-12.87c0,0-4.71,15.92,3.36,22.66,0,0,2,.89,2-2s-.95-9.57,2.14-12.47c0,0,.25,12.82,9.07,12.82,0,0,4.61-28.74,3.66-29s-32.68-14.1-32.68-14.1Z" />
          <path
            class="cls-4"
            d="M124.32,137.45s8.39,11.4,17.51,14.8c0,0,4.29,1.58,2.07,4.24s-7.69,2-7.69,2,.54,4.68-2.81,5.17-6.37-3.79-7.16-5.57-5.72-9-9.37-11.64" />
          <path
            class="cls-9"
            d="M75.38,91.57s-9.07,14.09-7.95,26.37,10.18,20.51,18.27,24,18,6.83,24.56,6.42,14.65-3.07,17.72-4.89a36.75,36.75,0,0,0,6.7-5.86L112.08,92Z" />
          <path
            class="cls-10"
            d="M97.8,105.56s-1.58,2.7-.19,4.66L103.1,117s-5.86,9.76-1.77,17.67c0,0,1.58,2.7,7,1.68,0,0,6.88,8.65,15.63,9l2.88-1.21Z" />
          <path
            class="cls-6"
            d="M83,85.61s-5.26,2.19-6.84,4.56c0,0,1.44,8,4.84,10.19,0,0-.47-1.82.46-2.1s1.86,2.19,1.86,2.19,1.54-4.75,3.3-4.37-.18,4.46-.18,4.46,2.72-1.74,2.91-.66-1.28,2.89-1.28,2.89,10.51-2.32,15.16-5,4-2.79,4-2.79l-1.07-3.67s-5-4.28-6.56-5.82a10.69,10.69,0,0,0-2.93-2.14S93.75,89,92.5,89.24s-7.07-3.77-7.07-3.77Z" />
          <path
            class="cls-11"
            d="M79,75s-5.49,8.47-4,17c0,0,1.39-4,7.53-6.32,0,0-4.09.84-3.25-.75s5.76-5.76,5.76-5.76S79.94,77.38,79,75Z" />
          <path
            class="cls-12"
            d="M79.26,75.43a8.75,8.75,0,0,0-2.88,4s3.07,1.86,4.65,2l3-2.23S79.54,77.29,79.26,75.43Z" />
          <path
            class="cls-11"
            d="M91.84,76.36a20.73,20.73,0,0,1,8,2.09c4.46,2.09,15.76,3.63,21.07-8.23,0,0,4.88,9.07,5.58,15.76,0,0-9.07,10.47-11,11.31s-19-14.24-19.54-15.77S92.54,76.5,91.84,76.36Z" />
          <polyline class="cls-13" points="-0.12 199.83 -0.12 -0.17 199.88 -0.17" />
          <path
            class="cls-6"
            d="M84.12,79a11.71,11.71,0,0,1,8.56-2.46,19.88,19.88,0,0,1,5,1c3.38,1.43,6.82,3.56,12.32,2,8.1-2.24,10.33-8.52,10.33-8.52l.42-1.81a19.11,19.11,0,0,0-6-9.77s-.14-1,.28-.84,7.8-1.54,7-2.23-9.07,1.26-8.37.84,2.93-3.91,2.79-4.33-2.09-.69-3.35,1a9.83,9.83,0,0,1-3.49,2.65s-16.32-8.23-28.46,5c0,0-4.19,9.16-2.79,10.27L78,73.43S80.54,78,82.36,78.5" />
          <path
            class="cls-12"
            d="M107.94,72.17s-1,7.42-6.28,8.23c-5.75.89-7.82-2.09-7.82-2.09S103.66,82.5,107.94,72.17Z" />
          <path
            class="cls-6"
            d="M69.83,101.93c1.45-4,3.3-6.79,5.07-12.21l-2.78.51a12.72,12.72,0,0,1-2,.31c-.67,0-3.08-.13-3.08-.13s-8.84.41-18.5-7.89c0,0-6.18-6.33-10-1.86-2.43,2.83-.44,11.13-9.16,12.61,0,0-2.55,1.34,1.21,2.41s8.58,2.69,15-8.58l1.21-1.74s8.53,14.48,21.68,14.88" />
          <path class="cls-4" d="M48.53,82.52c2.26,2.06,13.66,10.59,26.37,7" />
          <path
            class="cls-4"
            d="M42.22,92.87s-6.58,17.83-1.35,24.27c0,0,1.35,1.08,1.75-1.88s3-9.79,5.23-11.26c0,0-2,9.12-.81,15.83,0,0,1.61,6.16,3.76,5.9S52,120,52,120s-.41-9,5.09-13.14c0,0-4.83,13.54,3.36,22.66,0,0,1.74,1.07,2-2,0,0-1.34-7.64,2.14-12.47,0,0-.13,6.21,3.09,10.32a7.76,7.76,0,0,0,2.55,2.18" />
          <path class="cls-4" d="M46.78,85.36S55.63,99.17,68,100.24A5.52,5.52,0,0,1,69.7,102" />
          <polygon class="cls-14" points="32.83 107.73 37.77 104.93 32.88 102.06 32.83 107.73" />
          <rect
            class="cls-15"
            x="40.84"
            y="72.64"
            width="5.72"
            height="33.14"
            transform="translate(51.23 -9.84) rotate(30.45)" />
          <line class="cls-5" x1="35.29" y1="103.42" x2="51.82" y2="75.44" />
          <path
            class="cls-16"
            d="M56.14,71.65,52.83,69.8a.91.91,0,0,0-.58-.11.81.81,0,0,0-.36.12,1,1,0,0,0-.34.35l-.83,1.48a1,1,0,0,0,0,.82.89.89,0,0,0,.4.46l3.32,1.85a1,1,0,0,0,.76.07,1,1,0,0,0,.52-.43l.82-1.49a.89.89,0,0,0,.11-.63A1,1,0,0,0,56.5,72,.89.89,0,0,0,56.14,71.65Z" />
          <path
            class="cls-17"
            d="M50.58,72.13c-.12,0-.29.11-.4.31l-.57,1c-.13.24-.14.48,0,.55h0l1.08.6L53,75.91h0l1.13.64h0c.12.07.32-.07.45-.3l.57-1c.13-.23.14-.48,0-.54l-.07,0-4.51-2.53Z" />
          <circle class="cls-18" cx="33.52" cy="106.5" r="0.75" />
          <path class="cls-6" d="M42.84,81.91s.87,9.72-3.51,12.75S32,95.85,32,95.85l.56-2Z" />
          <path
            class="cls-4"
            d="M43,84.69s-.4,8.18-4.56,10.73-9.25,0-9.25,0-1.75-2.15.93-2.28,6-2.69,7.52-9.8S45.43,80,45.43,80" />
          <path
            class="cls-10"
            d="M72.12,90.23s-8.25,12.24-7.17,26.7c0,0,2,10.3,6,10.85a28.14,28.14,0,0,1-2-22.78,109.62,109.62,0,0,1,5-11.93l1-2.35-.73-1.18Z" />
          <line class="cls-4" x1="117.68" y1="147.5" x2="112.17" y2="162.5" />
          <path
            class="cls-4"
            d="M78.45,75.59S74,81.08,75,91.15c0,0-9,16.91-7.85,25.68S72.49,140,99.38,147,139,132.63,139,132.63s-14-60.81-20.46-69a24.7,24.7,0,0,0-22.89-9.52C80.22,55.8,78.73,67.84,78.73,67.84s-.68,3-.91,4.75" />
          <path class="cls-4" d="M98.72,144.64c.44.23.88.46,1.34.68" />
          <path class="cls-4" d="M83.29,103.19S78,130.34,95.77,142.82" />
          <path
            class="cls-4"
            d="M96.92,82.64S94,77.08,90.79,76.5c0,0-5.26-.29-11.69,7.89,0,0-1.76.88,2.63,1.17S93.12,84.68,96.92,82.64Z" />
          <path class="cls-4" d="M86.11,86.14s4.68,3.51,6.43,2.93,4.38-6.43,4.38-6.43" />
          <line class="cls-4" x1="98.39" y1="147.25" x2="88.77" y2="159.88" />
          <path class="cls-4" d="M125,98.71s-5.26,9.06-4.38,16.07" />
          <path class="cls-4" d="M121.47,69.05c-7.74,15-19.14,11.25-22.5,9.06s-8.18-1.61-8.18-1.61" />
          <path class="cls-4" d="M112,89.8c10.09.58,14-5.7,14-5.7" />
          <path class="cls-4" d="M110.58,57s2.54-4.77,5.26-4.38-3.5,4.77-3.5,4.77,8.47-2,9.64-1-8.09,2.37-8.09,2.37" />
          <path
            class="cls-19"
            d="M97.8,105.56s-1.58,2.7-.19,4.66L103.1,117s-5.86,9.76-1.77,17.67c0,0,1.58,2.7,7,1.68,0,0,6.88,8.65,15.63,9l2.88-1.21Z" />
          <line class="cls-4" x1="103.06" y1="148.12" x2="90.82" y2="160.17" />
          <path
            class="cls-4"
            d="M121.05,88.45s2,1.21,1,2.14-4.93-.93-4.93-.93.37,2.23-1.49,2.6S108,89.57,108,89.57s0,1.58-1.3,1.86c-1,.21-4.68-3.41-6.34-5.1l-.83-.86a17,17,0,0,0-2.88-2.74" />
          <path class="cls-4" d="M83.19,85.75s-6,1.58-8.56,6.33" />
          <path class="cls-4" d="M87.74,102.9c5.61-.26,13.42-3,20.94-8.78" />
          <path class="cls-4" d="M76.12,90.59s1.53,7,5,10.37" />
          <path class="cls-18" d="M108.51,55.37s-3.25-2.78-4.68-2.89.61,2.08.61,2.08l4.54,1" />
          <path class="cls-18" d="M110.76,57c-.2-.79-.88-5.32-2.52-5.77s-.52,4.85-.52,4.85Z" />
          <path
            class="cls-4"
            d="M81.3,101.41s-1.18-2.8,0-3.22,2.3,2.88,2.3,2.88.5-4.84,2.88-4.92-.17,5.09-.17,5.09,2.11-2.11,3-1.36c1.18.94-1.7,3.08-1.7,3.08" />
          <ellipse class="cls-4" cx="99.14" cy="70.08" rx="8.69" ry="9.07" />
          <ellipse class="cls-4" cx="81.62" cy="70.98" rx="6.98" ry="8.85" />
          <path class="cls-4" d="M107.89,70.08c.42-.14,13.26-6.7,13.26-6.7s2.37-1,3.07,1.25" />
          <line class="cls-4" x1="90.45" y1="69.24" x2="88.36" y2="69.24" />
          <path class="cls-4" d="M102.47,68.3a3.51,3.51,0,0,0-4.54-1.6" />
          <circle class="cls-18" cx="98.98" cy="73.02" r="2.08" />
          <circle class="cls-9" cx="98.29" cy="72.57" r="0.5" />
          <path class="cls-18" d="M107.68,68.75l1-.28A8.61,8.61,0,0,1,108.9,71l-.94.21Z" />
          <path class="cls-4" d="M81.14,68.3a3.5,3.5,0,0,1,4.53-1.6" />
          <circle class="cls-18" cx="84.63" cy="73.02" r="2.08" />
          <circle class="cls-9" cx="85.32" cy="72.57" r="0.5" />
          <path class="cls-4" d="M84.45,79s-4.19.69-6.56-6.14" />
          <path
            class="cls-4"
            d="M86.25,162.69c-.26.19-6.38,2.33-7.27,3.16s-1.46,2.06-1.18,2.36,1.94-.53,1.94-.53,9.15-5.06,12.17-4.89,3.57.28,3.57.28.61-.83-.63-1.4a7.84,7.84,0,0,0-2.79-.56,1.37,1.37,0,0,1-1.33-.89" />
          <path class="cls-4" d="M85.15,163c-3,.65-10.44,2.53-11,2.42s-.36-1.1.5-1.84,9.13-1.84,9.13-1.84" />
          <path class="cls-4" d="M88.54,160S77,159.1,75.36,160s1.13,1.1,2.36,1.18l6.54.46" />
          <path
            class="cls-4"
            d="M113.84,165.29c.2.26,5,4,5.62,5s.78,2.39.43,2.6-1.69-1.08-1.69-1.08-7.26-7.53-10.2-8.26-3.49-.78-3.49-.78-.33-1,1-1.15a7.83,7.83,0,0,1,2.82.28,7.83,7.83,0,0,0,1.73-.13" />
          <path class="cls-4" d="M114.4,165.76c2.67,1.54,9.2,5.62,9.74,5.68s.68-.94.09-1.9-8.12-4.7-8.12-4.7" />
          <path class="cls-4" d="M112.46,162.2s10.94,2.41,12.19,3.8-1.42.7-2.61.39-6.15-1.62-6.15-1.62" />
          <line class="cls-4" x1="113.22" y1="148.24" x2="110.08" y2="162.31" />
          <path class="cls-5" d="M127.94,145.52a22.35,22.35,0,0,0,9.9,7.44" />
          <path class="cls-5" d="M139.56,153.84s1,.47.84.93" />
          <path class="cls-5" d="M122.31,148.12s5.21,6.14,6.51,8.28,2.05,3.54,2.61,3.72" />
          <path
            class="cls-6"
            d="M108.13,115.5s-6.13,10.81-5.65,15,6.67,3.39,6.67,3.39,12.33,12.59,21.68,9.72c0,0,1-.52-2.05-5.85,0,0,10.48,4.09,14.35,1.73,0,0,2.59-1.73.33-2.85l-4.84-2.42L146,132a124.87,124.87,0,0,0,1.61-25.33S142,93.88,128.13,93.56Z" />
          <path
            class="cls-17"
            d="M113.83,89.32a4.47,4.47,0,0,0-7.15,5.36l-5.37,4,4.48,6,17.85-13.38-4.49-6Zm-5.28,3.92a2.08,2.08,0,1,1,3.32-2.5Z" />
          <path
            class="cls-3"
            d="M111.84,124.7c-.43.75-13.45-18.29-13.45-18.29a1.79,1.79,0,0,1,.86-2c1.29-1,24.52-17.75,24.52-17.75s1.3-3.38,3.23-1,11,20.65,11,20.65,1.29,1.45-.48,1.93S116,117.28,111.84,124.7Z" />
          <path
            class="cls-4"
            d="M111.84,124.54,98.39,106.41a1.16,1.16,0,0,1,.25-1.62l26.75-19.38a1.14,1.14,0,0,1,1.61.25l12.1,21.94" />
          <path class="cls-4" d="M107.8,126.79s.81,1.94,4.52-2.58,15-12.9,26.78-16.45c0,0,1.94,0,1.94-2.75" />
          <path
            class="cls-4"
            d="M109.15,133.89c.43.22,10.43,11.51,20.22,10.33,0,0,2.9-.33,1.61-2.69s-2.69-4.41-2.69-4.41,7,5.48,14.84,2.37a2,2,0,0,0,1.08-1.94c-.22-1.29-7.42-4.41-7.42-4.41" />
          <path class="cls-4" d="M138.4,133.68A18.6,18.6,0,0,0,146,132s2.47-6.24,1.5-24.42c0,0,.41-8.73-16-13.75" />
          <path class="cls-4" d="M106.57,117.54s-5.81,10.54-3.45,15.28c0,0,1.51,2.15,8.82.64" />
          <path class="cls-5" d="M114.47,127.49a5.72,5.72,0,0,0,1.21-.8" />
          <path class="cls-5" d="M117.83,124.94s7.75-6.78,14.44-9.44" />
        </g>
      </g>
    </svg>
  `)}_handleInfo(){const a=o(this,_).value;a?.showAgentInfo&&a.showAgentInfo(),super._handleInfo()}async sendMessage(a,e){this._promptRef.value?.closeSlashMenu(),await super.sendMessage(a,e)}focus(){this._promptRef.value?.focus()}showConversations(){const a=o(this,m).value;a&&!a.open&&(a.show(),this.conversationsOpen=!0,window.addEventListener("keydown",o(this,u),{capture:!0}),this._dispatchHostEvent({type:"forge-ai-chatbot-conversations-open"}))}hideConversations(){const a=o(this,m).value;a&&a.open&&(window.removeEventListener("keydown",o(this,u),{capture:!0}),a.close(),setTimeout(()=>{o(this,y).value?.resetToMainView()},150))}startNewChat(){super.startNewChat(),this._selectedThreadId=null}toggleConversations(){this.conversationsOpen?this.hideConversations():this.showConversations()}render(){return d`
      <div class="chatbot-container">
        <forge-ai-chat-interface
          ${f(o(this,w))}
          role="region"
          aria-label="AI chatbot"
          aria-live="polite"
          aria-busy=${this._isStreaming}>
          <forge-ai-chat-header
            ${f(o(this,_))}
            slot="header"
            ?show-expand-button=${this.showExpandButton}
            ?show-minimize-button=${this.showMinimizeButton}
            ?show-conversations-button=${this.showConversationsButton}
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
            @forge-ai-chat-header-expand=${r(this,t,I)}
            @forge-ai-chat-header-minimize=${r(this,t,T)}
            @forge-ai-chat-header-clear=${r(this,t,Z)}
            @forge-ai-chat-header-export=${this._handleExport}
            @forge-ai-chat-header-info=${r(this,t,A)}
            @forge-ai-chat-header-agent-change=${this._handleAgentChange}
            @forge-ai-chat-header-conversations-toggle=${r(this,t,D)}>
            <slot name="icon" slot="icon">
              <forge-ai-icon></forge-ai-icon>
            </slot>
            <slot name="header-actions" slot="header-actions"></slot>
          </forge-ai-chat-header>
          ${o(this,t,U)} ${o(this,t,P)}
          ${v(this.disclaimerText,()=>d`<div class="disclaimer" slot="disclaimer">${this.disclaimerText}</div>`)}
        </forge-ai-chat-interface>
        ${v(this.showConversationsButton,()=>d`
            ${v(this.conversationsOpen,()=>d` <div class="conversations-backdrop" @click=${r(this,t,R)}></div> `)}
            <dialog
              ${f(o(this,m))}
              class="conversations-dialog forge-dialog forge-dialog--modal forge-dialog--left-sheet"
              @close=${r(this,t,B)}>
              <forge-ai-conversations-panel
                ${f(o(this,y))}
                .recentThreads=${this.recentThreads}
                .selectedThreadId=${this._selectedThreadId}
                ?show-back-button=${!0}
                ?show-conversation-rename=${this.showConversationRename}
                ?show-conversation-delete=${this.showConversationDelete}
                @forge-ai-conversations-panel-select=${r(this,t,H)}
                @forge-ai-conversations-panel-new-chat=${r(this,t,W)}
                @forge-ai-conversations-panel-close=${r(this,t,O)}
                @forge-ai-conversations-panel-search=${o(this,k)}
                @forge-ai-conversations-panel-load-more=${o(this,M)}
                @forge-ai-conversations-panel-rename=${o(this,$)}
                @forge-ai-conversations-panel-delete=${o(this,C)}>
              </forge-ai-conversations-panel>
            </dialog>
          `)}
      </div>
    `}};w=new WeakMap;_=new WeakMap;y=new WeakMap;m=new WeakMap;u=new WeakMap;t=new WeakSet;I=function(){this._dispatchHostEvent({type:"forge-ai-chatbot-expand"})};T=function(){this._dispatchHostEvent({type:"forge-ai-chatbot-minimize"})};Z=function(){this.clearMessages()};A=function(){this._handleInfo()};B=function(){window.removeEventListener("keydown",o(this,u),{capture:!0}),this.conversationsOpen=!1,this._dispatchHostEvent({type:"forge-ai-chatbot-conversations-close"})};L=function(a){if(a.key==="Escape"&&this.conversationsOpen){if(a.composedPath().some(c=>c instanceof HTMLElement&&c.hasAttribute("data-handles-escape")))return;a.stopPropagation(),a.preventDefault(),this.hideConversations()}};R=function(){this.hideConversations()};D=function(){this.toggleConversations()};H=function(a){const{id:e,title:i}=a.detail;this._selectedThreadId=e,this._dispatchHostEvent({type:"forge-ai-chatbot-conversation-select",detail:{id:e,title:i}}),this.hideConversations()};W=function(a){if(a.defaultPrevented)return;this._dispatchHostEvent({type:"forge-ai-chatbot-new-chat",cancelable:!0}).defaultPrevented||this.startNewChat(),this.hideConversations()};O=function(){this.hideConversations()};k=new WeakMap;M=new WeakMap;$=new WeakMap;C=new WeakMap;P=function(){const a=this._isUploading;return d`
      <forge-ai-prompt
        ${f(this._promptRef)}
        slot="prompt"
        .placeholder=${this.placeholder}
        .running=${this._isStreaming||a}
        .slashCommands=${this._slashCommands}
        .contextItems=${this._allContextItems}
        ?disabled=${a}
        ?debug-mode=${this.debugMode}
        @forge-ai-prompt-send=${this._handleSend}
        @forge-ai-prompt-stop=${this._handleStop}
        @forge-ai-prompt-cancel=${this._handleCancel}
        @forge-ai-prompt-debug-toggle=${this._handleDebugToggle}
        @forge-ai-prompt-command=${this._handleSlashCommand}
        @forge-ai-prompt-context-remove=${this._handlePromptContextRemove}>
        ${v(this.fileUpload==="on",()=>d`
            <forge-ai-file-picker
              slot="actions-start"
              variant="icon-button"
              multiple
              ?disabled=${a}
              .selectedFiles=${this._coreController?.pendingAttachments.map(e=>e.filename)??[]}
              @forge-ai-file-picker-change=${this._handleFileSelect}
              @forge-ai-file-picker-error=${this._handleFileError}>
            </forge-ai-file-picker>
          `)}
        ${v(this.voiceInput==="on",()=>d`
            <forge-ai-voice-input slot="actions-end" @forge-ai-voice-input-result=${this._handleVoiceInputResult}>
            </forge-ai-voice-input>
          `)}
      </forge-ai-prompt>
    `};U=function(){return d`
      <forge-ai-message-thread
        ${f(this._messageThreadRef)}
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
        <slot name="empty-state-icon" slot="empty-state-icon">${o(this,z)}</slot>
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
    `};z=new WeakMap;s.styles=N(K);l([g({type:Boolean,attribute:"show-expand-button"})],s.prototype,"showExpandButton",2);l([g({type:Boolean,attribute:"show-minimize-button"})],s.prototype,"showMinimizeButton",2);l([g({type:Boolean})],s.prototype,"expanded",2);l([g({attribute:"minimize-icon"})],s.prototype,"minimizeIcon",2);l([g({type:Boolean,attribute:"show-conversations-button"})],s.prototype,"showConversationsButton",2);l([g({type:Array,attribute:!1})],s.prototype,"recentThreads",2);l([g({type:Boolean,attribute:"conversations-open",reflect:!0})],s.prototype,"conversationsOpen",2);l([g({type:Boolean,attribute:"show-conversation-rename"})],s.prototype,"showConversationRename",2);l([g({type:Boolean,attribute:"show-conversation-delete"})],s.prototype,"showConversationDelete",2);l([V()],s.prototype,"_selectedThreadId",2);s=l([F(J)],s);
