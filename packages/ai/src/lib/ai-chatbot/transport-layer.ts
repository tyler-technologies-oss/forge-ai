export interface TransportConfig {
  url: string;
  credentials?: RequestCredentials;
  headers?: Record<string, string>;
}

export interface TransportLayer {
  connect(): Promise<void>;
  send(data: unknown): void;
  onData(callback: (data: string) => void): void;
  onError(callback: (error: Error) => void): void;
  abort(): void;
  disconnect(): void;
}
