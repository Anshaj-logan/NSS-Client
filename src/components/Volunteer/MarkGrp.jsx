import React from 'react'
import { Link } from 'react-router-dom'

const MarkGrp = () => {
  return (
    <div>
        <div className='tile'>
        <div className="tile-body">

        <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
      <h3 className="tile-title">GROUP ACTIVITY MARK</h3>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <table className="table">
    <thead>
      <tr>
        <th>Sl.No</th>
        
        <th>Date</th>
        <th>Group Number</th>
        <th>Volunteer Name</th>
        <th>Activity Details</th>
        <th>Mark</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>21/4/22</td>
        <td>1</td>
        <td>Rahul</td>
        <td>Book Collection</td>
        <td>45</td>
        

      </tr>
    </tbody>
  </table>

  </div>
  <Link to={'/volunteer'}><a className="btn btn-secondary" href="">
              <i className="fa fa-fw fa-lg fa-times-circle" />
              Cancel
            </a>
            </Link>
  </section>
</div>
</div>
    </div>
  )
}

export default MarkGrp