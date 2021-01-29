import React from 'react'
import './Dashboard.css';
import Navbar from '../../../Component/Navbar/Navbar';
import Pie from '../../../Component/Piechart/Piechart';

function Dashboard() {
  return (
    <div>
      <Navbar name1="Dashboard" link1="recruiter-dashboard" name2="Jobs" link2="recruiter-jobs" name3="Applicant" link3="recruiter-applicant"/>
      <div className="container">
        <div className="row my-2">
          <div className="col-12 col-md-6 col-lg-4">
            <Pie name1="Pending Applications" name2="Reply Applications" name3="Jobs"/>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Dashboard;