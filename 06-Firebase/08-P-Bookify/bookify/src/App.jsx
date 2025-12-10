import { Routes, Route} from 'react-router-dom';

// Components
import MyNavbar from './components/Navbar';

// Pages
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ListingPage from './pages/List';


// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className="">
      <MyNavbar />
      <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      {/* <Route path="/login" element={<h1>Login</h1>} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/book/list" element={<ListingPage />} />
    </Routes>
    {/* // <div className='container'>
    //   <h1>Hello Ji Mai H1 Hu </h1>
    //   <Button variant="success">Click me</Button>
    // </div> */}
    </div>
  )
}

export default App;