
import { Link } from 'react-router-dom'
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";


const Loginn = () => {
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });
const navigate = useNavigate()
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...Input, [name]: value });
   
  };

  const validate = (values)=>{
    var error = {}
    if(!values.username){
      error.username ="Enter Username"
    }
    if(!values.password){
      error.password ="Enter Password"
    }
    return error
  }

  const validation = (e)=>{
    console.log(Input);
    e.preventDefault()
    setformErrors(validate(Input))
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios.post("http://localhost:2000/api/login/",Input).then((response)=>{
        console.log(response);
        if (response.data.success === true) {
          if (response.data.role === "1") {
            localStorage.setItem("name", response.data.username)
            localStorage.setItem("loginId", response.data.login_id)
            localStorage.setItem("role", response.data.role)
            localStorage.setItem("cordinator_id", response.data.student_id)
              sessionStorage.setItem("currentloggedin", response.data.name);
              navigate("/coordinator")
          }
          else if (response.data.role === "2") {
            localStorage.setItem("name", response.data.username)
            localStorage.setItem("loginId", response.data.login_id)
            localStorage.setItem("role", response.data.role)
            localStorage.setItem("vol_id", response.data.vol_id)
            sessionStorage.setItem("currentloggedin", response.data.username);
              navigate("/volunteer")
          }
          else if (response.data.role === "3") {
            localStorage.setItem("name", response.data.username)
            localStorage.setItem("loginId", response.data.login_id)
            localStorage.setItem("role", response.data.role)
            localStorage.setItem("std_id", response.data.std_id)
            sessionStorage.setItem("currentloggedin", response.data.username);
              navigate("/student")
          }
          else if (response.data.role === "4") {
            localStorage.setItem("name", response.data.username)
            localStorage.setItem("loginId", response.data.login_id)
            localStorage.setItem("role", response.data.role)
            localStorage.setItem("alm_id", response.data.alm_id)
            sessionStorage.setItem("currentloggedin", response.data.username);
              navigate("/alumni")
          }
         
      }
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
  return (
    <div>
        <section className="vh-100" style={{ backgroundColor: "#009970" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="img/login.jpg"
                alt="login form"
                className="img-fluid"
                style={{ borderRadius: "1rem 0 0 1rem" }}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
              <form onSubmit={validation}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i
                      className="fa fa-sign-in"
                      style={{ color: "#ff6219" }}
                    />
                    {/* <span className="h1 fw-bold mb-0">IDEAL</span> */}
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Sign into your account
                  </h5>
                  <div className="form-outline mb-4">
                  <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
            <input
              type="text"
              onChange={inputChange}
              onClick={()=>{setformErrors({...formErrors,username:""})}}
              placeholder="Enter Username"
              name="username"
              
            />
                    {/* <label className="form-label" htmlFor="form2Example17">
                      Email address
                    </label> */}
                  </div>
                  <div className="form-outline mb-4">
                  <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>
            <input
              type="password"
              onChange={inputChange}
              onClick={()=>{setformErrors({...formErrors,password:""})}}
              placeholder="Enter Password"
              name="password"
              
            />
                    {/* <label className="form-label" htmlFor="form2Example27">
                      Password
                    </label> */}
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <a className="small text-muted" href="#!">
                    Forgot password?
                  </a><br></br>
                  {/* <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <a href="#!" style={{ color: "#393f81" }}>
                      Register here
                    </a>
                  </p> */}
                  <a href="">
                     &nbsp;&nbsp;<Link to={'/'}><h6>Back</h6></Link>
                 </a>
                  <a href="#!" className="small text-muted">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Loginn