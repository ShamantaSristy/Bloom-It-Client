import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../Home/Home';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        const orderData = {
            itemName: data.name,
            imageURL: imageURL,
            itemPrice: data.price
        };

        const orderDetails = {...loggedInUser, ...orderData}

        const url = 'https://shielded-stream-35602.herokuapp.com/addProduct';
        // console.log(orderData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => console.log('server side response', res))
    }

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a9e580f02052e7c8a890d464e6b6e112');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response);
                setIMageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue="Colors of Life" ref={register} />
                <br />
                <input name="price" defaultValue="80" ref={register} />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;