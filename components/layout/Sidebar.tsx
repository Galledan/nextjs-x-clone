import React from 'react'
import { BsBellFill, BsHouseFill, BsSearch, BsTwitterX } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import { BiLogOut } from 'react-icons/bi'
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import SidebarTweetButton from './SidebarTweetButton'
import useCurrentUser from '@/hooks/useCurrentUser'
import { signOut } from 'next-auth/react'

const Sidebar = () => {

    const { data: currentUser} = useCurrentUser();

    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Explore',
            href: '/',
            icon: BsSearch
        },
        {
            label: 'Messages',
            href: '/',
            icon: MdOutlineMailOutline
        },
        {
            label: 'Lists',
            href: '/',
            icon: IoMdListBox
        },
        {
            label: 'Premium',
            href: '/',
            icon: BsTwitterX
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill,
            auth: true,
            alert: currentUser?.hasNotification
        },
        {
            label: 'Profile',
            href: `/users/${currentUser?.id}`,
            icon: FaUser
        }
    ]

    return (
        <div className='col-span-1 h-full pr-4 md:pr-6'>
            <div className='flex flex-col itmes-end'>
                <div className='space-y-2 lg:w-[230px]'>
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem key={item.href} href={item.href} label={item.label} icon={item.icon} auth={item.auth} alert={item.alert}/>
                    ))}
                    {currentUser && (<SidebarItem onClick={() => signOut()} icon={BiLogOut} label='Logout'/>)}
                    
                    <SidebarTweetButton />
                </div>
            </div>

        </div>
    )
}

export default Sidebar