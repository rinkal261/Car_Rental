import React from "react";
import { Link } from "react-router-dom";

const CarBox = ({ carImg, carName, model, price }) => {
  return (
    <>
      <a href={carImg} target="_blank" className="gal" >
        <img src={carImg} alt="" />
      </a>
      <div className="detail">
        <div>
          <h4>
            Car Name :- <span className="color1">{carName}</span>
          </h4>
          <h4>
            Modal :- <span className="color1">{model}</span>
          </h4>
        </div>
        <div>
          <h4>
            <span className="color1">&#x20B9; {price}/DAY</span>
          </h4>
        </div>
      </div>
      <div>
        <Link
          to="/booking"
          className="btn btn-warning"
          style={{ marginRight: "10px" }}
        >
          Book Car
        </Link>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#carstatus"
          className="btn btn-warning"
        >
          status
        </button>
      </div>
    </>
  );
};

export default CarBox;
