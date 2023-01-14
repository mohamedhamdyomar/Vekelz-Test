import React from 'react'
import Nav from '../../shared-components/Nav';
import Aside from '../../shared-components/Aside';
import Dbcontent from '../../shared-components/Dbcontent';

const Dashboard = () => {
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
          <Dbcontent/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard;