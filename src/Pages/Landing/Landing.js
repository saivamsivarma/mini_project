import React, { useEffect, useRef } from 'react';
import Navbar from './mini-navbar/mini-navbar';
import lottie from 'lottie-web';
import { Link } from 'react-router-dom';
import './Landing.css';
import '../../App.css';

function Landing() {
  const fram = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: fram.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require("../../Assets/animation.json"),
    })
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container-fluid my-4">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 order-last order-lg-first my-5 my-lg-0">
            <div className="heading d-none d-md-block pl-5">Find your job better and faster with your Voice Command</div>
            <div className="heading-secondary d-block d-md-none">Find your job better and faster with your Voice Command</div>
            <div className="start pl-0 pl-md-5 my-5 my-md-0">
              <Link to="/user-login" className="btn primary-btn w-full px-4 py-2 shadow">Get Started</Link>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-center order-first order-lg-last">
            <div className="fram" ref={fram}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;