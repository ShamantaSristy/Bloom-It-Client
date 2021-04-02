import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
// import ProductList from './productList';
import ProductList from './ProductList';

const ManageProduct = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://shielded-stream-35602.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [])
    return (
        <div>
            <Container>
                   <ListGroup>
                   {
                        orders.map(order => <ProductList order={order}></ProductList>)
                    }
                   </ListGroup>
            </Container>
        </div>
    );
};

export default ManageProduct;