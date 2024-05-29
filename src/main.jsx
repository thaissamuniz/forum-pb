import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Registration from "./pages/Registration/Registration.jsx";
import NewPost from "./pages/NewPost/NewPost.jsx";
import People from "./pages/People/People.jsx";
import Login from "./pages/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/new-post",
    element: <NewPost />,
  },
  {
    path: "/people",
    element: <People />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
