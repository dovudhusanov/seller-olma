import React, {Suspense, lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";
import {Loader} from "./components";
import BaseLayout from "./layout/base-layout";
import {Profile, NotFound, Products, PersonalInformation, CreateProduct} from "./pages"
const Loadable = (Component) => (props) => (
    <Suspense fallback={<Loader/>}>
        <Component {...props} />
    </Suspense>
);

const Landing = Loadable(lazy(() => import("./pages/landing/landing")));
const Signup = Loadable(lazy(() => import("./pages/signup/signup")));
const Login = Loadable(lazy(() => import("./pages/login/login")));

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