import React from 'react'
import Job from '../../../Assets/job.svg';
import Semi from '../../../Assets/semi.svg';
import './Dashboard.css';
import Navbar from '../../../Component/Navbar/Navbar';
function Dashboard() {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
        <div className="row p-3">
          <div className="col-12 col-xl-9">
            <div className="row gx-5 gy-4">
              <div className="col-12">
                <div className="card shadow card-bg border-0">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6 text-center ">
                      <div className="px-4">
                        <div className="title">Get Matched</div>
                        <div className="para mb-2">with jobs best suited to your skills</div>
                        <div className="d-flex justify-content-evenly">
                          <button className="btn primary-btn d-none d-md-block">Your Profile</button>
                          <button className="btn secondary-btn d-none d-md-block">Find a Job</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-center p-3 mb-3 mb-md-0">
                      <img src={Job} alt="" className="img-fluid" />
                    </div>
                    <div className="col-12 d-block d-sm-block d-md-none">
                      <div className="d-flex justify-content-evenly mb-4">
                        <button className="btn primary-btn">Your Profile</button>
                        <button className="btn secondary-btn">Find a Job</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card shadow border-0 p-3">
                  <div className="card-title px-2 font-weight-bold">Browse by Industry</div>
                  <div className="card-content">
                    <div className="d-flex flex-wrap justify-content-between">
                      <span className="span-color py-1 px-2  rounded-lg mt-2 ">Manufacturing</span>
                      <span className="span-color py-1 px-2 rounded-lg mt-2 ">Finance</span>
                      <span className="span-color py-1 px-2 rounded-lg mt-2 ">Sales</span>
                      <span className="span-color py-1 px-2 rounded-lg mt-2 ">Mining</span>
                      <span className="span-color py-1 px-2 rounded-lg mt-2 ">Engineering</span>
                      <span className="span-color py-1 px-2 rounded-lg mt-2 ">Health</span>
                      <span className="span-color py-1 px-2 rounded-lg mt-2 ">Education</span>
                      <span className="span-color py-1 px-2 rounded-lg mt-2 ">Research</span>
                      <span className="span-color py-1 px-2 rounded-lg mt-2 ">Advertising</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-5">
                <div className="card shadow border-0">
                  <div className="d-flex justify-content-between">
                    <div className="px-4 py-3">
                      <div className="title-secondary font-weight-bold">Jobs Available:</div>
                      <div className="card-title-secondary mt-2 pl-2">1235</div>
                      <button className="btn primary-btn w-100 mt-2">Find a job</button>
                    </div>
                    <img src={Semi} alt="" className="align-self-end" />
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 ">
                <div className="card shadow border-0 p-3">
                  <div className="title-secondary font-weight-bold">No People! Just Bot.</div>
                  <div className="text-justify p-2 font-weight-bold">Your resume details will be personally reviewed by our voice bot and matched with an available job that best meets your qualification. </div>
                  <button className="btn primary-btn w-50 w-md-25">Post Resume</button>
                </div>
              </div>

              <div className="col-12 col-md-5 text-center">
                <div className="card shadow border-0 p-5 p-md-3 p-lg-5">
                  <div className="title-secondary py-4">Helpful tips from our blog</div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="card shadow p-3 mt-3 mt-md-0">
              <div className="d-flex align-items-center w-100">
                <img src="" alt="" className="rounded-circle shadow" height="60" width="60" />

                  <div className="ml-5">
                    <div className="user-details font-weight-bold">root</div>
                    <div className="font-weight-bold">student</div>
                  </div>
              </div>
              <div className="custom-badge mt-3">Voice Intents</div>
              <div className="mt d-flex justify-content-between">
                <div className="badge primary-bg ">Open Profile</div>
                <div className="badge primary-bg ">Show My Profile</div>
                <div className="badge primary-bg ">Profile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Dashboard;