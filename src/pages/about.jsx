import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/footer'

export default function About() {
  return (
    <div className='bg-slate-600'>
    
    <div>
     <h1 className='font-serif text-5xl text-white'>Menu</h1>
     <div className='flex justify-center gap-[15px] font-serif text-lg text-white'>
     <p className='transition-transform duration-300 transform hover:scale-105'>kaftan</p>
     <p className='transition-transform duration-300 transform hover:scale-105'>Jalabiya</p>
     <p className='transition-transform duration-300 transform hover:scale-105'>Shoes</p>
     <p className='transition-transform duration-300 transform hover:scale-105'>Caps</p>
     </div>
     
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
     <div class="h-[430px] w-[300px] bg-white rounded-[15px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]  p-[20px] ml-[45px] mt-[40px] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-10 md:border-0 transition-transform duration-300 transform hover:scale-105">
     <img src="kaftan.jpeg" alt="kaftan" /> 
     <div className='flex gap-8 mt-[5px]'>
     <button className='font-serif bg-red-500 rounded-[4px] decoration-red-600'>20% off</button>
     <p className='font-serif text-red-500'>Limited time deal</p>
     </div>
     <p className='flex justify-center font-serif'>Price - $100.00</p>
     <p className='font-serif'>Morocco Kaftan</p>
     <div className=''>
     <i class="fa-solid fa-cart-shopping"></i>
     <i class="fa-solid fa-bookmark"></i>
     <i class="fa-solid fa-tag"></i>
     </div>
     </div>
    
     <div class="h-[430px] w-[300px] bg-white rounded-[15px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]  p-[20px] ml-[45px] mt-[40px] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-10 md:border-0 transition-transform duration-300 transform hover:scale-105">
     <img className='flex  h-[300px] w-[270px]' src="jalabiya.jpeg" alt="jalabiya"/>
     <div className='flex gap-8 mt-[5px]'>
     <button className='font-serif bg-red-500 rounded-[4px]'>20% off</button>
     <p className='font-serif text-red-500'>Limited time deal</p>
     </div>
     <p className='flex justify-center font-serif'>Price - $70.00</p>
     <p className='font-serif'>Men's Vintage Polyster</p>
     <div className=''>
     <i class="fa-solid fa-cart-shopping"></i>
     <i class="fa-solid fa-bookmark"></i>
     <i class="fa-solid fa-tag"></i>
     </div>
     </div>
        
     <div class="h-[430px] w-[300px] bg-white rounded-[15px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]  p-[20px] ml-[45px] mt-[40px] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-10 md:border-0 transition-transform duration-300 transform hover:scale-105">
     <img src="shoe.jpeg" alt="shoe" />
     <div className='flex gap-8 mt-[5px]'>
     <button className='font-serif bg-red-500 rounded-[4px]'>20% off</button>
     <p className='font-serif text-red-500'>Limited time deal</p>
     </div>
     <p className='flex justify-center font-serif'>Price - $40.00</p>
     <p className='font-serif'>Posch Black Italian leather chunky</p>
     <div className=''>
     <i class="fa-solid fa-cart-shopping"></i>
     <i class="fa-solid fa-bookmark"></i>
     <i class="fa-solid fa-tag"></i>
     </div> 
     </div>
         
     <div class="h-[430px] w-[300px] bg-white rounded-[15px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]  p-[20px] ml-[45px] mt-[40px] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-10 md:border-0 transition-transform duration-300 transform hover:scale-105">
     <img className='h-[300px] w-[300px]' src="cap.jpeg" alt="cap" />
     <div className='flex gap-8 mt-[5px]'>
     <button className='font-serif bg-red-500 rounded-[4px]'>20% off</button>
     <p className='font-serif text-red-500'>Limited time deal</p>
     </div>
     <p className='flex justify-center font-serif'>Price - $60.00</p>
     <p className='font-serif'>Plain black beaded yoruba cap</p>
     <div className=''>
     <i class="fa-solid fa-cart-shopping"></i>
     <i class="fa-solid fa-bookmark"></i>
     <i class="fa-solid fa-tag"></i>
     </div>
     </div>
     </div>
    </div>
    <Footer />
    </div>

  )
}
