import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() =>{
        fetch('https://secure-brook-07656.herokuapp.com/order?email='+loggedinUser.email)
        .then (res => res.json())
        .then (data => setOrders(data))
    },[])
    return (
        <div>
            <h1>This is order</h1>
            <h2>You have {orders.length} orders</h2>
            {
                orders.map(order => <li>{order.name} from {(new Date(order.checkIn).toDateString('dd/MM/yyyy'))} to {(new Date(order.checkOut).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Order;