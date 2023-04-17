import React, {Suspense, lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";
import {Loader} from "./components";

const Loadable = (Component) => (props) => (
    <Suspense fallback={<Loader/>}>
        <Component {...props} />
    </Suspense>
);

const Landing = Loadable(lazy(() => import("./pages/landing/landing")));
const Signup = Loadable(lazy(() => import("./pages/signup/signup")));
const Login = Loadable(lazy(() => import("./pages/login/login")));
const Products = Loadable(lazy(() => import("./pages/products/products")));
const CreateProduct = Loadable(lazy(() => import("./pages/create-product/create-product")));
const NotFound = Loadable(lazy(() => import("./pages/not-found/not-found")));
const BaseLayout = Loadable(lazy(() => import("./layout/base-layout")));
const PersonalInformation = Loadable(lazy(() => import("./pages/personal-information/personal-information")));
const Profile = Loadable(lazy(() => import("./pages/profile/profile")))

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