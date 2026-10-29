import{j as e,M as i}from"./blocks-BYZcTz10.js";import{useMDXComponents as s}from"./index-RBU1lV0J.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DYSaFelY.js";function t(r){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started/Client-Side Tools"}),`
`,e.jsx(n.h1,{id:"client-side-tools",children:"Client-Side Tools"}),`
`,e.jsx(n.p,{children:"Client-side tools extend your chatbot's capabilities by allowing the LLM to trigger custom actions or render interactive UI elements directly in the chat thread."}),`
`,e.jsx(n.h2,{id:"tool-types",children:"Tool Types"}),`
`,e.jsx(n.p,{children:"There are two types of client-side tools:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Execution Tools"}),": Perform actions when called (e.g., navigate within an app, create charts, send notifications)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Render Tools"}),": Display custom UI elements in the chat (e.g., data tables, forms, rich cards)"]}),`
`]}),`
`,e.jsx(n.p,{children:"Tools can have both capabilities if needed."}),`
`,e.jsx(n.h2,{id:"tool-definition-structure",children:"Tool Definition Structure"}),`
`,e.jsxs(n.p,{children:["Every tool is defined using the ",e.jsx(n.code,{children:"ToolDefinition"})," interface:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface ToolDefinition<TArgs = Record<string, unknown>, TResult = string | Record<string, unknown>> {
  name: string; // Unique identifier
  displayName?: string; // Human-readable name (for tool debugging UI)
  description?: string; // Tells the LLM what this tool does
  parameters?: {
    // JSON Schema format
    type: 'object';
    properties?: Record<string, unknown>;
    required?: string[];
  };
  // Execution handler; its return value becomes \`toolCall.result\`
  handler?(context: HandlerContext<TArgs>): Promise<TResult | void> | TResult | void;
  // For displaying UI in the chat
  renderer?: ToolRenderer;
  // Opt-in to the artifact canvas in hosts that provide one (see below)
  canvas?: ToolCanvasConfig<TArgs, TResult>;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TArgs"})," is the shape of the arguments the LLM sends and ",e.jsx(n.code,{children:"TResult"})," is what your handler returns. Both flow through the handler and the canvas mappers, so a fully typed tool never needs a cast. Both are optional, and tools written without them keep compiling. ",e.jsx(n.code,{children:"renderer"})," is intentionally loosely typed so any ",e.jsx(n.code,{children:"ToolRenderer"}),", including one whose ",e.jsx(n.code,{children:"render"})," takes a plain ",e.jsx(n.code,{children:"ToolCall"}),", fits on any ",e.jsx(n.code,{children:"ToolDefinition<TArgs>"}),"; annotate ",e.jsx(n.code,{children:"render"})," with ",e.jsx(n.code,{children:"ToolCall<TArgs, TResult>"})," when you want its argument typed."]}),`
`,e.jsx(n.h2,{id:"registering-tools",children:"Registering Tools"}),`
`,e.jsx(n.p,{children:"Register tools with your adapter by passing them in the configuration:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { AgUiAdapter } from '@tylertech/forge-ai';

const adapter = new AgUiAdapter({
  url: 'your-api-url',
  tools: [helloTool, displayCardTool] // Your tool definitions
});
`})}),`
`,e.jsx(n.p,{children:"Once registered, the LLM can invoke these tools based on the conversation context."}),`
`,e.jsx(n.h2,{id:"execution-tools",children:"Execution Tools"}),`
`,e.jsxs(n.p,{children:["Execution tools perform actions when called. They require a ",e.jsx(n.code,{children:"handler"})," function that receives a ",e.jsx(n.code,{children:"HandlerContext"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface HandlerContext<TArgs> {
  args: TArgs; // Tool call arguments
  toolCallId: string; // Unique identifier
  toolName: string; // Name of the tool
  signal?: AbortSignal; // For cancellation support
}
`})}),`
`,e.jsx(n.h3,{id:"example-simple-greeting-tool",children:"Example: Simple Greeting Tool"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { type ToolDefinition } from '@tylertech/forge-ai';

const helloTool: ToolDefinition = {
  name: 'sayHello',
  displayName: 'Say Hello',
  description: 'Greets the user with a custom message',
  parameters: {
    type: 'object',
    properties: {
      name: { type: 'string', description: 'Name to greet' }
    },
    required: ['name']
  },
  handler: async context => {
    console.log(\`Hello, \${context.args.name}!\`);
    return \`Greeted \${context.args.name}\`;
  }
};
`})}),`
`,e.jsx(n.p,{children:"Handlers can be asynchronous and return a string, object, or void. The return value is sent back to the LLM as the tool result."}),`
`,e.jsx(n.h2,{id:"render-tools",children:"Render Tools"}),`
`,e.jsxs(n.p,{children:["Render tools display custom UI in the chat thread. They require a ",e.jsx(n.code,{children:"renderer"})," property created with the ",e.jsx(n.code,{children:"createToolRenderer()"})," helper:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { createToolRenderer, type ToolDefinition } from '@tylertech/forge-ai';

const displayCardTool: ToolDefinition = {
  name: 'displayCard',
  displayName: 'Display Card',
  description: 'Display a card with title and content',
  parameters: {
    type: 'object',
    properties: {
      title: { type: 'string', description: 'Card title' },
      content: { type: 'string', description: 'Card content' }
    },
    required: ['title', 'content']
  },
  renderer: createToolRenderer({
    elementTag: 'my-card-element' // Your custom element tag
  })
};
`})}),`
`,e.jsx(n.h2,{id:"creating-custom-renderer-components",children:"Creating Custom Renderer Components"}),`
`,e.jsxs(n.p,{children:["For render tools, create a custom element that implements the ",e.jsx(n.code,{children:"IToolRenderer<TArgs>"})," interface. We recommend using ",e.jsx(n.a,{href:"https://lit.dev",rel:"nofollow",children:"Lit"})," for its simplicity and built-in Shadow DOM encapsulation."]}),`
`,e.jsx(n.h3,{id:"custom-element-pattern",children:"Custom Element Pattern"}),`
`,e.jsx(n.p,{children:"Your renderer component must:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Implement ",e.jsx(n.code,{children:"IToolRenderer<TArgs>"})]}),`
`,e.jsxs(n.li,{children:["Accept a ",e.jsx(n.code,{children:"toolCall"})," property of type ",e.jsx(n.code,{children:"ToolCall<TArgs>"})]}),`
`,e.jsxs(n.li,{children:["Extract and render data from ",e.jsx(n.code,{children:"toolCall.args"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { type IToolRenderer, type ToolCall } from '@tylertech/forge-ai';

interface CardData {
  title: string;
  content: string;
}

@customElement('my-card-element')
export class MyCardElement extends LitElement implements IToolRenderer<CardData> {
  @property({ attribute: false })
  public toolCall!: ToolCall<CardData>;

  render() {
    const { title, content } = this.toolCall.args;

    return html\`
      <div style="border: 1px solid #ccc; padding: 16px; border-radius: 8px;">
        <h3>\${title}</h3>
        <p>\${content}</p>
      </div>
    \`;
  }
}

// Register in global scope
declare global {
  interface HTMLElementTagNameMap {
    'my-card-element': MyCardElement;
  }
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),": While vanilla custom elements or basic DOM elements work, we recommend using Lit for Shadow DOM encapsulation, reactive state management, and cleaner templating."]}),`
`]}),`
`,e.jsx(n.h2,{id:"combining-handler-and-renderer",children:"Combining Handler and Renderer"}),`
`,e.jsxs(n.p,{children:["Tools can have both a handler and renderer when you need to perform an action ",e.jsx(n.em,{children:"and"})," display UI. This is powerful for fetching data, processing arguments, or enriching LLM-provided data before rendering."]}),`
`,e.jsx(n.h3,{id:"execution-flow",children:"Execution Flow"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Handler executes first"})," - Performs action, returns result"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Result stored"})," - Handler return value saved to ",e.jsx(n.code,{children:"toolCall.result"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Renderer displays"})," - Component receives full ",e.jsx(n.code,{children:"ToolCall"})," with both ",e.jsx(n.code,{children:"args"})," and ",e.jsx(n.code,{children:"result"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"example-fetching-and-displaying-data",children:"Example: Fetching and Displaying Data"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface UserLookupArgs {
  userId: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const userLookupTool: ToolDefinition<UserLookupArgs, UserData> = {
  name: 'lookupUser',
  description: 'Fetch and display user information',
  parameters: {
    type: 'object',
    properties: {
      userId: { type: 'string', description: 'User ID to lookup' }
    },
    required: ['userId']
  },
  handler: async context => {
    // Fetch user data from API
    const response = await fetch(\`/api/users/\${context.args.userId}\`);
    const userData: UserData = await response.json();

    // Return fetched data; typed as UserData, so a wrong shape is a compile error
    return userData;
  },
  renderer: createToolRenderer({
    elementTag: 'user-profile-card'
  })
};
`})}),`
`,e.jsx(n.h3,{id:"accessing-handler-results-in-renderer",children:"Accessing Handler Results in Renderer"}),`
`,e.jsxs(n.p,{children:["The renderer component can access both the original arguments and the handler's return value. Pass the same two type parameters to ",e.jsx(n.code,{children:"IToolRenderer"})," and ",e.jsx(n.code,{children:"ToolCall"})," and ",e.jsx(n.code,{children:"result"})," is typed too:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`@customElement('user-profile-card')
export class UserProfileCard extends LitElement implements IToolRenderer<UserLookupArgs, UserData> {
  @property({ attribute: false })
  public toolCall!: ToolCall<UserLookupArgs, UserData>;

  render() {
    // Access original LLM arguments
    const userId = this.toolCall.args.userId;

    // Access data returned by handler (undefined until the handler resolves)
    const userData = this.toolCall.result;

    if (!userData) {
      return html\`<p>Loading user \${userId}...</p>\`;
    }

    return html\`
      <div class="user-card">
        <img src="\${userData.avatar}" alt="\${userData.name}" />
        <h3>\${userData.name}</h3>
        <p>\${userData.email}</p>
      </div>
    \`;
  }
}
`})}),`
`,e.jsx(n.p,{children:"This pattern enables:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"API calls"}),": Fetch data in handler, display in renderer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data processing"}),": Transform/enrich LLM args in handler"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"External integrations"}),": Call third-party services, show results"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validation"}),": Verify data before rendering"]}),`
`]}),`
`,e.jsx(n.h2,{id:"type-safety",children:"Type Safety"}),`
`,e.jsx(n.p,{children:"Tools support TypeScript generics for type-safe argument handling:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface GreetingArgs {
  name: string;
  greeting?: string;
}

const typedHelloTool: ToolDefinition<GreetingArgs> = {
  name: 'typedHello',
  description: 'Type-safe greeting tool',
  parameters: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      greeting: { type: 'string' }
    },
    required: ['name']
  },
  handler: async context => {
    // context.args is typed as GreetingArgs
    const greeting = context.args.greeting || 'Hello';
    return \`\${greeting}, \${context.args.name}!\`;
  }
};
`})}),`
`,e.jsxs(n.p,{children:["Similarly, renderer components can use typed ",e.jsx(n.code,{children:"ToolCall<TArgs>"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`@customElement('my-element')
export class MyElement extends LitElement implements IToolRenderer<GreetingArgs> {
  @property({ attribute: false })
  public toolCall!: ToolCall<GreetingArgs>;

  render() {
    // toolCall.args is typed as GreetingArgs
    return html\`<p>\${this.toolCall.args.name}</p>\`;
  }
}
`})}),`
`,e.jsx(n.h3,{id:"registering-typed-tools",children:"Registering Typed Tools"}),`
`,e.jsxs(n.p,{children:["Adapters and components accept ",e.jsx(n.code,{children:"AnyToolDefinition[]"}),", a type-erased alias that every ",e.jsx(n.code,{children:"ToolDefinition<TArgs, TResult>"})," is assignable to. Typed and untyped tools mix freely in one list:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { AgUiAdapter, type AnyToolDefinition } from '@tylertech/forge-ai';

const tools: AnyToolDefinition[] = [typedHelloTool, userLookupTool, displayDataTableTool];
const adapter = new AgUiAdapter({ url: 'your-api-url', tools });
`})}),`
`,e.jsxs(n.p,{children:["Callbacks on a tool definition are deliberately bivariant in their argument type so this works. Inside the library the tool call is dispatched by ",e.jsx(n.code,{children:"name"}),", so the erasure is a typing convenience, not a runtime change."]}),`
`,e.jsxs(n.p,{children:["Existing code needs no changes: ",e.jsx(n.code,{children:"TResult"})," defaults to the union handlers could return before it was a parameter, and ",e.jsx(n.code,{children:"ToolDefinition<TArgs>"})," with a single type argument behaves as it always has. Declaring argument types with ",e.jsx(n.code,{children:"type"})," rather than ",e.jsx(n.code,{children:"interface"})," is still what lets a ",e.jsx(n.code,{children:"ToolDefinition<TArgs>"})," be stored in a plain ",e.jsx(n.code,{children:"ToolDefinition[]"}),"; ",e.jsx(n.code,{children:"AnyToolDefinition[]"})," removes that restriction."]}),`
`,e.jsx(n.h2,{id:"canvas-and-artifact-card",children:"Canvas and Artifact Card"}),`
`,e.jsxs(n.p,{children:["Hosts with an artifact canvas (currently ",e.jsx(n.code,{children:"<forge-ai-chatbot-launcher>"}),") can show a tool's output in a panel beside the conversation and represent it in the thread with a compact ",e.jsx(n.code,{children:"<forge-ai-artifact-card>"}),". A tool opts in with the ",e.jsx(n.code,{children:"canvas"})," block. Every value in it is either static or a function of the ",e.jsx(n.code,{children:"ToolCall"}),", so it can come from the agent's ",e.jsx(n.code,{children:"args"})," or from your handler's ",e.jsx(n.code,{children:"result"}),":"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Field"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Used for"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"open"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'auto' | 'on-request'"})}),e.jsxs(n.td,{children:["When the canvas opens (",e.jsx(n.code,{children:"auto"}),": launcher only)"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'on-request'"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"inline"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'renderer' | 'card' | 'card-while-open'"})}),e.jsx(n.td,{children:"What the thread shows"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"'card'"})," for ",e.jsx(n.code,{children:"auto"}),", else ",e.jsx(n.code,{children:"'renderer'"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"renderer"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ToolRenderer"})}),e.jsx(n.td,{children:"Renderer used inside the canvas"}),e.jsxs(n.td,{children:["The tool's ",e.jsx(n.code,{children:"renderer"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string | (toolCall) => string"})}),e.jsx(n.td,{children:"Canvas header and card title"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"displayName"}),", then ",e.jsx(n.code,{children:"name"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"subtitle"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string | (toolCall) => string"})}),e.jsx(n.td,{children:"Card subtitle"}),e.jsx(n.td,{children:"none"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"icon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"SVGElement | string | (toolCall) => …"})}),e.jsx(n.td,{children:"Card icon; markup strings are sanitized"}),e.jsx(n.td,{children:"Generic artifact glyph"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"actionLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ open, collapse } | (toolCall) => …"})}),e.jsx(n.td,{children:"Card tooltip and accessible label per state"}),e.jsx(n.td,{children:'"Open in canvas" / "Collapse canvas"'})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface ReportArgs {
  title: string;
  kind: 'report' | 'query';
  summary?: string; // Ask the agent for a one-line summary in \`parameters\`
}

interface ReportResult {
  chartCount: number;
}

const reportTool: ToolDefinition<ReportArgs, ReportResult> = {
  name: 'buildReport',
  parameters: {/* title, kind, summary */},
  handler: async context => generateReport(context.args),
  renderer: createToolRenderer({ elementTag: 'my-report-view' }),
  canvas: {
    inline: 'card-while-open',
    title: toolCall => toolCall.args.title,
    subtitle: toolCall => toolCall.args.summary ?? \`\${toolCall.result?.chartCount ?? 0} charts\`,
    icon: toolCall => (toolCall.args.kind === 'report' ? reportIconSvg : queryIconSvg),
    actionLabel: toolCall => ({ open: \`Open \${toolCall.args.kind}\`, collapse: \`Collapse \${toolCall.args.kind}\` })
  }
};
`})}),`
`,e.jsxs(n.p,{children:["Because ",e.jsx(n.code,{children:"ToolDefinition<ReportArgs, ReportResult>"})," is typed, ",e.jsx(n.code,{children:"toolCall.args"})," and ",e.jsx(n.code,{children:"toolCall.result"})," are typed inside every mapper with no casts. Result-derived values are ",e.jsx(n.code,{children:"undefined"})," until the handler resolves, so give them a fallback as above."]}),`
`,e.jsxs(n.p,{children:["Icons may be an ",e.jsx(n.code,{children:"<svg>"})," element or an SVG markup string. Strings are parsed and reduced to an allowlist before being slotted: only ",e.jsx(n.code,{children:"svg"}),", ",e.jsx(n.code,{children:"g"}),", ",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"circle"}),", ",e.jsx(n.code,{children:"ellipse"}),", ",e.jsx(n.code,{children:"rect"}),", ",e.jsx(n.code,{children:"line"}),", ",e.jsx(n.code,{children:"polyline"}),", and ",e.jsx(n.code,{children:"polygon"})," elements survive, with geometry and presentation attributes such as ",e.jsx(n.code,{children:"viewBox"}),", ",e.jsx(n.code,{children:"d"}),", ",e.jsx(n.code,{children:"fill"}),", ",e.jsx(n.code,{children:"stroke"}),", and ",e.jsx(n.code,{children:"transform"}),". Scripts, styles, animation, references, and event handlers are dropped. That makes agent-supplied markup safe to slot, but prefer mapping an agent-chosen ",e.jsx(n.code,{children:"kind"})," to icons you own. Keep the artifact type in ",e.jsx(n.code,{children:"actionLabel"}),' ("Open report" rather than "Open") so users comparing several cards can tell them apart.']}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"?path=/docs/ai-components-form-factors-launcher--docs",children:"Launcher docs"})," for how the canvas behaves and the ",e.jsx(n.a,{href:"?path=/docs/ai-components-primitives-artifact-card--docs",children:"Artifact Card docs"})," for the card itself."]}),`
`,e.jsx(n.h2,{id:"real-world-use-cases",children:"Real-World Use Cases"}),`
`,e.jsx(n.p,{children:"Client-side tools are perfect for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data Visualization"}),": Display tables, charts, graphs from structured data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Interactive Forms"}),": Render forms for user input within the conversation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Media Display"}),": Show images, videos, or audio players"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom Actions"}),": Trigger animations, notifications, or third-party integrations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rich Content Cards"}),": Display products, recipes, articles with formatting"]}),`
`]}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use descriptive names"}),": Help the LLM understand when to use each tool"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Provide clear descriptions"}),": Explain the tool's purpose and when to use it"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Define detailed parameters"}),": Use JSON Schema to document expected arguments"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Implement type safety"}),": Use TypeScript generics for better DX"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prefer custom elements"}),": Use Lit or vanilla custom elements for render tools"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test thoroughly"}),": Verify tools work with various LLM-generated arguments"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Handle errors gracefully"}),": Return meaningful error messages from handlers"]}),`
`]})]})}function h(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{h as default};
