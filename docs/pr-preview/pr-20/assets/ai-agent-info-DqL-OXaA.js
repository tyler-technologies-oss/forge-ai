import{r as b,i as d,E as u,x as r}from"./iframe-ZSJZT9AU.js";import{t as y}from"./custom-element-UsVr97OX.js";import{n as h}from"./property-DA1UX5j1.js";import{n as t}from"./when-CI7b_ccM.js";const m='.forge-label-value{--_label-value-align: var(--forge-label-value-align, start);--_label-value-label-spacing: var(--forge-label-value-label-spacing, var(--forge-spacing-xxsmall, 4px));--_label-value-label-block-start-spacing: var(--forge-label-value-label-block-start-spacing, var(--_label-value-label-spacing));--_label-value-label-block-end-spacing: var(--forge-label-value-label-block-end-spacing, var(--_label-value-label-spacing));--_label-value-label-color: var(--forge-label-value-label-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)));--_label-value-icon-spacing: var(--forge-label-value-icon-spacing, var(--forge-spacing-xxsmall, 4px));--_label-value-inline-label-spacing: var(--forge-label-value-inline-label-spacing, var(--forge-spacing-xsmall, 8px));--_label-value-empty-color: var(--forge-label-value-empty-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)));--_label-value-empty-style: var(--forge-label-value-empty-style, italic)}.forge-label-value{display:inline-block;min-width:0;display:grid;grid-template-columns:auto 1fr;grid-template-areas:"icon label" "icon value"}.forge-label-value--inline{display:flex;align-items:center}.forge-label-value--inline .forge-label-value__label{margin-block:0;margin-inline-end:var(--_label-value-inline-label-spacing)}.forge-label-value--empty .forge-label-value__value{color:var(--_label-value-empty-color);font-style:var(--_label-value-empty-style)}.forge-label-value--ellipsis .forge-label-value__value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;justify-self:auto}.forge-label-value__icon,.forge-label-value .forge-icon,.forge-label-value forge-icon{display:inline-flex;grid-area:icon;margin-inline-end:var(--_label-value-icon-spacing)}.forge-label-value__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .8125)));font-weight:var(--forge-typography-label2-font-weight, 400);line-height:var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label2-letter-spacing, .0096153846em);text-transform:var(--forge-typography-label2-text-transform, inherit);text-decoration:var(--forge-typography-label2-text-decoration, inherit);grid-area:label;justify-self:var(--_label-value-align);margin-block-start:var(--_label-value-label-block-start-spacing);margin-block-end:var(--_label-value-label-block-end-spacing);line-height:normal;text-align:var(--_label-value-align);overflow-wrap:anywhere;color:var(--_label-value-label-color)}.forge-label-value__value{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);grid-area:value;display:grid;align-items:center;justify-self:var(--_label-value-align);line-height:normal;text-align:var(--_label-value-align);overflow-wrap:anywhere}:host{display:block}.forge-label-value{grid-template-rows:auto 1fr}.forge-label-value .forge-label-value__value{align-self:start}.agent-info-container{display:flex;flex-direction:column;gap:var(--forge-spacing-medium, 16px)}.agent-info-header{display:flex;gap:var(--forge-spacing-medium, 16px)}.agent-info-header .forge-label-value{flex:1 1 0;min-width:0}.agent-info-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:var(--forge-spacing-medium, 16px)}';var _=Object.defineProperty,x=Object.getOwnPropertyDescriptor,f=e=>{throw TypeError(e)},p=(e,a,l,i)=>{for(var o=i>1?void 0:i?x(a,l):a,g=e.length-1,s;g>=0;g--)(s=e[g])&&(o=(i?s(a,l,o):s(o))||o);return i&&o&&_(a,l,o),o},w=(e,a,l)=>a.has(e)||f("Cannot "+l),I=(e,a,l)=>a.has(e)?f("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,l),$=(e,a,l)=>(w(e,a,"access private method"),l),v,c;const k="forge-ai-agent-info";let n=class extends d{constructor(){super(...arguments),I(this,v)}render(){return this.agentInfo?r`
      <div class="agent-info-container">
        <div class="agent-info-header">
          ${t(this.agentInfo.name,()=>r`
              <div class="forge-label-value">
                <div class="forge-label-value__label">Name</div>
                <div class="forge-label-value__value">${this.agentInfo?.name}</div>
              </div>
            `)}
          ${t(this.agentInfo.version,()=>r`
              <div class="forge-label-value">
                <div class="forge-label-value__label">Version</div>
                <div class="forge-label-value__value">${this.agentInfo?.version}</div>
              </div>
            `)}
          ${t(this.agentInfo.lastUpdated,()=>r`
              <div class="forge-label-value">
                <div class="forge-label-value__label">Last Updated</div>
                <div class="forge-label-value__value">
                  ${this.agentInfo?.lastUpdated?$(this,v,c).call(this,this.agentInfo.lastUpdated):""}
                </div>
              </div>
            `)}
        </div>
        ${t(this.agentInfo.description,()=>r`
            <div class="forge-label-value">
              <div class="forge-label-value__label">Description</div>
              <div class="forge-label-value__value">${this.agentInfo?.description}</div>
            </div>
          `)}
        <div class="agent-info-grid">
          ${t(this.agentInfo.identifier,()=>r`
              <div class="forge-label-value">
                <div class="forge-label-value__label">Identifier</div>
                <div class="forge-label-value__value">${this.agentInfo?.identifier}</div>
              </div>
            `)}
          ${t(this.agentInfo.model,()=>r`
              <div class="forge-label-value">
                <div class="forge-label-value__label">Model</div>
                <div class="forge-label-value__value">${this.agentInfo?.model}</div>
              </div>
            `)}
        </div>
      </div>
    `:r`${u}`}};v=new WeakSet;c=function(e){try{const a=new Date(e);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(a)}catch{return e}};n.styles=b(m);p([h({type:Object,attribute:!1})],n.prototype,"agentInfo",2);n=p([y(k)],n);
