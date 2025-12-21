import type { ReactiveController, ReactiveControllerHost } from 'lit';
import { renderMarkdown } from './utils.js';

/**
 * Reactive controller for caching parsed markdown and throttling renders.
 * Provides HTML caching per message and RAF throttling during streaming.
 */
export class MarkdownStreamController implements ReactiveController {
  #host: ReactiveControllerHost;
  #rafId?: number;
  #markdownCache = new Map<string, string>();

  constructor(host: ReactiveControllerHost) {
    this.#host = host;
    host.addController(this);
  }

  public hostConnected(): void {}

  public hostDisconnected(): void {
    if (this.#rafId) {
      cancelAnimationFrame(this.#rafId);
      this.#rafId = undefined;
    }
    this.#markdownCache.clear();
  }

  #getCacheKey(messageId: string, content: string): string {
    const hash = content.length + ':' + content.slice(0, 50);
    return `${messageId}:${hash}`;
  }

  public getCachedHtml(messageId: string, content: string): string {
    const key = this.#getCacheKey(messageId, content);
    let html = this.#markdownCache.get(key);

    if (!html) {
      html = renderMarkdown(content);
      this.#markdownCache.set(key, html);

      if (this.#markdownCache.size > 100) {
        const firstKey = this.#markdownCache.keys().next().value;
        if (firstKey) {
          this.#markdownCache.delete(firstKey);
        }
      }
    }

    return html;
  }

  public scheduleUpdate(): void {
    if (!this.#rafId) {
      this.#rafId = requestAnimationFrame(() => {
        this.#rafId = undefined;
        this.#host.requestUpdate();
      });
    }
  }
}
