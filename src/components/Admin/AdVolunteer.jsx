import React from 'react'
import { Link } from 'react-router-dom'

const AdVolunteer = () => {
  return (
    <div>
        <div className="tile">
        <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
      <h3 className="tile-title">View Volunteers</h3>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   
    {/* <ul className="app-nav">
      <li className="app-search">
        <input className="app-search__input" type="search" />
        <button className="app-search__button">
          <i className="fa fa-search" />
        </button>
      </li>
    </ul> */}
  
  <div className="tile-body">
    <table className="table">
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>Name</th>
          <th>Department</th>
          <th>Course</th>
          
          <th>Current Semester</th>
          <th>Contact Number</th>
          <th>Email</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Roshan</td>
          <td>Computer Science</td>
          <td>BCA</td>
          
          <td>S2</td>
          <td>8976543452</td>
          <td>roshan@gmail.com</td>
          {/* <td>
            <a className="btn btn-danger" href="#">
              <i className="fa fa-lg fa-trash" />
            </a>
          </td> */}
        </tr>
        {/* <tr>
              <td>2</td>
              <td>2/12/23</td>
              <td>fhjghmbnvmhchvmjmn
                vnbjhkjh,ljk,nmbv
              </td>
              <td>Amal</td>
              <td>Volunteer</td>
              <td><a class="btn btn-danger" href="#"><i class="fa fa-lg fa-trash"></i></a></td>
            </tr>
            <tr>
              <td>3</td>
              <td>3/12/23</td>
              <td>dhfnvkhjfhbcfb</td>
              <td>Arjun</td>
              <td>volunteer</td>
              <td><a class="btn btn-danger" href="#"><i class="fa fa-lg fa-trash"></i></a></td>
            </tr> */}
      </tbody>
    </table>
  </div>
</div>
{/* <a href="Notification-add.html">
      <button className="btn btn-success" type="button">
        <i className="fa fa-fw fa-lg fa-plus" />
        Add Notification
      </button>
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
    <Link to={'/adminnn'}><a href="Notification-add.html">
      <button className="btn btn-secondary" type="button">
        <i className="fa fa-fw fa-lg fa-plus" />
        Cancel
      </button>
    </a></Link>
</section>
</div>
    </div>
  )
}

export default AdVolunteer