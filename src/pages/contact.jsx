import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <div className='font-serif bg-blue-400'>Location</div>
      <div className='border w-[350px] h-[400px] rounded-[15px] mt-[20px] ml-[50px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]'>
      <img className='w-[90px] h-[80px] ml-[100px] rounded-[10px] mt-[30px]' src="rest.jpg" alt="" />
      <p>A second Wishbone was opened in 1992 with 170 seats at 1001 W. Washington--at a time when Chicago's West Loop seemed an uncharted territory, Wishbone was an early participant in the emergence of the neighborhood from a commercial area to one of the city's culinary hot spots. In October 2018, after 27 years on Washington Blvd, Wishbone relocated to 161 N Jefferson Street.
      Wishbone celebrates 34 years in business in March 2024</p>
      </div>
    </div>
  )
}
