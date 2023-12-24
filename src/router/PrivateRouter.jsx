import { Navigate,Route,Routes } from "react-router-dom";
import App from "../App";
import { Home } from "../componentes/Home";
import { PostDetails } from "../componentes/Posts/PostDetails";
import { PostRoutes } from "./PostRoutes";

export const PrivateRoute = ({ isAuthenticated }) => {+
  console.log(isAuthenticated)
  return isAuthenticated ? (
    <PostRoutes/>
  ) : (
    <Navigate to="/auth/login" />
  );
};
  