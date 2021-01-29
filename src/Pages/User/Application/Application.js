import React from 'react';
import Google from '../../../Assets/google.svg';
import Jobcard from '../../../Component/Jobcard/Jobcard';
import Navbar from '../../../Component/Navbar/Navbar';

function Applications() {
    return (
        <div>
            <Navbar name1="My jobFinder" link1="user-dashboard" name2="Jobs" link2="user-jobs" name3="Application Status" link3="user-apllication"/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Jobcard img={Google} h="50" name="Google" role="Software Developer"  btn="Applied"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <Jobcard img={Google} h="50" name="Google" role="Software Developer" btn="Applied"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <Jobcard img={Google} h="50" name="Google" role="Software Developer" btn="Applied"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Applications;