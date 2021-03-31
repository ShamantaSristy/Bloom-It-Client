import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import NoMatch from '../NoMatch/NoMatch';
import Orders from '../Orders/Orders';
export const UserContext = createContext();

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

<Router>
            <Header></Header>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>

        </UserContext.Provider>
    );
};

export default Home;