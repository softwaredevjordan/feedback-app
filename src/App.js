import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import Header from './component/Header.jsx'
import FeedbackList from './component/FeedbackList.jsx'
import FeedbackStats from './component/FeedbackStats.jsx'
import FeedbackForm from './component/FeedbackForm.jsx'
import AboutPage from './component/pages/AboutPage.jsx'
import AboutIconLink from './component/AboutIconLink.jsx'
import Post from './component/Post.jsx'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
   
return(
<FeedbackProvider>   
    <Router>     
        <Header  />
            <div className = 'container'>
                <Routes>
                    <Route exact path='/' element={
                        <>  
                            <FeedbackForm  />
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage />}/>
                    <Route path='/post/*' element={<Post />}/>
                </Routes>

                    {/* <Card>
                        <NavLink to='/' activeClassName='active'>
                            Home    
                        </NavLink>
                        <NavLink to='/about' activeClassName='active'>
                            About    
                        </NavLink>         
                    </Card>     */}

                <AboutIconLink />
            </div>
    </Router>
</FeedbackProvider>        
)
    
}
export default App