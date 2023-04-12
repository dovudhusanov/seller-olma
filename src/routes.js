import React from "react";
import {Navigate, useRoutes} from "react-router-dom";
import {
    PersonalInformation,
    Landing, Signup, Login, About, Products
} from "./pages";
import {BaseLayout} from "./layout/base-layout";

export const Routes = () => {
    const token = localStorage.getItem("access");
    const isAuthorized = React.useMemo(() => Boolean(token), [token]);
    const PrivateRoute = [
        {
            path: '/',
            element: <BaseLayout />,
            children: [
                {path: "/", element: <Navigate to={"/seller/personal-information"}/>},
                {path: "/seller/personal-information", element: <PersonalInformation/>},
                {path: `/seller/:sellerId/products/all`, element: <Products/>},
                // {path: "/profile", element: <Navigate to={"/user/info"}/>},
                // {path: "/user/my-orders", element: <MyOrders/>},
                // {path: "/user/info", element: <MyInfos/>},
                // {path: "/user/settings", element: <Settings/>},
                // {path: "/user/change-password", element: <ChangePassword/>},
                // {path: "/user/change-phone-number", element: <ChangePhoneNumber/>},
                // {path: "/wishlist", element: <Saved/>},
                // {path: "/search", element: <SearchResults searchParams={new URLSearchParams(window.location.search).get("query")}/>},
                // {path: "/categories/:categoryName", element: <Categories/>},
                // {path: "categories/:category/:productId", element: <ProductDetails/>},
                // {path: "/cart", element: <Cart/>},
                // {path: "/faq", element: <FAQPage/>},
                // {path: "/*", element: <NotFoundPage/>},
            ],
        },
    ];
    const PublicRoutes = [
        {
            children: [
                {path: "/", element: <Landing/>},
                {path: "/seller/signup", element: <Signup/>},
                {path: "/seller/login", element: <Login/>},
                // {path: "/verify-phone-number", element: <VerifyCode/>},
                // {path: "/reset-password", element: <ResetPassword/>},
                // {path: "/new-password", element: <NewPassword/>},
                // {path: "/user/my-orders", element: <Navigate to="/login"/>},
                // {path: "/wishlist", element: <Navigate to="/login" />},
                // {path: "/search", element: <SearchResults searchParams={new URLSearchParams(window.location.search).get("query")}/>},
                // {path: "/categories/:categoryName", element: <Categories/>},
                // {path: "categories/:category/:productId", element: <ProductDetails/>},
                // {path: "/cart", element: <Cart/>},
                // {path: "/faq", element: <FAQPage/>},
                // {path: "/*", element: <NotFoundPage/>},
            ],
        },
    ];

    return useRoutes(isAuthorized ? PrivateRoute : PublicRoutes);
};