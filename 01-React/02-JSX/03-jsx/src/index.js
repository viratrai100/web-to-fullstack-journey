import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function add(x,y) {
  return x + y;
}

function MyComponent() {
  const name = "Virat Rai";
  const z = 50 + 50;
  return <h1>Hello {name} {z}</h1>
}

function MyObject() {
  const name = "Virat Rai";
  return <h1>Hello {name} {add(2512, 2513)}</h1>
}

function MyProfile() {
  const link = "https://www.linkedin.com/in/viratrai100";
  return <a href={link}>Click me</a>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <MyComponent />
    <MyObject />
    <MyProfile />

    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
