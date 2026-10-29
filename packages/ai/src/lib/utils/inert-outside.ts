/** The element's siblings and parent in the flat tree, crossing slots and shadow roots. */
function flatLevel(element: Element): { siblings: Element[]; parent: Element | null } {
  if (element.assignedSlot) {
    return { siblings: element.assignedSlot.assignedElements(), parent: element.assignedSlot };
  }
  if (element.parentElement) {
    return { siblings: [...element.parentElement.children], parent: element.parentElement };
  }
  const root = element.getRootNode();
  return root instanceof ShadowRoot
    ? { siblings: [...root.children], parent: root.host }
    : { siblings: [], parent: null };
}

/**
 * Marks everything outside `element` inert, as a modal would, without moving it in the DOM.
 * `inert` on an ancestor would disable `element` too (even in the top layer), so this marks
 * the siblings at each level up through shadow roots instead. Returns a restore function that
 * clears only the elements this call made inert.
 */
export function inertOutside(element: Element): () => void {
  const marked: HTMLElement[] = [];
  let current: Element | null = element;
  while (current) {
    const { siblings, parent } = flatLevel(current);
    for (const sibling of siblings) {
      if (sibling !== current && sibling instanceof HTMLElement && !sibling.inert) {
        sibling.inert = true;
        marked.push(sibling);
      }
    }
    current = parent;
  }
  return () => marked.forEach(sibling => (sibling.inert = false));
}
