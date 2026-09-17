import { type ToolDefinition, createToolRenderer } from '../../ai-chatbot';

export const displayStepsTool: ToolDefinition = {
  name: 'displaySteps',
  displayName: 'Display Steps',
  description:
    'Surface the sequence of steps you took while working on a request as a compact, expandable timeline. Call this when your answer involved multiple discrete actions — searching, filtering, joining, calculating — and showing that work helps the user trust the result. Provide the steps in the order they happened.',
  parameters: {
    type: 'object' as const,
    properties: {
      steps: {
        type: 'array',
        description: 'The steps taken, in the order they happened.',
        items: {
          type: 'object',
          properties: {
            label: {
              type: 'string',
              description:
                'Short past-tense description of the step, e.g. "Searched the orders table" or "Filtered by `crime_category`". This is the row title, so keep it to a few words. Inline markdown is supported — use `backticks` for identifiers such as columns, tables or query fragments, **bold** for a figure or outcome worth emphasizing, and *italics* or ~~strikethrough~~ where they help. Emphasize sparingly; a row where everything is bold reads the same as one where nothing is.'
            },
            detail: {
              type: 'string',
              description:
                'Optional elaboration shown beneath the label, e.g. the filter applied or the number of records matched. Supports the same inline markdown as "label". Omit for steps that need no explanation.'
            },
            status: {
              type: 'string',
              enum: ['pending', 'running', 'complete', 'error'],
              description: 'Outcome of the step. Defaults to "complete" when omitted.'
            }
          },
          required: ['label']
        }
      }
    },
    required: ['steps']
  },
  // Steps are a progress affordance, so the timeline needs to appear while arguments are still
  // streaming rather than only once the call settles.
  renderOnStart: true,
  renderer: createToolRenderer({
    elementTag: 'forge-ai-tool-steps'
  })
};
