// import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import { UserContext } from '../Home/Home';

const BouquetCard = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { itemName, imageURL, itemPrice} = props.product;
    const handleOrder = () => {
      const orderInfo = {
        ...loggedInUser,
        itemName: itemName,
        itemPrice: itemPrice 
      }
      setLoggedInUser(orderInfo);
      console.log(orderInfo);
    }
    return (
        <div>
          <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{itemName}</Card.Title>
          <Card.Text>
              $ {itemPrice}
          </Card.Text>
          <Button onClick={handleOrder}><Link style={{ color: 'white' }} to='/checkout'>Buy Now</Link></Button>
        </Card.Body>
      </Card>
        </div>
    );
};

export default BouquetCard;