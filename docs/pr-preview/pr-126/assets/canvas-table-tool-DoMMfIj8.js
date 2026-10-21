import{a as u,i as y,E as m,x as r}from"./iframe-B0FAvQxw.js";import{t as w}from"./custom-element-UsVr97OX.js";import{n as h}from"./property-BcVae0nA.js";import{h as k,B as M}from"./scaffold-D7npUdzY.js";import"./split-button-BQxL9Ps8.js";import{c as f}from"./create-tool-renderer-BxivDorU.js";function P(){k(M)}var z=Object.defineProperty,O=Object.getOwnPropertyDescriptor,b=e=>{throw TypeError(e)},c=(e,t,a,o)=>{for(var i=o>1?void 0:o?O(t,a):t,d=e.length-1,g;d>=0;d--)(g=e[d])&&(i=(o?g(t,a,i):g(i))||i);return o&&i&&z(t,a,i),i},x=(e,t,a)=>t.has(e)||b("Cannot "+a),n=(e,t,a)=>(x(e,t,"read from private field"),a?a.call(e):t.get(e)),E=(e,t,a)=>t.has(e)?b("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),V=(e,t,a)=>(x(e,t,"access private method"),a),s,v,$,_,C,T;P();const R=3,K='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"/></svg>';let l=class extends y{constructor(){super(...arguments),E(this,s)}render(){const{title:e,summary:t}=this.toolCall.args;return r`
      <div class="card">
        <div class="header">
          <div class="icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" />
            </svg>
          </div>
          <div>
            <h3 class="title">${e}</h3>
            <p class="meta">${n(this,s,$)}</p>
          </div>
        </div>
        ${t?r`<p class="summary">${t}</p>`:m} ${n(this,s,_)} ${n(this,s,C)}
      </div>
    `}};s=new WeakSet;v=function(){return this.toolCall.args.rows?.length??0};$=function(){const e=this.toolCall.args.headers?.length??0;return`${n(this,s,v)} rows · ${e} columns`};_=function(){const e=(this.toolCall.args.rows??[]).slice(0,R);return e.length?r`
      <ul class="preview">
        ${e.map(([t,a])=>r`<li><span>${t}</span><span class="value">${a}</span></li>`)}
      </ul>
    `:m};C=function(){if(!this.canvas?.available)return m;const e=this.canvas.isOpen?"Close table":`View all ${n(this,s,v)} rows`;return r`
      <div class="actions">
        <forge-button variant="outlined" @click=${V(this,s,T)}>${e}</forge-button>
      </div>
    `};T=function(){this.canvas?.toggle()};l.styles=u`
    :host {
      display: block;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: var(--forge-spacing-medium, 12px);
      padding: var(--forge-spacing-large, 16px);
      border: 1px solid var(--forge-theme-outline, #ccc);
      border-radius: var(--forge-shape-large, 12px);
      background: var(--forge-theme-surface-container-minimum, #f6f6f6);
      color: var(--forge-theme-text-high, inherit);
    }

    .header {
      display: flex;
      align-items: center;
      gap: var(--forge-spacing-medium, 12px);
    }

    .icon {
      flex: none;
      display: grid;
      place-items: center;
      inline-size: 40px;
      block-size: 40px;
      border-radius: var(--forge-shape-medium, 8px);
      background: var(--forge-theme-primary-container, #e0e7ff);
      color: var(--forge-theme-on-primary-container, #1a237e);
    }

    .icon svg {
      inline-size: 24px;
      block-size: 24px;
      fill: currentcolor;
    }

    .title {
      margin: 0;
      font: var(--forge-typography-heading4, 600 1rem sans-serif);
    }

    .meta {
      margin: 0;
      color: var(--forge-theme-text-medium, inherit);
      font: var(--forge-typography-caption, 0.75rem sans-serif);
    }

    .summary {
      margin: 0;
      font: var(--forge-typography-body2, 0.875rem sans-serif);
    }

    .preview {
      display: grid;
      margin: 0;
      padding: 0;
      list-style: none;
      border-radius: var(--forge-shape-medium, 8px);
      background: var(--forge-theme-surface, #fff);
    }

    .preview li {
      display: flex;
      justify-content: space-between;
      gap: var(--forge-spacing-medium, 12px);
      padding: var(--forge-spacing-small, 8px) var(--forge-spacing-medium, 12px);
    }

    .preview li + li {
      border-block-start: 1px solid var(--forge-theme-outline, #ccc);
    }

    .preview .value {
      color: var(--forge-theme-text-medium, inherit);
    }

    .actions {
      display: flex;
      justify-content: flex-end;
    }
  `;c([h({attribute:!1})],l.prototype,"toolCall",2);c([h({attribute:!1})],l.prototype,"canvas",2);l=c([w("demo-table-overview-card")],l);let p=class extends y{render(){const{headers:e=[],rows:t=[]}=this.toolCall.args;return r`
      <table>
        <thead>
          <tr>
            ${e.map(a=>r`<th scope="col">${a}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${t.map(a=>r`<tr>
                ${a.map(o=>r`<td>${o}</td>`)}
              </tr>`)}
        </tbody>
      </table>
    `}};p.styles=u`
    :host {
      display: block;
    }

    table {
      inline-size: 100%;
      border-collapse: collapse;
      color: var(--forge-theme-text-high, inherit);
    }

    th,
    td {
      padding: var(--forge-spacing-small, 8px) var(--forge-spacing-medium, 12px);
      border-block-end: 1px solid var(--forge-theme-outline, #ccc);
      text-align: start;
    }

    th {
      position: sticky;
      inset-block-start: 0;
      background: var(--forge-theme-surface, #fff);
    }
  `;c([h({attribute:!1})],p.prototype,"toolCall",2);p=c([w("demo-canvas-table")],p);const H={name:"displayCanvasTable",displayName:"Sales Data",description:"Presents tabular data as an overview with a full table. Provide a short summary of what the data shows and order each row as [label, value, ...].",parameters:{type:"object",properties:{title:{type:"string",description:"Table title"},summary:{type:"string",description:"One or two sentences describing the key takeaway"},headers:{type:"array",items:{type:"string"},description:"Column headers"},rows:{type:"array",items:{type:"array",items:{oneOf:[{type:"string"},{type:"number"}]}},description:"Row values, in header order"}},required:["title","headers","rows"]},renderer:f({elementTag:"demo-table-overview-card"}),canvas:{renderer:f({elementTag:"demo-canvas-table"}),title:e=>e.args.title,subtitle:e=>e.args.summary??`${e.args.rows?.length??0} rows`,icon:K,actionLabel:e=>({open:`Open ${e.args.title}`,collapse:`Collapse ${e.args.title}`})}},N={title:"Regional sales, Q3",summary:"Revenue grew in 11 of 12 regions. Southeast led at $1.61M (+12.7%); Great Lakes was the only decline.",headers:["Region","Revenue","Growth","Top product","Accounts"],rows:[["Northeast","$1.24M","+8.2%","Permitting",312],["Mid-Atlantic","$980K","+4.1%","Licensing",241],["Southeast","$1.61M","+12.7%","Utility billing",402],["Great Lakes","$870K","-1.3%","Court case management",198],["Plains","$540K","+2.9%","Tax & assessment",133],["Gulf Coast","$1.05M","+9.8%","Permitting",276],["Mountain","$690K","+6.4%","Public safety",164],["Southwest","$1.12M","+10.5%","Utility billing",289],["Pacific Northwest","$830K","+3.6%","Licensing",205],["California","$2.03M","+7.9%","Tax & assessment",511],["Alaska","$120K","+0.8%","Public safety",27],["Hawaii","$210K","+5.2%","Permitting",44]]};export{H as c,P as d,N as s};
