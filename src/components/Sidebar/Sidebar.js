import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="col-md-4">
            <Link to="/manageBooks"><h3>Manage Books</h3></Link>
            <Link to="/addBooks"><h3>Add Books</h3></Link>
            <Link><h3>Edit Books</h3></Link>
        </div>
    );
};

export default Sidebar;