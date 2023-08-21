import React from "react";

const Resentbooking = () => {
  return (
    <>
      <div className="logo">
        <img
          src={require("../Assets/images/logos.png")}
          height="100%"
          width="100%" alt=""
        />
      </div>
      <div className="container mb-5">
        <div className="card col-8 ms-auto me-auto p-2">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="col-2">Name</div>
                <div className="col-8">Car Name</div>
              </div>
              <div className="row">
                <div className="col-2">modal</div>
                <div className="col-8">2016</div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-5">Date From</div>
                <div className="col-7">04-04-2016</div>
              </div>
              <div className="row">
                <div className="col-5">Date To</div>
                <div className="col-7">04-04-2016</div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 mt-5">
                <lable>Price</lable>
                <p className="mt-3">1500</p>
              </div>
              <div className="col-3 mt-5">
                <lable>Booking Days</lable>
                <p className="mt-3">4</p>
              </div>
              <div className="col-2 mt-5">
                <lable>Total</lable>
                <p className="mt-3">6000</p>
              </div>
              <div className="col-3 p-0 mt-2">
                <img
                  src={require("../Assets/images/big1.jpg")}
                  height="150px"
                  width="280px" alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resentbooking;
