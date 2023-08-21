import React from "react";

const booking = () => {
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
          <h3 className="text-center form-header">Booking Form</h3>
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
                  type="number"
                  placeholder="Enter Your Contact Number"
                  className="form-control"
                />
              </div>
              <div className="col-6 mt-3">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6 mt-3">
                <label className="text-center"> Date From</label>
                <input
                  type="date"
                  placeholder="Enter Your Full Name"
                  className="form-control"
                />
              </div>
              <div className="col-6 mt-3">
                <label className="text-center"> Date To</label>
                <input
                  type="date"
                  placeholder="Enter Your Email"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-2 me-auto ms-auto mt-5">
              <button className="btn btn-outline-warning">Book</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default booking;
