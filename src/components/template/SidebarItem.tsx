import Link from "next/link"

type SidebarItemProps = {
    url: string
    text: string
    icon: any
}

export default function SidebarItem(props: SidebarItemProps){
    return (
        <li className='py-3 hover:bg-gray-100'>
            <Link href={props.url}>
                <a className='flex flex-col items-center justify-center p-2'>
                    {props.icon}
                    <span className='text-sm font-light text-gray-600'>{props.text}</span>
                </a>
            </Link>
        </li>
    )
}