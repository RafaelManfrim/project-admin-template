import route from 'next/router'
import { createContext, useState } from 'react'
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

export function AuthContextProvider(props: any){

    const [user, setUser] = useState<User>(null)

    async function signInWithGoogle(){
        const response = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider
        )

        if(response.user?.email){
            const normalizedUser = await normalizeUser(response.user)
            setUser(normalizedUser)
            route.push('/')
        }
    }

    return (
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext