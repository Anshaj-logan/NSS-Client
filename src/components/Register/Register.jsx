import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {

  return (
    <div id='register'>
        <div className="form">
  <h3>
    &nbsp;&nbsp;<span>Register</span> here
  </h3>
  <br />
  <div className="form-group">
    <form>
      <input
        type="text"
        className="form-control"
        placeholder="Name"
        required=""
      />
      <br />
      <input
        type="date"
        className="form-control"
        placeholder="date of birth"
        required=""
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Place"
        required=""
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="pin"
        required=""
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="phone"
        required=""
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        required=""
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Department"
        required=""
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Current semester"
        required=""
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Academic year"
        required=""
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Activity details"
        required=""
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Password"
        required=""
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Confirm Password"
        required=""
      />
      <br />
      <p>
        <button type="button" className="log-btn scrollto" value="submit">
          Submit
        </button>
      </p>
      <br />
      <br />
      <a href="">
        &nbsp;&nbsp;
        <Link to={'/'}><h6>Back</h6></Link>
      </a>
    </form>
  </div>
</div>

    </div>
  )
}

export default Register