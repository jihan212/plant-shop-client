import React, { useEffect, useState } from 'react';
import {Card ,Button} from 'react-bootstrap';
import './Product.css';

const Product = ({product}) => {
    return (
        <div className="products">
            <Card className="card">
                <Card.Img variant="top" src={product.img} alt="" />
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Product;