import React, { useState } from 'react'

type AuthUser = {
    name?: string | null
    email: string
}

const Login = (props: AuthUser) => {
    // user might be null, put <AuthUser | null> to cope w this situation
    const [user, setUser] = useState<AuthUser | null>(null)
    // type assertion also helps lying typescript that useState<AuthUser>({} as AuthUser) null {} is a part of AuthUser 100%

    const handleLogin = () => {
        setUser({
            name: 'sucker',
            email: 'Buookc@gmail.com',
        }
        )
    }

    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button className='bg-slate-600' onClick={handleLogin}>Login user</button>
            <br />
            <button className='bg-slate-400' onClick={handleLogout}>Logout user</button>
            <div>{!user ? 'that User' : 'User'} {user?.name} {user ? 'has email' : ''} {user?.email} is {user ? 'logged in' : 'logged out'}</div>

        </div>
    )
}

export default Login