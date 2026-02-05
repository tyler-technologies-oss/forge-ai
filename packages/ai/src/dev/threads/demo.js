import '../../lib/ai-threads/ai-thread-container';
import '../../lib/ai-chat-header';
import '../../lib/ai-chatbot';
import '../../lib/ai-chat-interface';
import '../../lib/ai-prompt';
import '../../lib/ai-voice-input';
import '../../lib/ai-file-picker';

const TC = document.querySelector('forge-ai-thread-container');
const CHATBOT = document.querySelector('forge-ai-chatbot');

TC.addEventListener('forge-ai-thread-container-layout-change', event => {
  if (event.detail.narrow) {
    CHATBOT.showHistoryButton = true;
    CHATBOT.addEventListener('forge-ai-chat-header-toggle-history', () => {
      TC.toggleHistoryDrawer();
    });
  }
});
