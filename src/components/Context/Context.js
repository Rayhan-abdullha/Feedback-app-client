import React, { createContext, useEffect, useState } from 'react';

const FeedBackContext = createContext()

export const Context = ({children}) => {
    const [feedback, setFeedback] = useState([
        {id: 1, text: "This is context", rating: 6}
    ])
    const [feedData, setFeedData] = useState('')
    const [feedRating, setFeedRating] = useState(9);
    const [feedEdit, setFeedEdit] = useState({
        item: {},
        edit: false
    })
    const [message, setMessage] = useState('')
    // handle feedback
    const handleFeedBackData = (e) => {
        setFeedData(e.target.value);
        if (feedData.trim().length < 10) {
            setMessage('At least 10 charecter')
        }else {
            setMessage(null)
        }
        
    }
    // handle submit
    const handleSubmitData = (e) => {
        e.preventDefault()
        const feed = {
            id: Math.random().toString(),
            text: feedData,
            rating: feedRating
        }
        if (feedData.trim().length === 0 && feedRating || feedData.trim().length < 10) {
            setMessage('Please Provide Valid Feedback') 
        } else {
            setFeedback((prev) => {
                return [feed, ...prev]
            });
            setMessage(null)
            setFeedData('')
        }
        

        if (feedEdit.edit === true) {
            updateFeedback(feedEdit.item.id, feed)
        }
        
    }
    // handel rating
    const handleRating = (e) => {
        setFeedRating(e.target.value)
    }
    // handle delete
    const handleDelete = (e) => {
        setFeedback(feedback.filter(data => data.id !== e))
    }
    // update feedback
    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map(item => (item.id === id) ? 
        {...item, ...updateItem} : item));
    }
    const handleEdit = (item) => {
        setFeedEdit({
            item,
            edit: true
        })
    }

    return (
        <FeedBackContext.Provider value={{feedback, handleFeedBackData, handleSubmitData, feedData, handleRating, feedRating, setFeedback, handleDelete, handleEdit, feedEdit, setFeedRating,setFeedData, message}}>
            {children}
        </FeedBackContext.Provider>
    );
};

export default FeedBackContext;