# JSON-Render Architecture

This document describes how the json-render demo generates declarative UI from LLM tool calls.

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                              JSON-RENDER ARCHITECTURE                                    │
└─────────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                    USER INTERFACE                                        │
│  ┌──────────────────────────────────┐         ┌────────────────────────────────────────┐│
│  │      <forge-ai-chatbot>          │         │          <forge-spec-renderer>         ││
│  │  ┌────────────────────────────┐  │         │  ┌──────────────────────────────────┐  ││
│  │  │    Chat Messages           │  │         │  │     Dynamically Generated UI     │  ││
│  │  │  ├─ User: "Show employee   │  │         │  │  ┌────────────────────────────┐  │  ││
│  │  │  │   list"                 │  │ ──────► │  │  │ <forge-card>               │  │  ││
│  │  │  ├─ AI: [renders UI]       │  │         │  │  │   <forge-list>             │  │  ││
│  │  │  └─ User: "Add filter"     │  │         │  │  │     <forge-list-item>      │  │  ││
│  │  └────────────────────────────┘  │         │  │  │       Alice - Engineer     │  │  ││
│  │  ┌────────────────────────────┐  │         │  │  │     </forge-list-item>     │  │  ││
│  │  │  [Message Input]       [↵] │  │         │  │  │   </forge-list>            │  │  ││
│  │  └────────────────────────────┘  │         │  │  │ </forge-card>              │  │  ││
│  └──────────────────────────────────┘         │  │  └────────────────────────────┘  │  ││
│                                               │  └──────────────────────────────────┘  ││
│                                               └────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────────────────┘
        │                                                         │
        │ 1. User sends message                                   │ 7. User clicks button
        ▼                                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                   MAIN.TS (Orchestration)                                │
│                                                                                          │
│   ┌─────────────────────────┐     ┌─────────────────────────────────────────────────┐   │
│   │   MastraStreamAdapter   │     │           SpecRendererController                │   │
│   │   ───────────────────   │     │           ──────────────────────                │   │
│   │ • url: /api/agents/...  │     │ • tools: [render_ui]                            │   │
│   │ • tools: controller.tools    │ • registry: forgeRegistry                       │   │
│   │ • threadId              │     │ • onLoading: (loading) => ...                   │   │
│   │ • setContext({          │     │ • onRender: () => hideEmptyState()              │   │
│   │     uiState,            │     │ • attach(rendererEl)                            │   │
│   │     employeeData,       │     └─────────────────────────────────────────────────┘   │
│   │     componentCatalog    │                                                           │
│   │   })                    │                                                           │
│   └─────────────────────────┘                                                           │
│                                                                                          │
│   Event handlers:                                                                        │
│   • forge-ai-chatbot-run-started → setContext(), onLoading(true)                        │
│   • forge-spec-renderer-action → chatbot.sendMessage("User action: ...")                │
│   • forge-ai-chatbot-clear → controller.reset()                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘
        │                                       │
        │ 2. Stream to Mastra                   │ 3. Agent calls render_ui tool
        ▼                                       ▼
┌───────────────────────────────────┐  ┌─────────────────────────────────────────────────┐
│         MASTRA AGENT              │  │                  TOOLS                           │
│  ┌─────────────────────────────┐  │  │  ┌─────────────────────────────────────────┐    │
│  │  System Prompt + Context    │  │  │  │            render_ui                    │    │
│  │  ─────────────────────────  │  │  │  │  ─────────────────────────────────────  │    │
│  │  • componentCatalog (JSON)  │  │  │  │  Input: JSONL patches (streaming)       │    │
│  │  • uiState (current spec)   │  │  │  │                                         │    │
│  │  • employeeData (sample)    │  │  │  │  {"op":"add","path":"/root","value":"x"}│    │
│  └─────────────────────────────┘  │  │  │  {"op":"add","path":"/elements/x",...}  │    │
│               │                   │  │  │                                         │    │
│               ▼                   │  │  │  → processPatches() → spec              │    │
│  ┌─────────────────────────────┐  │  │  │  → renderSpec(spec)                     │    │
│  │  LLM decides to call        │  │  │  └─────────────────────────────────────────┘    │
│  │  render_ui with patches     │──┼──│                                                  │
│  └─────────────────────────────┘  │  │  (patch_ui tool works similarly but doesn't     │
└───────────────────────────────────┘  │   reset the spec first)                          │
                                       └─────────────────────────────────────────────────┘
                                                        │
                                                        │ 4. Process patches
                                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                         SPEC COMPILATION (controller.ts)                                 │
