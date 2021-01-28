import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import UserLogin from './Pages/User/Login/Login';
import UserSignup from './Pages/User/Signup/Signup';
import UserDashboard from './Pages/User/Dashboard/Dashboard';
import UserJobs from './Pages/User/Jobs/Jobs';
import Userdetails from './Pages/User/Userdetails/Userdetails';
import Userapplication from './Pages/User/Application/Application';

import RecruiterLogin from './Pages/Recruiter/Login/Login';
import RecruiterSignup from './Pages/Recruiter/Signup/Signup';

import Voicebot from './Component/Voicebot/Voicebot';

function App() {
  return (
    <Router>
      <Voicebot/>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/user-login" exact component={UserLogin}/>
          <Route path="/user-signup" exact component={UserSignup}/>
          <Route path="/recruiter-login" exact component={RecruiterLogin}/>
          <Route path="/recruiter-signup" exact component={RecruiterSignup}/>
          <Route path="/user-dashboard" exact component={UserDashboard}/>
          <Route path="/user-jobs" exact component={UserJobs}/>
          <Route path="/user-details" exact component={Userdetails}/>
          <Route path="/user-application" exact component={Userapplication}/>
        </Switch>
      </Router>
  );
}

export default App;
