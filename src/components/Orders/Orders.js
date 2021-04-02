import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { UserContext } from "../Home/Home";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://shielded-stream-35602.herokuapp.com/orders?email=' + loggedInUser.email, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h3>All Your orders appears here</h3>
            {
                orders.map((order) => <Container style={{ marginTop: '10vh' }}>
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
                      <td>{order.itemName}</td>
                      <td>1</td>
                      <td>{order.itemPrice}</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
                
                
                
                
                
                
                
                // <li key={order._id}><strong>Item Name: </strong>
                //        {order.itemName}  <strong>Item Price:</strong>{order.itemPrice} </li>
                )
            }
        </div>
    );
};

export default Orders; 