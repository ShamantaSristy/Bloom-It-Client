import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const ProductList = (props) => {
    const {itemName, itemPrice, _id} = props.order;

    const deleteItem = id => {

        fetch(`https://shielded-stream-35602.herokuapp.com/deleteItem/${id}`,{
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(result => {
            console.log('delete item', result)
        })

        console.log(id);
    }
    return (
        <div>
            <ListGroup.Item>Name: {itemName}  Price: {itemPrice} <br/> <Button onClick={() => deleteItem(_id)}> Delete Item </Button></ListGroup.Item>
        </div>
    );
};

export default ProductList;