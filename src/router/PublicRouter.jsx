import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";

export const PublicRoute = ({ isAuthenticated }) => {
  console.log(isAuthenticated)
  return !isAuthenticated ? (
    <AuthRouter />
  ) : (
    <Navigate to="/post/home"/>
  );
};