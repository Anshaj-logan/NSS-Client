import React from 'react'
import { Link } from 'react-router-dom'

const Aluallnotification = () => {
  return (
    <div>
        <div className="tile">
        <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
      <h3 className="tile-title">Notifications</h3>

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
          
          <th>Notification</th>
          <th>Date</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          
          <td>Schedule a blood donation camp on 2/5/23 in our college</td>
          <td>1/4/23</td>
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
    <Link to={'/alumni'}><a href="Notification-add.html">
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

export default Aluallnotification