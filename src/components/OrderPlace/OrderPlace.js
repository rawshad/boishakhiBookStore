import React from 'react';
import { useHistory } from 'react-router';

const OrderPlace = (props) => {
    const history = useHistory();
    const order = props.order;
    const {_id, userName, userEmail, date, productName, productPrice, img, author} = order;
    const handleDelete = () => {
        fetch(`http://localhost:5000/deleteRegistration/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Your requested book is successfully deleted');
                history.replace('/');
            });
    }
    return (
        <div className="col-md-6">
            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid" alt="book"/>
                <div className="card-body">
                    <h3 className="card-title">Name : {userName}</h3>
                    <h3 className="card-title">Name : {userEmail}</h3>
                    <h3 className="card-title">Price: {productPrice}</h3>
                    <h3 className="card-title">Order Placed: {date}</h3>
                </div>
                <button className="btn btn-danger" onClick={handleDelete}>Cancel Order</button>
            </div>
        </div>
    );
};

export default OrderPlace;