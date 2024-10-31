import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Game = () => {
  const [state, setState] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ state: state.toString() });
  }, [state]);

  useEffect(() => {
    setState(searchParams.get("state") ? Number(searchParams.get("state")) : 1);
  }, []);

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-neutral-900">Game</h1>
      <button onClick={() => setState((s) => s + 1)}>+</button>
      <span>{searchParams.get("state")}</span>
    </div>
  );
};
