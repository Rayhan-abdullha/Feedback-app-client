import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const FeedBackContext = createContext()

export const Context = ({children}) => {
    const [feedback, setFeedback] = useState([])
    const [feedData, setFeedData] = useState('')
    const [feedRating, setFeedRating] = useState(9);
    const [render, setRender] = useState(false)

    const [message, setMessage] = useState('')
    // handle feedback
    const handleFeedBackData = (e) => {
        setFeedData(e.target.value);
        if (feedData.trim().length < 10) {
            setMessage('At least 10 charecter')
        } else {
            setMessage(null)
        }
    }

    // get feedback
    useEffect(() => {
        fetch("https://serene-everglades-21819.herokuapp.com/feed")
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [feedData, render])

    // post form data
    const handleSubmitData = (e) => {
        e.preventDefault()
        const feed = {
            text: feedData,
            rating: feedRating
        }
        if (feedData.trim().length === 0 && feedRating || feedData.trim().length < 10) {
            setMessage('Please Provide Valid Feedback')
        } else {
            fetch("https://serene-everglades-21819.herokuapp.com/feed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feed),
        })
            .then(res => res.json())
            .then(data => toast("Thanks For The Feedback"))
            .catch(err => toast.error("Credintial Error"))
            setMessage(null)
            setFeedData('')
        }
        
    }

    // delete feedback
    const handleDelete = (id) => {
        fetch(`https://serene-everglades-21819.herokuapp.com/feed/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            const filter = feedback.filter(feed => feed._id !== id)
            setFeedback(filter)
            toast("Remove Feedback")
        })
    }

    // handle rating
    const handleRating = (e) => {
        setFeedRating(e.target.value)
        e.target.style.background = "#0d6efd"       
        e.target.style.color = "#fff"
        setTimeout(() => {
            e.target.style.background = ""
            e.target.style.color = "#0a58ca"
        }, 2000);      
    }

    return (
        <FeedBackContext.Provider value={{feedback, handleFeedBackData, handleSubmitData, feedData, handleRating, feedRating, setFeedback, handleDelete, setFeedRating,setFeedData, message, setRender}}>
            {children}
        </FeedBackContext.Provider>
    );
};

export default FeedBackContext;