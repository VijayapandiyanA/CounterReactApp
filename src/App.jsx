import Counter from "./Counter";
import History from "./History";
import useCounter from "./useCounter";

export default function App() {

  const [state, dispatch] = useCounter();

  return (
    <div className="app">

      <div className="counter-card">

        <h1 className="title"> Counter</h1>

        <Counter state={state} dispatch={dispatch} />

        <History history={state.history} />

      </div>

    </div>
  );
}
