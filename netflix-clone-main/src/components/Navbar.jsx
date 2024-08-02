import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2 z-[100] absolute w-full mx-2'>
        <h1 className='text-red-600 text-4xl uppercase py-2 px-2'>Netflix</h1>
        <div className='mx-4'>
            <button className='text-white mx-2'>Sign-in</button>
            <button className='bg-red-400 py-2 px-2 rounded '>Sign-up</button>
        </div>
    </div>
  )
}

export default Navbar
