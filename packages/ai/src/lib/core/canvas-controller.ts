import type { ReactiveController, ReactiveControllerHost } from 'lit';
import { ContextProvider } from '@lit/context';
import type { AnyToolDefinition, ChatMessage, IToolRenderer, ToolCall, ToolCanvas } from '../ai-chatbot/types.js';
import {
  createToolCanvas,
  resolveToolCanvasTitle,
  toolCanvasHostContext,
  type ForgeAiCanvasCloseRequestEventData,
  type ForgeAiCanvasOpenRequestEventData
} from '../ai-chatbot/tool-canvas.js';
import { shouldShowToolRenderer } from '../ai-chatbot/utils.js';

export interface OpenCanvasOptions {
  /** Identifies the artifact; tool-driven opens use the tool call id. */
  id?: string;
  /** Overrides `canvasTitle` while this content is shown. */
  title?: string;
  /** Content mounted in the canvas body. Omit to show the `canvas` slot instead. */
  content?: Node;
}

export interface CanvasOpenEventData {
  id?: string;
  title?: string;
  /** Present when the canvas was opened for a tool call. */
  toolCall?: ToolCall;
}

export interface CanvasContent {
  id?: string;
  title?: string;
  node?: Node;
  toolCall?: ToolCall;
  /** Set for tool-driven content so it can follow the tool call as it updates. */
  toolDefinition?: AnyToolDefinition;
  /** Title supplied with the open request; otherwise the title is re-derived from the tool call. */
  titleOverride?: string;
}

export interface CanvasControllerConfig {
  /** Cancelable event dispatched on the host before the canvas opens or swaps content. */
  openEvent: string;
  /** Event dispatched on the host when the canvas closes; cancelable except when the host forces it. */
  closeEvent: string;
  dispatchHostEvent: (config: { type: string; detail?: unknown; cancelable?: boolean }) => CustomEvent;
  getToolCalls: () => ToolCall[];
  getTools: () => Map<string, AnyToolDefinition>;
  /** Whether the host can show the canvas right now. Defaults to always. */
  canOpen?: () => boolean;
  /** Called once the canvas has gone from closed to open, not when its content is swapped. */
  onOpen?: () => void;
  /** Called after the canvas is hidden for any reason. */
  onClose?: () => void;
  /** Called when the requested tool call is already showing, so the host can draw attention to it. */
  onRefocus?: () => void;
  /** Resolves once the host's collapse presentation has finished; hidden content is released after it. */
  collapsed?: () => Promise<void>;
}

/**
 * Owns the artifact canvas state shared by every chatbot form factor: what is shown, the cancelable
 * open/close events, tool call tracking, auto-open, and the `canvas` controls injected into renderers.
 * The host decides how that state is presented (a side panel, a modal, ...).
 */
export class CanvasController implements ReactiveController {
  readonly #host: ReactiveControllerHost & HTMLElement;
  readonly #config: CanvasControllerConfig;
  readonly #provider: ContextProvider<typeof toolCanvasHostContext>;
  readonly #autoOpenedToolCallIds = new Set<string>();
  #isOpen = false;
  #content: CanvasContent | null = null;

