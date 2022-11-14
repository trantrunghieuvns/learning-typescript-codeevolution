import { useContext } from "react"
import { UserContext } from "./UserContext"

// usually ts tells us to possibly return null, we can use this method on typ ({} as PropTypes):
// e.g: export const UserContext = createContext({} as UserContextType)
export const UserA = () => {
    const userContextResult = useContext(UserContext)
    const handleLogin = () => {
        userContextResult.setUser({
            name: 'hieu',
            email: 'sdasdasd@gmail.com'
        })
    }
    const handleLogout = () => {
        userContextResult.setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login v3</button>
            <button onClick={handleLogout}>Logout v3 </button>
            <div>User name is {userContextResult?.user?.name}</div>
            <div>User email is  {userContextResult?.user?.email}</div>
        </div>
    )
}

