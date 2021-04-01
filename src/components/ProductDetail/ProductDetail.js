import React, { useEffect, useState } from 'react';

const ProductDetail = () => {
    const [product, setProduct] = useState([]);

    const getProduct = (id) =>{
        fetch=`http://localhost:2000/products/${id}`
        .then (res => res.json())
        .then (data => setProduct(data))
    }
    return (
        <div>
            <h1>This is product detail</h1>
            <h2>Name: {product.name}</h2>
        </div>
    );
};

export default ProductDetail;