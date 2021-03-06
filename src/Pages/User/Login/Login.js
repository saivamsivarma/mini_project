import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Logo from '../../../Assets/logo.svg';
import './Login.css';
import { Link} from 'react-router-dom';

function UserLogin() {
   const loginfram = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: loginfram.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require("../../../Assets/userlogin.json"),
            height: '100px',
            width: "100px"
        })
    }, []);
    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6 login-fram d-none d-lg-block" ref={loginfram}></div>
                <div className="col-12 col-lg-6 my-5 my-lg-0">
                    <div className="text-center">
                        <img src={Logo} alt="" height="70" />
                        <div className="header"><span className="strong">L</span>og<span className="strong">I</span>n</div>
                    </div>
                    <form className="form-group px-4 px-md-5 my-4">

                        <div className="form-label-group px-0 px-md-5">
                            <input type="email" id="inputEmail" className="form-control px-3" placeholder="Email address" required autoFocus/>
                            <label>Email address</label>
                        </div>

                        <div className="form-label-group px-0 px-md-5">
                            <input type="password" id="inputPassword" className="form-control px-3" placeholder="Password" required />
                            <label>Password</label>
                            <span className="forgot">Forgot Password</span>
                        </div>
                        <div className="text-center px-0 px-md-5">
                            <Link to="/user-dashboard" className="btn primary-btn w-100 shadow my-2">Login</Link>
                        </div>
                    </form>
                    <div className="px-0 px-md-5">
                        <div className="d-md-flex justify-content-md-between my-3 px-4 px-md-5">
                            <button className="btn secondary-btn w-full shadow my-3 my-md-0">Login With Google</button>
                            <button className="btn secondary-btn w-full shadow ">Login With Facebook</button>
                        </div>
                        <div className="d-flex px-4 px-md-5 justify-content-around mt-4">
                            <div>New User?<Link to="/user-signup" className="link">Create an Account</Link></div>
                            <div>I'M <Link to="/recruiter-login" className="link">Recuriter</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;