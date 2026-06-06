export type Difficulty = 'casual' | 'normal' | 'overload';

export interface Entity {
  lane: number;
  position: number;
}

export interface GameState {
  player: Entity;
  obstacles: Entity[];
  shards: Entity[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  difficulty: Difficulty;
  settingsOpen: boolean;
  gameOver: boolean;
  speed: number;
  spawnTimer: number;
  shardTimer: number;
  highScore: number;
}

export type GameAction =
  | { type: 'TICK'; delta: number }
  | { type: 'MOVE_PLAYER'; laneDelta: number }
  | { type: 'TOGGLE_PAUSE' }
  | { type: 'OPEN_SETTINGS' }
  | { type: 'CLOSE_SETTINGS' }
  | { type: 'SET_DIFFICULTY'; difficulty: Difficulty }
  | { type: 'RESTART' }
  | { type: 'COLLECT_SHARD'; index: number }
  | { type: 'DAMAGE' }
  | { type: 'APPLY_SETTINGS'; difficulty: Difficulty };

const LANES = 3;
const MAX_POSITION = 1000;
const SPAWN_DISTANCE = 1200;

function clampLane(lane: number) {
  return Math.max(0, Math.min(LANES - 1, lane));
}

function randLane() {
  return Math.floor(Math.random() * LANES);
}

function difficultyConfig(difficulty: Difficulty) {
  switch (difficulty) {
    case 'casual':
      return { speed: 80, spawnInterval: 2.5, shardInterval: 3.0 };
    case 'normal':
      return { speed: 140, spawnInterval: 1.6, shardInterval: 2.2 };
    case 'overload':
      return { speed: 220, spawnInterval: 0.9, shardInterval: 1.4 };
  }
}

export function createInitialState(overrides?: Partial<GameState>): GameState {
  const cfg = difficultyConfig(overrides?.difficulty ?? 'normal');
  return {
    player: { lane: 1, position: 100 },
    obstacles: [],
    shards: [],
    score: 0,
    energy: 100,
    lives: 3,
    paused: false,
    difficulty: overrides?.difficulty ?? 'normal',
    settingsOpen: false,
    gameOver: false,
    speed: cfg.speed,
    spawnTimer: cfg.spawnInterval,
    shardTimer: cfg.shardInterval,
    highScore: overrides?.highScore ?? 0,
    ...overrides,
  };
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'TICK': {
      if (state.paused || state.gameOver || state.settingsOpen) return state;
      const dt = action.delta;
      const cfg = difficultyConfig(state.difficulty);
      let { speed } = state;
      let spawnTimer = state.spawnTimer - dt;
      let shardTimer = state.shardTimer - dt;

      // Move obstacles toward player (decrease position)
      const movedObstacles = state.obstacles
        .map((o) => ({ ...o, position: o.position - speed * dt }))
        .filter((o) => o.position > -200);

      // Move shards toward player
      const movedShards = state.shards
        .map((s) => ({ ...s, position: s.position - speed * dt }))
        .filter((s) => s.position > -200);

      // Spawn
      let nextObstacles = movedObstacles;
      let nextShards = movedShards;
      if (spawnTimer <= 0) {
        nextObstacles = [
          ...nextObstacles,
          { lane: randLane(), position: SPAWN_DISTANCE + Math.random() * 200 },
        ];
        spawnTimer = cfg.spawnInterval;
      }
      if (shardTimer <= 0) {
        nextShards = [
          ...nextShards,
          { lane: randLane(), position: SPAWN_DISTANCE + Math.random() * 200 },
        ];
        shardTimer = cfg.shardInterval;
      }

      // Collision detection (simple lane + proximity)
      let lives = state.lives;
      let energy = state.energy;
      let score = state.score;
      let gameOver: boolean = state.gameOver;

      const playerPos = state.player.position;
      const hitRadius = 60;

      // Obstacle hits
      for (const o of nextObstacles) {
        if (o.lane === state.player.lane && Math.abs(o.position - playerPos) < hitRadius) {
          lives -= 1;
          energy = Math.max(0, energy - 25);
          if (lives <= 0) {
            gameOver = true;
          }
        }
      }

      // Shard collects
      const remainingShards: Entity[] = [];
      for (const s of nextShards) {
        if (s.lane === state.player.lane && Math.abs(s.position - playerPos) < hitRadius) {
          score += 50;
          energy = Math.min(100, energy + 10);
        } else {
          remainingShards.push(s);
        }
      }

      // Passive score
      score += Math.floor(dt * 10);

      const highScore = Math.max(state.highScore, score);

      return {
        ...state,
        obstacles: nextObstacles,
        shards: remainingShards,
        score,
        energy,
        lives,
        gameOver,
        spawnTimer,
        shardTimer,
        speed,
        highScore,
      };
    }
    case 'MOVE_PLAYER': {
      if (state.gameOver) return state;
      return {
        ...state,
        player: {
          ...state.player,
          lane: clampLane(state.player.lane + action.laneDelta),
        },
      };
    }
    case 'TOGGLE_PAUSE': {
      if (state.gameOver) return state;
      return { ...state, paused: !state.paused };
    }
    case 'OPEN_SETTINGS': {
      return { ...state, settingsOpen: true, paused: true };
    }
    case 'CLOSE_SETTINGS': {
      return { ...state, settingsOpen: false, paused: false };
    }
    case 'SET_DIFFICULTY': {
      const cfg = difficultyConfig(action.difficulty);
      return {
        ...state,
        difficulty: action.difficulty,
        speed: cfg.speed,
        spawnTimer: cfg.spawnInterval,
        shardTimer: cfg.shardInterval,
      };
    }
    case 'APPLY_SETTINGS': {
      const cfg = difficultyConfig(action.difficulty);
      return {
        ...state,
        difficulty: action.difficulty,
        speed: cfg.speed,
        spawnTimer: cfg.spawnInterval,
        shardTimer: cfg.shardInterval,
        settingsOpen: false,
        paused: false,
      };
    }
    case 'RESTART': {
      const cfg = difficultyConfig(state.difficulty);
      return {
        ...createInitialState({ difficulty: state.difficulty, highScore: state.highScore }),
        speed: cfg.speed,
        spawnTimer: cfg.spawnInterval,
        shardTimer: cfg.shardInterval,
      };
    }
    case 'COLLECT_SHARD': {
      const shards = state.shards.filter((_, i) => i !== action.index);
      return {
        ...state,
        shards,
        score: state.score + 50,
        energy: Math.min(100, state.energy + 10),
      };
    }
    case 'DAMAGE': {
      const lives = state.lives - 1;
      return {
        ...state,
        lives,
        energy: Math.max(0, state.energy - 25),
        gameOver: lives <= 0,
      };
    }
    default:
      return state;
  }
}

export interface StoreAPI {
  getState: () => GameState;
  dispatch: (action: GameAction) => void;
  subscribe: (listener: () => void) => () => void;
}

export function createStore(initial?: Partial<GameState>): StoreAPI {
  let state = createInitialState(initial);
  const listeners = new Set<() => void>();

  return {
    getState: () => state,
    dispatch: (action: GameAction) => {
      state = gameReducer(state, action);
      listeners.forEach((l) => l());
    },
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}
