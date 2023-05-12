import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NaveVolunteer = () => {
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("loginId")
    localStorage.removeItem("role")
    localStorage.removeItem("student_id")
    navigate('/')

  }
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
          <img src="img/home/logo.jpg" alt="" class="img-fluid"/>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to={'/volunteer'}>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a></Link>

            </li>
            <li>
             <Link to={'/volprofile'}> <a className="nav-link scrollto" href="#about">
                Profile
              </a></Link>
            </li>
            <li>
              <Link to={'/volattendence'}><a className="nav-link scrollto" href="#services">
                Attendence
              </a></Link>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Activity</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
            
                <li>
                <Link to={'/volindactivity'}>
                  <a href="#">View Individual Activity &amp; update status</a>
                  </Link>
                </li>
                <li>
                  <Link to={'/volgrpactivity'}>
                  <a href="#">View Group Activity &amp; update status</a>
                  </Link>
                </li>
                {/* <li><a href="#">Drop Down 4</a></li> */}
               

              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Mark</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
            
                <li>
                  <Link to={'/volmarkind'}>
                    <a href="#">Individual Activity Mark</a>
                    </Link>
                </li>
                <li>
                  <Link to={'/volmarkgrp'}>
                    <a href="#">Group Activity Mark</a>
                    </Link>
                </li>
                {/* <li><a href="#">Drop Down 4</a></li> */}
               

              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Notification</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
            
                <li>
                <Link to={'/volnotification'}>
                  <a href="">View All Notifications</a>
                  </Link>
                </li>
                <li>
                  <Link to={'/voladdnotification'}>
                  <a href="#">Add Notification</a>
                  </Link>
                </li>
                <li>
                  <Link to={'/voladdednotifi'}>
                  <a href="#">Manage Added Notifications</a>
                  </Link>
                </li>
                {/* <li><a href="#">Drop Down 4</a></li> */}
               

              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Gallery</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
            
                <li>
                <Link to={'/volviewgallery'}>
                  <a href="#">View Gallery</a>
                  </Link>
                </li>
                <li>
                  <Link to={'/voladdpost'}>
                  <a href="#">Upload Post</a>
                  </Link>
                </li>
                <li>
                  <Link to={'/volmanagepost'}>
                  <a href="#">Manage Uploaded Posts</a>
                  </Link>
                </li>
                {/* <li><a href="#">Drop Down 4</a></li> */}
               

              </ul>
            </li>
            <li>
              <Link to={'/volcamp'}>
              <a className="nav-link scrollto" href="#team">
                Camp
              </a>
              </Link>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Suggestion</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
            
                <li>
                <Link to={'/voladdsugg'}>
                  <a href="#">Add Suggestion</a>
                  </Link>
                </li>
                <li>
                  <Link to={'/volviewsugg'}>
                  <a href="#">View Added Suggestions</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              
              <a className="getstarted scrollto" onClick={logout}>
                Logout
              </a>
              
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
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

export default NaveVolunteer