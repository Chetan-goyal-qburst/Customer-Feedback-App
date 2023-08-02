import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import RegisterPage from "../src/menupage/register";
import CustomerPage from "../src/menupage/customer";
import EndPage from "../src/menupage/endpage";
import HomePage from "../src/menupage/home";
import LoginPage from "../src/menupage/loginpage";
import RegisterSuccess from "../src/menupage/registersuccess";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
    },
    {
        path:"register",
        element:<RegisterPage/>,
    },
    {
        path:"customer",
        element:<CustomerPage/>,
    },
    {
        path:"endpage",
        element:<EndPage/>,
    },
    {
        path:"home",
        element:<HomePage/>,
    },
    {
        path:"login",
        element:<LoginPage/>,
    },
    {
        path:"registersuccess",
        element:<RegisterSuccess/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router = {router}/>
);
