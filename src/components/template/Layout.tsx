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
        <main>
            <Header title={props.title} subtitle={props.subtitle}></Header>
            <div>
                <Sidebar></Sidebar>
                <Content>
                    {props.children}
                </Content>
            </div>
        </main>
    )
}