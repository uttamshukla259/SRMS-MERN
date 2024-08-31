import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?<Outlet />:<Navigate to="/signup" />
}

export default PrivateComponent;