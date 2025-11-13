import './App.css';
import Counter from './components/Count';
import { useDispatch } from 'react-redux';

function App() {

  const Dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={(e) => Dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <Counter />
      <button onClick={(e) => Dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  );
}

export default App;
