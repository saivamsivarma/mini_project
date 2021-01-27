import React from 'react';
import Logo from '../../../Assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import './min.css';

function MiniNavbar() {

    return (
        <div className="px-2 px-md-5 py-3 bg-transparent">
            <div className="header d-flex justify-content-between align-items-center">
                <Link to=""><img src={Logo} alt="logo" height="40" /></Link>
                <div className="float-right ml-5 ml-md-0 d-md-flex align-items-center">
                    <NavLink to="/user-login" className="btn secondary-btn mr-0 mr-md-5 px-4 d-none d-md-block shadow-sm">Login</NavLink>
                    <div className="dropdown align-items-center">
                        <button className="btn dropdown-toggle primary-btn px-4 shadow-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">Signin</button>
                        <ul className="dropdown-menu dropdown-menu-right text-center shadow" aria-labelledby="dropdownMenuButton">
                            <li><Link to="/user-signup" className="drop my-2">As a Seeker</Link></li>
                            <li className="drop my-2"></li>
                            <li><Link to="recruiter-signup" className="drop py-4">As a Recruiter</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiniNavbar;