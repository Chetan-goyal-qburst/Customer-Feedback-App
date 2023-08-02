import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import RegisterPage from "../src/pages/menupage/register";
import CustomerPage from "../src/pages/menupage/customer";
import EndPage from "../src/pages/menupage/endpage";
import HomePage from "../src/pages/menupage/home";
import LoginPage from "../src/pages/menupage/loginpage";
import RegisterSuccess from "../src/pages/menupage/registersuccess";
import LinksList from "../src/pages/preview_dynamicpage/components/LinksList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "customer",
    element: <CustomerPage />,
  },
  {
    path: "endpage",
    element: <EndPage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "registersuccess",
    element: <RegisterSuccess />,
  },
  {
    path: "links",
    element: <LinksList />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
