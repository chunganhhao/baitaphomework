import React from "react";

export function CardSmartphone() {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
        <div className="card bg-light" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src="./img/sp_blackberry.png"
            alt="Card image"
            style={{ maxWidth: "100%", height: 250 }}
          />
          <div className="card-body text-center">
            <h4 className="card-title text-center">Blackberry</h4>
            <p className="card-text">
              BlackBerry is a line of smartphones, tablets, and services
              originally designed
            </p>
            <a href="#" className="btn btn-primary">
              Detail
            </a>
            <a href="#" className="btn btn-danger">
              Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export function CardLaptop() {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
        <div className="card bg-light" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src="./img/lt_rog.png"
            alt="Card image"
            style={{ maxWidth: "100%", height: 250 }}
          />
          <div className="card-body text-center">
            <h4 className="card-title text-center">ASUS ROG</h4>
            <p className="card-text">
              the Asus ROG Strix Flare is the latest addition to Asus' lineup of
              ROG branded devices
            </p>
            <a href="#" className="btn btn-primary">
              Detail
            </a>
            <a href="#" className="btn btn-danger">
              Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}