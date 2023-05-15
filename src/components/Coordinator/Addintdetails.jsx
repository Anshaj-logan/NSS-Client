import axios from "axios";
import React, { useEffect, useState } from "react";
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addintdetails = () => {
    const login_id = localStorage.getItem("loginId")
    const [inputs, setInputs] = useState({
      login_id:login_id
    });
    const [students, setstudents] = useState([]);
    console.log(inputs);
   
    useEffect(() => {
     
      axios
        .get(
          ` http://localhost:2000/api/cod/view-students`
        )
        .then((response) => {
          if (response.data.success === true) {
              setstudents(response.data.data);
          }
        });
    }, []);
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
      axios.post(`http://localhost:2000/api/cod/add-interview`,inputs).then((data)=>{
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
      
      <h3 className="tile-title">Add Interview Details</h3>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <ToastContainer />
    <form onSubmit={registerSubmit}>
    <div className="form-group row">
      <label className="control-label col-md-3">Student</label>
      <div className="col-md-8">
      <select name="students_id"   className="form-control" style={{width:"10rem"}} onChange={setRegister} >
           
           <option value="">select</option>
           {students.map((data,key)=>(
           <option value={data._id}> {data.name}   </option>
           ))}
         </select>
      </div>
    </div>
    <div className="form-group row">
      <label className="control-label col-md-3">Date</label>
      <div className="col-md-8">
      <input
            type="date"
            className="form-control"
            placeholder="Date"
            name="date"
            onChange={setRegister}
  
           
          />
        {/* <a href="Notification-add.html"><button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-plus"></i>Add</button></a> */}
      </div>
    </div>
    <div className="form-group row">
      <label className="control-label col-md-3">Time</label>
      <div className="col-md-8">
      <input
            type="time"
            className="form-control"
            placeholder="Time"
            name="time"
            onChange={setRegister}
           
          />
        {/* <a href="Notification-add.html"><button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-plus"></i>Add</button></a> */}
      </div>
    </div>
    <div className="form-group row">
      <label className="control-label col-md-3">Link</label>
      <div className="col-md-8">
      <input
            type="text"
            className="form-control"
            placeholder="Test link URL"
            name="link"
            onChange={setRegister}
           
          />
        {/* <a href="Notification-add.html"><button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-plus"></i>Add</button></a> */}
      </div>
    </div>
    <div className="form-group row">
      <label className="control-label col-md-3">Mark</label>
      <div className="col-md-8">
      <input
            type="text"
            className="form-control"
            placeholder="Enter the Mark"
            name="mark"
            onChange={setRegister}
           
          />
        {/* <a href="Notification-add.html"><button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-plus"></i>Add</button></a> */}
      </div>
    </div>
    <div className="form-group row">
      <label className="control-label col-md-3">Instructions</label>
      <div className="col-md-8">
        <textarea
          className="form-control"
          rows={4}
          placeholder="Test Instructions"
          name='instructions'
          onChange={setRegister}
        />
      </div>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div className="row">
    <div className="col-md-8 col-md-offset-3">
      <button className="btn btn-success" type="submit">
        <i className="fa fa-fw fa-lg fa-upload" />
        Upload
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

export default Addintdetails