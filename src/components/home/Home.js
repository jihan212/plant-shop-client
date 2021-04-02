import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [loading , setLoading] = useState(true);
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://secure-brook-07656.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        setLoading(false);
    },[])
    return (
        <div>
            <div style={{display: loading? "block" : "none"}}>
                <h1>Loading images</h1>
            </div>
            <div style={{display: loading? "none" : "block"}}>
            {
                products.map((product,i) => <Product key={i} product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Home;