
import { Link } from 'react-router-dom'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewProfile = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate()
  const setRegister = (event) => {  
    console.log(event.target);
    const name = event.target.name;
    const value = event.target.value;   
    setInputs({...inputs, [name]: value });
    console.log(inputs);
  };
  const login_id = localStorage.getItem("loginId")
  useEffect(() => {
   
    axios
      .get(
        ` http://localhost:2000/api/vol/view-volunteer-profile/${login_id}`
      )
      .then((response) => {
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      });
  }, []);
  console.log("data", inputs);
  const registerSubmit = (event) => {
    event.preventDefault();
  
  //   setformErrors(validate(inputs))
  // setIssubmit(true)
  // if(Object.keys(formErrors).length === 0 && isSubmit){
    axios.post(`http://localhost:2000/api/vol/update-volunteer-profile/${login_id}`,inputs).then((data)=>{
      console.log(data);
      // console.log(data.response.data.message);
      toast(data.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
     
    }).catch((err)=>{
      console.log(err);
      toast(err.response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
  
  };

  return (
    <div>
        <div className="tile">
  {/* <h3 className="tile-title">Profile</h3> */}
  
  <div className="tile-body">
 
    
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
      <ToastContainer />
  <form onSubmit={registerSubmit}>
    
        
        <h3 className="tile-title">Profile</h3>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src='img/Dp.jpg' className="rounded-circle img-fluid" style={{ width: 150 }}/>
                  
                
                <h5 className="my-3"><p> {inputs.name||''}</p></h5>
                {/* <p className="text-muted mb-1">Bio</p> */}
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
                    <p>Activities</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    {/* <i
                      className="fa fa-facebook-f"
                      style={{ color: "#3b5998" }}
                    />
                    <p className="mb-0">facebook</p> */}
                     <textarea
          type="text"
          onChange={setRegister}
          value={inputs.activity||''}
          className="form-control"
          placeholder="activity"
          name="activity"
        />
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
                  <input
          type="text"
          onChange={setRegister}
          value={inputs.name||''}
          className="form-control"
          placeholder="Name"
          name="name"
        />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Contact Number</p>
                  </div>
                  <div className="col-sm-9">
                  <input
          type="text"
          onChange={setRegister}
          value={inputs.phone_no||''}
          className="form-control"
          placeholder="Contact"
          name="phone_no"
        />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                  <input
          type="text"
          onChange={setRegister}
          value={inputs.email||''}
          className="form-control"
          placeholder="Email"
          name="email"
        />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Academic year</p>
                  </div>
                  <div className="col-sm-9">
                  <input
          type="text"
          onChange={setRegister}
          value={inputs.acdamic_year||''}
          className="form-control"
          placeholder="Acadamic Year"
          name="acdamic_year"
        />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Department</p>
                  </div>
                  <div className="col-sm-9">
                  <input
          type="text"
          onChange={setRegister}
          value={inputs.department||''}
          className="form-control"
          placeholder="Department"
          name="department"
        />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Course</p>
                  </div>
                  <div className="col-sm-9">
                  <input
          type="text"
          onChange={setRegister}
          value={inputs.course||''}
          className="form-control"
          placeholder="Course"
          name="course"
        />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Current Semester</p>
                  </div>
                  <div className="col-sm-9">
                  <input
          type="text"
          onChange={setRegister}
          value={inputs.semester||''}
          className="form-control"
          placeholder="Semester"
          name="semester"
        />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Date of Birth</p>
                  </div>
                  <div className="col-sm-9">
                  <input
          type="text"
          onChange={setRegister}
          value={inputs.dob||''}
          className="form-control"
          placeholder="Date Of Birth"
          name="dob"
        />
                  </div>
                </div>
                <hr />
                {/* <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Gender</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Male</p>
                  </div>
                </div> */}
                {/* <hr /> */}
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                  <input
          type="text"
          onChange={setRegister}
          value={inputs.address||''}
          className="form-control"
          placeholder="Address"
          name="address"
        />
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
      <div className="col-md-8 col-md-offset-3">
        <a href="">
          <button className="btn btn-success" type="submit">
            <i className="fa fa-fw fa-lg fa-check-circle" />
            Update profile
          </button>
        </a>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={'/volunteer'}><a className="btn btn-secondary" href="">
              <i className="fa fa-fw fa-lg fa-times-circle" />
              Cancel
            </a>
            </Link>
      </div>
    </div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </section>
  </div>
  {/* <div className="tile-footer">
    <div className="row">
      <div className="col-md-8 col-md-offset-3">
        <a href="">
          <button className="btn btn-success" type="button">
            <i className="fa fa-fw fa-lg fa-check-circle" />
            Update profile
          </button>
        </a>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={'/volunteer'}><a className="btn btn-secondary" href="">
              <i className="fa fa-fw fa-lg fa-times-circle" />
              Cancel
            </a>
            </Link>
      </div>
    </div>
  </div> */}
 
</div>

    </div>
  )
}

export default ViewProfile