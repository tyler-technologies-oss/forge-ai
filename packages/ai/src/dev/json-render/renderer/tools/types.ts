import type { Spec, SpecStreamCompiler } from '@json-render/core';

export interface SpecRendererState {
  spec: Spec | null;
  lastRenderedAt: string | null;
}

export interface ToolDependencies {
  specCompiler: SpecStreamCompiler<Spec>;
  renderSpec: (spec: Spec) => void;
  getState: () => SpecRendererState;
  setState: (state: SpecRendererState) => void;
  catalogDescription: string;
  processPatches: (
    specCompiler: SpecStreamCompiler<Spec>,
    patches: string,
    toolName: string,
    reset?: boolean
  ) => Spec;
}
