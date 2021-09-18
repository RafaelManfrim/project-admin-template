type TitleProps = {
    title: string
    subtitle: string
    children?: any
}

export default function Title(props: TitleProps){
    return (
        <div className="flex flex-col">
            <h1 className="font-black text-3xl text-gray-900 dark:text-gray-200">{props.title}</h1>
            <h2 className="font-light text-md text-gray-600 dark:text-gray-400">{props.subtitle}</h2>
        </div>
    )
}