import React, { useEffect, useState } from 'react';
// import books from '../../components/fakeData/fakeData.json';
import Book from '../Book/Book';

const Store = () => {
    // const handleInsert = () => {
    //     fetch('https://thawing-brushlands-08530.herokuapp.com/addBook', {
    //         method: 'POST',
    //         headers: {'Content-Type' : 'application/json'},
    //         body: JSON.stringify(books)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://thawing-brushlands-08530.herokuapp.com/books')
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