import Link from "next/link"
import useAuth from "../../data/hooks/useAuth"

export default function UserAvatar(){

    const { user } = useAuth()

    return (
        <Link href='/profile' passHref>
            <img className='w-12 h-12 ml-2 rounded-full cursor-pointer' src={user?.imgUrl ?? '/avatar.svg'} alt="User avatar" />
        </Link>
    )
}