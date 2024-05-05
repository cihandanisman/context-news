import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
import { Outlet } from "react-router-dom";
const PrivateRouter = () => {
  const { signed } = useContext(AuthContext);
  return !signed ? (
    <Login />
  ) : (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRouter;
