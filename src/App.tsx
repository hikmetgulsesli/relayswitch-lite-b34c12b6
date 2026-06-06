import { useEffect, useRef, useState, useCallback } from 'react';
import { GameplayRelayswitchLite } from './screens';
import { GameSettingsRelayswitchLite } from './screens';
import { createStore, gameReducer, createInitialState } from './features/relayswitch-lite/relayswitch-lite.store';
import { createRepo, hydrateStateFromRepo } from './features/relayswitch-lite/relayswitch-lite.repo';
import { createGameRuntime } from './game/game-runtime';
import { exposeBridge } from './test/bridge';
import type { GameAction } from './features/relayswitch-lite/relayswitch-lite.store';

export default function App() {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
  const runtimeRef = useRef<ReturnType<typeof createGameRuntime> | null>(null);
  const [, forceRender] = useState(0);

  const rerender = useCallback(() => {
    forceRender((n) => n + 1);
  }, []);

  useEffect(() => {
    const repo = createRepo();
    const hydrated = hydrateStateFromRepo(repo);
    const store = createStore(hydrated);
    storeRef.current = store;

    const runtime = createGameRuntime(store);
    runtimeRef.current = runtime;

    exposeBridge(store, runtime);

    const unsub = store.subscribe(() => {
      rerender();
    });

    runtime.start();

    // Keyboard controls
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        store.dispatch({ type: 'MOVE_PLAYER', laneDelta: -1 } as GameAction);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        store.dispatch({ type: 'MOVE_PLAYER', laneDelta: 1 } as GameAction);
      } else if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') {
        store.dispatch({ type: 'TOGGLE_PAUSE' } as GameAction);
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      unsub();
      runtime.stop();
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [rerender]);

  const store = storeRef.current;
  const state = store?.getState();

  if (!state || !store) {
    return (
      <div
        data-setfarm-root="baseline"
        data-testid="setfarm-app-root"
        className="relative h-screen w-screen overflow-hidden bg-slate-950"
      />
    );
  }

  const runtimeSnapshot = {
    player: state.player,
    obstacles: state.obstacles,
    shards: state.shards,
    score: state.score,
    energy: state.energy,
    lives: state.lives,
    paused: state.paused,
  };

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="relative h-screen w-screen overflow-hidden"
    >
      {state.settingsOpen ? (
        <GameSettingsRelayswitchLite
          actions={{
            'close-1': () => store.dispatch({ type: 'CLOSE_SETTINGS' } as GameAction),
            'casual-2': () => store.dispatch({ type: 'SET_DIFFICULTY', difficulty: 'casual' } as GameAction),
            'normal-3': () => store.dispatch({ type: 'SET_DIFFICULTY', difficulty: 'normal' } as GameAction),
            'overload-4': () => store.dispatch({ type: 'SET_DIFFICULTY', difficulty: 'overload' } as GameAction),
            'cancel-5': () => store.dispatch({ type: 'CLOSE_SETTINGS' } as GameAction),
            'apply-override-6': () => store.dispatch({ type: 'APPLY_SETTINGS', difficulty: state.difficulty } as GameAction),
            'grid-os-1': () => {},
            'power-stats-2': () => {},
            'overload-logs-3': () => {},
            'system-cfg-4': () => {},
          }}
        />
      ) : (
        <GameplayRelayswitchLite
          actions={{
            'pause-1': () => store.dispatch({ type: 'TOGGLE_PAUSE' } as GameAction),
          }}
          runtime={runtimeSnapshot}
        />
      )}
    </div>
  );
}
