import React from "react";
import 
{ 
    createBrowserRouter, 
    // Route,
    RouterProvider   
}
from "react-router-dom";
import HomePage from "../pages/homepage";
import Login from "../pages/loginpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default function RouterApp() {
    return (
        <RouterProvider router={router} />
    );
}