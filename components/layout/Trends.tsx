import React from 'react'

const Trends = () => {

 const trendList = [
    {
        type: "Sports",
        trend: "Fenerbahce",
        posts: "9.900"
    },
    {
        type: "Sports",
        trend: "Fenerbahce",
        posts: "9.900"
    },
    {
        type: "Sports",
        trend: "Fenerbahce",
        posts: "9.900"
    },
    {
        type: "Sports",
        trend: "Fenerbahce",
        posts: "9.900"
    },

 ]



  return (
    <div className='bg-neutral-800 rounded-xl'>
    <h2 className='text-white text-2xl font-bold p-4'>Trends for you</h2>
    {trendList.map((item) => (
        <div className='p-4 cursor-pointer hover:bg-gray-800' key={item.trend}>
            <p className=' text-gray-400 text-[14px]'>{item.type} - Trending</p>
            <h2 className='text-white text-[16px] font-semibold'>{item.trend}</h2>
            <p className='text-gray-400 text-[14px]'>{item.posts} posts</p>
        </div>
    ))}
  </div>
  )
}

export default Trends