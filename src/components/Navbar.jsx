import React from 'react'
import logo from '../assets/logo/exp-logo.png';

const Navbar = () => {
  return (
    <div className='px-2 py-3 bg-white'>
      <div className='ml-5 flex items-center justify-between sm:justify-start'>
        <img src={logo} alt="logo" width={40} />
          <span className='font-bold text-lg ml-3'>Budget Tracker</span>
      </div>
    </div>
  )
}

export default Navbar