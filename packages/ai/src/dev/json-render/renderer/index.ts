/**
 * json-render: A system for LLMs to generate Forge UI via declarative JSON specs.
 *
 * Architecture:
 * - types: Core interfaces (re-exported from @json-render/core) plus Lit-specific types
 * - registry: Maps component type names to TemplateFactory functions
 * - state: Reactive state management with { $state: "/path" } bindings
 * - renderer: The <forge-spec-renderer> component that renders specs to DOM
 * - catalog: Zod schemas describing available components for LLM prompts
 * - components: Built-in TemplateFactory implementations for Forge components
 *
 * Note: Streaming compiler (createSpecStreamCompiler) is provided by @json-render/core
 */

export * from './types.js';
export * from './state.js';
export * from './registry.js';
export * from './renderer.js';
export * from './catalog.js';
export * from './components/index.js';
export * from './tools/index.js';
