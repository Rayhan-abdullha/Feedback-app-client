import React, { useContext } from 'react';
import FeedBackContext from './Context/Context';

const FeedStatus = () => {
    const {feedback} = useContext(FeedBackContext)
    let avg = feedback.reduce((acc, curr) => {
        return acc + curr.rating
    },0) / feedback.length
    isNaN(avg) ? avg = 0 : avg = avg.toFixed(1)
    return (
        <div className="container feedStatus bg-light d-flex mt-3 justify-content-between">
            <div className="feed-length">
                <strong>Reviews: ({feedback.length})</strong>
            </div>
            <div className="average">
                <strong>Average Rating: ({avg})</strong>
            </div>
        </div>
    );
};

export default FeedStatus;