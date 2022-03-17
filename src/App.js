import React from 'react';
import { Context } from './components/Context/Context';
import FeedBackForm from './components/FeedBackForm';
import FeedItem from './components/FeedItem';
import FeedStatus from './components/FeedStatus';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound';
import About from './components/About';
import AboutLink from './components/AboutLink';
import UpdateList from './components/UpdateList';
import { ToastContainer, toast } from 'react-toastify';

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
                        <AboutLink/>
                    </>
                }>
                </Route>
                <Route path="/feed/:id" element={<UpdateList/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
            <ToastContainer/>
        </Context>
    );
};

export default App;