  constructor(host: ReactiveControllerHost & HTMLElement, config: CanvasControllerConfig) {
    this.#host = host;
    this.#config = config;
    host.addController(this);
    // Tells inline tool renderers a canvas is available so canvas-enabled tools show their expand affordance.
    this.#provider = new ContextProvider(host, {
      context: toolCanvasHostContext,
      initialValue: { presentation: 'inline-expandable' }
    });
  }

  public hostConnected(): void {}

  public get isOpen(): boolean {
    return this.#isOpen;
  }

  public get content(): CanvasContent | null {
    return this.#content;
  }

  public open(options: OpenCanvasOptions = {}): boolean {
    return this.#commitOpen({ id: options.id, title: options.title, node: options.content });
  }

  /** Closes the canvas. Returns false if it was not open or the close event was prevented. */
  public close(): boolean {
    if (!this.#isOpen) {
      return false;
    }
    const event = this.#config.dispatchHostEvent({ type: this.#config.closeEvent, cancelable: true });
    if (event.defaultPrevented) {
      return false;
    }
    this.#hide();
    return true;
  }

  /** Closes without asking, for when the host can no longer show the canvas (e.g. it left its conversation view). */
  public forceClose(): void {
    if (!this.#isOpen) {
      return;
    }
    this.#hide();
    this.#config.dispatchHostEvent({ type: this.#config.closeEvent });
  }

  /** Forgets the canvas entirely, for when the thread it belonged to is gone. */
  public reset(): void {
    this.forceClose();
    this.#content = null;
    this.#autoOpenedToolCallIds.clear();
    this.#host.requestUpdate();
  }

  /** Tool calls restored from history are marked as seen so loading a thread never auto-opens the canvas. */
  public markSeen(messages: ChatMessage[]): void {
    for (const message of messages) {
      for (const toolCall of message.toolCalls ?? []) {
        this.#autoOpenedToolCallIds.add(toolCall.id);
      }
    }
  }

  public readonly handleOpenRequest = (evt: CustomEvent<ForgeAiCanvasOpenRequestEventData>): void => {
    evt.stopPropagation();
    const toolCall = this.#findToolCall(evt.detail.toolCallId);
    const toolDefinition = this.#config.getTools().get(evt.detail.toolName);
    if (!toolCall || !toolDefinition) {
      return;
    }
    evt.detail.handled = this.#openToolCall(toolCall, toolDefinition, evt.detail.title);
  };

  public readonly handleCloseRequest = (evt: CustomEvent<ForgeAiCanvasCloseRequestEventData>): void => {
    evt.stopPropagation();
    evt.detail.handled = this.#closeToolCall(evt.detail.toolCallId);
  };

  /** The tool call object is replaced on every args or status update, so open content follows it by id. */
  public syncToolCall(): void {
    const content = this.#content;
    if (!this.#isOpen || !content?.toolCall || !content.toolDefinition) {
      return;
    }
    const latest = this.#findToolCall(content.toolCall.id);
    if (!latest || latest === content.toolCall) {
      return;
    }

    const { toolDefinition } = content;
    const renderer = toolDefinition.canvas?.renderer ?? toolDefinition.renderer;
    let node = content.node;
    if (renderer?.elementTag && node) {
      (node as HTMLElement & IToolRenderer).toolCall = latest;
    } else {
      node = this.#createRenderer(latest, toolDefinition);
    }

    this.#content = {
      ...content,
      node,
      toolCall: latest,
      title: content.titleOverride ?? resolveToolCanvasTitle(latest, toolDefinition)
    };
  }

  /** Opens tools configured with `canvas.open: 'auto'` once their renderer shows. Call after render, not during it. */
  public autoOpenPending(): void {
    const tools = this.#config.getTools();
    if (![...tools.values()].some(tool => tool.canvas?.open === 'auto')) {
      return;
    }
    for (const toolCall of this.#config.getToolCalls()) {
      const toolDefinition = tools.get(toolCall.name);
      if (
        toolDefinition?.canvas?.open !== 'auto' ||
        this.#autoOpenedToolCallIds.has(toolCall.id) ||
        !shouldShowToolRenderer(toolCall, toolDefinition)
      ) {
        continue;
      }
      this.#autoOpenedToolCallIds.add(toolCall.id);
      this.#openToolCall(toolCall, toolDefinition);
    }
  }

  #findToolCall(id: string): ToolCall | undefined {
    return this.#config.getToolCalls().find(toolCall => toolCall.id === id);
  }

  #commitOpen(content: CanvasContent): boolean {
    if (this.#config.canOpen && !this.#config.canOpen()) {
      return false;
    }

    const event = this.#config.dispatchHostEvent({
      type: this.#config.openEvent,
      detail: { id: content.id, title: content.title, toolCall: content.toolCall } satisfies CanvasOpenEventData,
      cancelable: true
    });
    if (event.defaultPrevented) {
      return false;
    }

    this.#content = content;
    if (!this.#isOpen) {
      this.#isOpen = true;
      this.#config.onOpen?.();
    }
    this.#syncProvider();
    this.#host.requestUpdate();
    return true;
  }

  // Content stays mounted while the host collapses, then is released so hidden iframes and timers stop.
  #hide(): void {
    this.#isOpen = false;
    this.#config.onClose?.();
    this.#syncProvider();
    this.#host.requestUpdate();
    void this.#releaseAfterCollapse();
  }

  async #releaseAfterCollapse(): Promise<void> {
    const content = this.#content;
    await this.#host.updateComplete;
    await this.#config.collapsed?.();
    if (!this.#isOpen && this.#content === content) {
      this.#content = null;
      this.#host.requestUpdate();
    }
  }

  #syncProvider(): void {
    this.#provider.setValue({
      presentation: 'inline-expandable',
      openToolCallId: this.#isOpen ? this.#content?.toolCall?.id : undefined
    });
  }

  #closeToolCall(toolCallId: string): boolean {
    if (this.#content?.toolCall?.id !== toolCallId) {
      return false;
    }
    return this.close();
  }

  #openToolCall(toolCall: ToolCall, toolDefinition: AnyToolDefinition, title?: string): boolean {
    // Re-requesting the artifact already on display just refocuses it, preserving renderer state.
    if (this.#isOpen && this.#content?.toolCall?.id === toolCall.id) {
      this.#config.onRefocus?.();
      return true;
    }
    return this.#commitOpen({
      id: toolCall.id,
      title: title ?? resolveToolCanvasTitle(toolCall, toolDefinition),
      node: this.#createRenderer(toolCall, toolDefinition),
      toolCall,
      toolDefinition,
      titleOverride: title
    });
  }

  #createControls(toolCall: ToolCall, toolDefinition: AnyToolDefinition): ToolCanvas {
    return createToolCanvas({
      available: true,
      // This instance only exists to be shown in the canvas, and is created before the canvas finishes opening.
      isOpen: () => true,
      open: options => this.#openToolCall(toolCall, toolDefinition, options?.title),
      close: () => this.#closeToolCall(toolCall.id)
    });
  }

  #createRenderer(toolCall: ToolCall, toolDefinition: AnyToolDefinition): Node | undefined {
    const renderer = toolDefinition.canvas?.renderer ?? toolDefinition.renderer;
    const canvas = this.#createControls(toolCall, toolDefinition);
    if (renderer?.elementTag) {
      const element = document.createElement(renderer.elementTag) as HTMLElement & IToolRenderer;
      element.toolCall = toolCall;
      element.presentation = 'canvas';
      element.canvas = canvas;
      return element;
    }
    return renderer?.render?.(toolCall, { presentation: 'canvas', canvas });
  }
}
