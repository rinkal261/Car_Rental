import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="logo">
        <img
          src={require("../Assets/images/logos.png")}
          height="100%"
          width="100%" alt=""
        />
      </div>
      <div class="container mb-5">
        <div class="card col-6 ms-auto me-auto p-5">
          <h3 class="text-center form-header">Login Form</h3>
          <form>
            <div class="row">
              <div class="col-6 mt-3">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  class="form-control"
                />
              </div>
              <div class="col-6 mt-3">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  class="form-control"
                />
              </div>
            </div>
            <div class="mt-3">
              <p>
                Don't have an account &nbsp;
                <Link to="/registration" class="text-warning">
                  Register here
                </Link>
              </p>
            </div>
            <div class="col-2 me-auto ms-auto mt-5">
              <button class="btn btn-outline-warning">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
