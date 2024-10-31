import { GameState } from "../hooks/types";

export const decodeState = (state: string) =>
  JSON.parse(atob(state)) as GameState;
