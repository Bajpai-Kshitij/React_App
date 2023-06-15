import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get next Advice : {count + 1}</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>The New advice has been generated, Current advice value:{props.count}</p>
  );
}
