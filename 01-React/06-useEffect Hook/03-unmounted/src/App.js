import React, { useEffect, useState } from "react";
import MyComponent from "./MyComp";
import "./App.css";

const App = () => {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    console.log("App is Mounting...");
  }, []);

  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <MyComponent /> */}
      {/* conditionally render this  */}
      {isVisible ? <MyComponent /> : <></>}
      <button onClick={() => setVisible(!isVisible)}>Toggle</button>
    </div>
  );
};

export default App;
