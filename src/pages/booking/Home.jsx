import Nav from "../../shared-components/Nav";
import Aside from "../../shared-components/Aside";
import Booking from "../../shared-components/Booking";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Nav />
          </div>
          <div className="col-3">
            <div className="">
              <Aside />
            </div>
          </div>
          <div className="col-9">
            <Booking />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
