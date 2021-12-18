import React, { useContext } from 'react';
import FeedBackContext from './Context/Context';

const FeedbackRating = () => {
    const {handleRating} = useContext(FeedBackContext)
    return (
        <nav aria-label="Page navigation example">
            <p>Select rating</p>
            <ul className="pagination">
                <li onClick={handleRating} value="1" className="page-item page-link">1</li>
                <li onClick={handleRating} value="2" className="page-item page-link">2</li>
                <li onClick={handleRating} value="3" className="page-item page-link">3</li>
                <li onClick={handleRating} value="4" className="page-item page-link">4</li>
                <li onClick={handleRating} value="5" className="page-item page-link">5</li>
                <li onClick={handleRating} value="6" className="page-item page-link">6</li>
                <li onClick={handleRating} value="7" className="page-item page-link">7</li>
                <li onClick={handleRating} value="8" className="page-item page-link">8</li>
                <li onClick={handleRating} value="9" className="page-item page-link">9</li>
                <li onClick={handleRating} value="10" className="page-item page-link">10</li>
            </ul>
        </nav>
    );
};

export default FeedbackRating;