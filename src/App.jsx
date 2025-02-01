import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import Products from "./pages/products";
import Blog from "./pages/blogs";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar /><Home />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Navbar /><Blog/>
      </>
    ),
  },
  {
    path: "/products",
    element: (
      <>
        <Navbar /><Products/>
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
