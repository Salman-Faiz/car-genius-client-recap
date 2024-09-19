import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  // logOut the user
  const { logOut } = useAuth();
  // using interceptor
  //   navigate the user agter log out
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("log out");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .then((error) => {
              console.log(error);
            });
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
