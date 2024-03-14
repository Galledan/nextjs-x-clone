import { useRouter } from 'next/router'
import React, { useState, useCallback } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { SlSettings } from 'react-icons/sl';

interface HeaderProps {
  label?: string;
  showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter()

  const handleBack = useCallback(() => {
    router.back();
  }, [router])

  const [activeTab, setActiveTab] = useState('following');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='border-b-[1px] border-neutral-800 p-5'>
      <div className='flex flex-row  justify-between'>
        <div className='flex flex-grow gap-4'>
          {showBackArrow && (
            <BiArrowBack
              onClick={handleBack}
              color='white'
              size={20}
              className='cursor-pointer hover:opacity-70 transition'
            />
          )}
          <div
            className={`flex justify-center items-center flex-grow cursor-pointer ${activeTab === 'forYou' ? 'font-bold' : ''}`}
            onClick={() => handleClick('forYou')}
          >
            <p className={`text-white ${activeTab === 'forYou' ? 'border-b-2 border-blue-500' : ''}`}>For you</p>
          </div>
          <div
            className={`flex justify-center items-center flex-grow cursor-pointer ${activeTab === 'following' ? 'font-bold' : ''}`}
            onClick={() => handleClick('following')}
          >
            <p className={`text-white ${activeTab === 'following' ? 'border-b-2 border-blue-500' : ''}`}>Following</p>
          </div>
        </div>
        <div className='relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer'>
          <SlSettings size={18} color='white' />
        </div>
      </div>
    </div>
  )
}

export default Header
