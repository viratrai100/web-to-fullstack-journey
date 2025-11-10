import { useContext, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { CounterContext } from "./context/Counter";

function App() {
  const counterState = useContext(CounterContext);

  console.log("Context", counterState);

  return (
    <div className="App">
      {/* <h1>Context API</h1> */}
      <h1>Count is {counterState.count} </h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;