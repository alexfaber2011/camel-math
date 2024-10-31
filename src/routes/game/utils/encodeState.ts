import { GameState } from "../hooks/types";

export const encodeState = (state: GameState) => btoa(JSON.stringify(state));
