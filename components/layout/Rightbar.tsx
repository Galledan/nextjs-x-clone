import React from 'react'
import Premium from './Premium'
import Trends from './Trends'

const Rightbar = () => {
  return (
    <div className='px-6 py-4 mr-8 hidden lg:flex flex-col gap-5'>
      <Premium />
      <Trends />
      <div className='bg-neutral-800 rounded-xl p-4'>
        <h2 className='text-white text-xl font-semibold'>Who to follow</h2>
        <div className='flex flex-col gap-6 mt-4'>
          {/* USERLİST */}
        </div>
      </div>
    </div>
  )
}

export default Rightbar