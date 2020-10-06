import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from './components/Login/Login';

import "firebase/auth";
import Register from './components/Register/Register';
import SelectedVolinteer from './components/SelectedVolinteer/SelectedVolinteer';
import Registerlist from './components/SelectedVolinteer/RegisterList/Registerlist';
import Addevent from './components/AddEvent/Addevent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

 export  const UserContext = createContext()

function App() {
const [loggedInUser, setLoggedInUser] = useState({})
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        
          <PrivateRoute path="/register">
            <Register></Register>
          </PrivateRoute>

          <Route path="/selectedVolinteer">
            <SelectedVolinteer></SelectedVolinteer>
          </Route>
          <Route path = "/registerlist">
          <Registerlist></Registerlist>
          </Route>
          <Route path ="/addevent">
            <Addevent></Addevent>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
