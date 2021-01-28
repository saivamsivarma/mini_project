import React from 'react'
import './Jobcard.css';

function Jobcard(props) {
    return (
        <div className="card px-4 py-3">
            <div className="d-flex justify-content-between align-items-center p-2">
                <div className="p-1">
                    <img src={props.img} alt="" className="img-fluid" height={props.h} width={props.h} />
                </div>
                <div className="">
                    <h5>{props.role}</h5>
                    <h6>{props.name}</h6>
                </div>
            </div>
            <div className="details p-2 my-1">
                The User Experience Designer position exists to create compelling and digital user experience through excellent design...
            </div>
            <div className="d-flex justify-content-between">
            <div className="badge secondary-bg">Full time</div>
            <div className="badge secondary-bg">Min. 1 Year</div>
            <div className="badge secondary-bg">Senior Level</div>
            </div>
            <button className="btn w-full primary-btn my-3">{props.btn}</button>
        </div>
    )
};

export default Jobcard;