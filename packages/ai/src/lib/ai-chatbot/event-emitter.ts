/** Represents a subscription that can be cancelled */
export interface Subscription {
  /** Cancels the subscription and removes the listener */
  unsubscribe(): void;
}

/**
 * Generic event emitter for pub/sub pattern with type-safe events
 * @template T The event payload type (defaults to void for events without data)
 */
export class EventEmitter<T = void> {
  #listeners: Array<(event: T) => void> = [];

  /**
   * Subscribes a listener to events
   * @param listener Function to call when events are emitted
   * @returns Subscription object to cancel the listener
   */
  public subscribe(listener: (event: T) => void): Subscription {
    this.#listeners.push(listener);

    return {
      unsubscribe: () => {
        const index = this.#listeners.indexOf(listener);
        if (index > -1) {
          this.#listeners.splice(index, 1);
        }
      }
    };
  }

  /**
   * Emits an event to all subscribed listeners
   * @param event The event payload to send to listeners
   */
  public emit(event: T): void {
    const listeners = [...this.#listeners];
    for (const listener of listeners) {
      try {
        listener(event);
      } catch (error) {
        console.error('Error in event listener:', error);
      }
    }
  }

  /** Removes all listeners */
  public clear(): void {
    this.#listeners = [];
  }

  /** Returns the current number of active listeners */
  public get listenerCount(): number {
    return this.#listeners.length;
  }
}

/**
 * Manages multiple subscriptions as a single unit for batch cleanup
 * Useful for managing event listeners that should all be cleaned up together
 */
export class SubscriptionManager implements Subscription {
  #subscriptions: Subscription[] = [];
  #isUnsubscribed = false;

  /**
   * Adds one or more subscriptions to manage
   * @param subscriptions Subscriptions to add to the manager
   */
  public add(...subscriptions: Subscription[]): void {
    if (this.#isUnsubscribed) {
      for (const sub of subscriptions) {
        sub.unsubscribe();
      }
      return;
    }
    this.#subscriptions.push(...subscriptions);
  }

  /** Unsubscribes from all managed subscriptions */
  public unsubscribe(): void {
    if (this.#isUnsubscribed) {
      return;
    }
    this.#isUnsubscribed = true;

    for (const subscription of this.#subscriptions) {
      try {
        subscription.unsubscribe();
      } catch (error) {
        console.error('Error unsubscribing:', error);
      }
    }
    this.#subscriptions = [];
  }

  /** Returns whether all subscriptions have been unsubscribed */
  public get isUnsubscribed(): boolean {
    return this.#isUnsubscribed;
  }
}
