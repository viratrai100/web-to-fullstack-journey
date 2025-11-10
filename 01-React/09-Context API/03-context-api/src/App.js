import React from "react";
import Item from './components/Item';
import Cart from './components/Cart';
import './App.css';

function App() {


  return (
    <div className="App">
      <h1>Context API</h1>
      <Item name="MacBook Pro" price={100000} />
      <Item name="Pendrive" price={4000} />
      <Item name="Mobile" price={35000} />
      <Cart />
    </div>
  );
}

export default App;
