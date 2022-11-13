import React from 'react'

type ContainerProps = {
    styles: React.CSSProperties
    background_color?: string
}

function Container(props: ContainerProps) {
    return (
        <div style={props.styles}>
            XXX
        </div>
    )
}

export default Container