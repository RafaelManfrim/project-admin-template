import Title from './Title'

type HeaderProps = {
    title: string
    subtitle: string
    children?: any
}

export default function Header(props: HeaderProps){
    return (
        <header>
            <Title title={props.title} subtitle={props.subtitle} />
        </header>
    )
}