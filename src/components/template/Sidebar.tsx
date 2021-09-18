import SidebarItem from './SidebarItem'
import Logo from './Logo'
import {HomeIcon, LogoutIcon, NotificationsIcon, SetingsIcon} from '../icons/Index'
import useAuth from '../../data/hooks/useAuth'
import route from 'next/router'

type SidebarProps = {
    children?: any
}

export default function Sidebar(props: SidebarProps){

    const { logout } = useAuth()

    return (
        <aside className="flex flex-col dark:bg-gray-900 dark:text-gray-300">
            <div className="h-20 w-25 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col justify-center items-center">
                <Logo />
            </div>
            <ul className="flex-1">
                <SidebarItem url='/' text="Home" icon={HomeIcon}/>
                <SidebarItem url='/setings' text="Setings" icon={SetingsIcon}/>
                <SidebarItem url='/notifications' text="Notifications" icon={NotificationsIcon}/>
            </ul>
            <ul>
                <SidebarItem cls='text-red-400 hover:bg-red-600 hover:text-white' onClick={logout} text="Logout" icon={LogoutIcon}/>
            </ul>
        </aside>
    )
}