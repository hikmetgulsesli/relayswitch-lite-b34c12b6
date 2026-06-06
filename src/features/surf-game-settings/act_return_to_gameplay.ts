import type { StoreAPI, GameAction } from '../relayswitch-lite/relayswitch-lite.store';

export function actReturnToGameplay(store: StoreAPI): void {
  store.dispatch({ type: 'CLOSE_SETTINGS' } as GameAction);
}
