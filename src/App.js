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
import 'bootstrap-icons/font/bootstrap-icons.css'


// import components
import Navbar from './components/Navbar/Navbar'
import Home from './components/screen/Home';
import SignUp from './components/screen/SignUp';
import SignIn from './components/screen/SignIn';
import Profile from './components/screen/Profile';
import IsLoggedIn from './components/screen/IsLoggedIn';
import CreatePost from './components/screen/CreatePost';

function App() {
  return (
    <div className="container">
      <Router >
        <div className="container">
          <Navbar />
        </div>
        <div className="container mt-2">
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
            <Route path="/isLoggedIn">
              <IsLoggedIn />
            </Route>
            <Route path="/createpost" >
              <CreatePost />
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
