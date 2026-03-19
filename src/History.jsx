import { useMemo } from "react";

export default function History({ history }) {

  const list = useMemo(() => {
    return history.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  }, [history]);

  return (
    <div className="history">

      <h3>History</h3>

      <ul>{list}</ul>

    </div>
  );
}