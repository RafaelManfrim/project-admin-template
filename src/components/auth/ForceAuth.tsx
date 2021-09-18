import route from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import loadingGif from '../../../public/loading.gif'
import useAuth from '../../data/hooks/useAuth'

export default function ForceAuth(props: any) {

    const { user, loading } = useAuth()

    function renderContent(){
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML = {{
                            __html: `
                                if(!document.cookie?.includes("admin-template-cod3r-auth")){
                                    window.location.href = "/login"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }

    function renderLoading(){
        return (
            <div className="flex justify-center items-center h-screen">
                <Image src={loadingGif} alt=''/>
            </div>
        )
    }

    if(!loading && user?.email){
        return renderContent()
    } else if(loading){
        return renderLoading()
    } else {
        route.push('/login')
        return null
    }
}