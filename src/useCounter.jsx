import { useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
  history: [0],
  index: 0
};

function reducer(state, action) {

  switch (action.type) {

    case "increment":
      const inc = state.count + state.step;
      return {
        ...state,
        count: inc,
        history: [...state.history.slice(0, state.index + 1), inc],
        index: state.index + 1
      };

    case "decrement":
      const dec = state.count - state.step;
      return {
        ...state,
        count: dec,
        history: [...state.history.slice(0, state.index + 1), dec],
        index: state.index + 1
      };

    case "step":
      return {
        ...state,
        step: action.payload
      };

    case "reset":
      return initialState;

    case "undo":
      if (state.index === 0) return state;

      return {
        ...state,
        count: state.history[state.index - 1],
        index: state.index - 1
      };

    case "redo":
      if (state.index === state.history.length - 1) return state;

      return {
        ...state,
        count: state.history[state.index + 1],
        index: state.index + 1
      };

    default:
      return state;
  }
}

export default function useCounter() {
  return useReducer(reducer, initialState);
}