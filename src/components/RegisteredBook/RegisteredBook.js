import React from 'react';
import { useHistory } from 'react-router';

const RegisteredBook = (props) => {
    const history = useHistory();
    const { _id, userName, userEmail, productName, productPrice, date, author } = props.reg;
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
        <>
            <tr>
                <td>{productName}</td>
                <td>{author}</td>
                <td>{productPrice}</td>
                <td><button className="btn btn-primary">E</button><button className="btn btn-danger" onClick={handleDelete}>D</button></td>
            </tr>
        </>
    );
};

export default RegisteredBook;