import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <div className="post-container">
        {post.map((post) => (
          <NavLink
            className="post-titles"
            style={{ display: "block" }}
            to={`/post/${post.id}`}
          >
            {post.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

const Settings = () => {
  return (
    <div>
      <h1>Settings Page</h1>
    </div>
  );
};

const SayUser = () => {
  const params = useParams();

  console.log("Params", params);
  return (
    <div>
      <h1>Your Name is {params.userName} </h1>
    </div>
  );
};

const PostPage = () => {
  const params = useParams();

  const [data, setData] = useState(null);

  console.log("Params", params);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  console.log("Data", data);

  if (data === null) return <p>Loading...</p>;
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/user/:userName" element={<SayUser />} />
        <Route path="/post/:postId" element={<PostPage />} />

        <Route
          path="/account"
          element={
            <div>
              <h1>Account Page</h1>
            </div>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Single Level Routes
// Multi Level Routes
// Dynamic Level Routes  -> : colon ka matlab dynamic

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
