import SidebarItem from './SidebarItem'
import Logo from './Logo'
import {HomeIcon, NotificationsIcon, SetingsIcon} from '../icons/Index'

type SidebarProps = {
    children?: any
}

export default function Sidebar(props: SidebarProps){
    return (
        <aside className="p-3">
            <div className="h-20 w-25 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col justify-center items-center">
                <Logo></Logo>
            </div>
            <ul>
                <SidebarItem url='/' text="Home" icon={HomeIcon}/>
                <SidebarItem url='/setings' text="Setings" icon={SetingsIcon}/>
                <SidebarItem url='/notifications' text="Notifications" icon={NotificationsIcon}/>
            </ul>
        </aside>
    )
}