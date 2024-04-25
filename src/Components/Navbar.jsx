import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200 flex justify-between items-center px-4 h-25'>
      <div className="logo font-bold">PassOP</div>
      <ul>
        <li className='flex gap-4'>
          <a className='hover:font-bol' href="">Home</a>
          <a className='hover:font-bol' href="">Contact</a>
          <a className='hover:font-bol' href="">About</a>
        </li>
      </ul>
        Navbar
        </nav>
  )
}

export default Navbar

   