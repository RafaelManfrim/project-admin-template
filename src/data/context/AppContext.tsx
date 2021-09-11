import { createContext, useState, useContext } from 'react'

type AppContextProps = {
    theme: 'dark' | ''
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
        setTheme(theme === '' ? 'dark' : '')
    }

    return (
        <AppContext.Provider value={{theme, switchTheme}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext