import { Link } from 'react-router-dom'
import axios from "axios";
import React, { useEffect, useState } from "react";


const Attendence = () => {
  const vol_id = localStorage.getItem("vol_id")
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
   
    axios
      .get(
        ` http://localhost:2000/api/vol/view-attentence/${vol_id}`
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
      <h3 className="tile-title">ATTENDENCE</h3>

  <table className="table">
    <thead>
      <tr>
        <th>Sl.No</th>
        <th>Date</th>
        <th>status</th>
        
        {/* <th>Instructions</th> */}
        {/* <th>Action</th> */}
      </tr>
    </thead>
    <tbody>
    {inputs.map((data,key)=>(
                    <tr>
                    <td>{key+1}</td>
                    <td>{data.date}</td>
                    <td>{data.attentence}</td>
                  
                    </tr>
                    
                    
                     ))}
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

export default Attendence