# @tylertech/forge-ai

## 0.13.10

### Patch Changes

- 2f6452e: fix(tool-call): fix tool call artifact spacing

## 0.13.9

### Patch Changes

- 5440757: fix(chatbot): remove internal tools cache to support dynamic tools

## 0.13.8

### Patch Changes

- ab84d27: feat(ai-thinking-indicator): update status messages for improved user feedback
- 6b2318d: feat(ai-threads): add selectedThreadId property for managing active thread selection

## 0.13.7

### Patch Changes

- 6f1d5f4: feat(ai-chatbot): add conversation-related event data types to exports
- 2eafa07: feat(ai-chatbot): add selectedThreadId property to manage active conversation thread
- be2b248: fix(ai-chat-header): update condition for rendering dropdown menu separator

## 0.13.6

### Patch Changes

- 6a831f0: feat(chatbot): add new CSS var to control header title color
- 1ad8d51: fix(data-table): render raw <a> text as HTML
- 6a831f0: feat(chatbot): expose clearOption property
- 7f0a6dc: feat(ai-tool-call-indicator): remove description and fix rendering artifacts
- 1ad8d51: fix(markdown): render tables and code blocks as scrollable

## 0.13.5

### Patch Changes

- 351ccd4: fix(ai-message-thread): render user markdown as complete content

## 0.13.4

### Patch Changes

- aa3c5c6: fix(message-thread): improve auto-scroll handling
- 5f12ca9: feat(chatbot): update thread name display logic with conditional rendering
- 8a5577c: fix(chatbot): fix error message content wrapping
- 04a5c34: feat(launcher): increase default font-size
- fc32709: feat(chatbot): add export option control to chatbot components
- a1aa22d: feat(chatbot): remove default empty state logo
- 03056d5: refactor(chatbot): update tool call UX and debug mode integration
- 1439791: feat: expose maxFileSize and acceptedFileTypes for file picker through chatbot base
- 8a5577c: feat(data-table): add CSV export button

## 0.13.2

### Patch Changes

- e375fac: fix(ai-dialog): use fixed positioning to avoid scrolling
- f46a425: fix(chatbot): add markdown table styling
- 0e21447: feat(launcher): allow for showing thread name via configuration
- ab42926: feat: added new threads and threads-search components
- 13e3bf0: feat(chatbot): add support for conversations
- 1ad03fd: refactor(agent-info): update agent info dialog values and layout
- 9f2e513: feat(chatbot): support generic context items
- ab42926: feat(chatbot): added `startNewChat()` method
- 10335c4: feat(sidebar): add resizable support
