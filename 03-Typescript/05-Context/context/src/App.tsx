import "./App.css";
import MyButton from "./components/Button";

import { CounterProvider } from "./provider/Counter";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <MyButton onClick={() => alert("Hello")} text="Click Me" />
      </CounterProvider>
    </div>
  );
}

export default App;
