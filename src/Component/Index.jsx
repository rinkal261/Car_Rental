import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="logo">
        <img
          src={require("../Assets/images/logos.png")}
          height="100%"
          width="100%" alt=""
        />
      </div>

      {/* <!-- Carousel --> */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("../Assets/images/slide_1.jpg")}
              className="d-block"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../Assets/images/slide_2.jpg")}
              className="d-block"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../Assets/images/slide_3.jpg")}
              className="d-block"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-4">
            <div className="card p-3" id="homecard">
              <div className="row">
                <div className="col-3 mt-5">
                  <img src={require("../Assets/images/icon_1.png")} alt="" />
                </div>
                <div className="col-9 mt-5">
                  <h2>
                    Flexible <span className="text-warning">rentals</span>
                  </h2>
                </div>
              </div>
              <strong className="mt-4 mb-5">
                Cancel or change most bookings for free up to 48 hours before
                pick-up
              </strong>
            </div>
          </div>
          <div className="col-4">
            <div className="card p-3" id="homecard">
              <div className="row">
                <div className="col-3 mt-5">
                  <img src={require("../Assets/images/icon_2.png")} alt="" />
                </div>
                <div className="col-9 mt-5">
                  <h2>
                    No hidden <span className="text-warning">fees</span>
                  </h2>
                </div>
              </div>
              <strong className="mt-4 mb-5">
                {" "}
                Know exactly what you’re paying{" "}
              </strong>
            </div>
          </div>
          <div className="col-4">
            <div className="card p-3" id="homecard">
              <div className="row">
                <div className="col-3 mt-5">
                  <img src={require("../Assets/images/icon_3.png")} alt="" />
                </div>
                <div className="col-9 mt-5">
                  <h2>
                    Price Match <span className="text-warning">Guarantee</span>
                  </h2>
                </div>
              </div>
              <strong className="mt-4 mb-5">
                Found the same deal for less? We’ll match the price.
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="c_phone">
        <div className="container_12">
          <div className="grid_12">
            <div className="fa fa-phone"></div>
            +91 9874563210
            <span>ORDER NOW!</span>
          </div>
          <div className="clear"></div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4 mt-5">
            <div className="card">
              <Link to="/cars" className="type">
                <img
                  width="100%"
                  src={require("../Assets/images/page1_img1.jpg")}
                  alt=""
                />
                <span className="type_caption"> Economy </span>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card">
              <Link to="/cars" className="type">
                <img
                  width="100%"
                  src={require("../Assets/images/page1_img2.jpg")}
                  alt=""
                />
                <span className="type_caption"> Standard </span>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card">
              <Link to="/cars" className="type">
                <img
                  width="100%"
                  src={require("../Assets/images/page1_img3.jpg")}
                  alt=""
                />
                <span className="type_caption"> Lux </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
