import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const products = [
    {
        name:'Book',
        img:'/home.jpg'
    },
    {
        name:'Book',
        img:'home.jpg'
    },
    {
        name:'Book',
        img:'home.jpg'
    },{
        name:'Book',
        img:'home.jpg'
    },
    {
        name:'Book',
        img:'./home.jpg'
    },
    {
        name:'Book',
        img:'./home.jpg'
    },
    {
        name:'Book',
        img:'home.jpg'
    },
    {
        name:'Book',
        img:'./home.jpg'
    }
]

const Home = () => {
    return (
        <div className="row">
            <h1>This Is Home</h1>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Home;