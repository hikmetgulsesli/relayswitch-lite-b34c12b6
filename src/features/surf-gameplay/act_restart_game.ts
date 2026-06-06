import type { StoreAPI, GameAction } from '../relayswitch-lite/relayswitch-lite.store';

export function actRestartGame(store: StoreAPI): void {
  store.dispatch({ type: 'RESTART' } as GameAction);
}
