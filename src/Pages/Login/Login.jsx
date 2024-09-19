import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../public/assets/images/login/login.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  // const { signIn } = useContext(AuthContext);
  const { signIn } = useAuth();
  const location = useLocation();
  console.log(location);
  const Navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        // get access Token
        // axios
        //   .post("http://localhost:5000/jwt", user, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       Navigate(location?.state ? location?.state : "/");
        //     }
        //   });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-row gap-20">
        <div className=" w-1/2 pr-10 ">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <h1 className="text-5xl font-bold mx-auto pt-8">Login now!</h1>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center pb-5">
            <p>
              New to Car doctors{" "}
              <Link className="text-orange-500 font-bold" to="/signup">
                Sign UP
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
