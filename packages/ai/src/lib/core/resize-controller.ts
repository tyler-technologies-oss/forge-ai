import { ReactiveController, ReactiveControllerHost } from 'lit';
import { Ref } from 'lit/directives/ref.js';

const RESIZE_SCREEN_BUFFER = 100;

export interface ResizeControllerOptions {
  targetElementRef: Ref<HTMLElement>;
  resizeHandleRef: Ref<HTMLElement>;
  minWidth?: number;
  maxWidth?: number;
  defaultWidth?: number;
  keyboardStep?: number;
  onResize?: (width: number) => void;
  onResizeStart?: () => void;
  onResizeEnd?: () => void;
}

export class ResizeController implements ReactiveController {
  #host: ReactiveControllerHost;
  #options: Required<ResizeControllerOptions>;

  #isResizing = false;
  #currentWidth = 0;
  #dragStartX = 0;
  #dragStartWidth = 0;

  #resizeAbortController?: AbortController;

  constructor(host: ReactiveControllerHost, options: ResizeControllerOptions) {
    this.#host = host;
    this.#options = {
      minWidth: 360,
      maxWidth: 800,
      defaultWidth: 420,
      keyboardStep: 20,
      onResize: () => {},
      onResizeStart: () => {},
      onResizeEnd: () => {},
      ...options
    };
    this.#currentWidth = this.#options.defaultWidth;
    host.addController(this);
  }

  public hostConnected(): void {}

  public hostDisconnected(): void {
    this.#cleanup();
  }

  public get isResizing(): boolean {
    return this.#isResizing;
  }

  public get currentWidth(): number {
    return this.#currentWidth;
  }

  public setWidth(width: number): void {
    this.#currentWidth = this.#constrainWidth(width);
    this.#applyWidth();
  }

  public resetWidth(): void {
    this.setWidth(this.#options.defaultWidth);
  }

  public handlePointerDown = (event: PointerEvent): void => {
    if (event.button !== 0) {
      return;
    }

    event.preventDefault();

    const resizeHandle = this.#options.resizeHandleRef.value;
    if (!resizeHandle) {
      return;
    }

    resizeHandle.setPointerCapture(event.pointerId);

    this.#dragStartX = event.clientX;
    this.#dragStartWidth = this.#currentWidth;
    this.#isResizing = true;
    this.#host.requestUpdate();
    this.#options.onResizeStart();

    this.#addResizeListeners();
  };

  public handleKeyDown = (event: KeyboardEvent): void => {
    const step = this.#options.keyboardStep;
    let delta = 0;

    switch (event.key) {
      case 'ArrowLeft':
        delta = step;
        break;
      case 'ArrowRight':
        delta = -step;
        break;
      default:
        return;
    }

    event.preventDefault();

    const newWidth = this.#currentWidth + delta;
    this.#currentWidth = this.#constrainWidth(newWidth);
    this.#applyWidth();
  };

  #handlePointerMove = (event: PointerEvent): void => {
    if (!this.#isResizing) {
      return;
    }

    event.preventDefault();

    const deltaX = this.#dragStartX - event.clientX;
    const newWidth = this.#dragStartWidth + deltaX;
    this.#currentWidth = this.#constrainWidth(newWidth);
    this.#applyWidth();
  };

  #handlePointerUp = (event: PointerEvent): void => {
    if (!this.#isResizing) {
      return;
    }

    event.preventDefault();

    const resizeHandle = this.#options.resizeHandleRef.value;
    if (resizeHandle) {
      resizeHandle.releasePointerCapture(event.pointerId);
    }

    this.#isResizing = false;
    this.#host.requestUpdate();
    this.#options.onResizeEnd();

    this.#removeResizeListeners();
  };

  #constrainWidth(width: number): number {
    const availableWidth = window.innerWidth - RESIZE_SCREEN_BUFFER;
    const effectiveMaxWidth = Math.min(this.#options.maxWidth, availableWidth);
    return Math.max(this.#options.minWidth, Math.min(width, effectiveMaxWidth));
  }

  #applyWidth(): void {
    this.#options.onResize(this.#currentWidth);
    this.#host.requestUpdate();
  }

  #addResizeListeners(): void {
    if (!this.#resizeAbortController) {
      this.#resizeAbortController = new AbortController();
      document.addEventListener('pointermove', this.#handlePointerMove, {
        signal: this.#resizeAbortController.signal
      });
      document.addEventListener('pointerup', this.#handlePointerUp, {
        signal: this.#resizeAbortController.signal
      });
    }
  }

  #removeResizeListeners(): void {
    if (this.#resizeAbortController) {
      this.#resizeAbortController.abort();
      this.#resizeAbortController = undefined;
    }
  }

  #cleanup(): void {
    this.#removeResizeListeners();
    this.#isResizing = false;
  }
}
