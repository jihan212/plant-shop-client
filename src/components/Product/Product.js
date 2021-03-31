import React, { useEffect, useState } from 'react';
import {Card ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    return (
        <div className="products">
            <Card className="card">
                <Card.Img variant="top" src={product.imageURL} alt="" />
                <Card.Body>
                <h1>{product.name}</h1>
                <Card.Text> Price : ${product.price}</Card.Text>
                <button ><Link to="/checkout">Buy Now</Link></button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Product;