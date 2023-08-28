import { useState } from "react";
import reactLogo from "./assets/react.svg";
import AddProduct from "./Addproduct";
import "./App.css";

import ProductList from "./ProductList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList></ProductList>,
  },
  ,
  {
    path: "/add",
    element: <AddProduct></AddProduct>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
