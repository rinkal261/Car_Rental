import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row ps-5 pe-5">
          <div className="col-12">
            <div className="f_phone">
              <span>Call Us:</span> +91 9924911465
            </div>
            <div className="socials">
              <a href="/#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
              </a>
            </div>
            <div className="copy">
              <div className="st1">
                <div className="brand">
                  Tour<span className="text-warning">C</span>ars
                </div>
                &copy; 2023 |{" "}
                <Link to="/" className="text-white">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
