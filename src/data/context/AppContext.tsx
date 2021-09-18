import { createContext, useState, useEffect, useContext } from 'react'

type AppContextProps = {
    theme?: 'dark' | ''
    switchTheme: () => void
}

const AppContext = createContext<AppContextProps>({
    theme: '', 
    switchTheme: () => {}
})

type AppProviderProps = {
    children: any
}

export function AppProvider(props: AppProviderProps){

    const useAppContext = useContext(AppContext)
    const [theme, setTheme] = useState<any>('')

    function switchTheme(){
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const themeSaved = localStorage.getItem('theme')
        setTheme(themeSaved)
    }, [])

    return (
        <AppContext.Provider value={{theme, switchTheme}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext