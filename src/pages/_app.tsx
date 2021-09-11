import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../data/context/AppContext'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<Component {...pageProps} />
		</AppProvider>
	)
}