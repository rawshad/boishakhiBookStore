import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Book = (props) => {
    const bookDetails = props.book;
    const {_id, name, img, description, price} = bookDetails;
    const history = useHistory()
    const handleBook = () => {
        history.push(`/checkout/${_id}`);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid" alt="book" style={{'width': '90%', 'height': '90%', 'margin': '0 auto'}}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-body d-flex justify-content-between">
                    <h3 className="card-title">{price}</h3>
                    {/* <Link to={`/login/${_id}`}></Link> */}
                    <button onClick={() => handleBook(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;