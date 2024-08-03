import React from 'react'
import './blogs.css'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog2.png'
import blog4 from '../assets/blog4.png'

function Blogs() {
  return (
    <div className='blog_container'>
      <div className='blog_heading'><h1>INTERESTING BLOGS</h1></div>


      <div class="blog_container">
        <div class="card"><img src={blog1} alt="" /><div className='blog_title'>TRAVEL</div></div>
        <div class="card"><img src={blog2} alt="" /><div className='blog_title'>NUTRITION</div></div>
        <div class="card"><img src={blog3} alt="" /><div className='blog_title'>SENIOR DOG CARE</div></div>
        <div class="card"><img src={blog4} alt="" /><div className='blog_title'>BEHAVIOUR</div></div>
    </div>
    </div>
    
  )
}

export default Blogs
