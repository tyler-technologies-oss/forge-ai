import type { Spec, SpecStreamCompiler } from '@json-render/core';
import type { ProcessPatchesConfig } from './controller.js';

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
    config: ProcessPatchesConfig
  ) => Spec;
}
