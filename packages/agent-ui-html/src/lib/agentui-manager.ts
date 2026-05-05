import {
  setByPath,
  createCompiler,
  createRenderTool,
  type Spec,
  type ActionEvent,
  type ToolDefinition,
  type Catalog
} from '@tylertech/agent-ui-core';

export interface AgentUIManagerConfig {
  catalog: Catalog;
  onSpecChange?: (spec: Spec | null) => void;
  onStateChange?: (state: Record<string, unknown>) => void;
  onAction?: (event: ActionEvent) => void;
}

export class AgentUIManager {
  #spec: Spec | null = null;
  #state: Record<string, unknown> = {};
  #loading = false;
  #tools: ToolDefinition[];
  #config: AgentUIManagerConfig;
  #specCompiler: ReturnType<typeof createCompiler>;

  public constructor(config: AgentUIManagerConfig) {
    this.#config = config;
    this.#specCompiler = createCompiler();
    this.#tools = [
      createRenderTool({
        specCompiler: this.#specCompiler,
        catalog: config.catalog,
        onRender: spec => {
          this.spec = spec;
        }
      })
    ];
  }

  public get spec(): Spec | null {
    return this.#spec;
  }

  public set spec(value: Spec | null) {
    this.#spec = value;
    this.#config.onSpecChange?.(value);
  }

  public get state(): Record<string, unknown> {
    return this.#state;
  }

  public set state(value: Record<string, unknown>) {
    this.#state = value;
    this.#config.onStateChange?.(value);
  }

  public get loading(): boolean {
    return this.#loading;
  }

  public set loading(value: boolean) {
    this.#loading = value;
  }

  public get tools(): ToolDefinition[] {
    return this.#tools;
  }

  public patchState(path: string, value: unknown): void {
    const newState = { ...this.#state };
    setByPath(newState, path, value);
    this.state = newState;
  }

  public reset(): void {
    this.#spec = null;
    this.#state = {};
    this.#config.onSpecChange?.(null);
    this.#config.onStateChange?.({});
  }

  public handleAction(event: ActionEvent): void {
    this.#config.onAction?.(event);
  }
}
