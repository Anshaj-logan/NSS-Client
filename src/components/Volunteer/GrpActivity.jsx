import React from 'react'
import { Link } from 'react-router-dom'

const GrpActivity = () => {
  return (
    <div>
        <div className='tile'>
        <div className="tile-body">

        <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
      <h3 className="tile-title">GROUP ACTIVITY</h3>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <table className="table">
    <thead>
      <tr>
        <th>Sl.No</th>
        
        <th>Issued Date</th>
        <th>Group Number</th>
        <th>Activity Details</th>
        <th>Due Date</th>
        <th>Update Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>21/4/22</td>
        <td>1</td>
        <td>Book Collection</td>
        <td>22/6/23</td>
        
        <td>
          <button className="btn btn-danger" type="button">
            Not 
            started
          </button>
          <button className="btn btn-warning" type="button">
            On processing
          </button>
          <button className="btn btn-success" type="button">
            Completed
          </button>
        </td>
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

export default GrpActivity