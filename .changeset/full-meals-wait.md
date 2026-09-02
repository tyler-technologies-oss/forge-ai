---
'@tylertech/forge-ai-react': minor
'@tylertech/forge-ai': minor
---

feat(launcher): add support for chat history

BREAKING: renamed thread-list API on `forge-ai-chatbot`/`forge-ai-conversations-panel` to match `forge-ai-chatbot-launcher`/`forge-ai-threads-search` vocabulary:
- `recentThreads` -> `threads`
- `showConversationRename`/`show-conversation-rename` -> `showThreadRename`/`show-thread-rename`
- `showConversationDelete`/`show-conversation-delete` -> `showThreadDelete`/`show-thread-delete`
- events `forge-ai-chatbot-conversation-{select,search,load-more,rename,delete}` -> `forge-ai-chatbot-thread-{select,search,load-more,rename,delete}`
- types `ForgeAiChatbotConversation*EventData` -> `ForgeAiChatbotThread*EventData`

`conversationsOpen`/`showConversations()`/`hideConversations()`/`toggleConversations()` are unchanged - they refer to the panel itself, not thread data.
