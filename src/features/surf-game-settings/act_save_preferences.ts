import type { StoreAPI, GameAction, Difficulty } from '../relayswitch-lite/relayswitch-lite.store';

export function actSavePreferences(store: StoreAPI, difficulty: Difficulty): void {
  store.dispatch({ type: 'APPLY_SETTINGS', difficulty } as GameAction);
}
