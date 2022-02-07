import React from 'react';
import {Routes, useParams, Route} from 'react-router-dom'
import {Navigate, useNavigate} from 'react-router-dom'

function Post() {
    const params = useParams()

    const status = 200

    const navigate = useNavigate()

    const onClick = () => {
        console.log('hello')
        navigate('/about')

    }

    if (status === 404) {
       return <Navigate to='/notfound' />
    }
  return ( 
  <div>
      <h1>Post {params.id}</h1>
      <button onClick={onClick}>click</button>
      <Routes>
          <Route path='/show' element={<h1>Hello World</h1>}/>
      </Routes>
  </div>
  )
}

export default Post;
