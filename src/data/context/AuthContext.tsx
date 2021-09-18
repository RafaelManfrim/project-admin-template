import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import User from '../../model/User'
import firebase from '../../services/firebase/firebase-config'

type AuthContextProps = {
    user?: User
    signInWithGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function normalizeUser(firebaseUser: firebase.User): Promise<User> {
    const token = await firebaseUser.getIdToken()
    return {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.displayName,
        token,
        provider: firebaseUser.providerData[0]?.providerId,
        imgUrl: firebaseUser.photoURL,
    }
}

function handleCookie(logged: boolean){
    if(logged){
        Cookies.set('admin-template-cod3r-auth', logged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-cod3r-auth')
    }
}

export function AuthContextProvider(props: any){

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    async function configSession(firebaseUser: any){
        if(firebaseUser?.email){
            const user = await normalizeUser(firebaseUser)
            setUser(user)
            handleCookie(true)
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            handleCookie(false)
            setLoading(false)
            return false
        }
    }

    async function signInWithGoogle(){
        const response = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider
        )

        configSession(response.user)
        route.push('/')
    }

    useEffect(() => {
        const cancel = firebase.auth().onIdTokenChanged(configSession)
        return () => cancel()
    }, [])

    return (
        <AuthContext.Provider value={{user: user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext