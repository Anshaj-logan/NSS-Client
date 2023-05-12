import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const NaveAlumni = () => {
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
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <img src="img/home/logo.jpg" alt="" class="img-fluid" />
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to={'/alumni'}>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
              </Link>
            </li>
            <li>
              <Link to={'/aluprofile'}>
              <a className="nav-link scrollto" href="#about">
                Profile
              </a>
              </Link>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Notification</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <Link to={'/aluallnotification'}>
                  <a href="#">View All Notifications</a>
                  </Link>
                </li>
                <li>
                  <Link to={'/aluaddnoti'}>
                  <a href="#">Add Notifications</a>
                  </Link>
                </li>
                <li>
                 <Link to={'/alumanagenoti'}>
                  <a href="#">Manage Added Notifications</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#">
                <span>Gallery</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
            
                <li>
                <Link to={'/aluviewgallery'}>
                  <a href="#">View Gallery</a>
                  </Link>
                </li>
                <li>
                  <Link to={'/aluploadpost'}>
                  <a href="#">Upload Post</a>
                  </Link>
                </li>
                <li>
                  <Link to={'/alumanagepost'}>
                  <a href="#">Manage Uploaded Posts</a>
                  </Link>
                </li>
                {/* <li><a href="#">Drop Down 4</a></li> */}
               

              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Suggestion</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
            
                <li>
                <Link to={'/aluaddsugg'}>
                  <a href="#">Add Suggestion</a>
                  </Link>
                </li>
                <li>
                  <Link to={'/aluviewsugg'}>
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

export default NaveAlumni