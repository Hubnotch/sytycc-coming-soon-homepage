import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

function Membership() {

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const closeMenu = () => { 
    setIsOpen(false)
  }

  return (
    <nav className='flex h-20 w-full justify-between items-center px-14 fixed z-[1]'>
      <div className="flex items-center justify-evenly ">
        <div className="flex items-center justify-center">
        <Link className='w-40 h-11' to='/'><img src={'logo'} alt="sytycc logo" /></Link>
      </div>
      {/* <div className={isOpen ? 'block w-[100vw] h-[100vh]' : 'hidden'}> */}
        <ul className={isOpen ? 'text-5xl uppercase p-3 flex w-full h-full absolute top-24 left-0 opacity-100 transition-all duration-700 ease-in-out flex-col gap-0 ':'hidden'}>
          <li onClick={closeMenu} className='text-white my-5 hover:text-orange-800'><Link to="/"> Home</Link></li>
          <li onClick={closeMenu} className='text-white my-5 hover:text-orange-800'><Link to="/about"> About</Link></li>
          <li onClick={closeMenu} className='text-white my-5 hover:text-orange-800'><Link to="/profiles"> Profiles</Link></li>
          <li onClick={closeMenu} className='text-white my-5 hover:text-orange-800'><Link to="/stories"> Stories</Link></li>
          <li onClick={closeMenu} className='text-white my-5 hover:text-orange-800'><Link to="/membership"> Membership</Link></li>
          <li onClick={closeMenu} className='text-white my-5 hover:text-orange-800'><Link to="/contact"> Contact</Link></li>
        </ul>
      {/* </div> */}
      </div>
      <div onClick={handleClick} className="ml-auto">
        {isOpen ? <AiOutlineClose className='text-3xl cursor-pointer' /> : <BiMenuAltRight className='text-3xl cursor-pointer ease-in-out duration-1000' />}
      </div>
    </nav>
  )
}

export default Membership

// import React, { useState } from 'react';

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className={`${isOpen ? 'block' : 'hidden'} md:flex`}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="block md:hidden border-gray-600 hover:border-gray-700 focus:border-gray-700"
//       >
//         Menu
//       </button>
//       <a href="#" className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 md:mt-0 md:ml-4">
//         Home
//       </a>
//       <a href="#" className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 md:mt-0 md:ml-4">
//         About
//       </a>
//       <a href="#" className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 md:mt-0 md:ml-4">
//         Contact
//       </a>
//     </nav>
//   );
// };

// export default Menu;
