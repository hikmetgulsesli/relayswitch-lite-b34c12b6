import type { StoreAPI, GameAction } from '../features/relayswitch-lite/relayswitch-lite.store';
import type { GameRuntime } from '../game/game-runtime';

export interface AppBridge {
  state: ReturnType<StoreAPI['getState']>;
  actions: {
    moveLeft: () => void;
    moveRight: () => void;
    togglePause: () => void;
    openSettings: () => void;
    closeSettings: () => void;
    setDifficulty: (difficulty: 'casual' | 'normal' | 'overload') => void;
    applySettings: (difficulty: 'casual' | 'normal' | 'overload') => void;
    restart: () => void;
  };
  runtime: {
    start: () => void;
    stop: () => void;
    isRunning: () => boolean;
  };
}

export function exposeBridge(store: StoreAPI, runtime: GameRuntime): void {
  const bridge: AppBridge = {
    get state() {
      return store.getState();
    },
    actions: {
      moveLeft: () => store.dispatch({ type: 'MOVE_PLAYER', laneDelta: -1 } as GameAction),
      moveRight: () => store.dispatch({ type: 'MOVE_PLAYER', laneDelta: 1 } as GameAction),
      togglePause: () => store.dispatch({ type: 'TOGGLE_PAUSE' } as GameAction),
      openSettings: () => store.dispatch({ type: 'OPEN_SETTINGS' } as GameAction),
      closeSettings: () => store.dispatch({ type: 'CLOSE_SETTINGS' } as GameAction),
      setDifficulty: (difficulty) => store.dispatch({ type: 'SET_DIFFICULTY', difficulty } as GameAction),
      applySettings: (difficulty) => store.dispatch({ type: 'APPLY_SETTINGS', difficulty } as GameAction),
      restart: () => store.dispatch({ type: 'RESTART' } as GameAction),
    },
    runtime: {
      start: () => runtime.start(),
      stop: () => runtime.stop(),
      isRunning: () => runtime.isRunning(),
    },
  };

  (window as unknown as Record<string, unknown>).app = bridge;
  (globalThis as unknown as Record<string, unknown>).app = bridge;
}

declare global {
  interface Window {
    app?: AppBridge;
  }
}
