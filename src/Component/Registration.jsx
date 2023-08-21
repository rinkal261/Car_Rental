import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <div className="logo">
        <img
          src={require("../Assets/images/logos.png")}
          height="100%"
          width="100%"
        />
      </div>
      <div className="container mb-5">
        <div className="card col-6 ms-auto me-auto p-5">
          <h3 className="text-center form-header">Registration Form</h3>
          <form>
            <div className="row">
              <div className="col-6 mt-3">
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="form-control"
                />
              </div>
              <div className="col-6 mt-3">
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6 mt-3">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                />
              </div>
              <div className="col-6 mt-3">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6 mt-3">
                <label className="text-center"> Date Of Birth</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-6 mt-3">
                <label className="text-center"> Gender</label>
                <div className="row mt-1">
                  <div className="col-6">
                    <input type="radio" name="gender" value="Male" />
                    Male
                  </div>
                  <div className="col-6">
                    <input type="radio" name="gender" value="Female" />
                    Female
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-3">
                <input
                  type="number"
                  placeholder="Enter Your Contact Number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-3">
                <textarea
                  placeholder="Enter Your Address"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="mt-3">
              <p>
                Already have an account &nbsp;
                <Link to="/login" className="text-warning">
                  Login here
                </Link>
              </p>
            </div>
            <div className="col-2 me-auto ms-auto mt-5">
              <button className="btn btn-outline-warning">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Registration;
