import Title from './Title'

type HeaderProps = {
    title: string
    subtitle: string
    children?: any
}

export default function Header(props: HeaderProps){
    return (
        <header className='flex'>
            <Title title={props.title} subtitle={props.subtitle} />
            <div className='flex flex-grow justify-end items-center'>{props.children}</div>
        </header>
    )
}