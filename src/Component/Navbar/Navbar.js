import React, { useState } from 'react';
import logo from '../../Assets/logo.svg';
import NavIcon from '../../Assets/navbar.svg'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-md bg-white shadow-sm">
            <div className="container-fluid">
                <div className="d-flex  holder">
                    <div className="navbar-brand">
                        <img src={logo} alt="" height="40" />
                    </div>
                    <button className="custom-toggler navbar-toggler" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <img src={NavIcon} alt="navicon" height="20"></img>
                    </button>
                </div>

                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center`} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/user-dashboard" className="link nav-link" onClick={handleNavCollapse}>My JobFinder</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/user-jobs" className="link nav-link" onClick={handleNavCollapse} >Jobs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/user-application" className="link nav-link" onClick={handleNavCollapse}>Application Status</NavLink>
                        </li>
                        <li className="nav-item"><div className="link nav-link d-block d-md-none">Logout</div></li>
                    </ul>
                </div>
                <div className="user-details d-md-flex justify-content-evenly ">
                    <img src="" alt="" className="user-img shadow d-none d-md-block" />
                    <div className="dropdown align-items-center d-none d-md-block">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right text-center shadow" aria-labelledby="dropdownMenuButton">
                            <li><Link to="/" className="drop nav-link">Profile</Link></li>
                            <li><Link to="/" className="btn drop nav-link mx-auto">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>


    );
}

export default Navbar;