# @tylertech/forge-ai

## 0.9.0

### Minor Changes

- 90d663d: Refactored the assistant response rendering to ensure linear output with tool calls and other events

### Patch Changes

- c948d62: Simplify slot patterns in AI components
  - **AiChatHeader**: Simplified icon slot to use default slotted content pattern instead of conditional rendering
  - **AiEmptyState**: Simplified message and icon slots to use default slotted content pattern, removed useCustomMessage property and related logic

- b1aabc5: added new chatbot component and adent adapter/runner support
