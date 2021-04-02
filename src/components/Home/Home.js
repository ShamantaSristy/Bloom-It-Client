import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from '../Admin/Admin';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import NoMatch from '../NoMatch/NoMatch';
import Orders from '../Orders/Orders';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
export const UserContext = createContext();

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <LandingPage />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
            </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
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