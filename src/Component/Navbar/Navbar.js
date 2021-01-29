import React, { useState } from 'react';
import logo from '../../Assets/logo.svg';
import NavIcon from '../../Assets/navbar.svg'
import { Link, NavLink } from 'react-router-dom';
import User from '../../Assets/defaultuser.svg';
import './Navbar.css';

function Navbar(props) {

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
                            <NavLink activeClassName="active" to={`/${props.link1}`} className="link nav-link" onClick={handleNavCollapse}>{props.name1}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to={`/${props.link2}`} className="link nav-link" onClick={handleNavCollapse}>{props.name2}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to={`/${props.link3}`} className="link nav-link" onClick={handleNavCollapse}>{props.name3}</NavLink>
                        </li>
                        <li className="nav-item"><Link to="/" className="link nav-link d-block d-md-none">Logout</Link></li>
                    </ul>
                </div>
                <div className="user-details d-md-flex justify-content-evenly ">
                    <img src={User} alt="" className="user-img shadow d-none d-md-block" />
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