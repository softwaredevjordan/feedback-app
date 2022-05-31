import React from 'react';
import FeedbackItem from './FeedbackItem.jsx';
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext.js';
import Spinner from './shared/Spinner.jsx';

function FeedbackList() {
const {feedback, isLoading} = useContext(FeedbackContext)
    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet </p>
    }

//     return <div className='feedback-list'>
//     {feedback.map((item) => (
//         <FeedbackItem key={item.id} item={item} 
//         handleDelete={handleDelete} />
        
//     ))}
// </div>  
    return isLoading ? <Spinner /> : ( <div className='feedback-list'>
    <AnimatePresence>
    {feedback.map((item) => (
        <motion.div 
            key={item.id} 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity: 0}}
        >
            <FeedbackItem key={item.id} item={item}/>
        </motion.div>  
    ))}
    </AnimatePresence>
</div>   )
   
}

export default FeedbackList;
