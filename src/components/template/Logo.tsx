export default function Logo(){
    return (
        <div className="h-14 w-14 bg-white flex flex-col justify-center items-center rounded-full">
            <div className="h-3 w-3 rounded-full bg-red-600"/>
            <div className='flex'>
                <div className="h-3 w-3 rounded-full bg-yellow-600"/>
                <div className="h-3 w-3 rounded-full bg-green-600"/>
            </div>
        </div>
    )
}