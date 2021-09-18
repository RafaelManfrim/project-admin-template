//import route from 'next/router'
import { createContext, useState } from 'react'
import User from '../../model/User'
import firebase from '../../services/firebase/firebase-config'

type AuthContextProps = {
    user?: User
    signInWithGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

// async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
//     const token = await firebaseUser.getIdToken()
//     return {
//         uid: firebaseUser.uid,
//         email: firebaseUser.email,
//         name: firebaseUser.displayName,
//         token,
//         provider: firebaseUser.providerData[0]?.providerId,
//         imgUrl: firebaseUser.photoURL,
//     }
// }

export function AuthContextProvider(props: any){

    const [user, setUser] = useState<User>()

    async function signInWithGoogle(){
        //route.push('/')
    }

    return (
        <AuthContextProvider value={{user: user, signInWithGoogle}}>
            {props.children}
        </AuthContextProvider>
    )
}

export default AuthContext