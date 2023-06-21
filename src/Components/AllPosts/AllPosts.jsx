import React, { useContext } from 'react'
import { MyContext } from '../../App'
import './Allposts.css'
const AllPosts = () => {
    const {update}=useContext(MyContext)
  return (
    <div className='reddit_clone-allposts'>
        {update}
      
    </div>
  )
}

export default AllPosts
