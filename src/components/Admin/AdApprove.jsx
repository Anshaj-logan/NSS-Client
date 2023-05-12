import React from 'react'
import { Link } from 'react-router-dom'

const AdApprove = () => {
  return (
    <div>
               <div className="tile">
        <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
      <h3 className="tile-title">Approve Coordinator</h3>

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
          
          <th>Coordinator Name</th>
          <th>Designation</th>
          <th>Department</th>
          <th>Action</th>
          <th>View Profile</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          
          <td>Yahkoob</td>
          <td>Assistant Professor</td>
          <td>Commerce</td>
          <td>
  <button className="btn btn-success" type="button">
    Approve
  </button>
  <button className="btn btn-danger" type="button">
    Reject
  </button>
  </td>
  <td><Link to={'/adprofile'}><button className="btn btn-primary" type="button">
    View
  </button></Link></td>

       
        </tr>
 
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

export default AdApprove