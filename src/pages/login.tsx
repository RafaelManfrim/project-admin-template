import { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function Login(){

    const [mode, setMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submit() {
        switch (mode) {
            case 'login':
                console.log('login')
                break
            case 'register':
                console.log('register')
                break
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className='w-1/3'>
                <h1 className='text-xl font-bold mb-5'>
                    {mode === 'login' ? 'Sign in with your account' : 'Create your account'}
                </h1>
                <AuthInput type="email" label="Login:" value={email} onValueChange={setEmail} required/>
                <AuthInput type='password' label="Password:" value={password} onValueChange={setPassword} required/>
                <button onClick={submit} className='w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6'>
                    {mode === 'login' ? 'Login' : 'Register'}
                </button>

                <hr className='my-6 border-gray-300 w-full'/>

                <button onClick={submit} className='w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3'>
                    <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                </button>
            </div>
        </div>
    )
}