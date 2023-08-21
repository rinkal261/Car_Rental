import React from "react";

const about = () => {
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
          <div className="col-8">
            <h3>A Few Words About Us</h3>
            <div className="row">
              <div className="col-6">
                <img src={require("../Assets/images/page2_img1.jpg")} />
              </div>
              <div className="col-6">
                <h3>Service</h3>
                <blockquote className="text-muted">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                  possimus amet quia exercitationem dignissimos aperiam esse.
                  Sequi voluptatem at tempore unde quasi dicta nemo! Iusto nemo
                  odit dolorem deserunt reiciendis? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Id, possimus amet quia
                  exercitationem dignissimos aperiam esse. Sequi voluptatem at
                  tempore unde quasi dicta nemo! Iusto nemo odit dolorem
                  deserunt reiciendis?
                </blockquote>
              </div>
            </div>
            <blockquote className="text-muted mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
              possimus amet quia exercitationem dignissimos aperiam esse. Sequi
              voluptatem at tempore unde quasi dicta nemo! Iusto nemo odit
              dolorem deserunt reiciendis? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Id, possimus amet quia
              exercitationem dignissimos aperiam esse. Sequi voluptatem at
              tempore unde quasi dicta nemo! Iusto nemo odit dolorem deserunt
              reiciendis?
            </blockquote>
            <blockquote className="text-muted mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
              possimus amet quia exercitationem dignissimos aperiam esse. Sequi
              voluptatem at tempore unde quasi dicta nemo! Iusto nemo odit
              dolorem deserunt reiciendis? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Id, possimus amet quia
              exercitationem dignissimos aperiam esse. Sequi voluptatem at
              tempore unde quasi dicta nemo! Iusto nemo odit dolorem deserunt
              reiciendis?
            </blockquote>
          </div>
          <div className="col-4">
            <h3>Why Choose Us</h3>
            <ul className="list li">
              <li className="list_count">1</li>
              <li className="extra_wrapper">
                <div className="text-warning">
                  <h3>Econsecteturpiscinger elit</h3>
                </div>
                Sit meter ultricies erat rutrum. Cras er te facilisis, nulla vel
                viver auctor, leo magna sodales felis, quis malesuad nibh odio
                ut
              </li>
            </ul>
            <ul className="list li">
              <li className="list_count">2</li>
              <li className="extra_wrapper">
                <div className="text-warning">
                  <h3>Fconsecteturpiscingerelite</h3>
                </div>
                Git meter ultricies erat rutrum. Cras er te facilisis, nulla vel
                viver auctor, leo magna sodales felis, quis malesuad nibh odio
              </li>
            </ul>
            <ul className="list li">
              <li className="list_count">3</li>
              <li className="extra_wrapper">
                <div className="text-warning">
                  <h3>Hconsecteturpiscingeliter</h3>
                </div>
                Hit meter ultricies erat rutrum. Cras er te facilisis, nulla vel
                viver auctor, leo magna sodales felis, quis malesuad nibut
                velit.
              </li>
            </ul>
            <ul className="list li">
              <li className="list_count">4</li>
              <li className="extra_wrapper">
                <div className="text-warning">
                  <h3>Mconsecteturpiscinr elitwert</h3>
                </div>
                Kit meter ultricies erat rutrum. Cras er te facilisis, nulla vel
                viver auctor, leo magna sodales felis, quis malesuabh odio uter
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-12 mt-3 mb-3">
              <h3>Testimonials</h3>
            </div>
            <div className="col-4">
              <blockquote className="bq1">
                <p>
                  <i>
                    Lorem ipsum dolor sit amet, consectetur adipiscinger elit.
                    In mollis erat mattis neque facilisis, sit ameter ultricies
                    erat rutrum. Cras facilisis, nulla vel viver auctor, leo
                    magna...
                  </i>
                </p>
                <div className="text-warning">Tim Barkley</div>
              </blockquote>
            </div>
            <div className="col-4">
              <blockquote className="bq1">
                <p>
                  <i>
                    Dorem ipsum dolor sit amet, consectetur adipiscinger elit.
                    In mollis erat mattis neque facilisis, sit ameter ultricies
                    erat rutrum. Cras facilisis, nulla vel viver auctor, leo
                    magwe...
                  </i>
                </p>
                <div className="text-warning">Linda Grey</div>
              </blockquote>
            </div>
            <div className="col-4">
              <blockquote className="bq1">
                <p>
                  <i>
                    Gorem ipsum dolor sit amet, consectetur adipiscinger elit.
                    In mollis erat mattis neque facilisis, sit ameter ultricies
                    erat rutrum. Cras facilisis, nulla vel viver auctoro
                    magndales...
                  </i>
                </p>
                <div className="text-warning">Ann Pool</div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
