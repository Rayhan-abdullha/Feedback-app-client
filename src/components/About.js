import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page text-center mt-5">
            <h3>FeedBack App 2022</h3>
            <p><strong>Version: 1.0</strong></p>
            <Link to="/">
                <h5>Back to Home</h5>
            </Link>
        </div>
    );
};

export default About;