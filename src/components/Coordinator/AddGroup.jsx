import axios from "axios";
import React, { useEffect, useState } from "react";
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddGroup = () => {
    const login_id = localStorage.getItem("loginId")
  const [inputs, setInputs] = useState({
    login_id:login_id
  });
  const [students, setstudents] = useState([]);
  console.log(inputs);
  console.log("data", students);
  const setRegister = (event) => {  
    console.log(event.target);
    const name = event.target.name;
    const value = event.target.value;   
    setInputs({...inputs, [name]: value });
    console.log(inputs);
  };
  const registerSubmit = (event) => {
    event.preventDefault();
  
  //   setformErrors(validate(inputs))
  // setIssubmit(true)
  // if(Object.keys(formErrors).length === 0 && isSubmit){
    axios.post(`http://localhost:2000/api/cod/add-group`,inputs).then((data)=>{
      console.log(data);
      setInputs({})
      window.location.reload()
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
{/* <h3 className="tile-title">Upload Post</h3> */}
<div className="tile-body">
<section style={{ backgroundColor: "#eee" }}>
  <div className="container py-5">
    
    <h3 className="tile-title">Add A Group</h3>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <ToastContainer />
  <form onSubmit={registerSubmit}>
  
  <div className="form-group row">
    <label className="control-label col-md-3">Group Name</label>
    <div className="col-md-6">
    <input
          type="text"
          className="form-control"
          placeholder="Add A Group Name"
          name="group_name"
          onChange={setRegister}

         
        />
      {/* <a href="Notification-add.html"><button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-plus"></i>Add</button></a> */}
    </div>
  </div>
  


  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div className="row">
  <div className="col-md-8 col-md-offset-3">
    <button className="btn btn-success" type="submit">
      <i className="fa fa-fw fa-lg fa-upload" />
      Add
    </button>
    &nbsp;&nbsp;&nbsp;
    
    <a className="btn btn-secondary" href="#">
      <i className="fa fa-fw fa-lg fa-times-circle" />
      Cancel
    </a>
    

  </div>
</div>

  {/* <div className="form-group row">
    <div className="col-md-8 col-md-offset-3">
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" />I accept the
          terms and conditions
        </label>
      </div>
    </div>
  </div> */}
</form>
</div>

</section>
</div>
</div>

</div>
  )
}

export default AddGroup