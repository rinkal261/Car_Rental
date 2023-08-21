import React from "react";

const ServiceBox = ({ image, title, description }) => {
  return (
    <>
      <div className="card p-3" id="servicecard">
        <img src={image} height="250px" width="380px" alt="" />
        <div className="detail">
          <h3>{title}</h3>
          <blockquote>{description}</blockquote>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;
