import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

function Header() {
  const [isOpen,setIsOpen] = useState(false)
  const handleChange = () => {
  setIsOpen(prevState=> !prevState)
  }
  const closeMenu = () => {
  setIsOpen(false)
}
  return (
      <nav className='flex  w-full h-[100px] items-center  px-9 py-8 mb-11 shadow-md'>
      <div className="mr-auto">
        <Link to='/'>
          <img src={logo} alt="sytycc logo" />
        </Link>
      </div>   
      <div className="hidden md:w-3/4 md:flex md:items-center md:justify-between">
        <Link onClick={closeMenu} to='/about'>About Us</Link>
        <Link onClick={closeMenu} to='/profiles'>Profiles</Link>
        <Link onClick={closeMenu} to='/stories'>Stories</Link>
        <Link onClick={closeMenu} to='/membership'>Membership</Link>
      <div className="">
        <Link to='/'><button className='text-white bg-[#06113C] px-9 py-3 rounded-xl flex items-center'>Login</button></Link>
      </div>   
      </div>
      <div className={isOpen ? 'ease-in-out duration-700 h-auto text-[#F5F5F5] bg-[#06113C] absolute top-[100px] left-0 w-screen flex items-center flex-col justify-between':'hidden'}>
        <Link className='my-3 ' onClick={closeMenu} to='/about'>About Us</Link>
        <Link className='my-3 ' onClick={closeMenu} to='/profiles'>Profiles</Link>
        <Link className='my-3 ' onClick={closeMenu} to='/stories'>Stories</Link>
        <Link className='my-3 ' onClick={closeMenu} to='/membership'>Membership</Link>
      <div className="my-2">
        <Link to='/'><button  onClick={closeMenu} className='text-white bg-[navy] border border-sky-400 px-9 py-3 rounded-xl flex items-center'>Login</button></Link>
      </div>   
      </div>
      <div className="md:hidden" onClick={handleChange}>
 {isOpen ? <AiOutlineClose className='text-3xl cursor-pointer' /> : <BiMenuAltRight className='text-3xl cursor-pointer ease-in-out duration-1000' />}
      </div>
      </nav>
  )
}

export default Header