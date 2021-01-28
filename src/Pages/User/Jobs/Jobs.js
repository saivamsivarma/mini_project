import React from 'react';
import './Jobs.css';
import Navbar from '../../../Component/Navbar/Navbar';
import Search from '../../../Component/Search/Search';
import MapContainer from '../../../Component/Map/Map';
import Jobcard from '../../../Component/Jobcard/Jobcard';
import Google from '../../../Assets/google.svg';

function Jobs() {
    return (
        <div>
            <Navbar />
            <div className="container mb-2">
                <div className="row">
                    <div className="col-12"><Search /></div>
                    <div className="head">Jobs Near You</div>
                    <div className="col-12">
                        <div className="card map-holder">
                            <MapContainer />
                        </div>
                    </div>
                    <div className="head mt-5">Based on your Skills</div>
                    <div className="col-12 col-md-6 col-lg-4 mt-2">
                        <Jobcard img={Google} h="50" name="Google" role="Software Developer" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-2">
                        <Jobcard img={Google} h="50" name="Google" role="Software Developer" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-2">
                        <Jobcard img={Google} h="50" name="Google" role="Software Developer" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jobs;