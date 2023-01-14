import myImage from "../icons/Logo.png";
import bell from "../icons/Vector.png";
import pic from "../icons/profile.png";

// import

const Nav = () => {
  return (
    <div className="row  justify-content-between align-items-center text-black-50 py-2 ">
      <div className="col-3 d-flex  ">
        <div className="">
          <div className="navbar-brand ms-3" style={{ cursor: "pointer" }}>
            <img src={myImage} alt="LOGO"></img>
          </div>
        </div>
        <div className="fs-5 fw-bold text-black mx-2">Motiv.</div>
      </div>

      {/* search area */}
      <div className="col-7 d-none d-sm-block">
        <form className="d-flex" role="search">
          <input
            className="form-control w-50"
            type="search"
            placeholder="Search or type"
            aria-label="Search"
          />
        </form>
      </div>

      {/* left side area */}
      <div className="col-2">
        <div className="d-flex justify-content-end">
          <div className="me-3 ">
            <div className="position-relative ">
              <img src={bell} alt="Vector"></img>
            </div>
          </div>
          <div>
            <img
              className="rounded-circle"
              height={"30px"}
              src={pic}
              alt="profilePiciture "
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
