import React from 'react'
import './main_section.css'
import dog1 from '../assets/dog_1.png'
import dog2 from '../assets/dog2.png'
import dog3 from '../assets/dog3.png'
import { FaArrowRight } from "react-icons/fa";


function MainSection() {
  return (
    <div className='main_section'>
      <div className='dog_heading'><h1>SERVICES WE OFFER</h1></div>

<div className='dog_card'>


<div class="grid-item">
<div className='grid_items_details'>
<h1>PET BOARDING </h1>
<div className='right_arror'><FaArrowRight style={{color:"black"}}/></div>

</div>
</div>
  <div class="grid-item"><img src={dog1} alt="" /></div>
  <div class="grid-item">

  <div className='grid_items_details'>
<h1>PET CAFES </h1>
<div className='right_arror'><FaArrowRight style={{color:"black"}}/></div>

</div>
  </div>
  <div class="grid-item"><img src={dog2} alt="" /></div>
  <div class="grid-item"><div className='grid_items_details'>
<h1>PET EVENTS </h1>
<div className='right_arror'><FaArrowRight style={{color:"black"}}/></div>

</div></div>
  <div class="grid-item"><img src={dog3} alt="" /></div>






</div>

    </div>
  )
}

export default MainSection
