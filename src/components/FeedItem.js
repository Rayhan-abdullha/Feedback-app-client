// import { motion , AnimatePresence} from "framer-motion"
import React, { useContext } from 'react';
import FeedBackContext from './Context/Context';
import FeedList from './FeedList';

const FeedItem = () => {
    const {feedback} = useContext(FeedBackContext)
    if (feedback.length === 0) {
        return <p className="text-center mt-3"><strong>No Item is Here!!</strong></p>
    }
    return (
        <div className="Feed-item" >
            {/* <AnimatePresence> */}
                {
                    feedback.map(feed => 
                        // <motion.div key={feed.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                            <FeedList item={feed} key={feed.id}/>
                        // </motion.div>    
                    )
                }
            {/* </AnimatePresence> */}
        </div>
    );
};

export default FeedItem;