import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const token = useSelector((state) => state.auth);
  console.log(JSON.parse(atob(token.split(".")[1])));
  if (!token) return <Navigate to={"/auth/sign-in"} />;
  return <Outlet />;
};

export default Private;
