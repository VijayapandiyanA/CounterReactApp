import { useCallback } from "react";

export default function Counter({ state, dispatch }) {

  const increment = useCallback(() => {
    dispatch({ type: "increment" });
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, [dispatch]);

  const asyncIncrement = () => {
    setTimeout(() => {
      dispatch({ type: "increment" });
    }, 1000);
  };

  return (
    <div>

      <div className="count">{state.count}</div>

      <div className="buttons">

        <button className="btn-primary" onClick={increment}>
          +
        </button>

        <button className="btn-secondary" onClick={decrement}>
          -
        </button>

        <button className="btn-reset" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>

      </div>

      <div className="buttons">

        <button className="btn-primary" onClick={asyncIncrement}>
          + Async
        </button>

        <button
          className="btn-secondary"
          onClick={() => dispatch({ type: "undo" })}
        >
          Undo
        </button>

        <button
          className="btn-secondary"
          onClick={() => dispatch({ type: "redo" })}
        >
          Redo
        </button>

      </div>

      <div className="step-container">
        Step:
        <input
          type="number"
          value={state.step}
n="1"
          onChange={(e) =>
            dispatch({
              type: "step",
              payload: Number(e.target.value)
            })
          }
        />
      </div>

    </div>
  );
}