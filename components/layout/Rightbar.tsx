import React from 'react'
import Premium from './Premium'
import Trends from './Trends'
import FollowBar from './FollowBar'


const Rightbar = () => {

 

  return (
    <div className='px-6 py-4 mr-8 hidden lg:flex flex-col gap-5'>
      <Premium />
      <Trends />
      <FollowBar />
    </div>
  )
}

export default Rightbar