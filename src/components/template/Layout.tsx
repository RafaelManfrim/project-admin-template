import Header from './Header'
import SwitchThemeButton from './SwitchThemeButton'
import Sidebar from './Sidebar'
import Content from './Content'
import useAppContext from '../../data/hooks/useAppContext'
import UserAvatar from './UserAvatar'
import ForceAuth from '../auth/ForceAuth'

type LayoutProps = {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps){

    const { theme, switchTheme } = useAppContext()

    return (
        <ForceAuth>
            <main className={`${theme} flex h-screen w-screen`}>
                <Sidebar />
                <div className="flex flex-col bg-gray-200 dark:bg-gray-800 w-full p-7">
                    <Header title={props.title} subtitle={props.subtitle}>
                        <SwitchThemeButton theme={theme} switchTheme={switchTheme} />
                        <UserAvatar/>
                    </Header>
                    <Content>
                        {props.children}
                    </Content>
                </div>
        </main>
        </ForceAuth>
    )
}