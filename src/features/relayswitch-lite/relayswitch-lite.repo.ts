import type { Difficulty, GameState } from './relayswitch-lite.store';

const HIGH_SCORE_KEY = 'relayswitch-lite:highScore';
const DIFFICULTY_KEY = 'relayswitch-lite:difficulty';

export interface Repo {
  loadHighScore(): number;
  saveHighScore(score: number): void;
  loadDifficulty(): Difficulty;
  saveDifficulty(difficulty: Difficulty): void;
}

function safeGetNumber(key: string, fallback: number): number {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null) return fallback;
    const n = Number(raw);
    return Number.isFinite(n) ? n : fallback;
  } catch {
    return fallback;
  }
}

function safeSet(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore storage errors
  }
}

function safeGetString(key: string, fallback: string): string {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

const VALID_DIFFICULTIES: Difficulty[] = ['casual', 'normal', 'overload'];

export function createRepo(): Repo {
  return {
    loadHighScore: () => safeGetNumber(HIGH_SCORE_KEY, 0),
    saveHighScore: (score: number) => safeSet(HIGH_SCORE_KEY, String(score)),
    loadDifficulty: () => {
      const raw = safeGetString(DIFFICULTY_KEY, 'normal');
      return VALID_DIFFICULTIES.includes(raw as Difficulty) ? (raw as Difficulty) : 'normal';
    },
    saveDifficulty: (difficulty: Difficulty) => safeSet(DIFFICULTY_KEY, difficulty),
  };
}

export function hydrateStateFromRepo(repo: Repo): Partial<GameState> {
  return {
    highScore: repo.loadHighScore(),
    difficulty: repo.loadDifficulty(),
  };
}
