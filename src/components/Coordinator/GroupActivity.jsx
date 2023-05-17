import axios from "axios";
import React, { useEffect, useState } from "react";

const GroupActivity = () => {
    const [inputs, setInputs] = useState([]);
    useEffect(() => {
     
      axios
        .get(
          ` http://localhost:2000/api/cod/view-activities`
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
    <th>Group Name</th>
    <th>Activity</th>
    <th>Mark</th>
    <th>Issue Date</th>
    <th>Due Date</th>
  
  </tr>
</thead>
<tbody>
{inputs.map((data,key)=>(
                <tr>
                <td>{key+1}</td>
                <td>{data.group_name}</td>
                <td>{data.activity}</td>
                <td>{data.mark}</td>
                <td>{data.issue_date}</td>
                <td>{data.due_date}</td>
              
              
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
  )
}

export default GroupActivity