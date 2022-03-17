import React, {useContext, useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import FeedBackContext from './Context/Context';

const UpdateList = ({}) => {
    const {setRender} = useContext(FeedBackContext)
    const [singleFeed, setSingleFeed] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    const handleTextChange = (e) => {
        const feed = e.target.value;
        const updateFeed = {...singleFeed}
        updateFeed.text = feed;
        setSingleFeed(updateFeed)
    }

    const handleRatingChange = (e) => {
        const rating = e.target.value;
        const updateRating = {...singleFeed}
        updateRating.rating = rating;
        setSingleFeed(updateRating)
    }

    useEffect(() => {
        fetch(`https://serene-everglades-21819.herokuapp.com/feed/${id}`)
            .then(res => res.json())
            .then(data => setSingleFeed(data))
    }, [])

   // Update Feedback
    const handleUpdate = (e) => {
        e.preventDefault()
        fetch(`https://serene-everglades-21819.herokuapp.com/feed/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(singleFeed)
        })
        .then(res => res.json())
        .then(data => toast("Update Feedback"))
        setRender(true)
        navigate("/")
    }
    return (
        <div className="container mt-5">
            <form onSubmit={handleUpdate} className="row">
                <input className="form-control mb-3" type="text" onChange={handleTextChange} value={singleFeed.text || ""}/>
                <input className="form-control mb-3" type="text" onChange={handleRatingChange} value={singleFeed.rating || ""}/>
                <input className="btn-primary py-1" type="submit"/>
            </form>
        </div>
    );
};

export default UpdateList;