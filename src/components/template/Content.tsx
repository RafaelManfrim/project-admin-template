type ContentProps = {
    children?: any
}

export default function Content(props: ContentProps){
    return (
        <div className="flex flex-col mt-7 dark:text-gray-300">
            {props.children}
        </div>
    )
}