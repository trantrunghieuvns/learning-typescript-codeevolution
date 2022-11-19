import axios from "axios"
import { useEffect, useState } from "react"

export const UseEffectFetchAxios = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://api.github.com/users').then((response) => {
            setUsers(response.data)
        }).catch((error) => {
            alert(error)

        })
    }, [])


    return users;
}