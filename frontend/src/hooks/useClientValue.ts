import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/**
 * Uses serverFallback during SSR and hydration. getClient must return a
 * primitive or stable reference to avoid render loops.
 */
export function useClientValue<T>(getClient: () => T, serverFallback: T): T {
  return useSyncExternalStore(emptySubscribe, getClient, () => serverFallback);
}