│                                                                                          │
│   ┌─────────────────────────────────────────────────────────────────────────────────┐   │
│   │                        processPatches()                                          │   │
│   │   ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────────────────┐   │   │
│   │   │ normalizeJsonl  │ → │ specCompiler    │ → │  autoFixSpec + validateSpec │   │   │
│   │   │ (parse JSONL)   │   │ .push(patches)  │   │  (from @json-render/core)   │   │   │
│   │   └─────────────────┘   └─────────────────┘   └─────────────────────────────┘   │   │
│   └─────────────────────────────────────────────────────────────────────────────────┘   │
│                                            │                                             │
│   Input JSONL:                             │   Output Spec (JsonRenderSpec):             │
│   {"op":"add","path":"/root","value":"c1"} │   {                                         │
│   {"op":"add","path":"/elements/c1",...}   │     root: "c1",                             │
│   {"op":"add","path":"/state/items",...}   │     elements: { c1: {...}, c2: {...} },     │
│                                            │     state: { items: [...] }                 │
│                                            │   }                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘
                                                        │
                                                        │ 5. Render spec
                                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                         FORGE SPEC RENDERER (renderer.ts)                                │
│                                                                                          │
│   ┌──────────────────────────────┐      ┌────────────────────────────────────────────┐  │
│   │  <forge-spec-renderer>       │      │              Rendering Pipeline            │  │
│   │  ────────────────────────    │      │  ──────────────────────────────────────    │  │
│   │  @property spec              │──────│  1. Get root element ID from spec.root     │  │
│   │  @property registry          │      │  2. Look up element in spec.elements       │  │
│   │  @property loading           │      │  3. Check visibility conditions            │  │
│   │  @state _state               │      │  4. Resolve $state bindings in props       │  │
│   │  #stateManager               │      │  5. Look up TemplateFactory in registry    │  │
│   │  #emit(action, payload)      │      │  6. Recursively render children            │  │
│   └──────────────────────────────┘      │  7. Call templateFn(context)               │  │
│                                         └────────────────────────────────────────────┘  │
│                                                                                          │
│   ┌────────────────────────────────────────────────────────────────────────────────┐    │
│   │                            State Management (state.ts)                          │    │
│   │   ┌─────────────────────┐    ┌─────────────────────┐    ┌─────────────────┐    │    │
│   │   │ get(path)           │    │ set(path, value)    │    │ resolve(value)  │    │    │
│   │   │ "/users/0/name"     │    │ triggers re-render  │    │ $state bindings │    │    │
│   │   └─────────────────────┘    └─────────────────────┘    └─────────────────┘    │    │
│   └────────────────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────────────────┘
                                                        │
                                                        │ 6. Look up template
                                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                         COMPONENT REGISTRY & TEMPLATES                                   │
