import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ isAdmin }) => {


  return isAdmin ? <Outlet/>:<Navigate to={'/profile'}/>
};

export default AdminRoute;
