import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Suspense from "../utils";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import SingleProducts from "./home/singleProducts/SingleProducts";
import Cart from "./home/cart/Cart";
import Profile from "./profile/Profile";
import AddCard from "./profile/AddCart";

const Home = lazy(() => import("./home/Home"));
const Auth = lazy(() => import("./auth/Auth"));
const Otp = lazy(() => import("./auth/otp/Otp"));
const Signup = lazy(() => import("./auth/sign-up/signup"));
const Signin = lazy(() => import("./auth/sign-in/signin"));
const Search = lazy(() => import("./search/Search"));

const RouteController = () => {
  return useRoutes([
    {
      element: (
        <Suspense>
          <>
            <Header />
            <Footer />
          </>
        </Suspense>
      ),

      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/search",
          element: (
            <Suspense>
              <Search />
            </Suspense>
          ),
        },
        {
          path: "products/:id",
          element: (
            <Suspense>
              <SingleProducts />
            </Suspense>
          ),
        },

        {
          path: "/cart",
          element: (
            <Suspense>
              <Cart />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/auth",
      element: (
        <Suspense>
          <Auth />
        </Suspense>
      ),
      children: [
        {
          path: "/auth/otp",
          element: (
            <Suspense>
              <Otp />
            </Suspense>
          ),
        },
        {
          path: "/auth/sign-in",
          element: (
            <Suspense>
              <Signin />
            </Suspense>
          ),
        },
        {
          path: "/auth/sign-up",
          element: (
            <Suspense>
              <Signup />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "profile",
      element: (
        <Suspense>
          <Profile />
        </Suspense>
      ),
      children: [
        {
          path: "/profile/add",
          element: (
            <Suspense>
              <AddCard />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default RouteController;
