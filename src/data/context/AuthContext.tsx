import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import User from '../../model/User'
import firebase from '../../services/firebase/firebase-config'

type AuthContextProps = {
    user?: User | null
    signInWithGoogle?: () => Promise<void>
    register?: (email: string, password: string) => Promise<void>
    login?: (email: string, password: string) => Promise<void>
    logout?: () => Promise<void>
    loading?: boolean
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

function handleCookie(logged: any){
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

    async function register(email: string, password: string){
        try {
            setLoading(true)
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
    
            await configSession(response.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function login(email: string, password: string){
        try {
            setLoading(true)
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
    
            await configSession(response.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function signInWithGoogle(){
        try {
            setLoading(true)
            const response = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider
            )
    
            await configSession(response.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logout(){
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await configSession(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-template-cod3r-auth')){
            const cancel = firebase.auth().onIdTokenChanged(configSession)
            return () => cancel()
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{user, loading, signInWithGoogle, register, login, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext