import React, { useEffect, useState } from 'react';
import OrderPlace from '../../components/OrderPlace/OrderPlace';
const Orders = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        fetch(`https://thawing-brushlands-08530.herokuapp.com/registration/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrder(data))
    }, [])
    console.log('in the go', myOrder);
    return (
        <div className="row">
            {
                myOrder.map(order => <OrderPlace order={order}/>)
            }
        </div>
    );
};

export default Orders;