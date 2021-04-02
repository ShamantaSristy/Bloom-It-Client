import React from 'react';
import { Button, Container} from 'react-bootstrap';
// import { Route, Router, Switch } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Link
  // useHistory
} from "react-router-dom";

import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Admin = () => {
//   const history = useHistory()
//   const handleAddProduct = () => {
//       history.push();
//   }

//   const handleManageProduct = () => {
//     history.push();
// }

  return (
    <Container>
          <Router>

          <Button style={{ marginTop: '15px' }} variant="secondary" size="lg">
          <Link style={{ color: 'white' }} to='/admin/addProduct'  variant="secondary">
          Add Product
    </Link>
    </Button>

          
          <br />
          <Button style={{ margin: '15px'}} variant="secondary" size="lg">
          <Link style={{ color: 'white' }} to='/admin/manageProduct'>
            Manage Products
    </Link>
    </Button>
          
            <Switch>
              <PrivateRoute path="/admin/addProduct">
                <AddProduct></AddProduct>
              </PrivateRoute>
              <PrivateRoute path="/admin/manageProduct">
                <ManageProduct></ManageProduct>
              </PrivateRoute>
            </Switch>
          </Router>
    </Container>
  );
};

export default Admin;