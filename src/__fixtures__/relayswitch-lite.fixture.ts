import type { Entity, GameState } from '../features/relayswitch-lite/relayswitch-lite.store';

export function makeEntity(lane: number, position: number): Entity {
  return { lane, position };
}

export function makeGameState(overrides?: Partial<GameState>): GameState {
  return {
    player: { lane: 1, position: 100 },
    obstacles: [],
    shards: [],
    score: 0,
    energy: 100,
    lives: 3,
    paused: false,
    difficulty: 'normal',
    settingsOpen: false,
    gameOver: false,
    speed: 140,
    spawnTimer: 1.6,
    shardTimer: 2.2,
    highScore: 0,
    ...overrides,
  };
}

export const fixtureStates = {
  fresh: makeGameState(),
  paused: makeGameState({ paused: true }),
  gameOver: makeGameState({ gameOver: true, lives: 0, energy: 0 }),
  settingsOpen: makeGameState({ settingsOpen: true, paused: true }),
  withObstacles: makeGameState({
    obstacles: [
      makeEntity(0, 400),
      makeEntity(1, 600),
      makeEntity(2, 900),
    ],
  }),
  withShards: makeGameState({
    shards: [
      makeEntity(0, 350),
      makeEntity(2, 700),
    ],
  }),
  collisionImminent: makeGameState({
    player: { lane: 1, position: 100 },
    obstacles: [makeEntity(1, 110)],
  }),
  shardCollectible: makeGameState({
    player: { lane: 0, position: 100 },
    shards: [makeEntity(0, 105)],
  }),
  overloadDifficulty: makeGameState({
    difficulty: 'overload',
    speed: 220,
    spawnTimer: 0.9,
    shardTimer: 1.4,
  }),
  casualDifficulty: makeGameState({
    difficulty: 'casual',
    speed: 80,
    spawnTimer: 2.5,
    shardTimer: 3.0,
  }),
} as const;
