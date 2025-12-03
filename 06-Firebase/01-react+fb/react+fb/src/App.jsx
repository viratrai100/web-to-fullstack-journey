import {getDatabase, ref , set} from "firebase/database"
import { app } from "./firebase";
import './App.css'


const db = getDatabase(app);

const putData = () => {
  set(ref(db, "user/virat"), {
    id: 1,
    name: "Virat Rai",
    sname: "Sahil Rai",
    age: 20,
  });
};

function App() {

  return (
    <div className="app">
      <h1>Testing React Model</h1>
      <h1>Mai H1 Hu Bhai</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App