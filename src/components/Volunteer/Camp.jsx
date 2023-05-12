import React from 'react'
import { Link } from 'react-router-dom'

const Camp = () => {
  return (
    <div>
        <div className="tile">
  {/* <h3 className="tile-title">Profile</h3> */}
  
  <div className="tile-body">
    
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        
        <h3 className="tile-title">Camp Details</h3>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="row">

          {/* <div className="col-lg-8"> */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Academic Year</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">2021-2024</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Location</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      G-Tech HighSchool
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Number of Volunteers</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      50
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Start Date</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      20/12/24
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">End Date</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      28/12/24
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Contact Number</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">9867457345</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">G-Tech HighSchool,kuttippuram,malappuram</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Volunteer Details</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="mb-0">file</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Coordinator Details</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="mb-0">file</p>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      
        <Link to={'/volunteer'}><a className="btn btn-secondary" href="">
              <i className="fa fa-fw fa-lg fa-times-circle" />
              Cancel
            </a>
            </Link>
      </div>
    </section>
  </div>

</div>
    </div>
  )
}

export default Camp