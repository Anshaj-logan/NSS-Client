import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewStudents = () => {
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
   
    axios
      .get(
        ` http://localhost:2000/api/cod/view-students`
      )
      .then((response) => {
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      });
  }, []);
  console.log("data", inputs);
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
        <th>Name</th>
        <th>Course</th>
        <th>Acdamic Year</th>
        <th>Contact Number</th>
        {/* <th>Present/Absent</th> */}
        {/* <th>Instructions</th> */}
        {/* <th>Action</th> */}
      </tr>
    </thead>
    <tbody>
    {inputs.map((data,key)=>(
                    <tr>
                    <td>{key+1}</td>
                    <td>{data.name}</td>
                    {/* <td>{data.established}</td> */}
                    <td>{data.course}</td>
                    <td>{data.acdamic_year}</td>
                    <td>{data.phone_no}</td>
                    </tr>
                    
                    
                     ))}
    </tbody>
  </table>

  </div>
  {/* <Link to={'/volunteer'}><a className="btn btn-secondary" href="">
              <i className="fa fa-fw fa-lg fa-times-circle" />
              Cancel
            </a>
            </Link> */}
  </section>
</div>
</div>

    </div>
    );
}

export default ViewStudents;
