interface StorageItem<T> {
  value: T;
  expiry: number;
}

const EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

export function setItemWithExpiry<T>(key: string, value: T): void {
  try {
    const item: StorageItem<T> = {
      value,
      expiry: Date.now() + EXPIRY_MS
    };
    localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.warn(`[Storage] Failed to save ${key}:`, error);
  }
}

export function getItemWithExpiry<T>(key: string): T | null {
  try {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }

    const item: StorageItem<T> = JSON.parse(itemStr);

    if (Date.now() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.warn(`[Storage] Failed to retrieve ${key}:`, error);
    return null;
  }
}

export function removeItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn(`[Storage] Failed to remove ${key}:`, error);
  }
}

export function buildStorageKey(teamId: string | undefined, agentId: string | undefined, suffix: string): string {
  const identifier = teamId || agentId;
  if (!identifier) {
    throw new Error('Either teamId or agentId required for storage key');
  }
  return `foundry-chatbot-${suffix}-${identifier}`;
}
