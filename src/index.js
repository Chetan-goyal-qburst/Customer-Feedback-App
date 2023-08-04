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
import CompanyList from "./pages/companypage/page/companylist/CompanyList";
import Companyregistration from "./pages/companypage/page/companyregistration/Companyregistration";
import ProductList from "./pages/companypage/page/productlist/Productlist";
import Productregistration from "./pages/companypage/page/productregistration/Productregistration";
import Layout from "./pages/formPage/Layout";
import Description from "./pages/companypage/page/description/Description";

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
  {
    path: "/companylist",
    element: <CompanyList />,
  },
  {
    path: "/companyregister",
    element: <Companyregistration />,
  },
  {
    path: "/productlist",
    element: <ProductList />,
  },
  {
    path: "/productregister",
    element: <Productregistration />,
  },
  {
    path: "/formpage",
    element: <Layout />,
  },
  {
    path: "/description",
    element: <Description />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
