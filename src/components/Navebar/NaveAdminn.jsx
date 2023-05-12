import React from 'react'
import { Link } from 'react-router-dom'

const NaveAdminn = () => {
  return (
    <div>
       
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container">
      <div className="header-container d-flex align-items-center justify-content-between">
        <div className="logo">
          {/* <h1 className="text-light">
            <a href="index.html">
              <span>IDEAL</span>
            </a>
          </h1> */}
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <img src="img/home/logo.jpg" alt="" class="img-fluid" />
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to={'/adminnn'}>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
              </Link>
            </li>
            
            <li>
              
              <a className="nav-link scrollto" href="#portfolio">
                Gallery
              </a>
              
            </li>
            <li><Link to={'/adapprove'}>
              <a className="nav-link scrollto active" href="#hero">
                Manage Coordinator
              </a>
              </Link>
            </li>



            <li>
              <Link to={'/advolunteer'}>
              <a className="nav-link scrollto" href="#portfolio">
                Volunteer Details
              </a>
              </Link>
            </li>
            <li>
              <Link to={'/adsuggestion'}>
              <a className="nav-link scrollto" href="#portfolio">
                Suggestion
              </a>
              </Link>
            </li>

            <li>
              <Link to={'/loginn'}>
              <a className="getstarted scrollto" href="#about">
                Logout
              </a>
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
      {/* End Header Container */}
    </div>
  </header>
  
    </div>
  )
}

export default NaveAdminn