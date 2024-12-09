import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='bg-blue-400'>
        <div className='font-serif text-5xl text-red-500'>
            WISHBONE
        </div>
        <div className='sm:flex md:flex justify-center gap-10 text-white'>
          <p className='hover:text-blue-500'>HOURS&LOCATION</p>
          <p className='hover:text-blue-500'>ORDER NOW</p>
          <p className='hover:text-blue-500'>CATERING</p>
          <p className='hover:text-blue-500'>MENUS</p>
          <p className='hover:text-blue-500'>GIFTCARD</p>
          <p className='hover:text-blue-500'>ABOUT</p>
          <button className='hover:text-orange-500'>RESERVATION</button>
        </div>
        <div>
          <img className='mt-5' src="resturant.png" alt="" />
        </div>
        <p className='hover:text-blue-500'>Powered by reuben</p>
    </div> 
  )
}
