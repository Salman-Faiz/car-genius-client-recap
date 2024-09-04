import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }
  //   return <Navigate to="/login" replace></Navigate> it redirected to login page,
  return <Navigate to="/bookings" replace></Navigate>;
};

export default PrivateRoutes;
