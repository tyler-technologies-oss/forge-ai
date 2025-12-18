import { generateReactWrappers } from 'custom-element-react-wrappers';
import { pascalCase } from 'change-case';
import manifest from '../custom-elements.json' with { type: 'json' };

// We need to rename the React component classes to better match the HTML element tag names.
// The plugin doesn't support that. So we'll modify the manifest in memory by renaming the
// element declaration class names to be based on the tag name instead.
manifest.modules.forEach(module => {
  const componentDeclaration = module.declarations.find(d => d.kind === 'class' && d.customElement && d.tagName);
  if (componentDeclaration) {
    componentDeclaration.name = pascalCase(componentDeclaration.tagName);
  }
});

generateReactWrappers(manifest, {
  outdir: 'dist/react/',
  modulePath: (_className, tagName) => `../ui/${tagName}/${tagName}.js`
});
