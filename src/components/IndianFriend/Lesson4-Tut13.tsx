import React, { useEffect, useState } from 'react'

type Props = {}

export const UseEffectBasic = (props: Props) => {
    const [user, setUser] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [count, setCount] = useState<number>(0)

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCount(count + 1);

        switch (name) {
            case 'user':
                setUser(value)
                break
            case 'address':
                setAddress(value)
                break
            default: return null
        }
    }

    useEffect(() => {
        setMessage(`called useEffect ${count} times`)
    }, [count]);

    return (
        <div><h2>USer Info</h2>
            <form>
                <label htmlFor='name'>Enter ur name</label>
                <br />
                <input className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' name='user' value={user} onChange={changeValue} />
                <br />
                <label htmlFor="address">Enter ur address</label>
                <input className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' name='address' value={address} onChange={changeValue} />

            </form>
            {message}
        </div>
    )
}