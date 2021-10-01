import React from 'react'
import { MdClearAll ,MdNotifications,MdSearch} from "react-icons/md"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav">
        <div className="row flex-grow-1">
          <div className="col-11  mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="navbar-brand" to="/" >
                <img src="/images/netflix_logo.jpg" alt="netflix_logo" className="w-100 h-100"/>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#netflix_navbar"
                aria-controls="netflix_navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <MdClearAll />
              </button>
              <div
                className="collapse navbar-collapse"
                id="netflix_navbar"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-end">
                  <li className="nav-item ms-3">
                    <NavLink className="nav-link" to="/"  >
                      Home
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-end">
                  <li className="nav-item">
                    <MdSearch className="nav_icons"/>
                  </li>
                  <li className="nav-item ms-3">
                    
                      <MdNotifications className="nav_icons"/>
                    
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
            
        </>
    )
}

export default Navbar


