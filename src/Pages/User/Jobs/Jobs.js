import React from 'react';
import './Jobs.css';
import Navbar from '../../../Component/Navbar/Navbar';
import Search from '../../../Component/Search/Search';

function Jobs() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12"><Search/></div>
                    <div className="col-12">
                        <div className="card p-3"></div>
                    </div>
                    <div className="col-4">
                        <div className="card shadow p-3"></div>
                    </div>
                    <div className="col-4">
                        <div className="card shadow p-3"></div>
                    </div>
                    <div className="col-4">
                        <div className="card shadow p-3"></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Jobs;