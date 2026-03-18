import { html, nothing, LitElement, type PropertyValues, type TemplateResult } from 'lit';
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
import { AgentAdapter } from './agent-adapter.js';
import { ChatbotCoreController } from '../core/chatbot-core-controller.js';
import type {
  Agent,
  ChatMessage,
  HeadingLevel,
  MessageItem,
  SlashCommand,
  SlashCommandId,
  ThreadState,
  ToolCall,
  ToolDefinition
} from './types.js';
import { downloadFile, generateId } from './utils.js';
import type { ForgeAiMessageThreadThumbsEventData } from '../ai-message-thread';

export type FeatureToggle = 'on' | 'off';

export abstract class AiChatbotBase extends LitElement {
  protected abstract get _eventPrefix(): string;
  protected abstract _messageThreadRef: Ref<AiMessageThreadComponent>;
  protected abstract _promptRef: Ref<AiPromptComponent>;

  @property({ attribute: false })
  public adapter?: AgentAdapter;

  @property({ attribute: 'file-upload' })
  public fileUpload: FeatureToggle = 'off';

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

  @property({ type: Object, attribute: false })
  public agentInfo?: AgentInfo;

  @property({ attribute: false })
  public agents: Agent[] = [];

  @property({ attribute: 'selected-agent-id' })
  public selectedAgentId?: string;

  protected _coreController!: ChatbotCoreController;

  protected get _isStreaming(): boolean {
    return this._coreController?.isStreaming ?? false;
  }

  protected get _isUploading(): boolean {
    return this._coreController?.isUploading ?? false;
  }

  protected get _tools(): Map<string, ToolDefinition> {
    return this._coreController?.tools ?? new Map();
  }

  protected get _messageItems(): MessageItem[] {
    return this._coreController?.messageItems ?? [];
  }

  protected get _hasMessages(): boolean {
    return this._coreController?.hasMessages ?? false;
  }

  public override connectedCallback(): void {
    super.connectedCallback();

    this._coreController = new ChatbotCoreController(this, {
      callbacks: {
        onRequestUpdate: () => this.requestUpdate(),
        onScrollToBottom: () => this.scrollToBottom(),
        onDispatchEvent: (type, detail, cancelable) => this._dispatchPrefixedEvent(type, detail, cancelable)
      }
    });

    if (this.adapter) {
      this._coreController.adapter = this.adapter;
    }

    this._onConnected();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('adapter') && this._coreController) {
      this._coreController.adapter = this.adapter;
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
    this._dispatchHostEvent({ type: `${this._eventPrefix}-info` });
  }

  protected _handleAgentChange(event: CustomEvent<ForgeAiChatHeaderAgentChangeEventData>): void {
    const { agent, previousAgentId } = event.detail;

    const changeEvt = this._dispatchHostEvent({
      type: `${this._eventPrefix}-agent-change`,
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
        const systemMessage: ChatMessage = {
          id: generateId(),
          role: 'system',
          content: `Switched to ${agentName}`,
          timestamp: Date.now(),
          status: 'complete',
          clientOnly: true
        };
        this._coreController.addMessage(systemMessage);
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

  protected get _sessionFilesTemplate(): TemplateResult | typeof nothing {
    const completed = this._coreController?.completedAttachments ?? [];
    const uploading = this._coreController?.pendingAttachments ?? [];
    const allFiles = [...uploading, ...completed];

    if (allFiles.length === 0) {
      return nothing;
    }

    return html`
      <div class="session-files-header">Session Files (${allFiles.length})</div>
      <div class="session-files-list">
        ${allFiles.map(
          attachment => html`
            <forge-ai-attachment
              .filename=${attachment.filename}
              .size=${attachment.size}
              ?uploading=${attachment.uploading ?? false}
              removable
              @forge-ai-attachment-remove=${this._handleAttachmentRemove}>
            </forge-ai-attachment>
          `
        )}
      </div>
    `;
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
      this._coreController.removeMessageItemsFrom(responseIndex);
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
      this._coreController.removeMessageItemsFrom(responseIndex);
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

    this._coreController.removeMessageItemsFrom(responseIndex);
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
      type: `${this._eventPrefix}-response-feedback`,
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
      type: `${this._eventPrefix}-file-select`,
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
    this._promptRef.value?.focus();
  }

  protected _handleVoiceInputResult(evt: CustomEvent<ForgeAiVoiceInputResultEvent>): void {
    const { transcript } = evt.detail;
    if (transcript && this._promptRef.value) {
      this._promptRef.value.value = transcript;
    }
  }

  public clearMessages(): void {
    this._coreController.clearMessages();
  }

  public getMessages(): ChatMessage[] {
    return this._coreController.getMessages();
  }

  public setMessages(messages: ChatMessage[]): void {
    this._coreController.setMessages(messages);
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
          type: `${this._eventPrefix}-file-select`,
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

  public async scrollToBottom({ behavior }: { behavior?: ScrollBehavior } = {}): Promise<void> {
    await this._messageThreadRef.value?.updateComplete;
    await new Promise(requestAnimationFrame);
    this._messageThreadRef.value?.scrollToBottom({ behavior });
  }

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

  protected _dispatchPrefixedEvent(type: string, detail?: unknown, cancelable?: boolean): CustomEvent {
    const prefixedType = type.replace('forge-ai-chatbot-', `${this._eventPrefix}-`);
    return this._dispatchHostEvent({ type: prefixedType, detail, cancelable });
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

  protected _formatToolCallForExport(toolCall: ToolCall): string {
    const lines = [`  Tool: ${toolCall.name}`, `  Args: ${JSON.stringify(toolCall.args)}`];

    if (toolCall.status === 'error') {
      const errorMsg =
        typeof toolCall.result === 'object' && toolCall.result !== null && 'error' in toolCall.result
          ? (toolCall.result as { error: string }).error
          : 'Unknown error';
      lines.push(`  Error: ${errorMsg}`);
    } else if (toolCall.result !== undefined) {
      lines.push(`  Result: ${JSON.stringify(toolCall.result)}`);
    }

    return lines.join('\n');
  }

  protected _handleExport(): void {
    const messages = this.getMessages();
    if (messages.length === 0) {
      return;
    }

    const chatText = messages
      .map(message => {
        const timestamp = new Date(message.timestamp).toLocaleString();
        const role = message.role === 'user' ? 'You' : 'Assistant';
        let output = `[${timestamp}] ${role}:\n${message.content}\n`;

        if (message.toolCalls?.length) {
          output += '\n' + message.toolCalls.map(tc => this._formatToolCallForExport(tc)).join('\n\n') + '\n';
        }

        return output;
      })
      .join('\n');

    const filename = `chat-history-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
    downloadFile(chatText, filename, 'text/plain');
  }
}
