import type { StoreAPI, GameAction } from '../relayswitch-lite/relayswitch-lite.store';

export function actStartGame(store: StoreAPI): void {
  const state = store.getState();
  if (state.paused || state.settingsOpen || state.gameOver) {
    store.dispatch({ type: 'RESTART' } as GameAction);
  }
}
