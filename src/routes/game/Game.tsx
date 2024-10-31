import { useGameState } from "./hooks/useGameState";

export const Game = () => {
  const [state, dispatch] = useGameState();

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-neutral-900">Game</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <span>{state.count}</span>
    </div>
  );
};
