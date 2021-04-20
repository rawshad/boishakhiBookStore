import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const AddBooks = () => {
    const [addBook, setAddBook] = useState({});
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://thawing-brushlands-08530.herokuapp.com/addBook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addBook)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your Order has been placed');
                history.replace('/');
            })
    }
    const handleOnBlur = (e) => {
        const newBook = addBook;
        newBook[e.target.name] = e.target.value;
        setAddBook(newBook);
    }
    return (
        <div className="row">
            <Sidebar />
            <div className="col-md-8">
                <h3 className="text-center">Add a new Book</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" onBlur={handleOnBlur} name="name" className="form-control" placeholder="Book Name" required /> <br />
                    <input className="form-control" type="text" onBlur={handleOnBlur} name="author" placeholder="Author Name" required /><br />
                    <input className="form-control" type="text" onBlur={handleOnBlur} name="price" placeholder="Add Price" required /><br />
                    <input className="form-control" type="text" onBlur={handleOnBlur} name="img" placeholder="upload photo" required /><br />
                    <input className="form-control" type="text" onBlur={handleOnBlur} name="description" placeholder="description" required /><br />
                    <button className="btn btn-primary">Add Book</button>
                </form>
            </div>
        </div>
    );
};

export default AddBooks;