import '../../lib/ai-chat-history';
import '../../lib/ai-chat-header';
import '../../lib/ai-chatbot';
import '../../lib/ai-chat-interface';
import '../../lib/ai-prompt';
import '../../lib/ai-voice-input';
import '../../lib/ai-file-picker';

const CHATBOT = document.querySelector('forge-ai-chatbot');

// Sample chat history threads
const chatThreads = [
  {
    id: '1',
    title: 'How to implement authentication',
    timestamp: Date.now() - 86400000 // 1 day ago
  },
  {
    id: '2',
    title: 'Best practices for React hooks',
    timestamp: Date.now() - 172800000 // 2 days ago
  },
  {
    id: '3',
    title: 'Setting up TypeScript configuration',
    timestamp: Date.now() - 259200000 // 3 days ago
  },
  {
    id: '4',
    title: 'Debugging memory leaks in Node.js',
    timestamp: Date.now() - 345600000 // 4 days ago
  },
  {
    id: '5',
    title: 'CSS Grid vs Flexbox comparison',
    timestamp: Date.now() - 432000000 // 5 days ago
  },
  {
    id: '6',
    title: 'Understanding async/await patterns',
    timestamp: Date.now() - 518400000 // 6 days ago
  },
  {
    id: '7',
    title: 'Web Components best practices',
    timestamp: Date.now() - 604800000 // 7 days ago
  },
  {
    id: '8',
    title: 'Performance optimization techniques',
    timestamp: Date.now() - 691200000 // 8 days ago
  }
];

// Assign the threads to the chatbot
if (CHATBOT) {
  CHATBOT.chatHistory = chatThreads;
  // Test empty state by uncommenting the line below
  // CHATBOT.chatHistory = [];
}
