import { useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import { GameState } from "./types";
import { encodeState } from "../utils/encodeState";
import { decodeState } from "../utils/decodeState";

type Increment = { type: "increment" };
type Set = { type: "set"; state: GameState };

type Dispatches = Increment | Set;

const initialState: GameState = { count: 0 };

const getStateFromSearchParams = (searchParams: URLSearchParams) => {
  const searchState = searchParams.get("state");
  return searchState ? decodeState(searchState) : initialState;
};

export const useGameState = () => {
  const [state, dispatch] = useReducer(
    (state: GameState, action: Dispatches) => {
      switch (action.type) {
        case "increment":
          return { count: state.count + 1 };
        case "set":
          return action.state;
      }
    },
    { count: 0 }
  );

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const encoded = encodeState(state);
    setSearchParams({ state: encoded });
  }, [state]);

  useEffect(() => {
    const state = getStateFromSearchParams(searchParams);
    dispatch({ type: "set", state: state });
  }, []);

  const stateFromSearchParams = getStateFromSearchParams(searchParams);

  return [stateFromSearchParams, dispatch] as const;
};
