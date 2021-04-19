import React, { useEffect, useState } from 'react';
// import books from '../../components/fakeData/fakeData.json';
import Book from '../Book/Book';

const Store = () => {
    // const handleInsert = () => {
    //     fetch('http://localhost:5000/addBook', {
    //         method: 'POST',
    //         headers: {'Content-Type' : 'application/json'},
    //         body: JSON.stringify(books)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, []);

    return (
        <div className="row align-items-start">
            {/* <button onClick={handleInsert}>Add All Books</button> */}
            {books.map(books => <Book book={books} />)}
        </div>
    );
};

export default Store;