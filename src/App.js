import React from 'react';
import { Context } from './components/Context/Context';
import FeedBackForm from './components/FeedBackForm';
import FeedItem from './components/FeedItem';
import FeedStatus from './components/FeedStatus';
import Footer from './components/Footer';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound';
import { FaQuestion } from 'react-icons/fa';
import About from './components/About';
import AboutLink from './components/AboutLink';
const App = () => {
    return (
        <Context className="App">
            <Router>
                <Navigation/>
                <Routes>
                    <Route exact path="/" element={
                    <>
                        <FeedBackForm/>
                        <FeedStatus/>
                        <FeedItem/>
                        <Footer/>
                        <AboutLink/>
                    </>
                }>
                </Route>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </Context>
    );
};

export default App;