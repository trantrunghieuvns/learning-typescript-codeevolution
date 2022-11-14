import React, { createContext } from 'react'
import { theme } from './theme'

type ThemeContextProviderProps = {
    children: React.ReactNode
}

//this one createContext(children), its const's name will be used as useContext(const's name) to take the value out throughout DOM 
export const ThemeContext = createContext(theme)


export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}
