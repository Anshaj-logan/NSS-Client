import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const ViewStudents = () => {
    return (
        <div>
        <div className='tile'>
        <div className="tile-body">

        <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
      <h3 className="tile-title">All Students</h3>

  <table className="table">
    <thead>
      <tr>
        <th>Sl.No</th>
        <th>Date</th>
        <th>Roll no</th>
        <th>Volunteer name</th>
        <th>Course</th>
        <th>Present/Absent</th>
        {/* <th>Instructions</th> */}
        {/* <th>Action</th> */}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>21/4/22</td>
        <td>34</td>
        <td>Rahul</td>
        <td>BCA</td>
        <td>Present</td>
        {/* <td>..</td> */}
        {/* <td>
          <button className="btn btn-primary" type="button">
            Edit
          </button>
          <button className="btn btn-danger" type="button">
            Delete
          </button>
        </td> */}
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
    );
}

export default ViewStudents;
