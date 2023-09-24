import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Signin from "./pages/Signin";
import Registration from "./pages/Registration";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import About from "./pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products/:productID",
        element: <ProductDetails />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Signin",
        element: <Signin />,
      },
      {
        path: "/Registration",
        element: <Registration />,
      },
      {
        path: "/AboutAmazon",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
