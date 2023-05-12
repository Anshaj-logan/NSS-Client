import React from 'react'
import { Link } from 'react-router-dom'

const Test = () => {
  return (
    <div>
       <div className="tile">
  {/* <h3 className="tile-title">Profile</h3> */}
  
  <div className="tile-body">
    
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        
        <h3 className="tile-title">Test Details</h3>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="row">

          {/* <div className="col-lg-8"> */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mode</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Test</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Test Link</p>
                  </div>
                  <div className="col-sm-9">
                    <p className=" mb-0">
                      Link
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Student Details</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="mb-0">
                      file
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Test Date and Time</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      20/6/23 10:00 am
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Instructions</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      instruction1
                      instruction2
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



              </div>
            </div>
          {/* </div> */}
        </div>
      
        <Link to={'/student'}><a className="btn btn-secondary" href="">
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

export default Test