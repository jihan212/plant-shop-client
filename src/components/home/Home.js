import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Home = () => {

    const [products,setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:2000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Home;