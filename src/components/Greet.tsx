import React from 'react'

type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

function Greet(props: GreetProps) {
    const { messageCount = 0 } = props
    return (
        <div >
            {
                props.isLoggedIn ? ` ${props.name}!, welcome welcome ${props.messageCount}` : ('but u have to login first')
            }
        </div>
    )
}

export default Greet