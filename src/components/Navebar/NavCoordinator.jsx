import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const NavCoordinator = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("name")
        localStorage.removeItem("loginId")
        localStorage.removeItem("role")
        localStorage.removeItem("cordinator_id")
        navigate('/')

    }
    return (
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
                            <li>
                                <Link  className="nav-link scrollto active" to={'/'}>
                                    <a className="nav-link scrollto active" href="#hero">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link style={{textDecoration:"none"}} to={'/students'}>
                                <a className="nav-link scrollto" >
                                    Students
                                </a>
                                </Link>
                            </li>
                            <li class="dropdown"><a href="#" style={{textDecoration:"none"}}><span>Add Details</span> <i class="bi bi-chevron-right"></i></a>
                                <ul>
                                    <li><a href="#">Test Details</a></li>
                                    <li><a href="#">Interview Details</a></li>
                                   </ul>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <a className="nav-link scrollto" style={{textDecoration:"none"}} href="#">
                                        Volunteers
                                    </a>
                                </Link>
                            </li>
                            <li class="dropdown"><a href="#"><span>Activities</span> <i class="bi bi-chevron-right"></i></a>
                                <ul>
                                    <li><a href="#">Asign Group Activity</a></li>
                                    <li><a href="#">View Group Activity</a></li>
                                   </ul>
                            </li>
                            <li class="dropdown"><a href="#"><span>Individual Activities</span> <i class="bi bi-chevron-right"></i></a>
                                <ul>
                                    <li><a href="#">Add Activity</a></li>
                                    <li><a href="#">View Activity</a></li>
                                   </ul>
                            </li>
                            {/* <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li> */}
                            {/* <li><a class="nav-link scrollto" href="#team">Team</a></li> */}
                            {/* <li class="dropdown"><a href="#"><span>Activity</span> <i class="bi bi-chevron-down"></i></a> */}
                            {/* <ul> */}
                            {/* <li><a href="#">Group</a></li> */}
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
    );
}

export default NavCoordinator;
