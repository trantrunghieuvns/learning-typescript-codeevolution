import React, { useState } from 'react'

type Props = {}

const Login = (props: Props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button className='bg-slate-600' onClick={handleLogin}>Login</button>
            <br />
            <button className='bg-slate-400' onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}

export default Login