import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

type LayoutProps = {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps){
    return (
        <main className='flex h-screen w-screen'>
            <Header title={props.title} subtitle={props.subtitle}></Header>
            <div className="flex flex-col bg-gray-300 dark:bg-gray-800 w-full p-7">
                <Sidebar></Sidebar>
                <Content>
                    {props.children}
                </Content>
            </div>
        </main>
    )
}