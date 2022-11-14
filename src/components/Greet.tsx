import React, { useContext } from 'react'
import { ThemeContext } from '../state/useContext/ThemeContextExample';

type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

function Greet(props: GreetProps) {
    const { messageCount = 0 } = props
    const theme = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme.primary.main }}>
            {
                props.isLoggedIn ? ` ${props.name}!, welcome welcome ${props.messageCount}` : ('but u have to login first')
            }
        </div>
    )
}

export default Greet