import React, { Key, useEffect, useState } from 'react'
import axios from 'axios';
type UsersProps = {
    node_id: Key | null | undefined;
    id: number,
    login: string,
    avatar_url: string
}

export const UseEffectFetchAxiosX = (props: UsersProps) => {
    useEffect(() => {
        axios.get('https://api.github.com/users').then((response) => {
            setUsers(response.data)
        }).catch((error) => {
            alert(error)

        })
    }, [])
    const [users, setUsers] = useState<UsersProps[]>([])

    return (
        <>
            <div className='grid grid-cols-8'>

                <h2>USER INFO </h2>
                {users.map((user, index) => {

                    return <div key={user.node_id + user.login}>
                        <div >{user.login}</div>
                        <div><img src={user.avatar_url} alt={user.login} /></div>
                    </div>
                })}
            </div>
        </>
    )
}