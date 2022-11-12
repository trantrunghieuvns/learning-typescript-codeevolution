import React from 'react'

type PersonX = {
    name: {
        first: string
        last: string
    }
}

function Person(props: PersonX) {
    return (
        <div>
            {`Person: ${props.name.first + ' ' + props.name.last}`}
        </div>
    )
}

export default Person