import { createToolRenderer, type ToolDefinition, type HandlerContext } from '../../../lib/ai-chatbot';
import '../chatbot/recipe-card.js';
import '../../../lib/tools/ai-data-table';
import { displayDataTableTool } from '../../../lib/tools/ai-data-table';

interface ConfettiArgs {
  particleCount?: number;
  spread?: number;
}

export const showConfettiTool: ToolDefinition<ConfettiArgs> = {
  name: 'showConfetti',
  displayName: 'Show Confetti',
  description:
    'Shows a confetti animation. Only call this tool when the user either explicitly requests confetti or when a celebration is appropriate!',
  parameters: {
    type: 'object' as const,
    properties: {
      particleCount: { type: 'number', description: 'Number of particles (default: 100)' },
      spread: { type: 'number', description: 'Spread angle in degrees (default: 70)' }
    }
  },
  handler: async (context: HandlerContext<ConfettiArgs>) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const confettiArgs = context.args;
    (window as any).confetti({
      particleCount: confettiArgs?.particleCount || 100,
      spread: confettiArgs?.spread || 100
    });

    return `Confetti animation displayed with ${confettiArgs?.particleCount || 100} particles and ${confettiArgs?.spread || 100}° spread`;
  }
};

export const displayRecipeTool: ToolDefinition = {
  name: 'displayRecipe',
  displayName: 'Display Recipe',
  description:
    'Display a recipe in a formatted card with ingredients and instructions. Use this tool when you want to present recipe information in a visually structured way.',
  parameters: {
    type: 'object' as const,
    properties: {
      title: { type: 'string', description: 'Recipe name' },
      description: { type: 'string', description: 'Brief description of the dish' },
      prepTime: { type: 'string', description: 'Preparation time (e.g., "15 minutes")' },
      cookTime: { type: 'string', description: 'Cooking time (e.g., "30 minutes")' },
      servings: { type: 'number', description: 'Number of servings' },
      ingredients: {
        type: 'array',
        items: { type: 'string' },
        description: 'List of ingredients with quantities'
      },
      instructions: {
        type: 'array',
        items: { type: 'string' },
        description: 'Step-by-step cooking instructions'
      }
    },
    required: ['title', 'prepTime', 'cookTime', 'servings', 'ingredients', 'instructions']
  },
  handler: async (context: HandlerContext) => {
    const { title, ingredients, instructions } = context.args;
    const ingredientsArray = ingredients as string[] | undefined;
    const instructionsArray = instructions as string[] | undefined;

    return `Recipe for "${title}" has been displayed with ${ingredientsArray?.length || 0} ingredients and ${instructionsArray?.length || 0} steps`;
  },
  renderer: createToolRenderer({
    elementTag: 'recipe-card'
  })
};

export { displayDataTableTool };

export const tools: Array<ToolDefinition<any>> = [showConfettiTool, displayRecipeTool, displayDataTableTool];
