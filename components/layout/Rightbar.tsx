import React from 'react'

const Rightbar = () => {
  return (
    <div className='px-6 py-4 mr-8 hidden lg:flex flex-col gap-5'>
         <div className='flex min-w-96 flex-col gap-2 bg-neutral-800 rounded-xl p-4'>
            <h2 className='text-white text-2xl font-bold'>Subscribe to Premium</h2>
            <p className='text-white text-[18px]'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <div className='hidden py-2 max-w-32 lg:block rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition'>
        <p className='hidden lg:block text-center font-bold text-white text-[18px]'>Subscribe</p>
      </div>
          
        </div>
        <div className='bg-neutral-800 rounded-xl p-4'>
            <h2 className='text-white text-2xl font-bold'>Trends for you</h2>
        </div>
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