import './App.css'
import MyButton from './components/Button';

function App() {

  return (
    <div className='App'>
      <MyButton  text="Click Me"/>
      <MyButton  text={true}/>
      <MyButton onClick={() => alert("Hello ! from btn 2")}  text="Click Me Again"/>
    </div>
  )
}

export default App