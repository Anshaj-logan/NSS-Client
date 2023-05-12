import React from 'react'
import { Link } from 'react-router-dom'

const UpdateProfile = () => {
  return (
    <div>
        <>
  {/* <div class="col-md-6"> */}
  <div className="tile">
    
    <div className="tile-body">

    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
      <h3 className="tile-title">Update Profile</h3>
      
      <form className="form-horizontal">
        <div className="form-group row">
          <label className="control-label col-md-3">Name</label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter full name"
              name="name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">Profile Picture</label>
          <div className="col-md-8">
            <input className="form-control" type="file" name="photo" />
          </div>
        </div>
        {/* <div className="form-group row">
          <label className="control-label col-md-3">Bio</label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter designation"
              name="designation"
            />
          </div>
        </div> */}
        <div className="form-group row">
          <label className="control-label col-md-3">Contact number</label>
          <div className="col-md-8">
            <input
              className="form-control col-md-8"
              type="text"
              placeholder="Enter contact number"
              name="number"
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="control-label col-md-3">Email</label>
          <div className="col-md-8">
            <input
              className="form-control col-md-8"
              type="email"
              placeholder="Enter email address"
              name="email"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">Department</label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter department"
              name="dprtmnt"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">Academic year</label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter academic year"
              name="yr"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">Date of birth</label>
          <div className="col-md-8">
            <input
              className="Date"
              type="date"
              placeholder="Enter date of birth"
              name="dob"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">Gender</label>
          <div className="col-md-9">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                />
                Male
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                />
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">Course</label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter course"
              name="designation"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">Current Semester</label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter current semester"
              name="designation"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">Previous Activities</label>
          <div className="col-md-8">
            <textarea
              className="form-control"
              rows={4}
              placeholder="Enter here"
              name="bio"
              defaultValue={""}
            />
          </div>
        </div>
       
        
        

        <div className="form-group row">
          <label className="control-label col-md-3">Address</label>
          <div className="col-md-8">
            <textarea
              className="form-control"
              rows={4}
              placeholder="Enter your address"
              name="address"
              defaultValue={""}
            />
          </div>
        </div>

        {/* <div class="form-group row">
            <div class="col-md-8 col-md-offset-3">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox">I accept the terms and conditions
                </label>
              </div>
            </div>
          </div> */}
        {/* <div class="tile-footer"> */}
        <div className="row">
          <div className="col-md-8 col-md-offset-3">
            <button className="btn btn-success" type="button">
              <i className="fa fa-fw fa-lg fa-check-circle" />
              Save
            </button>
            &nbsp;&nbsp;&nbsp;
            <Link to={'/volprofile'}><a className="btn btn-secondary" href="">
              <i className="fa fa-fw fa-lg fa-times-circle" />
              Cancel
            </a>
            </Link>
          </div>
        </div>
        {/* </div> */}
      </form>
    
    </div>
    </section>
  </div>
    </div>
    
</>

    </div>
  )
}

export default UpdateProfile