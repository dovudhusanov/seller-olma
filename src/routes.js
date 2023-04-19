import React from "react";
import {Navigate, useRoutes} from "react-router-dom";
import BaseLayout from "./layout/base-layout";
import {Profile, NotFound, Products, PersonalInformation, CreateProduct, Landing, Signup, Login} from "./pages"

export const Routes = () => {
    const token = localStorage.getItem("access");
    const isAuthorized = React.useMemo(() => Boolean(token), [token]);

    const PrivateRoute = [
        {
            path: '/',
            element: <BaseLayout/>,
            children: [
                {path: "/", element: <Navigate to={"/seller/personal-information"}/>},
                {path: "/seller/profile", element: <Profile />},
                {path: "/seller/personal-information", element: <PersonalInformation/>},
                {path: `/seller/:sellerId/products/all`, element: <Products/>},
                {path: `/seller/:sellerId/products/create`, key: 3, element: <CreateProduct/>},
                {path: `/*`, element: <NotFound/>},
            ],
        },
    ];

    const PublicRoutes = [
        {
            children: [
                {path: "/", element: <Landing/>},
                {path: "/seller/signup", element: <Signup/>},
                {path: "/seller/login", element: <Login/>},
                {path: `/*`, element: <NotFound/>},
            ],
        },
    ];

    return useRoutes(isAuthorized ? PrivateRoute : PublicRoutes);
};