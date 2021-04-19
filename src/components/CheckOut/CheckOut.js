import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const CheckOut = () => {
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({});
    const { name, price, img } = product;
    const user = JSON.parse(localStorage.getItem('user'));
    const [registrationData, setRegistrationData] = useState({
        userName: user.name,
        userEmail: user.email,
        productName: product.name,
        productPrice: product.price,
        img: product.img,
        author: product.author
    });
    const handleDateChange = (e) => {
        const newRegistrationData = { ...registrationData };
        newRegistrationData.date = e.target.value;
        setRegistrationData(newRegistrationData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(registrationData);
        if (registrationData.date) {
            fetch('http://localhost:5000/addRegistration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registrationData)
            })
                .then(res => res.json())
                .then(data => {
                    alert('Your Order has been placed');
                    history.replace('/');
                })
        } else {
            alert('please select date')
        }
    }
    useEffect(() => {
        fetch(`http://localhost:5000/book/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                const newRegistrationData = { ...registrationData };
                newRegistrationData.productName = data.name
                newRegistrationData.productPrice = data.price
                newRegistrationData.img = data.img
                newRegistrationData.author = data.author
                setRegistrationData(newRegistrationData);
            })
    }, []);
    console.log('in the go', product);
    return (
        <div>
            <h1>I am {user.name}</h1>
            <div className="table-responsive">
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{name}</td>
                            <td>1</td>
                            <td>{price}</td>
                        </tr>
                    </tbody>
                    <input type="date" onChange={handleDateChange} name="date" />
                    <button className="btn btn-primary" onClick={handleSubmit}>Checkout</button>
                </table>
                {/* <button className="btn btn-primary me-auto">Save</button> */}
            </div>
        </div>
    );
};

export default CheckOut;