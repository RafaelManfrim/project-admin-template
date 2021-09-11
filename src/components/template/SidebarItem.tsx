import Link from "next/link"

type SidebarItemProps = {
    cls?: string
    url?: string
    onClick?: (e: any) => void
    text: string
    icon: any
}

export default function SidebarItem(props: SidebarItemProps){

    function renderLink(){
        return (
                <a className={`flex flex-col items-center justify-center p-3 py-5 text-gray-600 ${props.cls}`}>
                    {props.icon}
                    <span className='text-sm font-light '>{props.text}</span>
                </a>
        )
    }

    return (
        <li onClick={props.onClick} className={`hover:bg-gray-100 dark:hover:bg-gray-400 cursor-pointer ${props.cls}`}>
            {props.url ? (
                <Link href={props.url}>
                    {renderLink()}
                </Link>
            ) : (
                renderLink()
            )}
        </li>
    )
}