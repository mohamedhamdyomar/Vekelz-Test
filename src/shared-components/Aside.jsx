import { NavLink } from "react-router-dom";
import cal from "../icons/cal.png";
import car from "../icons/car.png";
import cart from "../icons/cart.png";
import comments from "../icons/comments.png";
import cut from "../icons/cut.png";
import gear from "../icons/gear.png";
import Line from "../icons/Line.png";
import logout from "../icons/logout.png";
import shape from "../icons/Shape.png";
import dashboard from "../icons/dashboard.png";

const Aside = () => {
  const styles = ({ isActive }) => ({
    color: isActive ? "#5F6165" : "#5F6165",
    background: isActive ? "#F3F5F8" : "rgba(0,0,0,0)",
    textDecoration: "none",
  });

  return (
    <>
      <div className=" d-flex flex-column justify-content-between align-items-stretch mt-3">
        <div className="d-flex flex-column">
          <NavLink className="rounded-4 nav-link p-3 " to="/dashboard" style={styles}>
            <div
              className="d-flex align-items-center"
              style={{ color: "#5F6165" }}
            >
              <img src={dashboard} alt="Dashboard Icon"></img>
              <span className="ms-2 ">Dashboard</span>
            </div>
          </NavLink>

          <NavLink
            className="rounded-4 nav-link p-3 "
            to="Assets"
            style={styles}
          >
            <div
              className="d-flex align-items-center"
              style={{ color: "#5F6165" }}
            >
              <img src={shape} alt=""></img>
              <span className="ms-2">Assets</span>
            </div>
          </NavLink>

          <NavLink className="rounded-4 nav-link p-3 " to="/" style={styles}>
            <div
              className="d-flex align-items-center"
              style={{ color: "#5F6165" }}
            >
              <img src={car} alt=""></img>
              <span className="ms-2">Booking</span>
            </div>
          </NavLink>

          <NavLink className="rounded-4 nav-link p-3" to="sc" style={styles}>
            <div
              className="d-flex align-items-center"
              style={{ color: "#5F6165" }}
            >
              <img src={Line} alt=""></img>
              <span className="ms-2">Sell Cars</span>
            </div>
          </NavLink>

          <NavLink className="rounded-4 nav-link p-3" to="b" style={styles}>
            <div
              className="d-flex align-items-center"
              style={{ color: "#5F6165" }}
            >
              <img src={cart} alt=""></img>
              <span className="ms-2">Buy Cars</span>
            </div>
          </NavLink>

          <NavLink className="rounded-4 nav-link p-3" to="s" style={styles}>
            <div
              className="d-flex align-items-center"
              style={{ color: "#5F6165" }}
            >
              <img src={cut} alt=""></img>
              <span className="ms-2">Services</span>
            </div>
          </NavLink>

          <NavLink className="rounded-4 nav-link p-3" to="c" style={styles}>
            <div
              className="d-flex align-items-center"
              style={{ color: "#5F6165" }}
            >
              <img src={cal} alt=""></img>
              <span className="ms-2">Calender</span>
            </div>
          </NavLink>

          <NavLink className="rounded-4 nav-link p-3" to="m" style={styles}>
            <div
              className="d-flex align-items-center"
              style={{ color: "#5F6165" }}
            >
              <img src={comments} alt=""></img>
              <span className="ms-2">Messages</span>
            </div>
          </NavLink>
        </div>

        {/* <div className="bottom-items py-2">
          <NavLink className="rounded-4 nav-link" to="" style={styles}>
            <div
              className="d-flex align-items-center"
              style={{ color: "#5F6165" }}
            >
              <img src={gear} alt=""></img>
              <span className="ms-2">Settings</span>
            </div>
          </NavLink>

          <NavLink className="rounded-4 nav-link" to="m" style={styles}>
            <div
              className="d-flex align-items-center"
              style={{ color: "#5F6165" }}
            >
              <img src={logout} alt=""></img>
              <span className="ms-2">Log Out</span>
            </div>
          </NavLink>
        </div> */}
      </div>
    </>
  );
};

export default Aside;
