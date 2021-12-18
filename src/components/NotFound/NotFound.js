import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
           <h4 className="notFound text-center mt-5 py-5">
                <p className="text-danger">Ops 404 !!</p>
                <p>Page Not Found !!</p>
                <Link to="/">
                    <p className="">Back to Home</p>
                </Link>
            </h4> 
        </>
    );
};

export default NotFound;