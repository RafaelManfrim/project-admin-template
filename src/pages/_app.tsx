import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../data/context/AppContext'
import { AuthContextProvider } from '../data/context/AuthContext'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthContextProvider>
			<AppProvider>
				<Component {...pageProps} />
			</AppProvider>
		</AuthContextProvider>
	)
}