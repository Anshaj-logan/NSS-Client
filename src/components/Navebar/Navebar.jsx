import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
  return (
    <div>
        <>
  {/* ======= Header ======= */}
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
          <img src="img/home/logo.jpg" alt="" class="img-fluid" />
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            {/* <li><a class="nav-link scrollto" href="#services">Register</a></li> */}
            {/* <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li> */}
            <li>
              <a className="nav-link scrollto " href="#portfolio">
                Gallery
              </a>
            </li>
            {/* <li><a class="nav-link scrollto" href="#team">Team</a></li> */}
            {/* <li class="dropdown"><a href="#"><span>Activity</span> <i class="bi bi-chevron-down"></i></a> */}
            {/* <ul> */}
            {/* <li><a href="#">services</a></li> */}
            {/* <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li> */}
            {/* <li><a href="#">Group Activity</a></li>
          <li><a href="#">Individual Activity</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul>
      </li> */}
            {/* <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li> */}
            
            {/* <li>
              <Link to={'/register'}>
              <a className="getstarted scrollto" href="">
                
                REGISTER
              </a>
              </Link>
            </li> */}

{/* <div
  className="btn-group"
  role="group"
  aria-label="Button group with nested dropdown"
>
  <button className="btn btn-primary" type="button">
    Primary
  </button>
  <div className="btn-group" role="group">
    <button
      className="btn btn-primary dropdown-toggle"
      id="btnGroupDrop1"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    />
    <div className="dropdown-menu dropdown-menu-right">
      <a className="dropdown-item" href="#">
        Dropdown link
      </a>
      <a className="dropdown-item" href="#">
        Dropdown link
      </a>
    </div>
  </div>
</div> */}

          
            <li className="dropdown">
              <a href="#">
                <span>Register here</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <Link to={'/regcoo'}><a href="#">Coordinator</a></Link>
                </li>
                <li>
                  <Link to={'/regvol'}><a href="#">Volunteer</a></Link>
                </li>
                <li>
                  
                   <Link to={'/regstud'}> <a href="#">Student</a></Link>
                    
                </li>
                <li>
                  <Link to={'/regalu'}><a href="#">Alumni</a></Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={'/loginn'}>
              <a className="getstarted scrollto" href="">
                
                LOGIN
              </a>
              </Link>
            </li>
            {/* <li><a class="getstarted scrollto" href="#about">Get Started</a></li> */}
          </ul>
          {/* <i class="bi bi-list mobile-nav-toggle"></i> */}
        </nav>
        {/* .navbar */}
      </div>
      {/* End Header Container */}
    </div>
  </header>
  {/* End Header */}
</>


    </div>
  )
}

export default Navebar