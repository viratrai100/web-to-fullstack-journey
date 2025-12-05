import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import { app } from "./firebase";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import './App.css'

const auth = getAuth(app);

function App() {


  const signupUser = () => {
    createUserWithEmailAndPassword(auth, 'viratrai@gmail.com', 'virat@100').then(value => console.log(value))
  }

  return (
    <div className="app">
      {/* <h1>Testing React Model</h1>
      <button onClick={signupUser}>Create User</button> */}
      <SignupPage />
      <SigninPage />
    </div>
  );
}

export default App;