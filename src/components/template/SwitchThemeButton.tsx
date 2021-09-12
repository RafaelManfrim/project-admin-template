import {SunIcon, MoonIcon} from '../icons/Index'

type SwitchThemeButtonProps = {
    theme: string
    switchTheme: () => void
}

export default function SwitchThemeButton(props: SwitchThemeButtonProps){
    return props.theme === '' ? (
        <div onClick={props.switchTheme} className="bg-gradient-to-r from-gray-600 to-gray-900 w-14 h-8 hidden sm:flex items-center cursor-pointer p-1 rounded-full">
        <div className="flex items-center justify-end bg-white h-6 w-6 rounded-full text-gray-500">
            {MoonIcon}
        </div>
    </div>
    ) : (
        <div onClick={props.switchTheme} className="bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 h-8 hidden sm:flex items-center cursor-pointer p-1 rounded-full">
            <div className="flex items-center justify-center bg-white h-6 w-6 rounded-full ml-6 text-gray-500">
                {SunIcon}
            </div>
        </div>
    )
}