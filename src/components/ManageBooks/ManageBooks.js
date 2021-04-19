import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RegisteredBook from '../RegisteredBook/RegisteredBook';
import Sidebar from '../Sidebar/Sidebar';

const ManageBooks = () => {
    const [registration, setRegistration] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/registrations`)
        .then(res => res.json())
        .then(data => setRegistration(data))
    }, [])
    return (
        <div className="row">
            <Sidebar />
            <div className="col-md-8">
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Book Name</th>
                                <th scope="col">Author</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registration.map(reg => <RegisteredBook reg={reg} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooks;