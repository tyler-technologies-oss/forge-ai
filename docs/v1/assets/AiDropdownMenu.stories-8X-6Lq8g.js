import{x as a}from"./iframe-CFGs3NmZ.js";import"./ai-dropdown-menu-0o0JpH30.js";import"./ai-dropdown-menu-item-C1Un49Bc.js";import{I as d,t as p,a as m,b as s}from"./icon-registry-D8cCWsde.js";import{d as u}from"./index-DhI3e-uN.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__;u();d.define([p,m,s]);const g="forge-ai-dropdown-menu",i=l("forge-ai-dropdown-menu-change"),c={title:"AI Components/Primitives/Dropdown Menu",component:g,argTypes:{variant:{control:"select",options:["button","icon-button"],description:"The variant of the dropdown menu trigger button"},selectionMode:{control:"select",options:["none","single","multi"],description:"The selection mode for the dropdown menu"},text:{control:"text",description:"The text content of the trigger button"},disabled:{control:"boolean",description:"Whether the dropdown menu is disabled"},popoverPlacement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],description:"The placement of the popover relative to the trigger button"}},args:{open:!1,variant:"button",selectionMode:"none",text:"Choose model...",disabled:!1,popoverPlacement:"bottom-start"},render:e=>a`
      <forge-ai-dropdown-menu
        .open=${e.open}
        variant=${e.variant}
        selection-mode=${e.selectionMode}
        popover-placement=${e.popoverPlacement}
        ?disabled=${e.disabled}
        @forge-ai-dropdown-menu-change=${o=>i(o.detail)}>
        ${e.variant==="icon-button"?a`<forge-icon name="more_vert" slot="trigger-content"></forge-icon>`:a`<span slot="trigger-content">${e.text}</span>
              <forge-icon name="arrow_drop_down" slot="end"></forge-icon>`}

        <forge-ai-dropdown-menu-item value="gpt-4.1">
          <span>GPT-4.1</span>
          <!-- <span slot="description">More capable, advanced reasoning</span> -->
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>

        <forge-ai-dropdown-menu-item value="gpt-4">
          <span>GPT-4</span>
          <!-- <span slot="description">Advanced reasoning capabilities</span> -->
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>

        <forge-ai-dropdown-menu-item value="claude-sonnet-4">
          <span>Claude Sonnet 4</span>
          <!-- <span slot="description">Powerful and steerable</span> -->
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>

        <forge-ai-dropdown-menu-item value="claude-sonnet-4.5">
          <span>Claude Sonnet 4.5</span>
          <!-- <span slot="description">Improved steerability and creativity</span> -->
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    `},n={},r={args:{selectionMode:"single",text:"Select model..."},parameters:{docs:{description:{story:"Demonstrate item groups with labels and separators. Groups organize related items together with optional labels, while separators provide visual division between sections."}}},render:e=>a`
      <forge-ai-dropdown-menu
        .open=${e.open}
        variant=${e.variant}
        selection-mode=${e.selectionMode}
        popover-placement=${e.popoverPlacement}
        ?disabled=${e.disabled}
        @forge-ai-dropdown-menu-change=${o=>i(o.detail)}>
        <span slot="header">Models</span>
        <span slot="trigger-content">${e.text}</span>
        <forge-icon name="arrow_drop_down" slot="end"></forge-icon>

        <forge-ai-dropdown-menu-item-group>
          <span slot="label">OpenAI</span>
          <forge-ai-dropdown-menu-item value="gpt-4.1"
            >GPT-4.1<forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>
          <forge-ai-dropdown-menu-item value="gpt-4"
            >GPT-4<forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>
          <forge-ai-dropdown-menu-item value="gpt-5"
            >GPT-5<forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu-item-group>

        <forge-ai-dropdown-menu-item-group>
          <span slot="label">Anthropic</span>
          <forge-ai-dropdown-menu-item value="claude-sonnet-4"
            >Claude Sonnet 4<forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>
          <forge-ai-dropdown-menu-item value="claude-sonnet-4.5"
            >Claude Sonnet 4.5<forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu-item-group>
      </forge-ai-dropdown-menu>
    `},t={parameters:{controls:{disable:!0},docs:{description:{story:"Demonstrate cascading nested menus. Parent menu items can contain child dropdown menus that automatically position to the right (or left if no space). Includes proper ARIA attributes and keyboard navigation support."}}},render:e=>a`
      <forge-ai-dropdown-menu
        .open=${e.open}
        @forge-ai-dropdown-menu-change=${o=>i(o.detail)}>
        <span slot="trigger-content">File</span>
        <forge-icon name="arrow_drop_down" slot="end"></forge-icon>

        <forge-ai-dropdown-menu-item value="new">
          New
          <forge-ai-dropdown-menu selection-mode="none">
            <forge-ai-dropdown-menu-item value="file">New File</forge-ai-dropdown-menu-item>
            <forge-ai-dropdown-menu-item value="folder">New Folder</forge-ai-dropdown-menu-item>
            <forge-ai-dropdown-menu-item value="project">
              New Project
              <forge-ai-dropdown-menu selection-mode="none">
                <forge-ai-dropdown-menu-item value="react">React App</forge-ai-dropdown-menu-item>
                <forge-ai-dropdown-menu-item value="vue">Vue App</forge-ai-dropdown-menu-item>
                <forge-ai-dropdown-menu-item value="angular">Angular App</forge-ai-dropdown-menu-item>
              </forge-ai-dropdown-menu>
            </forge-ai-dropdown-menu-item>
          </forge-ai-dropdown-menu>
        </forge-ai-dropdown-menu-item>

        <forge-ai-dropdown-menu-item value="open">Open File</forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="recent">
          Recent Files
          <forge-ai-dropdown-menu selection-mode="none">
            <forge-ai-dropdown-menu-item value="doc1">Document 1.txt</forge-ai-dropdown-menu-item>
            <forge-ai-dropdown-menu-item value="doc2">Document 2.txt</forge-ai-dropdown-menu-item>
            <forge-ai-dropdown-menu-item value="doc3">Document 3.txt</forge-ai-dropdown-menu-item>
          </forge-ai-dropdown-menu>
        </forge-ai-dropdown-menu-item>

        <forge-ai-dropdown-menu-separator></forge-ai-dropdown-menu-separator>

        <forge-ai-dropdown-menu-item value="exit">Exit</forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single',
    text: 'Select model...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrate item groups with labels and separators. Groups organize related items together with optional labels, while separators provide visual division between sections.'
      }
    }
  },
  render: (args: any) => {
    return html\`
      <forge-ai-dropdown-menu
        .open=\${args.open}
        variant=\${args.variant}
        selection-mode=\${args.selectionMode}
        popover-placement=\${args.popoverPlacement}
        ?disabled=\${args.disabled}
        @forge-ai-dropdown-menu-change=\${(evt: CustomEvent) => changeAction(evt.detail)}>
        <span slot="header">Models</span>
        <span slot="trigger-content">\${args.text}</span>
        <forge-icon name="arrow_drop_down" slot="end"></forge-icon>

        <forge-ai-dropdown-menu-item-group>
          <span slot="label">OpenAI</span>
          <forge-ai-dropdown-menu-item value="gpt-4.1"
            >GPT-4.1<forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>
          <forge-ai-dropdown-menu-item value="gpt-4"
            >GPT-4<forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>
          <forge-ai-dropdown-menu-item value="gpt-5"
            >GPT-5<forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu-item-group>

        <forge-ai-dropdown-menu-item-group>
          <span slot="label">Anthropic</span>
          <forge-ai-dropdown-menu-item value="claude-sonnet-4"
            >Claude Sonnet 4<forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>
          <forge-ai-dropdown-menu-item value="claude-sonnet-4.5"
            >Claude Sonnet 4.5<forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu-item-group>
      </forge-ai-dropdown-menu>
    \`;
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Demonstrate cascading nested menus. Parent menu items can contain child dropdown menus that automatically position to the right (or left if no space). Includes proper ARIA attributes and keyboard navigation support.'
      }
    }
  },
  render: (args: any) => {
    return html\`
      <forge-ai-dropdown-menu
        .open=\${args.open}
        @forge-ai-dropdown-menu-change=\${(evt: CustomEvent) => changeAction(evt.detail)}>
        <span slot="trigger-content">File</span>
        <forge-icon name="arrow_drop_down" slot="end"></forge-icon>

        <forge-ai-dropdown-menu-item value="new">
          New
          <forge-ai-dropdown-menu selection-mode="none">
            <forge-ai-dropdown-menu-item value="file">New File</forge-ai-dropdown-menu-item>
            <forge-ai-dropdown-menu-item value="folder">New Folder</forge-ai-dropdown-menu-item>
            <forge-ai-dropdown-menu-item value="project">
              New Project
              <forge-ai-dropdown-menu selection-mode="none">
                <forge-ai-dropdown-menu-item value="react">React App</forge-ai-dropdown-menu-item>
                <forge-ai-dropdown-menu-item value="vue">Vue App</forge-ai-dropdown-menu-item>
                <forge-ai-dropdown-menu-item value="angular">Angular App</forge-ai-dropdown-menu-item>
              </forge-ai-dropdown-menu>
            </forge-ai-dropdown-menu-item>
          </forge-ai-dropdown-menu>
        </forge-ai-dropdown-menu-item>

        <forge-ai-dropdown-menu-item value="open">Open File</forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="recent">
          Recent Files
          <forge-ai-dropdown-menu selection-mode="none">
            <forge-ai-dropdown-menu-item value="doc1">Document 1.txt</forge-ai-dropdown-menu-item>
            <forge-ai-dropdown-menu-item value="doc2">Document 2.txt</forge-ai-dropdown-menu-item>
            <forge-ai-dropdown-menu-item value="doc3">Document 3.txt</forge-ai-dropdown-menu-item>
          </forge-ai-dropdown-menu>
        </forge-ai-dropdown-menu-item>

        <forge-ai-dropdown-menu-separator></forge-ai-dropdown-menu-separator>

        <forge-ai-dropdown-menu-item value="exit">Exit</forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    \`;
  }
}`,...t.parameters?.docs?.source}}};const f=["Demo","WithGroups","WithNestedMenus"],A=Object.freeze(Object.defineProperty({__proto__:null,Demo:n,WithGroups:r,WithNestedMenus:t,__namedExportsOrder:f,default:c},Symbol.toStringTag,{value:"Module"}));export{A,n as D};
