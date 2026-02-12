import '../../lib/ai-threads/ai-thread-container';
import '../../lib/ai-chat-history';
import '../../lib/ai-chat-header';
import '../../lib/ai-chatbot';
import '../../lib/ai-chat-interface';
import '../../lib/ai-prompt';
import '../../lib/ai-voice-input';
import '../../lib/ai-file-picker';

const TC = document.querySelector('forge-ai-thread-container');
const CHATBOT = document.querySelector('forge-ai-chatbot');
const CHAT_HISTORY = document.querySelector('#chat-history');

// Set up sample thread data
CHAT_HISTORY.threads = [
  { id: '1', title: 'History item 1', time: '10:00 AM', date: new Date('2024-01-01') },
  { id: '2', title: 'History item 2', time: '11:30 AM', date: new Date('2024-01-02') },
  { id: '3', title: 'History item 3', time: '2:15 PM', date: new Date('2024-01-03') },
  { id: '4', title: 'History item 4', time: '4:45 PM', date: new Date('2024-01-04') }
];

TC.addEventListener('forge-ai-thread-container-layout-change', event => {
  if (event.detail.narrow) {
    CHATBOT.showHistoryButton = true;
    CHATBOT.addEventListener('forge-ai-chat-header-toggle-history', () => {
      TC.toggleHistoryDrawer();
    });
  }
});
