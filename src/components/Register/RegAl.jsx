import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegAl = () => {
  const [inputs, setInputs] = useState({
    
    name:"",
    course:"",
    email:"",
    department:"",
    acdamic_year:"",
    username: "",
    password: "",
    phone_no:"",
    activity:"",
    address:"",
    dob:"",
    passout:"",
    cnf_password:"",
  });
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)
  // const [passwordMatch, setPasswordMatch] = useState(true);

  

  const validate = (values)=>{
    var error = {}
    if(!values.name){
      error.name ="Enter Name"
    }
    if(!values.username){
      error.username ="Enter Username"
    }
    if(!values.password){
      error.password ="Enter Password"
    }
    if(!values.passout){
      error.passout ="Enter Passout Year"
    }
    if(!values.dob){
      error.dob ="Enter Date of Birth"
    }
    if(!values.email){
      error.email ="Enter Your Email"
    }
    if(!values.phone_no){
      error.phone_no ="Enter Phone Number"
    }
    if(!values.address){
      error.address ="Enter Address"
    }
    if(!values.activity){
      error.activity ="Enter Previous Activity"
    }
    if(!values.course){
      error.course ="Enter Course"
    }
    if(!values.department){
      error.department ="Enter Department"
    }
    if(!values.acdamic_year){
      error.acdamic_year ="Enter Acadamic Year"
    }
    if(!values.cnf_password){
      error.cnf_password ="Enter Password"
    }
   
    return error
  }



    const setRegister = (event) => {
  
      const name = event.target.name;
      const value = event.target.value;   
      setInputs({...inputs, [name]: value });
      console.log(inputs);
    };
  
    const registerSubmit = (event) => {
      console.log(inputs);
      event.preventDefault();
      // if (inputs.password === inputs.cnf_password) {
      //   // Passwords match, do something (e.g., submit form)
      //   setPasswordMatch(true);
      // } else {
      //   // Passwords don't match, display an error message
      //   setPasswordMatch(false);
      // }
      setformErrors(validate(inputs))
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios.post('http://localhost:2000/api/register/alumni',inputs).then((data)=>{
        console.log(data);
        window.location.reload()
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
    }
    };
  return (
    <div>
                             <>
  {/* Section: Design Block */}
  <section className="text-center">
    {/* Background image */}
    <div
      className="p-5 bg-image"
      style={{
        backgroundImage:
          'url("img/reg.jpg")',
        height: 300
      }}
    />
    {/* Background image */}
    <div
      className="card mx-4 mx-md-5 shadow-5-strong"
      style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.8)",
        backdropFilter: "blur(30px)"
      }}
    >
      <div className="card-body py-5 px-md-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-5">Register as Alumni</h2>
            <ToastContainer />
  <form onSubmit={registerSubmit}>
              {/* 2 column grid layout with text inputs for the first and last names */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.name? formErrors.name :""}</span>
        <input
        name="name"
        value={inputs.name || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,name:""})}}
                      type="text"
                      id="form3Example1"
                      className="form-control"
                      
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      Name
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
        <input
        name="username"
        value={inputs.username || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,username:""})}}
                      type="text"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      User Name
                    </label>
                  </div>
                </div>
                {/* <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                      type="file"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example2">
                      Profile Picture
                    </label>
                  </div>
                </div> */}
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.acdamic_year? formErrors.acdamic_year :""}</span>
        <input
        name="acdamic_year"
        value={inputs.acdamic_year || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,acdamic_year:""})}}
                      type="text"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      Academic year
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.course? formErrors.course :""}</span>
        <input
        name="course"
        value={inputs.course || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,course:""})}}
                      type="text"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example2">
                      Course
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.department? formErrors.department :""}</span>
        <input
        name="department"
        value={inputs.department || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,department:""})}}
                      type="text"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      Department
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.passout? formErrors.passout :""}</span>
        <input
        name="passout"
        value={inputs.passout || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,passout:""})}}
                      type="text"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example2">
                      Passout year
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.activity? formErrors.activity :""}</span>
        <input
        name="activity"
        value={inputs.activity || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,activity:""})}}
                      type="text"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      Previous Activities
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.dob? formErrors.dob :""}</span>
        <input
        name="dob"
        value={inputs.dob || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,dob:""})}}
                      type="date"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example2">
                      Date of Birth
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="form-outline mb-4">
              <span style={{color:"red"}} > {formErrors.address? formErrors.address :""}</span>
        <input
        name="address"
        value={inputs.address || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,address:""})}}
                  type="text"
                  id="form3Example3"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Address
                </label>
              </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <>
  {/* <label className="control-label col-md-3">Gender</label> */}
  {/* <div className="col-md-9"> */}
    {/* <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="radio" name="gender" />
        Male
      </label>
    </div> */}
    {/* <div className="form-check">
    <label className="form-check-label">
        <input className="form-check-input" type="radio" name="gender" />
        Male
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label className="form-check-label">
        
        <input className="form-check-input" type="radio" name="gender" />
        Female
      </label>
    </div>
  </div> */}
</>

                    
                    {/* <label className="form-label" htmlFor="form3Example2">
                      gender
                    </label> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.phone_no? formErrors.phone_no :""}</span>
        <input
        name="phone_no"
        value={inputs.phone_no || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,phone_no:""})}}
                      type="text"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      Contact Number
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.email? formErrors.email :""}</span>
        <input
        name="email"
        value={inputs.email || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,email:""})}}
                      type="email"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example2">
                      Email
                    </label>
                  </div>
                </div>
              </div>

              
              {/* Email input */}
              {/* <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example3">
                  
                </label>
              </div> */}
              {/* Password input */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>
        <input
        name="password"
        value={inputs.password || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,password:""})}}
                      type="password"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      Password
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <span style={{color:"red"}} > {formErrors.cnf_password? formErrors.cnf_password :""}</span>
        <input
        name="cnf_password"
        value={inputs.cnf_password || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,cnf_password:""})}}
                      type="password"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example2">
                      Confirm Password
                    </label>
                  </div>
                </div>
              </div>
              {/* Checkbox */}
  
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Register
              </button>
              {/* Register buttons */}
              {/* <div className="text-center">
                <p>or sign up with:</p>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f" />
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-google" />
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-github" />
                </button>
              </div> */}
              <a href="">
                     &nbsp;&nbsp;<Link to={'/'}><h6>Back</h6></Link>
                 </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section: Design Block */}
</>
    </div>
  )
}

export default RegAl