import type { ToolCallEvent } from './agent-adapter.js';
import type { ToolDefinition } from './types.js';

export type ToolHandler<TArgs = Record<string, unknown>, TResult = unknown> = (
  args: TArgs
) => Promise<TResult> | TResult;

export class ToolRegistry {
  #handlers = new Map<string, ToolHandler>();
  #definitions: ToolDefinition[] = [];

  public register<TArgs = Record<string, unknown>, TResult = unknown>(
    definition: ToolDefinition,
    handler: ToolHandler<TArgs, TResult>
  ): this {
    this.#handlers.set(definition.name, handler as ToolHandler);
    this.#definitions.push(definition);
    return this;
  }

  public async execute(event: ToolCallEvent): Promise<unknown> {
    const handler = this.#handlers.get(event.name);
    if (!handler) {
      throw new Error(`No handler registered for tool: ${event.name}`);
    }

    try {
      return await handler(event.args);
    } catch (error) {
      const err = error as Error;
      throw new Error(`Tool execution failed for '${event.name}': ${err.message}`);
    }
  }

  public has(toolName: string): boolean {
    return this.#handlers.has(toolName);
  }

  public getDefinitions(): ToolDefinition[] {
    return [...this.#definitions];
  }

  public getDefinition(toolName: string): ToolDefinition | undefined {
    return this.#definitions.find(def => def.name === toolName);
  }

  public clear(): void {
    this.#handlers.clear();
    this.#definitions = [];
  }
}
