---
'@tylertech/forge-ai': minor
---

fix(markdown): harden sanitizer media handling. Breaking: images from outside the origin serving forge-ai render as links (call `setTrustedImageOrigin()` when bundled into the host page); `<video>`/`<audio>` render as links; `style`, `srcset`, `poster`, `background` attributes and `<picture>`/`<source>`/`<track>` are removed.
