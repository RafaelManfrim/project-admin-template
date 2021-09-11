import SidebarItem from './SidebarItem'
import {HomeIcon, NotificationsIcon, SetingsIcon} from '../icons/Index'

type SidebarProps = {
    children?: any
}

export default function Sidebar(props: SidebarProps){
    return (
        <aside className="p-3">
            <ul>
                <SidebarItem url='/' text="Home" icon={HomeIcon}/>
                <SidebarItem url='/setings' text="Setings" icon={SetingsIcon}/>
                <SidebarItem url='/notifications' text="Notifications" icon={NotificationsIcon}/>
            </ul>
        </aside>
    )
}