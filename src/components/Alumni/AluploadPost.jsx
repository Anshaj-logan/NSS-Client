import React from 'react'
import { Link } from 'react-router-dom'

const AluploadPost = () => {
  return (
    <div>
        <div className="tile">
  {/* <h3 className="tile-title">Upload Post</h3> */}
  <div className="tile-body">
  <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        
        <h3 className="tile-title">Upload Post</h3>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <form className="form-horizontal">
      <div className="form-group row">
        <label className="control-label col-md-3">Title</label>
        <div className="col-md-8">
          <input
            className="form-control"
            type="text"
            placeholder="Enter title here"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="control-label col-md-3">Images</label>
        <div className="col-md-8">
          <input className="form-control" type="file" />
          {/* <a href="Notification-add.html"><button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-plus"></i>Add</button></a> */}
        </div>
      </div>
      <div className="form-group row">
        <label className="control-label col-md-3">Description</label>
        <div className="col-md-8">
          <textarea
            className="form-control"
            rows={4}
            placeholder="Enter Description"
            defaultValue={""}
          />
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="row">
      <div className="col-md-8 col-md-offset-3">
        <button className="btn btn-success" type="button">
          <i className="fa fa-fw fa-lg fa-upload" />
          Upload
        </button>
        &nbsp;&nbsp;&nbsp;
        <Link to={'/alumni'}>
        <a className="btn btn-secondary" href="#">
          <i className="fa fa-fw fa-lg fa-times-circle" />
          Cancel
        </a>
        </Link>

      </div>
    </div>
      {/* <div className="form-group row">
        <div className="col-md-8 col-md-offset-3">
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" />I accept the
              terms and conditions
            </label>
          </div>
        </div>
      </div> */}
    </form>
  </div>
 
  </section>
  </div>
</div>
    </div>
  )
}

export default AluploadPost