import React from "react";

const CarStatusModel = () => {
  return (
    <>
      <div
        className="modal fade"
        id="carstatus"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title text-warning" id="exampleModalLabel">
                Cars Status
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-12 mt-3">
                    <select className="form-select">
                      <option>Car Status</option>
                      <option>Available</option>
                      <option>Unavailable</option>
                    </select>
                  </div>
                </div>
                <div className="col-4 me-auto ms-auto mt-5">
                  <button className="btn btn-outline-warning">
                    Status Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarStatusModel;
