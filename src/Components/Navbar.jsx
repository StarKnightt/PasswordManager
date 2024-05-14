import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14 ">

        <div className="logo font-bold text-white text-2xl">
          <span className='text-green-400'> &lt;</span>
          Lock<span className='text-green-500'>  Magic/&gt;</span>
        </div>
        {/* <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bol' href="">Home</a>
            <a className='hover:font-bol' href="">Contact</a>
            <a className='hover:font-bol' href="">About</a>
          </li>
        </ul> */}
        <button className='flex items-center justify-center h-11 px-4 mx-2 rounded-full border border-gray-300 bg-transparent text-white hover:bg-gray-700 hover:border-gray-500'>
          <img className='w-6 h-6 mr-2 invert' src="/icons/github.svg" alt="GitHub Logo" />
          <span className='font-semibold'>GitHub</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar