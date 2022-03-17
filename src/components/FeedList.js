import React, { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa'
import styled from 'styled-components'
import FeedBackContext from './Context/Context';
import { Link } from 'react-router-dom';

const ItemList = styled.div`
    {
        padding: 10px;
    }
    .text {
        font-size: 20px;
        margin-bottom: 0;
    }
    .rating {
        color: #fff;
        height: 40px;
        width: 40px
        border-radius: 30px;
        text-align: center;
        line-height: 38px;
        margin-bottom: 0;
    }
    .button { 
        display: flex;
        justify-content: end;
        gap: 2rem;
    }
    .feedText{
    display: flex;
    gap: 2rem;
}
`

const FeedList = ({item}) => {
    const {handleDelete} = useContext(FeedBackContext)
    
    return (
        <ItemList className="container bg-light mt-4">
            <div className="row">
                <div className="feedText col-xl-6 col-md-6 col-sm-8">
                    <p className="rating bg-dark">{item.rating}</p>
                    <p className="text">{item.text}</p>
                </div>
                <div className="button col-xl-6 col-md-6 col-sm-4">
                    <button className="border-0 deleteBtn">
                    <Link to={`/feed/${item._id}`}>
                        <FaEdit/>
                    </Link>
                    </button>
                    <button className="border-0 deleteBtn">
                        <FaTimes onClick={() => handleDelete(item._id)}/>
                    </button>
                </div>
            </div>
        </ItemList>
    );
};

export default FeedList;