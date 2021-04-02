import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://secure-brook-07656.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            {
                products.map((product,i) => <Product key={i} product={product}></Product>)
            }
        </div>
    );
};

export default Home;