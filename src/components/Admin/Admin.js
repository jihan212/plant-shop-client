import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    const { register, handleSubmit } = useForm();

    const [imageURL,setImageURL] = useState();

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL : imageURL
        }
        const url = `https://secure-brook-07656.herokuapp.com/admin`;

        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then (response => console.log( 'Server side response', response) )
    };

    const handleImageUpload = product => {
        
        const imageData = new FormData();
        imageData.set('key','3f4dd576e7ec5e0aa1162eff92b248d7');
        imageData.append('image',product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <div className="admin">
            <div className="side-div">
                <h2><Link to="/productDetail">Manage Products</Link></h2>
                <h2>Add Product</h2>
            </div>
            <div className="form-div">
            <form className="submitForm" onSubmit={handleSubmit(onSubmit)}>
                <h3>Input Product Information</h3>
            <input name="name" defaultValue="Product Name" ref={register} />
            <br/>
            <input name="price" defaultValue="Product Price" ref={register} />
            <br/>
            <input name="exampleRequired" type="file" onChange={handleImageUpload} />
            <br/>
            <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Admin;