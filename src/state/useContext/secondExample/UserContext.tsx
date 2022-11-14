import { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

export type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

// important ! to take the value, give it to all components 

// export const UserContext = createContext<UserContextType | null>(null)
export const UserContext = createContext({} as UserContextType)

// wrap provider in app.tsx then all components can access the value
export const UserContextProvider = ({ children }: UserContextProviderProps) => {

    const [user, setUser] = useState<AuthUser | null>(null);
    // double {{}} is destructuring method of the above line
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}