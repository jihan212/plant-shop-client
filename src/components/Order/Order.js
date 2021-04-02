import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Order.css'

const Order = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() =>{
        fetch('https://secure-brook-07656.herokuapp.com/order?email='+loggedinUser.email)
        .then (res => res.json())
        .then (data => setOrders(data))
    },[])
    return (
        <div className="order">
            <h1>You have {orders.length} orders</h1>
            {
                orders.map(order => <li>{order.email} ordered {order.name} at  {(new Date(order.checkOut).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Order;