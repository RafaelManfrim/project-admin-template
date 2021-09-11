import SidebarItem from './SidebarItem'
import Logo from './Logo'
import {HomeIcon, LogoutIcon, NotificationsIcon, SetingsIcon} from '../icons/Index'

type SidebarProps = {
    children?: any
}

export default function Sidebar(props: SidebarProps){
    return (
        <aside className="flex flex-col">
            <div className="h-20 w-25 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col justify-center items-center">
                <Logo></Logo>
            </div>
            <ul className="flex-1">
                <SidebarItem url='/' text="Home" icon={HomeIcon}/>
                <SidebarItem url='/setings' text="Setings" icon={SetingsIcon}/>
                <SidebarItem url='/notifications' text="Notifications" icon={NotificationsIcon}/>
            </ul>
            <ul>
                <SidebarItem cls='text-red-400 hover:bg-red-600 hover:text-white' onClick={e => {}} text="Logout" icon={LogoutIcon}/>
            </ul>
        </aside>
    )
}