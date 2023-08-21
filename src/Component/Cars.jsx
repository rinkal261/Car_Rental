import React from "react";
import CarAddModel from "../Layouts/CarAddModel";
import CarStatusModel from "../Layouts/CarStatusModel";
import CarBox from "../Container/CarBox";

const cars = () => {
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
        {/* <!-- add car modal --> */}
        <div className="addcar mt-5 mb-5">
          <div className="addcarbtn col-2 ms-auto">
            <button
              type="button"
              className="btn btn-outline-warning ms-auto"
              data-bs-toggle="modal"
              data-bs-target="#addcarmodal"
            >
              Add Car
            </button>
          </div>
          <div className="addcarform">
            {/* <!-- Modal --> */}
            <CarAddModel />
          </div>
        </div>
        {/* <!-- car status modal --> */}
        <div className="status mt-5 mb-5">
          <div className="statusform">
            {/* <!-- Modal --> */}
            <CarStatusModel />
          </div>
        </div>
        <h2 className="mt-3">Economy</h2>
        <div className="row mt-3">
          <div className="col-md-4 mt-3">
            <CarBox
              carImg={require("../Assets/images/page3_img1.jpg")}
              carName={"Mercedes"}
              model={"S Class"}
              price={"9850000"}
            />
          </div>
          <div className="col-md-4 mt-3">
            <CarBox
              carImg={require("../Assets/images/page3_img2.jpg")}
              carName={"Mercedes"}
              model={"S Class"}
              price={"9850000"}
            />
          </div>
          <div className="col-md-4 mt-3">
            <CarBox
              carImg={require("../Assets/images/page3_img3.jpg")}
              carName={"Mercedes"}
              model={"S Class"}
              price={"9850000"}
            />
          </div>
        </div>
        <h2 className="mt-3">Standard</h2>
        <div className="row mt-3">
          <div className="col-md-4 mt-3">
            <CarBox
              carImg={require("../Assets/images/page3_img1.jpg")}
              carName={"Mercedes"}
              model={"S Class"}
              price={"9850000"}
            />
          </div>
          <div className="col-md-4 mt-3">
            <CarBox
              carImg={require("../Assets/images/page3_img2.jpg")}
              carName={"Mercedes"}
              model={"S Class"}
              price={"9850000"}
            />
          </div>
          <div className="col-md-4 mt-3">
            <CarBox
              carImg={require("../Assets/images/page3_img3.jpg")}
              carName={"Mercedes"}
              model={"S Class"}
              price={"9850000"}
            />
          </div>
        </div>
        <h2 className="mt-3">Lux</h2>
        <div className="row mt-3">
          <div className="col-md-4 mt-3">
            <CarBox
              carImg={require("../Assets/images/page3_img1.jpg")}
              carName={"Mercedes"}
              model={"S Class"}
              price={"9850000"}
            />
          </div>
          <div className="col-md-4 mt-3">
            <CarBox
              carImg={require("../Assets/images/page3_img2.jpg")}
              carName={"Mercedes"}
              model={"S Class"}
              price={"9850000"}
            />
          </div>
          <div className="col-md-4 mt-3">
            <CarBox
              carImg={require("../Assets/images/page3_img3.jpg")}
              carName={"Mercedes"}
              model={"S Class"}
              price={"9850000"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default cars;
