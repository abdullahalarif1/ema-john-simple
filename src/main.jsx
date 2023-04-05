import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Orders from "./Orders/Orders";
import Inventory from "./Inventory/Inventory";
import Login from "./Login/Login";
import cardProductLoader from "./Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
       path: '/',
       element: <Shop></Shop>,
      },
      {
       path: '/orders',
       element: <Orders></Orders>,
       loader: cardProductLoader
      },
      {
       path: '/inventory',
       element: <Inventory></Inventory>,
      },
      {
       path: '/login',
       element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
