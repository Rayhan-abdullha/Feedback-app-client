import React, { useContext, useEffect} from 'react';
import FeedBackContext from './Context/Context';
import FeedbackRating from './FeedbackRating';

const FeedBackForm = () => {
    const {handleFeedBackData, handleSubmitData, feedData, message} = useContext(FeedBackContext)
    return (
        <form onSubmit={handleSubmitData} className="container mt-4 bg-light rounded p-4">
            <div className="mb-3">
                <label htmlFor="reviewInput" className="form-label">Please give your Feedback</label>
                <input onChange={handleFeedBackData} type="text" className="form-control" id="reviewInput" value={feedData}/>
                {
                    message && <p className="text-danger mt-2">{message}</p>
                }
            </div>
            <FeedbackRating/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default FeedBackForm;