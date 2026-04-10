import { defineSchema } from '@json-render/core';

/**
 * Default schema for GenUI specs.
 * Uses a flat element tree structure with:
 * - root: key of the root element
 * - elements: map of element keys to element definitions
 * - state: optional initial state
 */
export const defaultSchema = defineSchema(s => ({
  spec: s.object({
    root: s.string(),
    elements: s.record(
      s.object({
        type: s.ref('catalog.components'),
        props: s.propsOf('catalog.components'),
        children: { ...s.array(s.string()), ...s.optional() },
        visible: { ...s.any(), ...s.optional() }
      })
    ),
    state: { ...s.record(s.any()), ...s.optional() }
  }),
  catalog: s.object({
    components: s.map({
      props: s.zod(),
      slots: { ...s.array(s.string()), ...s.optional() },
      description: { ...s.string(), ...s.optional() }
    }),
    actions: {
      ...s.map({
        params: { ...s.zod(), ...s.optional() },
        description: { ...s.string(), ...s.optional() }
      }),
      ...s.optional()
    }
  })
}));

export type DefaultSchema = typeof defaultSchema;
