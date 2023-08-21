import React from "react";
import ServiceBox from "../Container/ServiceBox";

const Services = () => {
  const description =
    "Make the most of your trip to Cairo with your very own private car and personal driver for up to 12 hours. Explore the city at your own leisure, in comfort and style, with an experienced driver on hand to take you anywhere you want to go.";
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
        <h2 className="mt-3">Services Overview</h2>
        <div className="row mt-3">
          <div className="col-md-4 mt-3">
            <ServiceBox
              image={require("../Assets/images/page4_img1.jpg")}
              title="Over Service"
              description={description}
            />
          </div>
          <div className="col-md-4 mt-3">
            <ServiceBox
              image={require("../Assets/images/page4_img5.jpg")}
              title="Over Service"
              description={description}
            />
          </div>
          <div className="col-md-4 mt-3">
            <ServiceBox
              image={require("../Assets/images/page4_img3.jpg")}
              title="Over Service"
              description={description}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 mt-3">
            <ServiceBox
              image={require("../Assets/images/page4_img4.jpg")}
              title="Over Service"
              description={description}
            />
          </div>
          <div className="col-md-4 mt-3">
            <ServiceBox
              image={require("../Assets/images/page4_img5.jpg")}
              title="Over Service"
              description={description}
            />
          </div>
          <div className="col-md-4 mt-3">
            <ServiceBox
              image={require("../Assets/images/page4_img6.jpg")}
              title="Over Service"
              description={description}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 mt-3">
            <ServiceBox
              image={require("../Assets/images/page4_img7.jpg")}
              title="Over Service"
              description={description}
            />
          </div>
          <div className="col-md-4 mt-3">
            <ServiceBox
              image={require("../Assets/images/page4_img8.jpg")}
              title="Over Service"
              description={description}
            />
          </div>{" "}
          <div className="col-md-4 mt-3">
            <ServiceBox
              image={require("../Assets/images/page4_img9.jpg")}
              title="Over Service"
              description={description}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
