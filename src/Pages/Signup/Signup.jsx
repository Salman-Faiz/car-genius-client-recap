import { Link } from "react-router-dom";
import loginImg from "../../../public/assets/images/login/login.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
const SignUp = () => {
  //   const { createUser } = useContext(AuthContext);

  //   const handleSignUp = (event) => {
  //     event.preventDefault();
  //     const form = event.target;
  //     const name = form.name.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     console.log(name, email, password);

  //     createUser(email, password)
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //       });
  //   };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-row gap-20">
        <div className=" w-1/2 pr-10 ">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <h1 className="text-5xl font-bold mx-auto pt-8">Sign Up</h1>

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Confirm Password</span>
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
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div className="text-center pb-5">
            <p>
              Already Have an account?? Please{" "}
              <Link className="text-orange-500 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
