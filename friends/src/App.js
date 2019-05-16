import React from 'react';
import './App.css';
import Login from './views/Login'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './views/FriendsList'
import Home from './views/Home'
import AddFriend from './views/AddFriend'



function App() {
  return (  
    <Router>
     
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/friendsList">Secure Friends List</Link>
        </li>
        <li>
          <Link to="/addFriend">Secure Add a Friend Form</Link>
        </li>
      </ul>
      <div className="App">
        <Route exact path={"/"} component={Home}></Route>
        <Route path={"/login"} component={Login}></Route>
        <PrivateRoute exact path={"/friendsList"} component={FriendsList}  />
        <PrivateRoute exact path={"/addFriend"} component={AddFriend}  />
      </div>
    </Router>
  );

}

export default App;
