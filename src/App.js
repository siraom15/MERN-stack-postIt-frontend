import React from 'react';
// import router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'


// import components
import Navbar from './components/Navbar/Navbar'
import Home from './components/screen/Home';
import SignUp from './components/screen/SignUp';
import SignIn from './components/screen/SignIn';
import Profile from './components/screen/Profile';

function App() {
  return (
    <div className="container">
      <Router >
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/test">
              <div>test</div>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

      </Router>
    </div>

  );
}

export default App;
