import { Routes, Route } from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from './pages/Home';
import EditPage from './pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>Meme Generaor</h1>
      {/* <h1>Meme Generaor Virat</h1> */}
      <Routes>
        <Route path="/" element={ <Homepage />} />
        <Route path="/edit" element={ <EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
