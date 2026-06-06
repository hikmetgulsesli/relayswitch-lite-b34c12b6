import type { StoreAPI, GameAction } from '../relayswitch-lite/relayswitch-lite.store';

export function actPauseGame(store: StoreAPI): void {
  store.dispatch({ type: 'TOGGLE_PAUSE' } as GameAction);
}
