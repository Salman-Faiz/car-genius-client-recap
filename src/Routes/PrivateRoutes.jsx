import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    <span className="loading loading-dots loading-lg"></span>;
  }

  if (user?.email) {
    return children;
  }

  //   return <Navigate to="/login" replace></Navigate> it redirected to login page,
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoutes;
