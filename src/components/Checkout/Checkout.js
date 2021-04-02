import React, { useContext, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { UserContext } from '../Home/Home';

const Checkout = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {itemName, itemPrice} = loggedInUser;
  console.log(loggedInUser);
  const [orderDetails, setOrderDetails] = useState({});



  const handleConfirmOrder = data => {
    const orderData = {
      ...loggedInUser
    };
    // setLoggedInUser(orderData);
    setOrderDetails(orderData);
    console.log(orderData);

    // const orderDetails = { ...loggedInUser, ...orderData }

    const url = 'https://shielded-stream-35602.herokuapp.com/addOrder';
    console.log(orderDetails);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(loggedInUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  return (

    <Container style={{ marginTop: '10vh' }}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{itemName}</td>
            <td>1</td>
            <td>{itemPrice}</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Button onClick={handleConfirmOrder} variant="secondary" size="lg">
        Confirm Order
    </Button>
    </Container>
  );
};

export default Checkout;