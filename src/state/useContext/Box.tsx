import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContextExample'

const Box = () => {
    const theme = useContext(ThemeContext)

    return (
        <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>
            Theme Conte-xt
        </div>
    )
}

export default Box