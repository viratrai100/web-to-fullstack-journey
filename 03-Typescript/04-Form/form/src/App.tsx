import './App.css'
import MyButton from './components/Button';

function App() {

  return (
    <div className='App'>
      <MyButton onClick={() => alert("Hello")}  text="Click Me"/>
    </div>
  )
}

export default App