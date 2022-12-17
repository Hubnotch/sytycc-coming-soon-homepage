import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { ImFacebook2 } from 'react-icons/im'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { GrLocation } from 'react-icons/gr'
import { GoMail} from 'react-icons/go'
import { BsTelephone} from 'react-icons/bs'

function Footer() {
  return (
    <footer className='text-lg w-full flex flex-col px-9 py-5 bg-[#C7D1FB]'>
      <div className="my-4"><img src={logo} alt="sytycc logo" /></div>
      <div className="grid sm:grid-cols-2">
        <div className="">
          <p className='px-3 pr-3'>
          We are a fast-growing ecosystem of technology and business enthusiasts that meets the need of the rapidly changing digital world.
        </p>
        </div>
        <div className="grid px-4 sm:grid-cols-2">
        <div className="pl-3 ">
          <h3 className='text-orange-500 font-medium'>Company</h3>
          <p className='my-4'><Link to='/'>Home</Link></p>
          <p className='my-4'><Link to='/stories'>Stories</Link></p>
          <p className='my-4'><Link to='/membership'>Membership</Link></p>
          <p className='my-4'><Link to='/'>FAQ's</Link></p>
        </div>
        <div className="pl-3">
          <h3 className='text-orange-500 font-medium'>Contact Us</h3>
            <div className="grid grid-cols-1">
              <div className="">
                <div className='my-4 flex items-center'><span className='mr-2'><BsTelephone/> </span><span>+234 706 0748 361</span></div>
                <div className='my-4 flex items-center'><span className='mr-2'><GoMail/></span> <span>support@sytycc.com</span></div>
                <div className='my-4 flex items-center'><span className='mr-2'><GrLocation /></span> <span>Lekki Phase 2 Ext, Lagos State, Nigeria</span></div>
              </div>
          </div>

        </div>
        </div>
      </div>
      <div className="flex justify-center sm:justify-start">
        <Link className='mr-4 text-xl'><ImFacebook2/></Link>
        <Link className='mr-4 text-xl'><FaLinkedin/></Link>
        <Link className='mr-4 text-xl'><FaInstagram/></Link>
        <Link className='mr-4 text-xl'><GrTwitter/></Link>
      </div>
      <div className="flex items-center justify-center my-5">
       &copy; SYTYCC. All Right Reserved {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
