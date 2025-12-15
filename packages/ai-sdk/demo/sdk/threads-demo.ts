import { setupForgeComponents, DEFAULT_CONFIG } from './shared.js';
import type { FoundryThreadedChatbotComponent } from '../../src/ui/foundry-threaded-chatbot';
import '../../src/ui/foundry-threaded-chatbot';

setupForgeComponents();

const threadedChatbot = document.getElementById('threaded-chatbot') as FoundryThreadedChatbotComponent;
threadedChatbot.baseUrl = DEFAULT_CONFIG.baseUrl;
threadedChatbot.agentId = DEFAULT_CONFIG.agentId;
threadedChatbot.voiceInput = 'on';
threadedChatbot.fileUpload = 'off';

console.log('Threaded chatbot initialized');
console.log('Available methods:');
console.log('- createThread(): Promise<string>');
console.log('- loadThread(id): Promise<void>');
console.log('- deleteThread(id): Promise<void>');
console.log('- listThreads(): Promise<Thread[]>');
console.log('- currentThreadId: string | undefined');

threadedChatbot.addEventListener('foundry-threaded-chatbot-thread-changed', (event: CustomEvent) => {
  console.log('Thread changed:', event.detail);
});

threadedChatbot.addEventListener('foundry-threaded-chatbot-thread-created', (event: CustomEvent) => {
  console.log('Thread created:', event.detail);
});

threadedChatbot.addEventListener('foundry-threaded-chatbot-thread-deleted', (event: CustomEvent) => {
  console.log('Thread deleted:', event.detail);
});

threadedChatbot.addEventListener('foundry-chatbot-ready', (event: CustomEvent) => {
  console.log('Chatbot ready:', event.detail);
});

threadedChatbot.addEventListener('foundry-chatbot-error', (event: CustomEvent) => {
  console.error('Chatbot error:', event.detail);
});

(window as any).threadDemo = {
  createThread: async (): Promise<string> => {
    const threadId = await threadedChatbot.createThread();
    console.log('Created thread:', threadId);
    return threadId;
  },
  loadThread: async (threadId: string): Promise<void> => {
    await threadedChatbot.loadThread(threadId);
    console.log('Loaded thread:', threadId);
  },
  deleteThread: async (threadId: string): Promise<void> => {
    await threadedChatbot.deleteThread(threadId);
    console.log('Deleted thread:', threadId);
  },
  listThreads: async (): Promise<any[]> => {
    const threads = await threadedChatbot.listThreads();
    console.log('Threads:', threads);
    return threads;
  },
  getCurrentThreadId: (): string | undefined => {
    const threadId = threadedChatbot.currentThreadId;
    console.log('Current thread ID:', threadId);
    return threadId;
  }
};

console.log('Thread management methods available via window.threadDemo:');
console.log('- threadDemo.createThread()');
console.log('- threadDemo.loadThread(id)');
console.log('- threadDemo.deleteThread(id)');
console.log('- threadDemo.listThreads()');
console.log('- threadDemo.getCurrentThreadId()');
