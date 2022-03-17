import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
const QuestionLink = styled.div`
    {
        position: fixed;
        right: 20px;
        bottom: 20px;
        display: inline-block;
        background: none;
        font-size: 30px;
        z-index: 999;
    }
    &:hover{
        transform: scale(1.5);
    }

`

const AboutLink = () => {
    return (
        <QuestionLink className="aboutLink">
            <Link to="/about">
                <FaQuestion/>
            </Link>
        </QuestionLink>
    );
};

export default AboutLink;