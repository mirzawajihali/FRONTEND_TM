import React from 'react';
import { Link } from 'react-router';

const Unauthorized = () => {
    return (
        <div>
           <h1> Unauthorized Access</h1>
           <Link to="/">Home</Link>
        </div>
    );
};

export default Unauthorized;