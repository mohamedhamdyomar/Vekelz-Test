import React from "react";
import { Chart } from "./Chart.tsx";
import Progressbar from "./Progressbar";
import car from "../cars/car.png";
import recycle from "../icons/recycle.png";
import manual from "../icons/manual.png";
import thunder from "../icons/thunder.png";
import gear from "../icons/gps.png";

const Dbcontent = () => {
  return (
    <>
      <div className="bg-secondary bg-opacity-10">
        <div className="row col-12">
          <div className="d-flex justify-content-between mx-3 my-3 ">
            <div class="card col-2 " style={{ backgroundColor: "#A162F7" }}>
              <div class="  d-flex justify-content-center">
                <div className="fs-5 fw-bold">Energy</div>
              </div>
              <div class="  d-flex justify-content-center">
                <Progressbar val={100} txt="45%" col="#ffff" />
              </div>
            </div>
            <div class="card  col-2 ">
              <div class="  d-flex justify-content-center">
                <div className="fs-5 fw-bold">Range</div>
              </div>
              <div class="  d-flex justify-content-center">
                <Progressbar val={45} txt="157k%" col="#242731" />
              </div>
            </div>
            <div class="card col-2">
              <div class="  d-flex justify-content-center">
                <div className="fs-5 fw-bold">Break fluid</div>
              </div>

              <div class="  d-flex justify-content-center">
                <Progressbar val={45} txt="9%" col="#242731" />
              </div>
            </div>
            <div class="card  col-2">
              <div class="  d-flex justify-content-center">
                <div className="fs-5 fw-bold">Tire Wire</div>
              </div>
              <div class="  d-flex justify-content-center">
                <Progressbar val={45} txt="25%" col="#242731" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="col-6">
              <Chart />
            </div>
            <div className="col-6">
              <Chart />
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-between col-11">
          <div class="card col-4 mx-3 " style={{ backgroundColor: "#E1DFA4" }}>
            <div className="ms-3 my-2">
              <div className="row">
                <div className="d-flex justify-content">
                  <img src={recycle} alt=""></img>
                  <span className="fw-bold ms-1">64% Recommend</span>
                </div>
              </div>
              <div className="row">
                <img src={car} alt=""></img>
              </div>
              <div className="fw-bold">Mini Cooper</div>
              <div>
                <div className=" d-flex align-items-center">
                  <img className="" src={manual} alt="manual"></img>
                  <div className="text-muted">132K</div>
                  <img className="ms-2" src={gear} alt=""></img>
                  <img className="ms-2" src={thunder} alt=""></img>
                  <div className=" d-flex align-items-center text-right text-muted ">
                    $32/h
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-4 mx-3 " style={{ backgroundColor: "#E3ECF1" }}>
            <div className="ms-3 my-2">
              <div className="row">
                <div className="d-flex justify-content">
                  <img src={recycle} alt=""></img>
                  <span className="fw-bold ms-1">74% Recommend</span>
                </div>
              </div>
              <div className="row">
                <img src={car} alt=""></img>
              </div>
              <div className="fw-bold">Porche 911 Carrera</div>
              <div>
                <div className=" d-flex align-items-center">
                  <img className="" src={manual} alt="manual"></img>
                  <div className="text-muted">130K</div>
                  <img className="ms-2" src={gear} alt=""></img>
                  <img className="ms-2" src={thunder} alt=""></img>
                  <div className=" d-flex align-items-center text-right text-muted ">
                    $28/h
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-4 mx-3 " style={{ backgroundColor: "#E3ECF1" }}>
            <div className="ms-3 my-2">
              <div className="row">
                <div className="d-flex justify-content">
                  <img src={recycle} alt=""></img>
                  <span className="fw-bold ms-1">74% Recommend</span>
                </div>
              </div>
              <div className="row">
                <img src={car} alt=""></img>
              </div>
              <div className="fw-bold">Porche 911 Carrera</div>
              <div>
                <div className=" d-flex align-items-center">
                  <img className="" src={manual} alt="manual"></img>
                  <div className="text-muted">130K</div>
                  <img className="ms-2" src={gear} alt=""></img>
                  <img className="ms-2" src={thunder} alt=""></img>
                  <div className=" d-flex align-items-center text-right text-muted ">
                    $28/h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dbcontent;
