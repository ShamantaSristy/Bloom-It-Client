import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import BouquetCard from '../BouquetCard/BouquetCard';


const LandingPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://shielded-stream-35602.herokuapp.com/products')
            .then(res => res.json())
            .then(data =>{
                setProducts(data);
                console.log(data);
            })
    }, [])
    return (
        <Container>
            {
                products.length === 0 && <CircularProgress />
            }
            <CardColumns>
                {
                    products.map(product => <BouquetCard product={product}></BouquetCard>)
                }
            </CardColumns>
        </Container>
    );
};

export default LandingPage;