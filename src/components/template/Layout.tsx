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
        <main className='dark flex h-screen w-screen'>
            <Sidebar></Sidebar>
            <div className="flex flex-col bg-gray-200 dark:bg-gray-800 w-full p-7">
            <Header title={props.title} subtitle={props.subtitle}></Header>
                <Content>
                    {props.children}
                </Content>
            </div>
        </main>
    )
}