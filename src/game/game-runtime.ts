import type { StoreAPI, GameAction } from '../features/relayswitch-lite/relayswitch-lite.store';

export interface GameRuntime {
  start(): void;
  stop(): void;
  isRunning(): boolean;
}

export function createGameRuntime(store: StoreAPI): GameRuntime {
  let running = false;
  let rafId = 0;
  let lastTs = 0;

  const tick = (ts: number) => {
    if (!running) return;
    if (lastTs === 0) lastTs = ts;
    const delta = Math.min((ts - lastTs) / 1000, 0.1); // cap dt at 100ms
    lastTs = ts;

    store.dispatch({ type: 'TICK', delta } as GameAction);

    rafId = requestAnimationFrame(tick);
  };

  return {
    start: () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(tick);
    },
    stop: () => {
      running = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      lastTs = 0;
    },
    isRunning: () => running,
  };
}
