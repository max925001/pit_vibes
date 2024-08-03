import React from 'react'
import './dog_image.css'
import dog_image from '../assets/dog.png'
import dog4 from '../assets/dog4.png'
export function DogImage() {
  return (
    <div className='dog_image'>
      <img src={dog_image} alt=""  className='dog_details_image'/>
    </div>
  )
}



 export function DogImage1() {
  return (
    <div className='dog_image1'>
      <img src={dog4} alt=""  className='dog_details_image'/>
    </div>
  )
}



