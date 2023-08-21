import React from "react";

const contacts = () => {
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
        <div className="row">
          <div className="col-12">
            <h3>Find Us</h3>
            <div className="map">
              <figure>
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=gujarat%20india+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  style={{ border: "0" }}
                ></iframe>
              </figure>
            </div>
          </div>
          <div className="col-5">
            <h3>Contact Info</h3>
            <div className="map">
              <div className="text1 color2">
                Lorem ipsum dolor sit amet, consecteturpiscinger elit um dolor
                sit amet, consecteturpiscing.
              </div>
              <p>Don’t forget, 24/7 support is available for Customer</p>

              <address>
                <dl>
                  <dt>
                    123 Road <br />
                    Abc Complex,
                    <br />
                    xyz State india.
                  </dt>
                  <dd>
                    <span>Telephone:</span> +91 9924911465
                  </dd>
                  <dd>
                    E-mail:{" "}
                    <a href="/#" className="text-warning">
                      abc@gmail.com
                    </a>
                  </dd>
                </dl>
              </address>
            </div>
          </div>
          <div className="col-6 prefix_1">
            <h3>Contact Form</h3>
            <form id="form">
              <div className="row">
                <div className="col-4 mt-2">
                  <label className="name">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name:"
                    />
                  </label>
                </div>
                <div className="col-6 mt-2">
                  <label className="email">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail:"
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-4 mt-2">
                  <label className="phone">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone:"
                    />
                  </label>
                </div>
                <div className="col-6 mt-2">
                  <label className="message">
                    <textarea
                      className="form-control"
                      placeholder="Message:"
                    ></textarea>
                  </label>
                </div>
              </div>

              <div className="col-2 ms-auto mt-4 me-auto">
                <a href="/#" data-type="submit" className="btn btn-warning">
                  Contact US
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default contacts;
