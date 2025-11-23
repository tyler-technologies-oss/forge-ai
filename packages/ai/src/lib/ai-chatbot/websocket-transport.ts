import type { TransportConfig, TransportLayer } from './transport-layer.js';

export class WebSocketTransport implements TransportLayer {
  #config: TransportConfig;
  #ws: WebSocket | null = null;
  #dataCallback?: (data: string) => void;
  #errorCallback?: (error: Error) => void;

  constructor(config: TransportConfig) {
    this.#config = config;
  }

  public async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.#ws = new WebSocket(this.#config.url);

        this.#ws.onopen = () => {
          resolve();
        };

        this.#ws.onerror = () => {
          const error = new Error('WebSocket connection error');
          reject(error);
          if (this.#errorCallback) {
            this.#errorCallback(error);
          }
        };

        this.#ws.onmessage = (event: MessageEvent) => {
          if (this.#dataCallback && typeof event.data === 'string') {
            this.#dataCallback(event.data);
          }
        };

        this.#ws.onclose = () => {
          this.#ws = null;
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  public disconnect(): void {
    this.abort();
  }

  public send(data: unknown): void {
    if (!this.#ws || this.#ws.readyState !== WebSocket.OPEN) {
      const error = new Error('WebSocket not connected');
      if (this.#errorCallback) {
        this.#errorCallback(error);
      }
      return;
    }

    try {
      this.#ws.send(JSON.stringify(data));
    } catch (error) {
      if (this.#errorCallback) {
        this.#errorCallback(error as Error);
      }
    }
  }

  public onData(callback: (data: string) => void): void {
    this.#dataCallback = callback;
  }

  public onError(callback: (error: Error) => void): void {
    this.#errorCallback = callback;
  }

  public abort(): void {
    if (this.#ws) {
      this.#ws.close();
      this.#ws = null;
    }
  }
}
