import React from 'react'
import { Link } from 'react-router-dom'
// import CarouselItem from '../CarouselItem/CarouselItem';
// import Carousel from '../Carousel/Carousel'
import CarouselItem from '../CarouselItem/CarouselItem'

function Hero() {
 
  return (
    <div className='bg-[#F5F5F5] grid-col-1 grid-rows-1 px-9 grid md:grid-cols-2 md:mb-[100px]'>
      <div className="m-4">
           <h1 className="text-5xl leading-1 font-bold text-black md:mt-10 md:text-6xl md:leading-1">So You Think You Can</h1>
          <h1 className='text-5xl mt-5 md:text-6xl font-bold leading-8 md:mt-6 text-orange-500'>&lt;Code/&gt;</h1> 
        <h4 className="font-semibold mt-6 text-2xl">Welcome to the Home of <span className='text-orange-500'>Ninjas</span></h4>
        <p className="my-6">Here, we dive into the ocean, then we have a cup of coffee and write clean codes.</p>
        <Link className='mt-14 md:mt-28 block' to='/'><button className='bg-[#06113C] text-white px-9 py-3 rounded-xl flex items-center'>Get Started</button></Link>
    </div>
      <div className="h-full w-full md:h-full md:w-full md:block ">
        {/* <Carousel/> */}
        <CarouselItem/>
    </div>
    </div>
  )
}

export default Hero
