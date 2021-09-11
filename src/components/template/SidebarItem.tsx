type SidebarItemProps = {
    url: string
    text: string
    icon: any
}

export default function SidebarItem(props: SidebarItemProps){
    return (
        <li className='py-4'>
            {props.icon}
        </li>
    )
}