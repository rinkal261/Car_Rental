import React from "react";

const CarAddModel = () => {
  return (
    <>
      <div
        className="modal fade"
        id="addcarmodal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title text-warning" id="exampleModalLabel">
                Add Cars
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
                  <div className="col-6 mt-3">
                    <input
                      type="text"
                      placeholder="Enter Car Name"
                      className="form-control"
                    />
                  </div>
                  <div className="col-6 mt-3">
                    <input
                      type="text"
                      placeholder="Enter Modal"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 mt-3">
                    <input
                      type="number"
                      placeholder="Enter Per Day Price"
                      className="form-control"
                    />
                  </div>
                  <div className="col-6 mt-3">
                    <select className="form-select">
                      <option>Select Car Category</option>
                      <option>Economy</option>
                      <option>Standard</option>
                      <option>Lux</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-3">
                    <input type="file" className="form-control" />
                  </div>
                </div>
                <div className="col-3 me-auto ms-auto mt-5">
                  <button className="btn btn-outline-warning">Add Car</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarAddModel;
