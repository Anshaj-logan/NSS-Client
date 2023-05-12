import React from 'react'
import { Link } from 'react-router-dom'

const VolAddNotifi = () => {
  return (
    <div>
        <div className="tile">
  
  <div className="tile-body">
    
  <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">

      <h3 className="tile-title">Add Notification</h3>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <form className="form-horizontal">
      <div className="form-group row">
        {/* <label class="control-label col-md-3">Notification</label> */}
        <div className="col-md-12">
          <textarea
            className="form-control"
            rows={4}
            placeholder="Enter new notification"
            defaultValue={""}
          />
        </div>
      </div>
     
      <a href="Notification-view.html">
          <button className="btn btn-success" type="button">
            <i className="fa fa-fw fa-lg fa-check-circle" />
            Add
          </button>
        </a>
        &nbsp;&nbsp;&nbsp;
        <Link to={'/volunteer'}><a className="btn btn-secondary" href="Notification-view.html">
          <i className="fa fa-fw fa-lg fa-times-circle" />
          Cancel
        </a>
        </Link>
    </form>
  </div>

  </section>
  </div>
</div>

    </div>
  )
}

export default VolAddNotifi