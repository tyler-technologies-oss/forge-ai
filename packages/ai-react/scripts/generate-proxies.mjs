import { generateReactWrappers } from 'custom-element-react-wrappers';
import { pascalCase } from 'change-case';
import manifest from '@tylertech/forge-ai/custom-elements.json' with { type: 'json' };

// Filter out modules that don't have custom elements with tagNames
// This prevents generating React wrappers for base classes.
const filteredManifest = {
  ...manifest,
  modules: manifest.modules.filter(module => {
    // Only keep modules that have at least one class declaration with a tagName
    return module.declarations.some(d => d.kind === 'class' && d.customElement && d.tagName);
  })
};

// We need to rename the React component classes to better match the HTML element tag names.
// The plugin doesn't support that. So we'll modify the manifest in memory by renaming the
// element declaration class names to be based on the tag name instead.
filteredManifest.modules.forEach(module => {
  const componentDeclaration = module.declarations.find(d => d.kind === 'class' && d.customElement && d.tagName);
  if (componentDeclaration) {
    componentDeclaration.name = pascalCase(componentDeclaration.tagName);
  }
});

generateReactWrappers(filteredManifest, {
  outdir: 'dist/',
  modulePath: (_className, tagName) => {
    const { path } = filteredManifest.modules.find(m => m.declarations.some(d => d.tagName === tagName));
    return path.replace(/^src\/lib\//, '@tylertech/forge-ai/').replace(/\/[^\/]+\.ts$/, '');
  }
});
