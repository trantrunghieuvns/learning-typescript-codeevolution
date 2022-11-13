import React, { useState } from 'react'
// type ButtonProps = {
//     handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => (
//         void
//     )
// } 

function Button() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    return (
        <div>
            <button onClick={() => {
                handleLogin()
            }} className='rounded-r-full bg-gray-600 text-yellow-200 p-4'>Click đi mà</button>
            <div className={`${isLoggedIn ? 'hidden' : 'flex'}`}>User is stoopid if we clicked</div>
        </div>
    )
}

export default Button
