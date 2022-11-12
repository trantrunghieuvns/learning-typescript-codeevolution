import React from 'react'

type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}

function Greet(props: GreetProps) {
    return (
        <div >
            {
                props.isLoggedIn ? ` ${props.name}!, welcome welcome ${props.messageCount}` : ''


            }
        </div>
    )
}

export default Greet