│                                                                                          │
│   ┌─────────────────────────────┐         ┌────────────────────────────────────────┐    │
│   │  Registry (registry.ts)     │         │    TemplateFactory (components/*.ts)   │    │
│   │  ─────────────────────────  │         │    ────────────────────────────────    │    │
│   │  Map<string, TemplateFactory>         │    Button(ctx) {                       │    │
│   │  ─────────────────────────  │    ──►  │      const { label, action } = ctx.props│    │
│   │  "Text"     → Text          │         │      return html`                      │    │
│   │  "Button"   → Button        │         │        <forge-button                   │    │
│   │  "Card"     → Card          │         │          @click=${() => ctx.emit(action)}>│  │
│   │  "Stack"    → Stack         │         │          ${label}                      │    │
│   │  "List"     → List          │         │        </forge-button>                 │    │
│   │  "ListItem" → ListItem      │         │      `;                                │    │
│   │  "TextField"→ TextField     │         │    }                                   │    │
│   │  ...                        │         └────────────────────────────────────────┘    │
│   └─────────────────────────────┘                                                       │
│                                                                                          │
│   ┌─────────────────────────────────────────────────────────────────────────────────┐   │
│   │  ComponentContext (passed to each TemplateFactory)                               │   │
│   │  ─────────────────────────────────────────────────                               │   │
│   │  • props: resolved props (with $state bindings evaluated)                        │   │
│   │  • children: rendered child templates                                            │   │
│   │  • emit(action, payload): dispatch action events                                 │   │
│   │  • state: StateManager for reading/writing reactive state                        │   │
│   └─────────────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                         COMPONENT CATALOG (catalog.ts)                                   │
│                         Zod schemas sent to LLM as context                               │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐  │
│  │  componentSchemas = {                                                              │  │
│  │    Text:    { description: "Typography element...", props: TextProps },            │  │
│  │    Button:  { description: "Clickable button...",   props: ButtonProps },          │  │
│  │    Card:    { description: "Container card...",     props: CardProps, slots: [...] │  │
│  │    Stack:   { description: "Flexible layout...",    props: StackProps, slots: [...]}│  │
│  │    ...                                                                             │  │
│  │  }                                                                                 │  │
│  └───────────────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                   DATA FLOW SUMMARY                                      │
│                                                                                          │
│   1. User message → MastraStreamAdapter → Mastra Agent                                  │
│   2. Agent receives context: componentCatalog, uiState, employeeData                    │
│   3. Agent calls render_ui tool with JSONL patches                                      │
│   4. Controller processes patches → builds/validates spec                               │
│   5. ForgeSpecRenderer recursively renders spec using registry lookups                  │
│   6. User interacts → forge-spec-renderer-action event                                  │
│   7. Action forwarded to chatbot → sent back to agent → cycle continues                 │
│                                                                                          │
└─────────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                   KEY FILES                                              │
│                                                                                          │
│   main.ts              - Orchestration, wires chatbot ↔ adapter ↔ controller            │
│   renderer/                                                                              │
│   ├── types.ts         - Core interfaces: ComponentContext, TemplateFactory, ActionEvent│
│   ├── registry.ts      - Map of component names → TemplateFactory functions             │
│   ├── state.ts         - Reactive state with JSON Pointer paths                         │
│   ├── renderer.ts      - <forge-spec-renderer> Lit component                            │
│   ├── catalog.ts       - Zod schemas describing components for LLM                      │
│   ├── components/      - TemplateFactory implementations (Button, Card, List, etc.)     │
│   └── tools/                                                                             │
│       ├── controller.ts - SpecRendererController class, processPatches()                │
│       ├── render-ui.ts  - render_ui tool definition (replaces UI)                       │
│       └── patch-ui.ts   - patch_ui tool definition (modifies existing UI)               │
│                                                                                          │
│   External: @json-render/core - createSpecStreamCompiler, autoFixSpec, validateSpec     │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

## Key Concepts

### Streaming Pipeline
LLM outputs JSONL patches → `processPatches()` normalizes & compiles → `ForgeSpecRenderer` renders recursively

### Two-way Communication
User actions dispatch `forge-spec-renderer-action` events which main.ts forwards back to the agent as messages

### State Bindings
Props can use `{ $state: "/path" }` syntax for reactive data binding, resolved at render time

### Registry Pattern
Type names ("Button", "Card") map to TemplateFactory functions, extensible via `registry.register()`

### Context Propagation
Component catalog + current UI state sent to LLM before each run so it knows what's available and what's already rendered
