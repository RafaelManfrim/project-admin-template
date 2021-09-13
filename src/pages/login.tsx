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
        <div className="flex justify-center items-center h-screen">
            <div className="hidden sm:block w-2/3">
                <img src='https://images.unsplash.com/photo-1629670390087-fd9717429204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTUzMTE5MQ&ixlib=rb-1.2.1&q=80&w=1080' alt='Login screen random image' className='h-screen w-full object-cover'/>
            </div>
            <div className='w-full sm:w-1/3 m-20'>
                <div className="text-7xl font-bold text-center mb-20">
                    <span className="text-pink-500">A</span>
                    <span className='text-green-700'>R</span>
                </div>
                <h1 className='text-2xl font-bold mb-5'>
                    {mode === 'login' ? 'Sign in with your account' : 'Create your account'}
                </h1>
                <AuthInput type="email" label="Login:" value={email} onValueChange={setEmail} required/>
                <AuthInput type='password' label="Password:" value={password} onValueChange={setPassword} required/>
                <button onClick={submit} className='w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6'>
                    {mode === 'login' ? 'Login' : 'Register'}
                </button>

                <hr className='my-6 border-gray-300 w-full'/>

                <button onClick={submit} className='w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 mb-4'>
                    <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                </button>

                {mode === 'login' ? (
                    <p>
                        New? <a className='text-blue-500 hover:text-blue-700 cursor-pointer' onClick={() => setMode('register')}>Click here</a> to create your free account.
                    </p>
                ) : (
                    <p>
                        Already have an account? <a className='text-blue-500 hover:text-blue-700 cursor-pointer' onClick={() => setMode('login')}>Click here</a> to login.
                    </p>
                )}
            </div>
        </div>
    )
}