/**
 * Generate a unique identifier with an optional prefix.
 * @param prefix - Optional prefix for the ID.
 * @returns A unique identifier string.
 */
export function generateUniqueId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Adds or removes a state from an element's custom state set.
 *
 * @param internals - The element's internals object.
 * @param state - The name of the custom state to toggle.
 * @param value - Whether to add or remove the state.
 */
export function toggleState(internals: ElementInternals, state: string, value: boolean): void {
  if (value) {
    try {
      internals.states.add(state);
    } catch {
      internals.states.add(`--${state}`);
    }
  } else {
    try {
      internals.states.delete(state);
    } catch {
      internals.states.delete(`--${state}`);
    }
  }
}

/**
 * Formats a date as a short relative time label: "Just now" under a minute, "Xm ago"/"Xh ago"
 * under 24 hours, "Yesterday" between 24-48 hours elapsed, otherwise a short date (with year if
 * not the current year).
 *
 * @param dateString - An ISO date string to format.
 * @returns The formatted relative time label.
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const diffMs = Date.now() - date.getTime();
  const diffMinutes = Math.floor(diffMs / 60_000);
  const diffHours = Math.floor(diffMs / 3_600_000);
  const diffDays = Math.floor(diffMs / 86_400_000);

  if (diffMinutes < 1) {
    return 'Just now';
  }

  if (diffHours < 24) {
    return diffHours >= 1 ? `${diffHours}h ago` : `${diffMinutes}m ago`;
  }

  if (diffDays < 2) {
    return 'Yesterday';
  }

  const sameYear = date.getFullYear() === new Date().getFullYear();
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    ...(sameYear ? {} : { year: 'numeric' })
  }).format(date);
}

/**
 * Re-dispatches a cancelable custom event under a new type on the given host, forwarding its detail.
 * If the host's listeners prevent the forwarded event, `preventDefault()` is called on the source event too.
 *
 * @param host - The element to dispatch the forwarded event from.
 * @param sourceEvent - The original event to forward.
 * @param type - The event type to dispatch on the host.
 */
export function forwardCancelableEvent<T>(host: EventTarget, sourceEvent: CustomEvent<T>, type: string): void {
  const forwarded = new CustomEvent<T>(type, {
    detail: sourceEvent.detail,
    bubbles: true,
    composed: true,
    cancelable: true
  });

  if (!host.dispatchEvent(forwarded)) {
    sourceEvent.preventDefault();
  }
}
