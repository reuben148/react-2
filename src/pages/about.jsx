import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <div className='font-serif text-2xl bg-blue-400 text-white'>
        Menu
      </div>
      <div className='border w-[300px] h-[300px] rounded-[15px] mt-[20px] ml-[50px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]'>
      <p className='font-serif text-2xl mt-[10px]'>Fried Rice</p>
      <img className='w-[90px] h-[80px] ml-[100px] rounded-[10px] mt-[30px]' src="fried-rice.webp" alt="" />
      <p className='font-serif text-xl'>Component</p>
      <i class="fa-solid fa-utensils text-red-500"></i>
      <p className='font-serif'>Served with cran-raisins and choice of almond milk, oat milk, or whole milk.

 $11

 Add: Pecans $2

 Banana $1.50

 Berries (seasonal) $4</p>
      </div>

      <div className='border w-[300px] h-[300px] rounded-[15px] mt-[20px] ml-[50px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]'>
      <p className='font-serif text-2xl mt-[10px]'>yamarita</p>
      <img className='w-[90px] h-[80px] ml-[100px] rounded-[10px] mt-[30px]' src="yamarita.jpeg" alt="" />
      <p className='font-serif text-xl'>Component</p>
      <i class="fa-solid fa-utensils text-red-500"></i>
      <p className='font-serif'>Two buttermilk pancakes dusted with powdered sugar.

$10.50

Add mango, peach, banana, strawberry, blueberry, chocolate chips $1</p>
      </div>
    </div>

  )
}
