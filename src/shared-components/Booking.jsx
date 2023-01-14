import React from "react";
import Card from "./Card";
import audi from "../cars/3.png";
import car8 from "../cars/8.png";
import car1 from "../cars/1.png";
import car4 from "../cars/4.png";
import car6 from "../cars/6.png";
import car7 from "../cars/6.png";
import filter from "../icons/filter.png";
import icon from "../icons/icon.png";

const Booking = () => {
  return (
    <div className="bg-secondary bg-opacity-10">
      <div className="row ms-3">
        <div className="fs-3 fw-bold mt-4">Booking</div>
        <div className="d-flex align-items-center mt-4">
          <div className="col-11 d-flex justify-content-between">
            <div className="dropdown ">
              <div
                class="btn btn-secondary btn-sm dropdown-toggle border-start border-0 rounded-5 "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  gap: "23px",
                  width: "122px",
                  color: "#5F6165",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <span className="pe-4 fs-6" style={{ color: "#5F6165" }}>
                  New
                </span>
              </div>
              <ul className="dropdown-menu"></ul>
              <div
                class="btn btn-secondary ms-2 btn-sm dropdown-toggle border-start border-0 rounded-5 "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  gap: "23px",
                  width: "122px",
                  color: "#5F6165",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <span className="pe-4 fs-6" style={{ color: "#5F6165" }}>
                  Toyota
                </span>
              </div>
              <ul className="dropdown-menu"></ul>
            </div>
          </div>
          <div className="col-1">
            <div className="d-flex align-items-center">
              <img height={"42px"} src={icon} alt="icon"></img>
              <img height={"30px"} src={filter} alt="icon"></img>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <Card car={audi} />
          <Card car={car1} />
          <Card car={car8} />
          <Card car={car4} />
          <Card car={car6} />
          <Card car={car7} />
          <Card car={audi} />
          <Card car={car1} />
          <Card car={car8} />
        </div>
      </div>
    </div>
  );
};

export default Booking;
