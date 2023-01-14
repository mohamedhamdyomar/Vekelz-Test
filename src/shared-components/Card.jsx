import React from "react";
import person from "../icons/person.png";
import manual from "../icons/manual.png";

const Card = (props) => {
  
  let car = props.car;
  return (
    <>
      <div class="card col-4 mt-3">
        <div class="card-body flex-column d-flex justify-content-between">
          <div className="row">
            <div className=" d-flex align-items-center">
              <div className="fw-bold col-11">Porshe 718 Cayman S</div>
              <div class="btn btn-link ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                </svg>
              </div>
            </div>
            <div className="text-muted">Coupe</div>
          </div>
          <div align="center" className="py-2">
            <img width="150px" object-fit="contain" src={car} alt="car"></img>
          </div>
          <div className="row">
            <div className="d-flex align-items-center">
              <div className="col-2 d-flex align-items-center" >
              <img src={person} alt="person" />
              <div className="">4</div>
              </div>

              <div className="col-8 d-flex align-items-center">
              <img className="ms-2" src={manual} alt="manual"></img>
              <div className="text-muted">Manual</div>
              </div>

              <div className="col-2 d-flex align-items-center ">
                $400<span className="text-muted">/d</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
