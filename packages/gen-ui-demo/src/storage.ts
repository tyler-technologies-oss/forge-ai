import { openDB, type IDBPDatabase } from 'idb';

const DB_NAME = 'gen-ui-demo';
const DB_VERSION = 1;
const STORE_NAME = 'thread-state';

interface ThreadStateRecord {
  key: string;
  threadId: string;
  messages: unknown[];
  uiSpec: unknown;
  updatedAt: number;
}

let dbPromise: Promise<IDBPDatabase> | null = null;

function getDB(): Promise<IDBPDatabase> {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'key' });
        }
      }
    });
  }
  return dbPromise;
}

export async function saveThreadState(
  key: string,
  threadState: { threadId: string; messages: unknown[] },
  uiSpec: unknown
): Promise<void> {
  try {
    const db = await getDB();
    const record: ThreadStateRecord = {
      key,
      threadId: threadState.threadId,
      messages: threadState.messages,
      uiSpec,
      updatedAt: Date.now()
    };
    await db.put(STORE_NAME, record);
  } catch (e) {
    console.warn('Failed to save thread state to IndexedDB', e);
  }
}

export async function loadThreadState(key: string): Promise<{
  threadId: string;
  messages: unknown[];
  uiSpec: unknown;
} | null> {
  try {
    const db = await getDB();
    const record = await db.get(STORE_NAME, key) as ThreadStateRecord | undefined;
    if (record) {
      return {
        threadId: record.threadId,
        messages: record.messages,
        uiSpec: record.uiSpec
      };
    }
  } catch (e) {
    console.warn('Failed to load thread state from IndexedDB', e);
  }
  return null;
}

export async function clearThreadState(key: string): Promise<void> {
  try {
    const db = await getDB();
    await db.delete(STORE_NAME, key);
  } catch (e) {
    console.warn('Failed to clear thread state from IndexedDB', e);
  }
}

export async function getThreadId(key: string): Promise<string | null> {
  try {
    const db = await getDB();
    const record = await db.get(STORE_NAME, key) as ThreadStateRecord | undefined;
    return record?.threadId ?? null;
  } catch (e) {
    console.warn('Failed to get thread ID from IndexedDB', e);
  }
  return null;
}
