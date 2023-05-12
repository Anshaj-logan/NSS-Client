import React from 'react'
import { Link } from 'react-router-dom'

const AdProfile = () => {
  return (
    <div>
        <div className="tile">
  {/* <h3 className="tile-title">Profile</h3> */}
  
  <div className="tile-body">
    
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        
        <h3 className="tile-title">Profile</h3>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src='img/Dp.jpg' className="rounded-circle img-fluid" style={{ width: 150 }}/>
                  
                
                <h5 className="my-3">Yahkoob</h5>
                <p className="text-muted mb-1">Assistant Professor</p>
                {/* <p className="text-muted mb-4">&lt;%=data.bio%&gt;</p> */}
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    {/* <i
                      className="fa fa-instagram-f"
                      style={{ color: "#ac2bac" }}
                    />
                    <p className="mb-0">instagram</p> */}
                    <p>Bio</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    {/* <i
                      className="fa fa-facebook-f"
                      style={{ color: "#3b5998" }}
                    />
                    <p className="mb-0">facebook</p> */}
                    <p></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Yahkoob</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Department</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      Commerce
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Academic year</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                     2022-2024
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Date of Birth</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      17/01/85
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Gender</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      Male
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Contact Number</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">9756745432</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Yahkoob@gmail.com</p>
                  </div>
                </div>
                <hr />
                
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">thayyil house</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </div>
  <div className="tile-footer">
    <div className="row">
      <div className="col-md-8 col-md-offset-3">
       
        <Link to={'/adapprove'}><a className="btn btn-secondary" href="">
              <i className="fa fa-fw fa-lg fa-times-circle" />
              Cancel
            </a>
            </Link>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AdProfile