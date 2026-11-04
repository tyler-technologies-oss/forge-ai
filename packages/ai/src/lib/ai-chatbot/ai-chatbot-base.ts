import { provide } from '@lit/context';
import { LitElement, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import type { Ref } from 'lit/directives/ref.js';
import type { AgentInfo } from '../ai-agent-info';
import type { ForgeAiChatHeaderAgentChangeEventData } from '../ai-chat-header';
import type { AiMessageThreadComponent } from '../ai-message-thread';
import type { ForgeAiAttachmentRemoveEventData } from '../ai-attachment';
import type { ForgeAiFilePickerChangeEventData, ForgeAiFilePickerErrorEventData } from '../ai-file-picker';
import type { AiPromptComponent, ForgeAiPromptCommandEventData, ForgeAiPromptSendEventData } from '../ai-prompt';
import type { ForgeAiSuggestionsEventData, Suggestion } from '../ai-suggestions';
import type { ForgeAiVoiceInputResultEvent } from '../ai-voice-input';
import {
  mcpAppHostContext,
  type McpAppHost,
  type McpAppViewRegistration
} from '../tools/ai-mcp-app/mcp-app-context.js';
import type { McpAppRequestResult } from '../tools/ai-mcp-app/mcp-app-bridge-types.js';
import { AgentAdapter } from './agent-adapter.js';
import { ChatbotCoreController } from '../core/chatbot-core-controller.js';
import type {
  Agent,
  ChatMessage,
  ClientMessageInput,
  ContextItem,
  HeadingLevel,
  McpAppHostCapabilities,
  McpAppHostContext,
  MessageItem,
  SlashCommand,
  SlashCommandId,
  ThreadState,
  ToolCall,
  AnyToolDefinition
} from './types.js';
import {
  createChatExportFilename,
  downloadFile,
  fileAttachmentsToContextItems,
  formatChatTranscript,
  generateId
} from './utils.js';
import type { ForgeAiMessageThreadThumbsEventData } from '../ai-message-thread';

/**
 * Capabilities the host implements itself. `serverTools` / `updateModelContext` are added
 * only when the adapter implements the matching hook; `serverResources` and `downloadFile`
 * are never advertised.
 */
function mcpAppHostCapabilities(adapter: AgentAdapter | undefined): McpAppHostCapabilities {
  return {
    openLinks: {},
    logging: {},
    message: { text: {} },
    ...(typeof adapter?.callMcpTool === 'function' ? { serverTools: {} } : {}),
    ...(typeof adapter?.updateMcpModelContext === 'function'
      ? { updateModelContext: { text: {}, structuredContent: {} } }
      : {})
  };
}

/** Environment fields of the MCP-app host context shared by every widget. */
function mcpAppEnvironment(): Omit<McpAppHostContext, 'theme'> {
  return {
    availableDisplayModes: ['inline', 'fullscreen', 'pip'],
    locale: navigator.language,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    userAgent: navigator.userAgent,
    platform: 'web',
    deviceCapabilities: {
      touch: window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0,
      hover: window.matchMedia('(hover: hover)').matches
    },
    safeAreaInsets: { top: 0, right: 0, bottom: 0, left: 0 }
  };
}

/** Joins a `ui/message`'s text blocks; other block types are dropped. */
function mcpMessageText(content: unknown[]): string {
  return content
    .filter(
      (block): block is { type: 'text'; text: string } =>
        !!block &&
        typeof block === 'object' &&
        (block as { type?: unknown }).type === 'text' &&
        typeof (block as { text?: unknown }).text === 'string'
    )
    .map(block => block.text)
    .join('\n\n');
}

export type FeatureToggle = 'on' | 'off';

export abstract class AiChatbotBase extends LitElement {
  protected abstract _messageThreadRef: Ref<AiMessageThreadComponent>;
  protected abstract _promptRef: Ref<AiPromptComponent>;

  @property({ attribute: false })
  public adapter?: AgentAdapter;

  @property({ attribute: 'file-upload' })
  public fileUpload: FeatureToggle = 'off';

  @property({ type: Number, attribute: 'max-file-size' })
  public maxFileSize = 10485760;

  @property({ attribute: 'accepted-file-types' })
  public acceptedFileTypes = '';

  @property({ attribute: 'voice-input' })
  public voiceInput: FeatureToggle = 'on';

  @property()
  public placeholder = 'Ask a question...';

  @property({ attribute: false })
  public suggestions?: Suggestion[];

  @property({ type: Boolean, attribute: 'enable-reactions' })
  public enableReactions = false;

  @property({ attribute: 'title-text' })
  public titleText = 'AI Assistant';

  @property({ attribute: 'heading-level', type: Number })
  public headingLevel: HeadingLevel = 2;

  @property({ type: Boolean, attribute: 'debug-mode' })
  public debugMode = false;

  @property({ attribute: 'disclaimer-text' })
  public disclaimerText: string | null | undefined = 'AI can make mistakes. Always verify responses.';

  @property({ attribute: 'debug-command' })
  public debugCommand: FeatureToggle = 'on';

  @property({ attribute: 'export-option' })
  public exportOption: FeatureToggle = 'on';

  @property({ attribute: 'clear-option' })
  public clearOption: FeatureToggle = 'on';

  @property({ type: Object, attribute: false })
  public agentInfo?: AgentInfo;

  @property({ attribute: false })
  public agents: Agent[] = [];

  @property({ attribute: 'selected-agent-id' })
  public selectedAgentId?: string;

  @property({ attribute: false })
  public contextItems: ContextItem[] = [];

  @property({ attribute: 'mcp-app-sandbox-url' })
  public mcpAppSandboxUrl?: string;

  /**
   * Theme fed into an MCP-app widget's `hostContext.theme`. The chatbot's own appearance
   * comes from Forge tokens and is unaffected. Set this whenever the app switches between
   * light and dark: it is the signal that re-sends `theme` and the Forge-derived
   * `styles.variables` to widgets, since token changes alone can't be detected. Absent →
   * follows `prefers-color-scheme`.
   */
  @property({ attribute: 'mcp-app-theme' })
  public mcpAppTheme?: 'light' | 'dark';

  readonly #themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  get #effectiveTheme(): 'light' | 'dark' {
    return this.mcpAppTheme ?? (this.#themeMediaQuery.matches ? 'dark' : 'light');
  }

  readonly #mcpAppViews = new Map<string, McpAppViewRegistration>();

  @provide({ context: mcpAppHostContext })
  @property({ attribute: false })
  private _mcpAppHost: McpAppHost = {
    callTool: params =>
      this._coreController?.adapter?.callMcpTool?.(params) ??
      Promise.reject(new Error('tools/call is not supported by this host')),
    readResource: params =>
      this._coreController?.adapter?.readMcpResource?.(params) ??
      Promise.reject(new Error('resources/read is not supported by this host')),
    updateModelContext: params => this._coreController?.adapter?.updateMcpModelContext?.(params) ?? Promise.resolve(),
    draftMessage: ({ content }) => this.#draftMcpAppMessage(content),
    teardownView: ({ toolCallId }) => this._teardownMcpAppViews({ toolCallIds: [toolCallId] }),
    registerView: view => {
      this.#mcpAppViews.set(view.toolCallId, view);
      return () => {
        if (this.#mcpAppViews.get(view.toolCallId) === view) {
          this.#mcpAppViews.delete(view.toolCallId);
        }
      };
    },
    hostContext: { theme: this.#effectiveTheme, ...mcpAppEnvironment() },
    sandboxUrl: undefined,
    hostCapabilities: mcpAppHostCapabilities(undefined)
  };

  /**
   * Places a widget's `ui/message` text in the prompt for the user to review and send. A
   * widget never starts a model turn on its own. Refused when the message has no text.
   */
  async #draftMcpAppMessage(content: unknown[]): Promise<McpAppRequestResult> {
    const text = mcpMessageText(content);
    const prompt = this._promptRef.value;
    if (!text.trim() || !prompt) {
      return { isError: true };
    }
    prompt.value = text;
    prompt.focus();
    return {};
  }

  /**
   * Sends `ui/resource-teardown` to mounted MCP-app widgets (all, or only `toolCallIds`) and
   * releases them immediately, without waiting for acks. The adapter then drops any state it
   * holds for them (e.g. a pending model context).
   */
  protected _teardownMcpAppViews({ toolCallIds }: { toolCallIds?: string[] } = {}): void {
    const views = [...this.#mcpAppViews.values()].filter(view => toolCallIds?.includes(view.toolCallId) ?? true);
    for (const view of views) {
      this.#mcpAppViews.delete(view.toolCallId);
      view.teardown();
      this._coreController?.adapter?.disposeMcpAppView?.({ toolCallId: view.toolCallId });
    }
  }

  /** Tears down widgets rendered at or after `index`, then removes those items. */
  #removeMessageItemsFrom(index: number): void {
    this._teardownMcpAppViews({ toolCallIds: this._coreController.getToolCallIdsFrom(index) });
    this._coreController.removeMessageItemsFrom(index);
  }

  #handleThemeChange = (): void => {
    this.#refreshMcpAppHostContext();
  };

  /** A new host context object makes every widget re-read its Forge styles and notify its View. */
  #refreshMcpAppHostContext(): void {
    this._mcpAppHost = {
      ...this._mcpAppHost,
      hostContext: { ...this._mcpAppHost.hostContext, theme: this.#effectiveTheme }
    };
  }

  protected _coreController!: ChatbotCoreController;

  protected get _isStreaming(): boolean {
    return this._coreController?.isStreaming ?? false;
  }

  protected get _isUploading(): boolean {
    return this._coreController?.isUploading ?? false;
  }

  protected get _tools(): Map<string, AnyToolDefinition> {
    return this._coreController?.tools ?? new Map();
  }

  protected get _messageItems(): MessageItem[] {
    return this._coreController?.messageItems ?? [];
  }

  protected get _toolCalls(): ToolCall[] {
    return this._messageItems.flatMap(item => {
      if (item.type === 'toolCall') {
        return [item.data];
      }
      if (item.type === 'assistant') {
        return item.data.children.flatMap(child => (child.type === 'toolCall' ? [child.data] : []));
      }
      return [];
    });
  }

  protected get _hasMessages(): boolean {
    return this._coreController?.hasMessages ?? false;
  }

  protected get _allContextItems(): ContextItem[] {
    return [
      ...this.contextItems,
      ...fileAttachmentsToContextItems(
        this._coreController?.completedAttachments ?? [],
        this._coreController?.pendingAttachments ?? []
      )
    ];
  }

  public override connectedCallback(): void {
    super.connectedCallback();

    this._coreController = new ChatbotCoreController(this, {
      callbacks: {
        onRequestUpdate: () => this.requestUpdate(),
        onScrollToBottom: () => this.scrollToBottom(),
        onDispatchEvent: (type, detail, cancelable) => this._dispatchHostEvent({ type, detail, cancelable })
      }
    });

    if (this.adapter) {
      this._coreController.adapter = this.adapter;
    }

    this.#themeMediaQuery.addEventListener('change', this.#handleThemeChange);

    this._onConnected();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#themeMediaQuery.removeEventListener('change', this.#handleThemeChange);
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('adapter') && this._coreController) {
      this._coreController.adapter = this.adapter;
    }

    if (changedProperties.has('adapter')) {
      this._mcpAppHost = { ...this._mcpAppHost, hostCapabilities: mcpAppHostCapabilities(this.adapter) };
    }

    if (changedProperties.has('mcpAppSandboxUrl')) {
      this._mcpAppHost = { ...this._mcpAppHost, sandboxUrl: this.mcpAppSandboxUrl };
    }

    if (changedProperties.has('mcpAppTheme')) {
      this.#refreshMcpAppHostContext();
    }
  }

  protected _onConnected(): void {}

  protected get _slashCommands(): SlashCommand[] {
    const commands: SlashCommand[] = [];

    if (this._hasMessages) {
      commands.push({ id: 'clear', name: 'Clear', group: 'Conversation' });
      commands.push({ id: 'export', name: 'Export', group: 'Conversation' });
    }

    commands.push({ id: 'info', name: 'Info', group: 'Help' });

    if (this.debugCommand === 'on') {
      commands.push({
        id: 'debug',
        name: `${this.debugMode ? 'Disable debug mode' : 'Enable debug mode'}`,
        group: 'Help'
      });
    }

    return commands;
  }

  protected _handleSlashCommand(evt: CustomEvent<ForgeAiPromptCommandEventData>): void {
    const commandId = evt.detail.commandId as SlashCommandId;

    switch (commandId) {
      case 'clear':
        this.clearMessages();
        break;
      case 'export':
        this._handleExport();
        break;
      case 'info':
        this._handleInfo();
        break;
      case 'debug':
        this._handleDebugToggle();
        break;
    }
  }

  protected _handleInfo(): void {
    this._dispatchHostEvent({ type: 'forge-ai-chatbot-info' });
  }

  protected _handleAgentChange(event: CustomEvent<ForgeAiChatHeaderAgentChangeEventData>): void {
    const { agent, previousAgentId } = event.detail;

    const changeEvt = this._dispatchHostEvent({
      type: 'forge-ai-chatbot-agent-change',
      detail: { agent, previousAgentId }
    });

    if (!changeEvt.defaultPrevented) {
      this.selectedAgentId = agent?.id;
      const adapter = this._coreController.adapter;
      if (adapter) {
        adapter.threadId = generateId();
      }

      if (this._hasMessages) {
        const agentName = agent?.name ?? this.titleText;
        this._coreController.finalizeActiveResponse();
        this._coreController.addClientMessage({ content: `Switched to ${agentName}` });
      }
    }
  }

  protected _handleDebugToggle(): void {
    this.debugMode = !this.debugMode;
  }

  protected _handleAttachmentRemove(evt: CustomEvent<ForgeAiAttachmentRemoveEventData>): void {
    const { filename } = evt.detail;

    const pendingAttachment = this._coreController.pendingAttachments.find(a => a.filename === filename);
    if (pendingAttachment) {
      this._coreController.abortFileUpload(pendingAttachment.id);
      return;
    }

    const completedAttachment = this._coreController.completedAttachments.find(a => a.filename === filename);
    if (completedAttachment) {
      this._coreController.removeCompletedAttachment(completedAttachment.id);
    }
  }

  protected _handleContextChipRemove(evt: CustomEvent<{ id: string; item: ContextItem }>): void {
    const { id, item } = evt.detail;

    const hostEvent = this._dispatchHostEvent({
      type: 'forge-ai-chatbot-context-remove',
      detail: { id, item },
      cancelable: true
    });

    if (!hostEvent.defaultPrevented) {
      this.contextItems = this.contextItems.filter(i => i.id !== id);
    }
  }

  protected _handlePromptContextRemove(evt: CustomEvent<{ id: string; item: ContextItem }>): void {
    const { id, item } = evt.detail;

    if (item.type === 'file') {
      const hostEvent = this._dispatchHostEvent({
        type: 'forge-ai-chatbot-context-remove',
        detail: { id, item },
        cancelable: true
      });

      if (hostEvent.defaultPrevented) {
        return;
      }

      const pendingFile = this._coreController?.pendingAttachments.find(a => a.id === id);
      if (pendingFile) {
        this._handleAttachmentRemove(
          new CustomEvent('forge-ai-attachment-remove', {
            detail: { filename: pendingFile.filename }
          }) as CustomEvent<{ filename: string }>
        );
        return;
      }

      const completedFile = this._coreController?.completedAttachments.find(a => a.id === id);
      if (completedFile) {
        this._handleAttachmentRemove(
          new CustomEvent('forge-ai-attachment-remove', {
            detail: { filename: completedFile.filename }
          }) as CustomEvent<{ filename: string }>
        );
      }
      return;
    }

    this._handleContextChipRemove(evt);
  }

  protected async _handleSend(evt: CustomEvent<ForgeAiPromptSendEventData>): Promise<void> {
    const pendingAttachments = [...this._coreController.pendingAttachments];
    await this._coreController.sendMessage({
      content: evt.detail.value,
      timestamp: evt.detail.date.getTime(),
      attachments: pendingAttachments
    });
  }

  protected _handleStop(): void {
    this._coreController.abort();
  }

  protected _handleCancel(): void {
    this._handleStop();
  }

  protected async _handleCopy(evt: CustomEvent<{ messageId: string }>): Promise<void> {
    const responseId = evt.detail.messageId;
    const responseItem = this._messageItems.find(item => item.type === 'assistant' && item.data.id === responseId);

    if (!responseItem || responseItem.type !== 'assistant') {
      return;
    }

    const textContent = responseItem.data.children
      .filter(
        (c): c is { type: 'text'; messageId: string; content: string; status: 'streaming' | 'complete' } =>
          c.type === 'text'
      )
      .map(c => c.content)
      .join('\n\n');

    try {
      await navigator.clipboard.writeText(textContent);
    } catch {
      // Silent fail
    }
  }

  protected async _handleUserCopy(evt: CustomEvent<{ messageId: string }>): Promise<void> {
    const messageId = evt.detail.messageId;
    const message = this._coreController.getMessage(messageId);

    if (!message || message.role !== 'user') {
      return;
    }

    try {
      await navigator.clipboard.writeText(message.content);
    } catch {
      // Silent fail
    }
  }

  protected _handleUserResend(evt: CustomEvent<{ messageId: string }>): void {
    const adapter = this._coreController.adapter;
    if (!adapter) {
      return;
    }

    const messageId = evt.detail.messageId;
    const messageIndex = this._messageItems.findIndex(item => item.type === 'message' && item.data.id === messageId);

    if (messageIndex === -1) {
      return;
    }

    const responseIndex = messageIndex + 1;
    if (responseIndex < this._messageItems.length) {
      this.#removeMessageItemsFrom(responseIndex);
    }

    adapter.sendMessage(this.getMessages());
  }

  protected _handleUserEdit(evt: CustomEvent<{ messageId: string; content: string }>): void {
    const adapter = this._coreController.adapter;
    if (!adapter) {
      return;
    }

    const { messageId, content } = evt.detail;
    const messageIndex = this._messageItems.findIndex(item => item.type === 'message' && item.data.id === messageId);

    if (messageIndex === -1) {
      return;
    }

    this._coreController.updateMessageContent(messageId, content);

    const responseIndex = messageIndex + 1;
    if (responseIndex < this._messageItems.length) {
      this.#removeMessageItemsFrom(responseIndex);
    }

    adapter.sendMessage(this.getMessages());
  }

  protected _handleResend(evt: CustomEvent<{ messageId: string }>): void {
    const adapter = this._coreController.adapter;
    if (!adapter) {
      return;
    }

    const responseId = evt.detail.messageId;
    const responseIndex = this._messageItems.findIndex(
      item => item.type === 'assistant' && item.data.id === responseId
    );

    if (responseIndex === -1) {
      return;
    }

    this.#removeMessageItemsFrom(responseIndex);
    adapter.sendMessage(this.getMessages());
  }

  protected _handleFeedback(
    evt: CustomEvent<ForgeAiMessageThreadThumbsEventData>,
    type: 'positive' | 'negative'
  ): void {
    this._coreController.setResponseFeedback(evt.detail.messageId, {
      type,
      reason: evt.detail.feedback
    });
    this._dispatchHostEvent({
      type: 'forge-ai-chatbot-response-feedback',
      detail: {
        messageId: evt.detail.messageId,
        type,
        feedback: evt.detail.feedback
      }
    });
  }

  protected _handleThumbsUp(evt: CustomEvent<ForgeAiMessageThreadThumbsEventData>): void {
    this._handleFeedback(evt, 'positive');
  }

  protected _handleThumbsDown(evt: CustomEvent<ForgeAiMessageThreadThumbsEventData>): void {
    this._handleFeedback(evt, 'negative');
  }

  protected _handleFileSelect(evt: CustomEvent<ForgeAiFilePickerChangeEventData>): void {
    const { file, timestamp } = evt.detail;
    const fileId = this._coreController.processFileUpload(file, timestamp);
    const callbacks = this._coreController.createFileUploadCallbacks(fileId);

    this._dispatchHostEvent({
      type: 'forge-ai-chatbot-file-select',
      detail: {
        fileId,
        file,
        filename: file.name,
        size: file.size,
        mimeType: file.type,
        timestamp,
        ...callbacks
      }
    });
  }

  protected _handleFileError(evt: CustomEvent<ForgeAiFilePickerErrorEventData>): void {
    const errorMessage: ChatMessage = {
      id: generateId(),
      role: 'assistant',
      content: evt.detail.message,
      timestamp: Date.now(),
      status: 'error'
    };

    this._coreController.addMessage(errorMessage);
  }

  protected async _handleSuggestionSelect(evt: CustomEvent<ForgeAiSuggestionsEventData>): Promise<void> {
    this._promptRef.value?.addToHistory(evt.detail.text);
    await this.sendMessage(evt.detail.text);
  }

  protected _handleVoiceInputResult(evt: CustomEvent<ForgeAiVoiceInputResultEvent>): void {
    const { transcript } = evt.detail;
    if (transcript && this._promptRef.value) {
      this._promptRef.value.value = transcript;
    }
  }

  /**
   * Clears all messages from the chat.
   *
   * This is a lower-level operation that removes message history without
   * the semantic meaning of "starting a new conversation". For user-facing
   * "new chat" actions, prefer {@link startNewChat} which provides
   * conversation-level cleanup.
   *
   * @returns true if messages were cleared, false if prevented via event.preventDefault()
   * @fires forge-ai-chatbot-clear - Cancelable event fired before clearing
   */
  public clearMessages(): boolean {
    const event = this._dispatchHostEvent({ type: 'forge-ai-chatbot-clear', cancelable: true });

    if (event.defaultPrevented) {
      return false;
    }

    this._teardownMcpAppViews();
    this._coreController.clearMessages();
    return true;
  }

  /**
   * Starts a new chat conversation.
   *
   * This clears all messages and resets the conversation to a fresh state.
   * Use this when the user explicitly wants to begin a new conversation.
   *
   * Contrast with {@link clearMessages}, which fires events and can be prevented.
   * This method does not fire events - it's meant for programmatic use.
   * For user-initiated actions, use event handlers that fire events before calling this.
   *
   * Subclasses may override this to add conversation-specific cleanup like
   * resetting thread IDs or closing panels.
   */
  public startNewChat(): void {
    this._teardownMcpAppViews();
    this._coreController.clearMessages();
  }

  public getMessages(): ChatMessage[] {
    return this._coreController.getMessages();
  }

  public setMessages(messages: ChatMessage[]): void {
    this._coreController.setMessages(messages);
  }

  /**
   * Inserts or upserts a client-only status message into the thread - never sent to
   * the agent adapter and never included in the conversation history the adapter sees.
   * Use this for host-driven UI feedback (e.g. "Your session expired", upload progress)
   * instead of splicing {@link getMessages}/{@link setMessages} directly.
   *
   * Safe to call at any time, including while a response is streaming - it never
   * finalizes or otherwise touches the in-progress response.
   *
   * @param message - Content and optional kind ('text' | 'info' | 'warning' | 'error' | 'success'),
   * header, and actions. Pass the same `id` on a later call to upsert (replace) a
   * previously added message.
   * @returns The message id (generated if not provided).
   */
  public addClientMessage(message: ClientMessageInput): string {
    return this._coreController.addClientMessage(message);
  }

  /**
   * Removes a client-only message previously added via {@link addClientMessage}.
   * No-ops if no message with that id exists. Safe to call at any time, including
   * while a response is streaming. Removal is never automatic - call this when your
   * host logic determines the message is no longer relevant.
   */
  public removeClientMessage(id: string): void {
    this._coreController.removeClientMessage(id);
  }

  public async sendMessage(content: string, files?: File[]): Promise<void> {
    if (!this._coreController.adapter) {
      console.warn('No adapter configured.');
      return;
    }

    if (files) {
      const timestamp = Date.now();
      for (const file of files) {
        const fileId = this._coreController.processFileUpload(file, timestamp);
        const callbacks = this._coreController.createFileUploadCallbacks(fileId);
        this._dispatchHostEvent({
          type: 'forge-ai-chatbot-file-select',
          detail: {
            fileId,
            file,
            filename: file.name,
            size: file.size,
            mimeType: file.type,
            timestamp,
            ...callbacks
          }
        });
      }
    }

    await this._coreController.sendMessage({
      content,
      attachments: this._coreController.pendingAttachments
    });
  }

  public abort(): void {
    this._handleStop();
  }

  /**
   * Re-sends the Forge-derived `styles.variables` to every MCP-app widget. Call after
   * changing Forge tokens without a light/dark switch (e.g. a brand change); for light/dark,
   * set {@link mcpAppTheme} instead.
   */
  public refreshMcpAppStyles(): void {
    this.#refreshMcpAppHostContext();
  }

  public async scrollToBottom({ behavior }: { behavior?: ScrollBehavior } = {}): Promise<void> {
    await this._messageThreadRef.value?.updateComplete;
    await new Promise(requestAnimationFrame);
    this._messageThreadRef.value?.scrollToBottom({ behavior });
  }

  public abstract focus(): void;

  public getThreadState(): ThreadState {
    return {
      threadId: this._coreController.adapter?.threadId,
      messages: this.getMessages(),
      timestamp: Date.now(),
      selectedAgentId: this.selectedAgentId
    };
  }

  public getSelectedAgent(): Agent | undefined {
    return this.agents.find(a => a.id === this.selectedAgentId);
  }

  public async setThreadState(threadState: ThreadState): Promise<void> {
    this._teardownMcpAppViews();
    this.setMessages(threadState.messages);
    this.selectedAgentId = threadState.selectedAgentId;

    if (threadState.threadId && this._coreController.adapter) {
      this._coreController.adapter.threadId = threadState.threadId;
    }

    await this.updateComplete;

    const userMessages = threadState.messages.filter(msg => msg.role === 'user').map(msg => msg.content);
    this._promptRef.value?.setHistory(userMessages);

    this.scrollToBottom({ behavior: 'instant' });
  }

  protected _dispatchHostEvent(config: { type: string; detail?: unknown; cancelable?: boolean }): CustomEvent {
    const event = new CustomEvent(config.type, {
      detail: config.detail,
      bubbles: true,
      composed: true,
      cancelable: config.cancelable ?? false
    });
    this.dispatchEvent(event);
    return event;
  }

  protected _handleExport(): void {
    const messages = this.getMessages();
    if (messages.length === 0) {
      return;
    }

    const chatText = formatChatTranscript(messages, { includeToolCalls: this.debugMode });
    const agentName = this.getSelectedAgent()?.name ?? this.titleText;
    downloadFile(chatText, createChatExportFilename(agentName), 'text/plain');
  }
}
