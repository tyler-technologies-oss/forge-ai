import { type ToolDefinition } from '../../ai-chatbot';

export const CONFIRM_TOOL_CALL_NAME = 'confirmToolCall';

export interface ConfirmActionToolArgs {
  action: string;
}

export interface ConfirmActionToolResult {
  status: 'confirmed' | 'denied';
  action: string;
}

export const confirmActionTool: ToolDefinition<ConfirmActionToolArgs> = {
  name: CONFIRM_TOOL_CALL_NAME,
  displayName: 'Confirm Action',
  description:
    'Request user confirmation before executing a tool. The user will see a prompt with the action description and can confirm or deny. Use this tool before executing ANY other tools.',
  parameters: {
    type: 'object' as const,
    properties: {
      action: {
        type: 'string',
        description: 'A clear, user-friendly description of the action to be confirmed'
      }
    },
    required: ['action']
  }
};
