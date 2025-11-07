import React, { useEffect } from "react";
import MyComponent from "./MyComp";
import "./App.css";

const App = () => {
  useEffect(() => {
    console.log("App is Mounting...");
  }, []);

  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <MyComponent />
    </div>
  );
};

export default App;