import type { ReactiveController, ReactiveControllerHost } from 'lit';

const CHARS_PER_FRAME = 2;
const CATCHUP_THRESHOLD = 100;
const CATCHUP_MULTIPLIER = 3;

interface TypewriterState {
  bufferedContent: string;
  revealedLength: number;
  isComplete: boolean;
}

export class TypewriterController implements ReactiveController {
  #host: ReactiveControllerHost;
  #states = new Map<string, TypewriterState>();
  #rafId?: number;
  #isAnimating = false;

  constructor(host: ReactiveControllerHost) {
    this.#host = host;
    host.addController(this);
  }

  public hostConnected(): void {}

  public hostDisconnected(): void {
    this.#stopAnimation();
    this.#states.clear();
  }

  public setBuffer(messageId: string, content: string): void {
    let state = this.#states.get(messageId);
    if (!state) {
      state = {
        bufferedContent: '',
        revealedLength: 0,
        isComplete: false
      };
      this.#states.set(messageId, state);
    }

    state.bufferedContent = content;
    this.#startAnimation();
  }

  public markComplete(messageId: string): void {
    const state = this.#states.get(messageId);
    if (state) {
      state.isComplete = true;
    }
  }

  public revealInstantly(messageId: string): void {
    const state = this.#states.get(messageId);
    if (state) {
      state.revealedLength = state.bufferedContent.length;
      state.isComplete = true;
    }
  }

  public getDisplayContent(messageId: string): string {
    const state = this.#states.get(messageId);
    if (!state) {
      return '';
    }
    return state.bufferedContent.slice(0, state.revealedLength);
  }

  public isRevealing(messageId: string): boolean {
    const state = this.#states.get(messageId);
    if (!state) {
      return false;
    }
    return state.revealedLength < state.bufferedContent.length;
  }

  public isComplete(messageId: string): boolean {
    const state = this.#states.get(messageId);
    return state?.isComplete ?? false;
  }

  public reset(messageId: string): void {
    this.#states.delete(messageId);
  }

  public resetAll(): void {
    this.#stopAnimation();
    this.#states.clear();
  }

  #startAnimation(): void {
    if (this.#isAnimating) {
      return;
    }
    this.#isAnimating = true;
    this.#rafId = requestAnimationFrame(this.#animate.bind(this));
  }

  #stopAnimation(): void {
    this.#isAnimating = false;
    if (this.#rafId) {
      cancelAnimationFrame(this.#rafId);
      this.#rafId = undefined;
    }
  }

  #animate(): void {
    if (!this.#isAnimating) {
      return;
    }

    let anyPending = false;

    for (const state of this.#states.values()) {
      const remaining = state.bufferedContent.length - state.revealedLength;
      if (remaining > 0) {
        anyPending = true;
        const charsToReveal = remaining > CATCHUP_THRESHOLD ? CHARS_PER_FRAME * CATCHUP_MULTIPLIER : CHARS_PER_FRAME;
        state.revealedLength = Math.min(state.revealedLength + charsToReveal, state.bufferedContent.length);
      }
    }

    this.#host.requestUpdate();

    if (anyPending) {
      this.#rafId = requestAnimationFrame(this.#animate.bind(this));
    } else {
      this.#isAnimating = false;
    }
  }
}
