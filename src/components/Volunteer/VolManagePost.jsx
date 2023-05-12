import React from 'react'
import { Link } from 'react-router-dom'

const VolManagePost = () => {
  return (
    <div>
         <div className="tile">
        <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
      <h3 className="tile-title">Manage Uploaded Posts</h3>

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
          <th>Date</th>
          <th>Title</th>
          <th>image</th>
          <th>Description</th>
          
          <th>Action</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1/4/23</td>
          <td>Camp-2021</td>
          <td>image</td>
            <td>yhvbubivfvbjdvihgihvnn</td>          
          <td>
          <a href="Notification-view.html">
          <button className="btn btn-success" type="button">
            <i className="fa fa-fw fa-lg fa-check-circle" />
            Edit
          </button>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="Notification-view.html">
          <button className="btn btn-danger" type="button">
            <i className="fa fa-fw fa-lg fa-check-circle" />
            Delete
          </button>
        </a>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>

    <Link to={'/volunteer'}><a href="">
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

export default VolManagePost