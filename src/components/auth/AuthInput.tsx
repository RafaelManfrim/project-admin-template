type AuthInputProps = {
    label: string
    value: any
    required?: true | undefined
    type: 'text' | 'password' | 'email'
    onValueChange: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps){
    return (
        <div className="flex flex-col">
            <label className="mb-1">{props.label}</label>
            <input className='py-3 px-4 rounded-lg bg-indigo-100 mb-3' type={props.type} value={props.value} onChange={e => props.onValueChange?.(e.target.value)} required={props.required}/>
        </div>
    )
}