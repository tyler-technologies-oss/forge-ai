import type { TransportConfig, TransportLayer } from './transport-layer.js';

export class SSETransport implements TransportLayer {
  #config: TransportConfig;
  #abortController: AbortController | null = null;
  #dataCallback?: (data: string) => void;
  #errorCallback?: (error: Error) => void;

  constructor(config: TransportConfig) {
    this.#config = config;
  }

  public async connect(): Promise<void> {
    return Promise.resolve();
  }

  public disconnect(): void {
    this.abort();
  }

  public send(data: unknown): void {
    this.#abortController = new AbortController();
    this.#executeRequest(data);
  }

  public onData(callback: (data: string) => void): void {
    this.#dataCallback = callback;
  }

  public onError(callback: (error: Error) => void): void {
    this.#errorCallback = callback;
  }

  public abort(): void {
    this.#abortController?.abort();
    this.#abortController = null;
  }

  async #executeRequest(input: unknown): Promise<void> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(this.#config.headers || {})
    };

    let response: Response | undefined;

    try {
      if (!this.#abortController) {
        throw new Error('AbortController not initialized');
      }

      response = await fetch(this.#config.url, {
        method: 'POST',
        headers,
        credentials: this.#config.credentials || 'include',
        body: JSON.stringify(input),
        signal: this.#abortController.signal
      });

      if (!response.ok) {
        let errorDetail = response.statusText;
        try {
          const errorBody = await response.text();
          if (errorBody) {
            errorDetail = errorBody;
          }
        } catch {
          // Use statusText if body read fails
        }
        throw new Error(`HTTP ${response.status}: ${errorDetail}`);
      }

      if (!response.body) {
        throw new Error('Response body is null');
      }

      await this.#processResponseStream(response.body);
    } catch (error: unknown) {
      const err = error as { name?: string; message?: string };
      if (err.name !== 'AbortError' && this.#errorCallback) {
        this.#errorCallback(new Error(err.message || 'Unknown error occurred'));
      }
    }
  }

  async #processResponseStream(body: ReadableStream<Uint8Array>): Promise<void> {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let currentEvent: { event?: string; data: string[]; id?: string; retry?: number } = { data: [] };

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split(/\r?\n/);
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.trim() === '') {
            if (currentEvent.data.length > 0) {
              this.#handleSSEEvent(currentEvent);
              currentEvent = { data: [] };
            }
            continue;
          }

          const colonIndex = line.indexOf(':');
          if (colonIndex === -1) {
            continue;
          }

          const field = line.slice(0, colonIndex).trim();
          const fieldValue = line.slice(colonIndex + 1).trimStart();

          switch (field) {
            case 'event':
              currentEvent.event = fieldValue;
              break;
            case 'data':
              currentEvent.data.push(fieldValue);
              break;
            case 'id':
              currentEvent.id = fieldValue;
              break;
            case 'retry':
              currentEvent.retry = parseInt(fieldValue, 10);
              break;
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
  }

  #handleSSEEvent(event: { event?: string; data: string[]; id?: string; retry?: number }): void {
    const data = event.data.join('\n');
    if (!data) {
      return;
    }
    if (this.#dataCallback) {
      this.#dataCallback(data);
    }
  }
}
